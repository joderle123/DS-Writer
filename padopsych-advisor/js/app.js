/**
 * PädoPsych Advisor - Main Application
 * Tab-Navigation, Akkordeons und Formular-Steuerung
 */

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

document.addEventListener('DOMContentLoaded', function() {
    initTabNavigation();
    initAccordions();
    initCheckboxCounters();
    initFormHandler();
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
    // Validierung
    if (!caseData.grunddaten.alter) {
        showValidationError('Bitte geben Sie das Alter des Kindes an.');
        return;
    }

    if (!caseData.hauptproblem) {
        showValidationError('Bitte wählen Sie ein Hauptproblem aus.');
        return;
    }

    if (caseData.symptome.length === 0) {
        showValidationError('Bitte wählen Sie mindestens ein Symptom aus.');
        return;
    }

    console.log('Analyse wird gestartet mit:', caseData);

    // Analyse durchführen
    analysisResult = ClinicalEngine.analyze(caseData);
    console.log('Analyseergebnis:', analysisResult);

    // Ergebnisse rendern
    renderAnalysis(analysisResult);
    renderBedienungsanleitung(analysisResult);

    // Zum Analyse-Tab wechseln
    switchToTab('analyse');
}

/**
 * Zeigt einen Validierungsfehler an
 * @param {string} message - Fehlermeldung
 */
function showValidationError(message) {
    alert(message);
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
            })
            .catch(err => console.error('Kopieren fehlgeschlagen:', err));
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
