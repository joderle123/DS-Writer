/**
 * PädoPsych Advisor - Clinical Engine v2.0
 * Umfassende Multi-Modell-Analyse für Kinder- und Jugendpsychiatrie
 */

const ClinicalEngine = {

    /**
     * Hauptfunktion: Analysiert die Falldaten und generiert umfassendes Ergebnis
     * @param {Object} caseData - Die Falldaten aus dem Formular
     * @returns {Object} Analyseergebnis mit Synthesen, Modellen, Interventionen
     */
    analyze(caseData) {
        // ACE Score berechnen
        const aceScore = this.calculateACEScore(caseData);

        // Risikoprofil erstellen
        const risikoprofil = this.createRisikoprofil(caseData);

        // Diagnostische Hypothesen generieren
        const hypothesen = this.generateHypothesen(caseData);

        // Multi-Modell-Synthese
        const synthese = {
            biopsychosozial: this.generateBiopsychosozial(caseData, hypothesen),
            systemisch: this.generateSystemisch(caseData),
            trauma: this.generateTraumaPerspektive(caseData, aceScore),
            bindung: this.generateBindungsperspektive(caseData),
            entwicklung: this.generateEntwicklungsperspektive(caseData),
            oekologisch: this.generateOekologisch(caseData),
            resilienz: this.generateResilienzprofil(caseData)
        };

        // Integriertes Fallverständnis
        const fallverstaendnis = this.generateFallverstaendnis(caseData, hypothesen, synthese);

        // Interventionsempfehlungen
        const interventionen = this.generateInterventionen(caseData, hypothesen, risikoprofil);

        // Bedienungsanleitung
        const bedienungsanleitung = this.generateBedienungsanleitung(hypothesen, caseData);

        return {
            grunddaten: this.extractGrunddaten(caseData),
            aceScore,
            risikoprofil,
            hypothesen,
            synthese,
            fallverstaendnis,
            interventionen,
            bedienungsanleitung,
            timestamp: new Date().toISOString()
        };
    },

    // ============================================================
    // GRUNDDATEN EXTRAKTION
    // ============================================================

    extractGrunddaten(caseData) {
        return {
            alter: caseData.identifikation?.alter,
            geschlecht: caseData.identifikation?.geschlecht,
            schulform: caseData.identifikation?.schulform,
            wohnsituation: caseData.identifikation?.wohnsituation,
            ueberweisungVon: caseData.identifikation?.ueberweisungVon,
            vorstellungsanlass: caseData.identifikation?.vorstellungsanlassEltern ||
                               caseData.identifikation?.vorstellungsanlassKind ||
                               'Nicht angegeben'
        };
    },

    // ============================================================
    // ACE SCORE (Adverse Childhood Experiences)
    // ============================================================

    calculateACEScore(caseData) {
        const aceItems = [
            'emotionaleMisshandlung',
            'körperlicheMisshandlung',
            'sexuellerMissbrauch',
            'emotionaleVernachlässigung',
            'körperlicheVernachlässigung',
            'häuslicheGewalt',
            'suchtFamilieACE',
            'psychKrankheitEltern',
            'trennungScheidungACE',
            'inhaftierungFamilie'
        ];

        let score = 0;
        const identifiziert = [];

        aceItems.forEach(item => {
            if (caseData.checkboxes?.[item]) {
                score++;
                identifiziert.push(this.getCheckboxLabel(item));
            }
        });

        return {
            score,
            max: 10,
            identifiziert,
            interpretation: this.interpretACEScore(score),
            risiko: score >= 4 ? 'hoch' : score >= 2 ? 'mittel' : 'niedrig'
        };
    },

    interpretACEScore(score) {
        if (score >= 6) {
            return "Sehr hohe Belastung durch multiple adverse Kindheitserfahrungen. Dringend traumasensibles Vorgehen erforderlich. Signifikant erhöhtes Risiko für psychische und körperliche Gesundheitsprobleme.";
        }
        if (score >= 4) {
            return "Hohe Belastung. Erhöhtes Risiko für Depression, Angststörungen, Suchterkrankungen. Traumafokussierte Behandlung empfohlen.";
        }
        if (score >= 2) {
            return "Moderate Belastung. Traumasensibles Vorgehen empfohlen. Resilienzfaktoren identifizieren und stärken.";
        }
        if (score >= 1) {
            return "Einzelne belastende Erfahrung identifiziert. Im Verlauf beobachten.";
        }
        return "Keine klassischen ACEs dokumentiert. Andere Belastungsfaktoren beachten.";
    },

    // ============================================================
    // RISIKOPROFIL
    // ============================================================

    createRisikoprofil(caseData) {
        const akut = [];
        const chronisch = [];
        const schutz = [];

        // Akute Risiken
        const akuteRisikoItems = [
            { id: 'suizidgedanken', label: 'Suizidgedanken', severity: 'critical' },
            { id: 'suizidplanung', label: 'Suizidplanung', severity: 'critical' },
            { id: 'selbstverletzung', label: 'Selbstverletzendes Verhalten', severity: 'high' },
            { id: 'fremdgefährdung', label: 'Fremdgefährdung', severity: 'critical' },
            { id: 'substanzAkut', label: 'Akuter Substanzkonsum', severity: 'high' }
        ];

        akuteRisikoItems.forEach(item => {
            if (caseData.checkboxes?.[item.id]) {
                akut.push(item);
            }
        });

        // Chronische Risiken
        const chronischeItems = [
            'mobbingOpfer', 'isolation', 'schulabsentismus', 'delinquenz',
            'gamingExzessiv', 'realitätsflucht'
        ];

        chronischeItems.forEach(id => {
            if (caseData.checkboxes?.[id]) {
                chronisch.push(this.getCheckboxLabel(id));
            }
        });

        // Schutzfaktoren sammeln
        const schutzItems = [
            'intelligenz', 'kreativität', 'humor', 'empathie', 'problemlösung',
            'selbstwirksamkeit', 'copingStrategien', 'sichereBindung',
            'unterstützendeEltern', 'familiärerZusammenhalt', 'positivePeers',
            'mentor', 'hobbysSport', 'hobbysKreativ', 'vereinMitglied'
        ];

        schutzItems.forEach(id => {
            if (caseData.checkboxes?.[id]) {
                schutz.push(this.getCheckboxLabel(id));
            }
        });

        // Dringlichkeitsstufe bestimmen
        let dringlichkeit = 'normal';
        if (akut.some(r => r.severity === 'critical')) {
            dringlichkeit = 'sofort';
        } else if (akut.length > 0) {
            dringlichkeit = 'hoch';
        } else if (chronisch.length >= 3) {
            dringlichkeit = 'erhöht';
        }

        return {
            akut,
            chronisch,
            schutzfaktoren: schutz,
            dringlichkeit,
            bilanz: schutz.length - (akut.length * 2 + chronisch.length),
            warnung: akut.length > 0 ? this.generateRisikoWarnung(akut) : null
        };
    },

    generateRisikoWarnung(akuteRisiken) {
        const critical = akuteRisiken.filter(r => r.severity === 'critical');
        if (critical.length > 0) {
            return {
                stufe: 'KRITISCH',
                text: `ACHTUNG: ${critical.map(r => r.label).join(', ')} identifiziert. Sofortige Risikoeinschätzung und Krisenintervention erforderlich!`,
                massnahmen: CLINICAL_KNOWLEDGE.interventionen.akut
            };
        }
        return {
            stufe: 'ERHÖHT',
            text: 'Erhöhte Risikofaktoren identifiziert. Engmaschiges Monitoring und Krisenplan empfohlen.',
            massnahmen: null
        };
    },

    // ============================================================
    // DIAGNOSTISCHE HYPOTHESEN
    // ============================================================

    generateHypothesen(caseData) {
        const results = [];
        const checkedSymptoms = Object.keys(caseData.checkboxes || {}).filter(k => caseData.checkboxes[k]);

        for (const [id, hypo] of Object.entries(CLINICAL_KNOWLEDGE.diagnoseHypothesen)) {
            const evaluation = this.evaluateHypothese(hypo, checkedSymptoms, caseData);

            if (evaluation.konfidenz > 15 || evaluation.erfuellteKriterien.length >= 2) {
                results.push({
                    id,
                    label: hypo.label,
                    icd10: hypo.icd10,
                    konfidenz: evaluation.konfidenz,
                    erfuellteKriterien: evaluation.erfuellteKriterien,
                    differentialHints: hypo.differentialHints || [],
                    interpretation: this.getHypotheseInterpretation(evaluation.konfidenz, hypo.label)
                });
            }
        }

        return results.sort((a, b) => b.konfidenz - a.konfidenz);
    },

    evaluateHypothese(hypo, symptoms, caseData) {
        let score = 0;
        let maxScore = 0;
        const erfuellt = [];

        // Required Symptoms prüfen
        if (hypo.requiredSymptoms) {
            const minRequired = hypo.minRequired || 1;
            let countRequired = 0;

            hypo.requiredSymptoms.forEach(s => {
                maxScore += 2;
                if (symptoms.includes(s)) {
                    score += 2;
                    countRequired++;
                    erfuellt.push(this.getCheckboxLabel(s));
                }
            });

            if (countRequired < minRequired) {
                score = score * 0.5; // Reduzieren wenn Kernkriterien fehlen
            }
        }

        // Supporting Symptoms
        if (hypo.supportingSymptoms) {
            const minSupporting = hypo.minSupporting || 0;
            let countSupporting = 0;

            hypo.supportingSymptoms.forEach(s => {
                maxScore += 1;
                if (symptoms.includes(s)) {
                    score += 1;
                    countSupporting++;
                    erfuellt.push(this.getCheckboxLabel(s));
                }
            });
        }

        // Gruppen-basierte Kriterien (ADHS, Autismus)
        if (hypo.requiredFromGroup1 && hypo.requiredFromGroup2) {
            const group1Count = hypo.requiredFromGroup1.filter(s => symptoms.includes(s)).length;
            const group2Count = hypo.requiredFromGroup2.filter(s => symptoms.includes(s)).length;

            const group1Met = group1Count >= (hypo.minFromGroup1 || 1);
            const group2Met = group2Count >= (hypo.minFromGroup2 || 1);

            maxScore = hypo.requiredFromGroup1.length + hypo.requiredFromGroup2.length;
            score = group1Count + group2Count;

            if (group1Met) erfuellt.push(`Unaufmerksamkeit: ${group1Count}/${hypo.minFromGroup1}`);
            if (group2Met) erfuellt.push(`Hyperaktivität/Impulsivität: ${group2Count}/${hypo.minFromGroup2}`);
        }

        // PTBS Gruppen
        if (hypo.requiredFromGroups) {
            let allGroupsMet = true;
            for (const [groupName, groupDef] of Object.entries(hypo.requiredFromGroups)) {
                const count = groupDef.symptoms.filter(s => symptoms.includes(s)).length;
                if (count >= groupDef.min) {
                    erfuellt.push(`${groupName}: ${count}/${groupDef.min}`);
                    score += count;
                } else {
                    allGroupsMet = false;
                }
                maxScore += groupDef.symptoms.length;
            }
            if (!allGroupsMet) score *= 0.5;
        }

        const konfidenz = Math.min(95, Math.max(0, Math.round((score / Math.max(maxScore, 1)) * 100)));

        return { konfidenz, erfuellteKriterien: erfuellt };
    },

    getHypotheseInterpretation(konfidenz, label) {
        if (konfidenz >= 70) {
            return `Deutliche Hinweise auf ${label}. Gezielte Diagnostik und Behandlungsplanung empfohlen.`;
        }
        if (konfidenz >= 45) {
            return `Relevante Hinweise auf ${label}. Vertiefte Exploration und differentialdiagnostische Abklärung empfohlen.`;
        }
        if (konfidenz >= 25) {
            return `Einzelne Hinweise auf ${label}. Im Verlauf beobachten, bei Zunahme der Symptomatik abklären.`;
        }
        return `Geringe Hinweise. Differentialdiagnostisch im Blick behalten.`;
    },

    // ============================================================
    // BIO-PSYCHO-SOZIALES MODELL
    // ============================================================

    generateBiopsychosozial(caseData, hypothesen) {
        const bio = [];
        const psycho = [];
        const sozial = [];

        // BIOLOGISCH
        // Genetik/Familie
        const famPsych = ['famDepression', 'famAngst', 'famBipolar', 'famPsychose',
                         'famADHS', 'famAutismus', 'famSucht', 'famSuizid'];
        famPsych.forEach(id => {
            if (caseData.checkboxes?.[id]) {
                bio.push({ faktor: this.getCheckboxLabel(id), typ: 'Genetik/Familie' });
            }
        });

        // Entwicklung
        const entwicklung = ['komplikationSS', 'fruehgeburt', 'geburtsKomplikation',
                            'neonataleProbleme', 'motorikVerzögert', 'spracheVerzögert'];
        entwicklung.forEach(id => {
            if (caseData.checkboxes?.[id]) {
                bio.push({ faktor: this.getCheckboxLabel(id), typ: 'Entwicklung' });
            }
        });

        // Körperlich
        const körperlich = ['chronischeErkrankung', 'epilepsie', 'neurologisch',
                          'schlafstörung', 'somatisierung'];
        körperlich.forEach(id => {
            if (caseData.checkboxes?.[id]) {
                bio.push({ faktor: this.getCheckboxLabel(id), typ: 'Körperlich' });
            }
        });

        // PSYCHOLOGISCH
        // Kognitive Faktoren
        if (caseData.checkboxes?.konzentrationsstörungBefund) {
            psycho.push({ faktor: 'Konzentrationsstörung', typ: 'Kognition' });
        }
        if (caseData.checkboxes?.hoffnungslosigkeit) {
            psycho.push({ faktor: 'Hoffnungslosigkeit/negative Kognitionen', typ: 'Kognition' });
        }
        if (caseData.checkboxes?.grübeln) {
            psycho.push({ faktor: 'Grübeln/Rumination', typ: 'Kognition' });
        }

        // Emotionale Faktoren
        const emotional = ['stimmungDepressiv', 'stimmungÄngstlich', 'stimmungLabil',
                         'anhedonie', 'emoÜberflutung', 'emoWutausbrüche'];
        emotional.forEach(id => {
            if (caseData.checkboxes?.[id]) {
                psycho.push({ faktor: this.getCheckboxLabel(id), typ: 'Emotion' });
            }
        });

        // Verhalten
        const verhalten = ['vermeidungTrauma', 'rückzug', 'selbstverletzung'];
        verhalten.forEach(id => {
            if (caseData.checkboxes?.[id]) {
                psycho.push({ faktor: this.getCheckboxLabel(id), typ: 'Verhalten' });
            }
        });

        // SOZIAL
        // Familie
        const familie = ['elternTrennung', 'hochkonflikt', 'alleinerziehend',
                        'kommunikationProbleme', 'überbehütend', 'vernachlässigend', 'inkonsistent'];
        familie.forEach(id => {
            if (caseData.checkboxes?.[id]) {
                sozial.push({ faktor: this.getCheckboxLabel(id), typ: 'Familie' });
            }
        });

        // Peers
        const peers = ['mobbingOpfer', 'isolation', 'kontaktscheu', 'negativerPeergroup'];
        peers.forEach(id => {
            if (caseData.checkboxes?.[id]) {
                sozial.push({ faktor: this.getCheckboxLabel(id), typ: 'Peers' });
            }
        });

        // Schule
        const schule = ['konzentrationSchule', 'verhaltensauffälligSchule',
                       'schulangst', 'schulabsentismus', 'lehrerKonflikt'];
        schule.forEach(id => {
            if (caseData.checkboxes?.[id]) {
                sozial.push({ faktor: this.getCheckboxLabel(id), typ: 'Schule' });
            }
        });

        // Sozioökonomisch
        const sozioöko = ['finanzielleNot', 'arbeitslosigkeit', 'wohnungsnot', 'migrationsstress'];
        sozioöko.forEach(id => {
            if (caseData.checkboxes?.[id]) {
                sozial.push({ faktor: this.getCheckboxLabel(id), typ: 'Sozioökonomisch' });
            }
        });

        return {
            biologisch: bio,
            psychologisch: psycho,
            sozial: sozial,
            zusammenfassung: this.generateBPSZusammenfassung(bio, psycho, sozial)
        };
    },

    generateBPSZusammenfassung(bio, psycho, sozial) {
        const parts = [];

        if (bio.length > 0) {
            parts.push(`Biologisch zeigen sich ${bio.length} relevante Faktoren, darunter ${bio.slice(0, 2).map(b => b.faktor).join(', ')}.`);
        }

        if (psycho.length > 0) {
            parts.push(`Psychologisch sind ${psycho.length} Bereiche betroffen, insbesondere ${psycho.slice(0, 2).map(p => p.faktor).join(', ')}.`);
        }

        if (sozial.length > 0) {
            parts.push(`Im sozialen Bereich bestehen ${sozial.length} Belastungsfaktoren, v.a. ${sozial.slice(0, 2).map(s => s.faktor).join(', ')}.`);
        }

        return parts.join(' ') || 'Keine spezifischen Faktoren in diesem Modell identifiziert.';
    },

    // ============================================================
    // SYSTEMISCHE PERSPEKTIVE
    // ============================================================

    generateSystemisch(caseData) {
        const aspekte = [];

        // Symptom als Kommunikation
        let symptomFunktion = null;
        if (caseData.checkboxes?.parentifizierung) {
            symptomFunktion = "Das Kind übernimmt möglicherweise Verantwortung, die nicht altersgerecht ist. Das Symptom könnte ein Signal sein, dass das Kind überfordert ist.";
        }
        if (caseData.checkboxes?.loyalitätskonflikt) {
            symptomFunktion = "Das Kind steht möglicherweise zwischen den Eltern. Das Symptom könnte ein Versuch sein, neutral zu bleiben oder Aufmerksamkeit auf sich zu lenken.";
        }
        if (caseData.checkboxes?.hochkonflikt) {
            symptomFunktion = "Bei hohem Elternkonflikt kann das Symptom des Kindes eine ablenkende Funktion haben - es 'vereint' die Eltern in der Sorge um das Kind.";
        }

        if (symptomFunktion) {
            aspekte.push({
                name: "Mögliche Symptomfunktion",
                inhalt: symptomFunktion,
                icon: "💬"
            });
        }

        // Triangulierung
        if (caseData.checkboxes?.hochkonflikt || caseData.checkboxes?.loyalitätskonflikt) {
            aspekte.push({
                name: "Triangulierung",
                inhalt: "Das Kind scheint in Elternkonflikte einbezogen zu werden. Eltern-Kind-Grenzen könnten unklar sein. Ziel: Kind aus dem Konflikt heraushalten.",
                icon: "⚠️"
            });
        }

        // Grenzen
        if (caseData.checkboxes?.überbehütend) {
            aspekte.push({
                name: "Grenzproblematik: Zu eng",
                inhalt: "Überbehütender Stil kann Autonomieentwicklung hemmen und Ängste verstärken. Frage: Was befürchten die Eltern?",
                icon: "🔒"
            });
        }
        if (caseData.checkboxes?.grenzenUnklar) {
            aspekte.push({
                name: "Grenzproblematik: Unklar",
                inhalt: "Unklare Rollen und Grenzen können zu Verunsicherung beim Kind führen. Struktur und Klarheit schaffen.",
                icon: "❓"
            });
        }

        // Erziehungsstil-Dynamiken
        if (caseData.checkboxes?.inkonsistent) {
            aspekte.push({
                name: "Inkonsistente Erziehung",
                inhalt: "Uneinheitliches Vorgehen (zwischen Eltern oder situativ) erschwert dem Kind Orientierung. Sind die Eltern sich uneinig?",
                icon: "🔄"
            });
        }

        // Systemische Hypothesen
        const systemHypothesen = [];
        if (caseData.checkboxes?.verhWütend && caseData.checkboxes?.hochkonflikt) {
            systemHypothesen.push("Das aggressive Verhalten des Kindes könnte die elterlichen Konflikte spiegeln.");
        }
        if (caseData.checkboxes?.angstSozial && caseData.checkboxes?.überbehütend) {
            systemHypothesen.push("Die Ängste des Kindes und der überbehütende Stil könnten sich gegenseitig verstärken.");
        }
        if (caseData.checkboxes?.schulabsentismus && caseData.checkboxes?.alleinerziehend) {
            systemHypothesen.push("Das Schulvermeidungsverhalten könnte mit Sorge um den alleinerziehenden Elternteil zusammenhängen.");
        }

        if (systemHypothesen.length > 0) {
            aspekte.push({
                name: "Zirkuläre Hypothesen",
                inhalt: systemHypothesen.join(' '),
                icon: "🔁"
            });
        }

        return {
            aspekte,
            empfehlung: aspekte.length > 0
                ? "Systemische Faktoren spielen eine Rolle. Familientherapeutische Perspektive einbeziehen."
                : "Keine auffälligen systemischen Dynamiken dokumentiert. Bei Bedarf vertiefen.",
            familientherapie: aspekte.length >= 2
        };
    },

    // ============================================================
    // TRAUMA-PERSPEKTIVE
    // ============================================================

    generateTraumaPerspektive(caseData, aceScore) {
        if (aceScore.score === 0 && !this.hasTraumaSymptoms(caseData)) {
            return {
                relevant: false,
                hinweis: "Keine Traumatisierung dokumentiert. Bei unklarer Symptomatik: behutsam explorieren."
            };
        }

        const traumatyp = this.bestimmeTraumatyp(caseData);
        const reaktionsmuster = this.bestimmeReaktionsmuster(caseData);
        const trigger = this.identifiziereTrigger(caseData);

        return {
            relevant: true,
            aceScore: aceScore.score,
            traumatyp,
            reaktionsmuster,
            trigger,
            empfehlungen: this.getTraumaEmpfehlungen(traumatyp, reaktionsmuster),
            wichtig: "Traumasensibles Vorgehen ist essentiell. Keine Konfrontation ohne Stabilisierung und sichere therapeutische Beziehung."
        };
    },

    hasTraumaSymptoms(caseData) {
        const traumaSymptoms = ['flashbacks', 'vermeidungTrauma', 'hyperarousal',
                               'numbing', 'dissoziativ', 'triggerreaktionen'];
        return traumaSymptoms.some(s => caseData.checkboxes?.[s]);
    },

    bestimmeTraumatyp(caseData) {
        const typen = [];

        // Typ I (Einmalig)
        if (caseData.checkboxes?.unfallTrauma || caseData.checkboxes?.naturkatastrophe) {
            typen.push({
                typ: "Typ I (Einmalig)",
                beschreibung: "Einmaliges traumatisches Ereignis (z.B. Unfall). Oft bessere Prognose bei Behandlung."
            });
        }

        // Typ II (Wiederholend)
        if (caseData.checkboxes?.mobbingTrauma) {
            typen.push({
                typ: "Typ II (Wiederholend)",
                beschreibung: "Wiederholte Traumatisierung (z.B. Mobbing). Kann zu komplexeren Symptomen führen."
            });
        }

        // Komplex (Beziehungstrauma)
        const komplex = ['emotionaleMisshandlung', 'körperlicheMisshandlung', 'sexuellerMissbrauch',
                        'emotionaleVernachlässigung', 'häuslicheGewalt'];
        if (komplex.some(id => caseData.checkboxes?.[id])) {
            typen.push({
                typ: "Komplex (Entwicklungstrauma)",
                beschreibung: "Frühe, beziehungsbezogene Traumatisierung. Betrifft Bindung, Affektregulation, Selbstbild. Längerer Behandlungsbedarf."
            });
        }

        return typen.length > 0 ? typen : [{ typ: "Nicht näher spezifiziert", beschreibung: "Art der Traumatisierung unklar. Behutsame Exploration." }];
    },

    bestimmeReaktionsmuster(caseData) {
        const muster = [];

        // Fight
        if (caseData.checkboxes?.verhAggression || caseData.checkboxes?.verhWütend ||
            caseData.checkboxes?.emoWutausbrüche) {
            muster.push({
                muster: "Fight (Kampf)",
                zeichen: "Aggression, Wutausbrüche, Kontrollverhalten",
                umgang: "Nicht persönlich nehmen. Sicherheit schaffen. Keine Machtkämpfe."
            });
        }

        // Flight
        if (caseData.checkboxes?.vermeidungTrauma || caseData.checkboxes?.rückzug ||
            caseData.checkboxes?.schulangst) {
            muster.push({
                muster: "Flight (Flucht)",
                zeichen: "Vermeidung, Rückzug, Schulabsentismus",
                umgang: "Vermeidung verstehen, nicht erzwingen. Kleine Schritte in Sicherheit."
            });
        }

        // Freeze
        if (caseData.checkboxes?.dissoziativ || caseData.checkboxes?.numbing ||
            caseData.checkboxes?.mutismus) {
            muster.push({
                muster: "Freeze (Erstarren)",
                zeichen: "Dissoziation, Erstarren, Abwesenheit, Mutismus",
                umgang: "Erdung, Orientierung geben. Langsam, sanft ansprechen. Sensorische Reize."
            });
        }

        // Fawn
        if (caseData.checkboxes?.bindungDistanzlos || caseData.checkboxes?.parentifizierung) {
            muster.push({
                muster: "Fawn (Anpassung)",
                zeichen: "Überanpassung, People-Pleasing, Grenzenlosigkeit",
                umgang: "Eigene Bedürfnisse erfragen. Nein sagen üben. Grenzen respektieren."
            });
        }

        return muster.length > 0 ? muster : [{ muster: "Kein klares Muster", zeichen: "Muster unklar", umgang: "Beobachten und explorieren" }];
    },

    identifiziereTrigger(caseData) {
        const trigger = [];

        if (caseData.checkboxes?.triggerreaktionen) {
            trigger.push("Bekannte Triggerreaktionen vorhanden - Details explorieren");
        }
        if (caseData.checkboxes?.flashbacks) {
            trigger.push("Flashbacks vorhanden - Auslöser identifizieren");
        }
        if (caseData.checkboxes?.albträume) {
            trigger.push("Albträume - Themen können auf Trigger hinweisen");
        }

        return trigger;
    },

    getTraumaEmpfehlungen(traumatypen, reaktionsmuster) {
        const empfehlungen = [
            "Sicherheit und Vorhersehbarkeit herstellen",
            "Stabilisierungsarbeit vor Traumabearbeitung",
            "Ressourcen und positive Erfahrungen stärken"
        ];

        if (traumatypen.some(t => t.typ.includes('Komplex'))) {
            empfehlungen.push("Längerfristige Therapie einplanen");
            empfehlungen.push("Bindungsorientierte Interventionen priorisieren");
        }

        if (reaktionsmuster.some(r => r.muster.includes('Freeze'))) {
            empfehlungen.push("Körperorientierte Stabilisierungstechniken");
        }

        return empfehlungen;
    },

    // ============================================================
    // BINDUNGSPERSPEKTIVE
    // ============================================================

    generateBindungsperspektive(caseData) {
        const bindungsmuster = this.einschätzeBindungsmuster(caseData);
        const faktoren = [];

        // Frühe Faktoren
        if (caseData.checkboxes?.bindungProbleme) faktoren.push("Frühe Bindungsprobleme dokumentiert");
        if (caseData.checkboxes?.bonding) faktoren.push("Gutes initiales Bonding (Schutzfaktor)");
        if (caseData.checkboxes?.schreibaby) faktoren.push("Schreibaby - frühe Regulationsprobleme");
        if (caseData.checkboxes?.fütterProbleme) faktoren.push("Frühe Fütterprobleme");

        // Aktuelle Bindungssignale
        const aktuell = [];
        if (caseData.checkboxes?.bindungKlammern) aktuell.push("Übermäßiges Klammern");
        if (caseData.checkboxes?.bindungDistanzlos) aktuell.push("Distanzloses Verhalten");
        if (caseData.checkboxes?.bindungMisstrauen) aktuell.push("Grundmisstrauen");
        if (caseData.checkboxes?.bindungAmbivalent) aktuell.push("Ambivalentes Beziehungsverhalten");
        if (caseData.checkboxes?.bindungSchwer) aktuell.push("Schwer zu beruhigen");

        return {
            einschätzung: bindungsmuster,
            früheFaktoren: faktoren,
            aktuelleSignale: aktuell,
            intervention: this.getBindungsintervention(bindungsmuster)
        };
    },

    einschätzeBindungsmuster(caseData) {
        // Desorganisiert
        if (caseData.checkboxes?.dissoziativ ||
            (caseData.checkboxes?.bindungKlammern && caseData.checkboxes?.bindungMisstrauen)) {
            return {
                muster: "Desorganisierte Bindung (D)",
                beschreibung: "Widersprüchliches Bindungsverhalten, möglicherweise Folge von Beziehungstrauma. Bezugsperson als Quelle von Angst UND Trost.",
                prognose: "Intensivere Intervention erforderlich"
            };
        }

        // Unsicher-ambivalent
        if (caseData.checkboxes?.bindungKlammern || caseData.checkboxes?.angstTrennung ||
            caseData.checkboxes?.bindungSchwer) {
            return {
                muster: "Unsicher-ambivalente Bindung (C)",
                beschreibung: "Übermäßiges Klammern, schwer zu beruhigen, eingeschränkte Exploration. Oft bei inkonsistenter Verfügbarkeit der Bezugsperson.",
                prognose: "Gute Prognose bei verlässlicher Beziehungserfahrung"
            };
        }

        // Unsicher-vermeidend
        if (caseData.checkboxes?.kontaktscheu || caseData.checkboxes?.affektFlach ||
            (caseData.checkboxes?.rückzug && !caseData.checkboxes?.angstAusgeprägt)) {
            return {
                muster: "Unsicher-vermeidende Bindung (A)",
                beschreibung: "Zeigt wenig Nähebedürfnis, Pseudoautonomie, wenig Emotionsausdruck. Oft bei emotional wenig verfügbarer Bezugsperson.",
                prognose: "Zugang zu Emotionen fördern"
            };
        }

        // Sicher (wenn Schutzfaktoren)
        if (caseData.checkboxes?.sichereBindung) {
            return {
                muster: "Sichere Bindung (B)",
                beschreibung: "Nutzt Bezugsperson als sichere Basis. Wichtiger Schutzfaktor für alle anderen Probleme.",
                prognose: "Gute Grundlage für Intervention"
            };
        }

        return {
            muster: "Nicht eindeutig einschätzbar",
            beschreibung: "Bindungsmuster auf Basis der vorliegenden Informationen nicht eindeutig bestimmbar.",
            prognose: "Weitere Exploration empfohlen"
        };
    },

    getBindungsintervention(bindungsmuster) {
        const interventionen = {
            "Desorganisierte Bindung (D)": [
                "Traumasensibles Vorgehen",
                "Sichere, vorhersehbare Umgebung",
                "Keine Retraumatisierung durch Bindungsperson",
                "Möglicherweise alternative Bezugsperson stärken"
            ],
            "Unsicher-ambivalente Bindung (C)": [
                "Konsistenz und Verlässlichkeit bieten",
                "Vorhersehbare Trennungen mit klarem Wiederkommen",
                "Emotionen validieren, nicht verstärken",
                "Autonomie in kleinen Schritten fördern"
            ],
            "Unsicher-vermeidende Bindung (A)": [
                "Emotionale Präsenz zeigen, nicht aufdrängen",
                "Gefühle spiegeln und benennen",
                "Bedürfnisse erfragen (Kind kennt sie oft nicht)",
                "Geduld - Annäherung braucht Zeit"
            ],
            "Sichere Bindung (B)": [
                "Bindung als Ressource nutzen",
                "Bezugsperson in Behandlung einbeziehen",
                "Sichere Basis stärken"
            ]
        };

        return interventionen[bindungsmuster.muster] || ["Bindungsqualität weiter explorieren"];
    },

    // ============================================================
    // ENTWICKLUNGSPSYCHOPATHOLOGISCHE PERSPEKTIVE
    // ============================================================

    generateEntwicklungsperspektive(caseData) {
        const alter = parseInt(caseData.identifikation?.alter) || null;

        if (!alter) {
            return {
                relevant: false,
                hinweis: "Alter nicht angegeben - Entwicklungseinschätzung nicht möglich"
            };
        }

        const entwicklungsaufgaben = this.getEntwicklungsaufgaben(alter);
        const auffälligkeiten = this.getEntwicklungsauffälligkeiten(caseData);
        const einschätzung = this.einschätzeEntwicklungsstand(caseData, alter);

        return {
            alter,
            entwicklungsphase: this.getEntwicklungsphase(alter),
            entwicklungsaufgaben,
            auffälligkeiten,
            einschätzung,
            empfehlung: auffälligkeiten.length > 2
                ? "Multiple Entwicklungsauffälligkeiten. Umfassende Entwicklungsdiagnostik empfohlen."
                : "Entwicklungsaspekte im Verlauf beobachten."
        };
    },

    getEntwicklungsphase(alter) {
        if (alter < 1) return "Säuglingsalter";
        if (alter < 3) return "Kleinkindalter";
        if (alter < 6) return "Vorschulalter";
        if (alter < 12) return "Schulkindalter";
        if (alter < 18) return "Jugendalter";
        return "Junges Erwachsenenalter";
    },

    getEntwicklungsaufgaben(alter) {
        const aufgaben = CLINICAL_KNOWLEDGE.modellvorlagen.entwicklung.entwicklungsaufgaben;

        if (alter < 1) return aufgaben["0-1"];
        if (alter < 3) return aufgaben["1-3"];
        if (alter < 6) return aufgaben["3-6"];
        if (alter < 12) return aufgaben["6-12"];
        return aufgaben["12-18"];
    },

    getEntwicklungsauffälligkeiten(caseData) {
        const auffälligkeiten = [];

        if (caseData.checkboxes?.motorikVerzögert) auffälligkeiten.push("Motorische Entwicklung");
        if (caseData.checkboxes?.spracheVerzögert) auffälligkeiten.push("Sprachentwicklung");
        if (caseData.checkboxes?.kontaktVerzögert) auffälligkeiten.push("Soziale Entwicklung");
        if (caseData.checkboxes?.regulationProbleme) auffälligkeiten.push("Emotionale Regulation");
        if (caseData.checkboxes?.sauberkeitVerzögert) auffälligkeiten.push("Sauberkeitsentwicklung");
        if (caseData.checkboxes?.teilleistung) auffälligkeiten.push("Teilleistungen");

        return auffälligkeiten;
    },

    einschätzeEntwicklungsstand(caseData, alter) {
        let hinweise = [];

        // Regression?
        if (caseData.checkboxes?.enuresisTag && alter > 5) {
            hinweise.push("Mögliche Regression (Einnässen nach erreichter Sauberkeit)");
        }
        if (caseData.checkboxes?.interessenverlust) {
            hinweise.push("Interessenverlust kann auf emotionale Belastung oder Depression hinweisen");
        }

        // Frühreife/Parentifizierung?
        if (caseData.checkboxes?.parentifizierung) {
            hinweise.push("Parentifizierung - Kind übernimmt nicht-altersgerechte Verantwortung");
        }

        return hinweise.length > 0 ? hinweise : ["Keine offensichtlichen Entwicklungsabweichungen dokumentiert"];
    },

    // ============================================================
    // ÖKOLOGISCHES MODELL (BRONFENBRENNER)
    // ============================================================

    generateOekologisch(caseData) {
        return {
            mikrosystem: this.analyseMikrosystem(caseData),
            mesosystem: this.analyseMesosystem(caseData),
            exosystem: this.analyseExosystem(caseData),
            makrosystem: this.analyseMakrosystem(caseData)
        };
    },

    analyseMikrosystem(caseData) {
        const bereiche = {
            familie: { belastungen: [], ressourcen: [] },
            schule: { belastungen: [], ressourcen: [] },
            peers: { belastungen: [], ressourcen: [] }
        };

        // Familie
        if (caseData.checkboxes?.hochkonflikt) bereiche.familie.belastungen.push("Hochstrittigkeit");
        if (caseData.checkboxes?.kommunikationProbleme) bereiche.familie.belastungen.push("Kommunikationsprobleme");
        if (caseData.checkboxes?.unterstützendeEltern) bereiche.familie.ressourcen.push("Unterstützende Eltern");
        if (caseData.checkboxes?.familiärerZusammenhalt) bereiche.familie.ressourcen.push("Familienzusammenhalt");

        // Schule
        if (caseData.checkboxes?.schulangst) bereiche.schule.belastungen.push("Schulangst");
        if (caseData.checkboxes?.lehrerKonflikt) bereiche.schule.belastungen.push("Lehrerkonflikte");
        if (caseData.checkboxes?.guteSchule) bereiche.schule.ressourcen.push("Gute Schule");
        if (caseData.checkboxes?.lernmotivation) bereiche.schule.ressourcen.push("Lernmotivation");

        // Peers
        if (caseData.checkboxes?.mobbingOpfer) bereiche.peers.belastungen.push("Mobbing");
        if (caseData.checkboxes?.isolation) bereiche.peers.belastungen.push("Isolation");
        if (caseData.checkboxes?.positivePeers) bereiche.peers.ressourcen.push("Positive Freundschaften");
        if (caseData.checkboxes?.vereinMitglied) bereiche.peers.ressourcen.push("Vereinseinbindung");

        return bereiche;
    },

    analyseMesosystem(caseData) {
        const verbindungen = [];

        // Familie-Schule
        if (caseData.checkboxes?.hausaufgabenKonflikte) {
            verbindungen.push({
                bereich: "Familie-Schule",
                art: "Konflikt",
                beschreibung: "Hausaufgabenkonflikte belasten beide Systeme"
            });
        }

        if (caseData.checkboxes?.schulbegleitung || caseData.checkboxes?.nachteilsausgleich) {
            verbindungen.push({
                bereich: "Familie-Schule-Hilfesystem",
                art: "Kooperation",
                beschreibung: "Etablierte Unterstützungsmaßnahmen"
            });
        }

        return verbindungen;
    },

    analyseExosystem(caseData) {
        const faktoren = [];

        if (caseData.checkboxes?.arbeitslosigkeit) {
            faktoren.push("Arbeitslosigkeit der Eltern - indirekter Einfluss auf Kind");
        }
        if (caseData.checkboxes?.chronischeKrankheitEltern) {
            faktoren.push("Chronische Erkrankung der Eltern beeinflusst Familiendynamik");
        }
        if (caseData.checkboxes?.pflegebedürftig) {
            faktoren.push("Pflegebedürftiger im Haushalt bindet elterliche Ressourcen");
        }

        return faktoren;
    },

    analyseMakrosystem(caseData) {
        const faktoren = [];

        if (caseData.checkboxes?.migrationsstress) {
            faktoren.push("Migrationshintergrund - kulturelle Faktoren beachten");
        }
        if (caseData.checkboxes?.finanzielleNot) {
            faktoren.push("Sozioökonomische Benachteiligung");
        }

        return faktoren;
    },

    // ============================================================
    // RESILIENZ-PROFIL
    // ============================================================

    generateResilienzprofil(caseData) {
        const individuell = [];
        const familiär = [];
        const sozial = [];

        // Individuelle Schutzfaktoren
        const indivItems = ['intelligenz', 'kreativität', 'humor', 'empathie',
                          'problemlösung', 'selbstwirksamkeit', 'selbstreflexion',
                          'copingStrategien', 'zukunftsorientierung'];
        indivItems.forEach(id => {
            if (caseData.checkboxes?.[id]) individuell.push(this.getCheckboxLabel(id));
        });

        // Familiäre Schutzfaktoren
        const famItems = ['sichereBindung', 'unterstützendeEltern', 'familiärerZusammenhalt'];
        famItems.forEach(id => {
            if (caseData.checkboxes?.[id]) familiär.push(this.getCheckboxLabel(id));
        });

        // Soziale Schutzfaktoren
        const sozItems = ['positivePeers', 'guteSchule', 'mentor', 'vereinMitglied',
                         'hobbysSport', 'hobbysKreativ', 'hobbysMusik', 'professionelleHilfe'];
        sozItems.forEach(id => {
            if (caseData.checkboxes?.[id]) sozial.push(this.getCheckboxLabel(id));
        });

        const gesamt = individuell.length + familiär.length + sozial.length;

        return {
            individuell,
            familiär,
            sozial,
            gesamtScore: gesamt,
            einschätzung: gesamt >= 8 ? "Gute Resilienzressourcen" :
                         gesamt >= 4 ? "Moderate Ressourcen - Ausbau empfohlen" :
                         "Wenig Schutzfaktoren identifiziert - Ressourcenaufbau priorisieren",
            empfehlungen: this.getResilienzempfehlungen(individuell, familiär, sozial)
        };
    },

    getResilienzempfehlungen(individuell, familiär, sozial) {
        const empf = [];

        if (individuell.length < 3) {
            empf.push("Individuelle Stärken identifizieren und fördern");
            empf.push("Selbstwirksamkeit durch Erfolgserlebnisse stärken");
        }
        if (familiär.length < 2) {
            empf.push("Eltern-Kind-Beziehung stärken");
            empf.push("Familienzusammenhalt fördern (gemeinsame Aktivitäten)");
        }
        if (sozial.length < 2) {
            empf.push("Positive Peer-Kontakte fördern");
            empf.push("Außerschulische Aktivitäten/Vereinsmitgliedschaft anregen");
        }

        return empf.length > 0 ? empf : ["Vorhandene Ressourcen weiter stärken"];
    },

    // ============================================================
    // INTEGRIERTES FALLVERSTÄNDNIS
    // ============================================================

    generateFallverstaendnis(caseData, hypothesen, synthese) {
        const topHypo = hypothesen[0];
        const alter = caseData.identifikation?.alter;
        const geschlecht = caseData.identifikation?.geschlecht;

        let text = "";

        // Einleitung
        text += `Das ${alter ? alter + "-jährige" : ""} ${geschlecht === 'weiblich' ? 'Mädchen' : geschlecht === 'männlich' ? 'Junge' : 'Kind'} `;
        text += `wird vorgestellt wegen ${caseData.identifikation?.vorstellungsanlassEltern || 'verschiedener Auffälligkeiten'}. `;

        // Haupthypothese
        if (topHypo) {
            text += `\n\nDie Analyse ergibt mit ${topHypo.konfidenz}% Konfidenz Hinweise auf ${topHypo.label}`;
            if (hypothesen.length > 1) {
                text += `, differentialdiagnostisch sind ${hypothesen.slice(1, 3).map(h => h.label).join(' und ')} zu erwägen`;
            }
            text += '. ';
        }

        // Bio-Psycho-Sozial Summary
        const bps = synthese.biopsychosozial;
        if (bps.biologisch.length > 0 || bps.psychologisch.length > 0 || bps.sozial.length > 0) {
            text += `\n\n${bps.zusammenfassung}`;
        }

        // Trauma
        if (synthese.trauma.relevant) {
            text += `\n\nTraumaanamnese positiv (ACE-Score: ${synthese.trauma.aceScore}/10). `;
            text += synthese.trauma.traumatyp[0]?.beschreibung || '';
        }

        // Bindung
        if (synthese.bindung.einschätzung) {
            text += `\n\nBindungstheoretisch: ${synthese.bindung.einschätzung.beschreibung}`;
        }

        // Resilienz
        text += `\n\nResilienzprofil: ${synthese.resilienz.einschätzung}`;
        if (synthese.resilienz.individuell.length > 0) {
            text += ` Identifizierte Stärken: ${synthese.resilienz.individuell.slice(0, 3).join(', ')}.`;
        }

        return text;
    },

    // ============================================================
    // INTERVENTIONSEMPFEHLUNGEN
    // ============================================================

    generateInterventionen(caseData, hypothesen, risikoprofil) {
        const interventionen = {
            sofort: [],
            kurzfristig: [],
            mittelfristig: [],
            langfristig: []
        };

        // Akute Interventionen bei Risiko
        if (risikoprofil.dringlichkeit === 'sofort') {
            interventionen.sofort = this.getAkutinterventionen(caseData, risikoprofil);
        }

        // Therapeutische Interventionen basierend auf Hypothesen
        hypothesen.slice(0, 3).forEach(hypo => {
            const therapien = this.getTherapieempfehlungen(hypo.id, caseData);
            interventionen.kurzfristig.push(...therapien);
        });

        // Psychosoziale Interventionen
        interventionen.mittelfristig = this.getPsychosozialeInterventionen(caseData, hypothesen);

        // Langfristige Maßnahmen
        interventionen.langfristig = this.getLangfristigeZiele(hypothesen);

        // Deduplizieren
        Object.keys(interventionen).forEach(key => {
            interventionen[key] = [...new Set(interventionen[key])];
        });

        return interventionen;
    },

    getAkutinterventionen(caseData, risikoprofil) {
        const akut = [];

        if (caseData.checkboxes?.suizidgedanken || caseData.checkboxes?.suizidplanung) {
            akut.push("Sofortige strukturierte Suizidrisikoeinschätzung");
            akut.push("Non-Suizid-Vereinbarung wenn möglich");
            akut.push("Notfallplan erstellen");
            akut.push("Bei akuter Gefahr: stationäre Aufnahme erwägen");
        }

        if (caseData.checkboxes?.selbstverletzung) {
            akut.push("Wundversorgung sicherstellen");
            akut.push("Auslöser und Funktion explorieren");
            akut.push("Skills zur Spannungsreduktion vermitteln");
        }

        if (caseData.checkboxes?.körperlicheMisshandlung ||
            caseData.checkboxes?.sexuellerMissbrauch ||
            caseData.checkboxes?.körperlicheVernachlässigung) {
            akut.push("Kinderschutzprozedere einleiten");
            akut.push("Dokumentation");
            akut.push("Jugendamt informieren (§8a SGB VIII)");
        }

        return akut;
    },

    getTherapieempfehlungen(hypoId, caseData) {
        const empfehlungen = [];
        const therapien = CLINICAL_KNOWLEDGE.interventionen.therapeutisch.psychotherapie;
        const alter = parseInt(caseData.identifikation?.alter) || 10;

        // Mapping Diagnose zu Therapie
        const mapping = {
            depression: ['kognitiveVerhaltenstherapie'],
            angststörung: ['kognitiveVerhaltenstherapie'],
            sozialePhobie: ['kognitiveVerhaltenstherapie'],
            adhs: ['elterntraining'],
            autismus: ['sozialesKompetenztraining'],
            ptbs: ['traumatherapie'],
            komplexePTBS: ['traumatherapie'],
            emotionsregulationsstörung: ['dialektischBehavioral'],
            bindungsstörung: ['familientherapie'],
            oppositionell: ['elterntraining']
        };

        if (mapping[hypoId]) {
            mapping[hypoId].forEach(t => {
                if (therapien[t]) {
                    empfehlungen.push(`${therapien[t].beschreibung}: ${therapien[t].fokus}`);
                }
            });
        }

        // Spieltherapie für jüngere Kinder
        if (alter < 12) {
            empfehlungen.push("Bei jüngerem Kind: Spieltherapie/kindgerechte Verfahren");
        }

        return empfehlungen;
    },

    getPsychosozialeInterventionen(caseData, hypothesen) {
        const interventionen = [];

        // Schulische Maßnahmen
        if (caseData.checkboxes?.konzentrationSchule ||
            hypothesen.some(h => h.id === 'adhs')) {
            interventionen.push("Nachteilsausgleich beantragen");
        }

        if (hypothesen.some(h => h.id === 'autismus')) {
            interventionen.push("Schulbegleitung/Integrationshilfe prüfen");
        }

        // Jugendhilfe
        if (caseData.checkboxes?.schulabsentismus ||
            caseData.checkboxes?.delinquenz) {
            interventionen.push("Sozialpädagogische Familienhilfe (SPFH) erwägen");
        }

        if (caseData.checkboxes?.kommunikationProbleme ||
            caseData.checkboxes?.inkonsistent) {
            interventionen.push("Erziehungsberatung (§28 SGB VIII)");
        }

        // Ergänzende Therapien
        if (caseData.checkboxes?.motorikVerzögert ||
            caseData.checkboxes?.feinmotorikProbleme) {
            interventionen.push("Ergotherapie");
        }

        if (caseData.checkboxes?.spracheVerzögert) {
            interventionen.push("Logopädie");
        }

        return interventionen;
    },

    getLangfristigeZiele(hypothesen) {
        const ziele = [
            "Stabilisierung und Symptomreduktion",
            "Stärkung von Schutzfaktoren und Resilienz",
            "Verbesserung der familiären Beziehungen"
        ];

        if (hypothesen.some(h => ['adhs', 'autismus'].includes(h.id))) {
            ziele.push("Langfristiges Funktionsniveau in Schule und Alltag verbessern");
        }

        if (hypothesen.some(h => ['ptbs', 'komplexePTBS', 'bindungsstörung'].includes(h.id))) {
            ziele.push("Integration traumatischer Erfahrungen");
            ziele.push("Aufbau sicherer Beziehungserfahrungen");
        }

        return ziele;
    },

    // ============================================================
    // BEDIENUNGSANLEITUNG
    // ============================================================

    generateBedienungsanleitung(hypothesen, caseData) {
        const topId = hypothesen[0]?.id;

        return {
            grundhaltung: this.getGrundhaltung(topId),
            ampelsystem: {
                gruen: this.getGruenSignale(topId),
                gelb: this.getGelbSignale(topId),
                rot: this.getRotSignale()
            },
            dosAndDonts: {
                tuDas: this.getTuDas(topId),
                lassDas: this.getLassDas(topId)
            },
            situationsrezepte: this.getSituationsrezepte(topId),
            notfallplan: this.getNotfallplan(),
            beziehungstipps: this.getBeziehungstipps()
        };
    },

    getGrundhaltung(topId) {
        const haltungen = {
            adhs: { leitsatz: "Struktur geben, nicht strafen", mantra: "Das Kind KANN nicht, es WILL nicht nicht.", icon: "🎯" },
            angststörung: { leitsatz: "Sicherheit geben, mutig machen", mantra: "Ich sehe deine Angst. Du schaffst den nächsten kleinen Schritt.", icon: "🛡️" },
            depression: { leitsatz: "Dabeibleiben, nicht aufgeben", mantra: "Du bist wichtig. Wir machen kleine Schritte zusammen.", icon: "💙" },
            oppositionell: { leitsatz: "Verbindung vor Korrektur", mantra: "Ich kämpfe nicht gegen dich, sondern für dich.", icon: "🤝" },
            ptbs: { leitsatz: "Sicherheit, Sicherheit, Sicherheit", mantra: "Du bist hier sicher. Ich bin berechenbar.", icon: "🏠" },
            komplexePTBS: { leitsatz: "Sicherheit, Sicherheit, Sicherheit", mantra: "Du bist hier sicher. Ich bin berechenbar.", icon: "🏠" },
            autismus: { leitsatz: "Klar, konkret, visuell", mantra: "Ich sage genau, was ich meine.", icon: "📋" },
            bindungsstörung: { leitsatz: "Beziehung ist die Intervention", mantra: "Ich bleibe. Auch wenn du mich testest.", icon: "❤️" },
            emotionsregulationsstörung: { leitsatz: "Co-Regulation vor Selbstregulation", mantra: "Ich bleibe ruhig, damit du dich orientieren kannst.", icon: "🌊" }
        };
        return haltungen[topId] || haltungen.emotionsregulationsstörung;
    },

    getGruenSignale(topId) {
        return [
            "Kind ist ansprechbar und reagiert auf Ansprache",
            "Kann sich an Absprachen halten",
            "Zeigt Interesse an Aktivitäten",
            "Kann Frustrationen aushalten"
        ];
    },

    getGelbSignale(topId) {
        const basis = ["Zunehmende Unruhe", "Kürzere Zündschnur", "Beginnt zu verweigern"];
        const spezifisch = {
            adhs: ["Zappelt mehr", "Hört nicht mehr zu"],
            angststörung: ["Zieht sich zurück", "Klagt über Bauchschmerzen"],
            depression: ["Wird gereizter", "Zieht sich von Aktivitäten zurück"],
            ptbs: ["Wirkt abwesend", "Schreckhafter"]
        };
        return [...basis, ...(spezifisch[topId] || [])];
    },

    getRotSignale() {
        return [
            "Kontrollverlust (schreit, weint unkontrolliert)",
            "Körperliche Anspannung",
            "Verbale Aggression oder Drohungen",
            "Fluchtverhalten oder Erstarren",
            "Selbst- oder fremdverletzendes Verhalten"
        ];
    },

    getTuDas(topId) {
        const basis = [
            { tipp: "Ruhig bleiben", icon: "🧘" },
            { tipp: "Beziehung priorisieren", icon: "❤️" },
            { tipp: "Kleine Erfolge feiern", icon: "🎉" },
            { tipp: "Vorhersehbar sein", icon: "📅" }
        ];
        const spezifisch = {
            adhs: [{ tipp: "Kurze, klare Anweisungen", icon: "💬" }, { tipp: "Bewegungspausen", icon: "🏃" }],
            angststörung: [{ tipp: "Ängste ernst nehmen", icon: "👂" }, { tipp: "Kleine Mutschritte ermöglichen", icon: "🦁" }],
            autismus: [{ tipp: "Explizit kommunizieren", icon: "📝" }, { tipp: "Visuelle Hilfsmittel", icon: "🖼️" }]
        };
        return [...basis, ...(spezifisch[topId] || [])];
    },

    getLassDas(topId) {
        const basis = [
            { tipp: "Machtkämpfe eingehen", icon: "❌" },
            { tipp: "Vor anderen bloßstellen", icon: "❌" },
            { tipp: "Verhalten persönlich nehmen", icon: "❌" }
        ];
        const spezifisch = {
            adhs: [{ tipp: "'Streng dich mehr an!' sagen", icon: "❌" }],
            angststörung: [{ tipp: "'Stell dich nicht so an!'", icon: "❌" }],
            ptbs: [{ tipp: "Über Trauma zu sprechen drängen", icon: "❌" }]
        };
        return [...basis, ...(spezifisch[topId] || [])];
    },

    getSituationsrezepte(topId) {
        return [
            {
                situation: "Kind verweigert eine Aufgabe",
                icon: "🚫",
                reaktion: [
                    "Kurz innehalten, durchatmen",
                    "Wahlmöglichkeit anbieten",
                    "Aufgabe in kleinere Schritte teilen"
                ]
            },
            {
                situation: "Kind wird wütend / eskaliert",
                icon: "😠",
                reaktion: [
                    "Eigene Stimme SENKEN",
                    "Raum geben (1-2 Meter)",
                    "Wenig Worte: 'Ich sehe, dass du wütend bist.'",
                    "Warten bis Erregung sinkt"
                ]
            }
        ];
    },

    getNotfallplan() {
        return {
            titel: "Krisenplan",
            schritte: [
                "STOPP - Eigene Atmung verlangsamen",
                "Andere in Sicherheit bringen",
                "Raum geben, NICHT bedrängen",
                "Wenige, ruhige Worte",
                "WARTEN - Erregung braucht Zeit zum Abklingen",
                "NACH Beruhigung: Kurz besprechen, Neustart"
            ],
            wichtig: "Im Notfall: Hilfe holen ist keine Schwäche!"
        };
    },

    getBeziehungstipps() {
        return [
            { tipp: "2-Minuten-Ritual", beschreibung: "Jeden Tag 2 Minuten exklusive positive Zeit." },
            { tipp: "4:1-Regel", beschreibung: "Auf jede Korrektur 4 positive Interaktionen." },
            { tipp: "Neustart-Kultur", beschreibung: "Nach Konflikten: Explizit Neustart anbieten." }
        ];
    },

    // ============================================================
    // HILFSFUNKTIONEN
    // ============================================================

    getCheckboxLabel(id) {
        // Durchsuche alle Sections nach dem Label
        for (const [sectionKey, section] of Object.entries(CLINICAL_KNOWLEDGE)) {
            if (section.subsections) {
                for (const [subKey, sub] of Object.entries(section.subsections)) {
                    if (sub.checkboxes) {
                        const item = sub.checkboxes.find(c => c.id === id);
                        if (item) return item.label;
                    }
                }
            }
            if (section.checkboxes) {
                const item = section.checkboxes.find(c => c.id === id);
                if (item) return item.label;
            }
        }

        // Symptom-Checklisten
        if (CLINICAL_KNOWLEDGE.symptomChecklisten?.subsections) {
            for (const [subKey, sub] of Object.entries(CLINICAL_KNOWLEDGE.symptomChecklisten.subsections)) {
                if (sub.checkboxes) {
                    const item = sub.checkboxes.find(c => c.id === id);
                    if (item) return item.label;
                }
            }
        }

        return id; // Fallback
    }
};

// Global verfügbar machen
if (typeof window !== 'undefined') {
    window.ClinicalEngine = ClinicalEngine;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ClinicalEngine;
}
