/**
 * ============================================================================
 * TREATMENT PLANNING MODULE - Behandlungsplanung
 * ============================================================================
 *
 * FUNKTIONEN:
 * 1. SMART-Ziel-Generator
 * 2. Therapiemodule nach Diagnose
 * 3. Evidenzbasierte Interventionsempfehlungen
 * 4. Behandlungspfade
 *
 * WISSENSCHAFTLICHE GRUNDLAGEN:
 * - AWMF S3-Leitlinien für Kinder- und Jugendpsychiatrie
 * - NICE Guidelines (UK)
 * - APA Practice Guidelines
 * - Cochrane Reviews
 */

const TreatmentModule = {

    // ============================================================
    // SMART GOAL GENERATOR
    // ============================================================

    smartGoals: {
        templates: {
            // Verhaltensreduktion
            behaviorReduction: {
                template: "[Name] reduziert [Verhalten] von [aktuelle Häufigkeit] auf [Zielhäufigkeit] innerhalb von [Zeitraum], gemessen durch [Messmethode].",
                examples: [
                    {
                        input: { behavior: "Wutanfälle", current: "5x pro Woche", target: "1x pro Woche", timeframe: "8 Wochen", measure: "Eltern-Tagebuch" },
                        output: "Max reduziert Wutanfälle von 5x pro Woche auf 1x pro Woche innerhalb von 8 Wochen, gemessen durch Eltern-Tagebuch."
                    }
                ],
                fields: ['behavior', 'current', 'target', 'timeframe', 'measure']
            },

            // Verhaltensaufbau
            behaviorIncrease: {
                template: "[Name] zeigt [Verhalten] in [Kontext] [Zielhäufigkeit] innerhalb von [Zeitraum], gemessen durch [Messmethode].",
                examples: [
                    {
                        input: { behavior: "Hausaufgaben selbständig beginnen", context: "nach der Schule", target: "4x pro Woche", timeframe: "6 Wochen", measure: "Sticker-Plan" },
                        output: "Lea zeigt selbständiges Beginnen der Hausaufgaben nach der Schule 4x pro Woche innerhalb von 6 Wochen, gemessen durch Sticker-Plan."
                    }
                ],
                fields: ['behavior', 'context', 'target', 'timeframe', 'measure']
            },

            // Emotionsregulation
            emotionRegulation: {
                template: "[Name] wendet [Strategie] bei [Trigger] an, um [Emotion] zu regulieren, [Zielhäufigkeit] innerhalb von [Zeitraum].",
                examples: [
                    {
                        input: { strategy: "Atemübung (4-7-8)", trigger: "Frustration bei Hausaufgaben", emotion: "Wut", target: "in 70% der Situationen", timeframe: "4 Wochen" },
                        output: "Tim wendet die Atemübung (4-7-8) bei Frustration bei Hausaufgaben an, um Wut zu regulieren, in 70% der Situationen innerhalb von 4 Wochen."
                    }
                ],
                fields: ['strategy', 'trigger', 'emotion', 'target', 'timeframe']
            },

            // Schulbesuch
            schoolAttendance: {
                template: "[Name] besucht die Schule [Zielhäufigkeit] innerhalb von [Zeitraum], beginnend mit [erster Schritt].",
                examples: [
                    {
                        input: { target: "vollständig (5 Tage/Woche)", timeframe: "12 Wochen", firstStep: "30 Minuten täglich im Schulgebäude" },
                        output: "Sophie besucht die Schule vollständig (5 Tage/Woche) innerhalb von 12 Wochen, beginnend mit 30 Minuten täglich im Schulgebäude."
                    }
                ],
                fields: ['target', 'timeframe', 'firstStep']
            },

            // Soziale Kompetenz
            socialSkills: {
                template: "[Name] initiiert [Verhalten] mit [Zielgruppe] [Häufigkeit] innerhalb von [Zeitraum].",
                examples: [
                    {
                        input: { behavior: "ein Gespräch", targetGroup: "Gleichaltrigen", frequency: "1x pro Schultag", timeframe: "4 Wochen" },
                        output: "Jonas initiiert ein Gespräch mit Gleichaltrigen 1x pro Schultag innerhalb von 4 Wochen."
                    }
                ],
                fields: ['behavior', 'targetGroup', 'frequency', 'timeframe']
            },

            // Selbstwert
            selfEsteem: {
                template: "[Name] benennt täglich [Anzahl] [positive Aspekte] über sich selbst, dokumentiert in [Methode], für [Zeitraum].",
                examples: [
                    {
                        input: { count: "3", aspect: "Dinge, die gut gelaufen sind", method: "Abend-Tagebuch", timeframe: "6 Wochen" },
                        output: "Anna benennt täglich 3 Dinge, die gut gelaufen sind über sich selbst, dokumentiert in Abend-Tagebuch, für 6 Wochen."
                    }
                ],
                fields: ['count', 'aspect', 'method', 'timeframe']
            }
        },

        generateGoal(type, inputs, patientName) {
            const template = this.templates[type];
            if (!template) return null;

            let goal = template.template;
            goal = goal.replace('[Name]', patientName);

            for (const [key, value] of Object.entries(inputs)) {
                goal = goal.replace(`[${key}]`, value);
                // Handle alternative placeholders
                goal = goal.replace(`[${key.charAt(0).toUpperCase() + key.slice(1)}]`, value);
            }

            return {
                goal,
                type,
                createdAt: new Date().toISOString(),
                status: 'active',
                checkpoints: this.generateCheckpoints(inputs.timeframe),
                measures: this.suggestMeasures(type)
            };
        },

        generateCheckpoints(timeframe) {
            // Parse timeframe and create checkpoints
            const weeks = parseInt(timeframe) || 4;
            const checkpoints = [];

            if (weeks >= 4) checkpoints.push({ week: Math.floor(weeks / 4), label: "25% Review" });
            if (weeks >= 2) checkpoints.push({ week: Math.floor(weeks / 2), label: "Halbzeit-Review" });
            if (weeks >= 4) checkpoints.push({ week: Math.floor(weeks * 0.75), label: "75% Review" });
            checkpoints.push({ week: weeks, label: "Ziel-Evaluation" });

            return checkpoints;
        },

        suggestMeasures(goalType) {
            const measures = {
                behaviorReduction: ["Verhaltens-Tagebuch", "Frequenz-Zählung", "ABC-Protokoll"],
                behaviorIncrease: ["Token-/Sticker-Plan", "Verhaltens-Checkliste", "Eltern-Rating"],
                emotionRegulation: ["Gefühls-Tagebuch", "Situations-Protokoll", "SUD-Skala (0-10)"],
                schoolAttendance: ["Anwesenheits-Protokoll", "Schul-Feedback", "Stunden-Dokumentation"],
                socialSkills: ["Soziales Tagebuch", "Beobachtungs-Protokoll", "Selbst-Rating"],
                selfEsteem: ["Positiv-Tagebuch", "Selbstwert-Fragebogen", "Wöchentliches Rating"]
            };
            return measures[goalType] || ["Individuelles Monitoring"];
        },

        validateSMART(goal) {
            const criteria = {
                specific: { met: false, hint: "Ist das Ziel konkret genug beschrieben?" },
                measurable: { met: false, hint: "Wie wird Fortschritt gemessen?" },
                achievable: { met: false, hint: "Ist das Ziel realistisch erreichbar?" },
                relevant: { met: false, hint: "Ist das Ziel für den Patienten relevant?" },
                timeBound: { met: false, hint: "Gibt es einen klaren Zeitrahmen?" }
            };

            // Basic validation
            if (goal.includes('reduziert') || goal.includes('zeigt') || goal.includes('wendet an') || goal.includes('besucht') || goal.includes('initiiert') || goal.includes('benennt')) {
                criteria.specific.met = true;
            }
            if (goal.includes('gemessen') || goal.includes('dokumentiert') || goal.includes('%') || /\d+x/.test(goal)) {
                criteria.measurable.met = true;
            }
            if (goal.includes('Wochen') || goal.includes('Tage') || goal.includes('Monate')) {
                criteria.timeBound.met = true;
            }

            // Relevanz und Erreichbarkeit können nicht automatisch geprüft werden
            criteria.relevant.hint = "Bitte mit Patient*in/Familie besprechen";
            criteria.achievable.hint = "Bitte Ressourcen und Fähigkeiten prüfen";

            return criteria;
        }
    },

    // ============================================================
    // THERAPIEMODULE NACH DIAGNOSE
    // ============================================================

    therapyModules: {
        ADHS: {
            name: "ADHS-Behandlungspfad",
            icd10: "F90",
            evidenceLevel: "S3-Leitlinie",
            components: [
                {
                    name: "Psychoedukation",
                    priority: 1,
                    target: ["Eltern", "Kind", "Lehrer"],
                    content: [
                        "Erklärung des Störungsbildes",
                        "Entstehungsmodell (bio-psycho-sozial)",
                        "Behandlungsoptionen",
                        "Alltagstipps"
                    ],
                    duration: "2-3 Sitzungen",
                    materials: ["ADHS-Broschüre", "Erklär-Video"]
                },
                {
                    name: "Elterntraining",
                    priority: 1,
                    target: ["Eltern"],
                    programs: [
                        { name: "Triple P", evidence: "stark" },
                        { name: "THOP-Elternprogramm", evidence: "stark" },
                        { name: "Incredible Years", evidence: "stark" }
                    ],
                    duration: "8-12 Sitzungen",
                    content: [
                        "Positive Verstärkung",
                        "Klare Regeln und Konsequenzen",
                        "Strukturierung des Alltags",
                        "Umgang mit Problemverhalten"
                    ]
                },
                {
                    name: "Kognitive Verhaltenstherapie (Kind)",
                    priority: 2,
                    target: ["Kind"],
                    content: [
                        "Selbstinstruktionstraining",
                        "Impulskontrolle",
                        "Problemlösetraining",
                        "Soziale Kompetenz"
                    ],
                    duration: "15-25 Sitzungen"
                },
                {
                    name: "Schulbasierte Intervention",
                    priority: 2,
                    target: ["Lehrer", "Schule"],
                    content: [
                        "Nachteilsausgleich beantragen",
                        "Sitzplatz vorne",
                        "Strukturhilfen",
                        "Token-Systeme im Unterricht"
                    ]
                },
                {
                    name: "Pharmakotherapie",
                    priority: "nach Indikation",
                    indication: "Bei unzureichendem Ansprechen auf psychosoziale Maßnahmen",
                    options: [
                        { name: "Methylphenidat", firstLine: true },
                        { name: "Lisdexamfetamin", firstLine: true },
                        { name: "Atomoxetin", secondLine: true },
                        { name: "Guanfacin", secondLine: true }
                    ],
                    note: "Ab 6 Jahren zugelassen, Facharztvorbehalt"
                }
            ]
        },

        Angststörung: {
            name: "Angst-Behandlungspfad",
            icd10: "F40/F41/F93",
            evidenceLevel: "S3-Leitlinie",
            components: [
                {
                    name: "Psychoedukation",
                    priority: 1,
                    content: [
                        "Angst als normale Emotion",
                        "Teufelskreis der Angst",
                        "Vermeidung als Aufrechterhaltung",
                        "Prinzip der Exposition"
                    ]
                },
                {
                    name: "Kognitive Verhaltenstherapie",
                    priority: 1,
                    programs: [
                        { name: "Coping Cat / Coping Koala", evidence: "stark" },
                        { name: "FRIENDS", evidence: "stark" }
                    ],
                    content: [
                        "Psychoedukation",
                        "Entspannungsverfahren",
                        "Kognitive Umstrukturierung",
                        "Expositionsübungen (graduiert)",
                        "Rückfallprophylaxe"
                    ],
                    duration: "12-20 Sitzungen"
                },
                {
                    name: "Expositionstherapie",
                    priority: 1,
                    content: [
                        "Angsthierarchie erstellen",
                        "In-vivo Exposition",
                        "Habituation",
                        "Erfolgserlebnisse sammeln"
                    ],
                    note: "Goldstandard bei Angststörungen"
                },
                {
                    name: "Elterneinbezug",
                    priority: 1,
                    content: [
                        "Modelllernen (eigene Ängste)",
                        "Vermeidungsverhalten nicht unterstützen",
                        "Kind ermutigen, nicht schützen"
                    ]
                },
                {
                    name: "Pharmakotherapie",
                    priority: "bei schwerer Ausprägung",
                    options: [
                        { name: "SSRI (Fluoxetin, Sertralin)", note: "Off-label, aber evidenzbasiert" }
                    ],
                    note: "Nur in Kombination mit Psychotherapie"
                }
            ]
        },

        Depression: {
            name: "Depressions-Behandlungspfad",
            icd10: "F32/F33",
            evidenceLevel: "S3-Leitlinie",
            components: [
                {
                    name: "Psychoedukation",
                    priority: 1,
                    content: [
                        "Depression als Erkrankung",
                        "Symptome bei Kindern/Jugendlichen (oft Reizbarkeit!)",
                        "Behandelbarkeit",
                        "Suizidalität ansprechen"
                    ]
                },
                {
                    name: "Aktivitätsaufbau",
                    priority: 1,
                    content: [
                        "Aktivitäten-Monitoring",
                        "Angenehme Aktivitäten planen",
                        "Kleine Schritte",
                        "Tagesstruktur"
                    ]
                },
                {
                    name: "Kognitive Verhaltenstherapie",
                    priority: 1,
                    programs: [
                        { name: "ACTION", evidence: "stark" },
                        { name: "MICHI", evidence: "moderat" }
                    ],
                    content: [
                        "Verhaltensaktivierung",
                        "Kognitive Umstrukturierung",
                        "Problemlösetraining",
                        "Soziale Kompetenz"
                    ],
                    duration: "12-20 Sitzungen"
                },
                {
                    name: "Interpersonelle Psychotherapie (IPT-A)",
                    priority: 2,
                    indication: "Bei interpersonellen Problemen",
                    content: [
                        "Beziehungen im Fokus",
                        "Rollenwechsel",
                        "Trauer",
                        "Konflikte"
                    ],
                    duration: "12-16 Sitzungen"
                },
                {
                    name: "Pharmakotherapie",
                    priority: "bei mittelschwerer bis schwerer Depression",
                    options: [
                        { name: "Fluoxetin", note: "Einziger zugelassener SSRI bei Kindern ab 8J" },
                        { name: "Andere SSRI", note: "Off-label bei Nicht-Ansprechen" }
                    ],
                    warning: "Zu Beginn engmaschiges Suizidalitäts-Monitoring!"
                }
            ]
        },

        Trauma: {
            name: "Trauma-Behandlungspfad",
            icd10: "F43.1",
            evidenceLevel: "S3-Leitlinie",
            components: [
                {
                    name: "Stabilisierung",
                    priority: 1,
                    content: [
                        "Sicherheit herstellen",
                        "Psychoedukation (Traumafolgen normalisieren)",
                        "Affektregulation",
                        "Ressourcenaktivierung"
                    ],
                    duration: "Variabel - bis Stabilität erreicht"
                },
                {
                    name: "Trauma-fokussierte KVT (TF-KVT)",
                    priority: 1,
                    programs: [
                        { name: "TF-CBT nach Cohen", evidence: "stark" }
                    ],
                    content: [
                        "Psychoedukation",
                        "Entspannung & Affektregulation",
                        "Kognitive Verarbeitung",
                        "Trauma-Narrativ",
                        "In-vivo Exposition (Trigger)",
                        "Elternkomponente",
                        "Integration & Sicherheit"
                    ],
                    duration: "12-25 Sitzungen"
                },
                {
                    name: "EMDR",
                    priority: 2,
                    indication: "Alternative zu TF-KVT",
                    note: "Bei Kindern ab ca. 8 Jahren",
                    evidence: "gut"
                },
                {
                    name: "Eltern-/Bezugspersonenarbeit",
                    priority: 1,
                    content: [
                        "Eltern als Co-Therapeuten",
                        "Eigene Belastung der Eltern",
                        "Unterstützung im Alltag"
                    ]
                }
            ],
            contraindications: [
                "Keine Traumaexposition bei instabilen Patienten",
                "Aktive Suizidalität zuerst behandeln",
                "Bei fortgesetzter Traumatisierung: Schutz priorisieren"
            ]
        },

        SSV: {
            name: "Störung des Sozialverhaltens - Behandlungspfad",
            icd10: "F91",
            evidenceLevel: "Leitlinie",
            components: [
                {
                    name: "Multi-Systemische Therapie (MST)",
                    priority: 1,
                    indication: "Bei schwerer SSV mit Delinquenz",
                    evidence: "stark",
                    content: [
                        "Familie",
                        "Schule",
                        "Peers",
                        "Gemeinde"
                    ],
                    intensity: "Aufsuchend, mehrmals/Woche"
                },
                {
                    name: "Elterntraining",
                    priority: 1,
                    programs: [
                        { name: "Triple P", evidence: "stark" },
                        { name: "Parent-Child Interaction Therapy (PCIT)", evidence: "stark" }
                    ]
                },
                {
                    name: "Soziales Kompetenztraining",
                    priority: 2,
                    content: [
                        "Problemlösen",
                        "Impulskontrolle",
                        "Perspektivübernahme",
                        "Ärgerkontrolle"
                    ]
                },
                {
                    name: "Schulische Maßnahmen",
                    priority: 2,
                    content: [
                        "Verhaltensverträge",
                        "Token-Systeme",
                        "Schulbegleitung"
                    ]
                }
            ],
            note: "Frühe Intervention entscheidend! Callous-Unemotional Traits beachten."
        },

        Autismus: {
            name: "Autismus-Spektrum - Unterstützungspfad",
            icd10: "F84",
            evidenceLevel: "Leitlinie",
            components: [
                {
                    name: "Diagnostik & Psychoedukation",
                    priority: 1,
                    content: [
                        "Ausführliche Diagnostik (ADOS, ADI-R)",
                        "Aufklärung Familie",
                        "Aufklärung Kind/Jugendlicher"
                    ]
                },
                {
                    name: "Frühförderung (bei kleinen Kindern)",
                    priority: 1,
                    programs: [
                        { name: "ESDM (Early Start Denver Model)", evidence: "stark" },
                        { name: "TEACCH", evidence: "moderat" }
                    ]
                },
                {
                    name: "Soziales Kompetenztraining",
                    priority: 2,
                    programs: [
                        { name: "SOSTA-FRA", evidence: "moderat" },
                        { name: "KONTAKT", evidence: "moderat" }
                    ]
                },
                {
                    name: "Schulische Unterstützung",
                    priority: 1,
                    content: [
                        "Nachteilsausgleich",
                        "Schulbegleitung",
                        "Reizarme Umgebung",
                        "Visuelle Strukturierung"
                    ]
                },
                {
                    name: "Komorbide Störungen behandeln",
                    priority: 2,
                    note: "ADHS, Angst, Depression häufig komorbid"
                }
            ]
        }
    },

    // ============================================================
    // BEHANDLUNGSPLAN GENERATOR
    // ============================================================

    generateTreatmentPlan(diagnoses, patientInfo, preferences) {
        const plan = {
            patient: patientInfo,
            createdAt: new Date().toISOString(),
            diagnoses: diagnoses,
            phases: [],
            goals: [],
            interventions: [],
            timeline: null
        };

        // Phase 1: Akut (falls nötig)
        if (preferences.acuteNeeds) {
            plan.phases.push({
                name: "Akutphase",
                duration: "1-4 Wochen",
                focus: "Stabilisierung, Sicherheit",
                goals: ["Krisenintervention", "Sicherheit herstellen"]
            });
        }

        // Phase 2: Diagnostik & Psychoedukation
        plan.phases.push({
            name: "Diagnostik & Psychoedukation",
            duration: "2-4 Wochen",
            focus: "Verstehen und Einordnen",
            goals: ["Vollständige Diagnostik", "Familie aufklären", "Behandlungsmotivation aufbauen"]
        });

        // Phase 3: Aktive Behandlung
        const activePhase = {
            name: "Aktive Behandlung",
            duration: "12-24 Wochen",
            focus: "Symptomreduktion, Kompetenzaufbau",
            interventions: []
        };

        diagnoses.forEach(dx => {
            const module = this.therapyModules[dx.category];
            if (module) {
                module.components.forEach(comp => {
                    if (comp.priority === 1 || comp.priority === 2) {
                        activePhase.interventions.push({
                            name: comp.name,
                            target: comp.target,
                            duration: comp.duration,
                            source: module.name
                        });
                    }
                });
            }
        });

        plan.phases.push(activePhase);

        // Phase 4: Erhaltung & Rückfallprävention
        plan.phases.push({
            name: "Erhaltung & Rückfallprävention",
            duration: "Variabel",
            focus: "Stabilität sichern",
            goals: ["Gelerntes festigen", "Rückfallsignale kennen", "Booster bei Bedarf"]
        });

        return plan;
    },

    // ============================================================
    // FORTSCHRITTS-TRACKING
    // ============================================================

    progressTracking: {
        createTracker(goals) {
            return goals.map(goal => ({
                goalId: goal.id || Math.random().toString(36).substr(2, 9),
                goal: goal.goal,
                baseline: null,
                measurements: [],
                status: 'active'
            }));
        },

        addMeasurement(tracker, goalId, value, date = new Date()) {
            const goal = tracker.find(g => g.goalId === goalId);
            if (goal) {
                if (goal.baseline === null) {
                    goal.baseline = value;
                }
                goal.measurements.push({
                    date: date.toISOString(),
                    value,
                    note: ''
                });
            }
            return tracker;
        },

        calculateProgress(tracker, goalId) {
            const goal = tracker.find(g => g.goalId === goalId);
            if (!goal || goal.measurements.length < 2) return null;

            const baseline = goal.baseline;
            const latest = goal.measurements[goal.measurements.length - 1].value;

            // Assuming lower is better (e.g., symptoms)
            const change = baseline - latest;
            const percentChange = (change / baseline) * 100;

            return {
                baseline,
                current: latest,
                change,
                percentChange: Math.round(percentChange),
                trend: change > 0 ? 'improving' : change < 0 ? 'worsening' : 'stable'
            };
        }
    }
};

// Export
if (typeof window !== 'undefined') {
    window.TreatmentModule = TreatmentModule;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TreatmentModule;
}
