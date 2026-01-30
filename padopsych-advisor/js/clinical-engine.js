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

        return {
            hypothesen,        // Array sortiert nach Wahrscheinlichkeit
            differential,      // Differentialdiagnostische Überlegungen
            modell,           // Das klinische Erklärungsmodell
            caseData,         // Original-Daten für Referenz
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
    }
};

// Global verfügbar machen
window.ClinicalEngine = ClinicalEngine;
