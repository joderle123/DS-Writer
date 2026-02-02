/**
 * ============================================================================
 * SESSION TOOLS MODULE - Interaktive Werkzeuge für Therapiesitzungen
 * ============================================================================
 *
 * Wissenschaftliche Grundlagen:
 * - Linehan, M.M. (2015). DBT Skills Training Manual. Guilford Press.
 * - Segal, Z.V., Williams, J.M.G., & Teasdale, J.D. (2013). MBCT for Depression.
 * - Plutchik, R. (2001). The Nature of Emotions. American Scientist.
 * - Gross, J.J. (2014). Handbook of Emotion Regulation. Guilford Press.
 * - Koole, S.L. (2009). The psychology of emotion regulation. Cognition & Emotion.
 *
 * ENTHALTENE TOOLS:
 * 1. Gefühlsthermometer (Visual Analogue Scale)
 * 2. Coping-Karten Generator (DBT-basiert)
 * 3. Stimmungstagebuch
 * 4. Emotionsrad (nach Plutchik)
 * 5. Ampelsystem für Selbstregulation
 * 6. Atemübungen (evidenzbasiert)
 */

const SessionToolsModule = {

    // ============================================================
    // WISSENSCHAFTLICHE REFERENZEN
    // ============================================================
    references: {
        emotionRegulation: {
            title: 'Emotionsregulation',
            sources: [
                'Gross, J.J. (2014). Handbook of Emotion Regulation. Guilford Press.',
                'Koole, S.L. (2009). The psychology of emotion regulation. Cognition & Emotion, 23(1), 4-41.',
                'Thompson, R.A. (1994). Emotion regulation: A theme in search of definition.'
            ]
        },
        dbtSkills: {
            title: 'DBT-Skills',
            sources: [
                'Linehan, M.M. (2015). DBT Skills Training Manual. Guilford Press.',
                'Rathus, J.H. & Miller, A.L. (2015). DBT Skills Manual for Adolescents.'
            ]
        },
        breathingTechniques: {
            title: 'Atemtechniken',
            sources: [
                'Brown, R.P. & Gerbarg, P.L. (2012). The Healing Power of the Breath. Shambhala.',
                'Ma, X. et al. (2017). The Effect of Diaphragmatic Breathing. Frontiers in Psychology.',
                'Zaccaro, A. et al. (2018). How Breath-Control Can Change Your Life. Frontiers in Human Neuroscience.'
            ]
        },
        emotionWheel: {
            title: 'Emotionsrad',
            sources: [
                'Plutchik, R. (2001). The Nature of Emotions. American Scientist, 89(4), 344-350.',
                'Plutchik, R. & Kellerman, H. (1980). Emotion: Theory, Research, and Experience.'
            ]
        }
    },

    // ============================================================
    // GEFÜHLSTHERMOMETER
    // ============================================================

    thermometerScales: {
        general: {
            name: 'Allgemeines Befinden',
            lowLabel: 'Sehr schlecht',
            highLabel: 'Sehr gut',
            interpretation: {
                low: { range: [0, 3], text: 'Niedriges Wohlbefinden - Unterstützung empfohlen', color: '#ef4444' },
                medium: { range: [4, 6], text: 'Moderates Wohlbefinden', color: '#f59e0b' },
                high: { range: [7, 10], text: 'Gutes Wohlbefinden', color: '#22c55e' }
            }
        },
        anxiety: {
            name: 'Angst-Level',
            lowLabel: 'Keine Angst',
            highLabel: 'Extreme Angst',
            interpretation: {
                low: { range: [0, 3], text: 'Geringe Angst - normaler Bereich', color: '#22c55e' },
                medium: { range: [4, 6], text: 'Moderate Angst - Coping-Strategien anwenden', color: '#f59e0b' },
                high: { range: [7, 10], text: 'Hohe Angst - Intervention empfohlen', color: '#ef4444' }
            }
        },
        anger: {
            name: 'Wut-Level',
            lowLabel: 'Ganz ruhig',
            highLabel: 'Extrem wütend',
            interpretation: {
                low: { range: [0, 3], text: 'Kontrollierter Bereich', color: '#22c55e' },
                medium: { range: [4, 6], text: 'Erhöhte Erregung - Selbstregulation aktivieren', color: '#f59e0b' },
                high: { range: [7, 10], text: 'Kritischer Bereich - Deeskalation nötig', color: '#ef4444' }
            }
        },
        sadness: {
            name: 'Traurigkeit',
            lowLabel: 'Nicht traurig',
            highLabel: 'Sehr traurig',
            interpretation: {
                low: { range: [0, 3], text: 'Geringe Traurigkeit', color: '#22c55e' },
                medium: { range: [4, 6], text: 'Spürbare Traurigkeit - Aktivitätsaufbau empfohlen', color: '#f59e0b' },
                high: { range: [7, 10], text: 'Starke Traurigkeit - vertiefte Exploration', color: '#ef4444' }
            }
        }
    },

    generateEmotionThermometerUI: function() {
        return `
            <div class="thermometer-container">
                <div class="tool-info-box">
                    <h4>📚 Wissenschaftlicher Hintergrund</h4>
                    <p>Das Gefühlsthermometer basiert auf der Visual Analogue Scale (VAS), einer validierten Methode
                    zur subjektiven Einschätzung von Emotionsintensität (Gross, 2014). Es fördert die
                    <strong>Emotionswahrnehmung</strong> - ein zentraler Aspekt der Emotionsregulation.</p>
                </div>

                <div class="thermometer-selector">
                    <label>Welches Gefühl möchtest du messen?</label>
                    <select id="thermometer-type" class="form-select" onchange="SessionToolsModule.updateThermometer()">
                        <option value="general">😊 Allgemeines Befinden</option>
                        <option value="anxiety">😰 Angst</option>
                        <option value="anger">😤 Wut</option>
                        <option value="sadness">😢 Traurigkeit</option>
                    </select>
                </div>

                <div class="thermometer-visual">
                    <div class="thermometer-scale" id="thermometer-scale">
                        <div class="thermometer-fill" id="thermometer-fill" style="height: 50%;"></div>
                        <div class="thermometer-marker" id="thermometer-marker" style="bottom: 50%;"></div>
                    </div>
                    <div class="thermometer-labels">
                        <span class="label-top" id="thermometer-high-label">Sehr gut</span>
                        <span class="label-mid">5</span>
                        <span class="label-bottom" id="thermometer-low-label">Sehr schlecht</span>
                    </div>
                    <div class="thermometer-input">
                        <input type="range" id="thermometer-value" min="0" max="10" value="5"
                               orient="vertical" class="vertical-slider"
                               oninput="SessionToolsModule.updateThermometerDisplay(this.value)">
                    </div>
                </div>

                <div class="thermometer-result">
                    <div class="current-value">
                        <span id="thermometer-number" class="big-number">5</span>
                        <span class="value-label">von 10</span>
                    </div>
                    <div id="thermometer-interpretation" class="interpretation-box">
                        Bewege den Regler, um dein Gefühl einzuschätzen.
                    </div>
                </div>

                <div class="thermometer-actions">
                    <button type="button" class="btn btn-primary" onclick="SessionToolsModule.saveThermometerReading()">
                        💾 Eintrag speichern
                    </button>
                    <button type="button" class="btn btn-secondary" onclick="SessionToolsModule.showThermometerHistory()">
                        📊 Verlauf anzeigen
                    </button>
                </div>

                <div id="thermometer-history" style="display:none; margin-top:20px;"></div>

                <div class="reference-footer">
                    <small>Referenz: Gross, J.J. (2014). Handbook of Emotion Regulation. Guilford Press.</small>
                </div>
            </div>
        `;
    },

    updateThermometer: function() {
        const type = document.getElementById('thermometer-type')?.value || 'general';
        const scale = this.thermometerScales[type];

        document.getElementById('thermometer-high-label').textContent = scale.highLabel;
        document.getElementById('thermometer-low-label').textContent = scale.lowLabel;

        const currentValue = document.getElementById('thermometer-value')?.value || 5;
        this.updateThermometerDisplay(currentValue);
    },

    updateThermometerDisplay: function(value) {
        const numValue = parseInt(value);
        const type = document.getElementById('thermometer-type')?.value || 'general';
        const scale = this.thermometerScales[type];

        // Update visual
        const percentage = numValue * 10;
        const fill = document.getElementById('thermometer-fill');
        const marker = document.getElementById('thermometer-marker');
        const numberDisplay = document.getElementById('thermometer-number');

        if (fill) fill.style.height = percentage + '%';
        if (marker) marker.style.bottom = percentage + '%';
        if (numberDisplay) numberDisplay.textContent = numValue;

        // Update color based on interpretation
        let interpretation = scale.interpretation.medium;
        if (numValue <= 3) interpretation = scale.interpretation.low;
        else if (numValue >= 7) interpretation = scale.interpretation.high;

        if (fill) fill.style.backgroundColor = interpretation.color;

        // For inverted scales (anxiety, anger, sadness), swap colors
        if (type !== 'general') {
            if (numValue <= 3) interpretation = scale.interpretation.low;
            else if (numValue >= 7) interpretation = scale.interpretation.high;
        }

        const interpBox = document.getElementById('thermometer-interpretation');
        if (interpBox) {
            interpBox.innerHTML = `<span style="color:${interpretation.color}">${interpretation.text}</span>`;
        }
    },

    thermometerHistory: [],

    saveThermometerReading: function() {
        const type = document.getElementById('thermometer-type')?.value || 'general';
        const value = parseInt(document.getElementById('thermometer-value')?.value || 5);

        const entry = {
            timestamp: new Date().toISOString(),
            type: type,
            typeName: this.thermometerScales[type].name,
            value: value
        };

        this.thermometerHistory.push(entry);

        try {
            localStorage.setItem('padopsych_thermometer_history', JSON.stringify(this.thermometerHistory));
        } catch(e) {}

        this.showThermometerHistory();
        alert('Eintrag gespeichert!');
    },

    showThermometerHistory: function() {
        try {
            const stored = localStorage.getItem('padopsych_thermometer_history');
            if (stored) this.thermometerHistory = JSON.parse(stored);
        } catch(e) {}

        const container = document.getElementById('thermometer-history');
        if (!container) return;

        container.style.display = 'block';

        if (this.thermometerHistory.length === 0) {
            container.innerHTML = '<p>Noch keine Einträge vorhanden.</p>';
            return;
        }

        const recent = this.thermometerHistory.slice(-10).reverse();

        container.innerHTML = `
            <h4>📊 Letzte Einträge</h4>
            <table class="history-table">
                <thead>
                    <tr><th>Datum</th><th>Typ</th><th>Wert</th></tr>
                </thead>
                <tbody>
                    ${recent.map(e => `
                        <tr>
                            <td>${new Date(e.timestamp).toLocaleString('de-DE')}</td>
                            <td>${e.typeName}</td>
                            <td><strong>${e.value}</strong>/10</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    },

    // ============================================================
    // COPING-KARTEN (DBT-basiert)
    // ============================================================

    copingCategories: {
        tipp: {
            name: 'TIPP-Skills',
            icon: '🧊',
            color: '#3b82f6',
            description: 'Schnelle körperliche Regulation (nach Linehan)',
            strategies: [
                { name: 'Temperatur', instruction: 'Kaltes Wasser ins Gesicht oder Eiswürfel halten (aktiviert Tauchreflex)', emoji: '🧊' },
                { name: 'Intensive Bewegung', instruction: 'Kurze intensive Bewegung (Hampelmänner, Treppen laufen) für 5-10 Min', emoji: '🏃' },
                { name: 'Paced Breathing', instruction: 'Ausatmen länger als Einatmen (z.B. 4 ein, 6 aus)', emoji: '🌬️' },
                { name: 'Progressive Muskelentspannung', instruction: 'Muskeln 5 Sek. anspannen, 10 Sek. entspannen', emoji: '💪' }
            ]
        },
        accepts: {
            name: 'ACCEPTS-Skills',
            icon: '🎯',
            color: '#8b5cf6',
            description: 'Ablenkung bei Krisen (nach Linehan)',
            strategies: [
                { name: 'Activities', instruction: 'Aktivitäten: Sport, Spaziergang, Spiel, Hobby', emoji: '🚴' },
                { name: 'Contributing', instruction: 'Anderen helfen: Freundlichkeit, Hilfsbereitschaft', emoji: '🤝' },
                { name: 'Comparisons', instruction: 'Vergleiche: Wie war es früher? Wie geht es anderen?', emoji: '⚖️' },
                { name: 'Emotions', instruction: 'Andere Gefühle erzeugen: Lustiger Film, Musik', emoji: '🎵' },
                { name: 'Push away', instruction: 'Wegschieben: Mental in eine Schublade legen', emoji: '📦' },
                { name: 'Thoughts', instruction: 'Andere Gedanken: Rätsel, Zählen, Kategorien-Spiel', emoji: '🧩' },
                { name: 'Sensations', instruction: 'Körperempfindungen: Saures essen, Eiswürfel, Duft', emoji: '🍋' }
            ]
        },
        improve: {
            name: 'IMPROVE-Skills',
            icon: '✨',
            color: '#ec4899',
            description: 'Moment verbessern (nach Linehan)',
            strategies: [
                { name: 'Imagery', instruction: 'Vorstellung: Sicheren Ort visualisieren', emoji: '🏝️' },
                { name: 'Meaning', instruction: 'Sinn finden: Was kann ich daraus lernen?', emoji: '💡' },
                { name: 'Prayer/Meditation', instruction: 'Meditation, Gebet, Achtsamkeit', emoji: '🧘' },
                { name: 'Relaxation', instruction: 'Entspannung: Atemübung, PMR', emoji: '😌' },
                { name: 'One thing', instruction: 'Eine Sache auf einmal, im Moment sein', emoji: '🎯' },
                { name: 'Vacation', instruction: 'Kurze Auszeit nehmen (mental oder real)', emoji: '🌴' },
                { name: 'Encouragement', instruction: 'Selbstermutigung: "Ich schaffe das"', emoji: '💪' }
            ]
        },
        wise: {
            name: 'WISE MIND',
            icon: '🧠',
            color: '#22c55e',
            description: 'Balance zwischen Emotion und Verstand',
            strategies: [
                { name: 'Beobachten', instruction: 'Beobachte deine Gedanken und Gefühle ohne zu urteilen', emoji: '👁️' },
                { name: 'Beschreiben', instruction: 'Beschreibe was du erlebst: "Ich bemerke..."', emoji: '📝' },
                { name: 'Teilnehmen', instruction: 'Sei ganz bei dem was du tust', emoji: '🙌' },
                { name: 'Nicht-Urteilen', instruction: 'Bewerte nicht, beobachte nur', emoji: '☯️' },
                { name: 'Fokussieren', instruction: 'Mache eine Sache achtsam', emoji: '🔍' }
            ]
        }
    },

    generateCopingCardsUI: function() {
        let categoriesHtml = '';

        Object.entries(this.copingCategories).forEach(([key, cat]) => {
            categoriesHtml += `
                <div class="coping-category" style="border-left: 4px solid ${cat.color};">
                    <div class="category-header" onclick="SessionToolsModule.toggleCopingCategory('${key}')">
                        <span class="category-icon">${cat.icon}</span>
                        <div class="category-info">
                            <h4>${cat.name}</h4>
                            <p>${cat.description}</p>
                        </div>
                        <span class="expand-icon">▼</span>
                    </div>
                    <div class="category-strategies" id="coping-${key}" style="display:none;">
                        ${cat.strategies.map((s, i) => `
                            <div class="strategy-card" style="border-left: 3px solid ${cat.color};">
                                <div class="strategy-header">
                                    <span class="strategy-emoji">${s.emoji}</span>
                                    <strong>${s.name}</strong>
                                </div>
                                <p class="strategy-instruction">${s.instruction}</p>
                                <button type="button" class="btn-tiny" onclick="SessionToolsModule.addToPersonalDeck('${key}', ${i})">
                                    ➕ Zu meinem Deck
                                </button>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        });

        return `
            <div class="coping-cards-container">
                <div class="tool-info-box">
                    <h4>📚 Wissenschaftlicher Hintergrund</h4>
                    <p>Die Coping-Karten basieren auf der <strong>Dialektisch-Behavioralen Therapie (DBT)</strong>
                    nach Marsha Linehan. DBT-Skills sind evidenzbasierte Strategien zur Emotionsregulation,
                    Stresstoleranz und zwischenmenschlichen Fertigkeiten mit hoher Wirksamkeit bei
                    Jugendlichen (Rathus & Miller, 2015).</p>
                </div>

                <div class="coping-categories">
                    ${categoriesHtml}
                </div>

                <div class="personal-deck-section">
                    <h4>🃏 Mein persönliches Coping-Deck</h4>
                    <div id="personal-deck" class="personal-deck">
                        <p class="placeholder-text">Klicke auf "Zu meinem Deck" um Strategien hinzuzufügen</p>
                    </div>
                    <div class="deck-actions">
                        <button type="button" class="btn btn-secondary" onclick="SessionToolsModule.printPersonalDeck()">
                            🖨️ Deck drucken
                        </button>
                        <button type="button" class="btn btn-secondary" onclick="SessionToolsModule.clearPersonalDeck()">
                            🗑️ Deck leeren
                        </button>
                    </div>
                </div>

                <div class="reference-footer">
                    <small>Referenz: Linehan, M.M. (2015). DBT Skills Training Manual. Guilford Press. |
                    Rathus, J.H. & Miller, A.L. (2015). DBT Skills Manual for Adolescents.</small>
                </div>
            </div>
        `;
    },

    personalDeck: [],

    toggleCopingCategory: function(key) {
        const el = document.getElementById(`coping-${key}`);
        if (el) {
            el.style.display = el.style.display === 'none' ? 'block' : 'none';
        }
    },

    addToPersonalDeck: function(categoryKey, strategyIndex) {
        const cat = this.copingCategories[categoryKey];
        const strategy = cat.strategies[strategyIndex];

        // Check if already in deck
        const exists = this.personalDeck.some(s =>
            s.categoryKey === categoryKey && s.strategyIndex === strategyIndex
        );

        if (!exists) {
            this.personalDeck.push({
                categoryKey,
                strategyIndex,
                categoryName: cat.name,
                categoryIcon: cat.icon,
                color: cat.color,
                ...strategy
            });
            this.renderPersonalDeck();
        }
    },

    renderPersonalDeck: function() {
        const container = document.getElementById('personal-deck');
        if (!container) return;

        if (this.personalDeck.length === 0) {
            container.innerHTML = '<p class="placeholder-text">Klicke auf "Zu meinem Deck" um Strategien hinzuzufügen</p>';
            return;
        }

        container.innerHTML = this.personalDeck.map((s, i) => `
            <div class="deck-card" style="border-color: ${s.color};">
                <div class="deck-card-header">
                    <span>${s.emoji} ${s.name}</span>
                    <button type="button" class="btn-tiny" onclick="SessionToolsModule.removeFromDeck(${i})">×</button>
                </div>
                <p class="deck-card-instruction">${s.instruction}</p>
                <span class="deck-card-category">${s.categoryIcon} ${s.categoryName}</span>
            </div>
        `).join('');
    },

    removeFromDeck: function(index) {
        this.personalDeck.splice(index, 1);
        this.renderPersonalDeck();
    },

    clearPersonalDeck: function() {
        if (confirm('Deck wirklich leeren?')) {
            this.personalDeck = [];
            this.renderPersonalDeck();
        }
    },

    printPersonalDeck: function() {
        if (this.personalDeck.length === 0) {
            alert('Deck ist leer');
            return;
        }

        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <!DOCTYPE html>
            <html><head><title>Mein Coping-Deck</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                .card { border: 2px solid #333; border-radius: 8px; padding: 16px; margin: 10px;
                        display: inline-block; width: 200px; vertical-align: top; page-break-inside: avoid; }
                .card h3 { margin: 0 0 10px 0; font-size: 14px; }
                .card p { margin: 0; font-size: 12px; }
                .card .category { font-size: 10px; color: #666; margin-top: 10px; }
                @media print { .card { break-inside: avoid; } }
            </style>
            </head><body>
            <h1>🃏 Mein Coping-Deck</h1>
            <p>Basierend auf DBT-Skills (Linehan, 2015)</p>
            ${this.personalDeck.map(s => `
                <div class="card" style="border-color: ${s.color};">
                    <h3>${s.emoji} ${s.name}</h3>
                    <p>${s.instruction}</p>
                    <div class="category">${s.categoryIcon} ${s.categoryName}</div>
                </div>
            `).join('')}
            <p style="margin-top:30px;font-size:10px;color:#666;">
                Referenz: Linehan, M.M. (2015). DBT Skills Training Manual. Guilford Press.
            </p>
            </body></html>
        `);
        printWindow.document.close();
        printWindow.onload = function() { printWindow.print(); };
    },

    // ============================================================
    // ATEMÜBUNGEN
    // ============================================================

    breathingExercises: {
        diaphragmatic: {
            name: 'Zwerchfellatmung',
            description: 'Grundlegende Bauchatmung zur Aktivierung des Parasympathikus',
            ageRange: '6+ Jahre',
            evidence: 'Evidenzgrad: Hoch (Ma et al., 2017)',
            steps: [
                { phase: 'einatmen', duration: 4, instruction: 'Durch die Nase einatmen, Bauch hebt sich' },
                { phase: 'ausatmen', duration: 6, instruction: 'Langsam durch den Mund ausatmen, Bauch senkt sich' }
            ],
            cycles: 10
        },
        boxBreathing: {
            name: 'Box-Atmung (4-4-4-4)',
            description: 'Strukturierte Technik für Fokus und Stressreduktion',
            ageRange: '8+ Jahre',
            evidence: 'Verwendet von US Navy SEALs, evidenzbasiert',
            steps: [
                { phase: 'einatmen', duration: 4, instruction: '4 Sekunden einatmen' },
                { phase: 'halten', duration: 4, instruction: '4 Sekunden halten' },
                { phase: 'ausatmen', duration: 4, instruction: '4 Sekunden ausatmen' },
                { phase: 'halten', duration: 4, instruction: '4 Sekunden halten' }
            ],
            cycles: 4
        },
        fourSevenEight: {
            name: '4-7-8 Atmung',
            description: 'Beruhigende Technik nach Dr. Andrew Weil',
            ageRange: '10+ Jahre',
            evidence: 'Klinisch empfohlen für Angst und Schlafprobleme',
            steps: [
                { phase: 'einatmen', duration: 4, instruction: 'Durch die Nase einatmen' },
                { phase: 'halten', duration: 7, instruction: 'Atem anhalten' },
                { phase: 'ausatmen', duration: 8, instruction: 'Mit Geräusch durch den Mund ausatmen' }
            ],
            cycles: 4
        },
        starBreathing: {
            name: 'Stern-Atmung',
            description: 'Kinderfreundliche visuelle Atemübung',
            ageRange: '5-10 Jahre',
            evidence: 'Angepasst für jüngere Kinder',
            visual: true,
            instruction: 'Fahre mit dem Finger den Stern nach: Hoch = einatmen, Runter = ausatmen'
        }
    },

    generateBreathingExercisesUI: function() {
        let exercisesHtml = '';

        Object.entries(this.breathingExercises).forEach(([key, ex]) => {
            exercisesHtml += `
                <div class="breathing-exercise-card">
                    <h4>${ex.name}</h4>
                    <p class="exercise-description">${ex.description}</p>
                    <div class="exercise-meta">
                        <span class="age-range">👶 ${ex.ageRange}</span>
                        <span class="evidence">${ex.evidence}</span>
                    </div>
                    <button type="button" class="btn btn-primary" onclick="SessionToolsModule.startBreathingExercise('${key}')">
                        ▶️ Übung starten
                    </button>
                </div>
            `;
        });

        return `
            <div class="breathing-container">
                <div class="tool-info-box">
                    <h4>📚 Wissenschaftlicher Hintergrund</h4>
                    <p>Kontrolliertes Atmen aktiviert den <strong>Parasympathikus</strong> (Vagusnerv) und reduziert
                    nachweislich Stress, Angst und körperliche Anspannung. Eine Meta-Analyse (Zaccaro et al., 2018)
                    zeigt signifikante Effekte auf HRV, Cortisol und subjektives Wohlbefinden.</p>
                </div>

                <div class="breathing-exercises-grid">
                    ${exercisesHtml}
                </div>

                <div id="breathing-animation" class="breathing-animation-container" style="display:none;">
                    <div class="animation-header">
                        <h3 id="breathing-title">Atemübung</h3>
                        <button type="button" class="btn-close" onclick="SessionToolsModule.stopBreathingExercise()">✕</button>
                    </div>
                    <div class="breathing-circle" id="breathing-circle">
                        <span id="breathing-instruction">Bereit?</span>
                    </div>
                    <div class="breathing-progress">
                        <span>Zyklus: <span id="breathing-cycle">0</span> / <span id="breathing-total">0</span></span>
                    </div>
                    <div class="breathing-timer" id="breathing-timer">0</div>
                </div>

                <div class="reference-footer">
                    <small>Referenzen: Ma, X. et al. (2017). The Effect of Diaphragmatic Breathing. Frontiers in Psychology. |
                    Zaccaro, A. et al. (2018). How Breath-Control Can Change Your Life. Frontiers in Human Neuroscience.</small>
                </div>
            </div>
        `;
    },

    breathingInterval: null,
    breathingTimeout: null,

    startBreathingExercise: function(key) {
        const exercise = this.breathingExercises[key];
        if (!exercise || !exercise.steps) {
            alert('Diese Übung hat ein visuelles Format. Folge der Anleitung: ' + (exercise.instruction || ''));
            return;
        }

        const container = document.getElementById('breathing-animation');
        const circle = document.getElementById('breathing-circle');
        const instruction = document.getElementById('breathing-instruction');
        const cycleDisplay = document.getElementById('breathing-cycle');
        const totalDisplay = document.getElementById('breathing-total');
        const timerDisplay = document.getElementById('breathing-timer');
        const titleDisplay = document.getElementById('breathing-title');

        if (!container) return;

        container.style.display = 'block';
        titleDisplay.textContent = exercise.name;
        totalDisplay.textContent = exercise.cycles;

        let currentCycle = 0;
        let currentStep = 0;

        const runStep = () => {
            if (currentCycle >= exercise.cycles) {
                this.stopBreathingExercise();
                instruction.textContent = 'Fertig! Gut gemacht! 🎉';
                return;
            }

            const step = exercise.steps[currentStep];
            instruction.textContent = step.instruction;

            // Animate circle
            if (step.phase === 'einatmen') {
                circle.style.transform = 'scale(1.3)';
                circle.style.backgroundColor = '#22c55e';
            } else if (step.phase === 'ausatmen') {
                circle.style.transform = 'scale(1)';
                circle.style.backgroundColor = '#3b82f6';
            } else {
                circle.style.backgroundColor = '#f59e0b';
            }

            // Countdown
            let remaining = step.duration;
            timerDisplay.textContent = remaining;

            this.breathingInterval = setInterval(() => {
                remaining--;
                timerDisplay.textContent = remaining;
                if (remaining <= 0) {
                    clearInterval(this.breathingInterval);
                }
            }, 1000);

            this.breathingTimeout = setTimeout(() => {
                currentStep++;
                if (currentStep >= exercise.steps.length) {
                    currentStep = 0;
                    currentCycle++;
                    cycleDisplay.textContent = currentCycle;
                }
                runStep();
            }, step.duration * 1000);
        };

        cycleDisplay.textContent = '0';
        runStep();
    },

    stopBreathingExercise: function() {
        clearInterval(this.breathingInterval);
        clearTimeout(this.breathingTimeout);
        const container = document.getElementById('breathing-animation');
        if (container) container.style.display = 'none';
    },

    // ============================================================
    // STIMMUNGSTAGEBUCH
    // ============================================================

    moodEntries: [],

    generateMoodDiaryUI: function() {
        return `
            <div class="mood-diary-container">
                <div class="tool-info-box">
                    <h4>📚 Wissenschaftlicher Hintergrund</h4>
                    <p>Das Stimmungstagebuch ist eine zentrale Technik der <strong>Kognitiven Verhaltenstherapie (KVT)</strong>.
                    Das Selbstmonitoring von Stimmung, Gedanken und Verhalten erhöht die Selbstwahrnehmung und
                    ermöglicht das Erkennen von Mustern und Auslösern (Beck, 2011).</p>
                </div>

                <div class="mood-entry-form">
                    <h4>📝 Neuer Eintrag</h4>

                    <div class="form-row">
                        <div class="form-group">
                            <label>Datum:</label>
                            <input type="date" id="mood-date" class="form-input" value="${new Date().toISOString().split('T')[0]}">
                        </div>
                        <div class="form-group">
                            <label>Uhrzeit:</label>
                            <input type="time" id="mood-time" class="form-input" value="${new Date().toTimeString().slice(0,5)}">
                        </div>
                    </div>

                    <div class="mood-sliders">
                        <div class="mood-slider-group">
                            <label>😊 Stimmung: <span id="mood-value-display">5</span>/10</label>
                            <input type="range" id="mood-value" min="0" max="10" value="5"
                                   oninput="document.getElementById('mood-value-display').textContent = this.value">
                        </div>
                        <div class="mood-slider-group">
                            <label>⚡ Energie: <span id="energy-value-display">5</span>/10</label>
                            <input type="range" id="energy-value" min="0" max="10" value="5"
                                   oninput="document.getElementById('energy-value-display').textContent = this.value">
                        </div>
                        <div class="mood-slider-group">
                            <label>😰 Angst: <span id="anxiety-value-display">3</span>/10</label>
                            <input type="range" id="anxiety-value" min="0" max="10" value="3"
                                   oninput="document.getElementById('anxiety-value-display').textContent = this.value">
                        </div>
                    </div>

                    <div class="form-group">
                        <label>📍 Situation / Was ist passiert?</label>
                        <textarea id="mood-situation" class="form-textarea" rows="2" placeholder="Beschreibe kurz die Situation..."></textarea>
                    </div>

                    <div class="form-group">
                        <label>💭 Gedanken</label>
                        <textarea id="mood-thoughts" class="form-textarea" rows="2" placeholder="Was hast du gedacht?"></textarea>
                    </div>

                    <div class="form-group">
                        <label>🛠️ Was hast du gemacht? (Coping)</label>
                        <textarea id="mood-coping" class="form-textarea" rows="2" placeholder="Welche Strategie hast du angewendet?"></textarea>
                    </div>

                    <button type="button" class="btn btn-primary" onclick="SessionToolsModule.saveMoodEntry()">
                        💾 Eintrag speichern
                    </button>
                </div>

                <div class="mood-history-section">
                    <h4>📊 Meine Einträge</h4>
                    <div id="mood-history"></div>
                </div>

                <div class="reference-footer">
                    <small>Referenz: Beck, J.S. (2011). Cognitive Behavior Therapy: Basics and Beyond. Guilford Press.</small>
                </div>
            </div>
        `;
    },

    saveMoodEntry: function() {
        const entry = {
            id: Date.now().toString(),
            timestamp: new Date().toISOString(),
            date: document.getElementById('mood-date')?.value,
            time: document.getElementById('mood-time')?.value,
            mood: parseInt(document.getElementById('mood-value')?.value || 5),
            energy: parseInt(document.getElementById('energy-value')?.value || 5),
            anxiety: parseInt(document.getElementById('anxiety-value')?.value || 3),
            situation: document.getElementById('mood-situation')?.value || '',
            thoughts: document.getElementById('mood-thoughts')?.value || '',
            coping: document.getElementById('mood-coping')?.value || ''
        };

        this.moodEntries.push(entry);

        try {
            localStorage.setItem('padopsych_mood_diary', JSON.stringify(this.moodEntries));
        } catch(e) {}

        // Clear form
        document.getElementById('mood-situation').value = '';
        document.getElementById('mood-thoughts').value = '';
        document.getElementById('mood-coping').value = '';

        this.renderMoodHistory();
        alert('Eintrag gespeichert!');
    },

    renderMoodHistory: function() {
        try {
            const stored = localStorage.getItem('padopsych_mood_diary');
            if (stored) this.moodEntries = JSON.parse(stored);
        } catch(e) {}

        const container = document.getElementById('mood-history');
        if (!container) return;

        if (this.moodEntries.length === 0) {
            container.innerHTML = '<p class="placeholder-text">Noch keine Einträge vorhanden.</p>';
            return;
        }

        const recent = this.moodEntries.slice(-7).reverse();

        container.innerHTML = `
            <div class="mood-entries-list">
                ${recent.map(e => `
                    <div class="mood-entry-card">
                        <div class="entry-header">
                            <span class="entry-date">${e.date} ${e.time}</span>
                            <div class="entry-values">
                                <span class="mood-badge" style="background:${this.getMoodColor(e.mood)}">😊 ${e.mood}</span>
                                <span class="energy-badge">⚡ ${e.energy}</span>
                                <span class="anxiety-badge" style="background:${this.getMoodColor(10 - e.anxiety)}">😰 ${e.anxiety}</span>
                            </div>
                        </div>
                        ${e.situation ? `<p><strong>Situation:</strong> ${e.situation}</p>` : ''}
                        ${e.thoughts ? `<p><strong>Gedanken:</strong> ${e.thoughts}</p>` : ''}
                        ${e.coping ? `<p><strong>Coping:</strong> ${e.coping}</p>` : ''}
                    </div>
                `).join('')}
            </div>
        `;
    },

    getMoodColor: function(value) {
        if (value <= 3) return '#fee2e2';
        if (value <= 6) return '#fef3c7';
        return '#d1fae5';
    },

    // ============================================================
    // EMOTIONSRAD (nach Plutchik)
    // ============================================================

    emotionWheel: {
        joy: { name: 'Freude', color: '#fbbf24', emoji: '😊', opposite: 'sadness',
            secondary: ['Begeisterung', 'Stolz', 'Optimismus', 'Dankbarkeit', 'Zufriedenheit'] },
        sadness: { name: 'Traurigkeit', color: '#3b82f6', emoji: '😢', opposite: 'joy',
            secondary: ['Einsamkeit', 'Enttäuschung', 'Hoffnungslosigkeit', 'Verletzung', 'Sehnsucht'] },
        anger: { name: 'Wut', color: '#ef4444', emoji: '😠', opposite: 'fear',
            secondary: ['Ärger', 'Frustration', 'Eifersucht', 'Empörung', 'Verachtung'] },
        fear: { name: 'Angst', color: '#8b5cf6', emoji: '😨', opposite: 'anger',
            secondary: ['Nervosität', 'Unsicherheit', 'Panik', 'Sorge', 'Hilflosigkeit'] },
        surprise: { name: 'Überraschung', color: '#ec4899', emoji: '😲', opposite: 'anticipation',
            secondary: ['Erstaunen', 'Verwirrung', 'Schock', 'Faszination'] },
        disgust: { name: 'Ekel', color: '#22c55e', emoji: '🤢', opposite: 'trust',
            secondary: ['Abscheu', 'Ablehnung', 'Verachtung'] }
    },

    generateEmotionWheelUI: function() {
        let wheelHtml = '';

        Object.entries(this.emotionWheel).forEach(([key, emotion]) => {
            wheelHtml += `
                <div class="emotion-wheel-segment" style="background-color: ${emotion.color}20; border-color: ${emotion.color};"
                     onclick="SessionToolsModule.selectPrimaryEmotion('${key}')">
                    <span class="emotion-emoji">${emotion.emoji}</span>
                    <span class="emotion-name">${emotion.name}</span>
                </div>
            `;
        });

        return `
            <div class="emotion-wheel-container">
                <div class="tool-info-box">
                    <h4>📚 Wissenschaftlicher Hintergrund</h4>
                    <p>Das Emotionsrad basiert auf <strong>Robert Plutchiks Theorie der Grundemotionen</strong> (2001).
                    Es unterscheidet 6-8 primäre Emotionen, die sich in Intensität und Kombination variieren.
                    Das Rad hilft beim <strong>differenzierten Benennen</strong> von Gefühlen - eine Kernkompetenz
                    der emotionalen Intelligenz und Voraussetzung für effektive Emotionsregulation.</p>
                </div>

                <h4>Wähle dein Grundgefühl:</h4>
                <div class="emotion-wheel-grid">
                    ${wheelHtml}
                </div>

                <div id="emotion-secondary" class="emotion-secondary-panel" style="display:none;">
                    <h4>Genauer: Welche Variante passt besser?</h4>
                    <div id="emotion-secondary-options" class="secondary-options"></div>
                </div>

                <div id="emotion-result" class="emotion-result" style="display:none;">
                    <h4>Dein Gefühl:</h4>
                    <div id="emotion-result-content"></div>
                    <p class="emotion-tip" id="emotion-tip"></p>
                </div>

                <div class="reference-footer">
                    <small>Referenz: Plutchik, R. (2001). The Nature of Emotions. American Scientist, 89(4), 344-350.</small>
                </div>
            </div>
        `;
    },

    selectedEmotion: null,

    selectPrimaryEmotion: function(key) {
        const emotion = this.emotionWheel[key];
        this.selectedEmotion = { primary: key, ...emotion };

        const secondaryPanel = document.getElementById('emotion-secondary');
        const optionsContainer = document.getElementById('emotion-secondary-options');

        if (secondaryPanel && optionsContainer) {
            secondaryPanel.style.display = 'block';

            optionsContainer.innerHTML = emotion.secondary.map(sec => `
                <button type="button" class="btn btn-secondary emotion-secondary-btn"
                        style="border-color: ${emotion.color};"
                        onclick="SessionToolsModule.selectSecondaryEmotion('${sec}')">
                    ${sec}
                </button>
            `).join('');
        }

        // Show basic result
        this.showEmotionResult(emotion.name, emotion);
    },

    selectSecondaryEmotion: function(secondary) {
        const emotion = this.selectedEmotion;
        this.showEmotionResult(secondary, emotion);
    },

    showEmotionResult: function(emotionName, emotionData) {
        const resultPanel = document.getElementById('emotion-result');
        const resultContent = document.getElementById('emotion-result-content');
        const tipElement = document.getElementById('emotion-tip');

        if (resultPanel && resultContent) {
            resultPanel.style.display = 'block';
            resultContent.innerHTML = `
                <div class="result-emotion" style="background-color: ${emotionData.color}20; border-color: ${emotionData.color};">
                    <span class="result-emoji">${emotionData.emoji}</span>
                    <span class="result-name">${emotionName}</span>
                    <span class="result-primary">(${emotionData.name})</span>
                </div>
            `;

            // Give a tip based on emotion
            const tips = {
                joy: 'Genieße dieses Gefühl! Was hat dazu beigetragen?',
                sadness: 'Traurigkeit ist okay. Was brauchst du gerade? Vielleicht Trost oder Ruhe?',
                anger: 'Wut zeigt, dass dir etwas wichtig ist. Atme tief durch, bevor du handelst.',
                fear: 'Angst will dich schützen. Ist die Gefahr real? Was kannst du tun?',
                surprise: 'Überraschung braucht Zeit zur Verarbeitung. Nimm dir einen Moment.',
                disgust: 'Ekel zeigt Grenzen auf. Was möchtest du vermeiden?'
            };

            tipElement.textContent = tips[emotionData.opposite ? this.selectedEmotion.primary : 'joy'] || '';
        }
    },

    // ============================================================
    // AMPELSYSTEM
    // ============================================================

    generateTrafficLightUI: function() {
        return `
            <div class="traffic-light-container">
                <div class="tool-info-box">
                    <h4>📚 Wissenschaftlicher Hintergrund</h4>
                    <p>Das Ampelsystem ist eine vereinfachte Form des <strong>Zones of Regulation</strong>-Konzepts
                    (Kuypers, 2011). Es hilft Kindern, ihren emotionalen Zustand zu erkennen und passende
                    Selbstregulationsstrategien anzuwenden - ein wichtiger Baustein der emotionalen Kompetenz.</p>
                </div>

                <div class="traffic-light-visual">
                    <div class="traffic-light">
                        <div class="light green" id="light-green" onclick="SessionToolsModule.selectZone('green')">🟢</div>
                        <div class="light yellow" id="light-yellow" onclick="SessionToolsModule.selectZone('yellow')">🟡</div>
                        <div class="light red" id="light-red" onclick="SessionToolsModule.selectZone('red')">🔴</div>
                    </div>
                </div>

                <div class="zone-selector">
                    <h4>Wie fühlst du dich gerade?</h4>
                    <p>Klicke auf die passende Ampelfarbe</p>
                </div>

                <div id="zone-details" class="zone-details" style="display:none;"></div>

                <div class="zone-legend">
                    <div class="legend-item green-zone">
                        <span class="legend-color" style="background:#22c55e;"></span>
                        <div>
                            <strong>Grün - Alles gut!</strong>
                            <p>Ich bin ruhig, kann gut denken und gut zuhören.</p>
                        </div>
                    </div>
                    <div class="legend-item yellow-zone">
                        <span class="legend-color" style="background:#fbbf24;"></span>
                        <div>
                            <strong>Gelb - Vorsicht!</strong>
                            <p>Ich werde unruhig, mein Herz schlägt schneller, ich kann mich nicht gut konzentrieren.</p>
                        </div>
                    </div>
                    <div class="legend-item red-zone">
                        <span class="legend-color" style="background:#ef4444;"></span>
                        <div>
                            <strong>Rot - Stopp!</strong>
                            <p>Ich bin sehr aufgeregt/wütend/ängstlich, ich kann nicht mehr gut denken.</p>
                        </div>
                    </div>
                </div>

                <div class="reference-footer">
                    <small>Referenz: Kuypers, L. (2011). The Zones of Regulation. Think Social Publishing.</small>
                </div>
            </div>
        `;
    },

    zoneStrategies: {
        green: {
            title: '🟢 Du bist in der grünen Zone - Super!',
            message: 'Du bist ruhig und bereit zu lernen und zu spielen.',
            strategies: [
                'Weitermachen wie bisher',
                'Gute Entscheidungen treffen',
                'Anderen helfen',
                'Neue Dinge ausprobieren'
            ]
        },
        yellow: {
            title: '🟡 Du bist in der gelben Zone - Aufpassen!',
            message: 'Du merkst, dass du unruhiger wirst. Zeit für eine Strategie!',
            strategies: [
                'STOPP - Kurz anhalten',
                '3 tiefe Atemzüge nehmen',
                'Langsam bis 10 zählen',
                'Um eine kurze Pause bitten',
                'Sich bewegen (Hampelmänner)',
                'Etwas Kaltes trinken'
            ]
        },
        red: {
            title: '🔴 Du bist in der roten Zone - Stopp!',
            message: 'Du brauchst jetzt Hilfe, dich zu beruhigen. Das ist okay!',
            strategies: [
                'STOPP - Nichts tun oder sagen!',
                'Aus der Situation gehen (wenn möglich)',
                'Einen Erwachsenen um Hilfe bitten',
                'Ins Kissen atmen oder schreien',
                'Kaltes Wasser ins Gesicht',
                'Sich in eine Decke wickeln'
            ]
        }
    },

    selectZone: function(zone) {
        // Reset all lights
        document.querySelectorAll('.traffic-light .light').forEach(l => l.classList.remove('active'));

        // Activate selected
        const light = document.getElementById(`light-${zone}`);
        if (light) light.classList.add('active');

        // Show strategies
        const details = document.getElementById('zone-details');
        const zoneData = this.zoneStrategies[zone];

        if (details && zoneData) {
            details.style.display = 'block';
            details.innerHTML = `
                <div class="zone-info zone-${zone}">
                    <h4>${zoneData.title}</h4>
                    <p>${zoneData.message}</p>
                    <h5>Was du tun kannst:</h5>
                    <ul>
                        ${zoneData.strategies.map(s => `<li>${s}</li>`).join('')}
                    </ul>
                </div>
            `;
        }
    }
};

// Export für globalen Zugriff
if (typeof window !== 'undefined') {
    window.SessionToolsModule = SessionToolsModule;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = SessionToolsModule;
}
