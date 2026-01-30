/**
 * PädoPsych Advisor - Main Application
 * Tab-Navigation, Akkordeons, Formular-Steuerung, Speicherung und Export
 */

// ============================================================
// GLOBALE VARIABLEN
// ============================================================

// Globales Objekt für Falldaten
let caseData = {
    grunddaten: {
        name: '',
        alter: '',
        geschlecht: ''
    },
    hauptproblem: '',
    symptome: [],
    kontext: [],
    freitext: ''
};

// Autosave-Intervall ID
let autosaveInterval = null;

// LocalStorage Keys
const STORAGE_KEYS = {
    CURRENT_CASE: 'padopsych_current_case',
    CASE_ARCHIVE: 'padopsych_case_archive',
    DARK_MODE: 'padopsych_dark_mode'
};

// ============================================================
// INITIALISIERUNG
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    initTabNavigation();
    initAccordions();
    initCheckboxCounters();
    initFormHandler();
    initToastContainer();
    initKeyboardShortcuts();
    initSavedCasesDropdown();
    loadCurrentCase();
    startAutosave();
    initDarkMode();
});

/**
 * Initialisiert die Tab-Navigation
 */
function initTabNavigation() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.dataset.tab;

            // Alle Tabs deaktivieren
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));

            // Ausgewählten Tab aktivieren
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

/**
 * Wechselt zu einem bestimmten Tab
 * @param {string} tabId - ID des Ziel-Tabs
 */
function switchToTab(tabId) {
    const tabButton = document.querySelector(`[data-tab="${tabId}"]`);
    if (tabButton) {
        tabButton.click();
    }
}

/**
 * Initialisiert die Akkordeon-Funktionalität
 */
function initAccordions() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionId = header.dataset.accordion;
            const content = document.getElementById(accordionId);
            const icon = header.querySelector('.accordion-icon');

            // Toggle active state
            const isActive = header.classList.contains('active');

            if (isActive) {
                // Schließen
                header.classList.remove('active');
                content.classList.remove('open');
                icon.textContent = '+';
            } else {
                // Öffnen
                header.classList.add('active');
                content.classList.add('open');
                icon.textContent = '−';
            }
        });
    });
}

/**
 * Initialisiert die Checkbox-Zähler für Akkordeons
 */
function initCheckboxCounters() {
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(accordion => {
        const header = accordion.querySelector('.accordion-header');
        const accordionId = header.dataset.accordion;
        const content = accordion.querySelector('.accordion-content');
        const checkboxes = content.querySelectorAll('input[type="checkbox"]');
        const countBadge = header.querySelector('.accordion-count');

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                updateAccordionCount(accordionId);
                updateCaseData();
            });
        });
    });
}

/**
 * Aktualisiert den Zähler eines Akkordeons
 * @param {string} accordionId - ID des Akkordeons
 */
function updateAccordionCount(accordionId) {
    const content = document.getElementById(accordionId);
    const checkedCount = content.querySelectorAll('input[type="checkbox"]:checked').length;
    const countBadge = document.querySelector(`[data-count="${accordionId}"]`);

    if (countBadge) {
        countBadge.textContent = checkedCount;
        if (checkedCount > 0) {
            countBadge.classList.add('has-items');
        } else {
            countBadge.classList.remove('has-items');
        }
    }
}

/**
 * Initialisiert den Formular-Handler
 */
function initFormHandler() {
    const form = document.getElementById('case-form');

    if (form) {
        // Bei Änderungen Daten aktualisieren
        form.addEventListener('change', updateCaseData);

        // Bei Submit Analyse starten
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            updateCaseData();
            startAnalysis();
        });
    }
}

/**
 * Aktualisiert das caseData-Objekt mit allen Formulareingaben
 */
function updateCaseData() {
    const form = document.getElementById('case-form');
    if (!form) return;

    // Grunddaten
    caseData.grunddaten.name = form.querySelector('#name')?.value || '';
    caseData.grunddaten.alter = form.querySelector('#alter')?.value || '';
    caseData.grunddaten.geschlecht = form.querySelector('#geschlecht')?.value || '';

    // Hauptproblem (Radio)
    const hauptproblemRadio = form.querySelector('input[name="hauptproblem"]:checked');
    caseData.hauptproblem = hauptproblemRadio?.value || '';

    // Symptome (Checkboxen)
    const symptomCheckboxes = form.querySelectorAll('input[name="symptome[]"]:checked');
    caseData.symptome = Array.from(symptomCheckboxes).map(cb => cb.value);

    // Kontext (Checkboxen)
    const kontextCheckboxes = form.querySelectorAll('input[name="kontext[]"]:checked');
    caseData.kontext = Array.from(kontextCheckboxes).map(cb => cb.value);

    // Freitext
    caseData.freitext = form.querySelector('#freitext')?.value || '';

    // Debug-Ausgabe (kann später entfernt werden)
    console.log('Case Data updated:', caseData);
}

/**
 * Globale Variable für Analyseergebnis
 */
let analysisResult = null;

/**
 * Startet die Analyse
 */
function startAnalysis() {
    // Alle Fehlermarkierungen zurücksetzen
    clearValidationErrors();

    // Validierung
    const errors = validateCaseData();
    if (errors.length > 0) {
        errors.forEach(err => {
            highlightErrorField(err.fieldId);
        });
        showValidationError(errors[0].message);
        scrollToFirstError();
        return;
    }

    console.log('Analyse wird gestartet mit:', caseData);

    // Button in Ladezustand versetzen
    const submitBtn = document.querySelector('.btn-primary.btn-large');
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner"></span> Analysiere...';
    }

    // Fake-Delay für bessere UX (fühlt sich wertiger an)
    setTimeout(() => {
        // Analyse durchführen
        analysisResult = ClinicalEngine.analyze(caseData);
        console.log('Analyseergebnis:', analysisResult);

        // Ergebnisse rendern
        renderAnalysis(analysisResult);
        renderBedienungsanleitung(analysisResult);

        // Button zurücksetzen
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Analyse starten';
        }

        // Fall automatisch speichern
        saveCurrentCase();

        // Toast zeigen
        showToast('Analyse abgeschlossen', 'success');

        // Zum Analyse-Tab wechseln
        switchToTab('analyse');
    }, 800);
}

/**
 * Validiert die Falldaten
 * @returns {Array} Array von Fehlerobjekten
 */
function validateCaseData() {
    const errors = [];

    if (!caseData.grunddaten.alter) {
        errors.push({
            fieldId: 'alter',
            message: 'Bitte geben Sie das Alter des Kindes an.'
        });
    }

    if (!caseData.hauptproblem) {
        errors.push({
            fieldId: 'hauptproblem-section',
            message: 'Bitte wählen Sie ein Hauptproblem aus.'
        });
    }

    if (caseData.symptome.length < 1) {
        errors.push({
            fieldId: 'symptom-section',
            message: 'Bitte wählen Sie mindestens ein Symptom aus.'
        });
    }

    return errors;
}

/**
 * Markiert ein Feld als fehlerhaft
 * @param {string} fieldId - ID des Feldes
 */
function highlightErrorField(fieldId) {
    const field = document.getElementById(fieldId);
    if (field) {
        field.classList.add('validation-error');
    }

    // Spezialfall für Sektionen
    const section = document.querySelector(`[data-section="${fieldId}"]`);
    if (section) {
        section.classList.add('validation-error');
    }
}

/**
 * Entfernt alle Fehlermarkierungen
 */
function clearValidationErrors() {
    document.querySelectorAll('.validation-error').forEach(el => {
        el.classList.remove('validation-error');
    });
}

/**
 * Scrollt zum ersten Fehlerfeld
 */
function scrollToFirstError() {
    const firstError = document.querySelector('.validation-error');
    if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

/**
 * Zeigt einen Validierungsfehler an
 * @param {string} message - Fehlermeldung
 * @param {string} fieldId - ID des fehlenden Feldes (optional)
 */
function showValidationError(message, fieldId) {
    showToast(message, 'error');

    // Visuelles Feedback für fehlendes Feld
    if (fieldId) {
        highlightErrorField(fieldId);
    }
}

// ============================================================
// TAB 2: ANALYSE - Rendering-Funktionen
// ============================================================

/**
 * Rendert die komplette Analyse-Seite
 * @param {Object} result - Das Analyseergebnis
 */
function renderAnalysis(result) {
    renderSummary(result.modell);
    renderHypotheses(result.hypothesen);
    renderDifferential(result.differential);
    renderBiopsychosozialModel(result.modell);
}

/**
 * Rendert die Zusammenfassung
 * @param {Object} modell - Das klinische Modell
 */
function renderSummary(modell) {
    const container = document.getElementById('summary-container');
    if (!container) return;

    container.innerHTML = `
        <div class="summary-box">
            <p class="summary-text">${modell.zusammenfassung}</p>
            <button class="btn btn-secondary btn-small copy-btn" onclick="copySummary()">
                <span>📋</span> Kopieren
            </button>
        </div>
    `;
}

/**
 * Kopiert die Zusammenfassung in die Zwischenablage
 */
function copySummary() {
    if (analysisResult?.modell?.zusammenfassung) {
        navigator.clipboard.writeText(analysisResult.modell.zusammenfassung)
            .then(() => {
                const btn = document.querySelector('.copy-btn');
                if (btn) {
                    btn.innerHTML = '<span>✓</span> Kopiert!';
                    setTimeout(() => {
                        btn.innerHTML = '<span>📋</span> Kopieren';
                    }, 2000);
                }
                showToast('In Zwischenablage kopiert!', 'success');
            })
            .catch(err => {
                console.error('Kopieren fehlgeschlagen:', err);
                showToast('Kopieren fehlgeschlagen', 'error');
            });
    }
}

/**
 * Rendert die Hypothesen-Karten
 * @param {Array} hypothesen - Array der Hypothesen
 */
function renderHypotheses(hypothesen) {
    const container = document.getElementById('hypotheses-container');
    if (!container) return;

    if (hypothesen.length === 0) {
        container.innerHTML = `
            <div class="placeholder-card">
                <p>Keine Hypothesen konnten generiert werden. Bitte überprüfen Sie die Eingaben.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = hypothesen.map((hypo, index) => `
        <div class="hypothesis-card ${index === 0 ? 'primary' : ''}" style="--card-color: ${hypo.farbe}">
            <div class="hypothesis-header" onclick="toggleHypothesisDetails('hypo-${index}')">
                <div class="hypothesis-rank">${index + 1}</div>
                <div class="hypothesis-info">
                    <h4 class="hypothesis-name">${hypo.vollname || hypo.name}</h4>
                    <span class="hypothesis-icd">${hypo.icd10 || ''}</span>
                </div>
                <div class="hypothesis-score">
                    <span class="confidence-value">${hypo.konfidenz}%</span>
                    <div class="confidence-bar">
                        <div class="confidence-fill" style="width: ${hypo.konfidenz}%; background-color: ${getConfidenceColor(hypo.konfidenz)}"></div>
                    </div>
                </div>
                <span class="expand-icon">▼</span>
            </div>
            <div class="hypothesis-details" id="hypo-${index}">
                <div class="interpretation-box">
                    <h5>Interpretation</h5>
                    <p>${hypo.interpretation}</p>
                </div>
                ${hypo.evidenz.length > 0 ? `
                    <div class="evidence-box">
                        <h5>Hinweisende Symptome</h5>
                        <ul class="evidence-list">
                            ${hypo.evidenz.map(e => `<li class="evidence-item positive">✓ ${e}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
                ${hypo.gegenEvidenz.length > 0 ? `
                    <div class="counter-evidence-box">
                        <h5>Gegenargumente</h5>
                        <ul class="evidence-list">
                            ${hypo.gegenEvidenz.map(e => `<li class="evidence-item negative">− ${e}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
                ${hypo.wichtigerHinweis ? `
                    <div class="important-note">
                        <strong>⚠️ Wichtig:</strong> ${hypo.wichtigerHinweis}
                    </div>
                ` : ''}
            </div>
        </div>
    `).join('');
}

/**
 * Toggle für Hypothesen-Details
 * @param {string} id - Element-ID
 */
function toggleHypothesisDetails(id) {
    const details = document.getElementById(id);
    const card = details.parentElement;
    const icon = card.querySelector('.expand-icon');

    if (details.classList.contains('open')) {
        details.classList.remove('open');
        icon.textContent = '▼';
    } else {
        details.classList.add('open');
        icon.textContent = '▲';
    }
}

/**
 * Gibt die Farbe für den Konfidenz-Wert zurück
 * @param {number} konfidenz - Konfidenz in Prozent
 * @returns {string} CSS-Farbe
 */
function getConfidenceColor(konfidenz) {
    if (konfidenz >= 60) return '#10b981'; // Grün
    if (konfidenz >= 35) return '#f59e0b'; // Gelb/Orange
    return '#6366f1'; // Primärfarbe
}

/**
 * Rendert die differentialdiagnostischen Überlegungen
 * @param {Array} differential - Array der Überlegungen
 */
function renderDifferential(differential) {
    const container = document.getElementById('differential-container');
    if (!container) return;

    if (differential.length === 0) {
        container.innerHTML = `
            <div class="placeholder-card">
                <p>Keine spezifischen differentialdiagnostischen Hinweise.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = differential.map(item => `
        <div class="differential-card ${item.typ}">
            <div class="differential-icon">${item.icon}</div>
            <div class="differential-content">
                <h4 class="differential-title">${item.titel}</h4>
                <p class="differential-text">${item.text}</p>
            </div>
        </div>
    `).join('');
}

/**
 * Rendert das bio-psycho-soziale Modell
 * @param {Object} modell - Das klinische Modell
 */
function renderBiopsychosozialModel(modell) {
    const container = document.getElementById('model-container');
    if (!container) return;

    const bps = modell.biopsychosozial;

    container.innerHTML = `
        <div class="bps-model">
            <div class="bps-section praedisponierend">
                <div class="bps-header">
                    <span class="bps-icon">🌱</span>
                    <h4>Prädisponierende Faktoren</h4>
                </div>
                <ul class="bps-list">
                    ${bps.praedisponierend.map(f => `<li>${f}</li>`).join('')}
                </ul>
            </div>
            <div class="bps-section ausloesend">
                <div class="bps-header">
                    <span class="bps-icon">⚡</span>
                    <h4>Auslösende Faktoren</h4>
                </div>
                <ul class="bps-list">
                    ${bps.ausloesend.map(f => `<li>${f}</li>`).join('')}
                </ul>
            </div>
            <div class="bps-section aufrechterhaltend">
                <div class="bps-header">
                    <span class="bps-icon">🔄</span>
                    <h4>Aufrechterhaltende Faktoren</h4>
                </div>
                <ul class="bps-list">
                    ${bps.aufrechterhaltend.map(f => `<li>${f}</li>`).join('')}
                </ul>
            </div>
            <div class="bps-section protektiv">
                <div class="bps-header">
                    <span class="bps-icon">🛡️</span>
                    <h4>Protektive Faktoren</h4>
                </div>
                <ul class="bps-list">
                    ${bps.protektiv.map(f => `<li>${f}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
}

// ============================================================
// TAB 3: BEDIENUNGSANLEITUNG - Rendering-Funktionen
// ============================================================

/**
 * Rendert die komplette Bedienungsanleitung
 * @param {Object} result - Das Analyseergebnis
 */
function renderBedienungsanleitung(result) {
    const anleitung = result.bedienungsanleitung;
    const name = result.caseData?.grunddaten?.name || 'das Kind';

    renderGrundhaltung(anleitung.grundhaltung, name);
    renderAmpelsystem(anleitung.ampelsystem);
    renderSituationsrezepte(anleitung.situationsrezepte);
    renderDosAndDonts(anleitung.dosAndDonts);
    renderNotfallplan(anleitung.notfallplan);
    renderBeziehungstipps(anleitung.beziehungstipps);
    renderElterninfo(anleitung.elterninfo);
}

/**
 * Rendert die Grundhaltung
 * @param {Object} grundhaltung - Die Grundhaltung
 * @param {string} name - Name des Kindes
 */
function renderGrundhaltung(grundhaltung, name) {
    const container = document.getElementById('grundhaltung-container');
    if (!container) return;

    container.innerHTML = `
        <div class="grundhaltung-card">
            <div class="grundhaltung-icon">${grundhaltung.icon}</div>
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

/**
 * Rendert das Ampelsystem
 * @param {Object} ampelsystem - Das Ampelsystem
 */
function renderAmpelsystem(ampelsystem) {
    const container = document.getElementById('ampel-container');
    if (!container) return;

    container.innerHTML = `
        <div class="ampel-grid">
            <div class="ampel-section gruen">
                <div class="ampel-header">
                    <span class="ampel-light green"></span>
                    <h4>Grün - Kind ist stabil</h4>
                </div>
                <ul class="ampel-list">
                    ${ampelsystem.gruen.map(s => `<li><span class="signal-icon">${s.icon}</span> ${s.signal}</li>`).join('')}
                </ul>
            </div>
            <div class="ampel-section gelb">
                <div class="ampel-header">
                    <span class="ampel-light yellow"></span>
                    <h4>Gelb - Vorsicht!</h4>
                </div>
                <ul class="ampel-list">
                    ${ampelsystem.gelb.map(s => `<li><span class="signal-icon">${s.icon}</span> ${s.signal}</li>`).join('')}
                </ul>
            </div>
            <div class="ampel-section rot">
                <div class="ampel-header">
                    <span class="ampel-light red"></span>
                    <h4>Rot - Krise!</h4>
                </div>
                <ul class="ampel-list">
                    ${ampelsystem.rot.map(s => `<li><span class="signal-icon">${s.icon}</span> ${s.signal}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
}

/**
 * Rendert die Situationsrezepte
 * @param {Array} rezepte - Die Situationsrezepte
 */
function renderSituationsrezepte(rezepte) {
    const container = document.getElementById('rezepte-container');
    if (!container) return;

    container.innerHTML = rezepte.map((rezept, index) => `
        <div class="rezept-accordion">
            <button type="button" class="rezept-header" onclick="toggleRezept('rezept-${index}')">
                <span class="rezept-icon">${rezept.icon}</span>
                <span class="rezept-situation">${rezept.situation}</span>
                <span class="rezept-expand">+</span>
            </button>
            <div class="rezept-content" id="rezept-${index}">
                <ul class="rezept-schritte">
                    ${rezept.reaktion.map(schritt => {
                        const isNegative = schritt.startsWith('NICHT:');
                        const isPositive = schritt.startsWith('STATTDESSEN:');
                        return `<li class="${isNegative ? 'dont' : isPositive ? 'do' : ''}">${schritt}</li>`;
                    }).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}

/**
 * Toggle für Rezept-Akkordeons
 * @param {string} id - Element-ID
 */
function toggleRezept(id) {
    const content = document.getElementById(id);
    const header = content.previousElementSibling;
    const icon = header.querySelector('.rezept-expand');

    if (content.classList.contains('open')) {
        content.classList.remove('open');
        icon.textContent = '+';
    } else {
        content.classList.add('open');
        icon.textContent = '−';
    }
}

/**
 * Rendert Do's and Don'ts
 * @param {Object} dosAndDonts - Do's und Don'ts
 */
function renderDosAndDonts(dosAndDonts) {
    const container = document.getElementById('dos-donts-container');
    if (!container) return;

    container.innerHTML = `
        <div class="dos-donts-grid">
            <div class="dos-section">
                <h4 class="dos-title">✓ Tu das</h4>
                <ul class="dos-list">
                    ${dosAndDonts.tuDas.map(item => `
                        <li class="dos-item">
                            <span class="item-icon">${item.icon}</span>
                            <span class="item-text">${item.tipp}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
            <div class="donts-section">
                <h4 class="donts-title">✗ Lass das</h4>
                <ul class="donts-list">
                    ${dosAndDonts.lassDas.map(item => `
                        <li class="donts-item">
                            <span class="item-icon">${item.icon}</span>
                            <span class="item-text">${item.tipp}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
}

/**
 * Rendert den Notfallplan
 * @param {Object} notfallplan - Der Notfallplan
 */
function renderNotfallplan(notfallplan) {
    const container = document.getElementById('notfall-container');
    if (!container) return;

    container.innerHTML = `
        <div class="notfall-card">
            <div class="notfall-header">
                <span class="notfall-icon">${notfallplan.icon}</span>
                <h3 class="notfall-title">${notfallplan.titel}</h3>
            </div>
            <ol class="notfall-schritte">
                ${notfallplan.schritte.map(s => `
                    <li class="notfall-schritt">
                        <span class="schritt-icon">${s.icon}</span>
                        <span class="schritt-text">${s.text}</span>
                    </li>
                `).join('')}
            </ol>
            <div class="notfall-wichtig">
                <strong>⚠️ Wichtig:</strong> ${notfallplan.wichtig}
            </div>
            <div class="nach-krise">
                <h4>Nach der Krise:</h4>
                <ul>
                    ${notfallplan.nachDerKrise.map(p => `<li>${p}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
}

/**
 * Rendert die Beziehungstipps
 * @param {Array} tipps - Die Beziehungstipps
 */
function renderBeziehungstipps(tipps) {
    const container = document.getElementById('beziehung-container');
    if (!container) return;

    container.innerHTML = `
        <div class="beziehung-grid">
            ${tipps.map(tipp => `
                <div class="beziehung-card">
                    <div class="beziehung-icon">${tipp.icon}</div>
                    <h4 class="beziehung-title">${tipp.tipp}</h4>
                    <p class="beziehung-text">${tipp.beschreibung}</p>
                </div>
            `).join('')}
        </div>
    `;
}

/**
 * Rendert die Elterninfo
 * @param {Object} elterninfo - Die Elterninformation
 */
function renderElterninfo(elterninfo) {
    const container = document.getElementById('eltern-container');
    if (!container) return;

    container.innerHTML = `
        <div class="eltern-card">
            <div class="eltern-header">
                <span class="eltern-icon">${elterninfo.icon}</span>
                <h3 class="eltern-headline">${elterninfo.headline}</h3>
            </div>

            <div class="eltern-section">
                <h4>Kernbotschaften</h4>
                <ul class="kern-liste">
                    ${elterninfo.kernbotschaften.map(k => `<li>${k}</li>`).join('')}
                </ul>
            </div>

            ${elterninfo.spezifisch.length > 0 ? `
                <div class="eltern-section spezifisch">
                    <h4>Spezifische Informationen</h4>
                    <ul class="spezifisch-liste">
                        ${elterninfo.spezifisch.map(s => `<li>${s}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}

            <div class="eltern-section ressourcen">
                <h4>Hilfreiche Anlaufstellen</h4>
                <ul class="ressourcen-liste">
                    ${elterninfo.ressourcen.map(r => `<li>📌 ${r}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
}

/**
 * Druckt die Bedienungsanleitung
 */
function printBedienungsanleitung() {
    window.print();
}

/**
 * Gibt die aktuellen Falldaten zurück
 * @returns {Object} caseData
 */
function getCaseData() {
    return caseData;
}

/**
 * Setzt das Formular und die Falldaten zurück
 */
function resetCaseData() {
    caseData = {
        grunddaten: {
            name: '',
            alter: '',
            geschlecht: ''
        },
        hauptproblem: '',
        symptome: [],
        kontext: [],
        freitext: ''
    };

    // Alle Akkordeon-Zähler zurücksetzen
    document.querySelectorAll('.accordion-count').forEach(badge => {
        badge.textContent = '0';
        badge.classList.remove('has-items');
    });
}

// ============================================================
// TOAST NOTIFICATIONS
// ============================================================

/**
 * Initialisiert den Toast-Container
 */
function initToastContainer() {
    if (!document.getElementById('toast-container')) {
        const container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }
}

/**
 * Zeigt eine Toast-Benachrichtigung
 * @param {string} message - Nachricht
 * @param {string} type - Typ: 'success', 'error', 'info'
 * @param {number} duration - Anzeigedauer in ms (default: 3000)
 */
function showToast(message, type = 'info', duration = 3000) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    const icons = {
        success: '✓',
        error: '✗',
        info: 'ℹ'
    };

    toast.innerHTML = `
        <span class="toast-icon">${icons[type] || icons.info}</span>
        <span class="toast-message">${message}</span>
    `;

    container.appendChild(toast);

    // Animation starten
    requestAnimationFrame(() => {
        toast.classList.add('show');
    });

    // Auto-hide
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, duration);
}

// ============================================================
// LOCAL STORAGE - SPEICHERUNG
// ============================================================

/**
 * Speichert den aktuellen Fall in LocalStorage
 */
function saveCurrentCase() {
    const savedCase = {
        id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
        name: caseData.grunddaten.name || 'Unbenannter Fall',
        savedAt: new Date().toISOString(),
        caseData: JSON.parse(JSON.stringify(caseData)),
        analysis: analysisResult ? JSON.parse(JSON.stringify(analysisResult)) : null
    };

    // Aktuellen Fall speichern
    localStorage.setItem(STORAGE_KEYS.CURRENT_CASE, JSON.stringify(savedCase));

    // Zum Archiv hinzufügen (nur wenn Analyse vorhanden)
    if (analysisResult) {
        addToArchive(savedCase);
    }
}

/**
 * Fügt einen Fall zum Archiv hinzu
 * @param {Object} savedCase - Der zu speichernde Fall
 */
function addToArchive(savedCase) {
    let archive = getArchive();

    // Prüfen ob Fall mit gleicher ID bereits existiert
    const existingIndex = archive.findIndex(c => c.id === savedCase.id);
    if (existingIndex >= 0) {
        archive[existingIndex] = savedCase;
    } else {
        archive.unshift(savedCase);
    }

    // Maximal 10 Fälle behalten
    archive = archive.slice(0, 10);

    localStorage.setItem(STORAGE_KEYS.CASE_ARCHIVE, JSON.stringify(archive));
    updateSavedCasesDropdown();
}

/**
 * Lädt das Fallarchiv
 * @returns {Array} Array von gespeicherten Fällen
 */
function getArchive() {
    try {
        const archive = localStorage.getItem(STORAGE_KEYS.CASE_ARCHIVE);
        return archive ? JSON.parse(archive) : [];
    } catch (e) {
        console.error('Fehler beim Laden des Archivs:', e);
        return [];
    }
}

/**
 * Lädt den aktuellen Fall aus LocalStorage
 */
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
        console.error('Fehler beim Laden des Falls:', e);
    }
}

/**
 * Lädt einen Fall aus dem Archiv
 * @param {string} caseId - ID des Falls
 */
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

        showToast(`Fall "${savedCase.name}" geladen`, 'success');
        closeSavedCasesDropdown();
    }
}

/**
 * Stellt das Formular aus caseData wieder her
 */
function restoreFormFromCaseData() {
    const form = document.getElementById('case-form');
    if (!form) return;

    // Grunddaten
    const nameInput = form.querySelector('#name');
    const alterSelect = form.querySelector('#alter');
    const geschlechtSelect = form.querySelector('#geschlecht');

    if (nameInput) nameInput.value = caseData.grunddaten.name || '';
    if (alterSelect) alterSelect.value = caseData.grunddaten.alter || '';
    if (geschlechtSelect) geschlechtSelect.value = caseData.grunddaten.geschlecht || '';

    // Hauptproblem
    const hauptproblemRadio = form.querySelector(`input[name="hauptproblem"][value="${caseData.hauptproblem}"]`);
    if (hauptproblemRadio) hauptproblemRadio.checked = true;

    // Symptome
    form.querySelectorAll('input[name="symptome[]"]').forEach(cb => {
        cb.checked = caseData.symptome.includes(cb.value);
    });

    // Kontext
    form.querySelectorAll('input[name="kontext[]"]').forEach(cb => {
        cb.checked = caseData.kontext.includes(cb.value);
    });

    // Freitext
    const freitextArea = form.querySelector('#freitext');
    if (freitextArea) freitextArea.value = caseData.freitext || '';

    // Akkordeon-Zähler aktualisieren
    document.querySelectorAll('.accordion').forEach(accordion => {
        const header = accordion.querySelector('.accordion-header');
        if (header) {
            const accordionId = header.dataset.accordion;
            updateAccordionCount(accordionId);
        }
    });
}

/**
 * Startet den Autosave
 */
function startAutosave() {
    if (autosaveInterval) {
        clearInterval(autosaveInterval);
    }

    autosaveInterval = setInterval(() => {
        if (caseData.grunddaten.name || caseData.symptome.length > 0) {
            const savedCase = {
                id: 'current',
                name: caseData.grunddaten.name || 'Aktueller Fall',
                savedAt: new Date().toISOString(),
                caseData: JSON.parse(JSON.stringify(caseData)),
                analysis: analysisResult ? JSON.parse(JSON.stringify(analysisResult)) : null
            };
            localStorage.setItem(STORAGE_KEYS.CURRENT_CASE, JSON.stringify(savedCase));
        }
    }, 30000); // Alle 30 Sekunden
}

/**
 * Startet einen neuen Fall (mit Bestätigung)
 */
function newCase() {
    const hasData = caseData.grunddaten.name || caseData.symptome.length > 0;

    if (hasData) {
        if (!confirm('Möchten Sie wirklich einen neuen Fall beginnen? Nicht gespeicherte Änderungen gehen verloren.')) {
            return;
        }
    }

    // Formular zurücksetzen
    const form = document.getElementById('case-form');
    if (form) {
        form.reset();
    }

    // Daten zurücksetzen
    resetCaseData();
    analysisResult = null;

    // Placeholder-Karten wieder anzeigen
    resetPlaceholders();

    // LocalStorage leeren
    localStorage.removeItem(STORAGE_KEYS.CURRENT_CASE);

    // Zum ersten Tab wechseln
    switchToTab('fallbeschreibung');

    showToast('Neuer Fall gestartet', 'info');
}

/**
 * Setzt die Placeholder-Karten zurück
 */
function resetPlaceholders() {
    const placeholderHTML = `
        <div class="placeholder-card">
            <p>Bitte füllen Sie zuerst die Fallbeschreibung aus und starten Sie die Analyse.</p>
        </div>
    `;

    const containers = [
        'summary-container', 'hypotheses-container', 'differential-container',
        'model-container', 'grundhaltung-container', 'ampel-container',
        'rezepte-container', 'dos-donts-container', 'notfall-container',
        'beziehung-container', 'eltern-container'
    ];

    containers.forEach(id => {
        const container = document.getElementById(id);
        if (container) {
            container.innerHTML = placeholderHTML;
        }
    });
}

/**
 * Initialisiert das Dropdown für gespeicherte Fälle
 */
function initSavedCasesDropdown() {
    updateSavedCasesDropdown();
}

/**
 * Aktualisiert das Dropdown für gespeicherte Fälle
 */
function updateSavedCasesDropdown() {
    const dropdown = document.getElementById('saved-cases-list');
    if (!dropdown) return;

    const archive = getArchive();

    if (archive.length === 0) {
        dropdown.innerHTML = '<div class="dropdown-empty">Keine gespeicherten Fälle</div>';
        return;
    }

    dropdown.innerHTML = archive.map(savedCase => {
        const date = new Date(savedCase.savedAt);
        const dateStr = date.toLocaleDateString('de-DE', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        });

        return `
            <button type="button" class="dropdown-item" onclick="loadCaseFromArchive('${savedCase.id}')">
                <span class="case-name">${savedCase.name || 'Unbenannt'}</span>
                <span class="case-date">${dateStr}</span>
            </button>
        `;
    }).join('');
}

/**
 * Öffnet/schließt das Dropdown für gespeicherte Fälle
 */
function toggleSavedCasesDropdown() {
    const dropdown = document.getElementById('saved-cases-dropdown');
    if (dropdown) {
        dropdown.classList.toggle('open');
    }
}

/**
 * Schließt das Dropdown für gespeicherte Fälle
 */
function closeSavedCasesDropdown() {
    const dropdown = document.getElementById('saved-cases-dropdown');
    if (dropdown) {
        dropdown.classList.remove('open');
    }
}

// ============================================================
// EXPORT-FUNKTIONEN
// ============================================================

/**
 * Exportiert die Bedienungsanleitung als Textdatei
 */
function exportAsText() {
    if (!analysisResult) {
        showToast('Bitte führen Sie zuerst eine Analyse durch.', 'error');
        return;
    }

    const name = caseData.grunddaten.name || 'Unbenannt';
    const date = new Date().toLocaleDateString('de-DE');
    const anleitung = analysisResult.bedienungsanleitung;

    let text = `
═══════════════════════════════════════════════════════════════
                    BEDIENUNGSANLEITUNG
═══════════════════════════════════════════════════════════════

Name: ${name}
Datum: ${date}
VERTRAULICH - Nur für autorisiertes Fachpersonal

───────────────────────────────────────────────────────────────
ZUSAMMENFASSUNG
───────────────────────────────────────────────────────────────

${analysisResult.modell.zusammenfassung}

───────────────────────────────────────────────────────────────
GRUNDHALTUNG
───────────────────────────────────────────────────────────────

Leitsatz: "${anleitung.grundhaltung.leitsatz}"

${anleitung.grundhaltung.erklaerung}

Mantra: "${anleitung.grundhaltung.mantra}"

───────────────────────────────────────────────────────────────
AMPELSYSTEM - SIGNALE ERKENNEN
───────────────────────────────────────────────────────────────

GRÜN - Kind ist stabil:
${anleitung.ampelsystem.gruen.map(s => `  • ${s.signal}`).join('\n')}

GELB - Vorsicht:
${anleitung.ampelsystem.gelb.map(s => `  • ${s.signal}`).join('\n')}

ROT - Krise:
${anleitung.ampelsystem.rot.map(s => `  • ${s.signal}`).join('\n')}

───────────────────────────────────────────────────────────────
DO'S AND DON'TS
───────────────────────────────────────────────────────────────

TU DAS:
${anleitung.dosAndDonts.tuDas.map(d => `  ✓ ${d.tipp}`).join('\n')}

LASS DAS:
${anleitung.dosAndDonts.lassDas.map(d => `  ✗ ${d.tipp}`).join('\n')}

───────────────────────────────────────────────────────────────
NOTFALLPLAN
───────────────────────────────────────────────────────────────

${anleitung.notfallplan.schritte.map((s, i) => `${i + 1}. ${s.text}`).join('\n')}

WICHTIG: ${anleitung.notfallplan.wichtig}

───────────────────────────────────────────────────────────────
BEZIEHUNGSTIPPS
───────────────────────────────────────────────────────────────

${anleitung.beziehungstipps.map(t => `${t.tipp}\n${t.beschreibung}`).join('\n\n')}

───────────────────────────────────────────────────────────────
INFORMATION FÜR ELTERN
───────────────────────────────────────────────────────────────

${anleitung.elterninfo.kernbotschaften.map(k => `• ${k}`).join('\n')}

${anleitung.elterninfo.spezifisch.length > 0 ? 'Spezifische Informationen:\n' + anleitung.elterninfo.spezifisch.map(s => `• ${s}`).join('\n') : ''}

═══════════════════════════════════════════════════════════════
Erstellt mit PädoPsych Advisor
Dieses Tool ersetzt keine professionelle Diagnostik
═══════════════════════════════════════════════════════════════
`;

    // Download erstellen
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${name}_Bedienungsanleitung_${date.replace(/\./g, '-')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showToast('Export als Text heruntergeladen', 'success');
}

/**
 * Druckt die Bedienungsanleitung (verbesserte Version)
 */
function printBedienungsanleitung() {
    if (!analysisResult) {
        showToast('Bitte führen Sie zuerst eine Analyse durch.', 'error');
        return;
    }

    // Print-Header hinzufügen
    const name = caseData.grunddaten.name || 'Unbenannt';
    const date = new Date().toLocaleDateString('de-DE');

    // Temporären Print-Header erstellen
    const printHeader = document.createElement('div');
    printHeader.id = 'print-header';
    printHeader.innerHTML = `
        <div class="print-header-content">
            <div class="print-title">Bedienungsanleitung für ${name}</div>
            <div class="print-meta">
                <span>Datum: ${date}</span>
                <span class="print-confidential">VERTRAULICH</span>
            </div>
        </div>
    `;

    document.body.insertBefore(printHeader, document.body.firstChild);

    // Drucken
    window.print();

    // Header wieder entfernen
    printHeader.remove();
}

// ============================================================
// KEYBOARD SHORTCUTS
// ============================================================

/**
 * Initialisiert Tastaturkürzel
 */
function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + Enter: Analyse starten (wenn in Tab 1)
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            const tab1Active = document.getElementById('fallbeschreibung')?.classList.contains('active');
            if (tab1Active) {
                e.preventDefault();
                startAnalysis();
            }
        }

        // Ctrl/Cmd + P: Drucken (wenn in Tab 3)
        if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
            const tab3Active = document.getElementById('bedienungsanleitung')?.classList.contains('active');
            if (tab3Active && analysisResult) {
                e.preventDefault();
                printBedienungsanleitung();
            }
        }

        // Ctrl/Cmd + S: Fall speichern
        if ((e.ctrlKey || e.metaKey) && e.key === 's') {
            e.preventDefault();
            saveCurrentCase();
            showToast('Fall gespeichert', 'success');
        }

        // Tasten 1, 2, 3: Tab-Wechsel (nur wenn nicht in Eingabefeld)
        if (!e.target.matches('input, textarea, select')) {
            if (e.key === '1') switchToTab('fallbeschreibung');
            if (e.key === '2') switchToTab('analyse');
            if (e.key === '3') switchToTab('bedienungsanleitung');
        }

        // Escape: Dropdown schließen
        if (e.key === 'Escape') {
            closeSavedCasesDropdown();
        }
    });

    // Klick außerhalb des Dropdowns schließt es
    document.addEventListener('click', (e) => {
        const dropdown = document.getElementById('saved-cases-dropdown');
        const btn = document.getElementById('saved-cases-btn');
        if (dropdown && !dropdown.contains(e.target) && e.target !== btn) {
            closeSavedCasesDropdown();
        }
    });
}

// ============================================================
// DARK MODE
// ============================================================

/**
 * Initialisiert den Dark Mode
 */
function initDarkMode() {
    const savedMode = localStorage.getItem(STORAGE_KEYS.DARK_MODE);
    if (savedMode === 'true') {
        document.body.classList.add('dark-mode');
        updateDarkModeButton(true);
    }
}

/**
 * Schaltet den Dark Mode um
 */
function toggleDarkMode() {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem(STORAGE_KEYS.DARK_MODE, isDark.toString());
    updateDarkModeButton(isDark);
}

/**
 * Aktualisiert den Dark Mode Button
 * @param {boolean} isDark - Ist Dark Mode aktiv?
 */
function updateDarkModeButton(isDark) {
    const btn = document.getElementById('dark-mode-btn');
    if (btn) {
        btn.innerHTML = isDark ? '☀️' : '🌙';
        btn.title = isDark ? 'Light Mode aktivieren' : 'Dark Mode aktivieren';
    }
}
