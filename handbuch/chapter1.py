"""
Kapitel 1: Grundlagen der Adoleszenz
"""
from styles import (add_table, add_bullet_list, add_praxisbox, add_dialog,
                    add_redflag, add_important_box, add_tip_box, add_section_intro,
                    add_checklist, add_flowchart, add_numbered_list)


def add_chapter1(doc):
    """Kapitel 1: Grundlagen der Adoleszenz"""

    doc.add_heading('KAPITEL 1: GRUNDLAGEN DER ADOLESZENZ', level=1)

    add_section_intro(doc,
        "Dieses Kapitel vermittelt das neurobiologische und entwicklungspsychologische "
        "Fundament, auf dem alle weiteren Kapitel aufbauen. Wer versteht, WARUM Jugendliche "
        "so handeln, wie sie handeln, kann wirksamer intervenieren.")

    # =====================================================================
    # 1.1 NEUROBIOLOGISCHE ENTWICKLUNG
    # =====================================================================
    doc.add_heading('1.1 Neurobiologische Entwicklung des jugendlichen Gehirns', level=2)

    doc.add_paragraph(
        "Das jugendliche Gehirn ist keine verkleinerte Version des erwachsenen Gehirns und auch "
        "kein defizitaeres, unfertiges Organ. Es ist ein Gehirn in einem Zustand intensiver "
        "Umstrukturierung, das auf einzigartige Weise auf die Anforderungen der Umwelt reagiert. "
        "Die Metapher der Baustelle ist dabei hilfreicher als die des unfertigen Produkts: "
        "Auf einer Baustelle wird aktiv gearbeitet, umgebaut, modernisiert - und manche Bereiche "
        "sind bereits voll funktionsfaehig, waehrend andere noch im Rohbau sind.")

    # Praefrontaler Cortex
    doc.add_heading('Der Praefrontale Cortex - Die Baustelle im Chefzimmer', level=3)

    doc.add_paragraph(
        "Der praefrontale Cortex (PFC), insbesondere der dorsolaterale und ventromediale Bereich, "
        "ist die letzte Hirnregion, die vollstaendig ausreift - ein Prozess, der sich bis etwa zum "
        "25. Lebensjahr erstreckt (Casey et al., 2008; Giedd, 2015). Der PFC ist zustaendig fuer "
        "das, was Neurowissenschaftler als exekutive Funktionen bezeichnen:")

    add_bullet_list(doc, [
        "Impulskontrolle: Die Faehigkeit, einen Handlungsimpuls zu hemmen und abzuwaegen",
        "Planung und Vorausschau: Konsequenzen von Handlungen antizipieren",
        "Emotionsregulation: Gefuehle modulieren und angemessen ausdruecken",
        "Entscheidungsfindung: Risiken und Nutzen abwaegen",
        "Flexible Problemloesung: Strategien anpassen, wenn etwas nicht funktioniert",
        "Arbeitsgedaechtnis: Informationen im Kopf behalten und manipulieren",
        "Selbstreflexion: Ueber das eigene Denken und Handeln nachdenken (Metakognition)"
    ])

    add_important_box(doc,
        "Was das fuer Sie bedeutet: Wenn ein 14-Jaehriger impulsiv handelt, ist das nicht "
        "primaer ein Charakterdefizit oder mangelnde Erziehung. Sein Gehirn hat die Hardware "
        "fuer Impulskontrolle schlicht noch nicht vollstaendig installiert. Das entschuldigt "
        "nicht alles - aber es erklaert vieles.")

    # Limbisches System
    doc.add_heading('Das Limbische System - Vollgas ohne Bremse', level=3)

    doc.add_paragraph(
        "Waehrend der PFC noch reift, ist das limbische System - insbesondere die Amygdala "
        "(Emotionszentrum) und der Nucleus Accumbens (Belohnungszentrum) - bereits voll "
        "funktionsfaehig und sogar ueberaktiv. Dies fuehrt zu dem, was Neurowissenschaftler "
        "als das Ungleichgewichtsmodell (Dual Systems Model, Steinberg, 2008) bezeichnen:")

    add_table(doc,
        ["Hirnregion", "Funktion", "Reifestatus in der Adoleszenz", "Praktische Auswirkung"],
        [
            ["Praefrontaler Cortex", "Bremse, Planung, Kontrolle",
             "Noch in Entwicklung (bis ca. 25 Jahre)",
             "Schwierigkeiten bei Impulskontrolle und Vorausplanung"],
            ["Amygdala", "Emotionale Bewertung, Angst, Wut",
             "Voll aktiv, sogar ueberaktiv",
             "Intensive emotionale Reaktionen, schnelle Alarmbereitschaft"],
            ["Nucleus Accumbens", "Belohnung, Motivation, Freude",
             "Besonders empfindlich fuer Belohnungsreize",
             "Starkes Sensation Seeking, Risikobereitschaft"],
            ["Hippocampus", "Gedaechtnis, Kontextualisierung",
             "In aktiver Entwicklung",
             "Emotionale Erinnerungen werden besonders stark gespeichert"]
        ])

    doc.add_paragraph(
        "Diese Konstellation erklaert, warum Jugendliche oft emotional reagieren, bevor sie "
        "denken; warum sie Risiken eingehen, die Erwachsene vermeiden wuerden; warum sie von "
        "Gleichaltrigen staerker beeinflusst werden als von Erwachsenen; und warum sie "
        "intensive Gefuehle erleben, die sie manchmal ueberschwemmen.")

    add_tip_box(doc,
        "Nutzen Sie dieses Wissen in der Arbeit mit Lehrern und Eltern: Es hilft, wenn "
        "Erwachsene verstehen, dass Jugendliche nicht absichtlich unvernuenftig handeln. "
        "Ihr Gehirn arbeitet anders - nicht schlechter.")

    # Dopaminsystem
    doc.add_heading('Das Dopaminsystem - Warum Risiken so attraktiv sind', level=3)

    doc.add_paragraph(
        "In der Adoleszenz veraendert sich das Dopaminsystem grundlegend. Der Baseline-Dopaminspiegel "
        "sinkt, waehrend die Dopaminausschuettung bei neuen, aufregenden Reizen besonders hoch ist. "
        "Das bedeutet: Jugendliche fuehlen sich im Normalzustand eher gelangweilt und brauchen "
        "staerkere Reize, um Zufriedenheit und Motivation zu empfinden.")

    add_bullet_list(doc, [
        "Risikobereitschaft: Gefaehrliche Aktivitaeten liefern hohe Dopaminausschuettung",
        "Peer-Einfluss: Soziale Anerkennung aktiviert das Belohnungssystem besonders stark",
        "Novelty-Seeking: Neues und Unbekanntes ist besonders attraktiv",
        "Motivationsprobleme: Alltaegliche Aufgaben liefern zu wenig Belohnung",
        "Suchtanfaelligkeit: Substanzen und Verhaltenssuchten kapern das vulnerable Dopaminsystem"
    ])

    add_praxisbox(doc, "Was Sie einem Jugendlichen sagen koennen",
        "Dein Gehirn sucht gerade nach Kicks und Aufregung. Das ist voellig normal - dein "
        "Gehirn entwickelt sich gerade so, dass du Neues ausprobieren willst. Die Frage ist "
        "nicht, OB du Aufregung suchst, sondern WIE du sie findest - auf eine Art, die dir "
        "nicht schadet.")

    # Synaptic Pruning
    doc.add_heading('Synaptic Pruning - Use it or lose it', level=3)

    doc.add_paragraph(
        "Das kindliche Gehirn produziert weit mehr synaptische Verbindungen, als es letztlich "
        "benoetigt. Ab der Pubertaet setzt das sogenannte Synaptic Pruning ein: Synaptische "
        "Verbindungen, die haeufig genutzt werden, werden gestaerkt und mit Myelin isoliert "
        "(schneller, effizienter). Verbindungen, die selten genutzt werden, werden abgebaut. "
        "Dieser Prozess folgt dem Prinzip: Was benutzt wird, bleibt - was nicht benutzt wird, "
        "geht verloren (Blakemore und Choudhury, 2006).")

    doc.add_paragraph(
        "In der Bildgebung zeigt sich dies als eine Abnahme der grauen Substanz (Zellkoerper "
        "und Synapsen) und eine Zunahme der weissen Substanz (myelinisierte Axone) - das Gehirn "
        "wird nicht groesser, sondern effizienter. Die praktischen Implikationen sind enorm:")

    add_bullet_list(doc, [
        "Die Adoleszenz ist eine sensible Phase: Erfahrungen in dieser Zeit praegen die "
        "Hirnarchitektur nachhaltig",
        "Faehigkeiten, die in der Adoleszenz regelmaessig geuebt werden (Emotionsregulation, "
        "soziale Kompetenzen, Problemloesung), werden neuronal verdrahtet",
        "Faehigkeiten, die nicht geuebt werden, koennen schwerer entwickelbar werden",
        "Trauma und chronischer Stress koennen den Pruning-Prozess negativ beeinflussen"
    ])

    # Schlaf
    doc.add_heading('Schlaf und das jugendliche Gehirn', level=3)

    doc.add_paragraph(
        "Die Chronobiologie der Adoleszenz ist ein haeufig uebersehener Faktor. In der Pubertaet "
        "verschiebt sich der circadiane Rhythmus um 1-3 Stunden nach hinten (Crowley et al., 2007). "
        "Das bedeutet: Jugendliche werden biologisch bedingt spaeter muede und wachen spaeter auf. "
        "Dies ist KEIN Faulheit-Problem, sondern eine biologische Realitaet.")

    add_table(doc,
        ["Aspekt", "Detail"],
        [
            ["Empfohlene Schlafdauer", "8-10 Stunden pro Nacht (14-17 Jahre), 7-9 Stunden (ab 18)"],
            ["Biologische Einschlafzeit", "Circa 23:00-0:00 Uhr (statt 21:00-22:00 bei Kindern)"],
            ["Optimale Aufwachzeit", "Circa 8:00-9:00 Uhr (der Schulbeginn um 8:00 ist oft zu frueh)"],
            ["Folgen von Schlafmangel", "Konzentrationsprobleme, Reizbarkeit, depressive Stimmung, "
             "gestaerkte Amygdala-Reaktivitaet, schlechtere Emotionsregulation"],
            ["Schlafkiller", "Blaues Licht (Smartphones!), Koffein, unregelmässiger Rhythmus, Stress"],
            ["Was hilft", "Feste Schlafenszeiten (auch am Wochenende), Bildschirmpause 1h vor dem Schlafen, "
             "dunkles/kuehles Zimmer, Entspannungsroutine"]
        ])

    add_tip_box(doc,
        "Fragen Sie bei JEDEM Jugendlichen nach dem Schlaf. Schlafmangel kann Symptome imitieren, "
        "die wie ADHS, Depression oder Angst aussehen. Manchmal ist die wirksamste Intervention "
        "nicht Therapie, sondern Schlafhygiene.")

    # =====================================================================
    # 1.2 PSYCHOSOZIALE ENTWICKLUNGSAUFGABEN
    # =====================================================================
    doc.add_heading('1.2 Psychosoziale Entwicklungsaufgaben', level=2)

    doc.add_paragraph(
        "Neben der neurobiologischen Reifung stehen Jugendliche vor einer Reihe psychosozialer "
        "Entwicklungsaufgaben, die sie bewaeltigen muessen, um zu funktionierenden Erwachsenen "
        "heranzureifen. Drei zentrale Modelle sind fuer unsere Arbeit besonders relevant:")

    # Erikson
    doc.add_heading('Erik Erikson: Identitaet vs. Identitaetsdiffusion', level=3)

    doc.add_paragraph(
        "Die zentrale Aufgabe der Adoleszenz nach Erikson (1968) ist die Entwicklung einer "
        "stabilen Identitaet. Der Jugendliche fragt: Wer bin ich? Was glaube ich? Wohin will "
        "ich? Welchen Wert habe ich? Wenn diese Fragen nicht beantwortet werden koennen, entsteht "
        "Identitaetsdiffusion - ein Zustand der Orientierungslosigkeit.")

    add_table(doc,
        ["Identitaetsaspekt", "Fragen des Jugendlichen", "Was Sie beobachten koennen"],
        [
            ["Berufliche Identitaet", "Was will ich werden? Was kann ich gut?",
             "Schulunlust, Motivationsprobleme, Zukunftsaengste"],
            ["Sexuelle/Romantische Identitaet", "Wen finde ich attraktiv? Wie fuehlen sich Beziehungen an?",
             "Experimentieren, Unsicherheit, Coming-out-Konflikte"],
            ["Weltanschauliche Identitaet", "Woran glaube ich? Was ist richtig und falsch?",
             "Idealisierung, Radikalisierung, religioeser Eifer oder Ablehnung"],
            ["Soziale Identitaet", "Zu welcher Gruppe gehoere ich? Wer sind meine Leute?",
             "Peer-Konformitaet, Subkulturen, Abgrenzung von Familie"],
            ["Koerperliche Identitaet", "Ist mein Koerper normal? Bin ich attraktiv?",
             "Koerperunzufriedenheit, Essstoerungen, exzessiver Sport"]
        ])

    # Marcia
    doc.add_heading('James Marcia: Vier Identitaetszustaende', level=3)

    doc.add_paragraph(
        "Marcia (1966, 1980) hat Eriksons Konzept weiterentwickelt und vier Identitaetszustaende "
        "beschrieben, die auf zwei Dimensionen basieren: Exploration (hat der Jugendliche aktiv "
        "nach Alternativen gesucht?) und Commitment (hat er sich festgelegt?).")

    add_table(doc,
        ["Identitaetszustand", "Exploration", "Commitment", "Beschreibung", "Beispiel"],
        [
            ["Diffuse Identitaet", "Niedrig", "Niedrig",
             "Weder gesucht noch festgelegt. Orientierungslosigkeit.",
             "Jugendlicher zeigt kein Interesse an Zukunftsplanung"],
            ["Uebernommene Identitaet", "Niedrig", "Hoch",
             "Festgelegt ohne eigene Suche. Elternwerte uebernommen.",
             "Jugendlicher studiert Medizin, weil der Vater es will"],
            ["Moratorium", "Hoch", "Niedrig",
             "Aktiv suchend, aber noch nicht festgelegt. Krise.",
             "Jugendlicher probiert verschiedene Stile, Gruppen, Ideen"],
            ["Erarbeitete Identitaet", "Hoch", "Hoch",
             "Nach aktiver Suche zu eigener Position gefunden.",
             "Jugendlicher hat bewusst einen eigenen Weg gewaehlt"]
        ])

    add_tip_box(doc,
        "Das Moratorium ist kein Problemzustand, sondern ein notwendiger Prozess! "
        "Jugendliche im Moratorium wirken oft chaotisch und unsicher, sind aber "
        "entwicklungspsychologisch auf einem guten Weg. Unterstuetzen Sie die Exploration.")

    # Havighurst
    doc.add_heading('Robert Havighurst: Entwicklungsaufgaben', level=3)

    doc.add_paragraph(
        "Havighurst (1972) hat konkrete Entwicklungsaufgaben formuliert, die in der "
        "Adoleszenz bewaeltigt werden muessen:")

    add_numbered_list(doc, [
        "Akzeptanz der eigenen koerperlichen Erscheinung",
        "Aufbau reifer Beziehungen zu Gleichaltrigen beiderlei Geschlechts",
        "Uebernahme der maennlichen bzw. weiblichen sozialen Rolle (heute: Entwicklung "
        "einer authentischen Geschlechtsidentitaet)",
        "Emotionale Unabhaengigkeit von Eltern und anderen Erwachsenen",
        "Vorbereitung auf berufliche Karriere/wirtschaftliche Unabhaengigkeit",
        "Vorbereitung auf Partnerschaft und Familienleben",
        "Entwicklung eines eigenen Werte- und Normensystems",
        "Sozial verantwortungsvolles Verhalten anstreben"
    ])

    doc.add_paragraph(
        "Fuer unsere Arbeit ist wichtig: Viele Schwierigkeiten, die Jugendliche zeigen, "
        "sind Ausdruck von Kaempfen mit diesen Entwicklungsaufgaben. Ein Jugendlicher, der "
        "aggressiv ist, kaempft vielleicht mit der Aufgabe, reife Beziehungen aufzubauen. "
        "Eine Jugendliche mit Essstoerung kaempft moeglicherweise mit der Akzeptanz ihres "
        "Koerpers. Die Symptome sind oft Loesungsversuche fuer Entwicklungsaufgaben.")

    # =====================================================================
    # 1.3 BINDUNGSTHEORIE IM JUGENDALTER
    # =====================================================================
    doc.add_heading('1.3 Bindungstheorie im Jugendalter', level=2)

    doc.add_paragraph(
        "Die Bindungstheorie (Bowlby, 1969; Ainsworth, 1978) ist eines der am besten "
        "erforschten Modelle der menschlichen Entwicklung. Im Jugendalter veraendern sich "
        "die Bindungsbeziehungen grundlegend: Die primaeren Bindungspersonen (Eltern) werden "
        "schrittweise durch Peers und romantische Partner ergaenzt und teilweise ersetzt. "
        "Aber: Die fruehen Bindungserfahrungen wirken als innere Arbeitsmodelle weiter.")

    doc.add_heading('Die vier Bindungsstile im Jugendalter', level=3)

    add_table(doc,
        ["Bindungsstil", "Inneres Arbeitsmodell", "Verhalten im Jugendalter",
         "Was Sie in der Beratung sehen", "Beratungsansatz"],
        [
            ["Sicher (ca. 55-65%)",
             "Ich bin wertvoll. Andere sind zuverlaessig. Ich kann um Hilfe bitten.",
             "Kann Naehe zulassen UND autonom sein. Sucht bei Stress Unterstuetzung.",
             "Kooperativ, kann ueber Gefuehle sprechen, nimmt Hilfe an.",
             "Klassische Beratungsansaetze funktionieren gut."],
            ["Unsicher-vermeidend (ca. 20-25%)",
             "Ich muss alleine klarkommen. Naehe ist gefaehrlich.",
             "Betont Unabhaengigkeit. Vermeidet emotionale Naehe. Zeigt wenig Gefuehle.",
             "Distanziert, intellektualisiert, sagt oft: Es geht mir gut.",
             "Langsam Vertrauen aufbauen. Nicht draengen. Kognitive Ansaetze bevorzugen."],
            ["Unsicher-ambivalent (ca. 10-15%)",
             "Ich bin unsicher, ob andere fuer mich da sein werden.",
             "Schwankt zwischen Klammern und Abweisung. Intensive Gefuehle.",
             "Fordert viel Aufmerksamkeit, testet Grenzen, emotionale Ausbueche.",
             "Klare, vorhersagbare Struktur. Gefuehle validieren. Zuverlaessig sein."],
            ["Desorganisiert (ca. 5-10%)",
             "Die Person, die mich schuetzen soll, ist die Bedrohung.",
             "Widerspruechiches Verhalten. Kann bei Stress dissoziieren.",
             "Unvorhersagbares Verhalten, Misstrauen, moeglicherweise Dissoziation.",
             "Sicherheit priorisieren. Traumainformiert arbeiten. Stabilisierung vor Exploration."]
        ])

    add_important_box(doc,
        "Jugendliche mit desorganisiertem Bindungsmuster haben haeufig Trauma-Erfahrungen. "
        "Sie brauchen besondere Aufmerksamkeit und gegebenenfalls eine Ueberweisung an "
        "traumaspezifische Fachkraefte. Versuchen Sie nicht, Traumatherapie zu machen - "
        "das uebersteigt Ihre Rolle.")

    doc.add_heading('Bindung in der Beratungsbeziehung', level=3)

    doc.add_paragraph(
        "Als Berater werden Sie unweigerlich Teil des Bindungssystems des Jugendlichen. "
        "Das bedeutet: Der Jugendliche wird Ihnen gegenueber aehnliche Muster zeigen wie "
        "gegenueber anderen wichtigen Bezugspersonen. Das ist sowohl Herausforderung als "
        "auch Chance:")

    add_bullet_list(doc, [
        "Sie koennen dem Jugendlichen eine korrigierende Beziehungserfahrung bieten: "
        "zuverlaessig, empathisch, grenzachtend",
        "Sie koennen Bindungsmuster erkennen und verstehen (nicht therapieren!)",
        "Sie koennen dem Jugendlichen helfen, seine eigenen Beziehungsmuster zu reflektieren",
        "Sie sollten Ihre eigenen Bindungsmuster kennen, um Gegenuebertragungs-Fallen zu vermeiden"
    ])

    add_praxisbox(doc, "Korrigierende Beziehungserfahrung",
        "Marco (15) hat ein vermeidendes Bindungsmuster. Er sagt: Ich brauche niemanden.\n"
        "FALSCH waere: Ihn draengen, ueber Gefuehle zu sprechen oder Naehe einzufordern.\n"
        "RICHTIG ist: Zuverlaessig sein, Angebote machen ohne Druck, seine Autonomie "
        "respektieren, langsam Vertrauen aufbauen. Zeigen, dass Beziehung moeglich ist, "
        "ohne ueberwaetigend zu sein.")

    # =====================================================================
    # 1.4 SOZIO-EMOTIONALE ENTWICKLUNG
    # =====================================================================
    doc.add_heading('1.4 Sozio-emotionale Entwicklung', level=2)

    doc.add_paragraph(
        "Die sozio-emotionale Entwicklung in der Adoleszenz umfasst die zunehmende Faehigkeit, "
        "Emotionen zu verstehen, zu regulieren und in sozialen Kontexten angemessen einzusetzen. "
        "Diese Entwicklung ist eng verknuepft mit der Hirnreifung und den sozialen Erfahrungen.")

    # Emotionsregulation
    doc.add_heading('Emotionsregulationsmodell nach Gross', level=3)

    doc.add_paragraph(
        "Das Prozessmodell der Emotionsregulation (Gross, 1998, 2015) beschreibt fuenf Punkte, "
        "an denen Emotionen reguliert werden koennen:")

    add_numbered_list(doc, [
        "Situationsselektion: Vermeiden oder Aufsuchen bestimmter Situationen",
        "Situationsmodifikation: Die Situation selbst veraendern",
        "Aufmerksamkeitslenkung: Den Fokus der Aufmerksamkeit veraendern (Ablenkung, Konzentration)",
        "Kognitive Umdeutung: Die Bedeutung der Situation veraendern (Reappraisal)",
        "Reaktionsmodulation: Die emotionale Reaktion selbst veraendern (Unterdrueckung, Ausdruck)"
    ])

    doc.add_paragraph(
        "Jugendliche nutzen haeufig primitive Strategien wie Unterdrueckung oder Vermeidung. "
        "Ein Ziel der Beratung ist, ihnen reifere Strategien wie kognitive Umdeutung "
        "zugaenglich zu machen.")

    # Theory of Mind
    doc.add_heading('Perspektivuebernahme und Theory of Mind', level=3)

    doc.add_paragraph(
        "Im Jugendalter entwickelt sich die Faehigkeit zur Perspektivuebernahme (Theory of Mind) "
        "weiter. Jugendliche werden zunehmend faehig, die Gedanken und Gefuehle anderer Menschen "
        "zu verstehen und zu beruecksichtigen. Gleichzeitig zeigen sie typische kognitive "
        "Verzerrungen:")

    add_table(doc,
        ["Phaenomen", "Beschreibung", "Beispiel", "Was Sie tun koennen"],
        [
            ["Imaginary Audience",
             "Der Jugendliche glaubt, alle schauen auf ihn",
             "Er will nicht zur Schule, weil ein Pickel sichtbar ist",
             "Normalisieren: Das Gefuehl ist normal. Realitaetscheck anbieten."],
            ["Personal Fable",
             "Der Jugendliche glaubt, er ist einzigartig und unverwundbar",
             "Mir passiert schon nichts. Niemand versteht mich.",
             "Respektieren, aber sanft herausfordern. Geschichten anderer teilen."],
            ["Optimistic Bias",
             "Ueberschaetzung positiver Ergebnisse fuer sich selbst",
             "Rauchen schadet MIR nicht. ICH werde nicht suechtig.",
             "Nicht moralisieren. Stattdessen: Was wuerdest du einem Freund raten?"]
        ])

    # Kohlberg
    doc.add_heading('Moralentwicklung nach Kohlberg', level=3)

    doc.add_paragraph(
        "Die Moralentwicklung (Kohlberg, 1969) schreitet in der Adoleszenz voran. "
        "Die meisten Jugendlichen befinden sich auf der konventionellen Ebene:")

    add_table(doc,
        ["Stufe", "Orientierung", "Typisch fuer", "Beispiel"],
        [
            ["Stufe 3 (konventionell)",
             "Guter Junge/gutes Maedchen: Handeln, um anderen zu gefallen",
             "Fruehe Adoleszenz (10-14)",
             "Ich helfe, weil die Lehrerin mich dann mag"],
            ["Stufe 4 (konventionell)",
             "Recht und Ordnung: Regeln sind wichtig fuer die Gesellschaft",
             "Mittlere Adoleszenz (14-16)",
             "Stehlen ist falsch, weil es gegen das Gesetz ist"],
            ["Stufe 5 (postkonventionell)",
             "Sozialvertrag: Gesetze sind verhandelbar und muessen fair sein",
             "Spaete Adoleszenz (16+)",
             "Manche Gesetze sind ungerecht und sollten geaendert werden"]
        ])

    # Emotionale Intelligenz
    doc.add_heading('Emotionale Intelligenz bei Jugendlichen', level=3)

    doc.add_paragraph(
        "Emotionale Intelligenz (Goleman, 1995; Salovey und Mayer, 1990) umfasst vier "
        "Kernkompetenzen, die in der Adoleszenz aktiv entwickelt werden:")

    add_table(doc,
        ["Kompetenz", "Beschreibung", "Wie Sie es foerdern koennen"],
        [
            ["Emotionale Wahrnehmung",
             "Eigene und fremde Emotionen erkennen",
             "Emotionsvokabular erweitern. Nicht nur gut/schlecht, "
             "sondern differenziert: frustriert, enttaeuscht, gekraenkt..."],
            ["Emotionale Nutzung",
             "Emotionen fuer Denken und Problemloesung nutzen",
             "Zeigen, wie Emotionen Informationen liefern: Was sagt dir deine Wut?"],
            ["Emotionales Verstaendnis",
             "Ursachen und Verlaeufe von Emotionen verstehen",
             "Emotionsketten erklaeren: Angst vor Ablehnung fuehrt zu Wut fuehrt zu Rueckzug"],
            ["Emotionale Regulation",
             "Emotionen angemessen ausdruecken und modulieren",
             "Konkrete Strategien vermitteln (siehe Kapitel 4)"]
        ])

    add_praxisbox(doc, "Emotionsvokabular erweitern",
        "Viele Jugendliche kennen nur drei Emotionen: gut, schlecht und wuetend.\n"
        "Helfen Sie ihnen, differenzierter zu beschreiben, was sie fuehlen.\n"
        "Nutzen Sie ein Emotionsrad oder eine Emotionsliste:\n"
        "Statt 'schlecht': traurig, einsam, enttaeuscht, verletzt, beschaemt, hilflos, "
        "ueberwaechtigt, erschoepft, frustriert, gelangweilt?\n"
        "Statt 'wuetend': irritiert, genervt, rasend, empoeert, verbittert, eifersuetig?")
