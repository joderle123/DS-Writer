/**
 * PädoPsych Advisor - Clinical Engine
 * Das klinische Gehirn der App - Analysiert Falldaten und generiert Hypothesen
 */

const ClinicalEngine = {

    /**
     * Hauptfunktion: Analysiert die Falldaten und generiert Ergebnis
     * @param {Object} caseData - Die Falldaten aus dem Formular
     * @returns {Object} Analyseergebnis mit Hypothesen, Differential, Modell
     */
    analyze(caseData) {
        const hypothesen = this.generateHypothesen(caseData);
        const differential = this.differentialDiagnose(hypothesen, caseData);
        const modell = this.generateKlinischesModell(hypothesen, caseData);
        const bedienungsanleitung = this.generateBedienungsanleitung(hypothesen, caseData);

        return {
            hypothesen,           // Array sortiert nach Wahrscheinlichkeit
            differential,         // Differentialdiagnostische Überlegungen
            modell,              // Das klinische Erklärungsmodell
            bedienungsanleitung, // Praktische Handlungsempfehlungen
            caseData,            // Original-Daten für Referenz
            timestamp: new Date().toISOString()
        };
    },

    /**
     * Berechnet Hypothesen mit Scores basierend auf Symptomen und Kontext
     * @param {Object} caseData - Die Falldaten
     * @returns {Array} Sortierte Hypothesen mit Konfidenzwerten
     */
    generateHypothesen(caseData) {
        const results = [];
        const symptome = [...(caseData.symptome || []), ...(caseData.kontext || [])];
        const kontext = caseData.kontext || [];
        const hauptproblem = caseData.hauptproblem;

        // Relevante Hypothesen basierend auf Hauptproblem priorisieren
        const relevanteHypothesen = CLINICAL_KNOWLEDGE.hauptproblemRelevanz[hauptproblem] || [];

        for (const [id, hypo] of Object.entries(CLINICAL_KNOWLEDGE.hypothesen)) {
            let score = 0;
            let maxScore = 0;
            const evidenz = [];
            const gegenEvidenz = [];

            // Bonus für relevante Hypothesen basierend auf Hauptproblem
            if (relevanteHypothesen.includes(id)) {
                score += 2;
            }

            // Kernsymptome prüfen und gewichten
            for (const [gruppe, items] of Object.entries(hypo.kernSymptome)) {
                items.forEach(symptom => {
                    const gewicht = hypo.gewichtung?.[symptom] || 1;
                    maxScore += gewicht;

                    if (symptome.includes(symptom)) {
                        score += gewicht;
                        evidenz.push({
                            symptom,
                            text: this.symptomToText(symptom),
                            gewicht
                        });
                    }
                });
            }

            // Stärkende Faktoren aus Kontext
            hypo.staerkendeFaktoren?.forEach(faktor => {
                if (kontext.includes(faktor) || symptome.includes(faktor)) {
                    score += 1.5;
                    evidenz.push({
                        symptom: faktor,
                        text: this.kontextToText(faktor) + " (verstärkend)",
                        gewicht: 1.5
                    });
                }
            });

            // Schwächende Faktoren aus Kontext
            hypo.schwächendeFaktoren?.forEach(faktor => {
                if (kontext.includes(faktor)) {
                    score -= 1.5;
                    gegenEvidenz.push({
                        faktor,
                        text: this.kontextToText(faktor)
                    });
                }
            });

            // Konfidenz berechnen (0-100%)
            // Normalisieren auf maxScore, aber mindestens auf Basis der gefundenen Evidenz
            const basisScore = Math.max(maxScore, 8); // Mindestens 8 als Basis
            const konfidenz = Math.min(100, Math.max(0, Math.round((score / basisScore) * 100)));

            // Nur relevante Hypothesen (> 15% Konfidenz)
            if (konfidenz > 15 || evidenz.length >= 2) {
                results.push({
                    id,
                    name: hypo.name,
                    vollname: hypo.vollname,
                    kategorie: hypo.kategorie,
                    icd10: hypo.icd10,
                    konfidenz: Math.max(konfidenz, evidenz.length > 0 ? 20 : 0),
                    score: Math.round(score * 10) / 10,
                    evidenz: evidenz.map(e => e.text),
                    evidenzDetails: evidenz,
                    gegenEvidenz: gegenEvidenz.map(e => e.text),
                    interpretation: this.getInterpretation(hypo, konfidenz),
                    differentialDiagnosen: hypo.differentialDiagnosen || [],
                    wichtigerHinweis: hypo.wichtigerHinweis || null,
                    farbe: CLINICAL_KNOWLEDGE.kategoriefarben[hypo.kategorie] || '#6366f1'
                });
            }
        }

        // Sortieren nach Konfidenz (absteigend)
        return results.sort((a, b) => b.konfidenz - a.konfidenz);
    },

    /**
     * Wählt passende Interpretation basierend auf Konfidenz-Level
     * @param {Object} hypo - Die Hypothese
     * @param {number} konfidenz - Konfidenzwert 0-100
     * @returns {string} Passender Interpretationstext
     */
    getInterpretation(hypo, konfidenz) {
        if (konfidenz >= 60) return hypo.interpretation.hoch;
        if (konfidenz >= 35) return hypo.interpretation.mittel;
        return hypo.interpretation.niedrig;
    },

    /**
     * Generiert differentialdiagnostische Überlegungen
     * @param {Array} hypothesen - Die berechneten Hypothesen
     * @param {Object} caseData - Die Falldaten
     * @returns {Array} Differentialdiagnostische Überlegungen
     */
    differentialDiagnose(hypothesen, caseData) {
        const ueberlegungen = [];
        const hypoIds = hypothesen.map(h => h.id);

        // Top 2 Hypothesen vergleichen
        if (hypothesen.length >= 2) {
            const h1 = hypothesen[0];
            const h2 = hypothesen[1];

            // Prüfe ob sie sich in den Differentialdiagnosen überschneiden
            if (h1.differentialDiagnosen.includes(h2.id) || h2.differentialDiagnosen.includes(h1.id)) {
                ueberlegungen.push({
                    typ: "abgrenzung",
                    icon: "⚖️",
                    titel: `${h1.name} vs. ${h2.name}`,
                    text: `Diese Störungsbilder können sich ähnlich präsentieren. ${this.getDifferentialText(h1.id, h2.id)}`
                });
            }
        }

        // ADHS vs Trauma - wichtige Differenzierung
        if (hypoIds.includes('adhs') && hypoIds.includes('trauma')) {
            ueberlegungen.push({
                typ: "wichtig",
                icon: "⚠️",
                titel: "ADHS vs. Trauma",
                text: "Traumatisierte Kinder zeigen oft ADHS-ähnliche Symptome (Unruhe, Konzentrationsprobleme). " +
                      "ENTSCHEIDEND: Gab es ein auslösendes Ereignis? Bestanden die Symptome schon VOR dem Ereignis?"
            });
        }

        // Angst und Depression Komorbidität
        if (hypoIds.includes('angst') && hypoIds.includes('depression')) {
            ueberlegungen.push({
                typ: "komorbidität",
                icon: "🔗",
                titel: "Komorbidität Angst/Depression",
                text: "Angst und Depression treten bei Kindern häufig gemeinsam auf (Komorbidität ca. 30-50%). " +
                      "Beide Aspekte sollten in der Behandlung berücksichtigt werden."
            });
        }

        // ODD als Symptom - nicht als primäre Diagnose
        const oddHypo = hypothesen.find(h => h.id === 'odd');
        if (oddHypo && oddHypo.konfidenz > 40) {
            ueberlegungen.push({
                typ: "hinweis",
                icon: "💡",
                titel: "Opposition als Symptom",
                text: "WICHTIG: Oppositionelles Verhalten ist oft ein SYMPTOM, nicht die Ursache. " +
                      "Dahinter können ADHS, Trauma, Bindungsprobleme, Überforderung oder unerkannte Teilleistungsstörungen stecken."
            });
        }

        // Autismus-Hinweis für spezialisierte Diagnostik
        const asdHypo = hypothesen.find(h => h.id === 'asd');
        if (asdHypo && asdHypo.konfidenz > 25) {
            ueberlegungen.push({
                typ: "empfehlung",
                icon: "🔬",
                titel: "Spezialisierte Diagnostik empfohlen",
                text: "Bei Verdacht auf Autismus-Spektrum-Störung ist eine spezialisierte Diagnostik unerlässlich. " +
                      "Screening-Ergebnisse allein reichen für eine Diagnose NICHT aus. " +
                      "Bei Mädchen wird Autismus häufig übersehen (Maskierung/Camouflaging)."
            });
        }

        // Bindung bei jungen Kindern
        const bindungHypo = hypothesen.find(h => h.id === 'bindung');
        if (bindungHypo && bindungHypo.konfidenz > 30 && parseInt(caseData.grunddaten?.alter) <= 8) {
            ueberlegungen.push({
                typ: "entwicklung",
                icon: "👶",
                titel: "Bindung als Entwicklungsaufgabe",
                text: "Bei jüngeren Kindern ist die Bindungsentwicklung noch im Fluss. " +
                      "Interventionen sollten primär die Bezugspersonen einbeziehen und Beziehungssicherheit fördern."
            });
        }

        // Trauma-sensitives Vorgehen
        const traumaHypo = hypothesen.find(h => h.id === 'trauma');
        if (traumaHypo && traumaHypo.konfidenz > 35) {
            ueberlegungen.push({
                typ: "vorsicht",
                icon: "🛡️",
                titel: "Traumasensibles Vorgehen",
                text: "Bei Traumaverdacht: Keine konfrontativen Techniken ohne stabile therapeutische Beziehung! " +
                      "Stabilisierung und Sicherheit haben Priorität vor Aufarbeitung."
            });
        }

        // Depression bei Kindern - Reizbarkeit beachten
        const depHypo = hypothesen.find(h => h.id === 'depression');
        if (depHypo && depHypo.konfidenz > 35) {
            ueberlegungen.push({
                typ: "altersbesonderheit",
                icon: "📌",
                titel: "Depression bei Kindern",
                text: "Bei Kindern und Jugendlichen äußert sich Depression häufig als Reizbarkeit, Wutausbrüche " +
                      "und körperliche Beschwerden - nicht unbedingt als 'klassische' Traurigkeit. " +
                      "Suizidalität muss immer exploriert werden!"
            });
        }

        return ueberlegungen;
    },

    /**
     * Generiert das klinische Erklärungsmodell (bio-psycho-sozial)
     * @param {Array} hypothesen - Die berechneten Hypothesen
     * @param {Object} caseData - Die Falldaten
     * @returns {Object} Das klinische Modell
     */
    generateKlinischesModell(hypothesen, caseData) {
        const name = caseData.grunddaten?.name || "Das Kind";
        const topHypo = hypothesen[0];
        const alter = caseData.grunddaten?.alter;
        const kontext = caseData.kontext || [];
        const symptome = caseData.symptome || [];

        // Prädisponierende Faktoren (Vulnerabilitäten)
        const praedisponierend = [];
        if (kontext.includes('familiaer')) praedisponierend.push("Familiäre Vorbelastung (genetisch/psychisch)");
        if (kontext.includes('seit_immer')) praedisponierend.push("Früher Beginn der Symptomatik");
        if (symptome.includes('vernachlaessigung')) praedisponierend.push("Vernachlässigungserfahrungen");

        // Auslösende Faktoren (Trigger)
        const ausloesend = [];
        if (kontext.includes('nach_ereignis')) ausloesend.push("Belastendes Lebensereignis");
        if (symptome.includes('schulwechsel')) ausloesend.push("Schulwechsel / Umbruchssituation");
        if (symptome.includes('elterntrennung')) ausloesend.push("Trennung der Eltern");
        if (symptome.includes('verlust_trauer')) ausloesend.push("Verlust / Trauererfahrung");

        // Aufrechterhaltende Faktoren
        const aufrechterhaltend = [];
        if (symptome.includes('haeusliche_konflikte')) aufrechterhaltend.push("Anhaltende familiäre Konflikte");
        if (hypothesen.some(h => h.id === 'emotionsregulation' && h.konfidenz > 30)) {
            aufrechterhaltend.push("Fehlende Emotionsregulationsstrategien");
        }
        if (kontext.includes('nur_schule') || kontext.includes('nur_zuhause')) {
            aufrechterhaltend.push("Situationsspezifische Verstärker");
        }
        if (symptome.includes('wird_gemobbt')) aufrechterhaltend.push("Mobbing-Erfahrungen");

        // Protektive Faktoren (was könnte helfen)
        const protektiv = [];
        if (!symptome.includes('wenig_freunde')) protektiv.push("Vorhandene Peer-Beziehungen");
        if (!symptome.includes('haeusliche_konflikte')) protektiv.push("Stabile familiäre Situation");
        if (caseData.freitext && caseData.freitext.toLowerCase().includes('stärk')) {
            protektiv.push("Vorhandene Ressourcen/Stärken");
        }

        return {
            zusammenfassung: this.generateZusammenfassung(name, alter, hypothesen, caseData),

            biopsychosozial: {
                praedisponierend: praedisponierend.length > 0 ? praedisponierend : ["Keine spezifischen Faktoren identifiziert"],
                ausloesend: ausloesend.length > 0 ? ausloesend : ["Unklar / keine eindeutigen Auslöser erkennbar"],
                aufrechterhaltend: aufrechterhaltend.length > 0 ? aufrechterhaltend : ["Noch zu explorieren"],
                protektiv: protektiv.length > 0 ? protektiv : ["Ressourcen sollten exploriert werden"]
            },

            haupthypothese: topHypo ? {
                id: topHypo.id,
                name: topHypo.vollname,
                konfidenz: topHypo.konfidenz,
                erklaerung: topHypo.interpretation,
                icd10: topHypo.icd10,
                farbe: topHypo.farbe
            } : null,

            nebendiagnosen: hypothesen.slice(1, 4).map(h => ({
                id: h.id,
                name: h.name,
                konfidenz: h.konfidenz,
                farbe: h.farbe
            })),

            symptomCluster: this.clusterSymptome(caseData.symptome || [])
        };
    },

    /**
     * Gruppiert Symptome nach Kategorien
     * @param {Array} symptome - Die ausgewählten Symptome
     * @returns {Object} Symptome gruppiert nach Kategorie
     */
    clusterSymptome(symptome) {
        const cluster = {
            aufmerksamkeit: [],
            emotion: [],
            sozial: [],
            verhalten: [],
            belastung: []
        };

        const mapping = {
            aufmerksamkeit: ['nicht_stillsitzen', 'unterbricht', 'verliert_sachen', 'hoert_nicht_zu', 'beendet_nicht', 'ablenkbar'],
            emotion: ['wutausbrueche', 'frustriert', 'aengstlich', 'traurig', 'stimmungsschwankungen', 'weint_viel'],
            sozial: ['wenig_freunde', 'wird_gemobbt', 'mobbt_andere', 'spielt_allein', 'soziale_regeln', 'kein_blickkontakt'],
            verhalten: ['verweigert', 'streitet', 'provoziert', 'handgreiflich', 'zerstoert', 'luegt'],
            belastung: ['elterntrennung', 'verlust_trauer', 'haeusliche_konflikte', 'schulwechsel', 'gewalterfahrung', 'vernachlaessigung']
        };

        for (const [kategorie, items] of Object.entries(mapping)) {
            cluster[kategorie] = symptome.filter(s => items.includes(s)).map(s => this.symptomToText(s));
        }

        return cluster;
    },

    /**
     * Generiert Fließtext-Zusammenfassung des Falls
     * @param {string} name - Name/Pseudonym des Kindes
     * @param {string} alter - Alter des Kindes
     * @param {Array} hypothesen - Die berechneten Hypothesen
     * @param {Object} caseData - Die Falldaten
     * @returns {string} Zusammenfassender Text
     */
    generateZusammenfassung(name, alter, hypothesen, caseData) {
        const hauptproblem = caseData.hauptproblem;
        const topHypo = hypothesen[0];
        const geschlecht = caseData.grunddaten?.geschlecht;

        // Pronomen basierend auf Geschlecht
        const pronomen = geschlecht === 'weiblich' ? 'Sie' : geschlecht === 'maennlich' ? 'Er' : 'Das Kind';

        let text = `${name || 'Das Kind'}`;
        if (alter) text += ` (${alter} Jahre)`;
        text += ` wird vorgestellt wegen `;

        // Hauptproblem in Fließtext
        const problemText = {
            'externalisierend': 'externalisierender Verhaltensauffälligkeiten (Wut, Aggression, Opposition)',
            'internalisierend': 'internalisierender Symptomatik (Rückzug, Ängste, Traurigkeit)',
            'aufmerksamkeit': 'Aufmerksamkeits- und Konzentrationsproblemen',
            'sozial': 'Schwierigkeiten im sozialen Bereich',
            'schulisch': 'schulischer Problematik'
        };
        text += problemText[hauptproblem] || 'verschiedener Auffälligkeiten';
        text += '. ';

        // Symptomzusammenfassung
        const symptomCount = (caseData.symptome || []).length;
        if (symptomCount > 0) {
            text += `Insgesamt wurden ${symptomCount} Symptome identifiziert. `;
        }

        // Haupthypothese
        if (topHypo) {
            text += `Die klinische Analyse ergibt mit ${topHypo.konfidenz}% Konfidenz Hinweise auf ${topHypo.vollname}`;
            if (topHypo.icd10) text += ` (${topHypo.icd10})`;
            text += '. ';
        }

        // Nebendiagnosen
        if (hypothesen.length > 1) {
            const nebendiagnosen = hypothesen.slice(1, 3).map(h => h.name);
            text += `Differentialdiagnostisch sind auch ${nebendiagnosen.join(' und ')} zu erwägen. `;
        }

        // Kontextfaktoren
        const kontext = caseData.kontext || [];
        if (kontext.includes('seit_immer')) {
            text += `Die Symptomatik besteht laut Angaben seit früher Kindheit. `;
        } else if (kontext.includes('nach_ereignis')) {
            text += `Die Symptome haben nach einem belastenden Ereignis begonnen. `;
        }

        if (kontext.includes('ueberall')) {
            text += `${pronomen} zeigt die Verhaltensweisen situationsübergreifend. `;
        } else if (kontext.includes('nur_schule')) {
            text += `Die Symptome treten primär im schulischen Kontext auf. `;
        } else if (kontext.includes('nur_zuhause')) {
            text += `Die Symptome zeigen sich vorwiegend im häuslichen Umfeld. `;
        }

        return text;
    },

    /**
     * Konvertiert Symptom-ID zu lesbarem Text
     * @param {string} symptom - Symptom-ID
     * @returns {string} Lesbarer Text
     */
    symptomToText(symptom) {
        return CLINICAL_KNOWLEDGE.symptomLabels[symptom] || symptom;
    },

    /**
     * Konvertiert Kontext-ID zu lesbarem Text
     * @param {string} kontext - Kontext-ID
     * @returns {string} Lesbarer Text
     */
    kontextToText(kontext) {
        return CLINICAL_KNOWLEDGE.kontextLabels[kontext] || kontext;
    },

    /**
     * Generiert differentialdiagnostischen Vergleichstext für zwei Hypothesen
     * @param {string} id1 - ID der ersten Hypothese
     * @param {string} id2 - ID der zweiten Hypothese
     * @returns {string} Vergleichstext
     */
    getDifferentialText(id1, id2) {
        const pairs = {
            'adhs_angst': 'Bei Angst ist die Unruhe situativ auf angstauslösende Situationen begrenzt, bei ADHS durchgängig und situationsübergreifend.',
            'adhs_trauma': 'Traumasymptome beginnen typischerweise nach einem Ereignis, ADHS-Symptome bestehen von früher Kindheit an.',
            'angst_depression': 'Häufig komorbid auftretend. Angst fokussiert auf Zukunftssorgen, Depression auf Hoffnungslosigkeit.',
            'angst_asd': 'Bei ASD entstehen soziale Schwierigkeiten durch Verständnisprobleme sozialer Regeln, nicht primär durch Angst.',
            'asd_angst': 'Bei ASD entstehen soziale Schwierigkeiten durch Verständnisprobleme sozialer Regeln, nicht primär durch Angst.',
            'odd_adhs': 'Bei ADHS ist oppositionelles Verhalten oft Folge von Frustration und Impulsivität, nicht primär intentional.',
            'adhs_odd': 'Bei ADHS ist oppositionelles Verhalten oft Folge von Frustration und Impulsivität, nicht primär intentional.',
            'odd_trauma': 'Oppositionelles Verhalten kann ein Trauma-Bewältigungsversuch sein (Kontrolle zurückgewinnen).',
            'trauma_odd': 'Oppositionelles Verhalten kann ein Trauma-Bewältigungsversuch sein (Kontrolle zurückgewinnen).',
            'bindung_trauma': 'Bindungsstörungen und Trauma überschneiden sich häufig, besonders bei frühen Beziehungstraumata.',
            'trauma_bindung': 'Bindungsstörungen und Trauma überschneiden sich häufig, besonders bei frühen Beziehungstraumata.',
            'depression_trauma': 'Depressive Symptome können Folge einer Traumatisierung sein. Trauma-Screening empfohlen.',
            'trauma_depression': 'Depressive Symptome können Folge einer Traumatisierung sein. Trauma-Screening empfohlen.',
            'asd_adhs': 'ADHS und Autismus können komorbid auftreten. Bei ASD: eher sensorische Überlastung, bei ADHS: eher Impulssteuerung.',
            'adhs_asd': 'ADHS und Autismus können komorbid auftreten. Bei ASD: eher sensorische Überlastung, bei ADHS: eher Impulssteuerung.',
            'emotionsregulation_adhs': 'Emotionale Dysregulation ist ein häufiges Begleitsymptom bei ADHS.',
            'adhs_emotionsregulation': 'Emotionale Dysregulation ist ein häufiges Begleitsymptom bei ADHS.',
            'emotionsregulation_odd': 'Oppositionelles Verhalten kann aus mangelnder Emotionsregulation resultieren.',
            'odd_emotionsregulation': 'Oppositionelles Verhalten kann aus mangelnder Emotionsregulation resultieren.'
        };

        // Beide Reihenfolgen prüfen
        const key1 = `${id1}_${id2}`;
        const key2 = `${id2}_${id1}`;

        return pairs[key1] || pairs[key2] || 'Eine sorgfältige differentialdiagnostische Anamnese ist erforderlich.';
    },

    // ============================================================
    // BEDIENUNGSANLEITUNG - Praktische Handlungsempfehlungen
    // ============================================================

    /**
     * Generiert die "Bedienungsanleitung" für das Kind
     * @param {Array} hypothesen - Die berechneten Hypothesen
     * @param {Object} caseData - Die Falldaten
     * @returns {Object} Komplette Bedienungsanleitung
     */
    generateBedienungsanleitung(hypothesen, caseData) {
        const anleitung = {
            grundhaltung: this.getGrundhaltung(hypothesen),

            ampelsystem: {
                gruen: this.getGruenSignale(hypothesen),
                gelb: this.getGelbSignale(hypothesen),
                rot: this.getRotSignale(hypothesen)
            },

            situationsrezepte: this.getSituationsrezepte(hypothesen, caseData),

            dosAndDonts: {
                tuDas: this.getTuDas(hypothesen),
                lassDas: this.getLassDas(hypothesen)
            },

            notfallplan: this.getNotfallplan(hypothesen),

            beziehungstipps: this.getBeziehungstipps(hypothesen),

            elterninfo: this.getElterninfo(hypothesen)
        };

        return anleitung;
    },

    /**
     * Grundhaltung - Die wichtigste Botschaft für den Umgang
     * @param {Array} hypothesen - Die berechneten Hypothesen
     * @returns {Object} Leitsatz, Erklärung und Mantra
     */
    getGrundhaltung(hypothesen) {
        const topId = hypothesen[0]?.id;

        const haltungen = {
            adhs: {
                leitsatz: "Struktur geben, nicht strafen",
                erklaerung: "Das Kind KANN nicht, es WILL nicht nicht. Das Gehirn arbeitet anders - es braucht externe Struktur, die es selbst noch nicht aufbauen kann.",
                mantra: "Kurz, klar, konsequent - und immer mit Beziehung.",
                icon: "🎯"
            },
            angst: {
                leitsatz: "Sicherheit geben, mutig machen",
                erklaerung: "Das Kind erlebt echte Angst. Bagatellisieren verstärkt sie. Das Kind braucht Verständnis UND sanfte Ermutigung zu kleinen Mutschritten.",
                mantra: "Ich sehe deine Angst. Ich bin bei dir. Du schaffst den nächsten kleinen Schritt.",
                icon: "🛡️"
            },
            depression: {
                leitsatz: "Dabeibleiben, nicht aufgeben",
                erklaerung: "Depression bei Kindern zeigt sich oft als Reizbarkeit, nicht als Traurigkeit. Das Kind braucht Geduld, Aktivierung und das Gefühl, dass es wertvoll ist.",
                mantra: "Du bist wichtig. Ich gebe nicht auf. Wir machen kleine Schritte zusammen.",
                icon: "💙"
            },
            odd: {
                leitsatz: "Verbindung vor Korrektur",
                erklaerung: "Hinter Opposition steckt meist ein unerfülltes Bedürfnis. Machtkämpfe eskalieren. Das Kind braucht Wahlmöglichkeiten und das Gefühl von Kontrolle.",
                mantra: "Ich kämpfe nicht gegen dich, sondern für dich.",
                icon: "🤝"
            },
            trauma: {
                leitsatz: "Sicherheit, Sicherheit, Sicherheit",
                erklaerung: "Das Nervensystem ist im Überlebensmodus. Das Kind reagiert auf Trigger, nicht auf Sie persönlich. Vorhersehbarkeit und Ruhe sind heilsam.",
                mantra: "Du bist hier sicher. Ich bin berechenbar. Nichts Schlimmes passiert.",
                icon: "🏠"
            },
            asd: {
                leitsatz: "Klar, konkret, visuell",
                erklaerung: "Das Kind denkt anders, nicht schlechter. Implizite Regeln sind unsichtbar. Es braucht explizite Erklärungen und visuelle Unterstützung.",
                mantra: "Ich sage genau, was ich meine. Ich zeige, was ich erwarte.",
                icon: "📋"
            },
            bindung: {
                leitsatz: "Beziehung ist die Intervention",
                erklaerung: "Das Kind hat gelernt, dass Beziehungen unsicher sind. Es testet Sie. Bleiben Sie beständig, auch wenn es Sie wegstößt.",
                mantra: "Ich bleibe. Auch wenn du mich testest. Ich bleibe.",
                icon: "❤️"
            },
            emotionsregulation: {
                leitsatz: "Co-Regulation vor Selbstregulation",
                erklaerung: "Das Kind kann sich nicht selbst beruhigen, weil es das noch nicht gelernt hat. Es braucht SIE als externen Regler.",
                mantra: "Ich bleibe ruhig, damit du dich an meiner Ruhe orientieren kannst.",
                icon: "🌊"
            }
        };

        return haltungen[topId] || haltungen.emotionsregulation;
    },

    /**
     * Grüne Ampel - Kind ist stabil
     * @param {Array} hypothesen - Die berechneten Hypothesen
     * @returns {Array} Positive Signale
     */
    getGruenSignale(hypothesen) {
        const signale = [
            { signal: "Kind ist ansprechbar und reagiert auf Ansprache", icon: "✓" },
            { signal: "Kann sich an Absprachen halten", icon: "✓" },
            { signal: "Zeigt Interesse an Aktivitäten", icon: "✓" },
            { signal: "Interagiert positiv mit anderen", icon: "✓" },
            { signal: "Kann Frustrationen aushalten", icon: "✓" }
        ];

        const topId = hypothesen[0]?.id;

        if (topId === 'adhs') {
            signale.push({ signal: "Kann bei einer Aufgabe bleiben", icon: "✓" });
        }
        if (topId === 'angst') {
            signale.push({ signal: "Traut sich an neue Situationen", icon: "✓" });
        }
        if (topId === 'asd') {
            signale.push({ signal: "Akzeptiert Veränderungen im Ablauf", icon: "✓" });
        }

        return signale;
    },

    /**
     * Gelbe Ampel - Vorsicht, Eskalation möglich
     * @param {Array} hypothesen - Die berechneten Hypothesen
     * @returns {Array} Warnsignale
     */
    getGelbSignale(hypothesen) {
        const signale = [
            { signal: "Zunehmende Unruhe", icon: "⚡" },
            { signal: "Kürzere Zündschnur", icon: "⚡" },
            { signal: "Beginnt zu diskutieren/verweigern", icon: "⚡" }
        ];

        const topId = hypothesen[0]?.id;

        if (topId === 'adhs') {
            signale.push({ signal: "Motorik nimmt zu, zappelt mehr", icon: "⚡" });
            signale.push({ signal: "Hört nicht mehr richtig zu", icon: "⚡" });
            signale.push({ signal: "Macht viele Flüchtigkeitsfehler", icon: "⚡" });
        }
        if (topId === 'angst') {
            signale.push({ signal: "Zieht sich zurück, wird still", icon: "⚡" });
            signale.push({ signal: "Klagt über Bauch-/Kopfschmerzen", icon: "⚡" });
            signale.push({ signal: "Sucht vermehrt Nähe/Rückversicherung", icon: "⚡" });
        }
        if (topId === 'depression') {
            signale.push({ signal: "Wird gereizter als sonst", icon: "⚡" });
            signale.push({ signal: "Zieht sich von Aktivitäten zurück", icon: "⚡" });
        }
        if (topId === 'odd') {
            signale.push({ signal: "Verweigert erste Aufforderungen", icon: "⚡" });
            signale.push({ signal: "Wird provokant/sarkastisch", icon: "⚡" });
            signale.push({ signal: "Testet Grenzen aus", icon: "⚡" });
        }
        if (topId === 'trauma') {
            signale.push({ signal: "Wirkt abwesend, starrt", icon: "⚡" });
            signale.push({ signal: "Schreckhafter als sonst", icon: "⚡" });
            signale.push({ signal: "Klammert oder meidet plötzlich", icon: "⚡" });
        }
        if (topId === 'asd') {
            signale.push({ signal: "Stimming nimmt zu", icon: "⚡" });
            signale.push({ signal: "Wird rigider, besteht auf Routinen", icon: "⚡" });
        }
        if (topId === 'emotionsregulation') {
            signale.push({ signal: "Stimme wird lauter", icon: "⚡" });
            signale.push({ signal: "Atmet schneller", icon: "⚡" });
        }

        return signale;
    },

    /**
     * Rote Ampel - Eskalation, Krise
     * @param {Array} hypothesen - Die berechneten Hypothesen
     * @returns {Array} Alarmsignale
     */
    getRotSignale(hypothesen) {
        return [
            { signal: "Kontrollverlust (schreit, weint unkontrolliert)", icon: "🔴" },
            { signal: "Körperliche Anspannung (Fäuste, starre Haltung)", icon: "🔴" },
            { signal: "Verbale Aggression oder Drohungen", icon: "🔴" },
            { signal: "Ignoriert jede Ansprache komplett", icon: "🔴" },
            { signal: "Fluchtverhalten oder Erstarren", icon: "🔴" },
            { signal: "Wirft mit Gegenständen", icon: "🔴" },
            { signal: "Selbst- oder fremdverletzendes Verhalten", icon: "🔴" }
        ];
    },

    /**
     * Situations-Rezepte - Konkrete Wenn-Dann-Anleitungen
     * @param {Array} hypothesen - Die berechneten Hypothesen
     * @param {Object} caseData - Die Falldaten
     * @returns {Array} Situationsrezepte
     */
    getSituationsrezepte(hypothesen, caseData) {
        const rezepte = [];
        const topId = hypothesen[0]?.id;
        const hypoIds = hypothesen.map(h => h.id);

        // Basis-Rezepte (für alle)
        rezepte.push({
            situation: "Kind verweigert eine Aufgabe",
            icon: "🚫",
            reaktion: [
                "NICHT: Sofort Druck erhöhen oder drohen",
                "STATTDESSEN: Kurz innehalten, durchatmen",
                "Wahlmöglichkeit anbieten: 'Möchtest du mit X oder Y anfangen?'",
                "Aufgabe in kleinere Schritte teilen",
                "Ersten Schritt gemeinsam machen"
            ]
        });

        rezepte.push({
            situation: "Kind wird wütend / eskaliert",
            icon: "😠",
            reaktion: [
                "NICHT: Laut werden, anfassen, Publikum",
                "STATTDESSEN: Eigene Stimme SENKEN (nicht heben!)",
                "Raum geben, nicht bedrängen (1-2 Meter Abstand)",
                "Wenig Worte: 'Ich sehe, dass du wütend bist.'",
                "Warten bis Erregung sinkt (20-30 Min möglich)",
                "ERST DANN: Kurz besprechen, nicht moralisieren"
            ]
        });

        // ADHS-spezifische Rezepte
        if (topId === 'adhs' || hypoIds.includes('adhs')) {
            rezepte.push({
                situation: "Kind kann nicht stillsitzen",
                icon: "🏃",
                reaktion: [
                    "NICHT: 'Sitz still!' (unmöglich für das Kind)",
                    "STATTDESSEN: Bewegung ERLAUBEN (Wackelkissen, Stehpult)",
                    "Bewegungspause einbauen (alle 15-20 Min)",
                    "Aufgabe mit Bewegung verbinden",
                    "Kurze Arbeitseinheiten, dann Pause"
                ]
            });

            rezepte.push({
                situation: "Kind hört nicht zu / ist abgelenkt",
                icon: "👂",
                reaktion: [
                    "Blickkontakt herstellen (freundlich, auf Augenhöhe)",
                    "Namen sagen, PAUSE, dann erst Anweisung",
                    "Nur EINEN Auftrag auf einmal geben",
                    "Kind die Anweisung wiederholen lassen",
                    "Visuell unterstützen (zeigen, aufschreiben, Piktogramme)"
                ]
            });

            rezepte.push({
                situation: "Kind macht ständig Flüchtigkeitsfehler",
                icon: "✏️",
                reaktion: [
                    "NICHT: 'Konzentrier dich!' (es versucht es bereits)",
                    "Checklisten einführen (visuell)",
                    "Aufgaben in kleinere Häppchen teilen",
                    "Gemeinsam kontrollieren, nicht allein",
                    "Fehler sachlich korrigieren, nicht schimpfen"
                ]
            });
        }

        // Angst-spezifische Rezepte
        if (topId === 'angst' || hypoIds.includes('angst')) {
            rezepte.push({
                situation: "Kind will nicht in die Schule / vermeidet",
                icon: "🏫",
                reaktion: [
                    "NICHT: Zwingen ODER Vermeidung komplett erlauben",
                    "Angst validieren: 'Das ist schwer für dich'",
                    "KLEINEN Schritt vereinbaren (nicht alles auf einmal)",
                    "Erfolg feiern, egal wie klein",
                    "Langsam steigern, nicht überfordern"
                ]
            });

            rezepte.push({
                situation: "Kind weint / klammert bei Trennung",
                icon: "😢",
                reaktion: [
                    "NICHT: Wegschieben, ungeduldig werden, schleichen",
                    "STATTDESSEN: Kurzes, klares Abschiedsritual",
                    "Ruhig: 'Ich komme um [Zeit] wieder. Du schaffst das.'",
                    "Übergangsobjekt mitgeben (Foto, Kuscheltier)",
                    "Verabschiedung KURZ halten, nicht hinauszögern"
                ]
            });

            rezepte.push({
                situation: "Kind hat Panikattacke / hyperventiliert",
                icon: "😰",
                reaktion: [
                    "Ruhe ausstrahlen (Ihr Nervensystem beruhigt seines)",
                    "Erdung: 'Schau mich an. Du bist hier, du bist sicher.'",
                    "Langsam atmen vormachen: 4 Sek ein, 6 Sek aus",
                    "5-4-3-2-1 Technik: 5 Dinge sehen, 4 hören, 3 fühlen...",
                    "Nicht fragen, was los ist (kann nicht antworten)"
                ]
            });
        }

        // Trauma-spezifische Rezepte
        if (topId === 'trauma' || hypoIds.includes('trauma')) {
            rezepte.push({
                situation: "Kind wirkt 'weg' / dissoziiert",
                icon: "🌫️",
                reaktion: [
                    "NICHT: Erschrecken, plötzlich anfassen",
                    "Ruhig, langsam ansprechen, Name nennen",
                    "Orientierung geben: 'Du bist in [Ort]. Es ist [Tag]. Du bist sicher.'",
                    "Sensorische Erdung anbieten (kaltes Wasser, Eiswürfel, Duft)",
                    "KEINE Fragen, KEINE Forderungen stellen"
                ]
            });

            rezepte.push({
                situation: "Kind reagiert extrem auf harmlosen Auslöser",
                icon: "⚡",
                reaktion: [
                    "Verstehen: Das ist ein TRIGGER, keine Überreaktion",
                    "Sicherheit signalisieren, nicht rationalisieren",
                    "Kind aus der Situation herausnehmen wenn möglich",
                    "Später: Trigger gemeinsam identifizieren",
                    "Trigger vermeiden oder langsam desensibilisieren"
                ]
            });
        }

        // ODD-spezifische Rezepte
        if (topId === 'odd' || hypoIds.includes('odd')) {
            rezepte.push({
                situation: "Kind provoziert / sucht Machtkampf",
                icon: "⚔️",
                reaktion: [
                    "NICHT: Einsteigen in den Kampf (Sie verlieren immer!)",
                    "STATTDESSEN: Ruhig bleiben, nicht persönlich nehmen",
                    "Wahlmöglichkeit geben: 'Du kannst X oder Y. Du entscheidest.'",
                    "Konsequenz ankündigen, EINMAL, sachlich",
                    "Dann: TUN, nicht reden. Konsequenz ruhig umsetzen.",
                    "Später: Neustart anbieten, NICHT nachtragen"
                ]
            });

            rezepte.push({
                situation: "Kind diskutiert endlos / will letztes Wort",
                icon: "💬",
                reaktion: [
                    "NICHT: Endlos erklären oder rechtfertigen",
                    "Kurze Begründung, EINMAL",
                    "'Ich höre, dass du das anders siehst. Meine Entscheidung steht.'",
                    "Gesprächsangebot für SPÄTER machen",
                    "Thema wechseln oder weggehen"
                ]
            });
        }

        // ASD-spezifische Rezepte
        if (topId === 'asd' || hypoIds.includes('asd')) {
            rezepte.push({
                situation: "Kind ist überfordert von Veränderung",
                icon: "🔄",
                reaktion: [
                    "Veränderungen VORHER ankündigen (mit Zeitpuffer)",
                    "Visuell darstellen (Tagesplan, Timer)",
                    "Übergangsobjekt/-ritual anbieten",
                    "Wenn möglich: Veränderung schrittweise einführen",
                    "Zeit zum Verarbeiten geben"
                ]
            });

            rezepte.push({
                situation: "Kind versteht eine soziale Situation nicht",
                icon: "❓",
                reaktion: [
                    "NICHT: 'Das ist doch klar!' (ist es nicht)",
                    "Explizit erklären, was passiert ist",
                    "Konkret sagen, was erwartet wird",
                    "Social Story nutzen (schriftlich/bildlich)",
                    "Üben, nicht nur erklären"
                ]
            });
        }

        // Emotionsregulation-spezifische Rezepte
        if (topId === 'emotionsregulation' || hypoIds.includes('emotionsregulation')) {
            rezepte.push({
                situation: "Kind ist frustriert und kann sich nicht beruhigen",
                icon: "🌋",
                reaktion: [
                    "NICHT: 'Beruhig dich!' (kann es noch nicht allein)",
                    "Selbst demonstrativ ruhig bleiben (Vorbild)",
                    "Präsent sein, wenig Worte",
                    "Körperliche Unterstützung anbieten (wenn erwünscht)",
                    "NACH Beruhigung: Strategie besprechen für nächstes Mal"
                ]
            });
        }

        return rezepte;
    },

    /**
     * Do's - Was Sie tun sollten
     * @param {Array} hypothesen - Die berechneten Hypothesen
     * @returns {Array} Empfohlene Verhaltensweisen
     */
    getTuDas(hypothesen) {
        const todos = [
            { tipp: "Ruhig bleiben (Ihr Nervensystem reguliert seines)", icon: "🧘" },
            { tipp: "Beziehung priorisieren vor Korrektur", icon: "❤️" },
            { tipp: "Kleine Erfolge feiern und benennen", icon: "🎉" },
            { tipp: "Vorhersehbar und berechenbar sein", icon: "📅" },
            { tipp: "Konsequent sein - aber mit Wärme", icon: "🎯" }
        ];

        const topId = hypothesen[0]?.id;
        const hypoIds = hypothesen.map(h => h.id);

        if (topId === 'adhs' || hypoIds.includes('adhs')) {
            todos.push({ tipp: "Kurze, klare Anweisungen (1 Sache auf einmal)", icon: "💬" });
            todos.push({ tipp: "Visuelle Unterstützung nutzen (Bilder, Listen)", icon: "📋" });
            todos.push({ tipp: "Bewegungspausen einbauen", icon: "🏃" });
            todos.push({ tipp: "SOFORT nach positivem Verhalten loben", icon: "👍" });
            todos.push({ tipp: "Struktur und Routinen etablieren", icon: "🔄" });
        }

        if (topId === 'angst' || hypoIds.includes('angst')) {
            todos.push({ tipp: "Ängste ernst nehmen, NICHT bagatellisieren", icon: "👂" });
            todos.push({ tipp: "Kleine Mutschritte ermöglichen und feiern", icon: "🦁" });
            todos.push({ tipp: "Sicherheit vermitteln durch Präsenz", icon: "🏠" });
            todos.push({ tipp: "Bewältigungsstrategien gemeinsam üben", icon: "💪" });
        }

        if (topId === 'depression' || hypoIds.includes('depression')) {
            todos.push({ tipp: "Aktivitäten anregen, aber nicht erzwingen", icon: "🌱" });
            todos.push({ tipp: "Erfolge und Stärken sichtbar machen", icon: "⭐" });
            todos.push({ tipp: "Suizidalität ansprechen wenn nötig", icon: "🆘" });
        }

        if (topId === 'odd' || hypoIds.includes('odd')) {
            todos.push({ tipp: "Wahlmöglichkeiten geben (Kontrolle teilen)", icon: "🔀" });
            todos.push({ tipp: "Positive Aufmerksamkeit für gutes Verhalten", icon: "👀" });
            todos.push({ tipp: "Natürliche Konsequenzen nutzen", icon: "⚖️" });
        }

        if (topId === 'trauma' || hypoIds.includes('trauma')) {
            todos.push({ tipp: "Trigger identifizieren und vermeiden/vorbereiten", icon: "🎯" });
            todos.push({ tipp: "Immer ankündigen, was als nächstes kommt", icon: "📢" });
            todos.push({ tipp: "Wahlmöglichkeiten geben (Kontrolle zurückgeben)", icon: "🎮" });
            todos.push({ tipp: "Sichere Orte/Personen etablieren", icon: "🏠" });
        }

        if (topId === 'asd' || hypoIds.includes('asd')) {
            todos.push({ tipp: "Explizit und konkret kommunizieren", icon: "📝" });
            todos.push({ tipp: "Visuelle Hilfsmittel nutzen", icon: "🖼️" });
            todos.push({ tipp: "Routinen beibehalten", icon: "🔄" });
            todos.push({ tipp: "Reizarme Rückzugsmöglichkeit bieten", icon: "🤫" });
        }

        if (topId === 'bindung' || hypoIds.includes('bindung')) {
            todos.push({ tipp: "Beständig bleiben, auch bei Ablehnung", icon: "🌳" });
            todos.push({ tipp: "Kleine positive Rituale etablieren", icon: "☕" });
            todos.push({ tipp: "Trennungen ankündigen und einhalten", icon: "👋" });
        }

        return todos;
    },

    /**
     * Don'ts - Was Sie vermeiden sollten
     * @param {Array} hypothesen - Die berechneten Hypothesen
     * @returns {Array} Zu vermeidende Verhaltensweisen
     */
    getLassDas(hypothesen) {
        const donts = [
            { tipp: "Machtkämpfe eingehen (Sie verlieren immer)", icon: "❌" },
            { tipp: "Vor anderen bloßstellen", icon: "❌" },
            { tipp: "Verhalten persönlich nehmen", icon: "❌" },
            { tipp: "Leere Drohungen aussprechen", icon: "❌" },
            { tipp: "Im Affekt Konsequenzen ankündigen", icon: "❌" }
        ];

        const topId = hypothesen[0]?.id;
        const hypoIds = hypothesen.map(h => h.id);

        if (topId === 'adhs' || hypoIds.includes('adhs')) {
            donts.push({ tipp: "'Streng dich mehr an!' sagen (es strengt sich an!)", icon: "❌" });
            donts.push({ tipp: "Lange Anweisungen geben", icon: "❌" });
            donts.push({ tipp: "Stillsitzen erzwingen wollen", icon: "❌" });
            donts.push({ tipp: "Mehrere Aufgaben gleichzeitig geben", icon: "❌" });
        }

        if (topId === 'angst' || hypoIds.includes('angst')) {
            donts.push({ tipp: "'Stell dich nicht so an!'", icon: "❌" });
            donts.push({ tipp: "Zur Konfrontation zwingen", icon: "❌" });
            donts.push({ tipp: "Vermeidung komplett erlauben", icon: "❌" });
            donts.push({ tipp: "Angst lächerlich machen", icon: "❌" });
        }

        if (topId === 'depression' || hypoIds.includes('depression')) {
            donts.push({ tipp: "'Reiß dich zusammen!'", icon: "❌" });
            donts.push({ tipp: "Gefühle wegdiskutieren wollen", icon: "❌" });
            donts.push({ tipp: "Aktivität erzwingen", icon: "❌" });
        }

        if (topId === 'odd' || hypoIds.includes('odd')) {
            donts.push({ tipp: "Auf Provokationen einsteigen", icon: "❌" });
            donts.push({ tipp: "Endlos diskutieren/rechtfertigen", icon: "❌" });
            donts.push({ tipp: "Inkonsequent sein", icon: "❌" });
        }

        if (topId === 'trauma' || hypoIds.includes('trauma')) {
            donts.push({ tipp: "Überraschen oder erschrecken", icon: "❌" });
            donts.push({ tipp: "'Was ist denn schon wieder los?'", icon: "❌" });
            donts.push({ tipp: "Über Trauma zu sprechen drängen", icon: "❌" });
            donts.push({ tipp: "Körperlich festhalten (außer bei Gefahr)", icon: "❌" });
        }

        if (topId === 'asd' || hypoIds.includes('asd')) {
            donts.push({ tipp: "Ironie oder Sarkasmus verwenden", icon: "❌" });
            donts.push({ tipp: "Unangekündigte Veränderungen", icon: "❌" });
            donts.push({ tipp: "Blickkontakt erzwingen", icon: "❌" });
            donts.push({ tipp: "'Das ist doch klar!' sagen", icon: "❌" });
        }

        if (topId === 'emotionsregulation' || hypoIds.includes('emotionsregulation')) {
            donts.push({ tipp: "'Beruhig dich!' schreien", icon: "❌" });
            donts.push({ tipp: "Selbst laut werden", icon: "❌" });
            donts.push({ tipp: "Gefühle wegschicken wollen", icon: "❌" });
        }

        return donts;
    },

    /**
     * Notfallplan - Wenn gar nichts mehr geht
     * @param {Array} hypothesen - Die berechneten Hypothesen
     * @returns {Object} Notfallplan
     */
    getNotfallplan(hypothesen) {
        return {
            titel: "Wenn gar nichts mehr geht - Krisenplan",
            icon: "🆘",
            schritte: [
                { nr: 1, text: "STOPP - Eigene Atmung verlangsamen (4 Sek ein, 6 Sek aus)", icon: "🛑" },
                { nr: 2, text: "Andere Kinder in Sicherheit bringen (ohne Drama)", icon: "👥" },
                { nr: 3, text: "Raum geben, NICHT bedrängen (1-2 Meter Abstand)", icon: "↔️" },
                { nr: 4, text: "Wenige, ruhige Worte: 'Ich bin da. Du bist sicher.'", icon: "💬" },
                { nr: 5, text: "WARTEN - Erregung braucht 20-30 Minuten zum Abklingen", icon: "⏳" },
                { nr: 6, text: "NICHT diskutieren oder moralisieren im Affekt", icon: "🤐" },
                { nr: 7, text: "NACH Beruhigung: Kurz besprechen, dann Neustart", icon: "🔄" }
            ],
            wichtig: "Im Notfall: Hilfe holen ist keine Schwäche! Bei Eigen- oder Fremdgefährdung: Kolleg:innen rufen, Schulleitung informieren, ggf. 112.",
            nachDerKrise: [
                "Eigene Gefühle reflektieren (Supervision nutzen)",
                "Was hat zum Eskalieren geführt?",
                "Was hat geholfen, was nicht?",
                "Präventionsplan anpassen"
            ]
        };
    },

    /**
     * Beziehungstipps - Langfristige Beziehungsgestaltung
     * @param {Array} hypothesen - Die berechneten Hypothesen
     * @returns {Array} Beziehungstipps
     */
    getBeziehungstipps(hypothesen) {
        return [
            {
                tipp: "2-Minuten-Ritual",
                icon: "⏰",
                beschreibung: "Jeden Tag 2 Minuten exklusive positive Zeit. Keine Aufgaben, keine Kritik. Nur Verbindung. Das Kind bestimmt die Aktivität."
            },
            {
                tipp: "4:1-Regel",
                icon: "📊",
                beschreibung: "Auf jede Korrektur sollten 4 positive Interaktionen kommen. Aktiv nach Gelegenheiten für Lob suchen. Zählen Sie mit!"
            },
            {
                tipp: "Neustart-Kultur",
                icon: "🔄",
                beschreibung: "Nach Konflikten: Explizit einen Neustart anbieten. 'Wir fangen nochmal an.' Nicht nachtragen, nicht stundenlang schmollen."
            },
            {
                tipp: "Verhalten benennen, nicht Kind",
                icon: "💬",
                beschreibung: "'Das Verhalten war nicht ok' statt 'Du bist böse'. Das Kind ist ok, das Verhalten nicht. Identität schützen."
            },
            {
                tipp: "Gefühle benennen und spiegeln",
                icon: "🪞",
                beschreibung: "'Du scheinst wütend zu sein.' 'Das hat dich traurig gemacht.' Gefühle in Worte fassen hilft bei der Regulation."
            },
            {
                tipp: "Vorhersehbarkeit bieten",
                icon: "📅",
                beschreibung: "Feste Rituale, angekündigte Übergänge, klare Strukturen. Besonders wichtig bei ADHS, Trauma, Autismus, Bindung."
            }
        ];
    },

    /**
     * Eltern-Info - Was Eltern wissen sollten
     * @param {Array} hypothesen - Die berechneten Hypothesen
     * @returns {Object} Elterninformation
     */
    getElterninfo(hypothesen) {
        const topHypo = hypothesen[0];

        const spezifischeInfos = {
            adhs: [
                "ADHS ist eine neurobiologische Besonderheit, keine Erziehungssache",
                "Das Kind KANN nicht anders, es WILL nicht nicht",
                "Struktur und Routine sind wichtiger als Strenge",
                "Medikation kann helfen, ist aber nicht die einzige Lösung"
            ],
            angst: [
                "Ängste sind real und schmerzhaft für Ihr Kind",
                "Vermeidung verstärkt die Angst langfristig",
                "Kleine Mutschritte sind der Weg - nicht Zwang",
                "Ihre Ruhe gibt Ihrem Kind Sicherheit"
            ],
            depression: [
                "Depression bei Kindern zeigt sich oft als Reizbarkeit",
                "Es liegt nicht an mangelnder Willenskraft",
                "Aktivierung hilft - aber in kleinen Schritten",
                "Professionelle Hilfe ist wichtig und wirksam"
            ],
            odd: [
                "Opposition ist meist ein Zeichen für unerfüllte Bedürfnisse",
                "Machtkämpfe eskalieren - Wahlmöglichkeiten helfen",
                "Dahinter können ADHS, Trauma oder Überforderung stecken",
                "Beziehung vor Korrektur - immer"
            ],
            trauma: [
                "Das Nervensystem Ihres Kindes ist im Alarmmodus",
                "Reaktionen sind oft Trigger-basiert, nicht gegen Sie gerichtet",
                "Sicherheit und Vorhersehbarkeit sind heilsam",
                "Traumatherapie sollte von Spezialisten durchgeführt werden"
            ],
            asd: [
                "Ihr Kind denkt anders - nicht schlechter",
                "Viele Regeln, die für andere klar sind, sind unsichtbar",
                "Explizite Erklärungen und visuelle Hilfen sind wichtig",
                "Akzeptanz ist wichtiger als 'Normalisierung'"
            ],
            bindung: [
                "Frühe Beziehungserfahrungen prägen - aber Heilung ist möglich",
                "Ihr Kind testet, ob Sie bleiben - bleiben Sie",
                "Konstanz und Verlässlichkeit sind die Intervention",
                "Beziehungsaufbau braucht Zeit und Geduld"
            ],
            emotionsregulation: [
                "Emotionsregulation wird durch Beziehung gelernt",
                "Ihr Kind braucht Sie als 'externen Regler'",
                "Wenn Sie ruhig bleiben, kann Ihr Kind sich an Ihnen orientieren",
                "Strategien müssen explizit geübt werden"
            ]
        };

        return {
            headline: `Was Sie über ${topHypo?.name || 'die Situation'} wissen sollten`,
            icon: "👨‍👩‍👧",
            kernbotschaften: [
                "Das Kind macht das nicht absichtlich oder gegen Sie",
                "Das Verhalten hat einen Grund (auch wenn wir ihn nicht immer sehen)",
                "Konsequenz ist wichtig - aber Beziehung ist wichtiger",
                "Sie sind nicht schuld - und Sie sind Teil der Lösung",
                "Professionelle Hilfe zu suchen ist Verantwortung, kein Versagen"
            ],
            spezifisch: spezifischeInfos[topHypo?.id] || [],
            ressourcen: [
                "Elternberatung in der Schule/Kita",
                "Erziehungsberatungsstellen (kostenlos)",
                "Kinder- und Jugendpsychiater:innen",
                "Selbsthilfegruppen für Eltern"
            ]
        };
    }
};

// Global verfügbar machen
window.ClinicalEngine = ClinicalEngine;
