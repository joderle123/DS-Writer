/**
 * Psychoedukation Modul
 * Druckbare Handouts für Patienten, Eltern und Schulen
 *
 * Wissenschaftliche Grundlagen:
 * - Colom, F. & Vieta, E. (2006). Psychoeducation Manual for Bipolar Disorder
 * - Fristad, M.A. et al. (2009). Family Psychoeducation
 * - Lukens, E.P. & McFarlane, W.R. (2004). Psychoeducation as Evidence-Based Practice
 */

const PsychoeducationModule = {

    // Verfügbare Handouts nach Kategorie
    handoutKategorien: {
        diagnosen: {
            label: '📋 Diagnose-Infoblätter',
            beschreibung: 'Informationen zu psychischen Störungen'
        },
        therapie: {
            label: '💊 Behandlung & Therapie',
            beschreibung: 'Infos zu Therapieformen und Medikation'
        },
        eltern: {
            label: '👨‍👩‍👧 Elternratgeber',
            beschreibung: 'Tipps für Eltern psychisch erkrankter Kinder'
        },
        schule: {
            label: '🏫 Schule & Lernen',
            beschreibung: 'Informationen für Lehrkräfte und Schule'
        },
        kinder: {
            label: '🧒 Für Kinder/Jugendliche',
            beschreibung: 'Altersgerechte Erklärungen'
        },
        alltag: {
            label: '🌟 Alltag & Selbsthilfe',
            beschreibung: 'Praktische Tipps für den Alltag'
        }
    },

    // Handout-Bibliothek
    handouts: {
        // ADHS
        adhs_info: {
            kategorie: 'diagnosen',
            titel: 'ADHS bei Kindern und Jugendlichen',
            zielgruppe: ['eltern', 'jugendliche'],
            inhalt: {
                wasIst: {
                    titel: 'Was ist ADHS?',
                    text: `ADHS (Aufmerksamkeitsdefizit-Hyperaktivitätsstörung) ist eine neurobiologische Entwicklungsstörung, die etwa 5-7% aller Kinder betrifft.

Die drei Kernsymptome sind:
• Aufmerksamkeitsprobleme (leicht ablenkbar, vergesslich, Schwierigkeiten bei Details)
• Hyperaktivität (ständig in Bewegung, kann nicht stillsitzen, redet viel)
• Impulsivität (handelt ohne nachzudenken, unterbricht andere, kann nicht warten)

ADHS ist KEINE Folge von schlechter Erziehung oder mangelnder Disziplin!`
                },
                ursachen: {
                    titel: 'Wie entsteht ADHS?',
                    text: `ADHS hat überwiegend genetische Ursachen (70-80% Erblichkeit).

Im Gehirn liegt eine Besonderheit der Botenstoffe Dopamin und Noradrenalin vor. Bildgebende Studien zeigen Unterschiede in Hirnregionen, die für Aufmerksamkeit und Impulskontrolle zuständig sind.

ADHS ist KEINE Charakterschwäche, sondern eine neurobiologische Besonderheit!`
                },
                behandlung: {
                    titel: 'Wie wird ADHS behandelt?',
                    text: `Die Behandlung erfolgt multimodal (mehrdimensional):

1. Psychoedukation: Informationen für Kind, Eltern, Schule
2. Verhaltenstherapie: Strategien für den Alltag lernen
3. Elterntraining: Erziehungsstrategien anpassen
4. Schulische Unterstützung: Nachteilsausgleich, Sitzplatz vorne
5. Medikation: Bei mittelschwerer bis schwerer ADHS (Methylphenidat, Lisdexamfetamin)

Die Kombination ist am wirksamsten!`
                },
                tippsAlltag: {
                    titel: 'Tipps für den Alltag',
                    liste: [
                        'Klare Strukturen und Routinen schaffen',
                        'Aufgaben in kleine Schritte unterteilen',
                        'Kurze, klare Anweisungen geben',
                        'Positives Verhalten verstärken (Lob!)',
                        'Bewegungspausen einplanen',
                        'Ablenkungen minimieren (Arbeitsplatz)',
                        'Timer und visuelle Hilfsmittel nutzen',
                        'Geduld haben und nicht persönlich nehmen'
                    ]
                }
            },
            quellen: [
                'Döpfner, M. et al. (2019). ADHS-Ratgeber. Hogrefe.',
                'Barkley, R.A. (2015). Attention-Deficit Hyperactivity Disorder. Guilford Press.',
                'AWMF S3-Leitlinie ADHS bei Kindern, Jugendlichen und Erwachsenen (2018)'
            ]
        },

        adhs_schule: {
            kategorie: 'schule',
            titel: 'ADHS im Schulalltag - Information für Lehrkräfte',
            zielgruppe: ['lehrer'],
            inhalt: {
                verstaendnis: {
                    titel: 'ADHS verstehen',
                    text: `Schüler mit ADHS haben Schwierigkeiten mit Aufmerksamkeit, Impulskontrolle und/oder Aktivitätsniveau. Dies ist KEINE Willenssache!

Das Verhalten ist nicht gegen Sie persönlich gerichtet. Das Kind KANN in diesem Moment nicht anders.`
                },
                unterricht: {
                    titel: 'Unterstützung im Unterricht',
                    liste: [
                        'Sitzplatz vorne, nahe der Lehrkraft, weg von Ablenkungen',
                        'Häufiger Blickkontakt und nonverbale Signale',
                        'Aufgaben in kleine Einheiten unterteilen',
                        'Klare, kurze Anweisungen (eine nach der anderen)',
                        'Regelmäßige Bewegungspausen ermöglichen',
                        'Positive Verstärkung bei erwünschtem Verhalten',
                        'Vorab-Signale vor Übergängen geben',
                        'Checklisten und visuelle Hilfsmittel bereitstellen'
                    ]
                },
                nachteilsausgleich: {
                    titel: 'Möglicher Nachteilsausgleich',
                    liste: [
                        'Zeitverlängerung bei Prüfungen',
                        'Separater, reizarmer Prüfungsraum',
                        'Häufigere Pausen',
                        'Mündliche statt schriftliche Prüfungen',
                        'Strukturierungshilfen (Checklisten)',
                        'Angepasste Hausaufgabenmenge'
                    ]
                },
                kommunikation: {
                    titel: 'Kommunikation mit dem Schüler',
                    text: `DO:
• Loben Sie konkretes positives Verhalten sofort
• Geben Sie klare, kurze Anweisungen
• Bleiben Sie ruhig und sachlich
• Nutzen Sie ein vereinbartes Signal bei Unaufmerksamkeit

DON'T:
• Öffentliche Bloßstellung vermeiden
• Keine langen Vorträge oder Ermahnungen
• Nicht mit anderen Schülern vergleichen
• Keine ironischen oder sarkastischen Kommentare`
                }
            },
            quellen: [
                'Bundesverband ADHS Deutschland e.V. - Leitfaden für Lehrkräfte',
                'DuPaul, G.J. & Stoner, G. (2014). ADHD in the Schools. Guilford Press.'
            ]
        },

        // Depression
        depression_info: {
            kategorie: 'diagnosen',
            titel: 'Depression bei Kindern und Jugendlichen',
            zielgruppe: ['eltern', 'jugendliche'],
            inhalt: {
                wasIst: {
                    titel: 'Was ist eine Depression?',
                    text: `Eine Depression ist eine ernste psychische Erkrankung - keine Willensschwäche oder "schlechte Laune"!

Bei Kindern und Jugendlichen zeigt sich Depression oft anders als bei Erwachsenen:
• Reizbarkeit und Wutausbrüche (statt Traurigkeit)
• Körperliche Beschwerden (Kopf-/Bauchschmerzen)
• Sozialer Rückzug
• Schulleistungsabfall
• Schlafprobleme
• Hoffnungslosigkeit, Zukunftsangst

Ca. 3-10% aller Jugendlichen sind betroffen.`
                },
                ursachen: {
                    titel: 'Wie entsteht eine Depression?',
                    text: `Depression entsteht durch das Zusammenspiel mehrerer Faktoren:

• Biologisch: Veranlagung, Botenstoffungleichgewicht im Gehirn
• Psychologisch: Negative Denkmuster, geringes Selbstwertgefühl
• Sozial: Belastende Lebensereignisse, Mobbing, Konflikte

Depression ist eine BEHANDELBARE Erkrankung!`
                },
                warnzeichen: {
                    titel: '⚠️ Warnzeichen ernst nehmen',
                    text: `Suchen Sie SOFORT Hilfe, wenn Ihr Kind:
• Äußerungen über Sinnlosigkeit/Todesgedanken macht
• Sich selbst verletzt
• Wertvolle Gegenstände verschenkt
• Sich völlig zurückzieht
• Abschiedsbriefe schreibt

Kinder- und Jugendpsychiatrische Notaufnahme aufsuchen oder 112 rufen!`
                },
                behandlung: {
                    titel: 'Behandlung',
                    text: `Wirksame Behandlungsmethoden:

1. Psychotherapie (Kognitive Verhaltenstherapie): Negative Denkmuster erkennen und verändern, Aktivitätsaufbau
2. Interpersonelle Therapie: Beziehungen und Kommunikation verbessern
3. Medikamente: Bei mittelschwerer bis schwerer Depression (SSRI wie Fluoxetin)

Die Kombination aus Therapie und Medikation ist oft am wirksamsten.`
                },
                elternTipps: {
                    titel: 'Was können Eltern tun?',
                    liste: [
                        'Zuhören ohne zu bewerten oder zu bagatellisieren',
                        'Gefühle ernst nehmen ("Es tut mir leid, dass es dir so geht")',
                        'Geduldig sein - Erholung braucht Zeit',
                        'Zu Aktivitäten ermutigen, aber nicht drängen',
                        'Für Routine und Struktur sorgen',
                        'Eigene Grenzen beachten und Hilfe annehmen',
                        'Therapie unterstützen und Termine einhalten',
                        'Hoffnung vermitteln: "Es wird besser werden"'
                    ]
                }
            },
            quellen: [
                'DGKJP S3-Leitlinie Depression im Kindes- und Jugendalter (2013)',
                'Weisz, J.R. et al. (2017). What Five Decades of Research Tells Us About the Effects of Youth Psychological Therapy. American Psychologist.'
            ]
        },

        // Angststörungen
        angst_info: {
            kategorie: 'diagnosen',
            titel: 'Angststörungen bei Kindern und Jugendlichen',
            zielgruppe: ['eltern', 'jugendliche'],
            inhalt: {
                wasIst: {
                    titel: 'Was sind Angststörungen?',
                    text: `Angst ist normal und schützt uns vor Gefahren. Bei einer Angststörung ist die Angst jedoch:
• Übermäßig stark
• In ungefährlichen Situationen
• Dauerhaft und beeinträchtigend

Häufige Angststörungen bei Kindern/Jugendlichen:
• Trennungsangst: Angst, von Bezugspersonen getrennt zu werden
• Soziale Angst: Angst vor Bewertung durch andere
• Spezifische Phobien: Angst vor bestimmten Objekten/Situationen
• Generalisierte Angst: Ständige Sorgen über viele Themen
• Panikstörung: Wiederkehrende Panikattacken`
                },
                symptome: {
                    titel: 'Wie zeigt sich Angst?',
                    text: `KÖRPERLICH:
• Herzklopfen, Schwitzen
• Zittern, Übelkeit
• Atemnot, Schwindel
• Kopf-/Bauchschmerzen

VERHALTEN:
• Vermeidung angstbesetzter Situationen
• Klammern an Eltern
• Schlafprobleme
• Schulverweigerung
• Weinen, Wutausbrüche

GEDANKEN:
• "Ich schaffe das nicht"
• "Alle werden mich auslachen"
• Katastrophendenken`
                },
                behandlung: {
                    titel: 'Behandlung: Das hilft!',
                    text: `Kognitive Verhaltenstherapie ist die beste Behandlung (Erfolgsrate >70%):

1. Psychoedukation: Angst verstehen
2. Kognitive Umstrukturierung: Hilfreiche Gedanken entwickeln
3. Exposition: Schrittweise Konfrontation mit der Angst
4. Entspannungstechniken: Atemübungen, Progressive Muskelrelaxation

Medikamente (SSRI) nur bei schwerer Angst oder wenn Therapie nicht ausreicht.`
                },
                exposition: {
                    titel: 'Warum Vermeidung nicht hilft',
                    text: `Wenn wir Angst haben, wollen wir die Situation vermeiden. Das bringt kurzfristig Erleichterung, aber:

• Die Angst wird langfristig STÄRKER
• Der Lebensraum wird immer kleiner
• Das Selbstvertrauen sinkt

EXPOSITION bedeutet: Sich der Angst schrittweise stellen und erleben, dass nichts Schlimmes passiert. Die Angst wird kleiner!`
                }
            },
            quellen: [
                'Schneider, S. & Margraf, J. (2019). Lehrbuch der Verhaltenstherapie (Band 3). Springer.',
                'Rapee, R.M. et al. (2008). Helping Your Anxious Child. New Harbinger.'
            ]
        },

        // Für Kinder: Was ist Angst?
        angst_kinder: {
            kategorie: 'kinder',
            titel: 'Angst - Was ist das eigentlich? (für Kinder)',
            zielgruppe: ['kinder'],
            inhalt: {
                einfuehrung: {
                    titel: '🦁 Angst ist normal!',
                    text: `Hallo! Weißt du was? JEDER hat manchmal Angst. Sogar Erwachsene. Sogar Superhelden!

Angst ist eigentlich ein guter Freund, der uns beschützen will. Er sagt: "Pass auf, das könnte gefährlich sein!"

Aber manchmal macht die Angst einen Fehler. Sie sagt "GEFAHR!" obwohl gar keine echte Gefahr da ist. Das ist dann wie ein Fehlalarm!`
                },
                koerper: {
                    titel: '🏃 Was passiert im Körper?',
                    text: `Wenn du Angst hast, bereitet sich dein Körper vor zu kämpfen oder wegzulaufen:

• Dein Herz klopft schneller ❤️
• Du atmest schneller 💨
• Dein Bauch fühlt sich komisch an 🦋
• Du schwitzt 💦

Das ist nicht gefährlich! Dein Körper will dir nur helfen.`
                },
                hilft: {
                    titel: '💪 Was hilft gegen Angst?',
                    liste: [
                        '🫁 ATMEN: Tief einatmen (zähle bis 4), halten (4), langsam ausatmen (6)',
                        '🧠 DENKEN: "Die Angst ist wie ein falscher Alarm. Es passiert nichts Schlimmes."',
                        '🦸 MUTIG SEIN: Je öfter du etwas trotz Angst machst, desto kleiner wird die Angst!',
                        '🗣️ REDEN: Erzähl jemandem von deiner Angst',
                        '⭐ BELOHNEN: Sei stolz auf dich, wenn du mutig warst!'
                    ]
                },
                angstleiter: {
                    titel: '🪜 Die Angstleiter',
                    text: `Stell dir vor, du hast Angst vor Hunden:

Stufe 1: Ein Bild von einem Hund anschauen
Stufe 2: Ein Video von einem Hund anschauen
Stufe 3: Einen Hund von weitem sehen
Stufe 4: Neben einem Hund stehen
Stufe 5: Einen Hund streicheln

Du fängst ganz unten an. Wenn das leicht wird, gehst du eine Stufe höher. So wirst du immer mutiger!`
                }
            },
            quellen: [
                'Altersgerecht adaptiert aus evidenzbasierten Therapiemanualen'
            ]
        },

        // Trauma
        trauma_eltern: {
            kategorie: 'eltern',
            titel: 'Wenn Kinder Schlimmes erlebt haben - Info für Eltern',
            zielgruppe: ['eltern'],
            inhalt: {
                wasIstTrauma: {
                    titel: 'Was ist ein Trauma?',
                    text: `Ein Trauma entsteht, wenn jemand etwas Schreckliches erlebt oder sieht, das die normalen Bewältigungsmöglichkeiten übersteigt:
• Unfälle, Naturkatastrophen
• Gewalt (erlebt oder beobachtet)
• Missbrauch oder Vernachlässigung
• Verlust einer nahestehenden Person
• Medizinische Eingriffe
• Krieg oder Flucht`
                },
                reaktionen: {
                    titel: 'Normale Reaktionen auf unnormale Erlebnisse',
                    text: `Nach einem traumatischen Erlebnis können folgende Reaktionen auftreten:

• Wiedererleben: Albträume, Flashbacks, belastendes Erinnern
• Vermeidung: Nicht darüber reden/nachdenken wollen, Orte meiden
• Übererregung: Schreckhaftigkeit, Schlafstörungen, Reizbarkeit
• Negative Gedanken: "Ich bin schuld", "Niemand kann mir helfen"

Diese Reaktionen sind NORMALE Reaktionen auf UNNORMALE Erlebnisse!`
                },
                helfen: {
                    titel: 'Wie können Eltern helfen?',
                    liste: [
                        'SICHERHEIT geben: "Du bist jetzt sicher bei uns"',
                        'ZUHÖREN wenn das Kind reden möchte, aber nicht drängen',
                        'GEFÜHLE ERLAUBEN: Alle Gefühle sind okay',
                        'ROUTINE aufrechterhalten für Stabilität',
                        'GEDULD haben - Heilung braucht Zeit',
                        'NICHT BAGATELLISIEREN: "Das war doch nicht so schlimm"',
                        'PROFESSIONELLE HILFE suchen, wenn Symptome anhalten'
                    ]
                },
                therapie: {
                    titel: 'Traumatherapie für Kinder',
                    text: `Wirksame Methoden:
• Traumafokussierte Kognitive Verhaltenstherapie (TF-KVT)
• EMDR (Eye Movement Desensitization and Reprocessing)

Diese Therapien helfen, das Erlebte zu verarbeiten und wieder ein normales Leben zu führen.

Bei einer Traumatherapie wird das Kind NICHT retraumatisiert, sondern behutsam und sicher durch den Verarbeitungsprozess begleitet.`
                }
            },
            quellen: [
                'Cohen, J.A. et al. (2017). Treating Trauma and Traumatic Grief in Children and Adolescents. Guilford Press.',
                'Van der Kolk, B.A. (2015). The Body Keeps the Score. Penguin.'
            ]
        },

        // Selbstverletzung
        svv_eltern: {
            kategorie: 'eltern',
            titel: 'Selbstverletzung bei Jugendlichen - Was Eltern wissen müssen',
            zielgruppe: ['eltern'],
            inhalt: {
                wasIst: {
                    titel: 'Was ist Selbstverletzung?',
                    text: `Selbstverletzendes Verhalten (SVV) bedeutet, sich absichtlich körperlich zu verletzen (z.B. Ritzen, Verbrennen), OHNE sterben zu wollen.

Ca. 25-35% aller Jugendlichen verletzen sich mindestens einmal selbst.

SVV ist ein Zeichen, dass der Jugendliche mit belastenden Gefühlen nicht anders umgehen kann - KEIN Manipulationsversuch und KEINE Aufmerksamkeitssuche!`
                },
                warum: {
                    titel: 'Warum verletzen sich Jugendliche?',
                    liste: [
                        'Um unerträgliche Gefühle (Wut, Trauer, Leere) zu regulieren',
                        'Um sich wieder "real" zu fühlen (bei Dissoziation)',
                        'Als Selbstbestrafung',
                        'Um inneren Schmerz nach außen zu bringen',
                        'Um Kontrolle über etwas zu haben'
                    ]
                },
                reagieren: {
                    titel: 'Wie sollten Eltern reagieren?',
                    text: `DO:
• Ruhig bleiben (auch wenn es schwerfällt)
• Zuhören und Verständnis zeigen
• Sagen: "Ich mache mir Sorgen und möchte dir helfen"
• Professionelle Hilfe suchen
• Wunden sachlich versorgen

DON'T:
• Vorwürfe machen ("Wie kannst du uns das antun!")
• Ultimaten stellen ("Wenn du das nochmal machst...")
• Ignorieren oder bagatellisieren
• Panik zeigen (verstärkt Scham)
• "Gegenstände verstecken reicht nicht!"`
                },
                hilfe: {
                    titel: 'Professionelle Hilfe',
                    text: `SVV sollte immer professionell behandelt werden!

• Kinder- und Jugendpsychiater/Psychotherapeut aufsuchen
• Dialektisch-Behaviorale Therapie (DBT-A) ist besonders wirksam
• Jugendliche lernen alternative Strategien zur Emotionsregulation

Notfall: Wenn Suizidgedanken dazukommen → sofort in die Kinder- und Jugendpsychiatrische Notaufnahme!`
                }
            },
            quellen: [
                'Plener, P.L. et al. (2016). Non-Suicidal Self-Injury in Adolescence. Deutsches Ärzteblatt.',
                'Linehan, M.M. (2015). DBT Skills Training Manual. Guilford Press.'
            ]
        },

        // Schlafhygiene
        schlaf_tipps: {
            kategorie: 'alltag',
            titel: 'Besser schlafen - Tipps für Kinder und Jugendliche',
            zielgruppe: ['kinder', 'jugendliche', 'eltern'],
            inhalt: {
                wichtig: {
                    titel: 'Warum ist Schlaf so wichtig?',
                    text: `Guter Schlaf ist SUPER wichtig für:
• Lernen und Gedächtnis 🧠
• Stimmung und Wohlbefinden 😊
• Körperliche Gesundheit 💪
• Konzentration 🎯

Kinder (6-12 J.) brauchen 9-12 Stunden Schlaf
Jugendliche (13-18 J.) brauchen 8-10 Stunden Schlaf`
                },
                schlafhygiene: {
                    titel: '🌙 Schlafhygiene-Regeln',
                    liste: [
                        '⏰ Feste Schlafenszeit - auch am Wochenende (max. 1h Unterschied)',
                        '📱 Keine Bildschirme 1 Stunde vor dem Schlafen (Blaulicht stört den Schlaf)',
                        '☕ Kein Koffein nach 14 Uhr (Cola, Energy Drinks, Kaffee)',
                        '🛏️ Bett nur zum Schlafen nutzen (nicht für Hausaufgaben, Handy, Essen)',
                        '🌡️ Zimmer kühl (16-18°C), dunkel und ruhig',
                        '🏃 Bewegung am Tag ja - aber nicht direkt vor dem Schlafen',
                        '🍽️ Nicht hungrig und nicht vollgegessen ins Bett'
                    ]
                },
                abendroutine: {
                    titel: '📝 Eine gute Abendroutine',
                    liste: [
                        '1. Bildschirme aus (1h vor dem Schlafen)',
                        '2. Ruhige Aktivität (Lesen, Musik hören, Malen)',
                        '3. Körperpflege (Zähneputzen, Waschen)',
                        '4. Entspannungsübung (Atemübung, Fantasiereise)',
                        '5. Gute-Nacht-Ritual (Geschichte, Gespräch)',
                        '6. Licht aus zur gleichen Zeit'
                    ]
                },
                einschlaftipps: {
                    titel: '😴 Wenn das Einschlafen schwerfällt',
                    text: `• Nicht auf die Uhr schauen!
• Wenn nach 20 Min. noch wach: Aufstehen, etwas Ruhiges tun (kein Bildschirm!), erst bei Müdigkeit zurück ins Bett
• Sorgen-Zeit: Schreibe Sorgen 1-2 Stunden vor dem Schlafen auf - dann sind sie "aufgeschrieben" und du musst nicht mehr daran denken
• 4-7-8 Atmung: Einatmen (4 Sek.), Halten (7 Sek.), Ausatmen (8 Sek.)`
                }
            },
            quellen: [
                'American Academy of Sleep Medicine (2016). Sleep Guidelines for Children',
                'Mindell, J.A. & Owens, J.A. (2015). A Clinical Guide to Pediatric Sleep. Lippincott.'
            ]
        },

        // Medikation
        medikation_info: {
            kategorie: 'therapie',
            titel: 'Psychopharmaka bei Kindern und Jugendlichen',
            zielgruppe: ['eltern'],
            inhalt: {
                allgemein: {
                    titel: 'Medikamente in der Kinder- und Jugendpsychiatrie',
                    text: `Medikamente können bei bestimmten psychischen Störungen ein wichtiger Teil der Behandlung sein - aber NICHT der einzige.

Sie werden eingesetzt, wenn:
• Die Symptome schwer sind
• Psychotherapie allein nicht ausreicht
• Eine schnelle Symptomlinderung nötig ist

Medikamente ersetzen NICHT die Therapie, sondern unterstützen sie!`
                },
                haeufig: {
                    titel: 'Häufig eingesetzte Medikamente',
                    text: `ADHS-Medikamente (Stimulanzien):
• Methylphenidat (z.B. Ritalin, Medikinet)
• Lisdexamfetamin (Elvanse)
Wirken auf Dopamin/Noradrenalin, verbessern Aufmerksamkeit

Antidepressiva (SSRI):
• Fluoxetin (als einziges für Depression bei Kindern zugelassen)
• Sertralin, Escitalopram
Wirken auf Serotonin, brauchen 2-4 Wochen bis zur vollen Wirkung

Atypische Antipsychotika:
• Risperidon, Aripiprazol
Bei schweren Verhaltensstörungen, Autismus, Psychosen`
                },
                nebenwirkungen: {
                    titel: 'Mögliche Nebenwirkungen',
                    text: `Jedes Medikament kann Nebenwirkungen haben. Häufige sind:

Stimulanzien: Appetitminderung, Schlafprobleme, Kopfschmerzen
→ Meist vorübergehend, regelmäßige Kontrollen wichtig

SSRI: Anfangs Übelkeit, Unruhe; bei Jugendlichen in den ersten Wochen evtl. verstärkte Suizidgedanken beobachten!
→ Engmaschige Überwachung zu Beginn

WICHTIG: Alle Nebenwirkungen dem Arzt mitteilen!`
                },
                fragen: {
                    titel: 'Fragen Sie den Arzt:',
                    liste: [
                        'Warum genau dieses Medikament?',
                        'Welche Wirkung ist zu erwarten und wann?',
                        'Welche Nebenwirkungen können auftreten?',
                        'Wie lange soll das Medikament genommen werden?',
                        'Was, wenn wir das Medikament absetzen wollen?',
                        'Welche Alternativen gibt es?',
                        'Wann sind Kontrolluntersuchungen nötig?'
                    ]
                }
            },
            quellen: [
                'Gerlach, M. et al. (2016). Neuro-Psychopharmaka im Kindes- und Jugendalter. Springer.',
                'DGKJP Leitlinien zur Pharmakotherapie'
            ]
        }
    },

    // Handout als druckbares HTML generieren
    generatePrintableHandout: function(handoutId) {
        const handout = this.handouts[handoutId];
        if (!handout) return '<p>Handout nicht gefunden.</p>';

        let html = `
            <div class="printable-handout">
                <div class="handout-header">
                    <h1>${handout.titel}</h1>
                    <p class="handout-meta">
                        Zielgruppe: ${handout.zielgruppe.map(z => {
                            const labels = {
                                eltern: 'Eltern',
                                jugendliche: 'Jugendliche',
                                kinder: 'Kinder',
                                lehrer: 'Lehrkräfte'
                            };
                            return labels[z] || z;
                        }).join(', ')}
                    </p>
                </div>

                <div class="handout-content">
        `;

        Object.entries(handout.inhalt).forEach(([key, section]) => {
            html += `
                <div class="handout-section">
                    <h2>${section.titel}</h2>
            `;

            if (section.text) {
                html += `<div class="section-text">${section.text.replace(/\n/g, '<br>')}</div>`;
            }

            if (section.liste) {
                html += '<ul class="section-list">';
                section.liste.forEach(item => {
                    html += `<li>${item}</li>`;
                });
                html += '</ul>';
            }

            html += '</div>';
        });

        // Quellen
        if (handout.quellen && handout.quellen.length > 0) {
            html += `
                <div class="handout-quellen">
                    <h3>📚 Wissenschaftliche Quellen</h3>
                    <ul>
                        ${handout.quellen.map(q => `<li>${q}</li>`).join('')}
                    </ul>
                </div>
            `;
        }

        html += `
                </div>

                <div class="handout-footer">
                    <p>Erstellt mit PädoPsych Advisor | ${new Date().toLocaleDateString('de-DE')}</p>
                    <p><em>Dieses Informationsblatt ersetzt keine professionelle Beratung oder Behandlung.</em></p>
                </div>
            </div>
        `;

        return html;
    },

    // UI: Handout-Auswahl
    generateHandoutBrowserUI: function() {
        let html = `
            <div class="handout-browser">
                <h3>📄 Psychoedukations-Handouts</h3>
                <p class="info-text">Wählen Sie ein Handout zum Anzeigen und Drucken.</p>

                <div class="handout-filter">
                    <label>Kategorie:</label>
                    <select id="handout-kategorie" onchange="PsychoeducationModule.filterHandouts()" class="form-select">
                        <option value="alle">Alle Kategorien</option>
                        ${Object.entries(this.handoutKategorien).map(([key, kat]) =>
                            `<option value="${key}">${kat.label}</option>`
                        ).join('')}
                    </select>

                    <label>Zielgruppe:</label>
                    <select id="handout-zielgruppe" onchange="PsychoeducationModule.filterHandouts()" class="form-select">
                        <option value="alle">Alle</option>
                        <option value="eltern">Eltern</option>
                        <option value="jugendliche">Jugendliche</option>
                        <option value="kinder">Kinder</option>
                        <option value="lehrer">Lehrkräfte</option>
                    </select>
                </div>

                <div id="handout-liste" class="handout-liste">
        `;

        // Alle Handouts auflisten
        Object.entries(this.handouts).forEach(([id, handout]) => {
            const kategorie = this.handoutKategorien[handout.kategorie];
            html += `
                <div class="handout-item" data-kategorie="${handout.kategorie}" data-zielgruppe="${handout.zielgruppe.join(',')}">
                    <div class="handout-item-header">
                        <span class="handout-kategorie">${kategorie?.label || handout.kategorie}</span>
                    </div>
                    <h4>${handout.titel}</h4>
                    <p class="handout-zielgruppe">Für: ${handout.zielgruppe.map(z => {
                        const labels = { eltern: 'Eltern', jugendliche: 'Jugendliche', kinder: 'Kinder', lehrer: 'Lehrkräfte' };
                        return labels[z] || z;
                    }).join(', ')}</p>
                    <div class="handout-actions">
                        <button type="button" onclick="PsychoeducationModule.previewHandout('${id}')" class="btn-secondary">
                            👁️ Vorschau
                        </button>
                        <button type="button" onclick="PsychoeducationModule.printHandout('${id}')" class="btn-primary">
                            🖨️ Drucken
                        </button>
                    </div>
                </div>
            `;
        });

        html += `
                </div>

                <div id="handout-preview" class="handout-preview" style="display:none;">
                    <div class="preview-header">
                        <h3>Vorschau</h3>
                        <button type="button" onclick="PsychoeducationModule.closePreview()" class="btn-close">✕</button>
                    </div>
                    <div id="handout-preview-content"></div>
                </div>
            </div>
        `;

        return html;
    },

    // Handouts filtern
    filterHandouts: function() {
        const kategorie = document.getElementById('handout-kategorie')?.value || 'alle';
        const zielgruppe = document.getElementById('handout-zielgruppe')?.value || 'alle';

        document.querySelectorAll('.handout-item').forEach(item => {
            const itemKategorie = item.dataset.kategorie;
            const itemZielgruppen = item.dataset.zielgruppe.split(',');

            const kategorieMatch = kategorie === 'alle' || itemKategorie === kategorie;
            const zielgruppeMatch = zielgruppe === 'alle' || itemZielgruppen.includes(zielgruppe);

            item.style.display = (kategorieMatch && zielgruppeMatch) ? 'block' : 'none';
        });
    },

    // Handout-Vorschau anzeigen
    previewHandout: function(handoutId) {
        const previewDiv = document.getElementById('handout-preview');
        const contentDiv = document.getElementById('handout-preview-content');

        if (previewDiv && contentDiv) {
            contentDiv.innerHTML = this.generatePrintableHandout(handoutId);
            previewDiv.style.display = 'block';
        }
    },

    // Vorschau schließen
    closePreview: function() {
        const previewDiv = document.getElementById('handout-preview');
        if (previewDiv) {
            previewDiv.style.display = 'none';
        }
    },

    // Handout drucken
    printHandout: function(handoutId) {
        const handoutHtml = this.generatePrintableHandout(handoutId);

        // Neues Fenster für Druck
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Handout Drucken</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        line-height: 1.6;
                        max-width: 800px;
                        margin: 0 auto;
                        padding: 20px;
                    }
                    .handout-header {
                        border-bottom: 2px solid #333;
                        padding-bottom: 10px;
                        margin-bottom: 20px;
                    }
                    .handout-header h1 {
                        color: #2c3e50;
                        margin-bottom: 5px;
                    }
                    .handout-meta {
                        color: #666;
                        font-style: italic;
                    }
                    .handout-section {
                        margin-bottom: 20px;
                    }
                    .handout-section h2 {
                        color: #3498db;
                        border-bottom: 1px solid #3498db;
                        padding-bottom: 5px;
                    }
                    .section-text {
                        white-space: pre-line;
                    }
                    .section-list {
                        padding-left: 20px;
                    }
                    .section-list li {
                        margin-bottom: 5px;
                    }
                    .handout-quellen {
                        margin-top: 30px;
                        padding-top: 10px;
                        border-top: 1px solid #ccc;
                    }
                    .handout-quellen h3 {
                        font-size: 14px;
                    }
                    .handout-quellen ul {
                        font-size: 12px;
                        color: #666;
                    }
                    .handout-footer {
                        margin-top: 30px;
                        padding-top: 10px;
                        border-top: 1px solid #ccc;
                        font-size: 12px;
                        color: #666;
                        text-align: center;
                    }
                    @media print {
                        body { padding: 0; }
                        .handout-section { page-break-inside: avoid; }
                    }
                </style>
            </head>
            <body>
                ${handoutHtml}
            </body>
            </html>
        `);
        printWindow.document.close();

        // Warten bis geladen, dann drucken
        printWindow.onload = function() {
            printWindow.print();
        };
    },

    // Custom Handout erstellen
    generateCustomHandoutUI: function() {
        return `
            <div class="custom-handout-container">
                <h3>✏️ Eigenes Handout erstellen</h3>

                <div class="form-group">
                    <label>Titel:</label>
                    <input type="text" id="custom-titel" class="form-input" placeholder="z.B. Information zu...">
                </div>

                <div class="form-group">
                    <label>Zielgruppe:</label>
                    <div class="checkbox-group">
                        <label><input type="checkbox" value="eltern" class="custom-zielgruppe"> Eltern</label>
                        <label><input type="checkbox" value="jugendliche" class="custom-zielgruppe"> Jugendliche</label>
                        <label><input type="checkbox" value="kinder" class="custom-zielgruppe"> Kinder</label>
                        <label><input type="checkbox" value="lehrer" class="custom-zielgruppe"> Lehrkräfte</label>
                    </div>
                </div>

                <div id="custom-sections">
                    <div class="custom-section" data-index="0">
                        <div class="form-group">
                            <label>Abschnittstitel:</label>
                            <input type="text" class="form-input section-titel" placeholder="z.B. Was ist...?">
                        </div>
                        <div class="form-group">
                            <label>Inhalt:</label>
                            <textarea class="form-textarea section-inhalt" rows="5" placeholder="Text eingeben..."></textarea>
                        </div>
                    </div>
                </div>

                <button type="button" onclick="PsychoeducationModule.addCustomSection()" class="btn-secondary">
                    + Abschnitt hinzufügen
                </button>

                <div class="form-group" style="margin-top:20px;">
                    <label>Quellen (optional):</label>
                    <textarea id="custom-quellen" class="form-textarea" rows="2" placeholder="Eine Quelle pro Zeile..."></textarea>
                </div>

                <div class="custom-actions">
                    <button type="button" onclick="PsychoeducationModule.previewCustomHandout()" class="btn-secondary">
                        👁️ Vorschau
                    </button>
                    <button type="button" onclick="PsychoeducationModule.printCustomHandout()" class="btn-primary">
                        🖨️ Drucken
                    </button>
                </div>

                <div id="custom-preview" style="display:none; margin-top:20px;"></div>
            </div>
        `;
    },

    // Abschnitt zu Custom Handout hinzufügen
    addCustomSection: function() {
        const container = document.getElementById('custom-sections');
        if (!container) return;

        const index = container.querySelectorAll('.custom-section').length;

        const sectionHtml = `
            <div class="custom-section" data-index="${index}">
                <hr>
                <div class="form-group">
                    <label>Abschnittstitel:</label>
                    <input type="text" class="form-input section-titel" placeholder="z.B. Behandlung">
                </div>
                <div class="form-group">
                    <label>Inhalt:</label>
                    <textarea class="form-textarea section-inhalt" rows="5" placeholder="Text eingeben..."></textarea>
                </div>
                <button type="button" onclick="this.parentElement.remove()" class="btn-tiny btn-danger">
                    🗑️ Entfernen
                </button>
            </div>
        `;

        container.insertAdjacentHTML('beforeend', sectionHtml);
    },

    // Custom Handout Vorschau
    previewCustomHandout: function() {
        const handoutHtml = this.buildCustomHandout();
        const previewDiv = document.getElementById('custom-preview');

        if (previewDiv) {
            previewDiv.innerHTML = handoutHtml;
            previewDiv.style.display = 'block';
        }
    },

    // Custom Handout bauen
    buildCustomHandout: function() {
        const titel = document.getElementById('custom-titel')?.value || 'Informationsblatt';

        const zielgruppen = [];
        document.querySelectorAll('.custom-zielgruppe:checked').forEach(cb => {
            zielgruppen.push(cb.value);
        });

        let html = `
            <div class="printable-handout">
                <div class="handout-header">
                    <h1>${titel}</h1>
                    ${zielgruppen.length > 0 ? `<p class="handout-meta">Zielgruppe: ${zielgruppen.map(z => {
                        const labels = { eltern: 'Eltern', jugendliche: 'Jugendliche', kinder: 'Kinder', lehrer: 'Lehrkräfte' };
                        return labels[z] || z;
                    }).join(', ')}</p>` : ''}
                </div>
                <div class="handout-content">
        `;

        document.querySelectorAll('.custom-section').forEach(section => {
            const sectionTitel = section.querySelector('.section-titel')?.value;
            const sectionInhalt = section.querySelector('.section-inhalt')?.value;

            if (sectionTitel || sectionInhalt) {
                html += `
                    <div class="handout-section">
                        ${sectionTitel ? `<h2>${sectionTitel}</h2>` : ''}
                        ${sectionInhalt ? `<div class="section-text">${sectionInhalt.replace(/\n/g, '<br>')}</div>` : ''}
                    </div>
                `;
            }
        });

        const quellen = document.getElementById('custom-quellen')?.value;
        if (quellen) {
            const quellenArray = quellen.split('\n').filter(q => q.trim());
            if (quellenArray.length > 0) {
                html += `
                    <div class="handout-quellen">
                        <h3>📚 Quellen</h3>
                        <ul>
                            ${quellenArray.map(q => `<li>${q}</li>`).join('')}
                        </ul>
                    </div>
                `;
            }
        }

        html += `
                </div>
                <div class="handout-footer">
                    <p>Erstellt mit PädoPsych Advisor | ${new Date().toLocaleDateString('de-DE')}</p>
                    <p><em>Dieses Informationsblatt ersetzt keine professionelle Beratung oder Behandlung.</em></p>
                </div>
            </div>
        `;

        return html;
    },

    // Custom Handout drucken
    printCustomHandout: function() {
        const handoutHtml = this.buildCustomHandout();

        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Handout Drucken</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        line-height: 1.6;
                        max-width: 800px;
                        margin: 0 auto;
                        padding: 20px;
                    }
                    .handout-header {
                        border-bottom: 2px solid #333;
                        padding-bottom: 10px;
                        margin-bottom: 20px;
                    }
                    .handout-header h1 {
                        color: #2c3e50;
                        margin-bottom: 5px;
                    }
                    .handout-meta {
                        color: #666;
                        font-style: italic;
                    }
                    .handout-section {
                        margin-bottom: 20px;
                    }
                    .handout-section h2 {
                        color: #3498db;
                        border-bottom: 1px solid #3498db;
                        padding-bottom: 5px;
                    }
                    .section-text {
                        white-space: pre-line;
                    }
                    .handout-quellen {
                        margin-top: 30px;
                        padding-top: 10px;
                        border-top: 1px solid #ccc;
                    }
                    .handout-quellen h3 {
                        font-size: 14px;
                    }
                    .handout-quellen ul {
                        font-size: 12px;
                        color: #666;
                    }
                    .handout-footer {
                        margin-top: 30px;
                        padding-top: 10px;
                        border-top: 1px solid #ccc;
                        font-size: 12px;
                        color: #666;
                        text-align: center;
                    }
                    @media print {
                        body { padding: 0; }
                        .handout-section { page-break-inside: avoid; }
                    }
                </style>
            </head>
            <body>
                ${handoutHtml}
            </body>
            </html>
        `);
        printWindow.document.close();
        printWindow.onload = function() {
            printWindow.print();
        };
    }
};

// Export für globalen Zugriff
if (typeof window !== 'undefined') {
    window.PsychoeducationModule = PsychoeducationModule;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = PsychoeducationModule;
}
