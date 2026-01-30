/**
 * PädoPsych Advisor - Clinical Knowledge Base
 * Klinisches Wissen für die diagnostische Einschätzung
 */

const CLINICAL_KNOWLEDGE = {

    hypothesen: {

        adhs: {
            name: "ADHS",
            vollname: "Aufmerksamkeitsdefizit-Hyperaktivitätsstörung",
            kategorie: "Entwicklungsstörung",
            icd10: "F90.0",

            kernSymptome: {
                unaufmerksamkeit: ["ablenkbar", "hoert_nicht_zu", "beendet_nicht", "verliert_sachen"],
                hyperaktivitaet: ["nicht_stillsitzen", "unterbricht"],
                impulsivitaet: ["unterbricht"]
            },

            gewichtung: {
                "nicht_stillsitzen": 2,
                "ablenkbar": 2,
                "unterbricht": 1.5,
                "hoert_nicht_zu": 1.5,
                "beendet_nicht": 1.5,
                "verliert_sachen": 1,
                "frustriert": 0.5,
                "wutausbrueche": 0.5
            },

            staerkendeFaktoren: ["seit_immer", "ueberall", "familiaer"],
            schwächendeFaktoren: ["nach_ereignis", "nur_schule", "nur_zuhause"],

            differentialDiagnosen: ["trauma", "angst", "hochbegabung", "emotionsregulation"],

            altershinweis: "Symptome müssen vor dem 12. Lebensjahr begonnen haben und in mehreren Settings auftreten.",

            interpretation: {
                hoch: "Die Symptomkonstellation ist hochgradig vereinbar mit ADHS. Die Kernsymptome Unaufmerksamkeit, Hyperaktivität und Impulsivität zeigen sich deutlich und situationsübergreifend.",
                mittel: "Es zeigen sich Hinweise auf eine mögliche ADHS, wobei nicht alle Kriterien vollständig erfüllt sind. Eine differenzierte Abklärung wird empfohlen.",
                niedrig: "Einzelne Aufmerksamkeitsprobleme sind vorhanden, erfüllen aber nicht das Vollbild einer ADHS."
            }
        },

        angst: {
            name: "Angststörung",
            vollname: "Angststörung im Kindes- und Jugendalter",
            kategorie: "Emotionale Störung",
            icd10: "F93 / F40 / F41",

            kernSymptome: {
                kernsymptome: ["aengstlich", "weint_viel"],
                vermeidung: ["spielt_allein", "wenig_freunde"],
                koerperlich: []
            },

            gewichtung: {
                "aengstlich": 2.5,
                "weint_viel": 1.5,
                "spielt_allein": 1,
                "wenig_freunde": 1,
                "traurig": 0.5,
                "stimmungsschwankungen": 0.5
            },

            staerkendeFaktoren: ["familiaer", "nach_ereignis"],
            schwächendeFaktoren: ["seit_immer", "handgreiflich", "provoziert"],

            differentialDiagnosen: ["depression", "trauma", "asd", "bindung"],

            subtypen: [
                "Trennungsangst",
                "Soziale Phobie",
                "Generalisierte Angst",
                "Spezifische Phobien"
            ],

            interpretation: {
                hoch: "Das klinische Bild spricht deutlich für eine Angststörung. Das Kind zeigt ausgeprägte Ängste mit Vermeidungsverhalten und möglicherweise körperlichen Symptomen.",
                mittel: "Es bestehen Hinweise auf ängstliche Symptomatik. Art und Ausprägung sollten weiter exploriert werden.",
                niedrig: "Leichte ängstliche Tendenzen ohne klinisch relevante Ausprägung."
            }
        },

        depression: {
            name: "Depression",
            vollname: "Depressive Episode im Kindes- und Jugendalter",
            kategorie: "Emotionale Störung",
            icd10: "F32 / F33",

            kernSymptome: {
                affekt: ["traurig", "stimmungsschwankungen"],
                antrieb: ["spielt_allein", "wenig_freunde"],
                reizbarkeit: ["wutausbrueche", "frustriert"]
            },

            gewichtung: {
                "traurig": 2.5,
                "stimmungsschwankungen": 1.5,
                "weint_viel": 1.5,
                "spielt_allein": 1,
                "wenig_freunde": 0.5,
                "wutausbrueche": 1,
                "frustriert": 1,
                "aengstlich": 0.5
            },

            staerkendeFaktoren: ["verlust_trauer", "nach_ereignis", "familiaer", "haeusliche_konflikte"],
            schwächendeFaktoren: ["seit_immer", "nicht_stillsitzen"],

            differentialDiagnosen: ["angst", "trauma", "emotionsregulation", "adhs"],

            warnzeichen: ["Suizidgedanken", "Selbstverletzung", "Hoffnungslosigkeit"],

            wichtigerHinweis: "Bei Kindern äußert sich Depression häufig als Reizbarkeit und Wutausbrüche, nicht als klassische Traurigkeit!",

            interpretation: {
                hoch: "Die Symptomatik ist vereinbar mit einer depressiven Episode. WICHTIG: Bei Kindern äußert sich Depression oft als Reizbarkeit, nicht als klassische Traurigkeit. Suizidalität muss exploriert werden!",
                mittel: "Depressive Symptome sind erkennbar. Die Dauer und Intensität sollte weiter beobachtet werden.",
                niedrig: "Vereinzelte Stimmungsprobleme ohne Hinweis auf manifeste Depression."
            }
        },

        odd: {
            name: "Störung des Sozialverhaltens",
            vollname: "Oppositionelle Störung / Störung des Sozialverhaltens",
            kategorie: "Verhaltensstörung",
            icd10: "F91 / F92",

            kernSymptome: {
                opposition: ["verweigert", "streitet", "provoziert"],
                aggression: ["handgreiflich", "zerstoert", "mobbt_andere"],
                regelverletzung: ["luegt"]
            },

            gewichtung: {
                "verweigert": 2,
                "streitet": 2,
                "provoziert": 2,
                "handgreiflich": 2.5,
                "zerstoert": 2,
                "luegt": 1.5,
                "mobbt_andere": 2,
                "wutausbrueche": 1,
                "frustriert": 0.5
            },

            staerkendeFaktoren: ["haeusliche_konflikte", "ueberall"],
            schwächendeFaktoren: ["nur_schule", "nach_ereignis", "aengstlich"],

            differentialDiagnosen: ["adhs", "trauma", "bindung", "emotionsregulation"],

            wichtigerHinweis: "ODD/SSV ist oft ein Symptom, nicht die Ursache! Immer zugrundeliegende Faktoren explorieren.",

            interpretation: {
                hoch: "Das Verhaltensmuster zeigt deutliche oppositionell-aggressive Züge. WICHTIG: Immer Ursachen klären - ODD ist oft Symptom, nicht Ursache (Trauma? ADHS? Bindung?).",
                mittel: "Oppositionelles Verhalten ist vorhanden, aber situativ begrenzt oder möglicherweise reaktiv.",
                niedrig: "Gelegentliches Aufbegehren im entwicklungsgemäßen Rahmen."
            }
        },

        trauma: {
            name: "Traumafolgestörung",
            vollname: "Anpassungsstörung / Posttraumatische Belastungsstörung",
            kategorie: "Belastungsreaktion",
            icd10: "F43.1 / F43.2",

            kernSymptome: {
                intrusion: [],
                vermeidung: ["spielt_allein", "aengstlich"],
                dysregulation: ["wutausbrueche", "stimmungsschwankungen", "frustriert", "weint_viel"]
            },

            gewichtung: {
                "gewalterfahrung": 3,
                "vernachlaessigung": 3,
                "verlust_trauer": 2.5,
                "elterntrennung": 1.5,
                "haeusliche_konflikte": 2,
                "schulwechsel": 1,
                "wutausbrueche": 1.5,
                "stimmungsschwankungen": 1.5,
                "aengstlich": 1.5,
                "traurig": 1,
                "spielt_allein": 1
            },

            staerkendeFaktoren: ["gewalterfahrung", "vernachlaessigung", "verlust_trauer", "nach_ereignis", "haeusliche_konflikte"],
            schwächendeFaktoren: ["seit_immer"],

            differentialDiagnosen: ["depression", "angst", "odd", "bindung"],

            wichtigerHinweis: "Traumasensibles Vorgehen ist essentiell! Keine Konfrontation ohne stabile therapeutische Beziehung.",

            interpretation: {
                hoch: "Die Symptome im Kontext der Belastungserfahrungen sprechen für eine Traumafolgestörung. Traumasensibles Vorgehen ist essentiell.",
                mittel: "Belastungsreaktionen sind erkennbar. Der Zusammenhang mit möglichen traumatischen Erfahrungen sollte behutsam exploriert werden.",
                niedrig: "Keine eindeutigen Traumafolgesymptome erkennbar, aber Belastungsfaktoren sollten im Blick behalten werden."
            }
        },

        asd: {
            name: "Autismus-Spektrum",
            vollname: "Autismus-Spektrum-Störung",
            kategorie: "Entwicklungsstörung",
            icd10: "F84.0 / F84.5",

            kernSymptome: {
                sozial: ["kein_blickkontakt", "soziale_regeln", "spielt_allein", "wenig_freunde"],
                kommunikation: ["hoert_nicht_zu"],
                verhalten: []
            },

            gewichtung: {
                "kein_blickkontakt": 2.5,
                "soziale_regeln": 2.5,
                "spielt_allein": 2,
                "wenig_freunde": 1.5,
                "hoert_nicht_zu": 0.5
            },

            staerkendeFaktoren: ["seit_immer", "ueberall", "familiaer"],
            schwächendeFaktoren: ["nach_ereignis", "nur_schule", "nur_zuhause"],

            differentialDiagnosen: ["angst", "bindung", "adhs"],

            wichtigerHinweis: "Autismus bei Mädchen wird häufig übersehen (Maskierung)! Spezialisierte Diagnostik erforderlich.",

            interpretation: {
                hoch: "Mehrere Merkmale des Autismus-Spektrums sind erkennbar. Eine spezialisierte Diagnostik wird dringend empfohlen.",
                mittel: "Einzelne autistische Züge sind vorhanden. Differentialdiagnostische Abklärung sinnvoll.",
                niedrig: "Keine eindeutigen Hinweise auf eine Autismus-Spektrum-Störung, aber soziale Besonderheiten sollten beobachtet werden."
            }
        },

        bindung: {
            name: "Bindungsproblematik",
            vollname: "Bindungsstörung / Bindungsunsicherheit",
            kategorie: "Beziehungsstörung",
            icd10: "F94.1 / F94.2",

            kernSymptome: {
                unsicher: ["aengstlich", "weint_viel"],
                desorganisiert: ["stimmungsschwankungen", "wutausbrueche"],
                vermeidend: ["spielt_allein", "wenig_freunde"]
            },

            gewichtung: {
                "vernachlaessigung": 3,
                "haeusliche_konflikte": 2,
                "elterntrennung": 2,
                "aengstlich": 1,
                "weint_viel": 1,
                "stimmungsschwankungen": 1.5,
                "wutausbrueche": 1,
                "spielt_allein": 0.5
            },

            staerkendeFaktoren: ["vernachlaessigung", "haeusliche_konflikte", "elterntrennung", "gewalterfahrung"],
            schwächendeFaktoren: ["seit_immer"],

            differentialDiagnosen: ["angst", "trauma", "asd", "depression"],

            wichtigerHinweis: "Bindungssicherheit ist die Basis für alle Interventionen. Beziehungskontinuität priorisieren!",

            interpretation: {
                hoch: "Die Beziehungsmuster deuten auf eine Bindungsproblematik hin. Beziehungskontinuität und -sicherheit sind zentrale Interventionsansätze.",
                mittel: "Unsichere Bindungsanteile sind erkennbar. Die Beziehungsgestaltung sollte fokussiert werden.",
                niedrig: "Keine auffällige Bindungsproblematik erkennbar."
            }
        },

        emotionsregulation: {
            name: "Emotionsregulationsstörung",
            vollname: "Störung der Emotionsregulation",
            kategorie: "Entwicklungsbedingt",
            icd10: "F92.8",

            kernSymptome: {
                dysregulation: ["wutausbrueche", "frustriert", "stimmungsschwankungen"],
                intensitaet: ["weint_viel"]
            },

            gewichtung: {
                "wutausbrueche": 2.5,
                "frustriert": 2,
                "stimmungsschwankungen": 2,
                "weint_viel": 1.5
            },

            staerkendeFaktoren: ["haeusliche_konflikte"],
            schwächendeFaktoren: [],

            differentialDiagnosen: ["adhs", "depression", "trauma", "odd"],

            wichtigerHinweis: "Kinder lernen Emotionsregulation durch Co-Regulation! Bezugspersonen einbeziehen.",

            interpretation: {
                hoch: "Deutliche Schwierigkeiten in der Emotionsregulation. Das Kind benötigt Co-Regulation und explizites Training von Regulationsstrategien.",
                mittel: "Die Emotionsregulation ist noch unreif. Entwicklungsförderung und Modelllernen sind indiziert.",
                niedrig: "Altersgemäße emotionale Reaktionen."
            }
        }
    },

    // Mapping von Symptom-Werten zu lesbaren Labels
    symptomLabels: {
        // Aufmerksamkeit
        "nicht_stillsitzen": "Kann nicht stillsitzen",
        "unterbricht": "Unterbricht andere",
        "verliert_sachen": "Verliert Sachen",
        "hoert_nicht_zu": "Hört nicht zu",
        "beendet_nicht": "Beendet Aufgaben nicht",
        "ablenkbar": "Leicht ablenkbar",

        // Emotionen
        "wutausbrueche": "Häufige Wutausbrüche",
        "frustriert": "Schnell frustriert",
        "aengstlich": "Ängstlich/besorgt",
        "traurig": "Traurig/niedergeschlagen",
        "stimmungsschwankungen": "Stimmungsschwankungen",
        "weint_viel": "Weint viel",

        // Soziales
        "wenig_freunde": "Wenig Freunde",
        "wird_gemobbt": "Wird gemobbt",
        "mobbt_andere": "Mobbt andere",
        "spielt_allein": "Spielt lieber allein",
        "soziale_regeln": "Versteht soziale Regeln nicht",
        "kein_blickkontakt": "Kein Blickkontakt",

        // Opposition
        "verweigert": "Verweigert Anweisungen",
        "streitet": "Streitet mit Erwachsenen",
        "provoziert": "Provoziert absichtlich",
        "handgreiflich": "Wird handgreiflich",
        "zerstoert": "Zerstört Sachen",
        "luegt": "Lügt häufig",

        // Trauma
        "elterntrennung": "Elterntrennung",
        "verlust_trauer": "Verlust/Trauer",
        "haeusliche_konflikte": "Häusliche Konflikte",
        "schulwechsel": "Schulwechsel",
        "gewalterfahrung": "Gewalterfahrung",
        "vernachlaessigung": "Vernachlässigung"
    },

    // Mapping von Kontext-Werten zu Labels
    kontextLabels: {
        "nur_schule": "Nur in der Schule",
        "nur_zuhause": "Nur zuhause",
        "ueberall": "Überall/situationsübergreifend",
        "seit_immer": "Seit Geburt/immer schon",
        "nach_ereignis": "Nach Ereignis begonnen",
        "familiaer": "Familiäre Vorbelastung"
    },

    // Mapping von Hauptproblem zu Labels
    hauptproblemLabels: {
        "externalisierend": "Externalisierend (Wut, Aggression, Opposition)",
        "internalisierend": "Internalisierend (Rückzug, Angst, Traurigkeit)",
        "aufmerksamkeit": "Aufmerksamkeit/Konzentration",
        "sozial": "Soziale Schwierigkeiten",
        "schulisch": "Schulische Probleme"
    },

    // Relevanz-Mapping: Welche Hypothesen sind bei welchem Hauptproblem besonders relevant
    hauptproblemRelevanz: {
        "externalisierend": ["odd", "adhs", "emotionsregulation", "trauma", "bindung"],
        "internalisierend": ["angst", "depression", "trauma", "bindung"],
        "aufmerksamkeit": ["adhs", "angst", "trauma", "asd"],
        "sozial": ["asd", "angst", "bindung", "adhs"],
        "schulisch": ["adhs", "angst", "depression", "trauma"]
    },

    // Kategoriefarben für UI
    kategoriefarben: {
        "Entwicklungsstörung": "#6366f1",
        "Emotionale Störung": "#8b5cf6",
        "Verhaltensstörung": "#ef4444",
        "Belastungsreaktion": "#f59e0b",
        "Beziehungsstörung": "#ec4899",
        "Entwicklungsbedingt": "#10b981"
    }
};

// Global verfügbar machen
window.CLINICAL_KNOWLEDGE = CLINICAL_KNOWLEDGE;
