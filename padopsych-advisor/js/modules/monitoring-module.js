/**
 * Verlaufsmonitoring Modul
 * Symptom-Tracker, GAS (Goal Attainment Scaling), Verlaufskurven
 *
 * Wissenschaftliche Grundlagen:
 * - Kiresuk, T.J., & Sherman, R.E. (1968). Goal Attainment Scaling
 * - Lambert, M.J. (2010). Prevention of Treatment Failure
 * - Weisz, J.R. et al. (2011). Evidence-Based Youth Psychotherapy
 */

const MonitoringModule = {

    // Symptom-Dimensionen für Tracking
    symptomDimensionen: {
        stimmung: {
            label: 'Stimmung',
            icon: '😊',
            skala: { min: 0, max: 10, labels: ['Sehr schlecht', 'Neutral', 'Sehr gut'] },
            beschreibung: 'Allgemeine Stimmungslage'
        },
        angst: {
            label: 'Angst/Sorgen',
            icon: '😰',
            skala: { min: 0, max: 10, labels: ['Keine', 'Mittel', 'Extrem'] },
            beschreibung: 'Intensität von Ängsten und Sorgen'
        },
        schlaf: {
            label: 'Schlafqualität',
            icon: '😴',
            skala: { min: 0, max: 10, labels: ['Sehr schlecht', 'OK', 'Sehr gut'] },
            beschreibung: 'Qualität des Schlafs'
        },
        energie: {
            label: 'Energie/Antrieb',
            icon: '⚡',
            skala: { min: 0, max: 10, labels: ['Keine', 'Normal', 'Viel'] },
            beschreibung: 'Energielevel und Antrieb'
        },
        konzentration: {
            label: 'Konzentration',
            icon: '🎯',
            skala: { min: 0, max: 10, labels: ['Sehr schlecht', 'OK', 'Sehr gut'] },
            beschreibung: 'Konzentrationsfähigkeit'
        },
        sozial: {
            label: 'Soziale Kontakte',
            icon: '👥',
            skala: { min: 0, max: 10, labels: ['Vermieden', 'Normal', 'Viel Kontakt'] },
            beschreibung: 'Häufigkeit und Qualität sozialer Kontakte'
        },
        selbstwert: {
            label: 'Selbstwertgefühl',
            icon: '💪',
            skala: { min: 0, max: 10, labels: ['Sehr niedrig', 'OK', 'Sehr gut'] },
            beschreibung: 'Selbstwertgefühl und Selbstvertrauen'
        },
        reizbarkeit: {
            label: 'Reizbarkeit',
            icon: '😤',
            skala: { min: 0, max: 10, labels: ['Keine', 'Mittel', 'Extrem'] },
            beschreibung: 'Grad der Reizbarkeit und Aggressivität'
        }
    },

    // Diagnose-spezifische Symptom-Profile
    diagnoseProfile: {
        depression: {
            primaer: ['stimmung', 'energie', 'schlaf', 'selbstwert'],
            sekundaer: ['konzentration', 'sozial']
        },
        angst: {
            primaer: ['angst', 'schlaf', 'konzentration'],
            sekundaer: ['sozial', 'energie']
        },
        adhs: {
            primaer: ['konzentration', 'reizbarkeit', 'energie'],
            sekundaer: ['schlaf', 'sozial']
        },
        ssv: {
            primaer: ['reizbarkeit', 'sozial'],
            sekundaer: ['stimmung', 'konzentration']
        },
        trauma: {
            primaer: ['schlaf', 'angst', 'reizbarkeit'],
            sekundaer: ['konzentration', 'stimmung', 'sozial']
        }
    },

    // GAS (Goal Attainment Scaling) nach Kiresuk & Sherman
    gasSkala: {
        niveaus: [
            { score: -2, label: 'Viel weniger als erwartet', beschreibung: 'Deutliche Verschlechterung oder kein Fortschritt' },
            { score: -1, label: 'Etwas weniger als erwartet', beschreibung: 'Geringfügige Verschlechterung oder minimaler Fortschritt' },
            { score: 0, label: 'Erwartetes Ergebnis', beschreibung: 'Ziel wie geplant erreicht' },
            { score: 1, label: 'Etwas mehr als erwartet', beschreibung: 'Übertrifft Erwartungen leicht' },
            { score: 2, label: 'Viel mehr als erwartet', beschreibung: 'Übertrifft Erwartungen deutlich' }
        ],
        // GAS T-Score Berechnung
        berechneTScore: function(gasScores, gewichtungen = null) {
            if (!gasScores || gasScores.length === 0) return null;

            // Default: Gleiche Gewichtung
            if (!gewichtungen) {
                gewichtungen = new Array(gasScores.length).fill(1);
            }

            const n = gasScores.length;
            let sumGewichte = gewichtungen.reduce((a, b) => a + b, 0);
            let gewichteterScore = 0;

            for (let i = 0; i < n; i++) {
                gewichteterScore += gasScores[i] * gewichtungen[i];
            }

            // Vereinfachte T-Score Formel
            // T = 50 + (10 * gewichteter Durchschnitt)
            const durchschnitt = gewichteterScore / sumGewichte;
            const tScore = 50 + (10 * durchschnitt);

            return {
                tScore: Math.round(tScore),
                durchschnitt: durchschnitt.toFixed(2),
                interpretation: this.interpretiereTScore(tScore)
            };
        },
        interpretiereTScore: function(tScore) {
            if (tScore >= 60) return { niveau: 'uebertroffen', text: 'Therapieziele deutlich übertroffen', farbe: '#2e7d32' };
            if (tScore >= 50) return { niveau: 'erreicht', text: 'Therapieziele erreicht', farbe: '#4caf50' };
            if (tScore >= 40) return { niveau: 'teilweise', text: 'Therapieziele teilweise erreicht', farbe: '#ff9800' };
            return { niveau: 'nicht_erreicht', text: 'Therapieziele nicht erreicht', farbe: '#f44336' };
        }
    },

    // CGI (Clinical Global Impression) vereinfacht für KJP
    cgiSkala: {
        schweregrad: [
            { score: 1, label: 'Nicht krank' },
            { score: 2, label: 'Grenzwertig krank' },
            { score: 3, label: 'Leicht krank' },
            { score: 4, label: 'Mäßig krank' },
            { score: 5, label: 'Deutlich krank' },
            { score: 6, label: 'Schwer krank' },
            { score: 7, label: 'Extrem schwer krank' }
        ],
        verbesserung: [
            { score: 1, label: 'Sehr viel besser' },
            { score: 2, label: 'Viel besser' },
            { score: 3, label: 'Wenig besser' },
            { score: 4, label: 'Unverändert' },
            { score: 5, label: 'Wenig schlechter' },
            { score: 6, label: 'Viel schlechter' },
            { score: 7, label: 'Sehr viel schlechter' }
        ]
    },

    // Symptom-Eintrag erstellen
    createSymptomEintrag: function(dimensionen = {}) {
        return {
            id: this.generateId(),
            datum: new Date().toISOString(),
            symptome: dimensionen, // {stimmung: 5, angst: 7, ...}
            notizen: '',
            besondereEreignisse: '',
            medikation: null,
            nebenwirkungen: ''
        };
    },

    // Verlaufsdaten erstellen
    createVerlauf: function(patientId) {
        return {
            patientId: patientId || this.generateId(),
            erstelltAm: new Date().toISOString(),
            diagnose: null,
            eintraege: [],
            gasZiele: [],
            cgiVerlauf: [],
            therapiephasen: []
        };
    },

    // GAS-Ziel erstellen
    createGASZiel: function(data = {}) {
        return {
            id: this.generateId(),
            erstelltAm: new Date().toISOString(),
            zielbereich: data.zielbereich || '',
            beschreibung: data.beschreibung || '',
            gewichtung: data.gewichtung || 1,
            niveaus: {
                minus2: data.minus2 || 'Viel weniger als erwartet',
                minus1: data.minus1 || 'Etwas weniger als erwartet',
                null: data.null || 'Erwartetes Ergebnis',
                plus1: data.plus1 || 'Etwas mehr als erwartet',
                plus2: data.plus2 || 'Viel mehr als erwartet'
            },
            bewertungen: [] // [{datum, score, notiz}]
        };
    },

    // ID Generator
    generateId: function() {
        return 'mon_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    },

    // Statistiken berechnen
    berechneStatistiken: function(eintraege, dimension) {
        if (!eintraege || eintraege.length === 0) return null;

        const werte = eintraege
            .filter(e => e.symptome && e.symptome[dimension] !== undefined)
            .map(e => ({ datum: e.datum, wert: e.symptome[dimension] }))
            .sort((a, b) => new Date(a.datum) - new Date(b.datum));

        if (werte.length === 0) return null;

        const nurWerte = werte.map(w => w.wert);
        const durchschnitt = nurWerte.reduce((a, b) => a + b, 0) / nurWerte.length;
        const min = Math.min(...nurWerte);
        const max = Math.max(...nurWerte);

        // Trend berechnen (letzte 3 vs. erste 3 Werte)
        let trend = 'stabil';
        if (werte.length >= 6) {
            const ersteWerte = nurWerte.slice(0, 3).reduce((a, b) => a + b, 0) / 3;
            const letzteWerte = nurWerte.slice(-3).reduce((a, b) => a + b, 0) / 3;
            const differenz = letzteWerte - ersteWerte;

            if (differenz > 1.5) trend = 'verbesserung';
            else if (differenz < -1.5) trend = 'verschlechterung';
        }

        // Reliable Change Index (vereinfacht)
        // RCI = (X2 - X1) / SE_diff
        // Für vereinfachte Berechnung: Änderung > 2 Punkte = klinisch signifikant
        const ersterWert = werte[0].wert;
        const letzterWert = werte[werte.length - 1].wert;
        const aenderung = letzterWert - ersterWert;
        const klinischSignifikant = Math.abs(aenderung) >= 2;

        return {
            dimension,
            anzahlEintraege: werte.length,
            durchschnitt: durchschnitt.toFixed(1),
            min,
            max,
            ersterWert,
            letzterWert,
            aenderung: aenderung.toFixed(1),
            trend,
            klinischSignifikant,
            verlauf: werte
        };
    },

    // Verlaufsgrafik als ASCII generieren (für Text-Export)
    generateASCIIChart: function(eintraege, dimension, breite = 40, hoehe = 10) {
        const stats = this.berechneStatistiken(eintraege, dimension);
        if (!stats || stats.verlauf.length < 2) return 'Nicht genügend Daten für Grafik';

        const werte = stats.verlauf.map(w => w.wert);
        const min = Math.min(...werte);
        const max = Math.max(...werte);
        const range = max - min || 1;

        let chart = [];
        for (let y = hoehe - 1; y >= 0; y--) {
            let zeile = '';
            const schwelle = min + (range * y / (hoehe - 1));

            for (let x = 0; x < werte.length; x++) {
                const wert = werte[x];
                const normX = Math.floor((x / (werte.length - 1)) * (breite - 1));

                if (Math.abs(wert - schwelle) < range / hoehe) {
                    zeile += '●';
                } else if (wert > schwelle) {
                    zeile += '│';
                } else {
                    zeile += ' ';
                }
            }
            chart.push(`${schwelle.toFixed(0).padStart(2)} │${zeile}`);
        }

        chart.push('   └' + '─'.repeat(breite));

        return chart.join('\n');
    },

    // UI: Symptom-Tracker
    generateSymptomTrackerUI: function(diagnose = null) {
        let dimensionen = Object.keys(this.symptomDimensionen);

        // Bei spezifischer Diagnose: Priorisiere relevante Dimensionen
        if (diagnose && this.diagnoseProfile[diagnose]) {
            const profil = this.diagnoseProfile[diagnose];
            dimensionen = [...profil.primaer, ...profil.sekundaer];
        }

        let html = `
            <div class="symptom-tracker-container">
                <h3>📊 Täglicher Symptom-Tracker</h3>
                <p class="info-text">Bewerten Sie die folgenden Bereiche für heute (0 = minimal, 10 = maximal)</p>

                <div class="tracker-datum">
                    <label>Datum:</label>
                    <input type="date" id="tracker-datum" value="${new Date().toISOString().split('T')[0]}" class="form-input">
                </div>

                <div class="symptom-sliders">
        `;

        dimensionen.forEach(dim => {
            const symptom = this.symptomDimensionen[dim];
            if (!symptom) return;

            html += `
                <div class="symptom-slider-group">
                    <label>
                        <span class="symptom-icon">${symptom.icon}</span>
                        ${symptom.label}
                    </label>
                    <div class="slider-container">
                        <input type="range" id="symptom-${dim}" min="0" max="10" value="5"
                               oninput="MonitoringModule.updateSliderValue('${dim}', this.value)">
                        <span id="symptom-${dim}-value" class="slider-value">5</span>
                    </div>
                    <div class="slider-labels">
                        <span>${symptom.skala.labels[0]}</span>
                        <span>${symptom.skala.labels[2]}</span>
                    </div>
                </div>
            `;
        });

        html += `
                </div>

                <div class="tracker-zusatz">
                    <div class="form-group">
                        <label>Besondere Ereignisse heute:</label>
                        <textarea id="tracker-ereignisse" class="form-textarea" placeholder="z.B. Streit, Prüfung, gutes Gespräch..."></textarea>
                    </div>
                    <div class="form-group">
                        <label>Notizen:</label>
                        <textarea id="tracker-notizen" class="form-textarea" placeholder="Weitere Beobachtungen..."></textarea>
                    </div>
                </div>

                <button type="button" onclick="MonitoringModule.saveSymptomEintrag()" class="btn-primary">
                    💾 Eintrag speichern
                </button>

                <div id="tracker-bestaetigung" class="bestaetigung" style="display:none;">
                    ✅ Eintrag gespeichert!
                </div>
            </div>
        `;

        return html;
    },

    // Slider-Wert aktualisieren
    updateSliderValue: function(dimension, value) {
        const valueSpan = document.getElementById(`symptom-${dimension}-value`);
        if (valueSpan) {
            valueSpan.textContent = value;
        }
    },

    // Symptom-Eintrag speichern
    saveSymptomEintrag: function() {
        const symptome = {};

        Object.keys(this.symptomDimensionen).forEach(dim => {
            const slider = document.getElementById(`symptom-${dim}`);
            if (slider) {
                symptome[dim] = parseInt(slider.value);
            }
        });

        const eintrag = this.createSymptomEintrag(symptome);
        eintrag.datum = document.getElementById('tracker-datum')?.value || new Date().toISOString();
        eintrag.besondereEreignisse = document.getElementById('tracker-ereignisse')?.value || '';
        eintrag.notizen = document.getElementById('tracker-notizen')?.value || '';

        // Speichern im localStorage
        if (!this.currentVerlauf) {
            this.currentVerlauf = this.createVerlauf();
        }
        this.currentVerlauf.eintraege.push(eintrag);

        try {
            localStorage.setItem('padopsych_verlauf', JSON.stringify(this.currentVerlauf));
        } catch (e) {
            console.warn('localStorage nicht verfügbar');
        }

        // Bestätigung anzeigen
        const bestaetigung = document.getElementById('tracker-bestaetigung');
        if (bestaetigung) {
            bestaetigung.style.display = 'block';
            setTimeout(() => {
                bestaetigung.style.display = 'none';
            }, 3000);
        }

        // Verlaufsanzeige aktualisieren
        this.updateVerlaufsanzeige();
    },

    // UI: Verlaufsanzeige
    generateVerlaufsanzeigeUI: function() {
        return `
            <div class="verlaufsanzeige-container">
                <h3>📈 Symptomverlauf</h3>

                <div class="verlauf-controls">
                    <label>Dimension:</label>
                    <select id="verlauf-dimension" onchange="MonitoringModule.updateVerlaufsanzeige()" class="form-select">
                        ${Object.entries(this.symptomDimensionen).map(([key, dim]) =>
                            `<option value="${key}">${dim.icon} ${dim.label}</option>`
                        ).join('')}
                    </select>

                    <label>Zeitraum:</label>
                    <select id="verlauf-zeitraum" onchange="MonitoringModule.updateVerlaufsanzeige()" class="form-select">
                        <option value="7">Letzte 7 Tage</option>
                        <option value="14">Letzte 14 Tage</option>
                        <option value="30" selected>Letzte 30 Tage</option>
                        <option value="90">Letzte 3 Monate</option>
                        <option value="all">Gesamter Zeitraum</option>
                    </select>
                </div>

                <div id="verlauf-chart" class="verlauf-chart">
                    <p class="placeholder-text">Noch keine Verlaufsdaten vorhanden</p>
                </div>

                <div id="verlauf-statistiken" class="verlauf-statistiken"></div>

                <div class="verlauf-actions">
                    <button type="button" onclick="MonitoringModule.exportVerlauf()" class="btn-secondary">
                        📄 Verlauf exportieren
                    </button>
                </div>
            </div>
        `;
    },

    // Verlaufsanzeige aktualisieren
    updateVerlaufsanzeige: function() {
        // Lade Daten
        this.loadVerlaufFromStorage();

        const dimension = document.getElementById('verlauf-dimension')?.value || 'stimmung';
        const zeitraum = document.getElementById('verlauf-zeitraum')?.value || '30';

        const chartDiv = document.getElementById('verlauf-chart');
        const statsDiv = document.getElementById('verlauf-statistiken');

        if (!this.currentVerlauf || this.currentVerlauf.eintraege.length === 0) {
            if (chartDiv) chartDiv.innerHTML = '<p class="placeholder-text">Noch keine Verlaufsdaten vorhanden</p>';
            if (statsDiv) statsDiv.innerHTML = '';
            return;
        }

        // Filtere nach Zeitraum
        let eintraege = [...this.currentVerlauf.eintraege];
        if (zeitraum !== 'all') {
            const tage = parseInt(zeitraum);
            const grenze = new Date();
            grenze.setDate(grenze.getDate() - tage);
            eintraege = eintraege.filter(e => new Date(e.datum) >= grenze);
        }

        if (eintraege.length === 0) {
            if (chartDiv) chartDiv.innerHTML = '<p class="placeholder-text">Keine Daten im gewählten Zeitraum</p>';
            if (statsDiv) statsDiv.innerHTML = '';
            return;
        }

        // Statistiken berechnen
        const stats = this.berechneStatistiken(eintraege, dimension);

        // Chart als HTML-Balkendiagramm
        if (chartDiv && stats) {
            let chartHtml = '<div class="bar-chart">';

            stats.verlauf.slice(-14).forEach(punkt => { // Max 14 Punkte anzeigen
                const datum = new Date(punkt.datum).toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit' });
                const prozent = (punkt.wert / 10) * 100;
                const farbe = this.getWertFarbe(dimension, punkt.wert);

                chartHtml += `
                    <div class="bar-item">
                        <div class="bar-value">${punkt.wert}</div>
                        <div class="bar" style="height: ${prozent}%; background-color: ${farbe};"></div>
                        <div class="bar-label">${datum}</div>
                    </div>
                `;
            });

            chartHtml += '</div>';
            chartDiv.innerHTML = chartHtml;
        }

        // Statistiken anzeigen
        if (statsDiv && stats) {
            const trendIcon = {
                verbesserung: '📈',
                verschlechterung: '📉',
                stabil: '➡️'
            }[stats.trend];

            const trendText = {
                verbesserung: 'Verbesserung',
                verschlechterung: 'Verschlechterung',
                stabil: 'Stabil'
            }[stats.trend];

            statsDiv.innerHTML = `
                <div class="stats-grid">
                    <div class="stat-item">
                        <span class="stat-label">Durchschnitt</span>
                        <span class="stat-value">${stats.durchschnitt}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Min / Max</span>
                        <span class="stat-value">${stats.min} / ${stats.max}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Trend</span>
                        <span class="stat-value">${trendIcon} ${trendText}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Veränderung</span>
                        <span class="stat-value ${stats.klinischSignifikant ? 'signifikant' : ''}">${stats.aenderung > 0 ? '+' : ''}${stats.aenderung} ${stats.klinischSignifikant ? '(klinisch signifikant)' : ''}</span>
                    </div>
                </div>
            `;
        }
    },

    // Farbkodierung für Werte
    getWertFarbe: function(dimension, wert) {
        // Dimensionen, bei denen niedrig = gut
        const niedrigIstGut = ['angst', 'reizbarkeit'];

        if (niedrigIstGut.includes(dimension)) {
            // Umkehren: niedrig = grün, hoch = rot
            if (wert <= 3) return '#4caf50';
            if (wert <= 6) return '#ff9800';
            return '#f44336';
        } else {
            // Normal: hoch = grün, niedrig = rot
            if (wert >= 7) return '#4caf50';
            if (wert >= 4) return '#ff9800';
            return '#f44336';
        }
    },

    // UI: GAS (Goal Attainment Scaling)
    generateGASUI: function() {
        return `
            <div class="gas-container">
                <h3>🎯 Goal Attainment Scaling (GAS)</h3>
                <p class="info-text">Definieren Sie messbare Therapieziele und bewerten Sie deren Erreichung.</p>

                <div class="gas-ziele" id="gas-ziele-liste">
                    <p class="placeholder-text">Noch keine Ziele definiert</p>
                </div>

                <div class="gas-neues-ziel">
                    <h4>Neues Ziel hinzufügen</h4>

                    <div class="form-group">
                        <label>Zielbereich:</label>
                        <select id="gas-zielbereich" class="form-select">
                            <option value="symptomreduktion">Symptomreduktion</option>
                            <option value="funktionsverbesserung">Funktionsverbesserung</option>
                            <option value="verhalten">Verhalten</option>
                            <option value="sozial">Soziale Kompetenz</option>
                            <option value="schule">Schule/Ausbildung</option>
                            <option value="familie">Familienbeziehungen</option>
                            <option value="selbstwert">Selbstwert</option>
                            <option value="anderes">Anderes</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label>Zielbeschreibung:</label>
                        <input type="text" id="gas-beschreibung" class="form-input" placeholder="z.B. Schulbesuch verbessern">
                    </div>

                    <div class="form-group">
                        <label>Gewichtung (1-3):</label>
                        <select id="gas-gewichtung" class="form-select">
                            <option value="1">1 - Normal</option>
                            <option value="2">2 - Wichtig</option>
                            <option value="3">3 - Sehr wichtig</option>
                        </select>
                    </div>

                    <details class="gas-niveaus-details">
                        <summary>Zielniveaus definieren (optional)</summary>
                        <div class="gas-niveaus">
                            <div class="form-group">
                                <label>-2 (viel schlechter als erwartet):</label>
                                <input type="text" id="gas-minus2" class="form-input" placeholder="z.B. Schulverweigerung">
                            </div>
                            <div class="form-group">
                                <label>-1 (etwas schlechter als erwartet):</label>
                                <input type="text" id="gas-minus1" class="form-input" placeholder="z.B. 1-2 Tage/Woche Schule">
                            </div>
                            <div class="form-group">
                                <label>0 (erwartetes Ergebnis):</label>
                                <input type="text" id="gas-null" class="form-input" placeholder="z.B. 3-4 Tage/Woche Schule">
                            </div>
                            <div class="form-group">
                                <label>+1 (etwas besser als erwartet):</label>
                                <input type="text" id="gas-plus1" class="form-input" placeholder="z.B. Vollständiger Schulbesuch">
                            </div>
                            <div class="form-group">
                                <label>+2 (viel besser als erwartet):</label>
                                <input type="text" id="gas-plus2" class="form-input" placeholder="z.B. Gute Noten, soziale Integration">
                            </div>
                        </div>
                    </details>

                    <button type="button" onclick="MonitoringModule.addGASZiel()" class="btn-primary">
                        ➕ Ziel hinzufügen
                    </button>
                </div>

                <div class="gas-bewertung" id="gas-bewertung" style="display:none;">
                    <h4>Zielerreichung bewerten</h4>
                    <div id="gas-bewertung-form"></div>
                    <button type="button" onclick="MonitoringModule.saveGASBewertung()" class="btn-primary">
                        💾 Bewertung speichern
                    </button>
                </div>

                <div id="gas-ergebnis" class="analyse-result" style="display:none;"></div>

                <div class="referenz-box">
                    <small>Referenz: Kiresuk, T.J., & Sherman, R.E. (1968). Goal Attainment Scaling: A general method for evaluating comprehensive community mental health programs. Community Mental Health Journal, 4(6), 443-453.</small>
                </div>
            </div>
        `;
    },

    // GAS-Ziel hinzufügen
    addGASZiel: function() {
        const beschreibung = document.getElementById('gas-beschreibung')?.value;
        if (!beschreibung) {
            alert('Bitte geben Sie eine Zielbeschreibung ein.');
            return;
        }

        const ziel = this.createGASZiel({
            zielbereich: document.getElementById('gas-zielbereich')?.value,
            beschreibung: beschreibung,
            gewichtung: parseInt(document.getElementById('gas-gewichtung')?.value) || 1,
            minus2: document.getElementById('gas-minus2')?.value,
            minus1: document.getElementById('gas-minus1')?.value,
            null: document.getElementById('gas-null')?.value,
            plus1: document.getElementById('gas-plus1')?.value,
            plus2: document.getElementById('gas-plus2')?.value
        });

        if (!this.currentVerlauf) {
            this.currentVerlauf = this.createVerlauf();
        }
        this.currentVerlauf.gasZiele.push(ziel);

        try {
            localStorage.setItem('padopsych_verlauf', JSON.stringify(this.currentVerlauf));
        } catch (e) {
            console.warn('localStorage nicht verfügbar');
        }

        // UI aktualisieren
        this.renderGASZiele();

        // Formular leeren
        document.getElementById('gas-beschreibung').value = '';
        document.getElementById('gas-minus2').value = '';
        document.getElementById('gas-minus1').value = '';
        document.getElementById('gas-null').value = '';
        document.getElementById('gas-plus1').value = '';
        document.getElementById('gas-plus2').value = '';
    },

    // GAS-Ziele rendern
    renderGASZiele: function() {
        this.loadVerlaufFromStorage();

        const container = document.getElementById('gas-ziele-liste');
        const bewertungContainer = document.getElementById('gas-bewertung');

        if (!this.currentVerlauf || this.currentVerlauf.gasZiele.length === 0) {
            container.innerHTML = '<p class="placeholder-text">Noch keine Ziele definiert</p>';
            bewertungContainer.style.display = 'none';
            return;
        }

        let html = '<div class="gas-ziele-grid">';

        this.currentVerlauf.gasZiele.forEach((ziel, index) => {
            const letzteBewertung = ziel.bewertungen.length > 0
                ? ziel.bewertungen[ziel.bewertungen.length - 1]
                : null;

            html += `
                <div class="gas-ziel-card">
                    <div class="ziel-header">
                        <span class="ziel-nummer">${index + 1}</span>
                        <span class="ziel-bereich">${ziel.zielbereich}</span>
                        <span class="ziel-gewichtung">×${ziel.gewichtung}</span>
                    </div>
                    <div class="ziel-beschreibung">${ziel.beschreibung}</div>
                    ${letzteBewertung ? `
                        <div class="ziel-letzte-bewertung">
                            Letzte Bewertung: <strong>${letzteBewertung.score > 0 ? '+' : ''}${letzteBewertung.score}</strong>
                            (${new Date(letzteBewertung.datum).toLocaleDateString('de-DE')})
                        </div>
                    ` : '<div class="ziel-letzte-bewertung">Noch nicht bewertet</div>'}
                    <button type="button" onclick="MonitoringModule.removeGASZiel('${ziel.id}')" class="btn-tiny btn-danger">
                        🗑️
                    </button>
                </div>
            `;
        });

        html += '</div>';
        container.innerHTML = html;

        // Bewertungsformular anzeigen
        bewertungContainer.style.display = 'block';
        this.renderGASBewertungForm();
    },

    // GAS-Bewertungsformular rendern
    renderGASBewertungForm: function() {
        const formContainer = document.getElementById('gas-bewertung-form');
        if (!formContainer || !this.currentVerlauf) return;

        let html = '<div class="gas-bewertung-grid">';

        this.currentVerlauf.gasZiele.forEach((ziel, index) => {
            html += `
                <div class="gas-bewertung-item">
                    <label>Ziel ${index + 1}: ${ziel.beschreibung}</label>
                    <select id="gas-score-${ziel.id}" class="form-select">
                        ${this.gasSkala.niveaus.map(n =>
                            `<option value="${n.score}">${n.score > 0 ? '+' : ''}${n.score}: ${n.label}</option>`
                        ).join('')}
                    </select>
                </div>
            `;
        });

        html += '</div>';
        formContainer.innerHTML = html;
    },

    // GAS-Bewertung speichern
    saveGASBewertung: function() {
        if (!this.currentVerlauf || this.currentVerlauf.gasZiele.length === 0) return;

        const datum = new Date().toISOString();
        const scores = [];

        this.currentVerlauf.gasZiele.forEach(ziel => {
            const select = document.getElementById(`gas-score-${ziel.id}`);
            if (select) {
                const score = parseInt(select.value);
                ziel.bewertungen.push({
                    datum: datum,
                    score: score
                });
                scores.push(score);
            }
        });

        // Speichern
        try {
            localStorage.setItem('padopsych_verlauf', JSON.stringify(this.currentVerlauf));
        } catch (e) {
            console.warn('localStorage nicht verfügbar');
        }

        // T-Score berechnen und anzeigen
        const gewichtungen = this.currentVerlauf.gasZiele.map(z => z.gewichtung);
        const tScoreResult = this.gasSkala.berechneTScore(scores, gewichtungen);

        const ergebnisDiv = document.getElementById('gas-ergebnis');
        if (ergebnisDiv && tScoreResult) {
            ergebnisDiv.style.display = 'block';
            ergebnisDiv.innerHTML = `
                <h4>GAS-Ergebnis</h4>
                <div class="gas-tscore" style="color: ${tScoreResult.interpretation.farbe}">
                    <span class="tscore-value">T-Score: ${tScoreResult.tScore}</span>
                    <span class="tscore-interpretation">${tScoreResult.interpretation.text}</span>
                </div>
                <p>Durchschnittliche Zielerreichung: ${tScoreResult.durchschnitt}</p>
            `;
        }

        this.renderGASZiele();
    },

    // GAS-Ziel entfernen
    removeGASZiel: function(zielId) {
        if (!this.currentVerlauf) return;

        this.currentVerlauf.gasZiele = this.currentVerlauf.gasZiele.filter(z => z.id !== zielId);

        try {
            localStorage.setItem('padopsych_verlauf', JSON.stringify(this.currentVerlauf));
        } catch (e) {
            console.warn('localStorage nicht verfügbar');
        }

        this.renderGASZiele();
    },

    // UI: CGI
    generateCGIUI: function() {
        return `
            <div class="cgi-container">
                <h3>📋 Clinical Global Impression (CGI)</h3>
                <p class="info-text">Globale klinische Einschätzung des Schweregrades und der Veränderung.</p>

                <div class="cgi-section">
                    <h4>CGI-S: Schweregrad der Erkrankung</h4>
                    <select id="cgi-schweregrad" class="form-select">
                        ${this.cgiSkala.schweregrad.map(s =>
                            `<option value="${s.score}">${s.score} - ${s.label}</option>`
                        ).join('')}
                    </select>
                </div>

                <div class="cgi-section">
                    <h4>CGI-I: Verbesserung seit Behandlungsbeginn</h4>
                    <select id="cgi-verbesserung" class="form-select">
                        ${this.cgiSkala.verbesserung.map(v =>
                            `<option value="${v.score}">${v.score} - ${v.label}</option>`
                        ).join('')}
                    </select>
                </div>

                <div class="form-group">
                    <label>Klinische Notizen:</label>
                    <textarea id="cgi-notizen" class="form-textarea" placeholder="Beobachtungen und Begründung..."></textarea>
                </div>

                <button type="button" onclick="MonitoringModule.saveCGI()" class="btn-primary">
                    💾 CGI-Bewertung speichern
                </button>

                <div id="cgi-verlauf" class="cgi-verlauf" style="margin-top:20px;"></div>
            </div>
        `;
    },

    // CGI speichern
    saveCGI: function() {
        const schweregrad = parseInt(document.getElementById('cgi-schweregrad')?.value);
        const verbesserung = parseInt(document.getElementById('cgi-verbesserung')?.value);
        const notizen = document.getElementById('cgi-notizen')?.value || '';

        const eintrag = {
            datum: new Date().toISOString(),
            schweregrad: schweregrad,
            verbesserung: verbesserung,
            notizen: notizen
        };

        if (!this.currentVerlauf) {
            this.currentVerlauf = this.createVerlauf();
        }
        this.currentVerlauf.cgiVerlauf.push(eintrag);

        try {
            localStorage.setItem('padopsych_verlauf', JSON.stringify(this.currentVerlauf));
        } catch (e) {
            console.warn('localStorage nicht verfügbar');
        }

        this.renderCGIVerlauf();
        document.getElementById('cgi-notizen').value = '';
    },

    // CGI-Verlauf anzeigen
    renderCGIVerlauf: function() {
        this.loadVerlaufFromStorage();

        const container = document.getElementById('cgi-verlauf');
        if (!container || !this.currentVerlauf || this.currentVerlauf.cgiVerlauf.length === 0) {
            if (container) container.innerHTML = '';
            return;
        }

        let html = '<h4>CGI-Verlauf</h4><table class="cgi-table"><thead><tr><th>Datum</th><th>CGI-S</th><th>CGI-I</th><th>Notizen</th></tr></thead><tbody>';

        this.currentVerlauf.cgiVerlauf.slice().reverse().forEach(e => {
            const sLabel = this.cgiSkala.schweregrad.find(s => s.score === e.schweregrad)?.label || '';
            const iLabel = this.cgiSkala.verbesserung.find(v => v.score === e.verbesserung)?.label || '';

            html += `
                <tr>
                    <td>${new Date(e.datum).toLocaleDateString('de-DE')}</td>
                    <td>${e.schweregrad} - ${sLabel}</td>
                    <td>${e.verbesserung} - ${iLabel}</td>
                    <td>${e.notizen || '-'}</td>
                </tr>
            `;
        });

        html += '</tbody></table>';
        container.innerHTML = html;
    },

    // Verlauf aus localStorage laden
    loadVerlaufFromStorage: function() {
        if (this.currentVerlauf) return;

        try {
            const stored = localStorage.getItem('padopsych_verlauf');
            if (stored) {
                this.currentVerlauf = JSON.parse(stored);
            }
        } catch (e) {
            console.warn('Konnte Verlauf nicht laden:', e);
        }
    },

    // Aktueller Verlauf (State)
    currentVerlauf: null,

    // Verlauf exportieren
    exportVerlauf: function() {
        this.loadVerlaufFromStorage();

        if (!this.currentVerlauf) {
            alert('Keine Verlaufsdaten vorhanden.');
            return;
        }

        let exportText = '═══════════════════════════════════════\n';
        exportText += '       VERLAUFSMONITORING-EXPORT\n';
        exportText += '═══════════════════════════════════════\n\n';
        exportText += `Erstellt am: ${new Date().toLocaleDateString('de-DE')}\n`;
        exportText += `Patient-ID: ${this.currentVerlauf.patientId}\n\n`;

        // Symptom-Einträge
        if (this.currentVerlauf.eintraege.length > 0) {
            exportText += '\n--- SYMPTOMVERLAUF ---\n\n';

            Object.keys(this.symptomDimensionen).forEach(dim => {
                const stats = this.berechneStatistiken(this.currentVerlauf.eintraege, dim);
                if (stats) {
                    exportText += `${this.symptomDimensionen[dim].icon} ${this.symptomDimensionen[dim].label}:\n`;
                    exportText += `   Durchschnitt: ${stats.durchschnitt}, Trend: ${stats.trend}\n`;
                    exportText += `   Veränderung: ${stats.aenderung} (${stats.klinischSignifikant ? 'klinisch signifikant' : 'nicht signifikant'})\n\n`;
                }
            });
        }

        // GAS-Ziele
        if (this.currentVerlauf.gasZiele.length > 0) {
            exportText += '\n--- GAS-ZIELE ---\n\n';

            this.currentVerlauf.gasZiele.forEach((ziel, index) => {
                exportText += `Ziel ${index + 1}: ${ziel.beschreibung} (Gewichtung: ${ziel.gewichtung})\n`;

                if (ziel.bewertungen.length > 0) {
                    const letzte = ziel.bewertungen[ziel.bewertungen.length - 1];
                    exportText += `   Letzte Bewertung: ${letzte.score > 0 ? '+' : ''}${letzte.score} (${new Date(letzte.datum).toLocaleDateString('de-DE')})\n`;
                }
                exportText += '\n';
            });
        }

        // CGI-Verlauf
        if (this.currentVerlauf.cgiVerlauf.length > 0) {
            exportText += '\n--- CGI-VERLAUF ---\n\n';

            this.currentVerlauf.cgiVerlauf.forEach(e => {
                exportText += `${new Date(e.datum).toLocaleDateString('de-DE')}: CGI-S=${e.schweregrad}, CGI-I=${e.verbesserung}\n`;
                if (e.notizen) exportText += `   Notiz: ${e.notizen}\n`;
            });
        }

        // Download
        const blob = new Blob([exportText], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Verlaufsmonitoring_${new Date().toISOString().split('T')[0]}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
};

// Export für globalen Zugriff
if (typeof window !== 'undefined') {
    window.MonitoringModule = MonitoringModule;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = MonitoringModule;
}
