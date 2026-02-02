/**
 * ============================================================================
 * SESSION TOOLS MODULE - Interaktive Werkzeuge für Therapiesitzungen
 * ============================================================================
 *
 * ENTHALTENE TOOLS:
 * 1. Gefühlsthermometer
 * 2. Sorgenskala / Worry Scale
 * 3. Stimmungstagebuch
 * 4. Coping-Karten Generator
 * 5. Emotionsrad
 * 6. Ampelsystem für Kinder
 * 7. Atem-/Entspannungsübungen
 */

const SessionTools = {

    // ============================================================
    // GEFÜHLSTHERMOMETER
    // ============================================================

    emotionThermometer: {
        name: "Gefühlsthermometer",
        description: "Visuelles Tool zur Einschätzung der Gefühlsintensität",
        ageRange: "5+ Jahre",

        scales: {
            general: {
                name: "Allgemeines Befinden",
                labels: [
                    { value: 0, label: "Ganz schlecht", color: "#dc2626", emoji: "😢" },
                    { value: 1, label: "Sehr schlecht", color: "#ea580c", emoji: "😞" },
                    { value: 2, label: "Schlecht", color: "#f97316", emoji: "😔" },
                    { value: 3, label: "Nicht so gut", color: "#fb923c", emoji: "😕" },
                    { value: 4, label: "Geht so", color: "#fbbf24", emoji: "😐" },
                    { value: 5, label: "Okay", color: "#facc15", emoji: "🙂" },
                    { value: 6, label: "Ganz okay", color: "#a3e635", emoji: "😊" },
                    { value: 7, label: "Gut", color: "#84cc16", emoji: "😀" },
                    { value: 8, label: "Sehr gut", color: "#22c55e", emoji: "😁" },
                    { value: 9, label: "Super gut", color: "#16a34a", emoji: "🤩" },
                    { value: 10, label: "Fantastisch", color: "#15803d", emoji: "🥳" }
                ]
            },
            anxiety: {
                name: "Angst-Thermometer",
                labels: [
                    { value: 0, label: "Gar keine Angst", color: "#22c55e", emoji: "😌" },
                    { value: 1, label: "Ganz kleine Angst", color: "#84cc16", emoji: "🙂" },
                    { value: 2, label: "Ein bisschen Angst", color: "#a3e635", emoji: "😐" },
                    { value: 3, label: "Etwas Angst", color: "#facc15", emoji: "😕" },
                    { value: 4, label: "Merkbare Angst", color: "#fbbf24", emoji: "😟" },
                    { value: 5, label: "Mittlere Angst", color: "#fb923c", emoji: "😧" },
                    { value: 6, label: "Ziemliche Angst", color: "#f97316", emoji: "😨" },
                    { value: 7, label: "Starke Angst", color: "#ea580c", emoji: "😰" },
                    { value: 8, label: "Sehr starke Angst", color: "#dc2626", emoji: "😱" },
                    { value: 9, label: "Extreme Angst", color: "#b91c1c", emoji: "🫣" },
                    { value: 10, label: "Panik", color: "#991b1b", emoji: "💀" }
                ]
            },
            anger: {
                name: "Wut-Thermometer",
                labels: [
                    { value: 0, label: "Ganz ruhig", color: "#22c55e", emoji: "😌" },
                    { value: 1, label: "Ruhig", color: "#84cc16", emoji: "🙂" },
                    { value: 2, label: "Leicht genervt", color: "#a3e635", emoji: "😐" },
                    { value: 3, label: "Genervt", color: "#facc15", emoji: "😒" },
                    { value: 4, label: "Verärgert", color: "#fbbf24", emoji: "😠" },
                    { value: 5, label: "Ärgerlich", color: "#fb923c", emoji: "😤" },
                    { value: 6, label: "Ziemlich wütend", color: "#f97316", emoji: "😡" },
                    { value: 7, label: "Sehr wütend", color: "#ea580c", emoji: "🤬" },
                    { value: 8, label: "Total wütend", color: "#dc2626", emoji: "💢" },
                    { value: 9, label: "Rasend", color: "#b91c1c", emoji: "🌋" },
                    { value: 10, label: "Explodiere!", color: "#991b1b", emoji: "💥" }
                ]
            },
            sadness: {
                name: "Traurigkeits-Thermometer",
                labels: [
                    { value: 0, label: "Gar nicht traurig", color: "#22c55e", emoji: "😊" },
                    { value: 1, label: "Kaum traurig", color: "#84cc16", emoji: "🙂" },
                    { value: 2, label: "Ein bisschen traurig", color: "#a3e635", emoji: "😐" },
                    { value: 3, label: "Etwas traurig", color: "#facc15", emoji: "😕" },
                    { value: 4, label: "Traurig", color: "#fbbf24", emoji: "😔" },
                    { value: 5, label: "Ziemlich traurig", color: "#fb923c", emoji: "😢" },
                    { value: 6, label: "Sehr traurig", color: "#f97316", emoji: "😭" },
                    { value: 7, label: "Richtig traurig", color: "#ea580c", emoji: "💔" },
                    { value: 8, label: "Total traurig", color: "#dc2626", emoji: "😿" },
                    { value: 9, label: "Verzweifelt", color: "#b91c1c", emoji: "🥀" },
                    { value: 10, label: "Hoffnungslos", color: "#991b1b", emoji: "🖤" }
                ]
            }
        },

        getReading(type, value) {
            const scale = this.scales[type] || this.scales.general;
            return scale.labels[Math.min(Math.max(0, value), 10)];
        },

        interpretReading(type, value) {
            if (type === 'general') {
                if (value <= 3) return { level: 'low', message: 'Es geht dir nicht gut. Lass uns schauen, was helfen kann.' };
                if (value <= 6) return { level: 'medium', message: 'Es ist okay. Was könnte es besser machen?' };
                return { level: 'high', message: 'Es geht dir gut! Was trägt dazu bei?' };
            }
            // For anxiety, anger, sadness - high = concerning
            if (value <= 3) return { level: 'low', message: 'Das ist ein guter Bereich!' };
            if (value <= 6) return { level: 'medium', message: 'Das ist spürbar. Kennst du Strategien, die helfen?' };
            return { level: 'high', message: 'Das ist sehr stark. Lass uns gemeinsam überlegen, was hilft.' };
        }
    },

    // ============================================================
    // COPING-KARTEN GENERATOR
    // ============================================================

    copingCards: {
        categories: {
            calm: {
                name: "Beruhigen",
                icon: "🧘",
                color: "#3b82f6",
                strategies: [
                    { name: "Tiefes Atmen", instructions: "Atme 4 Sekunden ein, halte 4 Sekunden, atme 6 Sekunden aus", emoji: "🌬️" },
                    { name: "5-4-3-2-1 Übung", instructions: "Nenne 5 Dinge die du siehst, 4 die du hörst, 3 die du fühlst, 2 die du riechst, 1 das du schmeckst", emoji: "👀" },
                    { name: "Körper-Scan", instructions: "Spüre von Kopf bis Fuß, wo du Anspannung merkst, und lass sie los", emoji: "🧍" },
                    { name: "Musik hören", instructions: "Höre ein ruhiges Lied, das du magst", emoji: "🎵" },
                    { name: "Warm duschen", instructions: "Warmes Wasser hilft, Anspannung loszulassen", emoji: "🚿" },
                    { name: "Kuscheltier/Decke", instructions: "Etwas Weiches festhalten kann beruhigen", emoji: "🧸" },
                    { name: "Butterfly Hug", instructions: "Kreuze die Arme über der Brust und klopfe abwechselnd sanft", emoji: "🦋" }
                ]
            },
            distract: {
                name: "Ablenken",
                icon: "🎯",
                color: "#8b5cf6",
                strategies: [
                    { name: "Rückwärts zählen", instructions: "Zähle von 100 in 7er-Schritten rückwärts", emoji: "🔢" },
                    { name: "Kategorien-Spiel", instructions: "Nenne 5 Automarken, 5 Tiere, 5 Städte...", emoji: "📝" },
                    { name: "Puzzle/Sudoku", instructions: "Löse ein Rätsel, das deine Aufmerksamkeit braucht", emoji: "🧩" },
                    { name: "Aufräumen", instructions: "Räume eine Schublade oder deinen Schreibtisch auf", emoji: "🗂️" },
                    { name: "Malen/Zeichnen", instructions: "Male etwas - egal was, Hauptsache Farben auf Papier", emoji: "🎨" },
                    { name: "Spaziergang", instructions: "Geh raus und achte auf alles, was du siehst", emoji: "🚶" },
                    { name: "Mit jemandem reden", instructions: "Ruf jemanden an und rede über was anderes", emoji: "📱" }
                ]
            },
            express: {
                name: "Ausdrücken",
                icon: "💬",
                color: "#ec4899",
                strategies: [
                    { name: "Gefühle aufschreiben", instructions: "Schreib alles auf, was du fühlst - ohne zu überlegen", emoji: "📓" },
                    { name: "Zeichnen/Malen", instructions: "Male dein Gefühl - Farben, Formen, egal was", emoji: "🖍️" },
                    { name: "Schreien ins Kissen", instructions: "Hol ein Kissen und schrei hinein - das ist okay!", emoji: "😤" },
                    { name: "Bewegung", instructions: "Springe, tanze, renne - lass die Energie raus", emoji: "💃" },
                    { name: "Mit jemandem reden", instructions: "Erzähl jemandem, wie es dir geht", emoji: "🗣️" },
                    { name: "Brief schreiben", instructions: "Schreib einen Brief (musst du nicht abschicken)", emoji: "✉️" },
                    { name: "Knete/Stressball", instructions: "Drücke und forme etwas mit deinen Händen", emoji: "🫳" }
                ]
            },
            body: {
                name: "Körper",
                icon: "💪",
                color: "#22c55e",
                strategies: [
                    { name: "Kaltes Wasser", instructions: "Halte die Hände unter kaltes Wasser oder leg dir kaltes auf die Stirn", emoji: "🧊" },
                    { name: "Progressive Muskelentspannung", instructions: "Spanne jeden Muskel 5 Sek. an, dann 10 Sek. entspannen", emoji: "💪" },
                    { name: "Sport/Bewegung", instructions: "Hampelmänner, Liegestütze, Treppen laufen", emoji: "🏃" },
                    { name: "Stretching", instructions: "Dehne dich sanft für 5 Minuten", emoji: "🤸" },
                    { name: "Etwas Saures essen", instructions: "Ein Bonbon oder Zitrone kann erden", emoji: "🍋" },
                    { name: "Gesicht waschen", instructions: "Wasche dein Gesicht mit kaltem Wasser", emoji: "💦" },
                    { name: "Draußen sein", instructions: "Geh nach draußen, atme frische Luft", emoji: "🌳" }
                ]
            },
            think: {
                name: "Denken",
                icon: "🧠",
                color: "#f59e0b",
                strategies: [
                    { name: "Gedanken prüfen", instructions: "Ist dieser Gedanke wirklich wahr? Was würde ein Freund sagen?", emoji: "🤔" },
                    { name: "Positive Selbstgespräche", instructions: "Sag dir: 'Das geht vorbei', 'Ich schaffe das'", emoji: "💬" },
                    { name: "Perspektive wechseln", instructions: "Wie würde ich das in einem Jahr sehen?", emoji: "🔮" },
                    { name: "Dankbarkeit", instructions: "Nenne 3 Dinge, für die du dankbar bist", emoji: "🙏" },
                    { name: "Problem lösen", instructions: "Was genau ist das Problem? Was könnte ich tun?", emoji: "💡" },
                    { name: "Akzeptanz", instructions: "Es ist okay, so zu fühlen. Gefühle kommen und gehen.", emoji: "🌊" },
                    { name: "Achtsamkeit", instructions: "Konzentriere dich nur auf diesen Moment, jetzt", emoji: "🧘" }
                ]
            }
        },

        generateCard(category, strategyIndex) {
            const cat = this.categories[category];
            if (!cat || !cat.strategies[strategyIndex]) return null;

            const strategy = cat.strategies[strategyIndex];

            return {
                category: cat.name,
                categoryIcon: cat.icon,
                color: cat.color,
                name: strategy.name,
                emoji: strategy.emoji,
                instructions: strategy.instructions,
                printable: this.formatForPrint(strategy, cat)
            };
        },

        generatePersonalDeck(selectedStrategies) {
            return selectedStrategies.map(s => this.generateCard(s.category, s.index));
        },

        formatForPrint(strategy, category) {
            return `
┌─────────────────────────────────────┐
│  ${category.icon} ${category.name.toUpperCase().padEnd(28)} │
├─────────────────────────────────────┤
│                                     │
│      ${strategy.emoji}                          │
│                                     │
│  ${strategy.name.padEnd(33)} │
│                                     │
│  ${this.wrapText(strategy.instructions, 33)} │
│                                     │
└─────────────────────────────────────┘
            `;
        },

        wrapText(text, width) {
            const words = text.split(' ');
            const lines = [];
            let currentLine = '';

            words.forEach(word => {
                if ((currentLine + ' ' + word).trim().length <= width) {
                    currentLine = (currentLine + ' ' + word).trim();
                } else {
                    if (currentLine) lines.push(currentLine.padEnd(width));
                    currentLine = word;
                }
            });
            if (currentLine) lines.push(currentLine.padEnd(width));

            return lines.join('\n│  ');
        },

        getAllStrategies() {
            const all = [];
            Object.entries(this.categories).forEach(([catKey, cat]) => {
                cat.strategies.forEach((strategy, index) => {
                    all.push({
                        category: catKey,
                        categoryName: cat.name,
                        index,
                        ...strategy
                    });
                });
            });
            return all;
        }
    },

    // ============================================================
    // AMPELSYSTEM FÜR KINDER
    // ============================================================

    trafficLight: {
        name: "Gefühls-Ampel",
        description: "Einfaches System zur Selbstregulation für jüngere Kinder",
        ageRange: "5-12 Jahre",

        zones: {
            green: {
                name: "Grün - Alles gut!",
                color: "#22c55e",
                emoji: "🟢",
                signs: [
                    "Ich bin ruhig",
                    "Ich kann gut denken",
                    "Ich kann gut zuhören",
                    "Mein Körper ist entspannt"
                ],
                actions: [
                    "Weitermachen wie bisher",
                    "Gute Entscheidungen treffen",
                    "Lernen und spielen"
                ]
            },
            yellow: {
                name: "Gelb - Vorsicht!",
                color: "#fbbf24",
                emoji: "🟡",
                signs: [
                    "Ich werde unruhig",
                    "Mein Herz schlägt schneller",
                    "Ich werde lauter",
                    "Ich kann mich nicht gut konzentrieren"
                ],
                actions: [
                    "STOPP - Kurz anhalten",
                    "3 tiefe Atemzüge",
                    "Zähle bis 10",
                    "Bitte um eine Pause"
                ],
                strategies: ["calm", "distract"]
            },
            red: {
                name: "Rot - Stopp!",
                color: "#ef4444",
                emoji: "🔴",
                signs: [
                    "Ich bin sehr wütend/traurig/ängstlich",
                    "Ich will schreien oder hauen",
                    "Ich kann nicht mehr denken",
                    "Mein Körper ist ganz angespannt"
                ],
                actions: [
                    "STOPP - Nichts tun!",
                    "Aus der Situation gehen (wenn möglich)",
                    "Hilfe holen",
                    "Beruhigungs-Strategie anwenden"
                ],
                strategies: ["calm", "body"]
            }
        },

        assess(currentState) {
            if (currentState.calmness >= 7 && currentState.control >= 7) {
                return 'green';
            } else if (currentState.calmness >= 4 || currentState.control >= 4) {
                return 'yellow';
            } else {
                return 'red';
            }
        },

        getStrategiesForZone(zone) {
            const zoneData = this.zones[zone];
            if (!zoneData || !zoneData.strategies) return [];

            let strategies = [];
            zoneData.strategies.forEach(catKey => {
                const cat = SessionTools.copingCards.categories[catKey];
                if (cat) {
                    strategies = strategies.concat(cat.strategies.slice(0, 3)); // Top 3 from each
                }
            });
            return strategies;
        }
    },

    // ============================================================
    // ATEMÜBUNGEN
    // ============================================================

    breathingExercises: {
        exercises: {
            basic: {
                name: "Grundübung",
                description: "Einfaches tiefes Atmen",
                steps: [
                    { phase: "einatmen", duration: 4, instruction: "Tief durch die Nase einatmen" },
                    { phase: "halten", duration: 2, instruction: "Kurz halten" },
                    { phase: "ausatmen", duration: 6, instruction: "Langsam durch den Mund ausatmen" }
                ],
                cycles: 5,
                ageRange: "5+ Jahre"
            },
            boxBreathing: {
                name: "Box-Atmung",
                description: "4-4-4-4 Technik für Fokus",
                steps: [
                    { phase: "einatmen", duration: 4, instruction: "Einatmen" },
                    { phase: "halten", duration: 4, instruction: "Halten" },
                    { phase: "ausatmen", duration: 4, instruction: "Ausatmen" },
                    { phase: "halten", duration: 4, instruction: "Halten" }
                ],
                cycles: 4,
                ageRange: "8+ Jahre"
            },
            fourSevenEight: {
                name: "4-7-8 Atmung",
                description: "Beruhigende Technik für Schlaf und Angst",
                steps: [
                    { phase: "einatmen", duration: 4, instruction: "Durch die Nase einatmen" },
                    { phase: "halten", duration: 7, instruction: "Atem anhalten" },
                    { phase: "ausatmen", duration: 8, instruction: "Mit Geräusch durch den Mund ausatmen" }
                ],
                cycles: 4,
                ageRange: "10+ Jahre"
            },
            bunnyBreathing: {
                name: "Hasen-Atmung",
                description: "Spielerisch für kleine Kinder",
                steps: [
                    { phase: "einatmen", duration: 1, instruction: "Schnüffeln wie ein Hase - schnell schnüffeln" },
                    { phase: "einatmen", duration: 1, instruction: "Nochmal schnüffeln" },
                    { phase: "einatmen", duration: 1, instruction: "Und nochmal" },
                    { phase: "ausatmen", duration: 4, instruction: "Laaaang ausatmen" }
                ],
                cycles: 5,
                ageRange: "4-8 Jahre"
            },
            starBreathing: {
                name: "Stern-Atmung",
                description: "Mit dem Finger einem Stern folgen",
                instructions: "Zeichne einen Stern. Beim Hochgehen = einatmen, beim Runtergehen = ausatmen",
                visualAid: true,
                ageRange: "5-10 Jahre"
            }
        },

        getExerciseForAge(age) {
            if (age < 6) return this.exercises.bunnyBreathing;
            if (age < 10) return this.exercises.starBreathing;
            return this.exercises.boxBreathing;
        },

        getTotalDuration(exercise) {
            const cycleDuration = exercise.steps.reduce((sum, step) => sum + step.duration, 0);
            return cycleDuration * exercise.cycles;
        }
    },

    // ============================================================
    // STIMMUNGSTAGEBUCH
    // ============================================================

    moodDiary: {
        fields: [
            { id: 'date', type: 'date', label: 'Datum' },
            { id: 'time', type: 'time', label: 'Uhrzeit' },
            { id: 'mood', type: 'thermometer', label: 'Stimmung (0-10)', scale: 'general' },
            { id: 'energy', type: 'slider', label: 'Energie (0-10)' },
            { id: 'anxiety', type: 'thermometer', label: 'Angst (0-10)', scale: 'anxiety' },
            { id: 'situation', type: 'text', label: 'Was ist passiert?' },
            { id: 'thoughts', type: 'text', label: 'Was habe ich gedacht?' },
            { id: 'coping', type: 'text', label: 'Was habe ich gemacht?' },
            { id: 'helpful', type: 'boolean', label: 'Hat es geholfen?' }
        ],

        createEntry(data) {
            return {
                id: Date.now().toString(),
                timestamp: new Date().toISOString(),
                ...data
            };
        },

        analyzeEntries(entries, days = 7) {
            const cutoff = new Date();
            cutoff.setDate(cutoff.getDate() - days);

            const recent = entries.filter(e => new Date(e.timestamp) >= cutoff);

            if (recent.length === 0) return null;

            const avgMood = recent.reduce((sum, e) => sum + (e.mood || 0), 0) / recent.length;
            const avgAnxiety = recent.reduce((sum, e) => sum + (e.anxiety || 0), 0) / recent.length;
            const avgEnergy = recent.reduce((sum, e) => sum + (e.energy || 0), 0) / recent.length;

            // Find patterns
            const lowMoodEntries = recent.filter(e => e.mood <= 3);
            const highAnxietyEntries = recent.filter(e => e.anxiety >= 7);

            return {
                period: `Letzte ${days} Tage`,
                entryCount: recent.length,
                averages: {
                    mood: Math.round(avgMood * 10) / 10,
                    anxiety: Math.round(avgAnxiety * 10) / 10,
                    energy: Math.round(avgEnergy * 10) / 10
                },
                lowMoodCount: lowMoodEntries.length,
                highAnxietyCount: highAnxietyEntries.length,
                commonSituations: this.findCommonPatterns(recent, 'situation'),
                helpfulStrategies: recent.filter(e => e.helpful).map(e => e.coping).filter(Boolean)
            };
        },

        findCommonPatterns(entries, field) {
            const counts = {};
            entries.forEach(e => {
                if (e[field]) {
                    // Very simple pattern matching - in production use NLP
                    const key = e[field].toLowerCase().substring(0, 30);
                    counts[key] = (counts[key] || 0) + 1;
                }
            });
            return Object.entries(counts)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 3)
                .map(([pattern, count]) => ({ pattern, count }));
        }
    },

    // ============================================================
    // EMOTIONSRAD
    // ============================================================

    emotionWheel: {
        name: "Emotionsrad",
        description: "Hilft beim Erkennen und Benennen von Gefühlen",

        primaryEmotions: {
            joy: {
                name: "Freude",
                color: "#fbbf24",
                emoji: "😊",
                secondary: [
                    { name: "glücklich", tertiary: ["froh", "zufrieden", "begeistert"] },
                    { name: "stolz", tertiary: ["selbstbewusst", "erfolgreich"] },
                    { name: "optimistisch", tertiary: ["hoffnungsvoll", "zuversichtlich"] },
                    { name: "aufgeregt", tertiary: ["gespannt", "enthusiastisch"] },
                    { name: "dankbar", tertiary: ["wertschätzend", "berührt"] }
                ]
            },
            sadness: {
                name: "Traurigkeit",
                color: "#3b82f6",
                emoji: "😢",
                secondary: [
                    { name: "traurig", tertiary: ["niedergeschlagen", "bedrückt"] },
                    { name: "einsam", tertiary: ["allein", "isoliert", "verlassen"] },
                    { name: "enttäuscht", tertiary: ["frustriert", "desillusioniert"] },
                    { name: "hoffnungslos", tertiary: ["verzweifelt", "resigniert"] },
                    { name: "verletzt", tertiary: ["gekränkt", "betroffen"] }
                ]
            },
            anger: {
                name: "Wut",
                color: "#ef4444",
                emoji: "😠",
                secondary: [
                    { name: "wütend", tertiary: ["ärgerlich", "gereizt", "genervt"] },
                    { name: "frustriert", tertiary: ["ungeduldig", "blockiert"] },
                    { name: "beleidigt", tertiary: ["gekränkt", "empört"] },
                    { name: "eifersüchtig", tertiary: ["neidisch", "missgünstig"] },
                    { name: "aggressiv", tertiary: ["kämpferisch", "feindselig"] }
                ]
            },
            fear: {
                name: "Angst",
                color: "#8b5cf6",
                emoji: "😨",
                secondary: [
                    { name: "ängstlich", tertiary: ["besorgt", "nervös", "aufgeregt"] },
                    { name: "unsicher", tertiary: ["zweifelnd", "unentschlossen"] },
                    { name: "hilflos", tertiary: ["machtlos", "überwältigt"] },
                    { name: "panisch", tertiary: ["erschrocken", "schockiert"] },
                    { name: "bedroht", tertiary: ["gefährdet", "verwundbar"] }
                ]
            },
            surprise: {
                name: "Überraschung",
                color: "#ec4899",
                emoji: "😲",
                secondary: [
                    { name: "überrascht", tertiary: ["erstaunt", "verblüfft"] },
                    { name: "verwirrt", tertiary: ["perplex", "desorientiert"] },
                    { name: "fasziniert", tertiary: ["neugierig", "interessiert"] }
                ]
            },
            disgust: {
                name: "Ekel",
                color: "#22c55e",
                emoji: "🤢",
                secondary: [
                    { name: "angewidert", tertiary: ["abgestoßen", "empört"] },
                    { name: "verächtlich", tertiary: ["geringschätzig", "abwertend"] }
                ]
            }
        },

        findEmotion(word) {
            const lowWord = word.toLowerCase();

            for (const [key, primary] of Object.entries(this.primaryEmotions)) {
                if (primary.name.toLowerCase() === lowWord) {
                    return { level: 'primary', emotion: primary };
                }

                for (const secondary of primary.secondary) {
                    if (secondary.name.toLowerCase() === lowWord) {
                        return { level: 'secondary', emotion: secondary, primary: primary };
                    }

                    for (const tertiary of secondary.tertiary) {
                        if (tertiary.toLowerCase() === lowWord) {
                            return { level: 'tertiary', emotion: tertiary, secondary: secondary, primary: primary };
                        }
                    }
                }
            }

            return null;
        },

        getAllEmotionWords() {
            const words = [];
            Object.values(this.primaryEmotions).forEach(primary => {
                words.push(primary.name);
                primary.secondary.forEach(secondary => {
                    words.push(secondary.name);
                    words.push(...secondary.tertiary);
                });
            });
            return words;
        }
    }
};

// Export
if (typeof window !== 'undefined') {
    window.SessionTools = SessionTools;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SessionTools;
}
