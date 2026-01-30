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
 * Startet die Analyse (Platzhalter)
 */
function startAnalysis() {
    // Validierung
    if (!caseData.grunddaten.alter) {
        alert('Bitte geben Sie das Alter des Kindes an.');
        return;
    }

    if (!caseData.hauptproblem) {
        alert('Bitte wählen Sie ein Hauptproblem aus.');
        return;
    }

    if (caseData.symptome.length === 0) {
        alert('Bitte wählen Sie mindestens ein Symptom aus.');
        return;
    }

    console.log('Analyse wird gestartet mit:', caseData);

    // Zum Analyse-Tab wechseln
    switchToTab('analyse');
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
