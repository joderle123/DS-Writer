/**
 * PädoPsych Advisor - Main Application
 * Tab-Navigation und UI-Steuerung
 */

document.addEventListener('DOMContentLoaded', function() {
    initTabNavigation();
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
