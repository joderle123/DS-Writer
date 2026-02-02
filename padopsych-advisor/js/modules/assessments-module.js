/**
 * ============================================================================
 * ASSESSMENTS MODULE - Standardisierte Screening-Instrumente
 * ============================================================================
 *
 * ENTHALTENE INSTRUMENTE:
 *
 * 1. SDQ (Strengths and Difficulties Questionnaire)
 *    - Goodman, R. (1997). Journal of Child Psychology and Psychiatry
 *    - Kostenlos verfügbar, >40 Sprachen
 *    - Validiert für 4-17 Jahre
 *    - Eltern-, Lehrer- und Selbstbericht (11+)
 *
 * 2. SCARED (Screen for Child Anxiety Related Disorders)
 *    - Birmaher et al. (1997). Journal of the American Academy of Child
 *      & Adolescent Psychiatry
 *    - Kostenlos für klinische/Forschungszwecke
 *    - 41 Items, 8-18 Jahre
 *
 * 3. PHQ-A (Patient Health Questionnaire - Adolescent)
 *    - Adaptiert aus PHQ-9 für Jugendliche
 *    - Kostenlos verfügbar
 *
 * WICHTIG: Diese Screenings ersetzen keine klinische Diagnostik!
 */

const AssessmentsModule = {

    // ============================================================
    // SDQ - STRENGTHS AND DIFFICULTIES QUESTIONNAIRE
    // ============================================================

    SDQ: {
        info: {
            name: "Strengths and Difficulties Questionnaire (SDQ)",
            author: "Robert Goodman",
            year: 1997,
            ageRange: "4-17 Jahre",
            versions: ["Eltern (4-17)", "Lehrer (4-17)", "Selbst (11-17)"],
            duration: "5-10 Minuten",
            license: "Kostenlos für nicht-kommerzielle Nutzung",
            website: "https://www.sdqinfo.org"
        },

        // Deutsche Version - Elternfragebogen
        items: [
            // Emotionale Probleme (E)
            { id: "sdq_01", text: "Klagt häufig über Kopfschmerzen, Bauchschmerzen oder Übelkeit", scale: "E", reversed: false },
            { id: "sdq_02", text: "Hat viele Sorgen, erscheint häufig bedrückt", scale: "E", reversed: false },
            { id: "sdq_03", text: "Oft unglücklich oder niedergeschlagen; weint häufig", scale: "E", reversed: false },
            { id: "sdq_04", text: "Nervös oder anklammernd in neuen Situationen; verliert leicht das Selbstvertrauen", scale: "E", reversed: false },
            { id: "sdq_05", text: "Hat viele Ängste; fürchtet sich leicht", scale: "E", reversed: false },

            // Verhaltensprobleme (V)
            { id: "sdq_06", text: "Hat oft Wutanfälle; ist aufbrausend", scale: "V", reversed: false },
            { id: "sdq_07", text: "Im Allgemeinen folgsam; macht meist, was Erwachsene verlangen", scale: "V", reversed: true },
            { id: "sdq_08", text: "Streitet sich oft mit anderen Kindern oder schikaniert sie", scale: "V", reversed: false },
            { id: "sdq_09", text: "Lügt oder mogelt häufig", scale: "V", reversed: false },
            { id: "sdq_10", text: "Stiehlt zu Hause, in der Schule oder anderswo", scale: "V", reversed: false },

            // Hyperaktivität (H)
            { id: "sdq_11", text: "Unruhig, überaktiv, kann nicht lange stillsitzen", scale: "H", reversed: false },
            { id: "sdq_12", text: "Ständig zappelig", scale: "H", reversed: false },
            { id: "sdq_13", text: "Leicht ablenkbar, unkonzentriert", scale: "H", reversed: false },
            { id: "sdq_14", text: "Denkt nach, bevor er/sie handelt", scale: "H", reversed: true },
            { id: "sdq_15", text: "Führt Aufgaben zu Ende; gute Konzentrationsspanne", scale: "H", reversed: true },

            // Probleme mit Gleichaltrigen (P)
            { id: "sdq_16", text: "Einzelgänger; spielt meist allein", scale: "P", reversed: false },
            { id: "sdq_17", text: "Hat wenigstens einen guten Freund oder eine gute Freundin", scale: "P", reversed: true },
            { id: "sdq_18", text: "Im Allgemeinen bei anderen Kindern beliebt", scale: "P", reversed: true },
            { id: "sdq_19", text: "Wird von anderen gehänselt oder schikaniert", scale: "P", reversed: false },
            { id: "sdq_20", text: "Kommt besser mit Erwachsenen aus als mit anderen Kindern", scale: "P", reversed: false },

            // Prosoziales Verhalten (Pro) - Stärken
            { id: "sdq_21", text: "Rücksichtsvoll", scale: "Pro", reversed: false },
            { id: "sdq_22", text: "Teilt gern mit anderen (Süßigkeiten, Spielzeug, Buntstifte usw.)", scale: "Pro", reversed: false },
            { id: "sdq_23", text: "Hilfsbereit, wenn andere verletzt, krank oder betrübt sind", scale: "Pro", reversed: false },
            { id: "sdq_24", text: "Lieb zu jüngeren Kindern", scale: "Pro", reversed: false },
            { id: "sdq_25", text: "Hilft anderen oft freiwillig (Eltern, Lehrern oder anderen Kindern)", scale: "Pro", reversed: false }
        ],

        // Impact-Supplement
        impactItems: [
            { id: "sdq_impact_1", text: "Insgesamt: Denken Sie, dass Ihr Kind Schwierigkeiten hat in einem oder mehreren der folgenden Bereiche: Gefühle, Konzentration, Verhalten oder damit, mit anderen Menschen auszukommen?",
              options: ["Nein", "Ja, geringe", "Ja, deutliche", "Ja, massive"] },
            { id: "sdq_impact_2", text: "Wie lange bestehen diese Schwierigkeiten?",
              options: ["Weniger als 1 Monat", "1-5 Monate", "6-12 Monate", "Über ein Jahr"] },
            { id: "sdq_impact_3", text: "Machen die Schwierigkeiten Ihr Kind unglücklich oder bedrückt?",
              options: ["Gar nicht", "Kaum", "Deutlich", "Massiv"] },
            { id: "sdq_impact_4a", text: "Beeinträchtigung zu Hause?", options: ["Gar nicht", "Kaum", "Deutlich", "Massiv"] },
            { id: "sdq_impact_4b", text: "Beeinträchtigung mit Freunden?", options: ["Gar nicht", "Kaum", "Deutlich", "Massiv"] },
            { id: "sdq_impact_4c", text: "Beeinträchtigung beim Lernen?", options: ["Gar nicht", "Kaum", "Deutlich", "Massiv"] },
            { id: "sdq_impact_4d", text: "Beeinträchtigung bei Freizeitaktivitäten?", options: ["Gar nicht", "Kaum", "Deutlich", "Massiv"] },
            { id: "sdq_impact_5", text: "Stellen die Schwierigkeiten eine Belastung für Sie oder die Familie als Ganzes dar?",
              options: ["Gar nicht", "Kaum", "Deutlich", "Massiv"] }
        ],

        responseOptions: [
            { value: 0, label: "Nicht zutreffend" },
            { value: 1, label: "Teilweise zutreffend" },
            { value: 2, label: "Eindeutig zutreffend" }
        ],

        // Normen für Deutschland (Elternurteil 4-17 Jahre, Woerner et al. 2004)
        norms: {
            parent: {
                emotional: { normal: [0, 3], borderline: [4, 4], abnormal: [5, 10] },
                conduct: { normal: [0, 2], borderline: [3, 3], abnormal: [4, 10] },
                hyperactivity: { normal: [0, 5], borderline: [6, 6], abnormal: [7, 10] },
                peer: { normal: [0, 2], borderline: [3, 3], abnormal: [4, 10] },
                prosocial: { normal: [6, 10], borderline: [5, 5], abnormal: [0, 4] },
                total: { normal: [0, 13], borderline: [14, 16], abnormal: [17, 40] }
            },
            self: {
                emotional: { normal: [0, 5], borderline: [6, 6], abnormal: [7, 10] },
                conduct: { normal: [0, 3], borderline: [4, 4], abnormal: [5, 10] },
                hyperactivity: { normal: [0, 5], borderline: [6, 6], abnormal: [7, 10] },
                peer: { normal: [0, 3], borderline: [4, 5], abnormal: [6, 10] },
                prosocial: { normal: [6, 10], borderline: [5, 5], abnormal: [0, 4] },
                total: { normal: [0, 15], borderline: [16, 19], abnormal: [20, 40] }
            }
        },

        calculateScores(responses, version = 'parent') {
            const scales = {
                emotional: ['sdq_01', 'sdq_02', 'sdq_03', 'sdq_04', 'sdq_05'],
                conduct: ['sdq_06', 'sdq_07', 'sdq_08', 'sdq_09', 'sdq_10'],
                hyperactivity: ['sdq_11', 'sdq_12', 'sdq_13', 'sdq_14', 'sdq_15'],
                peer: ['sdq_16', 'sdq_17', 'sdq_18', 'sdq_19', 'sdq_20'],
                prosocial: ['sdq_21', 'sdq_22', 'sdq_23', 'sdq_24', 'sdq_25']
            };

            const reversedItems = ['sdq_07', 'sdq_14', 'sdq_15', 'sdq_17', 'sdq_18'];
            const results = {};

            for (const [scaleName, items] of Object.entries(scales)) {
                let score = 0;
                items.forEach(itemId => {
                    let value = responses[itemId] ?? 0;
                    if (reversedItems.includes(itemId)) {
                        value = 2 - value; // Reverse scoring
                    }
                    score += value;
                });
                results[scaleName] = {
                    score,
                    max: 10,
                    category: this.categorizeScore(scaleName, score, version)
                };
            }

            // Gesamtproblemwert (ohne Prosozial)
            const totalDifficulties = results.emotional.score + results.conduct.score +
                                     results.hyperactivity.score + results.peer.score;

            results.total = {
                score: totalDifficulties,
                max: 40,
                category: this.categorizeScore('total', totalDifficulties, version)
            };

            // Externalizing & Internalizing (zusätzliche Zusammenfassungen)
            results.externalizing = {
                score: results.conduct.score + results.hyperactivity.score,
                max: 20,
                label: "Externalisierende Probleme"
            };

            results.internalizing = {
                score: results.emotional.score + results.peer.score,
                max: 20,
                label: "Internalisierende Probleme"
            };

            return results;
        },

        categorizeScore(scale, score, version) {
            const norms = this.norms[version] || this.norms.parent;
            const scaleNorms = norms[scale];

            if (!scaleNorms) return 'unknown';

            if (score >= scaleNorms.normal[0] && score <= scaleNorms.normal[1]) {
                return 'normal';
            } else if (score >= scaleNorms.borderline[0] && score <= scaleNorms.borderline[1]) {
                return 'borderline';
            } else {
                return 'abnormal';
            }
        },

        generateReport(results, patientInfo) {
            const categoryLabels = {
                normal: { text: "Unauffällig", color: "#10b981" },
                borderline: { text: "Grenzwertig", color: "#f59e0b" },
                abnormal: { text: "Auffällig", color: "#ef4444" }
            };

            const scaleLabels = {
                emotional: "Emotionale Probleme",
                conduct: "Verhaltensprobleme",
                hyperactivity: "Hyperaktivität/Aufmerksamkeit",
                peer: "Probleme mit Gleichaltrigen",
                prosocial: "Prosoziales Verhalten",
                total: "Gesamtproblemwert"
            };

            return {
                instrument: "SDQ (Strengths and Difficulties Questionnaire)",
                date: new Date().toLocaleDateString('de-DE'),
                patient: patientInfo,
                results: Object.entries(results).map(([scale, data]) => ({
                    scale: scaleLabels[scale] || scale,
                    score: data.score,
                    max: data.max,
                    category: categoryLabels[data.category] || data.category,
                    percentile: this.getPercentile(scale, data.score)
                })),
                interpretation: this.generateInterpretation(results),
                recommendations: this.generateRecommendations(results)
            };
        },

        getPercentile(scale, score) {
            // Vereinfachte Perzentil-Schätzung
            // In Produktionsversion: echte Normdaten verwenden
            return null;
        },

        generateInterpretation(results) {
            const interpretations = [];

            if (results.total.category === 'abnormal') {
                interpretations.push("Der Gesamtproblemwert liegt im auffälligen Bereich. Eine vertiefte Diagnostik wird empfohlen.");
            } else if (results.total.category === 'borderline') {
                interpretations.push("Der Gesamtproblemwert liegt im Grenzbereich. Monitoring und ggf. weitere Abklärung empfohlen.");
            }

            // Spezifische Skalen
            if (results.emotional.category === 'abnormal') {
                interpretations.push("Auffällige emotionale Symptome: Hinweise auf mögliche Angst oder depressive Symptomatik.");
            }
            if (results.conduct.category === 'abnormal') {
                interpretations.push("Auffällige Verhaltensprobleme: Exploration von oppositionellem Verhalten empfohlen.");
            }
            if (results.hyperactivity.category === 'abnormal') {
                interpretations.push("Auffällige Hyperaktivität/Unaufmerksamkeit: ADHS-Diagnostik erwägen.");
            }
            if (results.peer.category === 'abnormal') {
                interpretations.push("Auffällige Peer-Probleme: Soziale Kompetenzen und mögliche Mobbing-Erfahrungen explorieren.");
            }
            if (results.prosocial.category === 'abnormal') {
                interpretations.push("Niedrige prosoziale Werte: Empathie-Entwicklung und Sozialverhalten beobachten.");
            }

            // Stärken
            if (results.prosocial.category === 'normal' && results.prosocial.score >= 8) {
                interpretations.push("Stärke: Gut entwickeltes prosoziales Verhalten - wichtiger Schutzfaktor.");
            }

            return interpretations;
        },

        generateRecommendations(results) {
            const recs = [];

            if (results.total.category === 'abnormal') {
                recs.push({
                    priority: 1,
                    action: "Umfassende klinische Diagnostik",
                    instruments: ["Strukturiertes Interview", "Kognitive Diagnostik", "Störungsspezifische Fragebögen"]
                });
            }

            if (results.emotional.category !== 'normal') {
                recs.push({
                    priority: 2,
                    action: "Angst/Depression weiter abklären",
                    instruments: ["SCARED", "CDI-2", "DIKJ"]
                });
            }

            if (results.hyperactivity.category !== 'normal') {
                recs.push({
                    priority: 2,
                    action: "ADHS-Diagnostik",
                    instruments: ["Conners-3", "FBB-ADHS", "Testdiagnostik"]
                });
            }

            if (results.conduct.category !== 'normal') {
                recs.push({
                    priority: 2,
                    action: "Störung des Sozialverhaltens abklären",
                    instruments: ["FBB-SSV", "Strukturiertes Interview"]
                });
            }

            return recs;
        }
    },

    // ============================================================
    // SCARED - SCREEN FOR CHILD ANXIETY RELATED DISORDERS
    // ============================================================

    SCARED: {
        info: {
            name: "Screen for Child Anxiety Related Disorders (SCARED)",
            author: "Birmaher et al.",
            year: 1997,
            ageRange: "8-18 Jahre",
            versions: ["Kind", "Eltern"],
            duration: "10-15 Minuten",
            license: "Kostenlos für klinische Nutzung",
            cutoff: 25
        },

        // Kurzversion mit 41 Items (komplett wäre zu lang für diesen Kontext)
        // Hier nur die Subskalen-Struktur
        subscales: {
            panic: {
                name: "Panikstörung/Somatisch",
                items: 13,
                cutoff: 7,
                description: "Körperliche Symptome bei Angst, Panikattacken"
            },
            generalized: {
                name: "Generalisierte Angst",
                items: 9,
                cutoff: 9,
                description: "Übermäßige Sorgen, Grübeln"
            },
            separation: {
                name: "Trennungsangst",
                items: 8,
                cutoff: 5,
                description: "Angst vor Trennung von Bezugspersonen"
            },
            social: {
                name: "Soziale Angst",
                items: 7,
                cutoff: 8,
                description: "Angst vor sozialen Situationen"
            },
            school: {
                name: "Schulangst",
                items: 4,
                cutoff: 3,
                description: "Schulbezogene Ängste"
            }
        },

        responseOptions: [
            { value: 0, label: "Stimmt nicht oder fast nie" },
            { value: 1, label: "Stimmt manchmal" },
            { value: 2, label: "Stimmt oft oder immer" }
        ],

        // Beispiel-Items (komplette Liste wäre urheberrechtlich geschützt)
        sampleItems: [
            { id: "scared_01", text: "Wenn ich Angst habe, fällt mir das Atmen schwer", subscale: "panic" },
            { id: "scared_02", text: "Ich habe Kopfschmerzen, wenn ich in der Schule bin", subscale: "school" },
            { id: "scared_03", text: "Ich mag nicht mit Leuten zusammen sein, die ich nicht gut kenne", subscale: "social" },
            { id: "scared_04", text: "Ich bekomme Angst, wenn ich woanders als zu Hause schlafe", subscale: "separation" },
            { id: "scared_05", text: "Ich mache mir Sorgen, dass anderen etwas Schlimmes passiert", subscale: "generalized" }
        ],

        interpret(totalScore, subscaleScores) {
            const results = {
                totalScore,
                totalCutoff: 25,
                isAboveCutoff: totalScore >= 25,
                severity: totalScore >= 30 ? "schwer" : totalScore >= 25 ? "moderat" : "gering",
                subscaleResults: {},
                likelyDisorders: []
            };

            for (const [key, scale] of Object.entries(this.subscales)) {
                const score = subscaleScores[key] || 0;
                results.subscaleResults[key] = {
                    name: scale.name,
                    score,
                    cutoff: scale.cutoff,
                    elevated: score >= scale.cutoff
                };

                if (score >= scale.cutoff) {
                    results.likelyDisorders.push(scale.name);
                }
            }

            return results;
        }
    },

    // ============================================================
    // PHQ-A - DEPRESSION SCREENING FÜR JUGENDLICHE
    // ============================================================

    PHQ_A: {
        info: {
            name: "Patient Health Questionnaire - Adolescent (PHQ-A)",
            basedOn: "PHQ-9 (Kroenke et al., 2001)",
            ageRange: "11-17 Jahre",
            duration: "3-5 Minuten",
            license: "Kostenlos (Public Domain)"
        },

        items: [
            { id: "phq_01", text: "Wenig Interesse oder Freude an Tätigkeiten" },
            { id: "phq_02", text: "Niedergeschlagenheit, Schwermut oder Hoffnungslosigkeit" },
            { id: "phq_03", text: "Schwierigkeiten ein- oder durchzuschlafen, oder zu viel zu schlafen" },
            { id: "phq_04", text: "Müdigkeit oder das Gefühl, keine Energie zu haben" },
            { id: "phq_05", text: "Verminderter Appetit oder übermäßiges Essen" },
            { id: "phq_06", text: "Schlechte Meinung von dir selbst - oder das Gefühl, ein Versager zu sein oder die Familie enttäuscht zu haben" },
            { id: "phq_07", text: "Schwierigkeiten, dich zu konzentrieren, z.B. beim Lesen oder Fernsehen" },
            { id: "phq_08", text: "Dich so langsam bewegen oder sprechen, dass andere es merken könnten? Oder das Gegenteil: so unruhig sein, dass du mehr herumläufst als sonst" },
            { id: "phq_09", text: "Gedanken, dass du lieber tot wärst oder dir Leid zufügen möchtest", critical: true }
        ],

        responseOptions: [
            { value: 0, label: "Überhaupt nicht" },
            { value: 1, label: "An einzelnen Tagen" },
            { value: 2, label: "An mehr als der Hälfte der Tage" },
            { value: 3, label: "Beinahe jeden Tag" }
        ],

        impactQuestion: {
            text: "Falls eines dieser Probleme bei dir auftrat: Wie schwierig machten es dir diese Probleme, deine Arbeit zu erledigen, Dinge zu Hause zu schaffen oder mit anderen Menschen klarzukommen?",
            options: ["Überhaupt nicht schwierig", "Etwas schwierig", "Ziemlich schwierig", "Sehr schwierig"]
        },

        cutoffs: {
            minimal: { min: 0, max: 4, label: "Minimal", color: "#10b981" },
            mild: { min: 5, max: 9, label: "Leicht", color: "#84cc16" },
            moderate: { min: 10, max: 14, label: "Mittelgradig", color: "#f59e0b" },
            moderatelySevere: { min: 15, max: 19, label: "Mittel-Schwer", color: "#f97316" },
            severe: { min: 20, max: 27, label: "Schwer", color: "#ef4444" }
        },

        calculateScore(responses) {
            let total = 0;
            let item9Score = 0;

            this.items.forEach(item => {
                const value = responses[item.id] ?? 0;
                total += value;
                if (item.id === 'phq_09') {
                    item9Score = value;
                }
            });

            return {
                totalScore: total,
                item9Score,
                suicidalIdeation: item9Score > 0,
                severity: this.getSeverity(total),
                requiresSafetyAssessment: item9Score >= 1
            };
        },

        getSeverity(score) {
            for (const [key, range] of Object.entries(this.cutoffs)) {
                if (score >= range.min && score <= range.max) {
                    return { level: key, ...range };
                }
            }
            return { level: 'unknown', label: 'Unbekannt' };
        },

        generateReport(results, patientInfo) {
            const recommendations = [];

            if (results.severity.level === 'severe' || results.severity.level === 'moderatelySevere') {
                recommendations.push("Umgehende psychiatrische Abklärung empfohlen");
                recommendations.push("Suizidalitäts-Assessment durchführen");
            } else if (results.severity.level === 'moderate') {
                recommendations.push("Psychotherapeutische Intervention erwägen");
                recommendations.push("Verlaufskontrolle in 2 Wochen");
            } else if (results.severity.level === 'mild') {
                recommendations.push("Watchful Waiting oder supportive Begleitung");
                recommendations.push("Psychoedukation zu Depression");
            }

            if (results.suicidalIdeation) {
                recommendations.unshift("⚠️ SUIZIDALITÄTS-SCREENING POSITIV - Safety Assessment erforderlich!");
            }

            return {
                instrument: "PHQ-A (Patient Health Questionnaire - Adolescent)",
                date: new Date().toLocaleDateString('de-DE'),
                patient: patientInfo,
                score: results.totalScore,
                maxScore: 27,
                severity: results.severity,
                suicidalIdeation: results.suicidalIdeation,
                item9Score: results.item9Score,
                interpretation: this.getInterpretation(results),
                recommendations
            };
        },

        getInterpretation(results) {
            const interpretations = {
                minimal: "Die depressive Symptomatik ist minimal. Keine spezifische Intervention erforderlich, aber auf Veränderungen achten.",
                mild: "Leichte depressive Symptome vorhanden. Supportive Gespräche, Psychoedukation und Verlaufskontrolle empfohlen.",
                moderate: "Mittelgradige depressive Symptomatik. Psychotherapeutische Behandlung sollte eingeleitet werden.",
                moderatelySevere: "Mittel-schwere Depression. Kombination aus Psychotherapie und ggf. Pharmakotherapie erwägen.",
                severe: "Schwere depressive Symptomatik. Dringende fachärztliche Vorstellung und intensive Behandlung erforderlich."
            };

            return interpretations[results.severity.level] || "Interpretation nicht verfügbar.";
        }
    },

    // ============================================================
    // HILFSFUNKTIONEN
    // ============================================================

    getAvailableAssessments() {
        return [
            {
                id: 'SDQ',
                name: this.SDQ.info.name,
                shortName: 'SDQ',
                ageRange: this.SDQ.info.ageRange,
                duration: this.SDQ.info.duration,
                focus: 'Breitband-Screening',
                license: 'Kostenlos'
            },
            {
                id: 'SCARED',
                name: this.SCARED.info.name,
                shortName: 'SCARED',
                ageRange: this.SCARED.info.ageRange,
                duration: this.SCARED.info.duration,
                focus: 'Angststörungen',
                license: 'Kostenlos'
            },
            {
                id: 'PHQ_A',
                name: this.PHQ_A.info.name,
                shortName: 'PHQ-A',
                ageRange: this.PHQ_A.info.ageRange,
                duration: this.PHQ_A.info.duration,
                focus: 'Depression',
                license: 'Public Domain'
            }
        ];
    },

    recommendAssessments(symptoms, age) {
        const recommendations = [];

        // Breitband immer empfehlen bei Erstvorstellung
        recommendations.push({
            assessment: 'SDQ',
            reason: 'Breitband-Screening zur Erfassung aller Problembereiche',
            priority: 1
        });

        // Angst-spezifisch
        if (symptoms.includes('anxiety') || symptoms.includes('fears') || symptoms.includes('worry')) {
            recommendations.push({
                assessment: 'SCARED',
                reason: 'Spezifisches Angst-Screening aufgrund berichteter Angstsymptome',
                priority: 2
            });
        }

        // Depression-spezifisch
        if (symptoms.includes('depression') || symptoms.includes('sadness') || symptoms.includes('withdrawal')) {
            if (age >= 11) {
                recommendations.push({
                    assessment: 'PHQ_A',
                    reason: 'Depressions-Screening aufgrund berichteter depressiver Symptome',
                    priority: 2
                });
            }
        }

        return recommendations;
    }
};

// Export
if (typeof window !== 'undefined') {
    window.AssessmentsModule = AssessmentsModule;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AssessmentsModule;
}
