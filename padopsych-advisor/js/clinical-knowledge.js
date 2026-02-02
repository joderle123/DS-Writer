/**
 * CLINICAL KNOWLEDGE BASE - Comprehensive Child & Adolescent Psychiatry
 * Umfassende Wissensbasis für Kinder- und Jugendpsychiatrische Anamnese
 */

const CLINICAL_KNOWLEDGE = {

    // ============================================================
    // SECTION A: IDENTIFICATION & REFERRAL CONTEXT
    // ============================================================
    identifikation: {
        label: "Identifikation & Überweisungskontext",
        fields: {
            alter: { type: "number", label: "Alter (Jahre)", min: 0, max: 25 },
            geschlecht: {
                type: "select",
                label: "Geschlecht",
                options: ["männlich", "weiblich", "divers", "nicht angegeben"]
            },
            schulform: {
                type: "select",
                label: "Schulform/Betreuung",
                options: [
                    "Krippe/KiTa", "Kindergarten", "Grundschule", "Förderschule",
                    "Hauptschule", "Realschule", "Gymnasium", "Gesamtschule",
                    "Berufsschule", "nicht beschult", "Sonstiges"
                ]
            },
            klasse: { type: "text", label: "Klasse/Gruppe" },
            wohnsituation: {
                type: "select",
                label: "Wohnsituation",
                options: [
                    "Bei beiden Eltern", "Bei Mutter", "Bei Vater",
                    "Wechselmodell", "Pflegefamilie", "Heim/Wohngruppe",
                    "Bei Großeltern", "Betreutes Wohnen", "Sonstiges"
                ]
            },
            geschwisterAnzahl: { type: "number", label: "Anzahl Geschwister", min: 0 },
            geschwisterPosition: { type: "text", label: "Position in Geschwisterreihe" },
            ueberweisungVon: {
                type: "select",
                label: "Überweisung von",
                options: [
                    "Kinderarzt", "Hausarzt", "Schule", "Jugendamt",
                    "Klinik", "Psychologe/Therapeut", "Eltern selbst",
                    "Andere Familie", "Gericht", "Sonstiges"
                ]
            },
            vorstellungsanlassEltern: {
                type: "textarea",
                label: "Vorstellungsanlass (Eltern-Sicht)"
            },
            vorstellungsanlassKind: {
                type: "textarea",
                label: "Vorstellungsanlass (Kind-Sicht)"
            },
            vorstellungsanlassFremdsicht: {
                type: "textarea",
                label: "Vorstellungsanlass (Schule/Andere)"
            }
        }
    },

    // ============================================================
    // SECTION B: CURRENT SYMPTOMS & FUNCTIONING
    // ============================================================
    aktuelleSymptomatik: {
        label: "Aktuelle Symptomatik & Funktionsniveau",
        fields: {
            hauptbeschwerden: {
                type: "textarea",
                label: "Hauptbeschwerden (priorisiert)"
            },
            symptomBeginn: {
                type: "select",
                label: "Beginn der Symptomatik",
                options: [
                    "Akut (< 2 Wochen)", "Subakut (2-8 Wochen)",
                    "Chronisch (> 2 Monate)", "Seit früher Kindheit",
                    "Nicht klar abgrenzbar"
                ]
            },
            symptomVerlauf: {
                type: "select",
                label: "Verlauf",
                options: [
                    "Kontinuierlich", "Episodisch", "Progredient (zunehmend)",
                    "Fluktuierend", "Gebessert", "Gleichbleibend"
                ]
            },
            ausloeser: {
                type: "textarea",
                label: "Identifizierte Auslöser/Trigger"
            },
            beeintraechtigungSchule: {
                type: "range",
                label: "Beeinträchtigung Schule (0-10)",
                min: 0, max: 10
            },
            beeintraechtigungFamilie: {
                type: "range",
                label: "Beeinträchtigung Familie (0-10)",
                min: 0, max: 10
            },
            beeintraechtigungPeers: {
                type: "range",
                label: "Beeinträchtigung Peer-Beziehungen (0-10)",
                min: 0, max: 10
            },
            beeintraechtigungFreizeit: {
                type: "range",
                label: "Beeinträchtigung Freizeit (0-10)",
                min: 0, max: 10
            },
            bisherigeBewältigung: {
                type: "textarea",
                label: "Bisherige Bewältigungsversuche"
            }
        }
    },

    // ============================================================
    // SECTION C: DEVELOPMENTAL HISTORY
    // ============================================================
    entwicklungsanamnese: {
        label: "Entwicklungsanamnese",
        subsections: {
            schwangerschaftGeburt: {
                label: "Schwangerschaft & Geburt",
                checkboxes: [
                    { id: "komplikationSS", label: "Komplikationen in Schwangerschaft" },
                    { id: "fruehgeburt", label: "Frühgeburt (< 37. SSW)" },
                    { id: "geburtsKomplikation", label: "Geburtskomplikationen" },
                    { id: "neonataleProbleme", label: "Neonatale Probleme (Intensiv)" },
                    { id: "substanzSS", label: "Substanzexposition in SS" },
                    { id: "wunschkind", label: "Wunschkind", positive: true },
                    { id: "bonding", label: "Gutes initiales Bonding", positive: true }
                ],
                textfield: { id: "ssDetails", label: "Details zur Schwangerschaft/Geburt" }
            },
            motorischeEntwicklung: {
                label: "Motorische Entwicklung",
                checkboxes: [
                    { id: "motorikVerzögert", label: "Verzögerte motorische Meilensteine" },
                    { id: "grobmotorikProbleme", label: "Grobmotorische Auffälligkeiten" },
                    { id: "feinmotorikProbleme", label: "Feinmotorische Auffälligkeiten" },
                    { id: "koordinationsProbleme", label: "Koordinationsprobleme" }
                ],
                textfield: { id: "motorikDetails", label: "Details motorische Entwicklung" }
            },
            sprachentwicklung: {
                label: "Sprachentwicklung",
                checkboxes: [
                    { id: "spracheVerzögert", label: "Verzögerte Sprachentwicklung" },
                    { id: "artikulation", label: "Artikulationsstörung" },
                    { id: "sprachverständnis", label: "Sprachverständnisprobleme" },
                    { id: "mehrsprachig", label: "Mehrsprachige Erziehung" },
                    { id: "logopädie", label: "Logopädische Behandlung" }
                ],
                textfield: { id: "spracheDetails", label: "Details Sprachentwicklung" }
            },
            sozialEmotional: {
                label: "Sozial-emotionale Entwicklung",
                checkboxes: [
                    { id: "bindungProbleme", label: "Frühe Bindungsprobleme" },
                    { id: "trennungsangstFrüh", label: "Ausgeprägte frühe Trennungsangst" },
                    { id: "kontaktVerzögert", label: "Verzögerter sozialer Kontakt" },
                    { id: "regulationProbleme", label: "Frühe Regulationsprobleme" },
                    { id: "schreibaby", label: "Schreibaby" },
                    { id: "schlafprobleme_früh", label: "Frühe Schlafprobleme" },
                    { id: "fütterProbleme", label: "Frühe Fütterprobleme" }
                ],
                textfield: { id: "sozialDetails", label: "Details sozial-emotionale Entwicklung" }
            },
            sauberkeit: {
                label: "Sauberkeitsentwicklung",
                checkboxes: [
                    { id: "enuresisTag", label: "Einnässen tagsüber (aktuell/länger)" },
                    { id: "enuresisNacht", label: "Einnässen nachts (aktuell/länger)" },
                    { id: "enkopresis", label: "Einkoten" },
                    { id: "sauberkeitVerzögert", label: "Verzögerte Sauberkeitsentwicklung" }
                ]
            },
            schulischeEntwicklung: {
                label: "Schulische Entwicklung",
                checkboxes: [
                    { id: "einschulungProbleme", label: "Probleme bei Einschulung" },
                    { id: "klasseWiederholt", label: "Klasse wiederholt" },
                    { id: "schulwechselHäufig", label: "Häufige Schulwechsel" },
                    { id: "leistungsabfall", label: "Deutlicher Leistungsabfall" },
                    { id: "teilleistung", label: "V.a. Teilleistungsstörung" },
                    { id: "hochbegabung", label: "V.a. Hochbegabung" },
                    { id: "schulangst", label: "Schulangst/-verweigerung" },
                    { id: "schulabsentismus", label: "Schulabsentismus" }
                ],
                textfield: { id: "schuleEntwicklungDetails", label: "Details schulische Entwicklung" }
            }
        }
    },

    // ============================================================
    // SECTION D: MEDICAL HISTORY
    // ============================================================
    medizinischeAnamnese: {
        label: "Medizinische Anamnese",
        subsections: {
            koerperlicheGesundheit: {
                label: "Körperliche Gesundheit",
                checkboxes: [
                    { id: "chronischeErkrankung", label: "Chronische Erkrankung" },
                    { id: "epilepsie", label: "Epilepsie/Anfallsleiden" },
                    { id: "asthma", label: "Asthma/Allergien" },
                    { id: "diabetes", label: "Diabetes" },
                    { id: "schilddrüse", label: "Schilddrüsenerkrankung" },
                    { id: "herzerkrankung", label: "Herzerkrankung" },
                    { id: "neurologisch", label: "Neurologische Erkrankung" },
                    { id: "genetisch", label: "Genetische Erkrankung/Syndrom" },
                    { id: "khAufenthalt", label: "Krankenhausaufenthalte" },
                    { id: "operationen", label: "Operationen" }
                ],
                textfield: { id: "medizinDetails", label: "Details körperliche Gesundheit" }
            },
            aktuellemedikation: {
                label: "Aktuelle Medikation",
                checkboxes: [
                    { id: "medPsychiatrisch", label: "Psychiatrische Medikation" },
                    { id: "medSomatisch", label: "Somatische Dauermedikation" },
                    { id: "medBedarfs", label: "Bedarfsmedikation" }
                ],
                textfield: { id: "medikamenteListe", label: "Medikamentenliste mit Dosis" }
            },
            vegetativum: {
                label: "Vegetative Funktionen",
                checkboxes: [
                    { id: "schlafstörung", label: "Schlafstörung" },
                    { id: "einschlafProbleme", label: "Einschlafprobleme" },
                    { id: "durchschlafProbleme", label: "Durchschlafprobleme" },
                    { id: "albträume", label: "Albträume" },
                    { id: "appetitReduziert", label: "Appetit reduziert" },
                    { id: "appetitGesteigert", label: "Appetit gesteigert" },
                    { id: "gewichtsverlust", label: "Gewichtsverlust" },
                    { id: "gewichtszunahme", label: "Gewichtszunahme" },
                    { id: "somatisierung", label: "Somatische Beschwerden ohne Befund" },
                    { id: "kopfschmerzen", label: "Häufige Kopfschmerzen" },
                    { id: "bauchschmerzen", label: "Häufige Bauchschmerzen" }
                ]
            },
            vorbehandlung: {
                label: "Psychiatrische Vorbehandlung",
                checkboxes: [
                    { id: "ambulantePsych", label: "Ambulante Psychotherapie" },
                    { id: "teilstationär", label: "Teilstationäre Behandlung" },
                    { id: "vollstationär", label: "Vollstationäre Psychiatrie" },
                    { id: "ergotherapie", label: "Ergotherapie" },
                    { id: "heilpädagogik", label: "Heilpädagogische Förderung" },
                    { id: "jugendhilfeMaßnahme", label: "Jugendhilfe-Maßnahmen" }
                ],
                textfield: { id: "vorbehandlungDetails", label: "Details Vorbehandlungen" }
            }
        }
    },

    // ============================================================
    // SECTION E: FAMILY HISTORY & SYSTEMIC CONTEXT
    // ============================================================
    familienanamnese: {
        label: "Familienanamnese & Systemischer Kontext",
        subsections: {
            familiärePsychiatrie: {
                label: "Psychiatrische Familiengeschichte",
                checkboxes: [
                    { id: "famDepression", label: "Depression in Familie" },
                    { id: "famAngst", label: "Angststörung in Familie" },
                    { id: "famBipolar", label: "Bipolare Störung in Familie" },
                    { id: "famPsychose", label: "Psychose/Schizophrenie in Familie" },
                    { id: "famADHS", label: "ADHS in Familie" },
                    { id: "famAutismus", label: "Autismus in Familie" },
                    { id: "famSucht", label: "Suchterkrankung in Familie" },
                    { id: "famPersönlichkeit", label: "Persönlichkeitsstörung in Familie" },
                    { id: "famSuizid", label: "Suizid(versuch) in Familie" },
                    { id: "famEssstörung", label: "Essstörung in Familie" }
                ],
                textfield: { id: "famPsychDetails", label: "Details (wer, Behandlung)" }
            },
            familiendynamik: {
                label: "Familiendynamik & -struktur",
                checkboxes: [
                    { id: "elternTrennung", label: "Eltern getrennt/geschieden" },
                    { id: "hochkonflikt", label: "Hochstrittigkeit der Eltern" },
                    { id: "patchwork", label: "Patchwork-Familie" },
                    { id: "alleinerziehend", label: "Alleinerziehend" },
                    { id: "parentifizierung", label: "Parentifizierung des Kindes" },
                    { id: "geschwisterRivalität", label: "Ausgeprägte Geschwisterrivalität" },
                    { id: "loyalitätskonflikt", label: "Loyalitätskonflikt" },
                    { id: "kommunikationProbleme", label: "Familiäre Kommunikationsprobleme" },
                    { id: "grenzenUnklar", label: "Unklare Grenzen/Rollen" },
                    { id: "überbehütend", label: "Überbehütender Erziehungsstil" },
                    { id: "vernachlässigend", label: "Vernachlässigender Erziehungsstil" },
                    { id: "autoritär", label: "Sehr autoritärer Erziehungsstil" },
                    { id: "inkonsistent", label: "Inkonsistente Erziehung" }
                ],
                textfield: { id: "famDynamikDetails", label: "Details Familiendynamik" }
            },
            elternBeziehung: {
                label: "Eltern-Kind-Beziehung",
                fields: {
                    beziehungMutter: {
                        type: "select",
                        label: "Beziehung zur Mutter",
                        options: ["Sehr eng", "Eng", "Normal", "Distanziert", "Konfliktbeladen", "Kein Kontakt", "Verstorben"]
                    },
                    beziehungVater: {
                        type: "select",
                        label: "Beziehung zum Vater",
                        options: ["Sehr eng", "Eng", "Normal", "Distanziert", "Konfliktbeladen", "Kein Kontakt", "Unbekannt", "Verstorben"]
                    }
                },
                textfield: { id: "elternBeziehungDetails", label: "Details Eltern-Kind-Beziehung" }
            },
            belastungenFamilie: {
                label: "Aktuelle familiäre Belastungen",
                checkboxes: [
                    { id: "finanzielleNot", label: "Finanzielle Probleme" },
                    { id: "arbeitslosigkeit", label: "Arbeitslosigkeit Eltern" },
                    { id: "wohnungsnot", label: "Wohnungsprobleme" },
                    { id: "migrationsstress", label: "Migrationsstress" },
                    { id: "chronischeKrankheitEltern", label: "Chronische Krankheit Eltern" },
                    { id: "pflegebedürftig", label: "Pflegebedürftiger im Haushalt" },
                    { id: "aktuelleTrennung", label: "Aktuelle Trennungssituation" }
                ]
            }
        }
    },

    // ============================================================
    // SECTION F: PSYCHOSOCIAL ENVIRONMENT
    // ============================================================
    psychosozialesUmfeld: {
        label: "Psychosoziales Umfeld",
        subsections: {
            schuleSituation: {
                label: "Schulische Situation",
                fields: {
                    schulleistung: {
                        type: "select",
                        label: "Aktuelle Schulleistung",
                        options: ["Sehr gut", "Gut", "Befriedigend", "Ausreichend", "Mangelhaft", "Ungenügend", "Nicht beurteilbar"]
                    },
                    klassenzugehörigkeit: {
                        type: "select",
                        label: "Soziale Integration Klasse",
                        options: ["Sehr gut integriert", "Gut integriert", "Teilweise integriert", "Außenseiter", "Gemobbt", "Mobber"]
                    }
                },
                checkboxes: [
                    { id: "lernmotivation", label: "Gute Lernmotivation", positive: true },
                    { id: "konzentrationSchule", label: "Konzentrationsprobleme in Schule" },
                    { id: "hausaufgabenKonflikte", label: "Hausaufgabenkonflikte" },
                    { id: "lehrerKonflikt", label: "Konflikte mit Lehrern" },
                    { id: "verhaltensauffälligSchule", label: "Verhaltensauffällig in Schule" },
                    { id: "nachteilsausgleich", label: "Nachteilsausgleich" },
                    { id: "schulbegleitung", label: "Schulbegleitung" }
                ],
                textfield: { id: "schuleAktuellDetails", label: "Details schulische Situation" }
            },
            peerBeziehungen: {
                label: "Peer-Beziehungen",
                fields: {
                    freundeskreis: {
                        type: "select",
                        label: "Freundeskreis",
                        options: ["Viele enge Freunde", "Einige Freunde", "Ein enger Freund", "Oberflächliche Kontakte", "Keine Freunde", "Virtuelle Freunde nur"]
                    }
                },
                checkboxes: [
                    { id: "sozialKompetent", label: "Sozial kompetent", positive: true },
                    { id: "kontaktscheu", label: "Kontaktscheu/zurückgezogen" },
                    { id: "mobbingOpfer", label: "Mobbing-Opfer" },
                    { id: "mobbingTäter", label: "Mobbing-Täter" },
                    { id: "cybermobbing", label: "Cybermobbing" },
                    { id: "älterePeers", label: "Anschluss an ältere Peers" },
                    { id: "negativerPeergroup", label: "Negativer Peer-Einfluss" },
                    { id: "isolation", label: "Soziale Isolation" }
                ]
            },
            freizeit: {
                label: "Freizeit & Interessen",
                checkboxes: [
                    { id: "hobbysSport", label: "Sportliche Aktivitäten", positive: true },
                    { id: "hobbysKreativ", label: "Kreative Hobbies", positive: true },
                    { id: "hobbysMusik", label: "Musikalische Aktivitäten", positive: true },
                    { id: "vereinMitglied", label: "Vereinsmitgliedschaft", positive: true },
                    { id: "keineHobbys", label: "Keine Hobbies/Interessen" },
                    { id: "interessenverlust", label: "Interessenverlust" },
                    { id: "rückzug", label: "Sozialer Rückzug" }
                ],
                textfield: { id: "freizeitDetails", label: "Hobbies/Interessen beschreiben" }
            },
            medienkonsum: {
                label: "Medienkonsum",
                fields: {
                    screenTime: {
                        type: "select",
                        label: "Bildschirmzeit täglich",
                        options: ["< 1 Stunde", "1-2 Stunden", "2-4 Stunden", "4-6 Stunden", "> 6 Stunden", "Fast permanent"]
                    }
                },
                checkboxes: [
                    { id: "gamingExzessiv", label: "Exzessives Gaming" },
                    { id: "socialMediaProbleme", label: "Problematischer Social-Media-Konsum" },
                    { id: "pornografieKonsum", label: "Pornografiekonsum" },
                    { id: "onlineRisiko", label: "Online-Risikoverhalten" },
                    { id: "tagNachtUmkehr", label: "Tag-Nacht-Umkehr durch Medien" },
                    { id: "realitätsflucht", label: "Realitätsflucht in virtuelle Welten" }
                ]
            }
        }
    },

    // ============================================================
    // SECTION G: TRAUMA & ADVERSE EXPERIENCES (ACEs)
    // ============================================================
    traumaACEs: {
        label: "Trauma & Belastungsfaktoren",
        description: "Adverse Childhood Experiences (ACEs) und andere Belastungen",
        subsections: {
            missbrauchMisshandlung: {
                label: "Missbrauch & Misshandlung",
                checkboxes: [
                    { id: "emotionaleMisshandlung", label: "Emotionale Misshandlung/Abwertung", severity: "high" },
                    { id: "körperlicheMisshandlung", label: "Körperliche Misshandlung", severity: "high" },
                    { id: "sexuellerMissbrauch", label: "Sexueller Missbrauch", severity: "high" },
                    { id: "emotionaleVernachlässigung", label: "Emotionale Vernachlässigung", severity: "high" },
                    { id: "körperlicheVernachlässigung", label: "Körperliche Vernachlässigung", severity: "high" }
                ],
                textfield: { id: "missbrauchDetails", label: "Details (falls bekannt/relevant)" }
            },
            familiäreACEs: {
                label: "Familiäre ACEs",
                checkboxes: [
                    { id: "häuslicheGewalt", label: "Zeuge häuslicher Gewalt", severity: "high" },
                    { id: "suchtFamilieACE", label: "Suchterkrankung im Haushalt", severity: "medium" },
                    { id: "psychKrankheitEltern", label: "Psychische Erkrankung Elternteil", severity: "medium" },
                    { id: "trennungScheidungACE", label: "Trennung/Scheidung der Eltern", severity: "medium" },
                    { id: "inhaftierungFamilie", label: "Inhaftierung Familienmitglied", severity: "medium" }
                ]
            },
            verlustTrauer: {
                label: "Verlust & Trauer",
                checkboxes: [
                    { id: "todElternteil", label: "Tod eines Elternteils", severity: "high" },
                    { id: "todGeschwister", label: "Tod eines Geschwisters", severity: "high" },
                    { id: "todNahestehend", label: "Tod anderer nahestehender Person", severity: "medium" },
                    { id: "todHaustier", label: "Verlust eines Haustieres", severity: "low" },
                    { id: "unverarbeiteteTrauer", label: "Unverarbeitete Trauer" }
                ],
                textfield: { id: "verlustDetails", label: "Details zu Verlusten" }
            },
            weitereTraumen: {
                label: "Weitere Traumatisierungen",
                checkboxes: [
                    { id: "mobbingTrauma", label: "Schweres/anhaltendes Mobbing", severity: "medium" },
                    { id: "unfallTrauma", label: "Schwerer Unfall", severity: "medium" },
                    { id: "medizinischesTrauma", label: "Medizinisches Trauma (OPs, Intensiv)", severity: "medium" },
                    { id: "gewaltOpfer", label: "Opfer von Gewalt (außerhalb Familie)", severity: "high" },
                    { id: "fluchtMigration", label: "Flucht/Kriegserfahrung", severity: "high" },
                    { id: "naturkatastrophe", label: "Naturkatastrophe erlebt", severity: "medium" },
                    { id: "zeugeSchwererUnfall", label: "Zeuge schweren Unfalls/Gewalt", severity: "medium" }
                ]
            },
            traumaReaktionen: {
                label: "Beobachtete Traumafolgen",
                checkboxes: [
                    { id: "flashbacks", label: "Flashbacks/Intrusionen" },
                    { id: "vermeidungTrauma", label: "Vermeidungsverhalten" },
                    { id: "hyperarousal", label: "Übererregung/Schreckhaftigkeit" },
                    { id: "numbing", label: "Emotionale Taubheit" },
                    { id: "dissoziativ", label: "Dissoziative Symptome" },
                    { id: "retraumatisierung", label: "Retraumatisierung/Reinszenierung" },
                    { id: "triggerreaktionen", label: "Deutliche Triggerreaktionen" }
                ],
                textfield: { id: "traumaReaktionenDetails", label: "Details zu Traumareaktionen" }
            }
        }
    },

    // ============================================================
    // SECTION H: RISK & PROTECTIVE FACTORS
    // ============================================================
    risikoSchutz: {
        label: "Risiko- & Schutzfaktoren",
        subsections: {
            akuteRisiken: {
                label: "Akute Risikofaktoren",
                checkboxes: [
                    { id: "suizidgedanken", label: "Suizidgedanken (aktuell)", severity: "critical" },
                    { id: "suizidplanung", label: "Suizidplanung/-vorbereitung", severity: "critical" },
                    { id: "suizidversuchVorher", label: "Früherer Suizidversuch", severity: "high" },
                    { id: "selbstverletzung", label: "Selbstverletzendes Verhalten", severity: "high" },
                    { id: "fremdgefährdung", label: "Fremdgefährdung", severity: "critical" },
                    { id: "weglaufen", label: "Weglaufen/Entweichen", severity: "medium" },
                    { id: "substanzAkut", label: "Akuter Substanzkonsum", severity: "high" }
                ],
                textfield: { id: "akuteRisikenDetails", label: "Details akute Risiken" }
            },
            substanzkonsum: {
                label: "Substanzkonsum",
                checkboxes: [
                    { id: "nikotinKonsum", label: "Nikotinkonsum" },
                    { id: "alkoholKonsum", label: "Alkoholkonsum" },
                    { id: "cannabisKonsum", label: "Cannabiskonsum" },
                    { id: "andereSubstanzen", label: "Andere illegale Substanzen" },
                    { id: "medikamentenmissbrauch", label: "Medikamentenmissbrauch" }
                ],
                textfield: { id: "substanzDetails", label: "Details Substanzkonsum" }
            },
            weitereRisiken: {
                label: "Weitere Risikofaktoren",
                checkboxes: [
                    { id: "delinquenz", label: "Delinquentes Verhalten" },
                    { id: "schulabbruchDrohend", label: "Drohender Schulabbruch" },
                    { id: "sozialerAbstieg", label: "Sozialer Abstieg" },
                    { id: "obdachlosigkeit", label: "Drohende Obdachlosigkeit" },
                    { id: "gefährdeteMinderjährige", label: "Gefährdeter Minderjähriger" },
                    { id: "risikosexualverhalten", label: "Riskantes Sexualverhalten" }
                ]
            },
            schutzfaktorenKind: {
                label: "Schutzfaktoren Kind",
                checkboxes: [
                    { id: "intelligenz", label: "Gute Intelligenz", positive: true },
                    { id: "kreativität", label: "Kreativität", positive: true },
                    { id: "humor", label: "Humor", positive: true },
                    { id: "empathie", label: "Empathiefähigkeit", positive: true },
                    { id: "problemlösung", label: "Problemlösefähigkeit", positive: true },
                    { id: "selbstwirksamkeit", label: "Selbstwirksamkeitserleben", positive: true },
                    { id: "selbstreflexion", label: "Selbstreflexionsfähigkeit", positive: true },
                    { id: "copingStrategien", label: "Gute Coping-Strategien", positive: true },
                    { id: "hobbysPositiv", label: "Sinnvolle Freizeitaktivitäten", positive: true },
                    { id: "zukunftsorientierung", label: "Zukunftsorientierung", positive: true },
                    { id: "leistungsmotivation", label: "Leistungsmotivation", positive: true }
                ],
                textfield: { id: "stärkenKindDetails", label: "Stärken des Kindes beschreiben" }
            },
            schutzfaktorenFamilie: {
                label: "Schutzfaktoren Familie/Umfeld",
                checkboxes: [
                    { id: "sichereBindung", label: "Sichere Bindung zu Bezugsperson", positive: true },
                    { id: "unterstützendeEltern", label: "Unterstützende Eltern", positive: true },
                    { id: "familiärerZusammenhalt", label: "Familiärer Zusammenhalt", positive: true },
                    { id: "stabileWohnsituation", label: "Stabile Wohnsituation", positive: true },
                    { id: "ausreichendFinanzen", label: "Ausreichende finanzielle Mittel", positive: true },
                    { id: "guteSchule", label: "Gute Schule/Betreuung", positive: true },
                    { id: "positivePeers", label: "Positive Peer-Beziehungen", positive: true },
                    { id: "mentor", label: "Mentor/Vertrauensperson außerhalb", positive: true },
                    { id: "professionelleHilfe", label: "Professionelle Hilfe etabliert", positive: true },
                    { id: "religiöseSpirituelle", label: "Religiöse/spirituelle Einbindung", positive: true }
                ],
                textfield: { id: "ressourcenUmfeldDetails", label: "Weitere Ressourcen beschreiben" }
            }
        }
    },

    // ============================================================
    // SECTION I: PSYCHOPATHOLOGICAL FINDINGS
    // ============================================================
    psychopathBefund: {
        label: "Psychopathologischer Befund",
        subsections: {
            erscheinung: {
                label: "Äußere Erscheinung & Kontakt",
                fields: {
                    äußeresErscheinen: {
                        type: "select",
                        label: "Äußeres Erscheinungsbild",
                        options: ["Altersentsprechend gepflegt", "Ungepflegt", "Auffällige Kleidung", "Untergewichtig", "Übergewichtig", "Verletzungszeichen"]
                    },
                    kontaktaufnahme: {
                        type: "select",
                        label: "Kontaktaufnahme",
                        options: ["Offen, zugewandt", "Freundlich-distanziert", "Schüchtern-zurückhaltend", "Misstrauisch", "Ablehnend", "Überangepasst", "Distanzlos"]
                    },
                    blickkontakt: {
                        type: "select",
                        label: "Blickkontakt",
                        options: ["Angemessen", "Vermeidend", "Starr", "Flüchtig", "Intensiv-fixierend"]
                    }
                }
            },
            bewusstsein: {
                label: "Bewusstsein & Orientierung",
                checkboxes: [
                    { id: "bewusstseinKlar", label: "Bewusstsein klar", positive: true },
                    { id: "bewusstseinGetrübt", label: "Bewusstseinsveränderung" },
                    { id: "orientiertVoll", label: "Voll orientiert", positive: true },
                    { id: "orientiertGestört", label: "Orientierungsstörung" }
                ]
            },
            affekt: {
                label: "Affektivität & Stimmung",
                checkboxes: [
                    { id: "stimmungNeutral", label: "Stimmung ausgeglichen", positive: true },
                    { id: "stimmungDepressiv", label: "Depressive Stimmung" },
                    { id: "stimmungGereizt", label: "Gereizte Stimmung" },
                    { id: "stimmungÄngstlich", label: "Ängstliche Stimmung" },
                    { id: "stimmungGehoben", label: "Gehobene Stimmung" },
                    { id: "stimmungLabil", label: "Affektlabilität" },
                    { id: "affektFlach", label: "Verflachter Affekt" },
                    { id: "affektInadäquat", label: "Inadäquater Affekt" },
                    { id: "hoffnungslosigkeit", label: "Hoffnungslosigkeit" },
                    { id: "anhedonie", label: "Anhedonie" },
                    { id: "angstAusgeprägt", label: "Deutliche Ängste" },
                    { id: "panikattacken", label: "Panikattacken" }
                ]
            },
            antrieb: {
                label: "Antrieb & Psychomotorik",
                checkboxes: [
                    { id: "antriebNormal", label: "Antrieb normal", positive: true },
                    { id: "antriebReduziert", label: "Antrieb reduziert" },
                    { id: "antriebGesteigert", label: "Antrieb gesteigert" },
                    { id: "psychomotorischUnruhig", label: "Psychomotorisch unruhig" },
                    { id: "psychomotorischGehemmt", label: "Psychomotorisch gehemmt" },
                    { id: "mutismus", label: "Mutismus" },
                    { id: "stereotypien", label: "Stereotypien" },
                    { id: "tics", label: "Tics" },
                    { id: "zwangshandlungen", label: "Zwangshandlungen" }
                ]
            },
            denken: {
                label: "Denken",
                checkboxes: [
                    { id: "denkenGeordnet", label: "Denken formal geordnet", positive: true },
                    { id: "denkverlangsamung", label: "Denkverlangsamung" },
                    { id: "gedankenDrängen", label: "Gedankendrängen" },
                    { id: "ideenflucht", label: "Ideenflucht" },
                    { id: "grübeln", label: "Grübeln" },
                    { id: "zwangsgedanken", label: "Zwangsgedanken" },
                    { id: "wahnideen", label: "Wahnideen" },
                    { id: "beziehungsideen", label: "Beziehungsideen" },
                    { id: "magischesDenken", label: "Magisches Denken" }
                ]
            },
            wahrnehmung: {
                label: "Wahrnehmung & Ich-Funktionen",
                checkboxes: [
                    { id: "wahrnehmungNormal", label: "Wahrnehmung unauffällig", positive: true },
                    { id: "halluzinationen", label: "Halluzinationen" },
                    { id: "illusionen", label: "Illusionen" },
                    { id: "derealisation", label: "Derealisation" },
                    { id: "depersonalisation", label: "Depersonalisation" },
                    { id: "körperschemastörung", label: "Körperschemastörung" }
                ]
            },
            kognition: {
                label: "Kognition & Intelligenz",
                checkboxes: [
                    { id: "kognitionUnauffällig", label: "Kognition unauffällig", positive: true },
                    { id: "konzentrationsstörungBefund", label: "Konzentrationsstörung" },
                    { id: "merkfähigkeitsstörung", label: "Merkfähigkeitsstörung" },
                    { id: "intelligenzMinderungVa", label: "V.a. Intelligenzminderung" },
                    { id: "teilleistungsstörungVa", label: "V.a. Teilleistungsstörung" }
                ],
                fields: {
                    intelligenzEinschätzung: {
                        type: "select",
                        label: "Intelligenz (klinische Einschätzung)",
                        options: ["Überdurchschnittlich", "Durchschnittlich", "Unterdurchschnittlich", "Lernbehinderung", "Geistige Behinderung", "Nicht beurteilbar"]
                    }
                }
            }
        }
    },

    // ============================================================
    // SECTION J: SYMPTOM CHECKLISTS (DSM/ICD oriented)
    // ============================================================
    symptomChecklisten: {
        label: "Symptom-Checklisten",
        subsections: {
            depression: {
                label: "Depressive Symptome",
                checkboxes: [
                    { id: "depStimmung", label: "Depressive Stimmung", weight: 2 },
                    { id: "depInteresse", label: "Interessenverlust/Anhedonie", weight: 2 },
                    { id: "depGewicht", label: "Gewichtsveränderung" },
                    { id: "depSchlaf", label: "Schlafstörung" },
                    { id: "depPsychomotorik", label: "Psychomotorische Veränderung" },
                    { id: "depEnergie", label: "Energieverlust/Müdigkeit" },
                    { id: "depWertlosigkeit", label: "Wertlosigkeit/Schuld" },
                    { id: "depKonzentration", label: "Konzentrationsprobleme" },
                    { id: "depTod", label: "Gedanken an Tod/Suizid", weight: 2 }
                ]
            },
            angst: {
                label: "Angstsymptome",
                checkboxes: [
                    { id: "angstGeneralisiert", label: "Übermäßige Sorgen/Ängste" },
                    { id: "angstKontrolle", label: "Schwer kontrollierbare Sorgen" },
                    { id: "angstUnruhe", label: "Unruhe/Nervosität" },
                    { id: "angstErmüdung", label: "Leichte Ermüdbarkeit" },
                    { id: "angstKonzentration", label: "Konzentrationsschwierigkeiten" },
                    { id: "angstReizbarkeit", label: "Reizbarkeit" },
                    { id: "angstMuskel", label: "Muskelverspannung" },
                    { id: "angstSchlaf", label: "Schlafstörung" },
                    { id: "angstPanik", label: "Panikattacken" },
                    { id: "angstSozial", label: "Soziale Ängste" },
                    { id: "angstSpezifisch", label: "Spezifische Phobien" },
                    { id: "angstTrennung", label: "Trennungsangst" }
                ]
            },
            adhs: {
                label: "ADHS-Symptome",
                checkboxes: [
                    { id: "adhsUnaufmerksamkeit1", label: "Flüchtigkeitsfehler/Sorgfaltsmangel" },
                    { id: "adhsUnaufmerksamkeit2", label: "Schwierigkeiten Aufmerksamkeit aufrechtzuerhalten" },
                    { id: "adhsUnaufmerksamkeit3", label: "Scheint nicht zuzuhören" },
                    { id: "adhsUnaufmerksamkeit4", label: "Führt Aufgaben nicht zu Ende" },
                    { id: "adhsUnaufmerksamkeit5", label: "Organisationsprobleme" },
                    { id: "adhsUnaufmerksamkeit6", label: "Vermeidet geistige Anstrengung" },
                    { id: "adhsUnaufmerksamkeit7", label: "Verliert Gegenstände" },
                    { id: "adhsUnaufmerksamkeit8", label: "Leicht ablenkbar" },
                    { id: "adhsUnaufmerksamkeit9", label: "Vergesslich" },
                    { id: "adhsHyperaktivität1", label: "Zappelt/rutscht auf Stuhl" },
                    { id: "adhsHyperaktivität2", label: "Steht in Situationen auf" },
                    { id: "adhsHyperaktivität3", label: "Läuft/klettert exzessiv" },
                    { id: "adhsHyperaktivität4", label: "Kann nicht ruhig spielen" },
                    { id: "adhsHyperaktivität5", label: "Wie von Motor angetrieben" },
                    { id: "adhsHyperaktivität6", label: "Redet übermäßig viel" },
                    { id: "adhsImpulsivität1", label: "Platzt mit Antworten heraus" },
                    { id: "adhsImpulsivität2", label: "Kann nicht warten" },
                    { id: "adhsImpulsivität3", label: "Unterbricht andere" }
                ]
            },
            autismus: {
                label: "Autismus-Spektrum-Symptome",
                checkboxes: [
                    { id: "autSozial1", label: "Defizite sozial-emotionale Reziprozität" },
                    { id: "autSozial2", label: "Defizite nonverbale Kommunikation" },
                    { id: "autSozial3", label: "Schwierigkeiten Beziehungen" },
                    { id: "autRepetitiv1", label: "Stereotype Bewegungen/Sprache" },
                    { id: "autRepetitiv2", label: "Bestehen auf Gleichförmigkeit/Routinen" },
                    { id: "autRepetitiv3", label: "Eingeschränkte, fixierte Interessen" },
                    { id: "autRepetitiv4", label: "Sensorische Hyper-/Hyporeaktivität" },
                    { id: "autBlickkontakt", label: "Auffälliger Blickkontakt" },
                    { id: "autSonderinteressen", label: "Sonderinteressen" },
                    { id: "autTheoryMind", label: "Schwierigkeiten Theory of Mind" }
                ]
            },
            verhalten: {
                label: "Verhaltensauffälligkeiten (SSV/ODD)",
                checkboxes: [
                    { id: "verhWütend", label: "Oft wütend/ärgerlich" },
                    { id: "verhEmpfindlich", label: "Empfindlich/leicht verärgert" },
                    { id: "verhTrotzig", label: "Widersetzt sich Regeln" },
                    { id: "verhProvoziert", label: "Provoziert andere absichtlich" },
                    { id: "verhBeschuldigt", label: "Beschuldigt andere" },
                    { id: "verhGehässig", label: "Boshaft/rachsüchtig" },
                    { id: "verhLügt", label: "Lügt häufig" },
                    { id: "verhStiehlt", label: "Stiehlt" },
                    { id: "verhAggression", label: "Physische Aggression" },
                    { id: "verhMobbt", label: "Mobbt andere" },
                    { id: "verhGrausam", label: "Grausam zu Tieren" },
                    { id: "verhSachbeschädigung", label: "Sachbeschädigung" },
                    { id: "verhFeuer", label: "Zündeln" }
                ]
            },
            trauma: {
                label: "PTBS-Symptome",
                checkboxes: [
                    { id: "ptbsIntrusion1", label: "Wiederkehrende belastende Erinnerungen" },
                    { id: "ptbsIntrusion2", label: "Wiederkehrende Albträume" },
                    { id: "ptbsIntrusion3", label: "Flashbacks" },
                    { id: "ptbsIntrusion4", label: "Psychische Belastung bei Triggern" },
                    { id: "ptbsIntrusion5", label: "Körperliche Reaktion bei Triggern" },
                    { id: "ptbsVermeidung1", label: "Vermeidung von Gedanken/Gefühlen" },
                    { id: "ptbsVermeidung2", label: "Vermeidung von Triggern (extern)" },
                    { id: "ptbsKognition1", label: "Negative Überzeugungen" },
                    { id: "ptbsKognition2", label: "Verzerrte Schuldzuweisungen" },
                    { id: "ptbsKognition3", label: "Anhaltende negative Emotionen" },
                    { id: "ptbsKognition4", label: "Vermindertes Interesse" },
                    { id: "ptbsKognition5", label: "Entfremdungsgefühle" },
                    { id: "ptbsKognition6", label: "Eingeschränkter positiver Affekt" },
                    { id: "ptbsErregung1", label: "Reizbarkeit/Wutausbrüche" },
                    { id: "ptbsErregung2", label: "Riskantes Verhalten" },
                    { id: "ptbsErregung3", label: "Hypervigilanz" },
                    { id: "ptbsErregung4", label: "Übermäßige Schreckreaktion" },
                    { id: "ptbsErregung5", label: "Konzentrationsprobleme" },
                    { id: "ptbsErregung6", label: "Schlafstörungen" }
                ]
            },
            essstörung: {
                label: "Essstörungs-Symptome",
                checkboxes: [
                    { id: "essRestriktion", label: "Restriktives Essverhalten" },
                    { id: "essBinge", label: "Essanfälle" },
                    { id: "essPurging", label: "Erbrechen/Abführmittel" },
                    { id: "essExzessivSport", label: "Exzessiver Sport" },
                    { id: "essKörperbild", label: "Gestörtes Körperbild" },
                    { id: "essGewichtsangst", label: "Angst vor Gewichtszunahme" },
                    { id: "essFoodRules", label: "Rigide Essensregeln" },
                    { id: "essVermeidend", label: "Vermeidend/restriktive Nahrungsaufnahme" }
                ]
            },
            zwang: {
                label: "Zwangssymptome",
                checkboxes: [
                    { id: "zwangGedanken", label: "Zwangsgedanken" },
                    { id: "zwangKontamination", label: "Kontaminationsängste" },
                    { id: "zwangSchaden", label: "Gedanken an Schaden" },
                    { id: "zwangSymmetrie", label: "Symmetrie/Ordnung" },
                    { id: "zwangWaschen", label: "Wasch-/Reinigungszwänge" },
                    { id: "zwangKontrollieren", label: "Kontrollzwänge" },
                    { id: "zwangZählen", label: "Zähl-/Wiederholungszwänge" },
                    { id: "zwangOrdnen", label: "Ordnungszwänge" },
                    { id: "zwangSammeln", label: "Sammelzwänge/Horten" }
                ]
            },
            psychose: {
                label: "Psychotische Symptome",
                checkboxes: [
                    { id: "psyHalluzAkust", label: "Akustische Halluzinationen" },
                    { id: "psyHalluzVisuell", label: "Visuelle Halluzinationen" },
                    { id: "psyWahn", label: "Wahnphänomene" },
                    { id: "psyBeziehungsideen", label: "Beziehungsideen" },
                    { id: "psyDenkstörung", label: "Formale Denkstörung" },
                    { id: "psyIchStörung", label: "Ich-Störungen" },
                    { id: "psyNegativ", label: "Negativsymptome" }
                ]
            },
            bindung: {
                label: "Bindungs-bezogene Symptome",
                checkboxes: [
                    { id: "bindungKlammern", label: "Übermäßiges Klammern" },
                    { id: "bindungDistanzlos", label: "Distanzloses Verhalten" },
                    { id: "bindungMisstrauen", label: "Grundmisstrauen" },
                    { id: "bindungAmbivalent", label: "Ambivalentes Beziehungsverhalten" },
                    { id: "bindungKontrollierend", label: "Kontrollierendes Verhalten" },
                    { id: "bindungRollentausch", label: "Rollentausch mit Eltern" },
                    { id: "bindungSchwer", label: "Schwer zu beruhigen" }
                ]
            },
            emotionsregulation: {
                label: "Emotionsregulation",
                checkboxes: [
                    { id: "emoWutausbrüche", label: "Heftige Wutausbrüche" },
                    { id: "emoÜberflutung", label: "Emotionale Überflutung" },
                    { id: "emoSchnellFrustriert", label: "Schnell frustriert" },
                    { id: "emoImpulsiv", label: "Impulsive Reaktionen" },
                    { id: "emoSelbstberuhigung", label: "Probleme Selbstberuhigung" },
                    { id: "emoStimmungswechsel", label: "Schnelle Stimmungswechsel" },
                    { id: "emoIntensiv", label: "Übermäßig intensive Emotionen" }
                ]
            }
        }
    },

    // ============================================================
    // DIAGNOSTIC HYPOTHESES DATABASE
    // ============================================================
    diagnoseHypothesen: {
        depression: {
            label: "Depressive Episode",
            icd10: "F32",
            requiredSymptoms: ["depStimmung", "depInteresse"],
            supportingSymptoms: ["depGewicht", "depSchlaf", "depPsychomotorik", "depEnergie", "depWertlosigkeit", "depKonzentration", "depTod"],
            minRequired: 1,
            minSupporting: 4,
            differentialHints: ["Wenn < 2 Wochen: Anpassungsstörung", "Bei Manie-Geschichte: Bipolare Störung", "Bei Kindern: oft als Reizbarkeit!"]
        },
        angststörung: {
            label: "Angststörung",
            icd10: "F41",
            requiredSymptoms: ["angstGeneralisiert"],
            supportingSymptoms: ["angstKontrolle", "angstUnruhe", "angstErmüdung", "angstKonzentration", "angstReizbarkeit", "angstMuskel", "angstSchlaf"],
            minRequired: 1,
            minSupporting: 3
        },
        sozialePhobie: {
            label: "Soziale Phobie",
            icd10: "F40.1",
            requiredSymptoms: ["angstSozial"],
            supportingSymptoms: ["vermeidungTrauma", "kontaktscheu", "isolation"],
            minRequired: 1,
            minSupporting: 1
        },
        panikstörung: {
            label: "Panikstörung",
            icd10: "F41.0",
            requiredSymptoms: ["angstPanik"],
            supportingSymptoms: ["angstGeneralisiert", "vermeidungTrauma", "hyperarousal"],
            minRequired: 1
        },
        adhs: {
            label: "ADHS",
            icd10: "F90",
            requiredFromGroup1: ["adhsUnaufmerksamkeit1", "adhsUnaufmerksamkeit2", "adhsUnaufmerksamkeit3", "adhsUnaufmerksamkeit4", "adhsUnaufmerksamkeit5", "adhsUnaufmerksamkeit6", "adhsUnaufmerksamkeit7", "adhsUnaufmerksamkeit8", "adhsUnaufmerksamkeit9"],
            requiredFromGroup2: ["adhsHyperaktivität1", "adhsHyperaktivität2", "adhsHyperaktivität3", "adhsHyperaktivität4", "adhsHyperaktivität5", "adhsHyperaktivität6", "adhsImpulsivität1", "adhsImpulsivität2", "adhsImpulsivität3"],
            minFromGroup1: 6,
            minFromGroup2: 6,
            differentialHints: ["Symptome vor 12 Jahren", "In mehreren Settings", "Bei Mädchen oft nur unaufmerksamer Typ"]
        },
        autismus: {
            label: "Autismus-Spektrum-Störung",
            icd10: "F84",
            requiredFromGroup1: ["autSozial1", "autSozial2", "autSozial3"],
            requiredFromGroup2: ["autRepetitiv1", "autRepetitiv2", "autRepetitiv3", "autRepetitiv4"],
            minFromGroup1: 2,
            minFromGroup2: 2,
            differentialHints: ["Symptome seit früher Kindheit", "Bei Mädchen oft maskiert", "Spezialisierte Diagnostik erforderlich"]
        },
        oppositionell: {
            label: "Oppositionelle Störung",
            icd10: "F91.3",
            requiredSymptoms: ["verhWütend", "verhEmpfindlich", "verhTrotzig", "verhProvoziert", "verhBeschuldigt", "verhGehässig"],
            minRequired: 4,
            differentialHints: ["Immer Ursache klären: Trauma? ADHS? Bindung?"]
        },
        sozialverhalten: {
            label: "Störung des Sozialverhaltens",
            icd10: "F91",
            requiredSymptoms: ["verhAggression", "verhLügt", "verhStiehlt", "verhSachbeschädigung", "verhGrausam"],
            minRequired: 3,
            differentialHints: ["Schwere der Störung beachten", "Callous-unemotional traits?"]
        },
        ptbs: {
            label: "Posttraumatische Belastungsstörung",
            icd10: "F43.1",
            requiredTraumaExposure: true,
            requiredFromGroups: {
                intrusion: { symptoms: ["ptbsIntrusion1", "ptbsIntrusion2", "ptbsIntrusion3", "ptbsIntrusion4", "ptbsIntrusion5"], min: 1 },
                vermeidung: { symptoms: ["ptbsVermeidung1", "ptbsVermeidung2"], min: 1 },
                kognition: { symptoms: ["ptbsKognition1", "ptbsKognition2", "ptbsKognition3", "ptbsKognition4", "ptbsKognition5", "ptbsKognition6"], min: 2 },
                erregung: { symptoms: ["ptbsErregung1", "ptbsErregung2", "ptbsErregung3", "ptbsErregung4", "ptbsErregung5", "ptbsErregung6"], min: 2 }
            }
        },
        komplexePTBS: {
            label: "Komplexe PTBS / Entwicklungstrauma",
            icd10: "F43.1 + Bindung",
            requiredSymptoms: ["emotionaleMisshandlung", "körperlicheMisshandlung", "emotionaleVernachlässigung"],
            supportingSymptoms: ["bindungProbleme", "emoÜberflutung", "dissoziativ", "selbstverletzung"],
            minRequired: 1,
            minSupporting: 2,
            differentialHints: ["Bei chronischer Traumatisierung in Kindheit", "Affektregulation, Selbstbild, Beziehungen betroffen"]
        },
        anorexie: {
            label: "Anorexia nervosa",
            icd10: "F50.0",
            requiredSymptoms: ["essRestriktion", "essGewichtsangst", "essKörperbild"],
            minRequired: 2
        },
        bulimie: {
            label: "Bulimia nervosa",
            icd10: "F50.2",
            requiredSymptoms: ["essBinge", "essPurging"],
            minRequired: 2
        },
        zwangsstörung: {
            label: "Zwangsstörung",
            icd10: "F42",
            requiredSymptoms: ["zwangGedanken"],
            supportingSymptoms: ["zwangKontamination", "zwangSchaden", "zwangSymmetrie", "zwangWaschen", "zwangKontrollieren", "zwangZählen", "zwangOrdnen"],
            minRequired: 1,
            minSupporting: 1
        },
        bindungsstörung: {
            label: "Bindungsstörung",
            icd10: "F94.1/F94.2",
            requiredSymptoms: ["bindungProbleme", "bindungDistanzlos", "bindungKlammern", "bindungMisstrauen"],
            supportingSymptoms: ["emotionaleVernachlässigung", "körperlicheVernachlässigung"],
            minRequired: 2
        },
        anpassungsstörung: {
            label: "Anpassungsstörung",
            icd10: "F43.2",
            requiresStressor: true,
            supportingSymptoms: ["stimmungDepressiv", "angstGeneralisiert", "verhaltensauffälligSchule"],
            differentialHints: ["Reaktion auf identifizierbaren Stressor", "Symptome < 6 Monate nach Stressor"]
        },
        trennungsangst: {
            label: "Trennungsangst",
            icd10: "F93.0",
            requiredSymptoms: ["angstTrennung"],
            supportingSymptoms: ["schulangst", "schlafstörung", "somatisierung"],
            minRequired: 1
        },
        emotionsregulationsstörung: {
            label: "Störung der Emotionsregulation",
            icd10: "F92.8",
            requiredSymptoms: ["emoWutausbrüche", "emoÜberflutung", "emoSchnellFrustriert"],
            supportingSymptoms: ["emoImpulsiv", "emoSelbstberuhigung", "emoStimmungswechsel", "emoIntensiv"],
            minRequired: 2,
            minSupporting: 2
        }
    },

    // ============================================================
    // INTERVENTION RECOMMENDATIONS DATABASE
    // ============================================================
    interventionen: {
        akut: {
            suizidgefahr: {
                trigger: ["suizidgedanken", "suizidplanung"],
                empfehlungen: [
                    "Sofortige Risikoeinschätzung (strukturiert)",
                    "Non-Suizid-Vereinbarung wenn möglich",
                    "Engmaschige Kontakte vereinbaren",
                    "Bei akuter Gefahr: stationäre Aufnahme erwägen",
                    "Notfallplan erstellen",
                    "Angehörige einbeziehen (Waffenschrank, Medikamente sichern)"
                ],
                dringlichkeit: "sofort"
            },
            selbstverletzung: {
                trigger: ["selbstverletzung"],
                empfehlungen: [
                    "Wunden versorgen lassen",
                    "Auslöser und Funktion verstehen",
                    "Skills zur Spannungsreduktion vermitteln",
                    "Alternativstrategien erarbeiten"
                ],
                dringlichkeit: "kurzfristig"
            },
            kindeswohlgefährdung: {
                trigger: ["körperlicheMisshandlung", "sexuellerMissbrauch", "körperlicheVernachlässigung"],
                empfehlungen: [
                    "Dokumentation",
                    "Kinderschutzbeauftragten einschalten",
                    "Jugendamt informieren (§8a SGB VIII)",
                    "Sichere Umgebung sicherstellen"
                ],
                dringlichkeit: "sofort"
            }
        },
        therapeutisch: {
            psychotherapie: {
                kognitiveVerhaltenstherapie: {
                    indikation: ["depression", "angststörung", "zwangsstörung", "sozialePhobie"],
                    beschreibung: "Kognitive Verhaltenstherapie (KVT)",
                    fokus: "Dysfunktionale Kognitionen, Verhaltensaufbau, Exposition"
                },
                traumatherapie: {
                    indikation: ["ptbs", "komplexePTBS"],
                    beschreibung: "Traumafokussierte Therapie (tf-KVT, EMDR)",
                    fokus: "Traumaverarbeitung, Stabilisierung, Integration"
                },
                dialektischBehavioral: {
                    indikation: ["selbstverletzung", "emotionsregulationsstörung"],
                    beschreibung: "Dialektisch-Behaviorale Therapie (DBT-A)",
                    fokus: "Emotionsregulation, Stresstoleranz, Achtsamkeit"
                },
                spieltherapie: {
                    alterUnter: 12,
                    beschreibung: "Spieltherapie/kindgerechte Verfahren",
                    fokus: "Entwicklungsgerecht, nonverbal, beziehungsorientiert"
                },
                familientherapie: {
                    indikation: ["familiendynamik", "bindungsstörung", "trennungsangst"],
                    beschreibung: "Systemische Familientherapie",
                    fokus: "Familiäre Muster, Kommunikation, Ressourcenaktivierung"
                },
                elterntraining: {
                    indikation: ["adhs", "oppositionell", "emotionsregulationsstörung"],
                    beschreibung: "Elterntraining/Erziehungsberatung",
                    fokus: "Positives Erziehungsverhalten, Konsequenz, Beziehung"
                }
            },
            medikation: {
                antidepressiva: {
                    indikation: ["depression", "angststörung", "zwangsstörung"],
                    erstlinie: "SSRI (z.B. Fluoxetin, Sertralin)",
                    hinweise: "Cave: Suizidalität initial, Aktivierung"
                },
                stimulanzien: {
                    indikation: ["adhs"],
                    erstlinie: "Methylphenidat oder Lisdexamfetamin",
                    hinweise: "Titration erforderlich, Wachstumsmonitoring"
                },
                antipsychotika: {
                    indikation: ["psychose", "schwereAggression"],
                    erstlinie: "Atypika (z.B. Risperidon, Aripiprazol)",
                    hinweise: "Metabolisches Monitoring, EKG"
                },
                melatonin: {
                    indikation: ["schlafstörung"],
                    erstlinie: "Melatonin retard",
                    hinweise: "Besonders bei ADHS, Autismus"
                }
            }
        },
        psychosozial: {
            schulisch: {
                nachteilsausgleich: {
                    indikation: ["adhs", "teilleistung", "depression", "autismus"],
                    beschreibung: "Nachteilsausgleich beantragen",
                    umsetzung: "Ärztliches Attest, Schulkonferenz"
                },
                schulbegleitung: {
                    indikation: ["autismus", "sozialverhalten", "angststörung"],
                    beschreibung: "Integrationshilfe/Schulbegleitung",
                    umsetzung: "Antrag Jugendamt/Sozialamt"
                },
                förderung: {
                    indikation: ["teilleistung", "intelligenzMinderungVa"],
                    beschreibung: "Sonderpädagogische Förderung",
                    umsetzung: "Feststellungsverfahren"
                }
            },
            jugendhilfe: {
                erziehungsberatung: {
                    indikation: ["inkonsistent", "kommunikationProbleme"],
                    beschreibung: "Erziehungsberatung (§28 SGB VIII)",
                    umsetzung: "Niedrigschwellig, ohne Antrag"
                },
                sozialpädagogisch: {
                    indikation: ["sozialverhalten", "schulabsentismus"],
                    beschreibung: "Sozialpädagogische Familienhilfe (SPFH)",
                    umsetzung: "Antrag Jugendamt"
                },
                hilfeZurErziehung: {
                    indikation: ["gefährdeteMinderjährige"],
                    beschreibung: "Hilfe zur Erziehung (§27ff SGB VIII)",
                    umsetzung: "Hilfeplan mit Jugendamt"
                }
            },
            ergänzend: {
                ergotherapie: {
                    indikation: ["motorikVerzögert", "feinmotorikProbleme", "autismus"],
                    beschreibung: "Ergotherapie",
                    ziel: "Sensorische Integration, Alltagskompetenzen"
                },
                logopädie: {
                    indikation: ["spracheVerzögert", "artikulation"],
                    beschreibung: "Logopädie",
                    ziel: "Sprachförderung, Artikulation"
                },
                sozialesKompetenztraining: {
                    indikation: ["autismus", "kontaktscheu", "angstSozial"],
                    beschreibung: "Soziales Kompetenztraining (Gruppe)",
                    ziel: "Soziale Fertigkeiten, Peer-Interaktion"
                }
            }
        }
    },

    // ============================================================
    // MODEL TEMPLATES FOR SYNTHESIS
    // ============================================================
    modellvorlagen: {
        biopsychosozial: {
            label: "Bio-Psycho-Soziales Modell",
            beschreibung: "Integratives Modell zur Erklärung psychischer Störungen",
            dimensionen: {
                biologisch: {
                    label: "Biologische Faktoren",
                    kategorien: [
                        "Genetik/Familienanamnese",
                        "Neurobiologie",
                        "Körperliche Gesundheit",
                        "Entwicklung",
                        "Temperament",
                        "Medikation"
                    ]
                },
                psychologisch: {
                    label: "Psychologische Faktoren",
                    kategorien: [
                        "Kognitive Faktoren (Denkmuster, Überzeugungen)",
                        "Emotionale Faktoren (Affektregulation)",
                        "Verhaltensfaktoren (Coping, Vermeidung)",
                        "Persönlichkeit/Temperament",
                        "Selbstbild/Selbstwert",
                        "Frühere Lernerfahrungen"
                    ]
                },
                sozial: {
                    label: "Soziale Faktoren",
                    kategorien: [
                        "Familie (Struktur, Dynamik, Erziehung)",
                        "Peers (Freundschaften, Mobbing)",
                        "Schule (Leistung, Integration)",
                        "Sozioökonomischer Status",
                        "Kultur/Religion",
                        "Belastende Lebensereignisse"
                    ]
                }
            }
        },
        systemisch: {
            label: "Systemische Perspektive",
            beschreibung: "Das Kind im Kontext seiner Beziehungssysteme",
            aspekte: [
                {
                    name: "Symptom als Kommunikation",
                    frage: "Was könnte das Symptom im System kommunizieren?"
                },
                {
                    name: "Funktion des Symptoms",
                    frage: "Welche Funktion erfüllt das Symptom im Familiensystem?"
                },
                {
                    name: "Zirkuläre Kausalität",
                    frage: "Welche Wechselwirkungen halten das Problem aufrecht?"
                },
                {
                    name: "Familienmuster/Regeln",
                    frage: "Welche impliziten Regeln gibt es in der Familie?"
                },
                {
                    name: "Triangulierungen",
                    frage: "Wird das Kind in Elternkonflikte einbezogen?"
                },
                {
                    name: "Grenzziehungen",
                    frage: "Sind die Grenzen zwischen Subsystemen klar?"
                },
                {
                    name: "Loyalitäten",
                    frage: "Gibt es Loyalitätskonflikte?"
                },
                {
                    name: "Transgenerationale Muster",
                    frage: "Welche Muster wiederholen sich über Generationen?"
                }
            ]
        },
        trauma: {
            label: "Trauma-Perspektive",
            beschreibung: "Verständnis des Kindes durch die Trauma-Linse",
            aspekte: [
                {
                    name: "Art der Traumatisierung",
                    optionen: ["Typ I (einmalig)", "Typ II (wiederholend)", "Komplex (früh, beziehungsbezogen)"]
                },
                {
                    name: "Zeitpunkt/Entwicklungsphase",
                    frage: "In welcher Entwicklungsphase fand das Trauma statt?"
                },
                {
                    name: "Täter-Beziehung",
                    frage: "War der Täter eine Bindungsperson?"
                },
                {
                    name: "Reaktionsmuster (4F)",
                    optionen: ["Fight (Kampf/Aggression)", "Flight (Flucht/Vermeidung)", "Freeze (Erstarren/Dissoziation)", "Fawn (Anpassung/Unterwerfung)"]
                },
                {
                    name: "Trigger-Muster",
                    frage: "Was löst Traumareaktionen aus?"
                },
                {
                    name: "Fenster der Toleranz",
                    frage: "Wie groß ist das Toleranzfenster für Erregung?"
                },
                {
                    name: "Ressourcen für Verarbeitung",
                    frage: "Welche Schutzfaktoren unterstützen die Verarbeitung?"
                }
            ]
        },
        bindung: {
            label: "Bindungstheoretische Perspektive",
            beschreibung: "Verständnis durch die Bindungsbrille",
            muster: {
                sicher: {
                    label: "Sichere Bindung (B)",
                    merkmale: ["Nutzt Bezugsperson als sichere Basis", "Zeigt Stress bei Trennung, lässt sich beruhigen", "Balanciertes Explorationsverhalten"],
                    prognose: "Günstig für emotionale Entwicklung"
                },
                unsicherVermeidend: {
                    label: "Unsicher-vermeidende Bindung (A)",
                    merkmale: ["Zeigt wenig Stress bei Trennung", "Vermeidet Nähe zur Bezugsperson", "Pseudoautonomie, wenig Emotionsausdruck"],
                    intervention: "Emotionale Signale verstärken, Präsenz zeigen"
                },
                unsicherAmbivalent: {
                    label: "Unsicher-ambivalente Bindung (C)",
                    merkmale: ["Übermäßiger Stress bei Trennung", "Klammert, lässt sich schwer beruhigen", "Eingeschränkte Exploration"],
                    intervention: "Konsistenz und Vorhersehbarkeit bieten"
                },
                desorganisiert: {
                    label: "Desorganisierte Bindung (D)",
                    merkmale: ["Widersprüchliches Verhalten", "Erstarren, Stereotypien", "Bezugsperson als Quelle von Angst"],
                    intervention: "Trauma-sensibles Vorgehen, Stabilisierung priorisieren"
                }
            },
            aspekte: [
                "Primäre Bindungsfigur(en)",
                "Qualität früher Beziehungserfahrungen",
                "Internales Arbeitsmodell (Selbst/Andere)",
                "Mentalisierungsfähigkeit",
                "Aktuelle Beziehungsgestaltung"
            ]
        },
        entwicklung: {
            label: "Entwicklungspsychopathologische Perspektive",
            beschreibung: "Das Kind im Kontext seiner Entwicklung",
            entwicklungsaufgaben: {
                "0-1": ["Regulationsfähigkeit", "Sichere Bindung", "Vertrauen vs. Misstrauen"],
                "1-3": ["Autonomie", "Sprache", "Sauberkeit", "Selbstkontrolle beginnt"],
                "3-6": ["Initiative", "Geschlechtsidentität", "Gewissen", "Spiel"],
                "6-12": ["Kompetenz/Fleiß", "Peer-Beziehungen", "Schulische Fertigkeiten", "Regelverständnis"],
                "12-18": ["Identität", "Ablösung", "Intimität", "Berufsfindung"]
            },
            fragen: [
                "Welche Entwicklungsaufgaben stehen aktuell an?",
                "Entspricht der Entwicklungsstand dem chronologischen Alter?",
                "Gab es sensible Phasen mit Belastungen?",
                "Wie ist die bisherige Entwicklungs-Trajektorie?",
                "Risikofaktoren vs. Schutzfaktoren-Bilanz?"
            ]
        },
        oekologisch: {
            label: "Ökologisches Modell (Bronfenbrenner)",
            beschreibung: "Das Kind in seinen verschiedenen Umweltsystemen",
            systeme: {
                mikrosystem: {
                    label: "Mikrosystem",
                    beschreibung: "Unmittelbare Umgebungen mit direktem Kontakt",
                    elemente: ["Familie", "Schule/KiTa", "Peers/Freunde", "Nachbarschaft", "Sportverein etc."]
                },
                mesosystem: {
                    label: "Mesosystem",
                    beschreibung: "Wechselwirkungen zwischen Mikrosystemen",
                    beispiele: ["Familie-Schule-Kooperation", "Eltern kennen Freunde", "Konflikte zwischen Settings"]
                },
                exosystem: {
                    label: "Exosystem",
                    beschreibung: "Indirekte Einflüsse auf das Kind",
                    elemente: ["Arbeitsplatz der Eltern", "Soziales Netzwerk der Eltern", "Kommunale Ressourcen", "Medien"]
                },
                makrosystem: {
                    label: "Makrosystem",
                    beschreibung: "Übergeordnete kulturelle/gesellschaftliche Einflüsse",
                    elemente: ["Kulturelle Werte", "Gesetze", "Wirtschaftliche Lage", "Sozialpolitik"]
                },
                chronosystem: {
                    label: "Chronosystem",
                    beschreibung: "Zeitliche Dimension/Veränderungen",
                    elemente: ["Historische Zeit", "Lebensübergänge", "Kumulative Effekte"]
                }
            }
        },
        resilienz: {
            label: "Resilienz-Modell",
            beschreibung: "Fokus auf Schutzfaktoren und Ressourcen",
            ebenen: {
                individuell: {
                    label: "Individuelle Schutzfaktoren",
                    faktoren: [
                        "Intelligenz",
                        "Positives Temperament",
                        "Selbstwirksamkeit",
                        "Problemlösefähigkeit",
                        "Emotionsregulation",
                        "Soziale Kompetenz",
                        "Hobbies/Interessen"
                    ]
                },
                familiär: {
                    label: "Familiäre Schutzfaktoren",
                    faktoren: [
                        "Sichere Bindung",
                        "Autoritative Erziehung",
                        "Familienzusammenhalt",
                        "Positive Eltern-Kind-Beziehung",
                        "Unterstützende Geschwister"
                    ]
                },
                sozial: {
                    label: "Soziale Schutzfaktoren",
                    faktoren: [
                        "Positive Peer-Beziehungen",
                        "Unterstützende Schule",
                        "Mentor außerhalb Familie",
                        "Vereinseinbindung",
                        "Positive Nachbarschaft"
                    ]
                }
            },
            prinzip: "Schutzfaktoren moderieren den Einfluss von Risikofaktoren"
        }
    }
};

// Make available globally
if (typeof window !== 'undefined') {
    window.CLINICAL_KNOWLEDGE = CLINICAL_KNOWLEDGE;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CLINICAL_KNOWLEDGE;
}
