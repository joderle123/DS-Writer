"""
Kapitel 2: Stoerungsbilder und Auffaelligkeiten
"""
from styles import (add_table, add_bullet_list, add_praxisbox, add_dialog,
                    add_redflag, add_important_box, add_tip_box, add_section_intro,
                    add_checklist, add_flowchart, add_numbered_list)


def add_chapter2(doc):
    """Kapitel 2: Stoerungsbilder und Auffaelligkeiten"""

    doc.add_heading('KAPITEL 2: STOERUNGSBILDER UND AUFFAELLIGKEITEN', level=1)

    add_section_intro(doc,
        "Dieses Kapitel dient dem ERKENNEN und VERSTEHEN, nicht der Diagnosestellung. "
        "Sie sind kein klinischer Diagnostiker - aber Sie muessen wissen, was Sie sehen, "
        "um angemessen zu reagieren und gegebenenfalls zu ueberweisen.")

    add_important_box(doc,
        "Fuer jedes Stoerungsbild gilt: Beschreiben Sie Verhalten, stellen Sie keine "
        "Diagnosen. Sagen Sie nicht: Der hat ADHS. Sagen Sie: Ich beobachte erhebliche "
        "Aufmerksamkeitsprobleme und motorische Unruhe, die eine fachliche Abklaerung "
        "nahelegen.")

    # =====================================================================
    # 2.1 ANGSTSTOERUNGEN
    # =====================================================================
    doc.add_heading('2.1 Angststoerungen bei Jugendlichen', level=2)

    doc.add_paragraph(
        "Angststoerungen sind die haeufigsten psychischen Stoerungen im Jugendalter "
        "(Praevalenz 15-20%). Sie sind gleichzeitig die Stoerungen, die am haeufigsten "
        "uebersehen werden, weil aengstliche Jugendliche oft unauffaellig sind - sie "
        "stoeren nicht, sie leiden leise. Angst wird erst dann zur Stoerung, wenn sie das "
        "taegliche Leben erheblich beeintraechtigt.")

    doc.add_heading('Formen der Angst im Jugendalter', level=3)
    add_table(doc,
        ["Angstform", "Kernsymptome", "Typische Situationen", "Haeufigkeit"],
        [
            ["Generalisierte Angststoerung (GAS)",
             "Staendiges Sich-Sorgen, Anspannung, Erschoepfung, Konzentrationsprobleme",
             "Schulleistungen, Gesundheit der Eltern, Zukunft, Weltgeschehen",
             "3-5%"],
            ["Soziale Angst",
             "Intensive Angst vor Bewertung durch andere, Vermeidung sozialer Situationen",
             "Referate, muendliche Mitarbeit, Pausen, Partys, neue Gruppen",
             "5-10%"],
            ["Trennungsangst",
             "Uebermassige Angst bei Trennung von Bezugspersonen",
             "Schule, Uebernachtungen, Klassenfahrten",
             "3-5% (auch noch bei Jugendlichen!)"],
            ["Panikstoerug",
             "Wiederkehrende Panikattacken mit koerperlichen Symptomen",
             "Oeffentliche Orte, enge Raeume, unerwartete Situationen",
             "1-3%"],
            ["Spezifische Phobien",
             "Intensive Angst vor bestimmten Objekten oder Situationen",
             "Spritzen, Blut, Hoehen, Tiere, Dunkelheit",
             "5-10%"],
            ["Selektiver Mutismus",
             "Konsistentes Schweigen in bestimmten sozialen Situationen",
             "Schule (spricht zu Hause normal)",
             "0.5-1%"]
        ])

    doc.add_heading('Warnsignale erkennen', level=3)
    add_checklist(doc, [
        "Haeufiges Fehlen in der Schule oder bestimmten Stunden",
        "Koerperliche Beschwerden ohne medizinische Ursache (Bauchschmerzen, Kopfschmerzen)",
        "Vermeidung von Praesentationen, muendlicher Mitarbeit",
        "Sozialer Rueckzug, wenige oder keine Freundschaften",
        "Staendiges Nachfragen bei Lehrern (Ist das so richtig?)",
        "Perfektionismus, uebermassige Vorbereitung",
        "Weinen, Zittern, Erstarren in bestimmten Situationen",
        "Schlafprobleme, Alptraeume",
        "Reizbarkeit (Angst zeigt sich bei Jugendlichen oft als Gereiztheit!)"
    ])

    add_redflag(doc,
        "Wenn ein Jugendlicher die Schule komplett verweigert wegen Angst, wenn "
        "Panikattacken auftreten, oder wenn die Angst zu Suizidgedanken fuehrt: "
        "SOFORTIGE Ueberweisung an Fachstelle.")

    add_dialog(doc, [
        ("Psychologe", "Ich habe gehoert, dass du in letzter Zeit oft fehlst. "
         "Magst du mir erzaehlen, was los ist?"),
        ("Jugendlicher", "Mir ist morgens immer schlecht. Bauchschmerzen."),
        ("Psychologe", "Das klingt unangenehm. Wann genau kommen die Bauchschmerzen?"),
        ("Jugendlicher", "Meistens wenn ich aufstehe und an die Schule denke."),
        ("Psychologe", "Was genau an der Schule macht dir Sorgen?"),
        ("Jugendlicher", "Ich weiss nicht... alles. Was wenn ich gefragt werde und "
         "die Antwort nicht weiss?"),
        ("Psychologe", "Es klingt so, als haettest du grosse Angst davor, einen "
         "Fehler zu machen und dann schlecht dazustehen. Stimmt das?"),
        ("Jugendlicher", "Ja, genau. Alle gucken dann."),
        ("Psychologe", "Dieses Gefuehl kennen viele Jugendliche. Es hat einen Namen - "
         "soziale Angst. Und das Gute ist: Man kann lernen, damit umzugehen.")
    ])

    # =====================================================================
    # 2.2 DEPRESSION
    # =====================================================================
    doc.add_heading('2.2 Depression bei Jugendlichen', level=2)

    doc.add_paragraph(
        "Depression bei Jugendlichen sieht anders aus als bei Erwachsenen. "
        "Waehrend depressive Erwachsene oft traurig und zurueckgezogen wirken, zeigen "
        "Jugendliche haeufig REIZBARKEIT als Leitsymptom. Ein wuetender, genervter "
        "Jugendlicher kann depressiv sein.")

    add_table(doc,
        ["Symptom", "Wie es bei Erwachsenen aussieht", "Wie es bei Jugendlichen aussieht"],
        [
            ["Stimmung", "Traurigkeit, Weinen", "Reizbarkeit, Wut, Launenhaftigkeit"],
            ["Interesse", "Freudlosigkeit", "Langeweile, nichts macht Spass"],
            ["Sozialverhalten", "Rueckzug", "Konflikte mit Peers und Erwachsenen"],
            ["Koerper", "Muedigkeit, Appetitveraenderung",
             "Kopf-/Bauchschmerzen, Aenderungen im Schlaf- und Essverhalten"],
            ["Kognition", "Konzentrationsprobleme, Entscheidungsschwaeche",
             "Leistungsabfall in der Schule, Desinteresse"],
            ["Verhalten", "Verlangsamung", "Risikobereitschaft, Substanzkonsum, Rueckzug in digitale Welten"]
        ])

    add_redflag(doc,
        "Jeder Hinweis auf Suizidalitaet muss SOFORT ernst genommen werden. "
        "Siehe Kapitel 6 fuer detaillierte Vorgehensweise.")

    # =====================================================================
    # 2.3 SVV UND SUIZIDALITAET
    # =====================================================================
    doc.add_heading('2.3 Selbstverletzendes Verhalten und Suizidalitaet', level=2)

    add_important_box(doc,
        "Selbstverletzendes Verhalten (SVV) und Suizidalitaet sind NICHT dasselbe. "
        "SVV dient meist der Emotionsregulation (Spannungsabbau), nicht dem Wunsch zu sterben. "
        "ABER: SVV erhoet das Suizidrisiko. Beides muss ernst genommen werden.")

    doc.add_heading('Selbstverletzendes Verhalten', level=3)

    doc.add_paragraph(
        "SVV ist bei Jugendlichen erschreckend haeufig: 17-25% aller Jugendlichen berichten "
        "mindestens eine Episode. Es ist ein Bewaeltigungsmechanismus - kein Aufmerksamkeitsverhalten "
        "und keine Manipulation.")

    add_table(doc,
        ["Funktion des SVV", "Was der Jugendliche erlebt", "Was Sie tun koennen"],
        [
            ["Spannungsabbau", "Innerer Druck wird unertraeglich, SVV bringt kurzfristige Erleichterung",
             "Alternative Spannungsabbau-Methoden anbieten (Eis, Sport, Gummiband)"],
            ["Emotionsregulation", "Fuehlt sich taub oder ueberwaeltigt, SVV erzeugt kontrollierbaren Schmerz",
             "Emotionsregulationsstrategien vermitteln (Kapitel 4)"],
            ["Selbstbestrafung", "Fuehlt sich schuldig oder wertlos, glaubt Schmerz verdient zu haben",
             "Schuldgefuehle bearbeiten, Selbstwert staerken"],
            ["Kommunikation", "Kann Not nicht verbal ausdruecken",
             "Alternative Ausdruck-Moeglichkeiten (Schreiben, Kunst, Gespraech)"],
            ["Kontrolle", "Fuehlt sich in anderen Bereichen ohnmaechtig",
             "Bereiche finden, in denen Kontrolle moeglich ist"]
        ])

    add_dialog(doc, [
        ("Psychologe", "Ich moechte direkt mit dir ueber etwas sprechen. "
         "Mir ist aufgefallen, dass du dich ritzt. Ich mache mir Sorgen um dich."),
        ("Jugendliche", "Das ist nicht so schlimm. Das machen viele."),
        ("Psychologe", "Danke, dass du ehrlich bist. Du hast recht, es kommt haeufig vor. "
         "Und ich glaube dir, wenn du sagst, dass es sich nicht schlimm anfuehlt. "
         "Trotzdem moechte ich verstehen: Was passiert, bevor du dich ritzt?"),
        ("Jugendliche", "Ich weiss nicht... es wird alles zu viel. Dann ist es wie ein Druck "
         "in mir drin, und danach ist es besser."),
        ("Psychologe", "Der Druck - das kenne ich von vielen Jugendlichen. Das Ritzen hilft "
         "dir, den Druck loszuwerden. Aber es hinterlaesst Narben. Ich wuerde gerne mit dir "
         "zusammen Wege finden, die den Druck loesen, ohne deinen Koerper zu verletzen. "
         "Waerst du bereit, das mal auszuprobieren?")
    ])

    doc.add_heading('Suizidalitaet', level=3)

    doc.add_paragraph(
        "Suizid ist die zweithaeufigste Todesursache bei Jugendlichen (15-24 Jahre) in Europa. "
        "Suizidgedanken kommen bei 15-25% aller Jugendlichen vor. Das bedeutet: "
        "In einer Schulklasse von 25 Schuelern haben statistisch 4-6 bereits Suizidgedanken gehabt.")

    add_flowchart(doc, [
        "Jugendlicher aeussert Suizidgedanken oder zeigt Warnsignale",
        ("Besteht akute Gefahr? (Hat er einen konkreten Plan, Zugang zu Mitteln, "
         "Zeitrahmen?)",
         "JA: Sofortige Krisenintervention (Kapitel 6.2). Jugendlichen NICHT alleine lassen.",
         "NEIN: Weiteres Gespraech fuehren"),
        ("Bestehen passive Suizidgedanken? (Wuensche tot zu sein, ohne konkreten Plan)",
         "JA: Sicherheitsplan erstellen, Termine engmaschig, Eltern informieren",
         "NEIN: Beobachtung fortsetzen, praeventiv arbeiten"),
        "Fachliche Ueberweisung pruefen und einleiten"
    ])

    # =====================================================================
    # 2.4 AGGRESSION
    # =====================================================================
    doc.add_heading('2.4 Aggression und oppositionelles Verhalten', level=2)

    doc.add_paragraph(
        "Aggression bei Jugendlichen ist eines der haeufigsten Zuweisungsgruende. "
        "Wichtig ist die Unterscheidung zwischen reaktiver Aggression (emotional, "
        "impulsiv, als Reaktion auf wahrgenommene Bedrohung) und proaktiver Aggression "
        "(geplant, instrumentell, zur Erreichung von Zielen).")

    add_table(doc,
        ["Typ", "Merkmal", "Hintergrund", "Intervention"],
        [
            ["Reaktive Aggression",
             "Emotional, impulsiv, Wutausbrueche, schnelle Eskalation",
             "Oft Trauma, unsichere Bindung, Emotionsregulationsdefizit",
             "Emotionsregulation, Deeskalation, traumainformiert arbeiten"],
            ["Proaktive Aggression",
             "Geplant, kaltbluetig, instrumentell, wenig Empathie",
             "Moeglicherweise Conduct Disorder, dissoziale Zuege",
             "Grenzen setzen, Konsequenzen, Empathiefoerderung, ggf. Ueberweisung"],
            ["Verbal aggressiv",
             "Beschimpfungen, Drohungen, Einschuechterung",
             "Modelllernen, Machterleben, fehlende Kommunikationskompetenz",
             "Alternative Kommunikationswege aufzeigen, Gewaltfreie Kommunikation"],
            ["Autoaggressiv",
             "Gegen sich selbst gerichtet, SVV, Risikobereitschaft",
             "Depression, Selbsthass, Hilflosigkeit",
             "Wie SVV behandeln, Ursachen erforschen"]
        ])

    add_tip_box(doc,
        "Hinter fast jeder Aggression steckt ein unerfuelltes Beduerfnis. Fragen Sie sich "
        "immer: Was braucht dieser Jugendliche? Sicherheit? Kontrolle? Zugehoerigkeit? "
        "Anerkennung? Die Aggression ist die Strategie - nicht das Problem.")

    # =====================================================================
    # 2.5 ADHS
    # =====================================================================
    doc.add_heading('2.5 ADHS im Jugendalter', level=2)

    doc.add_paragraph(
        "ADHS (Aufmerksamkeitsdefizit-Hyperaktivitaetsstoerung) betrifft etwa 5-7% aller "
        "Jugendlichen. Im Jugendalter veraendert sich die Symptomatik: Die Hyperaktivitaet "
        "nimmt oft ab, die Aufmerksamkeitsprobleme und die innere Unruhe bleiben. "
        "ADHS ist eine neurobiologische Entwicklungsstoerung, keine Erziehungsfrage.")

    add_table(doc,
        ["Bereich", "Typische Schwierigkeiten", "Was Ihnen auffallen koennte"],
        [
            ["Aufmerksamkeit", "Kann sich nicht lange konzentrieren, ist leicht ablenkbar",
             "Vergisst Termine, verliert Sachen, Tagtraeumerei"],
            ["Impulsivitaet", "Handelt ohne nachzudenken, unterbricht andere",
             "Konflikte mit Peers, unangemessene Kommentare, Risikoverhalten"],
            ["Hyperaktivitaet", "Innere Unruhe, Zappeligkeit (weniger als im Kindesalter)",
             "Kann nicht still sitzen, extremes Multitasking, Nervositaet"],
            ["Emotionsregulation", "Starke emotionale Reaktionen, geringe Frustrationstoleranz",
             "Wutausbrueche, schnelle Stimmungswechsel, Ueberreaktionen"],
            ["Exekutivfunktionen", "Planungsschwaeche, Zeitblindheit, Priorisierungsprobleme",
             "Chaos, Prokrastination, verpasste Deadlines"]
        ])

    add_praxisbox(doc, "ADHS-freundliche Beratung",
        "1. Sitzungen kurz halten (30-40 Minuten)\n"
        "2. Abwechslung bieten (nicht nur reden, auch zeichnen, bewegen)\n"
        "3. Schriftliche Zusammenfassungen mitgeben\n"
        "4. Klare Strukturen und Routinen\n"
        "5. Staerken betonen (Kreativitaet, Energie, Spontanitaet)\n"
        "6. Nicht persoenlich nehmen, wenn der Jugendliche unaufmerksam wirkt")

    # =====================================================================
    # 2.6 AUTISMUS-SPEKTRUM
    # =====================================================================
    doc.add_heading('2.6 Autismus-Spektrum', level=2)

    doc.add_paragraph(
        "Autismus-Spektrum-Stoerungen (ASS) werden haeufig erst im Jugendalter erkannt, "
        "besonders bei Maedchen (Masking). ASS ist keine Krankheit, sondern eine andere Art "
        "der Wahrnehmung und Informationsverarbeitung. Ihre Aufgabe ist nicht Therapie, "
        "sondern Verstaendnis und Anpassung der Umgebung.")

    add_table(doc,
        ["Bereich", "Moegliche Zeichen", "Was helfen kann"],
        [
            ["Soziale Interaktion", "Schwierigkeiten mit Blickkontakt, Smalltalk, "
             "Gruppenarbeit, Ironie verstehen",
             "Klare, woertliche Kommunikation. Keine Ironie. Soziale Regeln explizit machen."],
            ["Kommunikation", "Woertliches Verstaendnis, monotone Sprache, "
             "Schwierigkeiten mit Subtext",
             "Direkt und eindeutig sprechen. Keine Doppeldeutigkeiten."],
            ["Sensorische Empfindlichkeit", "Ueberempfindlichkeit gegenueber Laerm, Licht, "
             "Beruehrung, Geruechen",
             "Reizarme Umgebung schaffen. Sensorische Beduerfnisse respektieren."],
            ["Spezialinteressen", "Intensive Beschaeftigung mit bestimmten Themen",
             "Als Ressource nutzen! Ueber Spezialinteressen in Kontakt kommen."],
            ["Routinen", "Starkes Beduerfnis nach Vorhersagbarkeit und Routine",
             "Veraenderungen ankuendigen. Struktur geben. Ueberraschungen vermeiden."]
        ])

    # =====================================================================
    # 2.7 TRAUMA UND PTBS
    # =====================================================================
    doc.add_heading('2.7 Trauma und PTBS', level=2)

    doc.add_paragraph(
        "Trauma ist leider haeufig: 25-70% aller Jugendlichen erleben mindestens ein "
        "traumatisches Ereignis. Nicht jedes Trauma fuehrt zu PTBS, aber jedes Trauma "
        "verdient Beachtung. Ihre Aufgabe ist Stabilisierung, nicht Traumatherapie.")

    add_table(doc,
        ["Traumatyp", "Beispiele", "Besonderheiten"],
        [
            ["Typ-I-Trauma (einmalig)", "Unfall, Ueberfall, Naturkatastrophe, ploetzlicher Todesfall",
             "Oft klares Vorher/Nachher. PTBS-Symptome klassisch."],
            ["Typ-II-Trauma (chronisch)", "Misshandlung, Missbrauch, Vernachlaessigung, haeusl. Gewalt",
             "Komplexe PTBS. Schwieriger zu erkennen. Bindungsstoerung haeufig."],
            ["Entwicklungstrauma", "Fruehe Vernachlaessigung, instabile Bezugspersonen",
             "Betrifft Persoenlichkeitsentwicklung. Haeufig als Verhaltensstoerung fehldiagnostiziert."]
        ])

    doc.add_heading('Traumasymptome erkennen', level=3)
    add_checklist(doc, [
        "Wiedererleben: Albtraeume, Flashbacks, intrusive Erinnerungen",
        "Vermeidung: Meidet Orte, Menschen, Gespraeche, die an das Trauma erinnern",
        "Uebererregung: Schreckhaftigkeit, Schlafprobleme, Konzentrationsprobleme, Hypervigilanz",
        "Negative Kognitionen: Schuld- und Schamgefuehle, negatives Selbstbild",
        "Dissoziation: Abwesenheit, Taubheit, das Gefuehl neben sich zu stehen",
        "Regression: Verhalten, das juengeren Alterstufen entspricht"
    ])

    add_important_box(doc,
        "Traumatherapie gehoert in die Haende von ausgebildeten Traumatherapeuten. "
        "Ihre Aufgabe ist: Erkennen, stabilisieren, ueberweisen. Versuchen Sie NICHT, "
        "traumatische Erlebnisse aufzuarbeiten - das kann retraumatisieren.")

    # =====================================================================
    # 2.8 ESSSTOERUNGEN
    # =====================================================================
    doc.add_heading('2.8 Essstoerungen', level=2)

    doc.add_paragraph(
        "Essstoerungen haben die hoechste Mortalitaetsrate aller psychischen Stoerungen. "
        "Sie betreffen zunehmend auch Jungen. Fruehes Erkennen ist entscheidend.")

    add_table(doc,
        ["Stoerung", "Kernsymptome", "Warnsignale in der Schule"],
        [
            ["Anorexia nervosa", "Extremes Untergewicht, Angst vor Gewichtszunahme, "
             "verzerrtes Koerperbild",
             "Abnehmen, weite Kleidung, Vermeidung der Mensa, exzessiver Sport, Kaelteempfindlichkeit"],
            ["Bulimia nervosa", "Essanfaelle gefolgt von Erbrechen oder anderen "
             "kompensatorischen Massnahmen",
             "Haeufige Toilettengaenge nach dem Essen, geschwollene Wangen, Zahnprobleme"],
            ["Binge-Eating-Stoerung", "Wiederkehrende Essanfaelle ohne Kompensation",
             "Uebergewicht, Scham, sozialer Rueckzug, emotionales Essen"],
            ["Orthorexia", "Zwanghaftes gesundes Essen, Nahrungsmittelrestriktionen",
             "Extreme Ernaehrungsregeln, Angst vor bestimmten Lebensmitteln, sozialer Rueckzug"]
        ])

    add_redflag(doc,
        "Essstoerungen koennen lebensbedrohlich sein. Bei Verdacht auf Anorexie: "
        "SOFORTIGE medizinische Abklaerung (BMI, Elektrolyte, Herzfrequenz). "
        "Ueberweisung an spezialisierte Einrichtung.")

    # =====================================================================
    # 2.9 SUBSTANZKONSUM
    # =====================================================================
    doc.add_heading('2.9 Substanzkonsum und Verhaltenssuchten', level=2)

    doc.add_paragraph(
        "Experimentieren mit Substanzen gehoert zur Adoleszenz. Die Grenze zwischen "
        "normalem Ausprobieren und problematischem Konsum ist fliessend. Wichtige "
        "Unterscheidung: Probierkonsum, regelmaessiger Konsum, Missbrauch, Abhaengigkeit.")

    add_table(doc,
        ["Substanz/Verhalten", "Praevalenz bei Jugendlichen", "Hauptrisiken",
         "Warnsignale"],
        [
            ["Cannabis", "20-30% haben probiert (15-18 Jahre)",
             "Entwicklungsstoerung des Gehirns, Psychoserisiko, Motivationsverlust",
             "Leistungsabfall, rote Augen, veraenderte Peer-Gruppe"],
            ["Alkohol", "60-70% haben probiert (15-18 Jahre)",
             "Hirnschaedigung, Unfaelle, Gewalt, Abhaengigkeitsentwicklung",
             "Geruch, Verhaltensaenderung, Gedaechtnisluecken"],
            ["Tabak/Vaping", "20-40% (stark steigend bei Vaping)",
             "Nikotinabhaengigkeit, Lungenschaedigung",
             "Geruch, Vaping-Devices, haeufiges Rausgehen"],
            ["Gaming-Sucht", "3-5% problematisch (vor allem Jungen)",
             "Sozialer Rueckzug, Schlafmangel, Leistungsabfall",
             "Exzessives Spielen, Gereiztheit bei Entzug, Vernachlaessigung"],
            ["Social Media", "Schwer zu beziffern, 10-20% problematisch",
             "Vergleich, Cybermobbing, Schlafmangel, FOMO",
             "Staendiges Checken, Stimmungsschwankungen, Selbstwertprobleme"]
        ])

    # =====================================================================
    # 2.10 MOBBING
    # =====================================================================
    doc.add_heading('2.10 Mobbing und Cybermobbing', level=2)

    doc.add_paragraph(
        "Mobbing ist keine harmlose Phase - es ist systematische Gewalt mit langfristigen "
        "Folgen fuer die psychische Gesundheit. 10-15% aller Schueler sind betroffen.")

    add_table(doc,
        ["Form", "Beschreibung", "Beispiele"],
        [
            ["Physisch", "Koerperliche Gewalt", "Schlagen, Treten, Sachbeschaedigung"],
            ["Verbal", "Verletzende Worte", "Beschimpfungen, Geruechte, Bloessstellungen"],
            ["Relational", "Soziale Ausgrenzung", "Ignorieren, Geruechte, Gruppenausschluss"],
            ["Cyber", "Digitale Gewalt",
             "Hasskommentare, Verbreitung peinlicher Fotos/Videos, Fake-Profile"]
        ])

    add_important_box(doc,
        "Cybermobbing endet nie - es folgt dem Jugendlichen nach Hause, in die Nacht, "
        "in die Ferien. Die Reichweite ist groesser, die Anonymitaet schuetzt Taeter, "
        "und das Material bleibt bestehen. Nehmen Sie Cybermobbing mindestens genauso "
        "ernst wie physisches Mobbing.")

    # =====================================================================
    # 2.11 SCHULVERWEIGERUNG
    # =====================================================================
    doc.add_heading('2.11 Schulverweigerung und Schulabsentismus', level=2)

    doc.add_paragraph(
        "Schulverweigerung ist ein Symptom, keine Diagnose. Hinter jeder Schulverweigerung "
        "steckt ein Grund. Die Unterscheidung zwischen verschiedenen Formen ist fuer die "
        "Intervention entscheidend.")

    add_table(doc,
        ["Form", "Motivation", "Typisches Bild", "Ansatz"],
        [
            ["Schulangst", "Angst vor schulischen Anforderungen oder sozialen Situationen",
             "Jugendlicher WILL kommen, KANN aber nicht (Angst, Panik, Somatisierung)",
             "Angstbehandlung, stufenweise Rueckfuehrung, Zusammenarbeit mit Schule"],
            ["Trennungsangst", "Angst, Eltern/Bezugsperson zu verlassen",
             "Klammert an Elternteil, Angst dass etwas passiert",
             "Schrittweise Abloesung, Elternberatung"],
            ["Schulschwaenzen", "Keine Lust, Suche nach Aufregung",
             "Jugendlicher ist NICHT zu Hause, haengt mit Peers ab",
             "Grenzen, Struktur, Motivation foerdern, Sinnerleben in Schule"],
            ["Schulmuedigkeit", "Ueberforderung, Unterforderung, Sinnkrise",
             "Demotivation, Leistungsabfall, innere Kuendigung",
             "Passende schulische Angebote, Staerkenfoerderung"]
        ])

    # =====================================================================
    # 2.12 GENDER UND IDENTITAET
    # =====================================================================
    doc.add_heading('2.12 Gender, Sexualitaet und Identitaet', level=2)

    doc.add_paragraph(
        "Fragen der geschlechtlichen und sexuellen Identitaet sind in der Adoleszenz "
        "besonders praevalent. LGBTQIA+ Jugendliche haben ein erhoehtes Risiko fuer "
        "psychische Probleme - nicht wegen ihrer Identitaet, sondern wegen "
        "Diskriminierung, Ablehnung und Minority Stress.")

    add_table(doc,
        ["Thema", "Was Sie wissen muessen", "Was Sie tun koennen"],
        [
            ["Coming-out", "Kann erleichternd oder belastend sein. Timing bestimmt der Jugendliche.",
             "Zuhoeren, akzeptieren, nicht draengen. Nicht outen!"],
            ["Geschlechtsdysphorie", "Leidensdruck durch Diskrepanz zwischen biologischem und erlebtem Geschlecht",
             "Ernst nehmen, nicht pathologisieren, an Fachstelle ueberweisen"],
            ["Pronomen/Name", "Jugendliche koennen um andere Pronomen oder Namen bitten",
             "Verwenden Sie die gewuenschten Pronomen. Es kostet nichts und bedeutet viel."],
            ["Elternreaktion", "Von voll akzeptierend bis ablehnend. Kulturell beeinflusst.",
             "Elternarbeit: Aufklaerung, Bedenken ernst nehmen, Brueche verhindern"]
        ])

    add_tip_box(doc,
        "Verwenden Sie offene, nicht-heteronormative Sprache: Statt 'Hast du eine Freundin?' "
        "fragen Sie 'Gibt es jemanden, den du magst?' Dies zeigt Offenheit und gibt dem "
        "Jugendlichen Raum.")

    # =====================================================================
    # 2.13 MIGRATION UND FLUCHT
    # =====================================================================
    doc.add_heading('2.13 Migration, Flucht und kulturelle Identitaet', level=2)

    doc.add_paragraph(
        "Luxemburg ist eines der multikulturellsten Laender Europas. Ueber 47% der "
        "Bevoelkerung haben einen Migrationshintergrund. In vielen Schulen ist die "
        "Mehrsprachigkeit und Multikulturalitaet der Normalfall. Dies bringt besondere "
        "Herausforderungen und Ressourcen mit sich.")

    add_table(doc,
        ["Herausforderung", "Was Sie beobachten koennen", "Kultursensibler Ansatz"],
        [
            ["Sprachbarrieren",
             "Schwierigkeiten im Unterricht, sozialer Rueckzug, Frustration",
             "Dolmetscher nutzen, mehrsprachige Materialien, Sprachkompetenz als Ressource"],
            ["Akkulturationsstress",
             "Zwischen den Kulturen stehen, Loyalitaetskonflikte, Identitaetskrise",
             "Beide Kulturen wertschaetzen, Integration statt Assimilation"],
            ["Trauma durch Flucht",
             "PTBS-Symptome, Misstrauen, Ueberwachsamkeit",
             "Traumainformiert arbeiten, Sicherheit und Stabilitaet bieten"],
            ["Familiendynamik",
             "Parentifizierung (Kind als Dolmetscher), Generationenkonflikte",
             "Familiensystem verstehen, nicht bewerten"],
            ["Rassismuserfahrungen",
             "Abwertung, Ausgrenzung, Mikroaggressionen",
             "Rassismus ernst nehmen, nicht relativieren, Resilienz staerken"]
        ])

    # =====================================================================
    # 2.14 FAMILIAERE BELASTUNGEN
    # =====================================================================
    doc.add_heading('2.14 Familiaere Belastungen', level=2)

    doc.add_paragraph(
        "Familiaere Belastungen wirken sich unmittelbar auf das Wohlbefinden und die "
        "Entwicklung von Jugendlichen aus. Haeufige familiaere Belastungsfaktoren sind:")

    add_table(doc,
        ["Belastung", "Auswirkung auf den Jugendlichen", "Ihre Rolle"],
        [
            ["Trennung/Scheidung", "Loyalitaetskonflikte, Unsicherheit, Trauerreaktion",
             "Neutralitaet wahren, Gefuehle validieren, nicht Partei ergreifen"],
            ["Psychische Erkrankung eines Elternteils",
             "Parentifizierung, Angst, Scham, eigenes Erkrankungsrisiko",
             "Psychoedukation, Entlastung, Anbindung an Kinder-Gruppen"],
            ["Suchterkrankung", "Unvorhersagbarkeit, Vernachlaessigung, Scham, Geheimhaltung",
             "Enttabuisieren, Scham reduzieren, Hilfsangebote vermitteln"],
            ["Haeusliche Gewalt", "Angst, Trauma, Loyalitaetskonflikte, eigene Gewaltbereitschaft",
             "Sicherheit priorisieren, ONE/Kinderschutz, nicht zur Versoenung draengen"],
            ["Armut", "Scham, Ausgrenzung, eingeschraenkte Teilhabe, Stress",
             "Ressourcen vermitteln, nicht bevormunden, Wuerde wahren"],
            ["Tod eines Familienmitglieds", "Trauer, Angst, Regression, Schuldgefuehle",
             "Trauerbegleitung, normalisieren, Raum geben (siehe Kapitel 9.5)"]
        ])

    add_tip_box(doc,
        "Fragen Sie bei jedem Jugendlichen nach der Familie. Nicht nur: Wie geht es zu Hause? "
        "Sondern konkreter: Wer lebt bei dir? Wie verstehen sich deine Eltern? "
        "Hat sich zu Hause in letzter Zeit etwas veraendert? Oft oeffnen konkrete Fragen "
        "Tueren, die allgemeine Fragen geschlossen halten.")
