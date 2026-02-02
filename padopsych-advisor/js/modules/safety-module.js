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
    }
};

// Export
if (typeof window !== 'undefined') {
    window.SafetyModule = SafetyModule;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SafetyModule;
}
