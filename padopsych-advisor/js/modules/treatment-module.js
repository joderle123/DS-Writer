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
    },

    // ============================================================
    // UI GENERATOR FUNCTIONS
    // ============================================================

    currentGoals: [],
    currentTreatmentPlan: null,

    generateSMARTGoalUI: function() {
        const templates = this.smartGoals.templates;

        const templateOptions = Object.entries(templates).map(([key, template]) => `
            <option value="${key}">${this.getTemplateLabel(key)}</option>
        `).join('');

        return `
            <div class="smart-goal-container">
                <div class="tool-info-box scientific-box">
                    <h4>📚 Wissenschaftlicher Hintergrund</h4>
                    <p><strong>SMART-Ziele in der Psychotherapie</strong></p>
                    <ul>
                        <li><strong>S</strong>pezifisch - Konkret und eindeutig formuliert</li>
                        <li><strong>M</strong>essbar - Fortschritt kann gemessen werden</li>
                        <li><strong>A</strong>ttraktiv/Akzeptiert - Vom Patienten gewollt</li>
                        <li><strong>R</strong>ealistisch - Erreichbar mit vorhandenen Ressourcen</li>
                        <li><strong>T</strong>erminiert - Mit klarem Zeitrahmen</li>
                    </ul>
                    <p class="reference">Basierend auf: Locke, E.A., & Latham, G.P. (2002). Building a practically useful theory of goal setting. American Psychologist, 57(9), 705-717.</p>
                </div>

                <div class="goal-generator-header">
                    <h3>SMART-Ziel Generator</h3>
                </div>

                <div class="goal-template-selector">
                    <label>Zieltyp auswählen:</label>
                    <select id="goal-template" onchange="TreatmentModule.showGoalTemplate(this.value)">
                        <option value="">-- Bitte wählen --</option>
                        ${templateOptions}
                    </select>
                </div>

                <div id="goal-template-form" class="goal-form" style="display:none;">
                    <!-- Dynamic form will be inserted here -->
                </div>

                <div class="current-goals-section">
                    <h4>Aktuelle Therapieziele</h4>
                    <div id="current-goals-list" class="goals-list">
                        ${this.renderCurrentGoals()}
                    </div>
                </div>

                <div class="goal-examples">
                    <h4>Beispiele für SMART-Ziele</h4>
                    <div class="examples-grid">
                        ${Object.entries(templates).slice(0, 3).map(([key, template]) => `
                            <div class="example-card">
                                <div class="example-type">${this.getTemplateLabel(key)}</div>
                                <div class="example-text">"${template.examples[0]?.output || ''}"</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    },

    generateTherapyModulesUI: function() {
        const modulesHtml = Object.entries(this.therapyModules).map(([key, module]) => `
            <div class="therapy-module-card" data-diagnosis="${key}">
                <div class="module-header">
                    <h4>${module.name}</h4>
                    <div class="module-meta">
                        <span class="badge icd">${module.icd10}</span>
                        <span class="badge evidence">${module.evidenceLevel}</span>
                    </div>
                </div>
                <div class="module-components">
                    ${module.components.map(comp => `
                        <div class="component-item priority-${comp.priority}">
                            <div class="component-header">
                                <span class="component-name">${comp.name}</span>
                                <span class="priority-badge">
                                    ${typeof comp.priority === 'number' ? `P${comp.priority}` : comp.priority}
                                </span>
                            </div>
                            ${comp.programs ? `
                                <div class="evidence-programs">
                                    ${comp.programs.map(p => `
                                        <span class="program-badge" title="Evidenz: ${p.evidence}">
                                            ${p.name} <small>(${p.evidence})</small>
                                        </span>
                                    `).join('')}
                                </div>
                            ` : ''}
                            ${comp.content ? `
                                <ul class="component-content">
                                    ${comp.content.slice(0, 4).map(c => `<li>${c}</li>`).join('')}
                                </ul>
                            ` : ''}
                            ${comp.duration ? `<div class="component-duration">Dauer: ${comp.duration}</div>` : ''}
                        </div>
                    `).join('')}
                </div>
                ${module.note ? `<div class="module-note"><i class="fas fa-info-circle"></i> ${module.note}</div>` : ''}
                ${module.contraindications ? `
                    <div class="contraindications">
                        <strong>Kontraindikationen:</strong>
                        <ul>${module.contraindications.map(c => `<li>${c}</li>`).join('')}</ul>
                    </div>
                ` : ''}
            </div>
        `).join('');

        return `
            <div class="therapy-modules-container">
                <div class="tool-info-box scientific-box">
                    <h4>📚 Wissenschaftlicher Hintergrund</h4>
                    <p><strong>Evidenzbasierte Behandlungsmodule</strong></p>
                    <p>Die Behandlungsempfehlungen basieren auf:</p>
                    <ul>
                        <li><strong>AWMF S3-Leitlinien</strong> für Kinder- und Jugendpsychiatrie</li>
                        <li><strong>NICE Guidelines</strong> (National Institute for Health and Care Excellence)</li>
                        <li><strong>APA Practice Guidelines</strong> (American Psychiatric Association)</li>
                        <li><strong>Cochrane Reviews</strong> für Kinder-/Jugendpsychiatrie</li>
                    </ul>
                    <p class="reference">Evidenzlevel: stark = RCTs/Meta-Analysen, moderat = kontrollierte Studien, gering = Expertenkonsens</p>
                </div>

                <div class="modules-header">
                    <h3>Therapiemodule nach Diagnose</h3>
                    <div class="filter-buttons">
                        <button class="btn btn-sm active" onclick="TreatmentModule.filterModules('all')">Alle</button>
                        <button class="btn btn-sm" onclick="TreatmentModule.filterModules('ADHS')">ADHS</button>
                        <button class="btn btn-sm" onclick="TreatmentModule.filterModules('Angststörung')">Angst</button>
                        <button class="btn btn-sm" onclick="TreatmentModule.filterModules('Depression')">Depression</button>
                        <button class="btn btn-sm" onclick="TreatmentModule.filterModules('Trauma')">Trauma</button>
                    </div>
                </div>

                <div class="modules-grid">
                    ${modulesHtml}
                </div>
            </div>
        `;
    },

    generateTreatmentPlanUI: function() {
        return `
            <div class="treatment-plan-container">
                <div class="tool-info-box scientific-box">
                    <h4>📚 Wissenschaftlicher Hintergrund</h4>
                    <p><strong>Strukturierte Behandlungsplanung</strong></p>
                    <ul>
                        <li>Phasenmodell der Psychotherapie (Grawe, 1998)</li>
                        <li>Stepped-Care-Ansatz (NICE Guidelines)</li>
                        <li>Multimodale Behandlung (AACAP Practice Parameters)</li>
                        <li>Individuelle Anpassung an Patientenbedürfnisse</li>
                    </ul>
                </div>

                <div class="plan-header">
                    <h3>Behandlungsplan erstellen</h3>
                </div>

                <div class="plan-form">
                    <div class="form-section">
                        <h4>Patientendaten</h4>
                        <div class="form-row">
                            <label>Name/Code:</label>
                            <input type="text" id="tp-patient-name" placeholder="Patientencode">
                        </div>
                        <div class="form-row">
                            <label>Alter:</label>
                            <input type="number" id="tp-patient-age" placeholder="Jahre">
                        </div>
                    </div>

                    <div class="form-section">
                        <h4>Diagnosen auswählen</h4>
                        <div class="diagnosis-checkboxes">
                            ${Object.keys(this.therapyModules).map(dx => `
                                <label class="diagnosis-checkbox">
                                    <input type="checkbox" name="diagnosis" value="${dx}">
                                    <span>${dx} (${this.therapyModules[dx].icd10})</span>
                                </label>
                            `).join('')}
                        </div>
                    </div>

                    <div class="form-section">
                        <h4>Zusätzliche Angaben</h4>
                        <div class="form-row">
                            <label>
                                <input type="checkbox" id="tp-acute-needs">
                                Akute Stabilisierung erforderlich
                            </label>
                        </div>
                        <div class="form-row">
                            <label>Besondere Berücksichtigungen:</label>
                            <textarea id="tp-special-needs" rows="3" placeholder="Z.B. Komorbiditäten, familiäre Situation, Schulprobleme..."></textarea>
                        </div>
                    </div>

                    <div class="form-actions">
                        <button class="btn btn-primary" onclick="TreatmentModule.generatePlan()">
                            <i class="fas fa-clipboard-list"></i> Behandlungsplan generieren
                        </button>
                    </div>
                </div>

                <div id="generated-plan" class="generated-plan" style="display:none;"></div>
            </div>
        `;
    },

    // Helper functions
    getTemplateLabel: function(key) {
        const labels = {
            behaviorReduction: 'Verhaltensreduktion',
            behaviorIncrease: 'Verhaltensaufbau',
            emotionRegulation: 'Emotionsregulation',
            schoolAttendance: 'Schulbesuch',
            socialSkills: 'Soziale Kompetenz',
            selfEsteem: 'Selbstwert'
        };
        return labels[key] || key;
    },

    showGoalTemplate: function(templateKey) {
        const formContainer = document.getElementById('goal-template-form');
        if (!templateKey) {
            formContainer.style.display = 'none';
            return;
        }

        const template = this.smartGoals.templates[templateKey];
        if (!template) return;

        const fieldsHtml = template.fields.map(field => `
            <div class="form-row">
                <label>${this.getFieldLabel(field)}:</label>
                <input type="text" id="goal-${field}" placeholder="${this.getFieldPlaceholder(field, templateKey)}">
            </div>
        `).join('');

        formContainer.innerHTML = `
            <div class="template-info">
                <h4>${this.getTemplateLabel(templateKey)}</h4>
                <p class="template-pattern"><strong>Muster:</strong> ${template.template}</p>
            </div>

            <div class="patient-name-field">
                <label>Patient/in:</label>
                <input type="text" id="goal-patient-name" placeholder="Name des Patienten">
            </div>

            ${fieldsHtml}

            <div class="example-preview">
                <h5>Beispiel:</h5>
                <p class="example-text">"${template.examples[0]?.output || ''}"</p>
            </div>

            <div class="form-actions">
                <button class="btn btn-primary" onclick="TreatmentModule.createGoal('${templateKey}')">
                    <i class="fas fa-plus"></i> Ziel erstellen
                </button>
                <button class="btn btn-secondary" onclick="TreatmentModule.previewGoal('${templateKey}')">
                    <i class="fas fa-eye"></i> Vorschau
                </button>
            </div>

            <div id="goal-preview" class="goal-preview" style="display:none;"></div>
        `;

        formContainer.style.display = 'block';
    },

    getFieldLabel: function(field) {
        const labels = {
            behavior: 'Verhalten',
            current: 'Aktuelle Häufigkeit',
            target: 'Zielhäufigkeit',
            timeframe: 'Zeitraum',
            measure: 'Messmethode',
            context: 'Kontext/Situation',
            strategy: 'Strategie',
            trigger: 'Auslöser',
            emotion: 'Emotion',
            firstStep: 'Erster Schritt',
            targetGroup: 'Zielgruppe',
            frequency: 'Häufigkeit',
            count: 'Anzahl',
            aspect: 'Aspekt',
            method: 'Methode'
        };
        return labels[field] || field;
    },

    getFieldPlaceholder: function(field, templateKey) {
        const template = this.smartGoals.templates[templateKey];
        if (template?.examples?.[0]?.input?.[field]) {
            return `z.B. "${template.examples[0].input[field]}"`;
        }
        return '';
    },

    previewGoal: function(templateKey) {
        const inputs = {};
        const template = this.smartGoals.templates[templateKey];

        template.fields.forEach(field => {
            const input = document.getElementById(`goal-${field}`);
            inputs[field] = input?.value || `[${field}]`;
        });

        const patientName = document.getElementById('goal-patient-name')?.value || '[Name]';
        const goal = this.smartGoals.generateGoal(templateKey, inputs, patientName);

        const previewDiv = document.getElementById('goal-preview');
        previewDiv.innerHTML = `
            <h5>Vorschau:</h5>
            <p class="goal-text">"${goal.goal}"</p>
            <div class="smart-validation">
                <h6>SMART-Prüfung:</h6>
                ${this.renderSMARTValidation(goal.goal)}
            </div>
        `;
        previewDiv.style.display = 'block';
    },

    renderSMARTValidation: function(goalText) {
        const validation = this.smartGoals.validateSMART(goalText);
        return Object.entries(validation).map(([criterion, data]) => `
            <div class="validation-item ${data.met ? 'met' : 'not-met'}">
                <span class="criterion">${criterion.toUpperCase()}</span>
                <span class="status">${data.met ? '✓' : '○'}</span>
                ${!data.met ? `<span class="hint">${data.hint}</span>` : ''}
            </div>
        `).join('');
    },

    createGoal: function(templateKey) {
        const inputs = {};
        const template = this.smartGoals.templates[templateKey];

        template.fields.forEach(field => {
            const input = document.getElementById(`goal-${field}`);
            inputs[field] = input?.value || '';
        });

        const patientName = document.getElementById('goal-patient-name')?.value || 'Patient';
        const goal = this.smartGoals.generateGoal(templateKey, inputs, patientName);

        if (goal) {
            this.currentGoals.push(goal);
            this.saveGoals();
            this.refreshGoalsList();
            alert('Ziel wurde erstellt und gespeichert.');

            // Reset form
            template.fields.forEach(field => {
                const input = document.getElementById(`goal-${field}`);
                if (input) input.value = '';
            });
        }
    },

    renderCurrentGoals: function() {
        // Load from localStorage
        const saved = localStorage.getItem('treatmentGoals');
        if (saved) {
            this.currentGoals = JSON.parse(saved);
        }

        if (this.currentGoals.length === 0) {
            return '<p class="no-goals">Noch keine Therapieziele erstellt.</p>';
        }

        return this.currentGoals.map((goal, idx) => `
            <div class="goal-item" data-index="${idx}">
                <div class="goal-status ${goal.status}">${goal.status === 'active' ? '🟢' : goal.status === 'completed' ? '✅' : '⏸️'}</div>
                <div class="goal-content">
                    <p class="goal-text">"${goal.goal}"</p>
                    <div class="goal-meta">
                        <span class="goal-type">${this.getTemplateLabel(goal.type)}</span>
                        <span class="goal-date">Erstellt: ${new Date(goal.createdAt).toLocaleDateString('de-DE')}</span>
                    </div>
                </div>
                <div class="goal-actions">
                    <button class="btn btn-sm" onclick="TreatmentModule.toggleGoalStatus(${idx})">Status</button>
                    <button class="btn btn-sm btn-danger" onclick="TreatmentModule.deleteGoal(${idx})">×</button>
                </div>
            </div>
        `).join('');
    },

    refreshGoalsList: function() {
        const list = document.getElementById('current-goals-list');
        if (list) {
            list.innerHTML = this.renderCurrentGoals();
        }
    },

    saveGoals: function() {
        localStorage.setItem('treatmentGoals', JSON.stringify(this.currentGoals));
    },

    toggleGoalStatus: function(index) {
        const statuses = ['active', 'completed', 'paused'];
        const currentStatus = this.currentGoals[index].status;
        const nextIndex = (statuses.indexOf(currentStatus) + 1) % statuses.length;
        this.currentGoals[index].status = statuses[nextIndex];
        this.saveGoals();
        this.refreshGoalsList();
    },

    deleteGoal: function(index) {
        if (confirm('Ziel wirklich löschen?')) {
            this.currentGoals.splice(index, 1);
            this.saveGoals();
            this.refreshGoalsList();
        }
    },

    filterModules: function(diagnosis) {
        const cards = document.querySelectorAll('.therapy-module-card');
        const buttons = document.querySelectorAll('.filter-buttons .btn');

        buttons.forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');

        cards.forEach(card => {
            if (diagnosis === 'all' || card.dataset.diagnosis === diagnosis) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    },

    generatePlan: function() {
        const patientInfo = {
            name: document.getElementById('tp-patient-name')?.value || 'Patient',
            age: parseInt(document.getElementById('tp-patient-age')?.value) || null
        };

        const diagnoses = [];
        document.querySelectorAll('input[name="diagnosis"]:checked').forEach(cb => {
            diagnoses.push({ category: cb.value, icd10: this.therapyModules[cb.value]?.icd10 });
        });

        if (diagnoses.length === 0) {
            alert('Bitte mindestens eine Diagnose auswählen.');
            return;
        }

        const preferences = {
            acuteNeeds: document.getElementById('tp-acute-needs')?.checked || false,
            specialNeeds: document.getElementById('tp-special-needs')?.value || ''
        };

        const plan = this.generateTreatmentPlan(diagnoses, patientInfo, preferences);
        this.currentTreatmentPlan = plan;

        this.renderGeneratedPlan(plan);
    },

    renderGeneratedPlan: function(plan) {
        const phasesHtml = plan.phases.map((phase, idx) => `
            <div class="phase-card">
                <div class="phase-header">
                    <span class="phase-number">${idx + 1}</span>
                    <h4>${phase.name}</h4>
                    <span class="phase-duration">${phase.duration}</span>
                </div>
                <div class="phase-focus"><strong>Fokus:</strong> ${phase.focus}</div>
                ${phase.goals ? `
                    <div class="phase-goals">
                        <strong>Ziele:</strong>
                        <ul>${phase.goals.map(g => `<li>${g}</li>`).join('')}</ul>
                    </div>
                ` : ''}
                ${phase.interventions ? `
                    <div class="phase-interventions">
                        <strong>Interventionen:</strong>
                        ${phase.interventions.map(int => `
                            <div class="intervention-item">
                                <span class="intervention-name">${int.name}</span>
                                ${int.duration ? `<span class="intervention-duration">${int.duration}</span>` : ''}
                                ${int.target ? `<span class="intervention-target">Ziel: ${int.target.join(', ')}</span>` : ''}
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
            </div>
        `).join('');

        const planHtml = `
            <div class="plan-card">
                <div class="plan-header-info">
                    <h4>Behandlungsplan für: ${plan.patient.name}</h4>
                    <p>Erstellt am: ${new Date(plan.createdAt).toLocaleDateString('de-DE')}</p>
                    <p>Diagnosen: ${plan.diagnoses.map(d => `${d.category} (${d.icd10})`).join(', ')}</p>
                </div>

                <div class="phases-timeline">
                    <h4>Behandlungsphasen</h4>
                    ${phasesHtml}
                </div>

                <div class="plan-actions">
                    <button class="btn btn-primary" onclick="TreatmentModule.saveTreatmentPlan()">
                        <i class="fas fa-save"></i> Speichern
                    </button>
                    <button class="btn btn-secondary" onclick="TreatmentModule.printTreatmentPlan()">
                        <i class="fas fa-print"></i> Drucken
                    </button>
                    <button class="btn btn-outline" onclick="TreatmentModule.exportTreatmentPlan()">
                        <i class="fas fa-download"></i> Exportieren
                    </button>
                </div>
            </div>
        `;

        const container = document.getElementById('generated-plan');
        container.innerHTML = planHtml;
        container.style.display = 'block';
    },

    saveTreatmentPlan: function() {
        if (this.currentTreatmentPlan) {
            localStorage.setItem('currentTreatmentPlan', JSON.stringify(this.currentTreatmentPlan));
            alert('Behandlungsplan wurde gespeichert.');
        }
    },

    printTreatmentPlan: function() {
        window.print();
    },

    exportTreatmentPlan: function() {
        if (this.currentTreatmentPlan) {
            const dataStr = JSON.stringify(this.currentTreatmentPlan, null, 2);
            const blob = new Blob([dataStr], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `behandlungsplan_${this.currentTreatmentPlan.patient.name}_${new Date().toISOString().split('T')[0]}.json`;
            a.click();
            URL.revokeObjectURL(url);
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
