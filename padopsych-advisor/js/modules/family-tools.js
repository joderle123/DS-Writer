/**
 * Familien-Tools Modul
 * Genogramm-Builder, Systemische Familienanalyse, Familienressourcen
 *
 * Wissenschaftliche Grundlagen:
 * - McGoldrick, M., Gerson, R., & Petry, S. (2020). Genograms: Assessment and Treatment
 * - Minuchin, S. (1974). Families and Family Therapy
 * - Bowen, M. (1978). Family Therapy in Clinical Practice
 * - Satir, V. (1983). Conjoint Family Therapy
 */

const FamilyToolsModule = {

    // Genogramm-Symbole und Definitionen
    genogrammSymbole: {
        personen: {
            maennlich: { symbol: '□', beschreibung: 'Männlich' },
            weiblich: { symbol: '○', beschreibung: 'Weiblich' },
            divers: { symbol: '◇', beschreibung: 'Divers/Unbekannt' },
            verstorben: { zusatz: '✕', beschreibung: 'Verstorben' },
            indexpatient: { zusatz: '⟁', beschreibung: 'Indexpatient (doppelte Linie)' }
        },
        beziehungen: {
            verheiratet: { linie: '──', beschreibung: 'Verheiratet' },
            zusammenlebend: { linie: '╌╌', beschreibung: 'Zusammenlebend' },
            getrennt: { linie: '─╱─', beschreibung: 'Getrennt' },
            geschieden: { linie: '─╱╱─', beschreibung: 'Geschieden' },
            verwitwet: { linie: '─✕', beschreibung: 'Verwitwet' }
        },
        beziehungsqualitaet: {
            eng: { linie: '═══', beschreibung: 'Enge Beziehung' },
            distanziert: { linie: '┄┄┄', beschreibung: 'Distanzierte Beziehung' },
            konflikt: { linie: '⚡⚡⚡', beschreibung: 'Konflikthaft' },
            abgebrochen: { linie: '─┴─', beschreibung: 'Kontaktabbruch' },
            verstrickt: { linie: '≋≋≋', beschreibung: 'Verstrickt/Enmeshed' },
            ambivalent: { linie: '═⚡═', beschreibung: 'Eng und konfliktreich' }
        },
        ereignisse: {
            psychischeErkrankung: '◐',
            sucht: '▣',
            suizid: '✕S',
            missbrauch: '⚠',
            gewalt: '⚔',
            inhaftierung: '▦',
            migration: '→',
            adoption: '[ ]',
            pflegekind: '⟦ ⟧',
            fehlgeburt: '△',
            abtreibung: '△╱',
            totgeburt: '■'
        }
    },

    // Familienmitglied-Vorlage
    createFamilienmitglied: function(data = {}) {
        return {
            id: data.id || this.generateId(),
            name: data.name || '',
            alter: data.alter || null,
            geschlecht: data.geschlecht || 'unbekannt', // maennlich, weiblich, divers
            lebend: data.lebend !== false,
            todesursache: data.todesursache || null,
            todesalter: data.todesalter || null,
            generation: data.generation || 0, // -2 Großeltern, -1 Eltern, 0 Patient, 1 Kinder
            position: data.position || 0, // Horizontale Position

            // Klinische Informationen
            psychischeErkrankungen: data.psychischeErkrankungen || [],
            somatischeErkrankungen: data.somatischeErkrankungen || [],
            suchtprobleme: data.suchtprobleme || [],
            besondereEreignisse: data.besondereEreignisse || [],

            // Beziehungen
            beziehungen: data.beziehungen || [], // [{zuPersonId, typ, qualitaet}]

            // Zusätzliche Informationen
            beruf: data.beruf || '',
            notizen: data.notizen || ''
        };
    },

    // Genogramm erstellen
    createGenogramm: function() {
        return {
            id: this.generateId(),
            erstelltAm: new Date().toISOString(),
            indexpatient: null,
            mitglieder: [],
            beziehungen: [],
            notizen: '',
            legende: []
        };
    },

    // ID-Generator
    generateId: function() {
        return 'gen_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    },

    // Häufige psychische Erkrankungen für Dropdown
    haeufigePsychischeErkrankungen: [
        { id: 'depression', label: 'Depression', schweregrad: ['leicht', 'mittel', 'schwer'] },
        { id: 'bipolar', label: 'Bipolare Störung', schweregrad: ['Typ I', 'Typ II'] },
        { id: 'angststoerung', label: 'Angststörung', schweregrad: ['leicht', 'mittel', 'schwer'] },
        { id: 'schizophrenie', label: 'Schizophrenie/Psychose', schweregrad: ['akut', 'chronisch'] },
        { id: 'adhs', label: 'ADHS', schweregrad: ['leicht', 'mittel', 'schwer'] },
        { id: 'autismus', label: 'Autismus-Spektrum', schweregrad: ['Level 1', 'Level 2', 'Level 3'] },
        { id: 'persoenlichkeitsstoerung', label: 'Persönlichkeitsstörung', schweregrad: ['BPS', 'NPS', 'andere'] },
        { id: 'essstoerung', label: 'Essstörung', schweregrad: ['Anorexie', 'Bulimie', 'BED'] },
        { id: 'ptbs', label: 'PTBS', schweregrad: ['akut', 'chronisch', 'komplex'] },
        { id: 'sucht', label: 'Suchterkrankung', schweregrad: ['Alkohol', 'Drogen', 'Verhalten'] },
        { id: 'zwang', label: 'Zwangsstörung', schweregrad: ['leicht', 'mittel', 'schwer'] },
        { id: 'demenz', label: 'Demenz', schweregrad: ['beginnend', 'fortgeschritten'] },
        { id: 'suizid', label: 'Suizid/Suizidversuch', schweregrad: ['Versuch', 'Vollzug'] },
        { id: 'unbekannt', label: 'Psychische Erkrankung (unspezifisch)', schweregrad: [] }
    ],

    // Familiensystem-Analyse nach Minuchin
    analysiereSubsysteme: function(genogramm) {
        const analyse = {
            elternsubsystem: {
                mitglieder: [],
                funktionalitaet: null,
                grenzen: null
            },
            geschwistersubsystem: {
                mitglieder: [],
                hierarchie: null,
                koalitionen: []
            },
            generationsuebergreifend: {
                muster: [],
                triangulierungen: []
            }
        };

        // Analysiere Subsysteme basierend auf Genogramm-Daten
        const eltern = genogramm.mitglieder.filter(m => m.generation === -1);
        const kinder = genogramm.mitglieder.filter(m => m.generation === 0 || m.generation === 1);
        const grosseltern = genogramm.mitglieder.filter(m => m.generation === -2);

        analyse.elternsubsystem.mitglieder = eltern;
        analyse.geschwistersubsystem.mitglieder = kinder;

        // Prüfe auf Triangulierungen
        genogramm.beziehungen.forEach(bez => {
            if (bez.qualitaet === 'verstrickt' || bez.qualitaet === 'ambivalent') {
                analyse.generationsuebergreifend.triangulierungen.push({
                    beteiligte: [bez.von, bez.zu],
                    typ: bez.qualitaet
                });
            }
        });

        return analyse;
    },

    // Transgenerationale Muster identifizieren
    identifiziereTransgenerationaleMuster: function(genogramm) {
        const muster = [];

        // Sammle Erkrankungen nach Generation
        const erkrankungenNachGeneration = {};
        genogramm.mitglieder.forEach(m => {
            if (!erkrankungenNachGeneration[m.generation]) {
                erkrankungenNachGeneration[m.generation] = [];
            }
            erkrankungenNachGeneration[m.generation].push(...m.psychischeErkrankungen);
        });

        // Prüfe auf wiederkehrende Muster
        const alleErkrankungen = genogramm.mitglieder.flatMap(m => m.psychischeErkrankungen);
        const haeufigkeit = {};
        alleErkrankungen.forEach(e => {
            const key = e.id || e;
            haeufigkeit[key] = (haeufigkeit[key] || 0) + 1;
        });

        Object.entries(haeufigkeit).forEach(([erkrankung, anzahl]) => {
            if (anzahl >= 2) {
                muster.push({
                    typ: 'wiederkehrendeErkrankung',
                    erkrankung: erkrankung,
                    anzahl: anzahl,
                    generationen: Object.keys(erkrankungenNachGeneration).filter(
                        gen => erkrankungenNachGeneration[gen].some(e => (e.id || e) === erkrankung)
                    ),
                    klinischeBedeutung: `${erkrankung} tritt in ${anzahl} Familienmitgliedern über mehrere Generationen auf - mögliche genetische Vulnerabilität und/oder transgenerationale Weitergabe`
                });
            }
        });

        // Prüfe auf Suizidcluster
        const suizide = genogramm.mitglieder.filter(m =>
            !m.lebend && (m.todesursache === 'Suizid' || m.psychischeErkrankungen.some(e => e.id === 'suizid'))
        );
        if (suizide.length >= 2) {
            muster.push({
                typ: 'suizidcluster',
                anzahl: suizide.length,
                klinischeBedeutung: 'WICHTIG: Mehrere Suizide in der Familie - erhöhtes Risiko für Indexpatient, Suizidanamnese vertiefen!'
            });
        }

        // Prüfe auf Suchtmuster
        const sucht = genogramm.mitglieder.filter(m => m.suchtprobleme && m.suchtprobleme.length > 0);
        if (sucht.length >= 2) {
            muster.push({
                typ: 'suchtmuster',
                anzahl: sucht.length,
                klinischeBedeutung: 'Suchterkrankungen in mehreren Familienmitgliedern - genetische Vulnerabilität beachten'
            });
        }

        return muster;
    },

    // Familienressourcen erfassen
    familienressourcenCheckliste: {
        strukturell: [
            { id: 'stabileWohnsituation', label: 'Stabile Wohnsituation', punkte: 2 },
            { id: 'finanzielleSicherheit', label: 'Finanzielle Sicherheit', punkte: 2 },
            { id: 'zukunftsperspektiven', label: 'Berufliche/schulische Perspektiven', punkte: 1 },
            { id: 'gesundheitsversorgung', label: 'Zugang zu Gesundheitsversorgung', punkte: 1 }
        ],
        relational: [
            { id: 'positiveElternbeziehung', label: 'Positive Beziehung zu mind. einem Elternteil', punkte: 3 },
            { id: 'geschwisterunterstuetzung', label: 'Unterstützende Geschwisterbeziehung', punkte: 2 },
            { id: 'erweiterteFamilie', label: 'Kontakt zu erweiterter Familie', punkte: 1 },
            { id: 'familienZusammenhalt', label: 'Familiärer Zusammenhalt', punkte: 2 }
        ],
        kommunikativ: [
            { id: 'offeneKommunikation', label: 'Offene Kommunikation in der Familie', punkte: 2 },
            { id: 'konfliktloesefaehigkeit', label: 'Konstruktive Konfliktlösung', punkte: 2 },
            { id: 'emotionaleUnterstuetzung', label: 'Emotionale Unterstützung', punkte: 2 }
        ],
        kulturell: [
            { id: 'kulturelleIdentitaet', label: 'Positive kulturelle Identität', punkte: 1 },
            { id: 'religioeseSpiritualitaet', label: 'Religiöse/spirituelle Ressourcen', punkte: 1 },
            { id: 'traditionen', label: 'Positive Familientraditionen', punkte: 1 }
        ]
    },

    // Familienressourcen bewerten
    bewerteFamilienressourcen: function(ressourcenChecked) {
        let gesamtpunkte = 0;
        let maxPunkte = 0;
        const kategorien = {};

        Object.entries(this.familienressourcenCheckliste).forEach(([kategorie, items]) => {
            kategorien[kategorie] = { erreicht: 0, max: 0, items: [] };
            items.forEach(item => {
                maxPunkte += item.punkte;
                kategorien[kategorie].max += item.punkte;
                if (ressourcenChecked[item.id]) {
                    gesamtpunkte += item.punkte;
                    kategorien[kategorie].erreicht += item.punkte;
                    kategorien[kategorie].items.push(item.label);
                }
            });
        });

        const prozent = Math.round((gesamtpunkte / maxPunkte) * 100);

        let interpretation;
        if (prozent >= 75) {
            interpretation = {
                niveau: 'hoch',
                beschreibung: 'Hohe Familienressourcen - gute protektive Faktoren vorhanden',
                empfehlung: 'Familienressourcen in Therapie aktiv nutzen, Family-based Interventionen besonders geeignet'
            };
        } else if (prozent >= 50) {
            interpretation = {
                niveau: 'mittel',
                beschreibung: 'Moderate Familienressourcen - einige Stärken, aber auch Defizite',
                empfehlung: 'Gezielte Stärkung der Familienressourcen, ggf. Familientherapie empfehlen'
            };
        } else if (prozent >= 25) {
            interpretation = {
                niveau: 'niedrig',
                beschreibung: 'Eingeschränkte Familienressourcen - deutliche Belastungen',
                empfehlung: 'Außerfamiliäre Ressourcen stärken, Jugendhilfe-Kooperation prüfen'
            };
        } else {
            interpretation = {
                niveau: 'kritisch',
                beschreibung: 'Kaum Familienressourcen vorhanden - familiäre Situation als Belastungsfaktor',
                empfehlung: 'Kindeswohlgefährdung prüfen, Jugendhilfe einbeziehen, alternative Unterstützungssysteme aufbauen'
            };
        }

        return {
            gesamtpunkte,
            maxPunkte,
            prozent,
            kategorien,
            interpretation
        };
    },

    // Circumplex-Modell nach Olson (FACES)
    circumplexModell: {
        kohaesion: {
            skala: [
                { niveau: 'losgeloest', punkte: [1, 2], beschreibung: 'Losgelöst - extreme emotionale Distanz, wenig Bindung' },
                { niveau: 'getrennt', punkte: [3, 4], beschreibung: 'Getrennt - etwas Distanz, aber Bindung vorhanden (balanciert)' },
                { niveau: 'verbunden', punkte: [5, 6], beschreibung: 'Verbunden - emotionale Nähe mit Autonomie (balanciert)' },
                { niveau: 'verstrickt', punkte: [7, 8], beschreibung: 'Verstrickt - extreme Nähe, wenig Autonomie' }
            ],
            fragen: [
                { id: 'emotionaleNaehe', text: 'Familienmitglieder fühlen sich emotional sehr nah' },
                { id: 'gemeinsameZeit', text: 'Die Familie verbringt gerne Zeit miteinander' },
                { id: 'unterstuetzung', text: 'Familienmitglieder unterstützen sich gegenseitig' },
                { id: 'autonomie', text: 'Jedes Familienmitglied hat eigene Interessen und Freunde' }
            ]
        },
        flexibilitaet: {
            skala: [
                { niveau: 'rigide', punkte: [1, 2], beschreibung: 'Rigide - starre Regeln, autoritäre Führung' },
                { niveau: 'strukturiert', punkte: [3, 4], beschreibung: 'Strukturiert - klare Regeln mit Flexibilität (balanciert)' },
                { niveau: 'flexibel', punkte: [5, 6], beschreibung: 'Flexibel - wenig feste Regeln, demokratisch (balanciert)' },
                { niveau: 'chaotisch', punkte: [7, 8], beschreibung: 'Chaotisch - keine klaren Regeln, wechselnde Führung' }
            ],
            fragen: [
                { id: 'regeln', text: 'Es gibt klare Familienregeln' },
                { id: 'entscheidungen', text: 'Entscheidungen werden gemeinsam getroffen' },
                { id: 'rollenFlexibilitaet', text: 'Rollen können je nach Situation wechseln' },
                { id: 'veraenderungsbereitschaft', text: 'Die Familie kann sich an Veränderungen anpassen' }
            ]
        },
        interpretiere: function(kohaesionScore, flexibilitaetScore) {
            let kohaesionNiveau, flexibilitaetNiveau;

            this.kohaesion.skala.forEach(s => {
                if (kohaesionScore >= s.punkte[0] && kohaesionScore <= s.punkte[1]) {
                    kohaesionNiveau = s;
                }
            });

            this.flexibilitaet.skala.forEach(s => {
                if (flexibilitaetScore >= s.punkte[0] && flexibilitaetScore <= s.punkte[1]) {
                    flexibilitaetNiveau = s;
                }
            });

            // Balancierte Familien: getrennt/verbunden + strukturiert/flexibel
            const istBalanciert =
                ['getrennt', 'verbunden'].includes(kohaesionNiveau?.niveau) &&
                ['strukturiert', 'flexibel'].includes(flexibilitaetNiveau?.niveau);

            return {
                kohaesion: kohaesionNiveau,
                flexibilitaet: flexibilitaetNiveau,
                familientyp: istBalanciert ? 'balanciert' : 'unbalanciert',
                empfehlung: istBalanciert
                    ? 'Balanciertes Familiensystem - gute Voraussetzungen für familienbasierte Interventionen'
                    : 'Unbalanciertes Familiensystem - Familientherapie zur Verbesserung der Familienstruktur empfohlen'
            };
        }
    },

    // UI für Genogramm-Builder generieren
    generateGenogrammBuilderUI: function() {
        return `
            <div class="family-tools-container">
                <h3>🌳 Genogramm-Builder</h3>

                <div class="genogramm-toolbar">
                    <button type="button" onclick="FamilyToolsModule.addPerson('maennlich')" class="btn-tool">
                        □ Männlich
                    </button>
                    <button type="button" onclick="FamilyToolsModule.addPerson('weiblich')" class="btn-tool">
                        ○ Weiblich
                    </button>
                    <button type="button" onclick="FamilyToolsModule.addPerson('divers')" class="btn-tool">
                        ◇ Divers
                    </button>
                    <button type="button" onclick="FamilyToolsModule.markAsIndexpatient()" class="btn-tool btn-primary">
                        ⟁ Indexpatient
                    </button>
                </div>

                <div class="genogramm-canvas" id="genogramm-canvas">
                    <p class="placeholder-text">Klicken Sie auf die Buttons oben, um Familienmitglieder hinzuzufügen</p>
                </div>

                <div class="genogramm-details" id="genogramm-details" style="display:none;">
                    <h4>Person bearbeiten</h4>
                    <form id="person-edit-form">
                        <div class="form-group">
                            <label>Name:</label>
                            <input type="text" id="person-name" class="form-input">
                        </div>
                        <div class="form-group">
                            <label>Alter:</label>
                            <input type="number" id="person-alter" class="form-input" min="0" max="120">
                        </div>
                        <div class="form-group">
                            <label>Generation:</label>
                            <select id="person-generation" class="form-select">
                                <option value="-2">Großeltern</option>
                                <option value="-1">Eltern</option>
                                <option value="0">Patient/Geschwister</option>
                                <option value="1">Kinder</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>
                                <input type="checkbox" id="person-verstorben"> Verstorben
                            </label>
                        </div>
                        <div class="form-group" id="todesursache-group" style="display:none;">
                            <label>Todesursache:</label>
                            <input type="text" id="person-todesursache" class="form-input">
                        </div>
                        <div class="form-group">
                            <label>Psychische Erkrankungen:</label>
                            <select id="person-erkrankung" class="form-select">
                                <option value="">-- Auswählen --</option>
                                ${this.haeufigePsychischeErkrankungen.map(e =>
                                    `<option value="${e.id}">${e.label}</option>`
                                ).join('')}
                            </select>
                            <button type="button" onclick="FamilyToolsModule.addErkrankung()" class="btn-small">+ Hinzufügen</button>
                            <ul id="erkrankungen-liste"></ul>
                        </div>
                        <div class="form-group">
                            <label>Notizen:</label>
                            <textarea id="person-notizen" class="form-textarea"></textarea>
                        </div>
                        <button type="button" onclick="FamilyToolsModule.savePerson()" class="btn-primary">Speichern</button>
                    </form>
                </div>

                <div class="genogramm-legende">
                    <h4>Legende</h4>
                    <div class="legende-grid">
                        <span>□ Männlich</span>
                        <span>○ Weiblich</span>
                        <span>◇ Divers</span>
                        <span>✕ Verstorben</span>
                        <span>◐ Psych. Erkrankung</span>
                        <span>▣ Sucht</span>
                        <span>═══ Enge Beziehung</span>
                        <span>⚡⚡⚡ Konflikt</span>
                    </div>
                </div>

                <div class="genogramm-actions">
                    <button type="button" onclick="FamilyToolsModule.analyzeGenogramm()" class="btn-primary">
                        📊 Analysieren
                    </button>
                    <button type="button" onclick="FamilyToolsModule.exportGenogramm()" class="btn-secondary">
                        📄 Exportieren
                    </button>
                </div>

                <div id="genogramm-analyse" class="analyse-result" style="display:none;"></div>
            </div>
        `;
    },

    // UI für Familienressourcen
    generateRessourcenUI: function() {
        let html = `
            <div class="ressourcen-container">
                <h3>💪 Familienressourcen-Assessment</h3>
                <p class="info-text">Erfassen Sie die vorhandenen Ressourcen in der Familie des Patienten.</p>
        `;

        Object.entries(this.familienressourcenCheckliste).forEach(([kategorie, items]) => {
            const kategorieLabel = {
                strukturell: '🏠 Strukturelle Ressourcen',
                relational: '👨‍👩‍👧‍👦 Relationale Ressourcen',
                kommunikativ: '💬 Kommunikative Ressourcen',
                kulturell: '🌍 Kulturelle Ressourcen'
            }[kategorie];

            html += `
                <div class="ressourcen-kategorie">
                    <h4>${kategorieLabel}</h4>
                    ${items.map(item => `
                        <label class="checkbox-item">
                            <input type="checkbox" id="res_${item.id}" data-punkte="${item.punkte}">
                            ${item.label}
                        </label>
                    `).join('')}
                </div>
            `;
        });

        html += `
                <button type="button" onclick="FamilyToolsModule.evaluateRessourcen()" class="btn-primary">
                    Ressourcen auswerten
                </button>
                <div id="ressourcen-ergebnis" class="analyse-result" style="display:none;"></div>
            </div>
        `;

        return html;
    },

    // UI für Circumplex-Modell
    generateCircumplexUI: function() {
        return `
            <div class="circumplex-container">
                <h3>📐 Circumplex-Modell (nach Olson)</h3>
                <p class="info-text">Bewerten Sie Kohäsion und Flexibilität der Familie.</p>

                <div class="circumplex-skala">
                    <h4>Familiäre Kohäsion</h4>
                    <p class="skala-beschreibung">Wie eng ist die emotionale Bindung in der Familie?</p>
                    <input type="range" id="circumplex-kohaesion" min="1" max="8" value="4"
                           oninput="FamilyToolsModule.updateCircumplexLabel('kohaesion', this.value)">
                    <div class="skala-labels">
                        <span>Losgelöst</span>
                        <span>Getrennt</span>
                        <span>Verbunden</span>
                        <span>Verstrickt</span>
                    </div>
                    <p id="kohaesion-label" class="niveau-label">Getrennt - etwas Distanz, aber Bindung vorhanden (balanciert)</p>
                </div>

                <div class="circumplex-skala">
                    <h4>Familiäre Flexibilität</h4>
                    <p class="skala-beschreibung">Wie flexibel ist die Familie in Regeln und Rollen?</p>
                    <input type="range" id="circumplex-flexibilitaet" min="1" max="8" value="4"
                           oninput="FamilyToolsModule.updateCircumplexLabel('flexibilitaet', this.value)">
                    <div class="skala-labels">
                        <span>Rigide</span>
                        <span>Strukturiert</span>
                        <span>Flexibel</span>
                        <span>Chaotisch</span>
                    </div>
                    <p id="flexibilitaet-label" class="niveau-label">Strukturiert - klare Regeln mit Flexibilität (balanciert)</p>
                </div>

                <button type="button" onclick="FamilyToolsModule.evaluateCircumplex()" class="btn-primary">
                    Familientyp bestimmen
                </button>

                <div id="circumplex-ergebnis" class="analyse-result" style="display:none;"></div>
            </div>
        `;
    },

    // Circumplex Label aktualisieren
    updateCircumplexLabel: function(dimension, value) {
        const skala = this.circumplexModell[dimension === 'kohaesion' ? 'kohaesion' : 'flexibilitaet'].skala;
        let beschreibung = '';

        skala.forEach(s => {
            if (parseInt(value) >= s.punkte[0] && parseInt(value) <= s.punkte[1]) {
                beschreibung = s.beschreibung;
            }
        });

        document.getElementById(`${dimension}-label`).textContent = beschreibung;
    },

    // Circumplex auswerten
    evaluateCircumplex: function() {
        const kohaesion = parseInt(document.getElementById('circumplex-kohaesion').value);
        const flexibilitaet = parseInt(document.getElementById('circumplex-flexibilitaet').value);

        const ergebnis = this.circumplexModell.interpretiere(kohaesion, flexibilitaet);

        const resultDiv = document.getElementById('circumplex-ergebnis');
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = `
            <h4>Ergebnis: ${ergebnis.familientyp === 'balanciert' ? '✅' : '⚠️'} ${ergebnis.familientyp.charAt(0).toUpperCase() + ergebnis.familientyp.slice(1)}es Familiensystem</h4>

            <div class="ergebnis-detail">
                <p><strong>Kohäsion:</strong> ${ergebnis.kohaesion?.beschreibung || 'Nicht bestimmt'}</p>
                <p><strong>Flexibilität:</strong> ${ergebnis.flexibilitaet?.beschreibung || 'Nicht bestimmt'}</p>
            </div>

            <div class="empfehlung-box">
                <h5>💡 Therapeutische Empfehlung:</h5>
                <p>${ergebnis.empfehlung}</p>
            </div>

            <div class="referenz-box">
                <small>Referenz: Olson, D.H. (2000). Circumplex Model of Marital and Family Systems. Journal of Family Therapy, 22(2), 144-167.</small>
            </div>
        `;
    },

    // Ressourcen auswerten
    evaluateRessourcen: function() {
        const ressourcenChecked = {};

        Object.values(this.familienressourcenCheckliste).flat().forEach(item => {
            const checkbox = document.getElementById(`res_${item.id}`);
            if (checkbox) {
                ressourcenChecked[item.id] = checkbox.checked;
            }
        });

        const ergebnis = this.bewerteFamilienressourcen(ressourcenChecked);

        const resultDiv = document.getElementById('ressourcen-ergebnis');
        resultDiv.style.display = 'block';

        let kategorienHtml = '';
        Object.entries(ergebnis.kategorien).forEach(([kat, data]) => {
            const prozent = data.max > 0 ? Math.round((data.erreicht / data.max) * 100) : 0;
            kategorienHtml += `
                <div class="kategorie-bar">
                    <span class="kategorie-name">${kat}</span>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${prozent}%"></div>
                    </div>
                    <span class="kategorie-prozent">${prozent}%</span>
                </div>
            `;
        });

        resultDiv.innerHTML = `
            <h4>Familienressourcen: ${ergebnis.interpretation.niveau.toUpperCase()}</h4>

            <div class="ressourcen-score">
                <div class="score-circle ${ergebnis.interpretation.niveau}">
                    ${ergebnis.prozent}%
                </div>
                <p>${ergebnis.interpretation.beschreibung}</p>
            </div>

            <div class="kategorien-uebersicht">
                <h5>Ressourcen nach Kategorie:</h5>
                ${kategorienHtml}
            </div>

            <div class="empfehlung-box">
                <h5>💡 Empfehlung:</h5>
                <p>${ergebnis.interpretation.empfehlung}</p>
            </div>
        `;
    },

    // Aktuelles Genogramm (State)
    currentGenogramm: null,
    selectedPersonId: null,

    // Person hinzufügen
    addPerson: function(geschlecht) {
        if (!this.currentGenogramm) {
            this.currentGenogramm = this.createGenogramm();
        }

        const person = this.createFamilienmitglied({
            geschlecht: geschlecht,
            generation: 0
        });

        this.currentGenogramm.mitglieder.push(person);
        this.selectedPersonId = person.id;
        this.renderGenogramm();
        this.showPersonDetails(person);
    },

    // Genogramm rendern
    renderGenogramm: function() {
        const canvas = document.getElementById('genogramm-canvas');
        if (!canvas || !this.currentGenogramm) return;

        if (this.currentGenogramm.mitglieder.length === 0) {
            canvas.innerHTML = '<p class="placeholder-text">Klicken Sie auf die Buttons oben, um Familienmitglieder hinzuzufügen</p>';
            return;
        }

        // Gruppiere nach Generation
        const generationen = {};
        this.currentGenogramm.mitglieder.forEach(m => {
            if (!generationen[m.generation]) {
                generationen[m.generation] = [];
            }
            generationen[m.generation].push(m);
        });

        let html = '<div class="genogramm-visual">';

        // Sortiere Generationen
        Object.keys(generationen).sort((a, b) => parseInt(a) - parseInt(b)).forEach(gen => {
            const genLabel = {
                '-2': 'Großeltern',
                '-1': 'Eltern',
                '0': 'Patient/Geschwister',
                '1': 'Kinder'
            }[gen] || `Generation ${gen}`;

            html += `<div class="generation-row" data-generation="${gen}">
                <span class="generation-label">${genLabel}</span>
                <div class="persons-row">`;

            generationen[gen].forEach(person => {
                const symbol = this.genogrammSymbole.personen[person.geschlecht]?.symbol || '?';
                const isIndex = this.currentGenogramm.indexpatient === person.id;
                const isSelected = this.selectedPersonId === person.id;
                const hasIllness = person.psychischeErkrankungen && person.psychischeErkrankungen.length > 0;

                html += `
                    <div class="person-node ${isSelected ? 'selected' : ''} ${isIndex ? 'index-patient' : ''}"
                         onclick="FamilyToolsModule.selectPerson('${person.id}')">
                        <span class="person-symbol ${!person.lebend ? 'verstorben' : ''} ${hasIllness ? 'has-illness' : ''}">
                            ${symbol}${!person.lebend ? '✕' : ''}${hasIllness ? '◐' : ''}
                        </span>
                        <span class="person-name">${person.name || '?'}</span>
                        ${person.alter ? `<span class="person-alter">${person.alter}J</span>` : ''}
                    </div>
                `;
            });

            html += '</div></div>';
        });

        html += '</div>';
        canvas.innerHTML = html;
    },

    // Person auswählen
    selectPerson: function(personId) {
        this.selectedPersonId = personId;
        const person = this.currentGenogramm.mitglieder.find(m => m.id === personId);
        if (person) {
            this.showPersonDetails(person);
        }
        this.renderGenogramm();
    },

    // Person-Details anzeigen
    showPersonDetails: function(person) {
        const detailsDiv = document.getElementById('genogramm-details');
        if (!detailsDiv) return;

        detailsDiv.style.display = 'block';

        document.getElementById('person-name').value = person.name || '';
        document.getElementById('person-alter').value = person.alter || '';
        document.getElementById('person-generation').value = person.generation;
        document.getElementById('person-verstorben').checked = !person.lebend;
        document.getElementById('person-notizen').value = person.notizen || '';

        const todesursacheGroup = document.getElementById('todesursache-group');
        if (todesursacheGroup) {
            todesursacheGroup.style.display = !person.lebend ? 'block' : 'none';
            document.getElementById('person-todesursache').value = person.todesursache || '';
        }

        // Erkrankungen-Liste
        const erkrankungenListe = document.getElementById('erkrankungen-liste');
        if (erkrankungenListe) {
            erkrankungenListe.innerHTML = (person.psychischeErkrankungen || []).map(e =>
                `<li>${e.label || e} <button type="button" onclick="FamilyToolsModule.removeErkrankung('${e.id || e}')" class="btn-tiny">×</button></li>`
            ).join('');
        }
    },

    // Person speichern
    savePerson: function() {
        if (!this.selectedPersonId || !this.currentGenogramm) return;

        const person = this.currentGenogramm.mitglieder.find(m => m.id === this.selectedPersonId);
        if (!person) return;

        person.name = document.getElementById('person-name').value;
        person.alter = parseInt(document.getElementById('person-alter').value) || null;
        person.generation = parseInt(document.getElementById('person-generation').value);
        person.lebend = !document.getElementById('person-verstorben').checked;
        person.todesursache = document.getElementById('person-todesursache')?.value || null;
        person.notizen = document.getElementById('person-notizen').value;

        this.renderGenogramm();
    },

    // Erkrankung hinzufügen
    addErkrankung: function() {
        if (!this.selectedPersonId || !this.currentGenogramm) return;

        const person = this.currentGenogramm.mitglieder.find(m => m.id === this.selectedPersonId);
        if (!person) return;

        const select = document.getElementById('person-erkrankung');
        const erkrankungId = select.value;
        if (!erkrankungId) return;

        const erkrankung = this.haeufigePsychischeErkrankungen.find(e => e.id === erkrankungId);
        if (erkrankung && !person.psychischeErkrankungen.some(e => e.id === erkrankungId)) {
            person.psychischeErkrankungen.push(erkrankung);
            this.showPersonDetails(person);
            this.renderGenogramm();
        }

        select.value = '';
    },

    // Erkrankung entfernen
    removeErkrankung: function(erkrankungId) {
        if (!this.selectedPersonId || !this.currentGenogramm) return;

        const person = this.currentGenogramm.mitglieder.find(m => m.id === this.selectedPersonId);
        if (!person) return;

        person.psychischeErkrankungen = person.psychischeErkrankungen.filter(e => (e.id || e) !== erkrankungId);
        this.showPersonDetails(person);
        this.renderGenogramm();
    },

    // Als Indexpatient markieren
    markAsIndexpatient: function() {
        if (!this.selectedPersonId || !this.currentGenogramm) {
            alert('Bitte wählen Sie zuerst eine Person aus.');
            return;
        }

        this.currentGenogramm.indexpatient = this.selectedPersonId;
        this.renderGenogramm();
    },

    // Genogramm analysieren
    analyzeGenogramm: function() {
        if (!this.currentGenogramm || this.currentGenogramm.mitglieder.length === 0) {
            alert('Bitte fügen Sie zuerst Familienmitglieder hinzu.');
            return;
        }

        const muster = this.identifiziereTransgenerationaleMuster(this.currentGenogramm);
        const subsysteme = this.analysiereSubsysteme(this.currentGenogramm);

        const analyseDiv = document.getElementById('genogramm-analyse');
        if (!analyseDiv) return;

        analyseDiv.style.display = 'block';

        let musterHtml = '';
        if (muster.length > 0) {
            musterHtml = muster.map(m => `
                <div class="muster-item ${m.typ === 'suizidcluster' ? 'warnung' : ''}">
                    <strong>${m.typ === 'suizidcluster' ? '⚠️' : '📊'} ${m.typ}</strong>
                    <p>${m.klinischeBedeutung}</p>
                </div>
            `).join('');
        } else {
            musterHtml = '<p>Keine auffälligen transgenerationalen Muster identifiziert.</p>';
        }

        analyseDiv.innerHTML = `
            <h4>📊 Genogramm-Analyse</h4>

            <div class="analyse-section">
                <h5>Transgenerationale Muster</h5>
                ${musterHtml}
            </div>

            <div class="analyse-section">
                <h5>Subsystemanalyse</h5>
                <p><strong>Elternsubsystem:</strong> ${subsysteme.elternsubsystem.mitglieder.length} Mitglieder</p>
                <p><strong>Geschwistersubsystem:</strong> ${subsysteme.geschwistersubsystem.mitglieder.length} Mitglieder</p>
                ${subsysteme.generationsuebergreifend.triangulierungen.length > 0 ?
                    `<p class="warnung">⚠️ ${subsysteme.generationsuebergreifend.triangulierungen.length} mögliche Triangulierung(en) identifiziert</p>` : ''}
            </div>

            <div class="referenz-box">
                <small>Basierend auf: McGoldrick, M., Gerson, R., & Petry, S. (2020). Genograms: Assessment and Treatment.</small>
            </div>
        `;
    },

    // Genogramm exportieren
    exportGenogramm: function() {
        if (!this.currentGenogramm) {
            alert('Kein Genogramm vorhanden.');
            return;
        }

        let exportText = '═══════════════════════════════════════\n';
        exportText += '          GENOGRAMM-EXPORT\n';
        exportText += '═══════════════════════════════════════\n\n';
        exportText += `Erstellt am: ${new Date().toLocaleDateString('de-DE')}\n\n`;

        // Gruppiere nach Generation
        const generationen = {};
        this.currentGenogramm.mitglieder.forEach(m => {
            if (!generationen[m.generation]) {
                generationen[m.generation] = [];
            }
            generationen[m.generation].push(m);
        });

        Object.keys(generationen).sort((a, b) => parseInt(a) - parseInt(b)).forEach(gen => {
            const genLabel = {
                '-2': 'GROSSELTERN',
                '-1': 'ELTERN',
                '0': 'PATIENT/GESCHWISTER',
                '1': 'KINDER'
            }[gen] || `GENERATION ${gen}`;

            exportText += `\n--- ${genLabel} ---\n`;

            generationen[gen].forEach(person => {
                const symbol = this.genogrammSymbole.personen[person.geschlecht]?.beschreibung || 'Unbekannt';
                const isIndex = this.currentGenogramm.indexpatient === person.id;

                exportText += `\n${isIndex ? '>>> ' : ''}${person.name || 'Unbenannt'} ${isIndex ? '(INDEXPATIENT) <<<' : ''}\n`;
                exportText += `  Geschlecht: ${symbol}\n`;
                if (person.alter) exportText += `  Alter: ${person.alter} Jahre\n`;
                exportText += `  Status: ${person.lebend ? 'Lebend' : 'Verstorben'}\n`;
                if (!person.lebend && person.todesursache) {
                    exportText += `  Todesursache: ${person.todesursache}\n`;
                }
                if (person.psychischeErkrankungen && person.psychischeErkrankungen.length > 0) {
                    exportText += `  Psych. Erkrankungen: ${person.psychischeErkrankungen.map(e => e.label || e).join(', ')}\n`;
                }
                if (person.notizen) {
                    exportText += `  Notizen: ${person.notizen}\n`;
                }
            });
        });

        // Analyse hinzufügen
        const muster = this.identifiziereTransgenerationaleMuster(this.currentGenogramm);
        if (muster.length > 0) {
            exportText += '\n\n═══════════════════════════════════════\n';
            exportText += '     TRANSGENERATIONALE MUSTER\n';
            exportText += '═══════════════════════════════════════\n';
            muster.forEach(m => {
                exportText += `\n• ${m.typ.toUpperCase()}\n`;
                exportText += `  ${m.klinischeBedeutung}\n`;
            });
        }

        // Als Download anbieten
        const blob = new Blob([exportText], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Genogramm_${new Date().toISOString().split('T')[0]}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
};

// Export für globalen Zugriff
if (typeof window !== 'undefined') {
    window.FamilyToolsModule = FamilyToolsModule;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = FamilyToolsModule;
}
