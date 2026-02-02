/**
 * PädoPsych Advisor - Main Application
 * Comprehensive Clinical Assessment Tool for Child & Adolescent Psychiatry
 * Dynamic form generation from CLINICAL_KNOWLEDGE base
 */

// ============================================================
// GLOBAL VARIABLES
// ============================================================

let caseData = {};
let analysisResult = null;
let autosaveInterval = null;

const STORAGE_KEYS = {
    CURRENT_CASE: 'padopsych_current_case_v2',
    CASE_ARCHIVE: 'padopsych_case_archive_v2',
    DARK_MODE: 'padopsych_dark_mode'
};

// Section order for form generation
const SECTION_ORDER = [
    'identifikation',
    'aktuelleSymptomatik',
    'entwicklungsanamnese',
    'medizinischeAnamnese',
    'familienanamnese',
    'psychosozialesUmfeld',
    'traumaACEs',
    'risikoSchutz',
    'psychopathBefund',
    'symptomChecklisten'
];

const SECTION_ICONS = {
    identifikation: '👤',
    aktuelleSymptomatik: '🎯',
    entwicklungsanamnese: '📈',
    medizinischeAnamnese: '🏥',
    familienanamnese: '👨‍👩‍👧‍👦',
    psychosozialesUmfeld: '🌍',
    traumaACEs: '⚠️',
    risikoSchutz: '🛡️',
    psychopathBefund: '🧠',
    symptomChecklisten: '📋'
};

// ============================================================
// INITIALIZATION
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    try {
        initializeCaseData();
        generateDynamicForm();
        initTabNavigation();
        initToastContainer();
        initKeyboardShortcuts();
        initSavedCasesDropdown();
        loadCurrentCase();
        startAutosave();
        initDarkMode();
        console.log('PädoPsych Advisor v2 initialized');
    } catch (e) {
        console.error('Initialization error:', e);
        showToast('Fehler bei der Initialisierung: ' + e.message, 'error');
    }
});

/**
 * Initialize empty caseData structure from CLINICAL_KNOWLEDGE
 */
function initializeCaseData() {
    caseData = { _meta: { createdAt: new Date().toISOString() } };

    if (typeof CLINICAL_KNOWLEDGE === 'undefined') {
        console.warn('CLINICAL_KNOWLEDGE not loaded yet');
        return;
    }

    SECTION_ORDER.forEach(sectionKey => {
        const section = CLINICAL_KNOWLEDGE[sectionKey];
        if (!section) return;

        caseData[sectionKey] = {};

        // Handle direct fields
        if (section.fields) {
            Object.keys(section.fields).forEach(fieldKey => {
                caseData[sectionKey][fieldKey] = '';
            });
        }

        // Handle subsections
        if (section.subsections) {
            Object.keys(section.subsections).forEach(subKey => {
                const sub = section.subsections[subKey];
                caseData[sectionKey][subKey] = {};

                // Checkboxes
                if (sub.checkboxes) {
                    sub.checkboxes.forEach(cb => {
                        caseData[sectionKey][subKey][cb.id] = false;
                    });
                }

                // Textfield
                if (sub.textfield) {
                    caseData[sectionKey][subKey][sub.textfield.id] = '';
                }

                // Fields within subsection
                if (sub.fields) {
                    Object.keys(sub.fields).forEach(fieldKey => {
                        caseData[sectionKey][subKey][fieldKey] = '';
                    });
                }
            });
        }
    });
}

// ============================================================
// DYNAMIC FORM GENERATION
// ============================================================

/**
 * Generate the entire form dynamically from CLINICAL_KNOWLEDGE
 */
function generateDynamicForm() {
    const formContainer = document.getElementById('dynamic-form-container');
    if (!formContainer) {
        console.error('dynamic-form-container not found');
        return;
    }

    if (typeof CLINICAL_KNOWLEDGE === 'undefined') {
        formContainer.innerHTML = '<div class="error-box">Wissensbasis nicht geladen</div>';
        return;
    }

    let html = '';

    SECTION_ORDER.forEach((sectionKey, index) => {
        const section = CLINICAL_KNOWLEDGE[sectionKey];
        if (!section) return;

        const icon = SECTION_ICONS[sectionKey] || '📌';
        const sectionLetter = String.fromCharCode(65 + index); // A, B, C, ...

        html += `
            <div class="form-section anamnese-section" id="section-${sectionKey}">
                <div class="section-header" onclick="toggleSection('${sectionKey}')">
                    <span class="section-icon">${icon}</span>
                    <h3 class="form-section-title">${sectionLetter}. ${section.label}</h3>
                    <span class="section-toggle">▼</span>
                </div>
                <div class="section-content" id="content-${sectionKey}">
        `;

        // Direct fields
        if (section.fields) {
            html += '<div class="fields-grid">';
            html += generateFieldsHTML(section.fields, sectionKey);
            html += '</div>';
        }

        // Subsections
        if (section.subsections) {
            Object.keys(section.subsections).forEach(subKey => {
                const sub = section.subsections[subKey];
                html += generateSubsectionHTML(sub, sectionKey, subKey);
            });
        }

        html += `
                </div>
            </div>
        `;
    });

    // Add submit button
    html += `
        <div class="form-actions">
            <button type="button" class="btn btn-secondary" onclick="resetForm()">
                Zurücksetzen
            </button>
            <button type="submit" class="btn btn-primary btn-large">
                🔍 Analyse starten
            </button>
        </div>
    `;

    formContainer.innerHTML = html;

    // Add event listeners
    formContainer.querySelectorAll('input, select, textarea').forEach(el => {
        el.addEventListener('change', updateCaseDataFromForm);
        el.addEventListener('input', debounce(updateCaseDataFromForm, 300));
    });
}

/**
 * Generate HTML for fields
 */
function generateFieldsHTML(fields, sectionKey, subKey = null) {
    let html = '';

    Object.keys(fields).forEach(fieldKey => {
        const field = fields[fieldKey];
        const dataPath = subKey ? `${sectionKey}.${subKey}.${fieldKey}` : `${sectionKey}.${fieldKey}`;
        const inputId = dataPath.replace(/\./g, '_');

        html += `<div class="form-group">`;
        html += `<label for="${inputId}">${field.label}</label>`;

        switch (field.type) {
            case 'text':
                html += `<input type="text" id="${inputId}" data-path="${dataPath}" class="form-input">`;
                break;
            case 'number':
                html += `<input type="number" id="${inputId}" data-path="${dataPath}"
                         min="${field.min || ''}" max="${field.max || ''}" class="form-input">`;
                break;
            case 'textarea':
                html += `<textarea id="${inputId}" data-path="${dataPath}" rows="3" class="form-textarea"></textarea>`;
                break;
            case 'select':
                html += `<select id="${inputId}" data-path="${dataPath}" class="form-select">`;
                html += `<option value="">Bitte wählen...</option>`;
                field.options.forEach(opt => {
                    html += `<option value="${opt}">${opt}</option>`;
                });
                html += `</select>`;
                break;
            case 'range':
                html += `
                    <div class="range-container">
                        <input type="range" id="${inputId}" data-path="${dataPath}"
                               min="${field.min || 0}" max="${field.max || 10}" value="0"
                               oninput="updateRangeValue('${inputId}')">
                        <span class="range-value" id="${inputId}_value">0</span>
                    </div>
                `;
                break;
        }

        html += `</div>`;
    });

    return html;
}

/**
 * Generate HTML for a subsection
 */
function generateSubsectionHTML(sub, sectionKey, subKey) {
    const subId = `${sectionKey}_${subKey}`;
    let checkedCount = 0;

    let html = `
        <div class="subsection accordion" id="accordion-${subId}">
            <button type="button" class="accordion-header" data-accordion="${subId}" onclick="toggleAccordion('${subId}')">
                <span class="accordion-icon">+</span>
                ${sub.label}
                <span class="accordion-count" data-count="${subId}">0</span>
            </button>
            <div class="accordion-content" id="${subId}">
    `;

    // Fields within subsection
    if (sub.fields) {
        html += '<div class="fields-grid">';
        html += generateFieldsHTML(sub.fields, sectionKey, subKey);
        html += '</div>';
    }

    // Checkboxes
    if (sub.checkboxes && sub.checkboxes.length > 0) {
        html += '<div class="checkbox-grid">';
        sub.checkboxes.forEach(cb => {
            const dataPath = `${sectionKey}.${subKey}.${cb.id}`;
            const inputId = dataPath.replace(/\./g, '_');
            const classes = ['checkbox-option'];

            if (cb.positive) classes.push('positive-factor');
            if (cb.severity === 'critical') classes.push('critical-risk');
            if (cb.severity === 'high') classes.push('high-risk');

            html += `
                <label class="${classes.join(' ')}">
                    <input type="checkbox" id="${inputId}" data-path="${dataPath}"
                           data-accordion="${subId}"
                           ${cb.positive ? 'data-positive="true"' : ''}
                           ${cb.severity ? `data-severity="${cb.severity}"` : ''}
                           ${cb.weight ? `data-weight="${cb.weight}"` : ''}>
                    <span>${cb.label}</span>
                </label>
            `;
        });
        html += '</div>';
    }

    // Textfield
    if (sub.textfield) {
        const tf = sub.textfield;
        const dataPath = `${sectionKey}.${subKey}.${tf.id}`;
        const inputId = dataPath.replace(/\./g, '_');

        html += `
            <div class="form-group subsection-textfield">
                <label for="${inputId}">${tf.label}</label>
                <textarea id="${inputId}" data-path="${dataPath}" rows="2" class="form-textarea"></textarea>
            </div>
        `;
    }

    html += `
            </div>
        </div>
    `;

    return html;
}

/**
 * Toggle section visibility
 */
function toggleSection(sectionKey) {
    const content = document.getElementById(`content-${sectionKey}`);
    const section = document.getElementById(`section-${sectionKey}`);
    const toggle = section.querySelector('.section-toggle');

    if (content.classList.contains('collapsed')) {
        content.classList.remove('collapsed');
        toggle.textContent = '▼';
    } else {
        content.classList.add('collapsed');
        toggle.textContent = '►';
    }
}

/**
 * Toggle accordion
 */
function toggleAccordion(accordionId) {
    const content = document.getElementById(accordionId);
    const header = document.querySelector(`[data-accordion="${accordionId}"]`);
    const icon = header.querySelector('.accordion-icon');

    if (content.classList.contains('open')) {
        content.classList.remove('open');
        header.classList.remove('active');
        icon.textContent = '+';
    } else {
        content.classList.add('open');
        header.classList.add('active');
        icon.textContent = '−';
    }
}

/**
 * Update range display value
 */
function updateRangeValue(inputId) {
    const input = document.getElementById(inputId);
    const display = document.getElementById(`${inputId}_value`);
    if (input && display) {
        display.textContent = input.value;
    }
}

/**
 * Update accordion checkbox count
 */
function updateAccordionCount(accordionId) {
    const content = document.getElementById(accordionId);
    if (!content) return;

    const checked = content.querySelectorAll('input[type="checkbox"]:checked').length;
    const badge = document.querySelector(`[data-count="${accordionId}"]`);

    if (badge) {
        badge.textContent = checked;
        badge.classList.toggle('has-items', checked > 0);
    }
}

// ============================================================
// DATA HANDLING
// ============================================================

/**
 * Update caseData from form inputs
 */
function updateCaseDataFromForm() {
    const form = document.getElementById('case-form');
    if (!form) return;

    form.querySelectorAll('[data-path]').forEach(el => {
        const path = el.dataset.path;
        const parts = path.split('.');

        let value;
        if (el.type === 'checkbox') {
            value = el.checked;
            // Update accordion count
            if (el.dataset.accordion) {
                updateAccordionCount(el.dataset.accordion);
            }
        } else if (el.type === 'number' || el.type === 'range') {
            value = el.value ? parseFloat(el.value) : '';
        } else {
            value = el.value;
        }

        // Set nested value
        setNestedValue(caseData, parts, value);
    });
}

/**
 * Set a nested value in an object
 */
function setNestedValue(obj, parts, value) {
    let current = obj;
    for (let i = 0; i < parts.length - 1; i++) {
        if (!current[parts[i]]) {
            current[parts[i]] = {};
        }
        current = current[parts[i]];
    }
    current[parts[parts.length - 1]] = value;
}

/**
 * Get a nested value from an object
 */
function getNestedValue(obj, parts) {
    let current = obj;
    for (const part of parts) {
        if (current === undefined || current === null) return undefined;
        current = current[part];
    }
    return current;
}

/**
 * Restore form from caseData
 */
function restoreFormFromCaseData() {
    const form = document.getElementById('case-form');
    if (!form) return;

    form.querySelectorAll('[data-path]').forEach(el => {
        const path = el.dataset.path;
        const parts = path.split('.');
        const value = getNestedValue(caseData, parts);

        if (value !== undefined && value !== null) {
            if (el.type === 'checkbox') {
                el.checked = value === true;
            } else {
                el.value = value;
            }

            // Update range display
            if (el.type === 'range') {
                updateRangeValue(el.id);
            }
        }
    });

    // Update all accordion counts
    document.querySelectorAll('.accordion-content').forEach(content => {
        updateAccordionCount(content.id);
    });
}

// ============================================================
// TAB NAVIGATION
// ============================================================

function initTabNavigation() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.dataset.tab;

            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));

            button.classList.add('active');
            document.getElementById(targetTab)?.classList.add('active');
        });
    });
}

function switchToTab(tabId) {
    const tabButton = document.querySelector(`[data-tab="${tabId}"]`);
    if (tabButton) {
        tabButton.click();
    }
}

// ============================================================
// ANALYSIS
// ============================================================

/**
 * Start analysis
 */
function startAnalysis() {
    updateCaseDataFromForm();

    // Basic validation
    const alter = caseData.identifikation?.alter;
    if (!alter) {
        showToast('Bitte geben Sie das Alter an', 'error');
        return;
    }

    const submitBtn = document.querySelector('.btn-primary.btn-large');
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner"></span> Analysiere...';
    }

    setTimeout(() => {
        try {
            if (typeof ClinicalEngine === 'undefined') {
                throw new Error('ClinicalEngine nicht geladen');
            }

            analysisResult = ClinicalEngine.analyze(caseData);
            console.log('Analyseergebnis:', analysisResult);

            renderAnalysis(analysisResult);
            renderBedienungsanleitung(analysisResult);

            saveCurrentCase();
            showToast('Analyse abgeschlossen', 'success');
            switchToTab('analyse');

        } catch (error) {
            console.error('Analyse-Fehler:', error);
            showToast('Fehler bei der Analyse: ' + error.message, 'error');
        } finally {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = '🔍 Analyse starten';
            }
        }
    }, 500);
}

// ============================================================
// TAB 2: ANALYSIS RENDERING
// ============================================================

/**
 * Render complete analysis
 */
function renderAnalysis(result) {
    if (!result) return;

    // ACE Score
    renderACEScore(result.aceScore);

    // Risk Profile
    renderRisikoprofil(result.risikoprofil);

    // Hypotheses
    renderHypothesen(result.hypothesen);

    // Multi-Model Synthesis
    renderSynthese(result.synthese);

    // Interventions
    renderInterventionen(result.interventionen);
}

/**
 * Render ACE Score
 */
function renderACEScore(aceScore) {
    const container = document.getElementById('ace-container');
    if (!container || !aceScore) return;

    const riskLevel = aceScore.score >= 4 ? 'high' : aceScore.score >= 2 ? 'medium' : 'low';
    const riskClass = riskLevel === 'high' ? 'danger' : riskLevel === 'medium' ? 'warning' : 'success';

    container.innerHTML = `
        <div class="ace-card ${riskClass}">
            <div class="ace-score-display">
                <span class="ace-number">${aceScore.score}</span>
                <span class="ace-label">/10 ACEs</span>
            </div>
            <div class="ace-content">
                <h4>Adverse Childhood Experiences</h4>
                <p>${aceScore.interpretation}</p>
                ${aceScore.items.length > 0 ? `
                    <div class="ace-items">
                        <strong>Identifizierte ACEs:</strong>
                        <ul>
                            ${aceScore.items.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
            </div>
        </div>
    `;
}

/**
 * Render Risk Profile
 */
function renderRisikoprofil(profil) {
    const container = document.getElementById('risiko-container');
    if (!container || !profil) return;

    container.innerHTML = `
        <div class="risiko-grid">
            ${profil.akut.length > 0 ? `
                <div class="risiko-section critical">
                    <h4>🚨 Akute Risiken</h4>
                    <ul>
                        ${profil.akut.map(r => `<li>${r}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
            ${profil.chronisch.length > 0 ? `
                <div class="risiko-section warning">
                    <h4>⚠️ Chronische Risiken</h4>
                    <ul>
                        ${profil.chronisch.map(r => `<li>${r}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
            <div class="risiko-section success">
                <h4>🛡️ Schutzfaktoren</h4>
                <ul>
                    ${profil.schutz.length > 0
                        ? profil.schutz.map(r => `<li>${r}</li>`).join('')
                        : '<li>Keine identifiziert</li>'}
                </ul>
            </div>
        </div>
    `;
}

/**
 * Render Hypotheses
 */
function renderHypothesen(hypothesen) {
    const container = document.getElementById('hypothesen-container');
    if (!container) return;

    if (!hypothesen || hypothesen.length === 0) {
        container.innerHTML = '<div class="placeholder-card">Keine Hypothesen generiert</div>';
        return;
    }

    container.innerHTML = hypothesen.map((hypo, i) => `
        <div class="hypothesis-card ${i === 0 ? 'primary' : ''}" style="--card-color: ${hypo.farbe || '#6366f1'}">
            <div class="hypothesis-header" onclick="toggleHypothesisDetails('hypo-${i}')">
                <div class="hypothesis-rank">${i + 1}</div>
                <div class="hypothesis-info">
                    <h4>${hypo.name}</h4>
                    <span class="hypothesis-icd">${hypo.icd10 || ''}</span>
                </div>
                <div class="hypothesis-score">
                    <span class="confidence-value">${hypo.konfidenz}%</span>
                    <div class="confidence-bar">
                        <div class="confidence-fill" style="width: ${hypo.konfidenz}%"></div>
                    </div>
                </div>
                <span class="expand-icon">▼</span>
            </div>
            <div class="hypothesis-details" id="hypo-${i}">
                <div class="interpretation-box">
                    <h5>Interpretation</h5>
                    <p>${hypo.interpretation || 'Keine zusätzliche Interpretation'}</p>
                </div>
                ${hypo.evidenz && hypo.evidenz.length > 0 ? `
                    <div class="evidence-box">
                        <h5>Hinweisende Symptome</h5>
                        <ul>${hypo.evidenz.map(e => `<li class="evidence-item positive">✓ ${e}</li>`).join('')}</ul>
                    </div>
                ` : ''}
            </div>
        </div>
    `).join('');
}

function toggleHypothesisDetails(id) {
    const details = document.getElementById(id);
    const card = details?.parentElement;
    const icon = card?.querySelector('.expand-icon');

    if (details?.classList.contains('open')) {
        details.classList.remove('open');
        if (icon) icon.textContent = '▼';
    } else {
        details?.classList.add('open');
        if (icon) icon.textContent = '▲';
    }
}

/**
 * Render Multi-Model Synthesis
 */
function renderSynthese(synthese) {
    const container = document.getElementById('synthese-container');
    if (!container || !synthese) return;

    const models = [
        { key: 'biopsychosozial', icon: '🧬', title: 'Bio-Psycho-Soziales Modell' },
        { key: 'systemisch', icon: '👨‍👩‍👧', title: 'Systemische Perspektive' },
        { key: 'trauma', icon: '💔', title: 'Trauma-Perspektive' },
        { key: 'bindung', icon: '🤝', title: 'Bindungs-Perspektive' },
        { key: 'entwicklung', icon: '📈', title: 'Entwicklungs-Perspektive' },
        { key: 'oekologisch', icon: '🌍', title: 'Ökologisches Modell' },
        { key: 'resilienz', icon: '💪', title: 'Resilienz-Profil' }
    ];

    let html = '<div class="synthese-tabs">';
    models.forEach((m, i) => {
        html += `
            <button type="button" class="synthese-tab ${i === 0 ? 'active' : ''}"
                    onclick="switchSyntheseTab('${m.key}')">
                ${m.icon} ${m.title}
            </button>
        `;
    });
    html += '</div><div class="synthese-content">';

    models.forEach((m, i) => {
        const data = synthese[m.key];
        html += `
            <div class="synthese-panel ${i === 0 ? 'active' : ''}" id="synthese-${m.key}">
                ${renderSyntheseContent(m.key, data)}
            </div>
        `;
    });

    html += '</div>';
    container.innerHTML = html;
}

function switchSyntheseTab(key) {
    document.querySelectorAll('.synthese-tab').forEach(tab => {
        tab.classList.toggle('active', tab.textContent.includes(key) ||
            tab.getAttribute('onclick').includes(key));
    });
    document.querySelectorAll('.synthese-panel').forEach(panel => {
        panel.classList.toggle('active', panel.id === `synthese-${key}`);
    });
    // Fix active state
    document.querySelectorAll('.synthese-tab').forEach(tab => {
        const onclick = tab.getAttribute('onclick');
        tab.classList.toggle('active', onclick && onclick.includes(`'${key}'`));
    });
}

function renderSyntheseContent(key, data) {
    if (!data) return '<p>Keine Daten verfügbar</p>';

    if (key === 'biopsychosozial') {
        return `
            <div class="bps-model">
                <div class="bps-section bio">
                    <h4>🧬 Biologisch</h4>
                    <ul>${(data.biologisch || []).map(f => `<li>${f}</li>`).join('') || '<li>-</li>'}</ul>
                </div>
                <div class="bps-section psycho">
                    <h4>🧠 Psychologisch</h4>
                    <ul>${(data.psychologisch || []).map(f => `<li>${f}</li>`).join('') || '<li>-</li>'}</ul>
                </div>
                <div class="bps-section sozial">
                    <h4>👥 Sozial</h4>
                    <ul>${(data.sozial || []).map(f => `<li>${f}</li>`).join('') || '<li>-</li>'}</ul>
                </div>
            </div>
            ${data.zusammenfassung ? `<div class="bps-summary"><p>${data.zusammenfassung}</p></div>` : ''}
        `;
    }

    if (key === 'systemisch') {
        return `
            <div class="systemisch-content">
                ${data.familienstruktur ? `<div class="sys-section"><h4>Familienstruktur</h4><p>${data.familienstruktur}</p></div>` : ''}
                ${data.dynamiken && data.dynamiken.length > 0 ? `
                    <div class="sys-section"><h4>Familiendynamiken</h4>
                    <ul>${data.dynamiken.map(d => `<li>${d}</li>`).join('')}</ul></div>
                ` : ''}
                ${data.muster && data.muster.length > 0 ? `
                    <div class="sys-section"><h4>Interaktionsmuster</h4>
                    <ul>${data.muster.map(m => `<li>${m}</li>`).join('')}</ul></div>
                ` : ''}
                ${data.hypothese ? `<div class="sys-hypothesis"><strong>Systemische Hypothese:</strong> ${data.hypothese}</div>` : ''}
            </div>
        `;
    }

    if (key === 'trauma') {
        return `
            <div class="trauma-content">
                ${data.aceScore !== undefined ? `<div class="trauma-ace">ACE-Score: ${data.aceScore}/10</div>` : ''}
                ${data.traumaTypen && data.traumaTypen.length > 0 ? `
                    <div class="trauma-section"><h4>Trauma-Typen</h4>
                    <ul>${data.traumaTypen.map(t => `<li>${t}</li>`).join('')}</ul></div>
                ` : ''}
                ${data.reaktionsmuster ? `<div class="trauma-section"><h4>4F-Reaktionsmuster</h4><p>${data.reaktionsmuster}</p></div>` : ''}
                ${data.folgen && data.folgen.length > 0 ? `
                    <div class="trauma-section"><h4>Beobachtete Traumafolgen</h4>
                    <ul>${data.folgen.map(f => `<li>${f}</li>`).join('')}</ul></div>
                ` : ''}
            </div>
        `;
    }

    if (key === 'bindung') {
        return `
            <div class="bindung-content">
                ${data.muster ? `<div class="bindung-pattern"><h4>Bindungsmuster</h4><p>${data.muster}</p></div>` : ''}
                ${data.beschreibung ? `<p>${data.beschreibung}</p>` : ''}
                ${data.hinweise && data.hinweise.length > 0 ? `
                    <div class="bindung-section"><h4>Hinweise</h4>
                    <ul>${data.hinweise.map(h => `<li>${h}</li>`).join('')}</ul></div>
                ` : ''}
                ${data.implikationen ? `<div class="bindung-impl"><strong>Therapeutische Implikationen:</strong> ${data.implikationen}</div>` : ''}
            </div>
        `;
    }

    if (key === 'entwicklung') {
        return `
            <div class="entwicklung-content">
                ${data.entwicklungsstand ? `<div class="entw-section"><h4>Entwicklungsstand</h4><p>${data.entwicklungsstand}</p></div>` : ''}
                ${data.entwicklungsaufgaben && data.entwicklungsaufgaben.length > 0 ? `
                    <div class="entw-section"><h4>Aktuelle Entwicklungsaufgaben</h4>
                    <ul>${data.entwicklungsaufgaben.map(a => `<li>${a}</li>`).join('')}</ul></div>
                ` : ''}
                ${data.auffälligkeiten && data.auffälligkeiten.length > 0 ? `
                    <div class="entw-section warning"><h4>Entwicklungsauffälligkeiten</h4>
                    <ul>${data.auffälligkeiten.map(a => `<li>${a}</li>`).join('')}</ul></div>
                ` : ''}
                ${data.stärken && data.stärken.length > 0 ? `
                    <div class="entw-section success"><h4>Entwicklungsstärken</h4>
                    <ul>${data.stärken.map(s => `<li>${s}</li>`).join('')}</ul></div>
                ` : ''}
            </div>
        `;
    }

    if (key === 'oekologisch') {
        return `
            <div class="oeko-content">
                <div class="oeko-model">
                    ${data.mikrosystem ? `<div class="oeko-level mikro"><h4>Mikrosystem</h4><p>${data.mikrosystem}</p></div>` : ''}
                    ${data.mesosystem ? `<div class="oeko-level meso"><h4>Mesosystem</h4><p>${data.mesosystem}</p></div>` : ''}
                    ${data.exosystem ? `<div class="oeko-level exo"><h4>Exosystem</h4><p>${data.exosystem}</p></div>` : ''}
                    ${data.makrosystem ? `<div class="oeko-level makro"><h4>Makrosystem</h4><p>${data.makrosystem}</p></div>` : ''}
                </div>
            </div>
        `;
    }

    if (key === 'resilienz') {
        return `
            <div class="resilienz-content">
                ${data.individuell && data.individuell.length > 0 ? `
                    <div class="res-section"><h4>💪 Individuelle Ressourcen</h4>
                    <ul>${data.individuell.map(r => `<li>${r}</li>`).join('')}</ul></div>
                ` : ''}
                ${data.familiär && data.familiär.length > 0 ? `
                    <div class="res-section"><h4>👨‍👩‍👧 Familiäre Ressourcen</h4>
                    <ul>${data.familiär.map(r => `<li>${r}</li>`).join('')}</ul></div>
                ` : ''}
                ${data.sozial && data.sozial.length > 0 ? `
                    <div class="res-section"><h4>🌍 Soziale Ressourcen</h4>
                    <ul>${data.sozial.map(r => `<li>${r}</li>`).join('')}</ul></div>
                ` : ''}
                ${data.gesamteinschätzung ? `<div class="res-summary"><strong>Gesamteinschätzung:</strong> ${data.gesamteinschätzung}</div>` : ''}
            </div>
        `;
    }

    return '<p>Modell-Daten nicht verfügbar</p>';
}

/**
 * Render Interventions
 */
function renderInterventionen(interventionen) {
    const container = document.getElementById('interventionen-container');
    if (!container || !interventionen) return;

    const timeframes = [
        { key: 'sofort', icon: '🚨', title: 'Sofortmaßnahmen', class: 'critical' },
        { key: 'kurzfristig', icon: '📅', title: 'Kurzfristig (Wochen)', class: 'warning' },
        { key: 'mittelfristig', icon: '📆', title: 'Mittelfristig (Monate)', class: 'info' },
        { key: 'langfristig', icon: '🎯', title: 'Langfristig', class: 'success' }
    ];

    let html = '<div class="interventionen-grid">';

    timeframes.forEach(tf => {
        const items = interventionen[tf.key] || [];
        if (items.length > 0) {
            html += `
                <div class="intervention-section ${tf.class}">
                    <h4>${tf.icon} ${tf.title}</h4>
                    <ul>
                        ${items.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            `;
        }
    });

    html += '</div>';
    container.innerHTML = html;
}

// ============================================================
// TAB 3: BEDIENUNGSANLEITUNG
// ============================================================

function renderBedienungsanleitung(result) {
    if (!result || !result.bedienungsanleitung) return;

    const anleitung = result.bedienungsanleitung;

    renderGrundhaltung(anleitung.grundhaltung);
    renderAmpelsystem(anleitung.ampelsystem);
    renderSituationsrezepte(anleitung.situationsrezepte);
    renderDosAndDonts(anleitung.dosAndDonts);
    renderNotfallplan(anleitung.notfallplan);
    renderBeziehungstipps(anleitung.beziehungstipps);
    renderElterninfo(anleitung.elterninfo);
}

function renderGrundhaltung(grundhaltung) {
    const container = document.getElementById('grundhaltung-container');
    if (!container || !grundhaltung) return;

    container.innerHTML = `
        <div class="grundhaltung-card">
            <div class="grundhaltung-icon">${grundhaltung.icon || '💡'}</div>
            <div class="grundhaltung-content">
                <h3 class="grundhaltung-leitsatz">"${grundhaltung.leitsatz}"</h3>
                <p class="grundhaltung-erklaerung">${grundhaltung.erklaerung}</p>
                <div class="mantra-box">
                    <span class="mantra-label">Mantra:</span>
                    <p class="mantra-text">"${grundhaltung.mantra}"</p>
                </div>
            </div>
        </div>
    `;
}

function renderAmpelsystem(ampel) {
    const container = document.getElementById('ampel-container');
    if (!container || !ampel) return;

    container.innerHTML = `
        <div class="ampel-grid">
            <div class="ampel-section gruen">
                <div class="ampel-header">
                    <span class="ampel-light green"></span>
                    <h4>Grün - Stabil</h4>
                </div>
                <ul class="ampel-list">
                    ${(ampel.gruen || []).map(s => `<li><span>${s.icon || '✓'}</span> ${s.signal}</li>`).join('')}
                </ul>
            </div>
            <div class="ampel-section gelb">
                <div class="ampel-header">
                    <span class="ampel-light yellow"></span>
                    <h4>Gelb - Vorsicht</h4>
                </div>
                <ul class="ampel-list">
                    ${(ampel.gelb || []).map(s => `<li><span>${s.icon || '⚠'}</span> ${s.signal}</li>`).join('')}
                </ul>
            </div>
            <div class="ampel-section rot">
                <div class="ampel-header">
                    <span class="ampel-light red"></span>
                    <h4>Rot - Krise</h4>
                </div>
                <ul class="ampel-list">
                    ${(ampel.rot || []).map(s => `<li><span>${s.icon || '🚨'}</span> ${s.signal}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
}

function renderSituationsrezepte(rezepte) {
    const container = document.getElementById('rezepte-container');
    if (!container || !rezepte) return;

    container.innerHTML = (rezepte || []).map((r, i) => `
        <div class="rezept-accordion">
            <button type="button" class="rezept-header" onclick="toggleRezept('rezept-${i}')">
                <span class="rezept-icon">${r.icon || '📋'}</span>
                <span class="rezept-situation">${r.situation}</span>
                <span class="rezept-expand">+</span>
            </button>
            <div class="rezept-content" id="rezept-${i}">
                <ul class="rezept-schritte">
                    ${(r.reaktion || []).map(schritt => {
                        const isNeg = schritt.startsWith('NICHT:');
                        const isPos = schritt.startsWith('STATTDESSEN:');
                        return `<li class="${isNeg ? 'dont' : isPos ? 'do' : ''}">${schritt}</li>`;
                    }).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}

function toggleRezept(id) {
    const content = document.getElementById(id);
    const header = content?.previousElementSibling;
    const icon = header?.querySelector('.rezept-expand');

    if (content?.classList.contains('open')) {
        content.classList.remove('open');
        if (icon) icon.textContent = '+';
    } else {
        content?.classList.add('open');
        if (icon) icon.textContent = '−';
    }
}

function renderDosAndDonts(dosAndDonts) {
    const container = document.getElementById('dos-donts-container');
    if (!container || !dosAndDonts) return;

    container.innerHTML = `
        <div class="dos-donts-grid">
            <div class="dos-section">
                <h4>✓ Tu das</h4>
                <ul class="dos-list">
                    ${(dosAndDonts.tuDas || []).map(item => `
                        <li><span>${item.icon || '✓'}</span> ${item.tipp}</li>
                    `).join('')}
                </ul>
            </div>
            <div class="donts-section">
                <h4>✗ Lass das</h4>
                <ul class="donts-list">
                    ${(dosAndDonts.lassDas || []).map(item => `
                        <li><span>${item.icon || '✗'}</span> ${item.tipp}</li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
}

function renderNotfallplan(notfall) {
    const container = document.getElementById('notfall-container');
    if (!container || !notfall) return;

    container.innerHTML = `
        <div class="notfall-card">
            <div class="notfall-header">
                <span class="notfall-icon">${notfall.icon || '🚨'}</span>
                <h3>${notfall.titel || 'Notfallplan'}</h3>
            </div>
            <ol class="notfall-schritte">
                ${(notfall.schritte || []).map(s => `
                    <li><span>${s.icon || '→'}</span> ${s.text}</li>
                `).join('')}
            </ol>
            ${notfall.wichtig ? `<div class="notfall-wichtig"><strong>⚠️ Wichtig:</strong> ${notfall.wichtig}</div>` : ''}
            ${notfall.nachDerKrise && notfall.nachDerKrise.length > 0 ? `
                <div class="nach-krise">
                    <h4>Nach der Krise:</h4>
                    <ul>${notfall.nachDerKrise.map(p => `<li>${p}</li>`).join('')}</ul>
                </div>
            ` : ''}
        </div>
    `;
}

function renderBeziehungstipps(tipps) {
    const container = document.getElementById('beziehung-container');
    if (!container || !tipps) return;

    container.innerHTML = `
        <div class="beziehung-grid">
            ${(tipps || []).map(t => `
                <div class="beziehung-card">
                    <div class="beziehung-icon">${t.icon || '💡'}</div>
                    <h4>${t.tipp}</h4>
                    <p>${t.beschreibung}</p>
                </div>
            `).join('')}
        </div>
    `;
}

function renderElterninfo(info) {
    const container = document.getElementById('eltern-container');
    if (!container || !info) return;

    container.innerHTML = `
        <div class="eltern-card">
            <div class="eltern-header">
                <span class="eltern-icon">${info.icon || '👨‍👩‍👧'}</span>
                <h3>${info.headline || 'Information für Eltern'}</h3>
            </div>
            <div class="eltern-section">
                <h4>Kernbotschaften</h4>
                <ul>${(info.kernbotschaften || []).map(k => `<li>${k}</li>`).join('')}</ul>
            </div>
            ${info.spezifisch && info.spezifisch.length > 0 ? `
                <div class="eltern-section spezifisch">
                    <h4>Spezifische Informationen</h4>
                    <ul>${info.spezifisch.map(s => `<li>${s}</li>`).join('')}</ul>
                </div>
            ` : ''}
            ${info.ressourcen && info.ressourcen.length > 0 ? `
                <div class="eltern-section ressourcen">
                    <h4>Hilfreiche Anlaufstellen</h4>
                    <ul>${info.ressourcen.map(r => `<li>📌 ${r}</li>`).join('')}</ul>
                </div>
            ` : ''}
        </div>
    `;
}

// ============================================================
// UTILITIES
// ============================================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function initToastContainer() {
    if (!document.getElementById('toast-container')) {
        const container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }
}

function showToast(message, type = 'info', duration = 3000) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    const icons = { success: '✓', error: '✗', info: 'ℹ', warning: '⚠' };
    toast.innerHTML = `
        <span class="toast-icon">${icons[type] || icons.info}</span>
        <span class="toast-message">${message}</span>
    `;

    container.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

// ============================================================
// STORAGE
// ============================================================

function saveCurrentCase() {
    const savedCase = {
        id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
        name: caseData.identifikation?.alter ? `Kind ${caseData.identifikation.alter}J` : 'Unbenannt',
        savedAt: new Date().toISOString(),
        caseData: JSON.parse(JSON.stringify(caseData)),
        analysis: analysisResult ? JSON.parse(JSON.stringify(analysisResult)) : null
    };

    localStorage.setItem(STORAGE_KEYS.CURRENT_CASE, JSON.stringify(savedCase));

    if (analysisResult) {
        addToArchive(savedCase);
    }
}

function addToArchive(savedCase) {
    let archive = getArchive();
    const existingIndex = archive.findIndex(c => c.id === savedCase.id);

    if (existingIndex >= 0) {
        archive[existingIndex] = savedCase;
    } else {
        archive.unshift(savedCase);
    }

    archive = archive.slice(0, 10);
    localStorage.setItem(STORAGE_KEYS.CASE_ARCHIVE, JSON.stringify(archive));
    updateSavedCasesDropdown();
}

function getArchive() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEYS.CASE_ARCHIVE)) || [];
    } catch (e) {
        return [];
    }
}

function loadCurrentCase() {
    try {
        const saved = localStorage.getItem(STORAGE_KEYS.CURRENT_CASE);
        if (saved) {
            const savedCase = JSON.parse(saved);
            if (savedCase.caseData) {
                caseData = savedCase.caseData;
                restoreFormFromCaseData();
            }
            if (savedCase.analysis) {
                analysisResult = savedCase.analysis;
            }
        }
    } catch (e) {
        console.error('Error loading case:', e);
    }
}

function loadCaseFromArchive(caseId) {
    const archive = getArchive();
    const savedCase = archive.find(c => c.id === caseId);

    if (savedCase) {
        caseData = savedCase.caseData;
        analysisResult = savedCase.analysis;
        restoreFormFromCaseData();

        if (analysisResult) {
            renderAnalysis(analysisResult);
            renderBedienungsanleitung(analysisResult);
        }

        showToast('Fall geladen', 'success');
        closeSavedCasesDropdown();
    }
}

function startAutosave() {
    if (autosaveInterval) clearInterval(autosaveInterval);

    autosaveInterval = setInterval(() => {
        if (Object.keys(caseData).length > 1) {
            const savedCase = {
                id: 'current',
                name: 'Aktueller Fall',
                savedAt: new Date().toISOString(),
                caseData: JSON.parse(JSON.stringify(caseData)),
                analysis: analysisResult
            };
            localStorage.setItem(STORAGE_KEYS.CURRENT_CASE, JSON.stringify(savedCase));
        }
    }, 30000);
}

function newCase() {
    if (Object.keys(caseData).length > 1) {
        if (!confirm('Neuen Fall beginnen? Nicht gespeicherte Änderungen gehen verloren.')) {
            return;
        }
    }

    const form = document.getElementById('case-form');
    if (form) form.reset();

    initializeCaseData();
    analysisResult = null;

    document.querySelectorAll('.accordion-count').forEach(badge => {
        badge.textContent = '0';
        badge.classList.remove('has-items');
    });

    resetPlaceholders();
    localStorage.removeItem(STORAGE_KEYS.CURRENT_CASE);
    switchToTab('fallbeschreibung');
    showToast('Neuer Fall gestartet', 'info');
}

function resetForm() {
    if (confirm('Formular wirklich zurücksetzen?')) {
        const form = document.getElementById('case-form');
        if (form) form.reset();
        initializeCaseData();

        document.querySelectorAll('.accordion-count').forEach(badge => {
            badge.textContent = '0';
            badge.classList.remove('has-items');
        });

        showToast('Formular zurückgesetzt', 'info');
    }
}

function resetPlaceholders() {
    const placeholder = '<div class="placeholder-card"><p>Bitte füllen Sie die Anamnese aus und starten Sie die Analyse.</p></div>';

    ['ace-container', 'risiko-container', 'hypothesen-container', 'synthese-container',
     'interventionen-container', 'grundhaltung-container', 'ampel-container',
     'rezepte-container', 'dos-donts-container', 'notfall-container',
     'beziehung-container', 'eltern-container'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = placeholder;
    });
}

function initSavedCasesDropdown() {
    updateSavedCasesDropdown();
}

function updateSavedCasesDropdown() {
    const dropdown = document.getElementById('saved-cases-list');
    if (!dropdown) return;

    const archive = getArchive();

    if (archive.length === 0) {
        dropdown.innerHTML = '<div class="dropdown-empty">Keine gespeicherten Fälle</div>';
        return;
    }

    dropdown.innerHTML = archive.map(c => {
        const date = new Date(c.savedAt);
        const dateStr = date.toLocaleDateString('de-DE', {
            day: '2-digit', month: '2-digit', year: '2-digit',
            hour: '2-digit', minute: '2-digit'
        });
        return `
            <button type="button" class="dropdown-item" onclick="loadCaseFromArchive('${c.id}')">
                <span class="case-name">${c.name || 'Unbenannt'}</span>
                <span class="case-date">${dateStr}</span>
            </button>
        `;
    }).join('');
}

function toggleSavedCasesDropdown() {
    document.getElementById('saved-cases-dropdown')?.classList.toggle('open');
}

function closeSavedCasesDropdown() {
    document.getElementById('saved-cases-dropdown')?.classList.remove('open');
}

// ============================================================
// KEYBOARD SHORTCUTS
// ============================================================

function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            if (document.getElementById('fallbeschreibung')?.classList.contains('active')) {
                e.preventDefault();
                startAnalysis();
            }
        }

        if ((e.ctrlKey || e.metaKey) && e.key === 's') {
            e.preventDefault();
            saveCurrentCase();
            showToast('Fall gespeichert', 'success');
        }

        if (!e.target.matches('input, textarea, select')) {
            if (e.key === '1') switchToTab('fallbeschreibung');
            if (e.key === '2') switchToTab('analyse');
            if (e.key === '3') switchToTab('bedienungsanleitung');
        }

        if (e.key === 'Escape') {
            closeSavedCasesDropdown();
        }
    });

    document.addEventListener('click', (e) => {
        const dropdown = document.getElementById('saved-cases-dropdown');
        if (dropdown?.classList.contains('open') && !dropdown.contains(e.target)) {
            closeSavedCasesDropdown();
        }
    });
}

// ============================================================
// DARK MODE
// ============================================================

function initDarkMode() {
    if (localStorage.getItem(STORAGE_KEYS.DARK_MODE) === 'true') {
        document.body.classList.add('dark-mode');
        updateDarkModeButton(true);
    }
}

function toggleDarkMode() {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem(STORAGE_KEYS.DARK_MODE, isDark.toString());
    updateDarkModeButton(isDark);
}

function updateDarkModeButton(isDark) {
    const btn = document.getElementById('dark-mode-btn');
    if (btn) {
        btn.innerHTML = isDark ? '☀️' : '🌙';
        btn.title = isDark ? 'Light Mode' : 'Dark Mode';
    }
}

// ============================================================
// EXPORT
// ============================================================

function exportAsText() {
    if (!analysisResult) {
        showToast('Bitte führen Sie zuerst eine Analyse durch', 'error');
        return;
    }

    const date = new Date().toLocaleDateString('de-DE');
    let text = `
═══════════════════════════════════════════════════════════════
            PädoPsych Advisor - Fallanalyse
═══════════════════════════════════════════════════════════════

Datum: ${date}
VERTRAULICH - Nur für autorisiertes Fachpersonal

───────────────────────────────────────────────────────────────
ACE-SCORE: ${analysisResult.aceScore?.score || 0}/10
───────────────────────────────────────────────────────────────

${analysisResult.aceScore?.interpretation || ''}

───────────────────────────────────────────────────────────────
DIAGNOSTISCHE HYPOTHESEN
───────────────────────────────────────────────────────────────

${(analysisResult.hypothesen || []).map((h, i) => `${i + 1}. ${h.name} (${h.konfidenz}%) - ${h.icd10 || ''}`).join('\n')}

───────────────────────────────────────────────────────────────
INTERVENTIONEN
───────────────────────────────────────────────────────────────

SOFORT:
${(analysisResult.interventionen?.sofort || []).map(i => `  - ${i}`).join('\n') || '  - Keine'}

KURZFRISTIG:
${(analysisResult.interventionen?.kurzfristig || []).map(i => `  - ${i}`).join('\n') || '  - Keine'}

MITTELFRISTIG:
${(analysisResult.interventionen?.mittelfristig || []).map(i => `  - ${i}`).join('\n') || '  - Keine'}

═══════════════════════════════════════════════════════════════
Erstellt mit PädoPsych Advisor
Dieses Tool ersetzt keine professionelle Diagnostik
═══════════════════════════════════════════════════════════════
`;

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `PadoPsych_Analyse_${date.replace(/\./g, '-')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showToast('Export heruntergeladen', 'success');
}

function printBedienungsanleitung() {
    if (!analysisResult) {
        showToast('Bitte führen Sie zuerst eine Analyse durch', 'error');
        return;
    }
    window.print();
}
