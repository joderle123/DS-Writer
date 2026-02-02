/**
 * ============================================================================
 * SAFETY MODULE - Sicherheitsmodul für Kinder- und Jugendpsychiatrie
 * ============================================================================
 *
 * WISSENSCHAFTLICHE GRUNDLAGEN:
 * - Columbia-Suicide Severity Rating Scale (C-SSRS): Posner et al. (2011)
 * - Stanley & Brown Safety Planning Intervention (2012)
 * - AACAP Practice Parameters for Suicidal Behavior (2001, updated)
 * - S3-Leitlinie Suizidalität im Kindes- und Jugendalter (DGKJP)
 *
 * WICHTIG: Dieses Tool ersetzt KEINE klinische Einschätzung!
 * Bei akuter Suizidalität: Sofortige fachärztliche Konsultation!
 */

const SafetyModule = {

    // ============================================================
    // C-SSRS ADAPTIERT FÜR KINDER/JUGENDLICHE
    // ============================================================

    screeningFragen: {
        // Stufe 1: Suizidgedanken (Ideation)
        ideation: [
            {
                id: "wish_dead",
                frage: "Hast du dir in den letzten Wochen gewünscht, tot zu sein oder nicht mehr aufzuwachen?",
                altersanpassung: {
                    child: "Hast du dir gewünscht, dass du nicht mehr da bist oder für immer einschläfst?",
                    teen: "Hast du dir gewünscht, tot zu sein oder einzuschlafen und nicht mehr aufzuwachen?"
                },
                schweregrad: 1,
                followUp: true
            },
            {
                id: "suicidal_thoughts",
                frage: "Hattest du tatsächlich Gedanken daran, dich selbst zu töten?",
                altersanpassung: {
                    child: "Hattest du Gedanken daran, dir selbst etwas anzutun, damit du nicht mehr lebst?",
                    teen: "Hattest du Gedanken daran, dich umzubringen oder Suizid zu begehen?"
                },
                schweregrad: 2,
                followUp: true,
                triggerNextLevel: true
            },
            {
                id: "method_thoughts",
                frage: "Hast du darüber nachgedacht, WIE du es tun könntest?",
                altersanpassung: {
                    child: "Hast du dir überlegt, wie du dir etwas antun könntest?",
                    teen: "Hast du über eine Methode nachgedacht, wie du dich umbringen könntest?"
                },
                schweregrad: 3,
                followUp: true
            },
            {
                id: "intent",
                frage: "Hattest du die Absicht, nach diesen Gedanken zu handeln?",
                altersanpassung: {
                    child: "Wolltest du das wirklich tun oder waren es nur Gedanken?",
                    teen: "Hattest du vor, diese Gedanken in die Tat umzusetzen?"
                },
                schweregrad: 4,
                followUp: true
            },
            {
                id: "plan",
                frage: "Hast du einen konkreten Plan entwickelt?",
                altersanpassung: {
                    child: "Hast du dir genau überlegt, wann und wo du es tun würdest?",
                    teen: "Hast du Details geplant - wann, wo, wie?"
                },
                schweregrad: 5,
                kritisch: true
            }
        ],

        // Stufe 2: Suizidales Verhalten (Behavior)
        behavior: [
            {
                id: "preparatory_acts",
                frage: "Hast du Vorbereitungen getroffen (z.B. Abschiedsbrief, Mittel besorgt)?",
                schweregrad: "KRITISCH",
                sofortMassnahme: true
            },
            {
                id: "aborted_attempt",
                frage: "Hast du angefangen, dir etwas anzutun, aber dann aufgehört?",
                schweregrad: "KRITISCH",
                sofortMassnahme: true
            },
            {
                id: "interrupted_attempt",
                frage: "Wurdest du von jemandem oder etwas daran gehindert?",
                schweregrad: "KRITISCH",
                sofortMassnahme: true
            },
            {
                id: "actual_attempt",
                frage: "Hast du einen Suizidversuch unternommen?",
                schweregrad: "AKUT",
                sofortMassnahme: true,
                details: ["Wann?", "Wie?", "Medizinische Versorgung erfolgt?"]
            }
        ],

        // Stufe 3: Risikofaktoren
        riskFactors: [
            { id: "previous_attempt", label: "Frühere Suizidversuche", weight: 5 },
            { id: "self_harm", label: "Selbstverletzendes Verhalten", weight: 3 },
            { id: "family_suicide", label: "Suizid in der Familie", weight: 4 },
            { id: "substance_use", label: "Substanzkonsum", weight: 3 },
            { id: "hopelessness", label: "Ausgeprägte Hoffnungslosigkeit", weight: 4 },
            { id: "social_isolation", label: "Soziale Isolation", weight: 3 },
            { id: "recent_loss", label: "Kürzlicher Verlust/Trennung", weight: 3 },
            { id: "bullying", label: "Mobbing/Cybermobbing", weight: 3 },
            { id: "lgbtq_stress", label: "LGBTQ+ Minderheitenstress", weight: 2 },
            { id: "access_means", label: "Zugang zu Mitteln (Medikamente, Waffen)", weight: 4 },
            { id: "chronic_illness", label: "Chronische Erkrankung/Schmerzen", weight: 2 },
            { id: "impulsivity", label: "Hohe Impulsivität", weight: 3 }
        ],

        // Stufe 4: Schutzfaktoren
        protectiveFactors: [
            { id: "family_support", label: "Unterstützende Familie", weight: 4 },
            { id: "peer_connections", label: "Gute Peer-Beziehungen", weight: 3 },
            { id: "therapeutic_alliance", label: "Therapeutische Beziehung", weight: 4 },
            { id: "reasons_living", label: "Kann Gründe zu leben benennen", weight: 5 },
            { id: "future_orientation", label: "Zukunftspläne vorhanden", weight: 3 },
            { id: "help_seeking", label: "Bereitschaft, Hilfe zu suchen", weight: 4 },
            { id: "restricted_means", label: "Kein Zugang zu Mitteln", weight: 3 },
            { id: "religious_beliefs", label: "Religiöse/spirituelle Überzeugungen", weight: 2 },
            { id: "fear_of_death", label: "Angst vor Tod/Schmerz", weight: 2 },
            { id: "responsibility", label: "Verantwortungsgefühl (z.B. für Geschwister)", weight: 3 }
        ]
    },

    // ============================================================
    // RISIKO-ASSESSMENT
    // ============================================================

    assessRisk(responses) {
        let riskScore = 0;
        let riskLevel = "NIEDRIG";
        const warnings = [];
        const recommendations = [];

        // Ideation Score
        const ideationScore = this.screeningFragen.ideation
            .filter(q => responses[q.id] === true)
            .reduce((sum, q) => sum + q.schweregrad, 0);

        // Behavior - Jedes positive = KRITISCH
        const hasBehavior = this.screeningFragen.behavior
            .some(q => responses[q.id] === true);

        if (hasBehavior) {
            riskLevel = "AKUT";
            warnings.push("⚠️ SUIZIDALES VERHALTEN BERICHTET - SOFORTIGE INTERVENTION ERFORDERLICH");
            recommendations.push("Keine Alleinlassung");
            recommendations.push("Sofortige psychiatrische Vorstellung");
            recommendations.push("Mittelrestriktion (Medikamente, scharfe Gegenstände sichern)");
        }

        // Risk Factors
        const riskFactorScore = this.screeningFragen.riskFactors
            .filter(f => responses[f.id] === true)
            .reduce((sum, f) => sum + f.weight, 0);

        // Protective Factors
        const protectiveScore = this.screeningFragen.protectiveFactors
            .filter(f => responses[f.id] === true)
            .reduce((sum, f) => sum + f.weight, 0);

        // Gesamtberechnung
        riskScore = ideationScore + riskFactorScore - (protectiveScore * 0.5);

        // Level-Bestimmung
        if (!hasBehavior) {
            if (ideationScore >= 4 || riskScore >= 15) {
                riskLevel = "HOCH";
                warnings.push("Erhöhtes Suizidrisiko - engmaschige Überwachung erforderlich");
            } else if (ideationScore >= 2 || riskScore >= 8) {
                riskLevel = "MITTEL";
                warnings.push("Moderates Risiko - Safety Plan erstellen, Kontaktvereinbarung");
            } else if (ideationScore >= 1 || riskScore >= 4) {
                riskLevel = "ERHÖHT";
                warnings.push("Leicht erhöhtes Risiko - regelmäßiges Monitoring");
            }
        }

        return {
            riskLevel,
            riskScore: Math.round(riskScore),
            ideationScore,
            riskFactorScore,
            protectiveScore,
            warnings,
            recommendations: this.getRecommendations(riskLevel, responses),
            safetyPlanNeeded: riskLevel !== "NIEDRIG",
            immediateAction: riskLevel === "AKUT"
        };
    },

    getRecommendations(riskLevel, responses) {
        const recs = [];

        switch (riskLevel) {
            case "AKUT":
                recs.push({
                    priority: 1,
                    action: "Keine Alleinlassung - 1:1 Überwachung",
                    timeframe: "SOFORT"
                });
                recs.push({
                    priority: 1,
                    action: "Psychiatrische Notaufnahme / Krisenintervention",
                    timeframe: "SOFORT"
                });
                recs.push({
                    priority: 1,
                    action: "Mittelrestriktion: Medikamente, Messer, Seile sichern",
                    timeframe: "SOFORT"
                });
                recs.push({
                    priority: 2,
                    action: "Eltern/Sorgeberechtigte informieren",
                    timeframe: "SOFORT"
                });
                break;

            case "HOCH":
                recs.push({
                    priority: 1,
                    action: "Safety Plan gemeinsam erstellen",
                    timeframe: "Heute"
                });
                recs.push({
                    priority: 1,
                    action: "Täglicher Telefonkontakt vereinbaren",
                    timeframe: "Ab heute"
                });
                recs.push({
                    priority: 2,
                    action: "Mittelrestriktion mit Familie besprechen",
                    timeframe: "Heute"
                });
                recs.push({
                    priority: 2,
                    action: "Nächster Termin innerhalb 48h",
                    timeframe: "Heute planen"
                });
                break;

            case "MITTEL":
                recs.push({
                    priority: 1,
                    action: "Safety Plan erstellen",
                    timeframe: "Diese Sitzung"
                });
                recs.push({
                    priority: 2,
                    action: "Krisentelefonnummern aushändigen",
                    timeframe: "Heute"
                });
                recs.push({
                    priority: 2,
                    action: "Nächster Termin innerhalb 1 Woche",
                    timeframe: "Heute planen"
                });
                recs.push({
                    priority: 3,
                    action: "Suizidalität in jeder Sitzung erfragen",
                    timeframe: "Fortlaufend"
                });
                break;

            case "ERHÖHT":
                recs.push({
                    priority: 2,
                    action: "Suizidalität regelmäßig explorieren",
                    timeframe: "Jede Sitzung"
                });
                recs.push({
                    priority: 3,
                    action: "Schutzfaktoren stärken",
                    timeframe: "Behandlungsfokus"
                });
                break;

            default:
                recs.push({
                    priority: 3,
                    action: "Bei Veränderungen neu evaluieren",
                    timeframe: "Bei Bedarf"
                });
        }

        return recs;
    },

    // ============================================================
    // SAFETY PLAN GENERATOR (nach Stanley & Brown)
    // ============================================================

    safetyPlanTemplate: {
        sections: [
            {
                id: "warning_signs",
                title: "1. Warnzeichen erkennen",
                subtitle: "Gedanken, Gefühle, Situationen, die einer Krise vorausgehen",
                prompts: [
                    "Welche Gedanken hast du, bevor es dir schlecht geht?",
                    "Welche Gefühle kommen zuerst?",
                    "In welchen Situationen geht es dir besonders schlecht?"
                ],
                examples: [
                    "Gedanke: 'Niemand versteht mich'",
                    "Gefühl: Leere, Taubheit",
                    "Situation: Allein zu Hause nach der Schule"
                ],
                maxItems: 5
            },
            {
                id: "coping_strategies",
                title: "2. Eigene Bewältigungsstrategien",
                subtitle: "Was kann ich ALLEINE tun, um mich abzulenken/zu beruhigen?",
                prompts: [
                    "Was hat dir früher geholfen?",
                    "Was kannst du tun, ohne jemanden zu brauchen?",
                    "Welche Aktivitäten lenken dich ab?"
                ],
                examples: [
                    "Musik hören (Playlist: ___)",
                    "Spazieren gehen",
                    "Duschen/Baden",
                    "Malen/Zeichnen",
                    "Sport/Bewegung",
                    "Atemübung (4-7-8)"
                ],
                maxItems: 6
            },
            {
                id: "social_distraction",
                title: "3. Menschen und Orte zur Ablenkung",
                subtitle: "Wer oder was kann mich ablenken (ohne über Probleme zu reden)?",
                prompts: [
                    "Mit wem kannst du Zeit verbringen?",
                    "Welche Orte tun dir gut?",
                    "Wo fühlst du dich sicher?"
                ],
                fields: [
                    { label: "Person 1", nameField: true, phoneField: true },
                    { label: "Person 2", nameField: true, phoneField: true },
                    { label: "Ort 1", nameField: true },
                    { label: "Ort 2", nameField: true }
                ],
                maxItems: 4
            },
            {
                id: "support_people",
                title: "4. Menschen, die ich um Hilfe bitten kann",
                subtitle: "Wer kann mir helfen, wenn es mir schlecht geht?",
                prompts: [
                    "Wem vertraust du?",
                    "Wer würde Tag und Nacht kommen?",
                    "Wie erreichst du diese Person?"
                ],
                fields: [
                    { label: "Vertrauensperson 1", nameField: true, phoneField: true, relationship: true },
                    { label: "Vertrauensperson 2", nameField: true, phoneField: true, relationship: true },
                    { label: "Vertrauensperson 3", nameField: true, phoneField: true, relationship: true }
                ],
                maxItems: 3
            },
            {
                id: "professionals",
                title: "5. Professionelle Hilfe",
                subtitle: "Therapeut*in, Klinik, Krisendienst",
                prefilled: [
                    { label: "Mein/e Therapeut*in", nameField: true, phoneField: true },
                    { label: "Telefonseelsorge", phone: "0800 111 0 111", note: "24h, kostenlos" },
                    { label: "Telefonseelsorge", phone: "0800 111 0 222", note: "24h, kostenlos" },
                    { label: "Nummer gegen Kummer", phone: "116 111", note: "Mo-Sa 14-20 Uhr" },
                    { label: "Nächste Kinder-/Jugendpsychiatrie", nameField: true, phoneField: true }
                ]
            },
            {
                id: "environment_safety",
                title: "6. Umgebung sicher machen",
                subtitle: "Zugang zu Mitteln einschränken",
                checkItems: [
                    "Medikamente sind bei Eltern/Vertrauensperson weggeschlossen",
                    "Scharfe Gegenstände sind nicht zugänglich",
                    "Alkohol ist nicht zugänglich",
                    "Andere gefährliche Gegenstände sind gesichert: ___"
                ],
                responsiblePerson: true
            },
            {
                id: "reasons_living",
                title: "7. Meine Gründe zu leben",
                subtitle: "Was ist mir wichtig? Wofür lohnt es sich?",
                prompts: [
                    "Wer oder was ist dir wichtig?",
                    "Was möchtest du noch erleben?",
                    "Wer würde dich vermissen?"
                ],
                examples: [
                    "Meine Familie / Mein Haustier",
                    "Mein/e beste/r Freund/in",
                    "Ich möchte noch ___",
                    "Meine Zukunftspläne: ___"
                ],
                maxItems: 5
            }
        ],

        header: {
            patientName: "",
            dateCreated: "",
            reviewDate: "",
            therapistName: "",
            emergencyContact: ""
        }
    },

    generateSafetyPlan(patientData, responses) {
        const plan = JSON.parse(JSON.stringify(this.safetyPlanTemplate));

        plan.header.patientName = patientData.name || "___";
        plan.header.dateCreated = new Date().toLocaleDateString('de-DE');
        plan.header.reviewDate = this.getReviewDate(responses.riskLevel);

        // Auto-fill based on assessment
        if (responses.reasons_living) {
            plan.sections.find(s => s.id === "reasons_living").prefilled =
                responses.reasons_living_details || [];
        }

        return plan;
    },

    getReviewDate(riskLevel) {
        const today = new Date();
        let days;

        switch (riskLevel) {
            case "AKUT": days = 1; break;
            case "HOCH": days = 7; break;
            case "MITTEL": days = 14; break;
            default: days = 30;
        }

        today.setDate(today.getDate() + days);
        return today.toLocaleDateString('de-DE');
    },

    // ============================================================
    // KRISENRESSOURCEN
    // ============================================================

    krisenRessourcen: {
        deutschland: [
            {
                name: "Telefonseelsorge",
                phone: "0800 111 0 111",
                hours: "24/7",
                kostenfrei: true,
                website: "https://online.telefonseelsorge.de",
                description: "Anonyme Krisenberatung für alle Altersgruppen"
            },
            {
                name: "Telefonseelsorge (alternativ)",
                phone: "0800 111 0 222",
                hours: "24/7",
                kostenfrei: true
            },
            {
                name: "Nummer gegen Kummer - Kinder/Jugendtelefon",
                phone: "116 111",
                hours: "Mo-Sa 14-20 Uhr",
                kostenfrei: true,
                website: "https://www.nummergegenkummer.de",
                description: "Speziell für Kinder und Jugendliche"
            },
            {
                name: "Nummer gegen Kummer - Elterntelefon",
                phone: "0800 111 0 550",
                hours: "Mo-Fr 9-17 Uhr, Di+Do bis 19 Uhr",
                kostenfrei: true
            },
            {
                name: "Kinder- und Jugendpsychiatrischer Dienst",
                description: "Über das örtliche Gesundheitsamt erreichbar",
                regional: true
            },
            {
                name: "Nächste Kinder-/Jugendpsychiatrie",
                description: "Notaufnahme 24/7",
                regional: true,
                searchLink: "https://www.dgkjp.de/kliniken"
            }
        ],
        oesterreich: [
            {
                name: "Rat auf Draht",
                phone: "147",
                hours: "24/7",
                kostenfrei: true,
                description: "Für Kinder, Jugendliche und Bezugspersonen"
            },
            {
                name: "Telefonseelsorge",
                phone: "142",
                hours: "24/7",
                kostenfrei: true
            }
        ],
        schweiz: [
            {
                name: "Pro Juventute",
                phone: "147",
                hours: "24/7",
                kostenfrei: true,
                description: "Beratung für Kinder und Jugendliche"
            },
            {
                name: "Die Dargebotene Hand",
                phone: "143",
                hours: "24/7",
                kostenfrei: true
            }
        ],
        online: [
            {
                name: "[U25] Online-Suizidprävention",
                website: "https://www.u25-deutschland.de",
                description: "Mailberatung von Jugendlichen für Jugendliche unter 25",
                anonym: true
            },
            {
                name: "Youth-Life-Line",
                website: "https://www.youth-life-line.de",
                description: "Online-Beratung für Jugendliche",
                anonym: true
            },
            {
                name: "FIDEO - Stark gegen Depression",
                website: "https://www.fideo.de",
                description: "Online-Forum für Jugendliche mit Depression"
            }
        ]
    },

    // ============================================================
    // DOKUMENTATION
    // ============================================================

    generateDocumentation(assessment, safetyPlan) {
        const date = new Date().toLocaleDateString('de-DE');
        const time = new Date().toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });

        return {
            header: `SUIZIDALITÄTS-ASSESSMENT - ${date}, ${time}`,
            riskLevel: assessment.riskLevel,
            summary: this.getRiskSummary(assessment),
            ideation: this.formatIdeationResults(assessment),
            riskFactors: this.formatRiskFactors(assessment),
            protectiveFactors: this.formatProtectiveFactors(assessment),
            interventions: assessment.recommendations,
            safetyPlanCreated: safetyPlan !== null,
            nextSteps: this.getNextSteps(assessment),
            legalNote: "Dokumentation gemäß §630f BGB. Bei Kindeswohlgefährdung: §8a SGB VIII beachten."
        };
    },

    getRiskSummary(assessment) {
        const summaries = {
            "AKUT": "AKUTE SUIZIDALITÄT - Sofortige Intervention erforderlich. Patient*in darf nicht allein gelassen werden.",
            "HOCH": "HOHES SUIZIDRISIKO - Engmaschige Überwachung, Safety Plan, täglicher Kontakt erforderlich.",
            "MITTEL": "MODERATES SUIZIDRISIKO - Safety Plan erstellt, Kontaktvereinbarung getroffen.",
            "ERHÖHT": "LEICHT ERHÖHTES RISIKO - Regelmäßiges Monitoring vereinbart.",
            "NIEDRIG": "KEIN AKUT ERHÖHTES RISIKO - Risikofaktoren weiter beobachten."
        };
        return summaries[assessment.riskLevel] || "Risikostufe nicht eindeutig bestimmbar.";
    },

    formatIdeationResults(assessment) {
        // Would format the specific ideation responses
        return `Ideation-Score: ${assessment.ideationScore}/15`;
    },

    formatRiskFactors(assessment) {
        return `Risikofaktoren-Score: ${assessment.riskFactorScore}`;
    },

    formatProtectiveFactors(assessment) {
        return `Schutzfaktoren-Score: ${assessment.protectiveScore}`;
    },

    getNextSteps(assessment) {
        const steps = [];

        if (assessment.riskLevel === "AKUT") {
            steps.push("☐ Psychiatrische Notaufnahme kontaktiert");
            steps.push("☐ Sorgeberechtigte informiert");
            steps.push("☐ Übergabe dokumentiert");
        } else if (assessment.riskLevel === "HOCH") {
            steps.push("☐ Safety Plan ausgehändigt");
            steps.push("☐ Täglicher Telefonkontakt vereinbart");
            steps.push("☐ Nächster Termin: ___");
        } else {
            steps.push("☐ Suizidalität in nächster Sitzung erneut explorieren");
        }

        return steps;
    },

    // ============================================================
    // UI GENERATOR FUNCTIONS
    // ============================================================

    screeningResponses: {},
    currentAgeGroup: 'teen',

    generateScreeningUI: function() {
        const ideationHtml = this.screeningFragen.ideation.map((q, idx) => `
            <div class="screening-item ideation-item" data-severity="${q.schweregrad}">
                <div class="item-number">${idx + 1}</div>
                <div class="item-content">
                    <div class="item-question">
                        <span class="question-text">${q.altersanpassung[this.currentAgeGroup] || q.frage}</span>
                        ${q.kritisch ? '<span class="critical-badge">⚠️ Kritisch</span>' : ''}
                    </div>
                    <div class="item-response">
                        <label class="toggle-option">
                            <input type="radio" name="${q.id}" value="false"
                                   onchange="SafetyModule.handleScreeningResponse('${q.id}', false)">
                            <span class="toggle-label no">Nein</span>
                        </label>
                        <label class="toggle-option">
                            <input type="radio" name="${q.id}" value="true"
                                   onchange="SafetyModule.handleScreeningResponse('${q.id}', true)">
                            <span class="toggle-label yes">Ja</span>
                        </label>
                    </div>
                </div>
            </div>
        `).join('');

        const behaviorHtml = this.screeningFragen.behavior.map((q, idx) => `
            <div class="screening-item behavior-item critical">
                <div class="item-number">B${idx + 1}</div>
                <div class="item-content">
                    <div class="item-question">
                        <span class="question-text">${q.frage}</span>
                        <span class="critical-badge">⚠️ ${q.schweregrad}</span>
                    </div>
                    <div class="item-response">
                        <label class="toggle-option">
                            <input type="radio" name="${q.id}" value="false"
                                   onchange="SafetyModule.handleScreeningResponse('${q.id}', false)">
                            <span class="toggle-label no">Nein</span>
                        </label>
                        <label class="toggle-option">
                            <input type="radio" name="${q.id}" value="true"
                                   onchange="SafetyModule.handleScreeningResponse('${q.id}', true)">
                            <span class="toggle-label yes">Ja</span>
                        </label>
                    </div>
                </div>
            </div>
        `).join('');

        const riskFactorsHtml = this.screeningFragen.riskFactors.map(f => `
            <label class="factor-checkbox risk-factor">
                <input type="checkbox" name="${f.id}"
                       onchange="SafetyModule.handleFactorResponse('${f.id}', this.checked, 'risk')">
                <span class="factor-label">${f.label}</span>
                <span class="factor-weight">(Gewicht: ${f.weight})</span>
            </label>
        `).join('');

        const protectiveFactorsHtml = this.screeningFragen.protectiveFactors.map(f => `
            <label class="factor-checkbox protective-factor">
                <input type="checkbox" name="${f.id}"
                       onchange="SafetyModule.handleFactorResponse('${f.id}', this.checked, 'protective')">
                <span class="factor-label">${f.label}</span>
                <span class="factor-weight">(Gewicht: ${f.weight})</span>
            </label>
        `).join('');

        return `
            <div class="safety-screening-container">
                <div class="tool-info-box scientific-box">
                    <h4>📚 Wissenschaftlicher Hintergrund</h4>
                    <p><strong>Suizidalitäts-Assessment basierend auf C-SSRS</strong></p>
                    <p>Adaptiert nach der <strong>Columbia-Suicide Severity Rating Scale</strong> (Posner et al., 2011).</p>
                    <ul>
                        <li><strong>C-SSRS</strong>: FDA-empfohlenes Instrument zur Suizidalitätserfassung</li>
                        <li><strong>Safety Planning</strong>: Stanley & Brown (2012) - evidenzbasierte Krisenintervention</li>
                        <li><strong>S3-Leitlinie</strong>: DGKJP Leitlinie Suizidalität im Kindes- und Jugendalter</li>
                        <li><strong>AACAP</strong>: Practice Parameters for Suicidal Behavior</li>
                    </ul>
                    <p class="warning-note"><strong>⚠️ WICHTIG:</strong> Dieses Tool ersetzt KEINE klinische Einschätzung! Bei akuter Suizidalität: Sofortige fachärztliche Konsultation!</p>
                </div>

                <div class="screening-header">
                    <h3>Suizidalitäts-Screening</h3>
                    <div class="age-selector">
                        <label>Altersanpassung:</label>
                        <select onchange="SafetyModule.setAgeGroup(this.value)">
                            <option value="child">Kind (8-12 Jahre)</option>
                            <option value="teen" selected>Jugendliche/r (13+ Jahre)</option>
                        </select>
                    </div>
                </div>

                <div class="screening-section">
                    <h4>Stufe 1: Suizidgedanken (Ideation)</h4>
                    <p class="section-note">Fragen werden bei "Ja" sukzessive vertieft</p>
                    <div class="screening-items">
                        ${ideationHtml}
                    </div>
                </div>

                <div class="screening-section">
                    <h4>Stufe 2: Suizidales Verhalten</h4>
                    <p class="section-note critical">Bei jeder positiven Antwort: SOFORTIGE INTERVENTION</p>
                    <div class="screening-items">
                        ${behaviorHtml}
                    </div>
                </div>

                <div class="screening-section factors-section">
                    <div class="factors-column risk-column">
                        <h4>Risikofaktoren</h4>
                        <div class="factors-list">
                            ${riskFactorsHtml}
                        </div>
                    </div>
                    <div class="factors-column protective-column">
                        <h4>Schutzfaktoren</h4>
                        <div class="factors-list">
                            ${protectiveFactorsHtml}
                        </div>
                    </div>
                </div>

                <div class="screening-actions">
                    <button class="btn btn-primary btn-large" onclick="SafetyModule.calculateAndShowRiskAssessment()">
                        <i class="fas fa-shield-alt"></i> Risiko-Einschätzung berechnen
                    </button>
                </div>

                <div id="risk-assessment-results" class="risk-results" style="display:none;"></div>
            </div>
        `;
    },

    generateSafetyPlanUI: function() {
        const template = this.safetyPlanTemplate;

        const sectionsHtml = template.sections.map(section => {
            let contentHtml = '';

            if (section.prompts) {
                contentHtml += `
                    <div class="prompts-list">
                        <p><strong>Leitfragen:</strong></p>
                        <ul>${section.prompts.map(p => `<li>${p}</li>`).join('')}</ul>
                    </div>
                `;
            }

            if (section.examples) {
                contentHtml += `
                    <div class="examples-list">
                        <p><strong>Beispiele:</strong></p>
                        <ul>${section.examples.map(e => `<li class="example">${e}</li>`).join('')}</ul>
                    </div>
                `;
            }

            if (section.fields) {
                contentHtml += `
                    <div class="input-fields">
                        ${section.fields.map(field => `
                            <div class="field-row">
                                <label>${field.label}:</label>
                                ${field.nameField ? `<input type="text" placeholder="Name" class="field-name" data-section="${section.id}">` : ''}
                                ${field.phoneField ? `<input type="tel" placeholder="Telefon" class="field-phone" data-section="${section.id}">` : ''}
                                ${field.relationship ? `<input type="text" placeholder="Beziehung" class="field-relationship" data-section="${section.id}">` : ''}
                            </div>
                        `).join('')}
                    </div>
                `;
            }

            if (section.prefilled) {
                contentHtml += `
                    <div class="prefilled-resources">
                        ${section.prefilled.map(item => `
                            <div class="resource-item">
                                <span class="resource-label">${item.label}:</span>
                                ${item.phone ? `<span class="resource-phone">${item.phone}</span>` : ''}
                                ${item.note ? `<span class="resource-note">(${item.note})</span>` : ''}
                                ${item.nameField ? `<input type="text" placeholder="Name eintragen">` : ''}
                                ${item.phoneField ? `<input type="tel" placeholder="Nummer eintragen">` : ''}
                            </div>
                        `).join('')}
                    </div>
                `;
            }

            if (section.checkItems) {
                contentHtml += `
                    <div class="check-items">
                        ${section.checkItems.map(item => `
                            <label class="check-item">
                                <input type="checkbox">
                                <span>${item}</span>
                            </label>
                        `).join('')}
                    </div>
                `;
            }

            // Add text areas for free input
            contentHtml += `
                <div class="free-input">
                    <textarea placeholder="Eigene Einträge hier..." rows="3" data-section="${section.id}"></textarea>
                </div>
            `;

            return `
                <div class="safety-plan-section" data-section="${section.id}">
                    <h4>${section.title}</h4>
                    <p class="section-subtitle">${section.subtitle}</p>
                    ${contentHtml}
                </div>
            `;
        }).join('');

        return `
            <div class="safety-plan-container">
                <div class="tool-info-box scientific-box">
                    <h4>📚 Wissenschaftlicher Hintergrund</h4>
                    <p><strong>Safety Planning Intervention nach Stanley & Brown (2012)</strong></p>
                    <ul>
                        <li>Evidenzbasierte Kurz-Intervention zur Suizidprävention</li>
                        <li>Reduziert Suizidversuche um <strong>45%</strong> (Stanley et al., 2018, JAMA Psychiatry)</li>
                        <li>7 strukturierte Schritte zur Krisenbewältigung</li>
                        <li>Empfohlen von <strong>AACAP, VA/DoD, Zero Suicide Initiative</strong></li>
                    </ul>
                    <p class="reference">Stanley, B., & Brown, G.K. (2012). Safety Planning Intervention: A Brief Intervention to Mitigate Suicide Risk. Cognitive and Behavioral Practice, 19(2), 256-264.</p>
                </div>

                <div class="safety-plan-header">
                    <h3>Sicherheitsplan</h3>
                    <div class="header-fields">
                        <div class="field-group">
                            <label>Name:</label>
                            <input type="text" id="sp-patient-name" placeholder="Name des Patienten">
                        </div>
                        <div class="field-group">
                            <label>Datum:</label>
                            <input type="date" id="sp-date" value="${new Date().toISOString().split('T')[0]}">
                        </div>
                        <div class="field-group">
                            <label>Überprüfung am:</label>
                            <input type="date" id="sp-review-date">
                        </div>
                    </div>
                </div>

                <div class="safety-plan-sections">
                    ${sectionsHtml}
                </div>

                <div class="safety-plan-actions">
                    <button class="btn btn-primary" onclick="SafetyModule.saveSafetyPlan()">
                        <i class="fas fa-save"></i> Speichern
                    </button>
                    <button class="btn btn-secondary" onclick="SafetyModule.printSafetyPlan()">
                        <i class="fas fa-print"></i> Drucken
                    </button>
                    <button class="btn btn-outline" onclick="SafetyModule.exportSafetyPlanPDF()">
                        <i class="fas fa-file-pdf"></i> Als PDF exportieren
                    </button>
                </div>
            </div>
        `;
    },

    generateCrisisResourcesUI: function() {
        const resourcesHtml = Object.entries(this.krisenRessourcen).map(([region, resources]) => {
            const regionNames = {
                deutschland: '🇩🇪 Deutschland',
                oesterreich: '🇦🇹 Österreich',
                schweiz: '🇨🇭 Schweiz',
                online: '💻 Online-Angebote'
            };

            return `
                <div class="resource-region">
                    <h4>${regionNames[region] || region}</h4>
                    <div class="resources-list">
                        ${resources.map(r => `
                            <div class="resource-card ${r.regional ? 'regional' : ''}">
                                <div class="resource-name">${r.name}</div>
                                ${r.phone ? `
                                    <div class="resource-phone">
                                        <i class="fas fa-phone"></i>
                                        <a href="tel:${r.phone.replace(/\s/g, '')}">${r.phone}</a>
                                        ${r.kostenfrei ? '<span class="free-badge">kostenlos</span>' : ''}
                                    </div>
                                ` : ''}
                                ${r.hours ? `<div class="resource-hours"><i class="fas fa-clock"></i> ${r.hours}</div>` : ''}
                                ${r.website ? `<div class="resource-website"><i class="fas fa-globe"></i> <a href="${r.website}" target="_blank">${r.website}</a></div>` : ''}
                                ${r.description ? `<div class="resource-description">${r.description}</div>` : ''}
                                ${r.anonym ? '<span class="anonym-badge">anonym</span>' : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }).join('');

        return `
            <div class="crisis-resources-container">
                <div class="tool-info-box scientific-box">
                    <h4>📚 Krisenressourcen</h4>
                    <p>Professionelle Hilfsangebote für Kinder, Jugendliche und Familien in Krisensituationen.</p>
                    <p><strong>Bei akuter Suizidalität:</strong> Notruf 112 oder nächste psychiatrische Notaufnahme!</p>
                </div>

                <div class="crisis-header">
                    <h3>Krisentelefone & Hilfsangebote</h3>
                    <p>Diese Ressourcen können dem Patienten/der Familie ausgehändigt werden.</p>
                </div>

                <div class="resources-sections">
                    ${resourcesHtml}
                </div>

                <div class="emergency-box">
                    <h4>🚨 Im Notfall</h4>
                    <div class="emergency-numbers">
                        <div class="emergency-item">
                            <span class="number">112</span>
                            <span class="label">Notruf (EU-weit)</span>
                        </div>
                        <div class="emergency-item">
                            <span class="number">110</span>
                            <span class="label">Polizei</span>
                        </div>
                    </div>
                    <p>Bei unmittelbarer Gefahr für Leib und Leben sofort Notruf wählen!</p>
                </div>

                <div class="resources-actions">
                    <button class="btn btn-primary" onclick="SafetyModule.printCrisisCard()">
                        <i class="fas fa-print"></i> Krisenkarte drucken
                    </button>
                    <button class="btn btn-secondary" onclick="SafetyModule.sendResourcesEmail()">
                        <i class="fas fa-envelope"></i> Per E-Mail senden
                    </button>
                </div>
            </div>
        `;
    },

    // Helper functions for UI
    setAgeGroup: function(group) {
        this.currentAgeGroup = group;
        // Refresh the UI with age-appropriate questions
        const container = document.querySelector('.safety-screening-container');
        if (container) {
            container.outerHTML = this.generateScreeningUI();
        }
    },

    handleScreeningResponse: function(questionId, value) {
        this.screeningResponses[questionId] = value;

        // Visual feedback for critical items
        if (value === true) {
            const item = document.querySelector(`[name="${questionId}"]`).closest('.screening-item');
            if (item && item.classList.contains('critical')) {
                this.showImmediateActionWarning();
            }
        }
    },

    handleFactorResponse: function(factorId, checked, type) {
        this.screeningResponses[factorId] = checked;
    },

    showImmediateActionWarning: function() {
        const existing = document.querySelector('.immediate-action-warning');
        if (existing) return;

        const warningHtml = `
            <div class="immediate-action-warning">
                <div class="warning-content">
                    <h3>⚠️ KRITISCHE ANTWORT</h3>
                    <p>Suizidales Verhalten wurde berichtet.</p>
                    <p><strong>Sofortige Maßnahmen:</strong></p>
                    <ul>
                        <li>Patient*in NICHT allein lassen</li>
                        <li>Sorgeberechtigte informieren</li>
                        <li>Psychiatrische Notaufnahme kontaktieren</li>
                        <li>Mittelrestriktion einleiten</li>
                    </ul>
                    <button class="btn btn-primary" onclick="this.parentElement.parentElement.remove()">Verstanden</button>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', warningHtml);
    },

    calculateAndShowRiskAssessment: function() {
        const assessment = this.assessRisk(this.screeningResponses);

        const riskColors = {
            'AKUT': '#dc2626',
            'HOCH': '#ea580c',
            'MITTEL': '#f59e0b',
            'ERHÖHT': '#eab308',
            'NIEDRIG': '#22c55e'
        };

        const resultsHtml = `
            <div class="risk-assessment-card" style="border-color: ${riskColors[assessment.riskLevel]}">
                <div class="risk-level-display" style="background: ${riskColors[assessment.riskLevel]}">
                    <span class="risk-label">Risikostufe:</span>
                    <span class="risk-value">${assessment.riskLevel}</span>
                </div>

                <div class="risk-scores">
                    <div class="score-item">
                        <span class="score-label">Ideation-Score:</span>
                        <span class="score-value">${assessment.ideationScore}/15</span>
                    </div>
                    <div class="score-item">
                        <span class="score-label">Risikofaktoren:</span>
                        <span class="score-value">${assessment.riskFactorScore}</span>
                    </div>
                    <div class="score-item">
                        <span class="score-label">Schutzfaktoren:</span>
                        <span class="score-value">${assessment.protectiveScore}</span>
                    </div>
                </div>

                ${assessment.warnings.length > 0 ? `
                    <div class="warnings-section">
                        <h5>⚠️ Warnungen</h5>
                        <ul>
                            ${assessment.warnings.map(w => `<li>${w}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}

                <div class="recommendations-section">
                    <h5>Empfohlene Maßnahmen</h5>
                    ${assessment.recommendations.map(rec => `
                        <div class="recommendation-item priority-${rec.priority}">
                            <span class="priority-badge">P${rec.priority}</span>
                            <span class="action">${rec.action}</span>
                            <span class="timeframe">${rec.timeframe}</span>
                        </div>
                    `).join('')}
                </div>

                ${assessment.safetyPlanNeeded ? `
                    <div class="safety-plan-prompt">
                        <p><strong>Safety Plan erforderlich</strong></p>
                        <button class="btn btn-primary" onclick="loadClinicalTool('safety', 'safetyplan')">
                            <i class="fas fa-clipboard-list"></i> Safety Plan erstellen
                        </button>
                    </div>
                ` : ''}

                <div class="documentation-note">
                    <p><small>Dokumentation gemäß §630f BGB. Bei Kindeswohlgefährdung: §8a SGB VIII beachten.</small></p>
                </div>
            </div>
        `;

        document.getElementById('risk-assessment-results').innerHTML = resultsHtml;
        document.getElementById('risk-assessment-results').style.display = 'block';
    },

    saveSafetyPlan: function() {
        const planData = this.collectSafetyPlanData();
        localStorage.setItem('currentSafetyPlan', JSON.stringify(planData));
        alert('Safety Plan wurde gespeichert.');
    },

    collectSafetyPlanData: function() {
        // Collect all input data from the form
        return {
            patientName: document.getElementById('sp-patient-name')?.value || '',
            date: document.getElementById('sp-date')?.value || '',
            reviewDate: document.getElementById('sp-review-date')?.value || '',
            sections: {} // Would collect all section data
        };
    },

    printSafetyPlan: function() {
        window.print();
    },

    exportSafetyPlanPDF: function() {
        alert('PDF-Export wird vorbereitet... (In Entwicklung)');
    },

    printCrisisCard: function() {
        const printContent = `
            <html>
            <head><title>Krisenkarte</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                h2 { color: #dc2626; }
                .number { font-size: 24px; font-weight: bold; color: #dc2626; }
            </style>
            </head>
            <body>
                <h2>Krisentelefone</h2>
                <p><strong>Telefonseelsorge:</strong> <span class="number">0800 111 0 111</span> (24h, kostenlos)</p>
                <p><strong>Nummer gegen Kummer:</strong> <span class="number">116 111</span> (Mo-Sa 14-20 Uhr)</p>
                <p><strong>Notruf:</strong> <span class="number">112</span></p>
            </body>
            </html>
        `;
        const printWindow = window.open('', '_blank');
        printWindow.document.write(printContent);
        printWindow.document.close();
        printWindow.print();
    },

    sendResourcesEmail: function() {
        const subject = encodeURIComponent('Krisenressourcen');
        const body = encodeURIComponent(`
Krisentelefone:

Telefonseelsorge: 0800 111 0 111 (24h, kostenlos)
Telefonseelsorge: 0800 111 0 222 (24h, kostenlos)
Nummer gegen Kummer: 116 111 (Mo-Sa 14-20 Uhr)

Online:
https://online.telefonseelsorge.de
https://www.u25-deutschland.de

Notruf: 112
        `);
        window.location.href = `mailto:?subject=${subject}&body=${body}`;
    }
};

// Export
if (typeof window !== 'undefined') {
    window.SafetyModule = SafetyModule;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SafetyModule;
}
