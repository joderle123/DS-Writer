"""
Kapitel 10: Werkzeugkasten - Arbeitsblaetter und Vorlagen
"""
from styles import (add_table, add_bullet_list, add_praxisbox, add_dialog,
                    add_redflag, add_important_box, add_tip_box, add_section_intro,
                    add_checklist, add_flowchart, add_numbered_list)


def add_chapter10(doc):
    """Kapitel 10: Werkzeugkasten - Arbeitsblaetter und Vorlagen"""

    doc.add_heading('KAPITEL 10: WERKZEUGKASTEN - ARBEITSBLAETTER UND VORLAGEN', level=1)

    add_section_intro(doc,
        "Dieses Kapitel enthaelt 25 Arbeitsblaetter und Vorlagen, die Sie direkt in Ihrer "
        "taeglichen Arbeit einsetzen koennen. Jede Vorlage ist praxiserprobt und kann "
        "individuell angepasst werden. Drucken Sie die Vorlagen aus, kopieren Sie sie "
        "und nutzen Sie sie im Gespraech mit Jugendlichen, Eltern und Kolleginnen und Kollegen.")

    add_tip_box(doc,
        "Alle Vorlagen koennen und sollen an Ihre individuellen Beduerfnisse angepasst werden. "
        "Betrachten Sie sie als Ausgangspunkt, nicht als starre Formulare.")

    # =====================================================================
    # ARBEITSBLATT 1: ERSTGESPRAECH-CHECKLISTE
    # =====================================================================
    doc.add_heading('Arbeitsblatt 1: Erstgespraech-Checkliste', level=3)

    doc.add_paragraph(
        "Zweck: Strukturierte Vorbereitung und Durchfuehrung des Erstgespraechs. "
        "Nutzen Sie diese Checkliste, um sicherzustellen, dass alle wichtigen Punkte "
        "abgedeckt werden. Haken Sie die Punkte waehrend oder nach dem Gespraech ab.")

    add_checklist(doc, [
        "Raum vorbereitet (Getraenke, Taschentuecher, ruhige Atmosphaere)",
        "Vorinformationen gesichtet (Akte, Ueberweisungsgrund, frueherer Kontakt)",
        "Zeitrahmen eingeplant (mindestens 45 Minuten ohne Unterbrechung)",
        "Begruessung und Vorstellung der eigenen Rolle",
        "Vertraulichkeit und deren Grenzen erklaert",
        "Offene Eingangsfrage gestellt: Was fuehrt dich hierher?",
        "Auftrag geklaert: Wer hat geschickt und warum?",
        "Erwartungen des Jugendlichen erfragt",
        "Aktuelle Situation exploriert (Schule, Familie, Freunde, Freizeit)",
        "Emotionales Befinden erfragt (Stimmung, Schlaf, Appetit, Energie)",
        "Ressourcen identifiziert: Was kannst du gut? Wer unterstuetzt dich?",
        "Belastungen erfragt: Was macht dir Sorgen oder Angst?",
        "Sicherheitsscreening durchgefuehrt (Suizidalitaet, Selbstverletzung, Gewalt)",
        "Zusammenfassung und naechste Schritte besprochen",
        "Folgetermin vereinbart und Kontaktmoeglichkeit mitgeteilt"
    ])

    # =====================================================================
    # ARBEITSBLATT 2: SICHERHEITSPLAN
    # =====================================================================
    doc.add_heading('Arbeitsblatt 2: Sicherheitsplan', level=3)

    doc.add_paragraph(
        "Zweck: Konkreter Handlungsplan fuer Krisensituationen bei Suizidalitaet "
        "(nach Stanley und Brown). Gemeinsam mit dem Jugendlichen ausfuellen. "
        "Der Plan sollte ausgedruckt und dem Jugendlichen mitgegeben werden.")

    add_important_box(doc,
        "Diesen Plan immer GEMEINSAM mit dem Jugendlichen erstellen, nie einfach austeilen!")

    doc.add_paragraph("Name: _______________  Datum: _______________")

    doc.add_paragraph(
        "ABSCHNITT 1: Meine Warnsignale - Woran merke ich, dass es mir schlechter geht?")
    add_table(doc, ["Nr.", "Warnsignal (Gedanken, Gefuehle, Koerperempfindungen)"], [
        ["1", "_______________________________________________"],
        ["2", "_______________________________________________"],
        ["3", "_______________________________________________"]
    ])

    doc.add_paragraph(
        "ABSCHNITT 2: Was kann ich ALLEINE tun, um mich abzulenken?")
    add_table(doc, ["Nr.", "Strategie"], [
        ["1", "_______________________________________________"],
        ["2", "_______________________________________________"],
        ["3", "_______________________________________________"]
    ])

    doc.add_paragraph(
        "ABSCHNITT 3: Menschen und Orte, die mir helfen (ohne ueber die Krise zu reden)")
    add_table(doc, ["Person oder Ort", "Telefonnummer"], [
        ["_______________", "_______________"],
        ["_______________", "_______________"],
        ["_______________", "_______________"]
    ])

    doc.add_paragraph(
        "ABSCHNITT 4: Menschen, denen ich sagen kann, dass es mir schlecht geht")
    add_table(doc, ["Name", "Telefonnummer"], [
        ["_______________", "_______________"],
        ["_______________", "_______________"]
    ])

    doc.add_paragraph(
        "ABSCHNITT 5: Professionelle Hilfe und Notfallnummern")
    add_table(doc, ["Dienst", "Telefonnummer"], [
        ["SOS Detresse", "45 45 45"],
        ["Kanner-Jugendtelefon", "116 111"],
        ["Notarzt / Rettungsdienst", "112"],
        ["Mein Berater: _______________", "_______________"]
    ])

    doc.add_paragraph(
        "ABSCHNITT 6: Meine Umgebung sicherer machen")
    doc.add_paragraph(
        "Gefaehrliche Gegenstaende (Medikamente, scharfe Gegenstaende) koennen "
        "voruebergehend bei _______________ aufbewahrt werden.")
    doc.add_paragraph(
        "Unterschrift Jugendliche/r: _______________  "
        "Unterschrift Berater/in: _______________")

    # =====================================================================
    # ARBEITSBLATT 3: NOTFALLKOFFER
    # =====================================================================
    doc.add_heading('Arbeitsblatt 3: Mein Notfallkoffer', level=3)

    doc.add_paragraph(
        "Zweck: Persoenliche Sammlung von Bewaeltigungsstrategien fuer Krisensituationen. "
        "Anleitung: Stell dir vor, du hast einen Koffer, den du immer dabeihast. "
        "Darin sind 10 Dinge, die dir helfen, wenn es dir schlecht geht. "
        "Was packst du ein?")

    add_table(doc, ["Nr.", "Was hilft mir?", "Warum hilft es mir?"], [
        ["1", "_______________", "_______________"],
        ["2", "_______________", "_______________"],
        ["3", "_______________", "_______________"],
        ["4", "_______________", "_______________"],
        ["5", "_______________", "_______________"],
        ["6", "_______________", "_______________"],
        ["7", "_______________", "_______________"],
        ["8", "_______________", "_______________"],
        ["9", "_______________", "_______________"],
        ["10", "_______________", "_______________"]
    ])

    doc.add_paragraph(
        "Ideen fuer deinen Notfallkoffer: Lieblingsmusik hoeren, jemanden anrufen, "
        "nach draussen gehen, Sport machen, Atemuebung, Eiswuerfel in die Hand nehmen, "
        "Lieblingsserie schauen, Tagebuch schreiben, mit dem Haustier kuscheln, "
        "warm duschen oder baden.")

    # =====================================================================
    # ARBEITSBLATT 4: GEDANKENDETEKTIV
    # =====================================================================
    doc.add_heading('Arbeitsblatt 4: Gedankendetektiv', level=3)

    doc.add_paragraph(
        "Zweck: Automatische Gedanken erkennen und ueberpruefen (KVT-basiert). "
        "Anleitung: Wenn du dich schlecht fuehlst, fuell die Tabelle aus. "
        "Suche Beweise FUER und GEGEN deinen Gedanken - wie ein Detektiv!")

    add_table(doc,
        ["Situation\n(Was ist passiert?)",
         "Automatischer Gedanke\n(Was ging mir durch den Kopf?)",
         "Beweise DAFUER\n(Was spricht fuer den Gedanken?)",
         "Beweise DAGEGEN\n(Was spricht gegen den Gedanken?)",
         "Alternativer Gedanke\n(Was koennte auch stimmen?)"],
        [
            ["___", "___", "___", "___", "___"],
            ["___", "___", "___", "___", "___"],
            ["___", "___", "___", "___", "___"],
            ["___", "___", "___", "___", "___"],
            ["___", "___", "___", "___", "___"]
        ])

    doc.add_paragraph(
        "Haeufige Denkfallen: Katastrophisierung (das Schlimmste annehmen), "
        "Schwarz-Weiss-Denken (alles oder nichts), Gedankenlesen (wissen was andere denken), "
        "Personalisierung (alles auf sich beziehen), Uebergeneralisierung (immer, nie, alle), "
        "Emotionales Schlussfolgern (ich fuehle es, also stimmt es), "
        "Sollte-Denken (ich muesste, ich sollte).")

    # =====================================================================
    # ARBEITSBLATT 5: EMOTIONSTAGEBUCH
    # =====================================================================
    doc.add_heading('Arbeitsblatt 5: Emotionstagebuch', level=3)

    doc.add_paragraph(
        "Zweck: Emotionen wahrnehmen, benennen und Muster erkennen. "
        "Anleitung: Fuell jeden Tag die Tabelle aus. Bewerte die Intensitaet "
        "deiner Emotionen von 1 (kaum spuerbar) bis 10 (sehr stark). "
        "Woche vom _______________ bis _______________.")

    add_table(doc,
        ["Tag", "Situation", "Emotion", "Intensitaet\n(1-10)",
         "Gedanke dabei", "Was habe ich getan?", "Hat es geholfen?"],
        [
            ["Montag", "___", "___", "___", "___", "___", "___"],
            ["Dienstag", "___", "___", "___", "___", "___", "___"],
            ["Mittwoch", "___", "___", "___", "___", "___", "___"],
            ["Donnerstag", "___", "___", "___", "___", "___", "___"],
            ["Freitag", "___", "___", "___", "___", "___", "___"],
            ["Samstag", "___", "___", "___", "___", "___", "___"],
            ["Sonntag", "___", "___", "___", "___", "___", "___"]
        ])

    doc.add_paragraph(
        "Emotionswortschatz: Traurig, wuetend, aengstlich, froehlich, ueberrascht, "
        "angeekelt, beschaemt, schuldig, eifersuechtg, stolz, erleichtert, "
        "gelangweilt, einsam, hoffnungsvoll, frustriert, nervoes, dankbar.")

    # =====================================================================
    # ARBEITSBLATT 6: STAERKENBAUM
    # =====================================================================
    doc.add_heading('Arbeitsblatt 6: Mein Staerkenbaum', level=3)

    doc.add_paragraph(
        "Zweck: Ressourcen und Staerken visuell darstellen. "
        "Anleitung: Zeichne einen grossen Baum auf ein separates Blatt. "
        "Fuell dann die einzelnen Teile aus und uebertrage sie auf deinen Baum.")

    add_table(doc, ["Baumteil", "Bedeutung", "Meine Antworten"], [
        ["WURZELN\n(Was traegt mich?)",
         "Meine Werte, meine Herkunft, meine Familie, "
         "Traditionen, was mir wichtig ist",
         "_______________"],
        ["STAMM\n(Was macht mich stark?)",
         "Meine Staerken, Charaktereigenschaften, "
         "was mich ausmacht, worauf ich mich verlassen kann",
         "_______________"],
        ["AESTE\n(Was kann ich?)",
         "Meine Faehigkeiten, Talente, "
         "was ich gelernt habe, meine Kompetenzen",
         "_______________"],
        ["BLAETTER\n(Was habe ich erreicht?)",
         "Meine Erfolge, Dinge auf die ich stolz bin, "
         "Herausforderungen die ich gemeistert habe",
         "_______________"],
        ["FRUECHTE\n(Was gebe ich weiter?)",
         "Was ich anderen gebe, wie ich anderen helfe, "
         "mein Beitrag zur Gemeinschaft",
         "_______________"],
        ["BLUETEN\n(Was waechst noch?)",
         "Meine Traeume, Ziele, Wuensche, "
         "was ich noch lernen oder erreichen moechte",
         "_______________"]
    ])

    # =====================================================================
    # ARBEITSBLATT 7: NETZWERKKARTE
    # =====================================================================
    doc.add_heading('Arbeitsblatt 7: Meine Netzwerkkarte', level=3)

    doc.add_paragraph(
        "Zweck: Soziale Ressourcen sichtbar machen und Unterstuetzungsnetzwerk analysieren. "
        "Anleitung: Zeichne 4 konzentrische Kreise auf ein Blatt. Du stehst in der Mitte. "
        "Schreibe die Namen der Menschen in den passenden Kreis.")

    add_table(doc, ["Kreis", "Beschreibung", "Namen"], [
        ["1. Innerer Kreis\n(ganz nah)",
         "Menschen, denen ich alles anvertrauen kann, "
         "die immer fuer mich da sind",
         "_______________"],
        ["2. Zweiter Kreis\n(wichtig)",
         "Menschen, die mir wichtig sind und die ich "
         "regelmaessig sehe",
         "_______________"],
        ["3. Dritter Kreis\n(Bekannte)",
         "Menschen, die ich kenne und die mir "
         "manchmal helfen koennen",
         "_______________"],
        ["4. Aeusserer Kreis\n(professionelle Helfer)",
         "Berater, Lehrer, Aerzte, Trainer und "
         "andere professionelle Ansprechpartner",
         "_______________"]
    ])

    doc.add_paragraph(
        "Reflexionsfragen: Wie viele Menschen stehen in deinen Kreisen? "
        "Gibt es Kreise, die leer sind? Wen wuerdest du gerne naeher haben? "
        "Wer fehlt dir? Gibt es Menschen, die du naeher an dich heranlassen moechtest?")

    # =====================================================================
    # ARBEITSBLATT 8: GENOGRAMM-VORLAGE
    # =====================================================================
    doc.add_heading('Arbeitsblatt 8: Genogramm-Vorlage', level=3)

    doc.add_paragraph(
        "Zweck: Familienstruktur und -dynamik visuell darstellen. "
        "Anleitung: Zeichnen Sie das Genogramm ueber mindestens drei Generationen. "
        "Verwenden Sie die folgenden Standardsymbole.")

    doc.add_paragraph("Symboluebersicht fuer das Genogramm:")
    add_table(doc, ["Symbol", "Bedeutung"], [
        ["Quadrat", "Maennliche Person"],
        ["Kreis", "Weibliche Person"],
        ["Raute", "Diverse / unbekanntes Geschlecht"],
        ["X durch Symbol", "Verstorbene Person"],
        ["Doppellinie", "Ehe / feste Partnerschaft"],
        ["Einfache Linie", "Beziehung / Zusammenleben"],
        ["Gestrichelte Linie", "Getrennt"],
        ["Linie mit Schraegstrich", "Geschieden"],
        ["Zickzack-Linie", "Konfliktbeziehung"],
        ["Wellenlinie", "Enge / verstrickte Beziehung"],
        ["Pfeil nach unten", "Kinder (von links nach rechts: aeltestes zu juengstes)"]
    ])

    doc.add_paragraph(
        "Tragen Sie zusaetzlich ein: Alter oder Geburtsjahr, Berufe, "
        "relevante Erkrankungen (psychisch und physisch), Migrationsgeschichte, "
        "besondere Ereignisse (Verluste, Umzuege, Traumata). "
        "Siehe Kapitel 7.3 fuer eine ausfuehrliche Anleitung.")

    # =====================================================================
    # ARBEITSBLATT 9: VERHALTENSBEOBACHTUNG LEHRER
    # =====================================================================
    doc.add_heading('Arbeitsblatt 9: Verhaltensbeobachtung - Lehrerbogen', level=3)

    doc.add_paragraph(
        "Zweck: Strukturierte Verhaltensbeobachtung im ABC-Format (Antecedent-Behavior-Consequence). "
        "Anleitung: Bitte fuellen Sie diesen Bogen ueber eine Woche hinweg aus. "
        "Notieren Sie jedes auffaellige Verhalten moeglichst genau und zeitnah.")

    doc.add_paragraph(
        "Schueler/in: _______________  Klasse: _______________  "
        "Beobachtungszeitraum: _______________ bis _______________")
    doc.add_paragraph(
        "Ausgefuellt von: _______________  Fach/Kontext: _______________")

    add_table(doc,
        ["Datum / Zeit",
         "A - Was geschah VORHER?\n(Situation, Ausloeser)",
         "B - Was genau hat das Kind GETAN?\n(beobachtbares Verhalten)",
         "C - Was geschah DANACH?\n(Reaktion der Umgebung, Folgen)",
         "Anmerkungen"],
        [
            ["___", "___", "___", "___", "___"],
            ["___", "___", "___", "___", "___"],
            ["___", "___", "___", "___", "___"],
            ["___", "___", "___", "___", "___"],
            ["___", "___", "___", "___", "___"]
        ])

    doc.add_paragraph(
        "Zusaetzliche Beobachtungen: Wie oft tritt das Verhalten auf? "
        "___ mal pro Tag / Woche. "
        "In welchen Situationen tritt es NICHT auf? _______________")

    # =====================================================================
    # ARBEITSBLATT 10: VERHALTENSBEOBACHTUNG ELTERN
    # =====================================================================
    doc.add_heading('Arbeitsblatt 10: Verhaltensbeobachtung - Elternbogen', level=3)

    doc.add_paragraph(
        "Zweck: Verhaltensbeobachtung durch die Eltern im haeuslichen Umfeld. "
        "Anleitung: Liebe Eltern, bitte notieren Sie Situationen, in denen "
        "das Verhalten Ihres Kindes Ihnen Sorgen macht. Beschreiben Sie moeglichst "
        "genau, was passiert ist - ohne zu bewerten.")

    doc.add_paragraph(
        "Kind: _______________  Alter: _______________  "
        "Beobachtungszeitraum: _______________ bis _______________")

    add_table(doc,
        ["Tag / Uhrzeit",
         "Situation\n(Was war vorher?)",
         "Verhalten\n(Was genau hat Ihr Kind getan?)",
         "Ihre Reaktion\n(Was haben Sie getan?)",
         "Wie ging es weiter?"],
        [
            ["___", "___", "___", "___", "___"],
            ["___", "___", "___", "___", "___"],
            ["___", "___", "___", "___", "___"],
            ["___", "___", "___", "___", "___"],
            ["___", "___", "___", "___", "___"]
        ])

    doc.add_paragraph(
        "Was klappt gut im Alltag mit Ihrem Kind? _______________")
    doc.add_paragraph(
        "Was wuenschen Sie sich? _______________")

    # =====================================================================
    # ARBEITSBLATT 11: SELBSTBEOBACHTUNG JUGENDLICHER
    # =====================================================================
    doc.add_heading('Arbeitsblatt 11: Selbstbeobachtung - Jugendbogen', level=3)

    doc.add_paragraph(
        "Zweck: Jugendliche lernen, ihr eigenes Verhalten und ihre Gefuehle zu beobachten. "
        "Anleitung: Schreib auf, was in Situationen passiert, in denen du "
        "dich aufregst, streitest oder dich unwohl fuehlst. Sei ehrlich - "
        "es gibt kein richtig oder falsch.")

    doc.add_paragraph("Name: _______________  Woche vom: _______________")

    add_table(doc,
        ["Wann?\n(Tag, Uhrzeit)",
         "Was war los?\n(Situation)",
         "Was habe ich gefuehlt?\n(Emotion, 1-10)",
         "Was habe ich gedacht?",
         "Was habe ich getan?",
         "Was wuerde ich naechstes Mal anders machen?"],
        [
            ["___", "___", "___", "___", "___", "___"],
            ["___", "___", "___", "___", "___", "___"],
            ["___", "___", "___", "___", "___", "___"],
            ["___", "___", "___", "___", "___", "___"],
            ["___", "___", "___", "___", "___", "___"]
        ])

    # =====================================================================
    # ARBEITSBLATT 12: STIMMUNGSBAROMETER
    # =====================================================================
    doc.add_heading('Arbeitsblatt 12: Stimmungsbarometer - Wochentracker', level=3)

    doc.add_paragraph(
        "Zweck: Stimmungsverlauf ueber eine Woche sichtbar machen. "
        "Anleitung: Kreuze jeden Tag morgens, mittags und abends an, "
        "wie es dir geht. 1 = sehr schlecht, 10 = super. "
        "Woche vom _______________ bis _______________.")

    add_table(doc,
        ["Tag", "Morgens\n(1-10)", "Mittags\n(1-10)", "Abends\n(1-10)",
         "Was ist heute passiert?", "Was hat geholfen?"],
        [
            ["Montag", "___", "___", "___", "___", "___"],
            ["Dienstag", "___", "___", "___", "___", "___"],
            ["Mittwoch", "___", "___", "___", "___", "___"],
            ["Donnerstag", "___", "___", "___", "___", "___"],
            ["Freitag", "___", "___", "___", "___", "___"],
            ["Samstag", "___", "___", "___", "___", "___"],
            ["Sonntag", "___", "___", "___", "___", "___"]
        ])

    doc.add_paragraph(
        "Wochen-Reflexion: Mein bester Tag war _______________, weil _______________. "
        "Am schwierigsten war _______________, weil _______________. "
        "Naechste Woche moechte ich _______________.")

    # =====================================================================
    # ARBEITSBLATT 13: STRESSTHERMOMETER
    # =====================================================================
    doc.add_heading('Arbeitsblatt 13: Stressthermometer', level=3)

    doc.add_paragraph(
        "Zweck: Stresslevel einschaetzen und passende Strategien zuordnen. "
        "Anleitung: Wo auf dem Thermometer bist du gerade? Male den Punkt an. "
        "Lies dann, was du auf dieser Stufe tun kannst.")

    add_table(doc, ["Stufe", "Beschreibung", "Was ich tun kann"], [
        ["10 - EXPLOSION",
         "Totale Ueberwaeltigung, Kontrollverlust, "
         "ich kann nicht mehr denken",
         "SOFORT Hilfe holen: 112 oder 45 45 45 anrufen"],
        ["9 - ALARM",
         "Extrem gestresst, Panik, "
         "kann kaum noch klar denken",
         "TIPP-Skill anwenden, Raum verlassen, "
         "Vertrauensperson anrufen"],
        ["8 - SEHR HOCH",
         "Sehr angespannt, koerperliche Symptome "
         "(Herzrasen, Zittern, Schweiss)",
         "5-4-3-2-1-Grounding, Box Breathing, "
         "kaltes Wasser ins Gesicht"],
        ["7 - HOCH",
         "Deutlich gestresst, gereizt, "
         "Konzentration faellt schwer",
         "Pause machen, Bewegung, "
         "aus der Situation gehen"],
        ["6 - ERHOEHT",
         "Unruhig, angespannt, "
         "leicht reizbar",
         "Atemuebung, kurze Pause, "
         "Musik hoeren"],
        ["5 - MITTEL",
         "Leicht angespannt, aber "
         "noch gut funktionsfaehig",
         "Auf Warnsignale achten, "
         "praeventiv handeln"],
        ["4 - NORMAL",
         "Ausgeglichen, konzentriert, "
         "alles im gruenen Bereich",
         "Geniesse den Moment, "
         "merk dir wie sich das anfuehlt"],
        ["3 - RUHIG",
         "Entspannt und gelassen, "
         "fuehlst dich wohl",
         "Gut so! Was hat dazu beigetragen?"],
        ["2 - SEHR RUHIG",
         "Tiefe Entspannung, "
         "Zufriedenheit",
         "Ressource! Merke dir dieses Gefuehl"],
        ["1 - TIEFENENTSPANNT",
         "Voellig friedlich, gluecklich, "
         "im Einklang mit dir selbst",
         "Was hat dich hierhin gebracht? "
         "Das ist dein Schluessel!"]
    ])

    # =====================================================================
    # ARBEITSBLATT 14: WUTVULKAN
    # =====================================================================
    doc.add_heading('Arbeitsblatt 14: Mein Wutvulkan', level=3)

    doc.add_paragraph(
        "Zweck: Wutmechanismen verstehen lernen (Ausloeser, Warnsignale, Ausbruch). "
        "Anleitung: Zeichne einen grossen Vulkan. Beschrifte die einzelnen Teile "
        "mit deinen persoenlichen Antworten.")

    add_table(doc, ["Vulkan-Teil", "Frage", "Meine Antworten"], [
        ["LAVA - Ausbruch\n(ganz oben)",
         "Was passiert, wenn ich explodiere?\n"
         "(Schreien, Schlagen, Weinen, Tueren knallen...)",
         "_______________"],
        ["RAUCH - Warnsignale\n(aufsteigend)",
         "Woran merke ich, dass es gleich losgeht?\n"
         "(Herz schlaegt schnell, Fauste ballen, "
         "Gesicht wird heiss...)",
         "_______________"],
        ["MAGMAKAMMER - Was brodelt\n(im Inneren)",
         "Welche Gefuehle stecken UNTER der Wut?\n"
         "(Angst, Scham, Traurigkeit, Ungerechtigkeit, "
         "Hilflosigkeit...)",
         "_______________"],
        ["AUSLOESER - Trigger\n(am Fuss des Vulkans)",
         "Was bringt meinen Vulkan zum Ausbrechen?\n"
         "(Blossstellung, Ungerechtigkeit, Ueberforderung, "
         "Ignoriert werden...)",
         "_______________"],
        ["KUEHLSYSTEM - Strategien\n(rund um den Vulkan)",
         "Was hilft, den Vulkan zu beruhigen?\n"
         "(Atmen, rausgehen, Musik, Sport, "
         "mit jemandem reden...)",
         "_______________"]
    ])

    doc.add_paragraph(
        "Merke: Wut ist ein normales Gefuehl! Es geht nicht darum, "
        "nie wuetend zu sein, sondern darum, was du mit der Wut MACHST.")

    # =====================================================================
    # ARBEITSBLATT 15: SORGENFRESSER-BRIEF
    # =====================================================================
    doc.add_heading('Arbeitsblatt 15: Sorgenfresser-Brief', level=3)

    doc.add_paragraph(
        "Zweck: Sorgen externalisieren und symbolisch loslassen. "
        "Anleitung: Schreibe einen Brief an deinen Sorgenfresser - ein Wesen, "
        "das alle deine Sorgen auffressen kann. Wenn du fertig bist, falte den Brief "
        "zusammen und stecke ihn in den Sorgenfresser-Umschlag (oder eine Box).")

    doc.add_paragraph(
        "Lieber Sorgenfresser,")
    doc.add_paragraph(
        "heute brauche ich deine Hilfe. Hier sind meine Sorgen:")
    doc.add_paragraph(
        "Meine groesste Sorge gerade ist: _______________")
    doc.add_paragraph(
        "Diese Sorge ist schon so lange da: _______________")
    doc.add_paragraph(
        "Sie fuehlt sich an wie: _______________")
    doc.add_paragraph(
        "Wenn ich an diese Sorge denke, dann: _______________")
    doc.add_paragraph(
        "Wenn du diese Sorge auffressen wuerdest, dann waere: _______________")
    doc.add_paragraph(
        "Hier ist die Sorge - bitte friss sie auf: _______________")
    doc.add_paragraph(
        "Danke, lieber Sorgenfresser!")

    add_tip_box(doc,
        "Besonders wirksam bei juengeren Jugendlichen (10-14 Jahre). "
        "Nach dem Schreiben kann der Brief tatsaechlich zerrissen, verbrannt (sicher!) "
        "oder in eine verschlossene Box gelegt werden. Das Ritual des Loslassens ist "
        "der therapeutische Kern dieser Uebung.")

    # =====================================================================
    # ARBEITSBLATT 16: KOERPERLANDKARTE
    # =====================================================================
    doc.add_heading('Arbeitsblatt 16: Meine Koerperlandkarte', level=3)

    doc.add_paragraph(
        "Zweck: Koerperwahrnehmung foerdern und Zusammenhang zwischen Emotionen und "
        "Koerperempfindungen erkunden. "
        "Anleitung: Zeichne deinen Koerperumriss auf ein grosses Blatt. "
        "Male dann mit verschiedenen Farben ein, wo du die folgenden Gefuehle spuerst.")

    add_table(doc, ["Gefuehl", "Farbe", "Wo im Koerper?", "Wie fuehlt es sich an?"], [
        ["Angst", "(waehle eine Farbe)", "_______________",
         "_______________"],
        ["Wut", "(waehle eine Farbe)", "_______________",
         "_______________"],
        ["Traurigkeit", "(waehle eine Farbe)", "_______________",
         "_______________"],
        ["Freude", "(waehle eine Farbe)", "_______________",
         "_______________"],
        ["Stress", "(waehle eine Farbe)", "_______________",
         "_______________"],
        ["Scham", "(waehle eine Farbe)", "_______________",
         "_______________"],
        ["Liebe", "(waehle eine Farbe)", "_______________",
         "_______________"],
        ["Ekel", "(waehle eine Farbe)", "_______________",
         "_______________"]
    ])

    doc.add_paragraph(
        "Reflexionsfragen: Gibt es Koerperstellen, an denen du besonders viel spuerst? "
        "Gibt es Gefuehle, die sich aehnlich anfuehlen? "
        "Was hilft deinem Koerper, sich zu entspannen?")

    # =====================================================================
    # ARBEITSBLATT 17: BRIEF AN MEIN ZUKUENFTIGES ICH
    # =====================================================================
    doc.add_heading('Arbeitsblatt 17: Brief an mein zukuenftiges Ich', level=3)

    doc.add_paragraph(
        "Zweck: Perspektivwechsel, Hoffnung foerdern, Zukunftsorientierung staerken. "
        "Anleitung: Schreibe einen Brief an dich selbst in 5 Jahren. "
        "Der Brief wird verschlossen und zu einem vereinbarten Zeitpunkt geoeffnet.")

    doc.add_paragraph(
        "Datum heute: _______________")
    doc.add_paragraph(
        "Liebe/r _______________ in 5 Jahren,")
    doc.add_paragraph(
        "gerade bin ich ___ Jahre alt und gehe in die Klasse ___.")
    doc.add_paragraph(
        "So geht es mir gerade: _______________")
    doc.add_paragraph(
        "Das beschaeftigt mich im Moment am meisten: _______________")
    doc.add_paragraph(
        "Das finde ich gerade richtig gut in meinem Leben: _______________")
    doc.add_paragraph(
        "Das wuensche ich mir fuer dich (mein zukuenftiges Ich): _______________")
    doc.add_paragraph(
        "Das moechte ich dich fragen: _______________")
    doc.add_paragraph(
        "Bitte vergiss nie, dass: _______________")
    doc.add_paragraph(
        "Der wichtigste Rat, den ich dir mitgebe: _______________")
    doc.add_paragraph(
        "Dein heutiges Ich")
    doc.add_paragraph(
        "Oeffnen am: _______________")

    # =====================================================================
    # ARBEITSBLATT 18: ACHTSAMKEITS-NOTFALLKARTE
    # =====================================================================
    doc.add_heading('Arbeitsblatt 18: Achtsamkeits-Notfallkarte', level=3)

    doc.add_paragraph(
        "Zweck: 5 schnelle Achtsamkeitsuebungen fuer akute Belastungssituationen. "
        "Format: Scheckkartengroesse - ausdrucken, laminieren und dem Jugendlichen mitgeben!")

    add_praxisbox(doc, "ACHTSAMKEITS-NOTFALLKARTE (Vorderseite)",
        "WENN ES DIR SCHLECHT GEHT - 5 SCHNELLE UEBUNGEN:\n\n"
        "1. STOPP-Technik: Halte inne. Sag innerlich STOPP. Atme dreimal tief.\n\n"
        "2. 5-4-3-2-1-Grounding: Benenne 5 Dinge die du siehst, "
        "4 die du hoerst, 3 die du fuehlen kannst, "
        "2 die du riechst, 1 das du schmeckst.\n\n"
        "3. Box Breathing: Atme 4 Sekunden ein, halte 4 Sekunden, "
        "atme 4 Sekunden aus, halte 4 Sekunden. Wiederhole 4 mal.\n\n"
        "4. Koerper-Scan Express: Spuere deine Fuesse auf dem Boden. "
        "Spuere deine Haende. Spuere deinen Atem. Du bist hier. Du bist sicher.\n\n"
        "5. Kalt-Technik: Halte Eiswuerfel in der Hand oder spritz dir "
        "kaltes Wasser ins Gesicht. Das bringt dich sofort ins Hier und Jetzt.")

    add_praxisbox(doc, "ACHTSAMKEITS-NOTFALLKARTE (Rueckseite)",
        "NOTFALLNUMMERN:\n"
        "SOS Detresse: 45 45 45\n"
        "Kanner-Jugendtelefon: 116 111\n"
        "Notruf: 112\n\n"
        "MEIN PERSOENLICHER NOTFALLPLAN:\n"
        "Ich rufe an: _______________\n"
        "Ich gehe zu: _______________\n"
        "Das hilft mir immer: _______________")

    # =====================================================================
    # ARBEITSBLATT 19: GFK-SPICKZETTEL
    # =====================================================================
    doc.add_heading('Arbeitsblatt 19: GfK-Spickzettel (Gewaltfreie Kommunikation)', level=3)

    doc.add_paragraph(
        "Zweck: Kurzanleitung fuer die 4 Schritte der Gewaltfreien Kommunikation "
        "nach Marshall Rosenberg. Kann als Merkhilfe ausgedruckt werden.")

    add_table(doc,
        ["Schritt", "Formel", "Beispiel Jugendlicher", "Beispiel Fachperson"],
        [
            ["1. Beobachtung\n(ohne Bewertung)",
             "Wenn ich sehe/hoere, dass...",
             "Wenn du mein Handy wegnimmst, ohne zu fragen...",
             "Wenn ich sehe, dass du in den letzten drei Wochen "
             "nicht zum Unterricht gekommen bist..."],
            ["2. Gefuehl\n(eigenes Gefuehl benennen)",
             "...fuehle ich mich...",
             "...fuehle ich mich wuetend und nicht respektiert...",
             "...fuehle ich mich besorgt..."],
            ["3. Beduerfnis\n(was brauche ich)",
             "...weil mir wichtig ist...",
             "...weil mir Respekt und Privatsphaere wichtig sind...",
             "...weil mir dein Wohlergehen und deine Zukunft wichtig sind..."],
            ["4. Bitte\n(konkret und erfuellbar)",
             "Waerst du bereit...?",
             "Waerst du bereit, mich vorher zu fragen?",
             "Waerst du bereit, mir zu erzaehlen, "
             "was gerade bei dir los ist?"]
        ])

    doc.add_paragraph(
        "Wichtige Unterscheidungen:")
    add_bullet_list(doc, [
        "Beobachtung vs. Bewertung: \"Du bist immer zu spaet\" (Bewertung) vs. "
        "\"Du bist diese Woche dreimal nach 8:15 gekommen\" (Beobachtung)",
        "Gefuehl vs. Pseudo-Gefuehl: \"Ich fuehle mich ignoriert\" (Pseudo) vs. "
        "\"Ich fuehle mich traurig und einsam\" (echtes Gefuehl)",
        "Bitte vs. Forderung: Eine echte Bitte erlaubt auch ein Nein als Antwort"
    ])

    # =====================================================================
    # ARBEITSBLATT 20: ABC-ANALYSE-BOGEN
    # =====================================================================
    doc.add_heading('Arbeitsblatt 20: ABC-Analyse-Bogen (Professionelle Version)', level=3)

    doc.add_paragraph(
        "Zweck: Ausfuehrliche Verhaltensanalyse fuer die professionelle Fallarbeit. "
        "Anleitung: Fuellen Sie den Bogen moeglichst zeitnah nach der Beobachtung aus. "
        "Nutzen Sie konkrete, beobachtbare Beschreibungen.")

    doc.add_paragraph(
        "Klient/in (Code): _______________  Datum: _______________  "
        "Beobachter/in: _______________")

    add_table(doc,
        ["Kategorie", "Leitfragen", "Beobachtung"],
        [
            ["A - Antecedent\n(Vorgeschehen)",
             "Was war unmittelbar VORHER?\n"
             "Wo war der Jugendliche?\n"
             "Wer war anwesend?\n"
             "Was wurde gesagt oder getan?\n"
             "Welche Stimmung herrschte?",
             "_______________"],
            ["B - Behavior\n(Verhalten)",
             "Was genau hat der Jugendliche GETAN?\n"
             "Wie lange dauerte es?\n"
             "Wie intensiv war es (1-10)?\n"
             "Was hat er/sie gesagt?\n"
             "Koerpersprache?",
             "_______________"],
            ["C - Consequence\n(Konsequenz)",
             "Was passierte unmittelbar DANACH?\n"
             "Wie reagierte die Umgebung?\n"
             "Was hat der Jugendliche erreicht?\n"
             "Was hat der Jugendliche vermieden?\n"
             "Kurz- vs. langfristige Folgen?",
             "_______________"],
            ["Hypothese",
             "Welche Funktion hat das Verhalten?\n"
             "(Aufmerksamkeit, Vermeidung, Kontrolle, "
             "Spannungsabbau, Zugehoerigkeit?)",
             "_______________"],
            ["Interventionsidee",
             "Was koennte helfen?\n"
             "(Ausloeser veraendern, alternatives Verhalten "
             "aufbauen, Konsequenzen anpassen?)",
             "_______________"]
        ])

    # =====================================================================
    # ARBEITSBLATT 21: PROTOKOLL RUNDER TISCH
    # =====================================================================
    doc.add_heading('Arbeitsblatt 21: Protokoll Runder Tisch', level=3)

    doc.add_paragraph(
        "Zweck: Strukturierte Dokumentation von multiprofessionellen Besprechungen. "
        "Anleitung: Vor dem Treffen die Kopfdaten ausfuellen, waehrend des Treffens "
        "Ergebnisse und Vereinbarungen notieren.")

    add_table(doc, ["Feld", "Inhalt"], [
        ["Datum und Uhrzeit", "_______________"],
        ["Ort", "_______________"],
        ["Anlass", "_______________"],
        ["Protokollfuehrung", "_______________"]
    ])

    doc.add_paragraph("Teilnehmer/innen:")
    add_table(doc, ["Name", "Funktion / Institution", "Anwesend?"], [
        ["_______________", "_______________", "Ja / Nein / Entschuldigt"],
        ["_______________", "_______________", "Ja / Nein / Entschuldigt"],
        ["_______________", "_______________", "Ja / Nein / Entschuldigt"],
        ["_______________", "_______________", "Ja / Nein / Entschuldigt"],
        ["_______________", "_______________", "Ja / Nein / Entschuldigt"]
    ])

    doc.add_paragraph("Tagesordnung und Besprechungspunkte:")
    add_table(doc, ["TOP", "Thema", "Ergebnis / Entscheidung"], [
        ["1", "Staerken und Ressourcen des Jugendlichen", "_______________"],
        ["2", "Aktuelle Herausforderungen", "_______________"],
        ["3", "Bisherige Massnahmen und deren Wirkung", "_______________"],
        ["4", "Neue Ziele (SMART formuliert)", "_______________"],
        ["5", "_______________", "_______________"]
    ])

    doc.add_paragraph("Vereinbarte Massnahmen:")
    add_table(doc, ["Nr.", "Massnahme", "Verantwortlich", "Bis wann?", "Erledigt?"], [
        ["1", "_______________", "_______________", "_______________", "___"],
        ["2", "_______________", "_______________", "_______________", "___"],
        ["3", "_______________", "_______________", "_______________", "___"],
        ["4", "_______________", "_______________", "_______________", "___"]
    ])

    doc.add_paragraph(
        "Naechster Termin: _______________  "
        "Ort: _______________  "
        "Einladung durch: _______________")

    # =====================================================================
    # ARBEITSBLATT 22: ONE-MELDUNG
    # =====================================================================
    doc.add_heading('Arbeitsblatt 22: ONE-Meldung (Kinderschutz)', level=3)

    doc.add_paragraph(
        "Zweck: Vorlage fuer eine Kinderschutzmeldung an das Office National "
        "de l'Enfance (ONE). "
        "Kontakt ONE: Tel. 247-73100. "
        "Anleitung: Fuellen Sie das Formular so vollstaendig wie moeglich aus. "
        "Im Zweifelsfall koennen Sie das ONE auch telefonisch konsultieren, "
        "bevor Sie eine formelle Meldung machen.")

    add_important_box(doc,
        "Bei akuter Gefahr fuer Leib und Leben: SOFORT Polizei (113) oder "
        "Notarzt (112) rufen! Die ONE-Meldung kann danach erfolgen.")

    add_table(doc, ["Feld", "Inhalt"], [
        ["Datum der Meldung", "_______________"],
        ["Meldende Person", "_______________"],
        ["Institution", "_______________"],
        ["Funktion", "_______________"],
        ["Telefon / E-Mail fuer Rueckfragen", "_______________"],
        ["---", "---"],
        ["Name des Kindes/Jugendlichen", "_______________"],
        ["Geburtsdatum", "_______________"],
        ["Adresse", "_______________"],
        ["Schule / Klasse", "_______________"],
        ["---", "---"],
        ["Name(n) der Sorgeberechtigten", "_______________"],
        ["Adresse der Sorgeberechtigten", "_______________"],
        ["Telefon der Sorgeberechtigten", "_______________"],
        ["---", "---"],
        ["Art der Gefaehrdung / des Verdachts",
         "_______________"],
        ["Konkrete Beobachtungen (was, wann, wie oft)",
         "_______________"],
        ["Seit wann bestehen die Beobachtungen?",
         "_______________"],
        ["Gibt es koerperliche Anzeichen?",
         "_______________"],
        ["Aeusserungen des Kindes",
         "_______________"],
        ["---", "---"],
        ["Bisherige Massnahmen und Gespraeche",
         "_______________"],
        ["Sind die Eltern informiert?",
         "Ja / Nein - Begruendung: _______________"],
        ["Dringlichkeit",
         "Akut / Dringend (innerhalb 48h) / Mittelfristig"],
        ["Weitere beteiligte Stellen",
         "_______________"]
    ])

    # =====================================================================
    # ARBEITSBLATT 23: SDQ-AUSWERTUNGSHILFE
    # =====================================================================
    doc.add_heading('Arbeitsblatt 23: SDQ-Auswertungshilfe', level=3)

    doc.add_paragraph(
        "Zweck: Schnelle Auswertung und Interpretation des Strengths and Difficulties "
        "Questionnaire (SDQ). Siehe Kapitel 7.1 fuer ausfuehrliche Erlaeuterungen.")

    doc.add_paragraph(
        "Kind/Jugendliche/r (Code): _______________  "
        "Alter: _______________  "
        "Ausgefuellt von: Eltern / Lehrer / Selbst  "
        "Datum: _______________")

    doc.add_paragraph("Auswertungstabelle:")
    add_table(doc,
        ["Skala", "Items (Nummern)", "Rohwert\n(0-10)", "Normal\n(N)",
         "Grenzwertig\n(G)", "Auffaellig\n(A)"],
        [
            ["Emotionale Probleme",
             "3, 8, 13, 16, 24",
             "___", "0-3", "4", "5-10"],
            ["Verhaltensprobleme",
             "5, 7, 12, 18, 22",
             "___", "0-2", "3", "4-10"],
            ["Hyperaktivitaet",
             "2, 10, 15, 21, 25",
             "___", "0-5", "6", "7-10"],
            ["Probleme mit Gleichaltrigen",
             "6, 11, 14, 19, 23",
             "___", "0-2", "3", "4-10"],
            ["Prosoziales Verhalten",
             "1, 4, 9, 17, 20",
             "___", "6-10", "5", "0-4"],
            ["GESAMTPROBLEMWERT\n(ohne Prosozial)",
             "Summe der 4 Problemskalen",
             "___", "0-13", "14-16", "17-40"]
        ])

    doc.add_paragraph("Ergebnis:")
    add_checklist(doc, [
        "Gesamtproblemwert: ___ - Bewertung: Normal / Grenzwertig / Auffaellig",
        "Auffaelligste Skala: _______________",
        "Prosoziales Verhalten: ___ - Bewertung: Normal / Grenzwertig / Auffaellig",
        "Uebereinstimmung Selbst-/Fremdeinschaetzung: Ja / Nein",
        "Empfohlene Massnahme: _______________"
    ])

    add_tip_box(doc,
        "Der SDQ ist ein Screening-Instrument, keine Diagnose! Auffaellige Werte "
        "sollten immer durch vertiefende Diagnostik und klinische Einschaetzung "
        "ergaenzt werden. Nutzen Sie mehrere Informationsquellen (Eltern, Lehrer, "
        "Selbstbericht) fuer ein vollstaendiges Bild.")

    # =====================================================================
    # ARBEITSBLATT 24: SCHULKRISENPLAN
    # =====================================================================
    doc.add_heading('Arbeitsblatt 24: Schulkrisenplan', level=3)

    doc.add_paragraph(
        "Zweck: Vorlage fuer einen schulinternen Krisenplan, der im Ernstfall "
        "schnell zur Hand ist. Sollte jaehrlich aktualisiert und allen relevanten "
        "Personen bekannt sein.")

    doc.add_paragraph("TEIL A: Kontaktliste Krisenstab")
    add_table(doc, ["Rolle", "Name", "Telefon", "Stellvertretung"], [
        ["Schulleitung", "_______________", "_______________", "_______________"],
        ["Psychologe/in CDSE", "_______________", "_______________", "_______________"],
        ["Vertrauenslehrer/in", "_______________", "_______________", "_______________"],
        ["Schulsozialarbeiter/in", "_______________", "_______________", "_______________"],
        ["Ersthelfer/in", "_______________", "_______________", "_______________"],
        ["Sekretariat", "_______________", "_______________", "_______________"]
    ])

    doc.add_paragraph("TEIL B: Externe Notfallnummern")
    add_table(doc, ["Dienst", "Telefonnummer"], [
        ["Polizei", "113"],
        ["Notruf / Rettungsdienst", "112"],
        ["SOS Detresse", "45 45 45"],
        ["Kanner-Jugendtelefon", "116 111"],
        ["ONE (Kinderschutz)", "247-73100"],
        ["Giftnotruf", "8002-5500"],
        ["CUMP (Cellule d'urgence medico-psychologique)", "_______________"]
    ])

    doc.add_paragraph("TEIL C: Kommunikationskette")
    add_numbered_list(doc, [
        "Erstentdecker/in informiert sofort die Schulleitung",
        "Schulleitung informiert den Krisenstab",
        "Krisenstab entscheidet ueber externe Hilfe (Polizei, Rettungsdienst)",
        "Schulleitung informiert das Ministerium (bei schweren Vorfaellen)",
        "Schulleitung oder benannte Person informiert die Eltern",
        "Krisenstab koordiniert die Information an das Kollegium",
        "Benannte Person kommuniziert mit der Presse (nur ueber Schulleitung!)",
        "Krisenstab plant Nachsorge-Massnahmen"
    ])

    doc.add_paragraph("TEIL D: Sofortmassnahmen nach Krisentyp")
    add_table(doc, ["Krisentyp", "Sofortmassnahmen", "Zustaendig"], [
        ["Suizidversuch / -drohung",
         "Person nicht allein lassen, 112 rufen, "
         "Eltern informieren, sichere Umgebung schaffen",
         "_______________"],
        ["Gewalt / Bedrohung",
         "Personen trennen, 113 rufen, "
         "Verletzte versorgen, Zeugen befragen",
         "_______________"],
        ["Todesfall (Schueler oder Lehrkraft)",
         "Informationskette aktivieren, "
         "Klasse informieren (mit Unterstuetzung), "
         "Trauerraum einrichten",
         "_______________"],
        ["Amoklauf / Bedrohungslage",
         "Alarm ausloesen, Raeume verriegeln, "
         "113 rufen, Anweisungen der Polizei folgen",
         "_______________"],
        ["Schwerer Unfall",
         "Erste Hilfe leisten, 112 rufen, "
         "Unfallstelle sichern, Eltern informieren",
         "_______________"]
    ])

    doc.add_paragraph("TEIL E: Nachsorge")
    add_checklist(doc, [
        "Debriefing des Krisenstabs innerhalb von 24 Stunden",
        "Psychologische Erstversorgung fuer betroffene Schueler und Lehrkraefte",
        "Information an alle Eltern (schriftlich, sachlich, mit Hilfsangeboten)",
        "Klassenbesprechungen mit psychologischer Unterstuetzung",
        "Individuelle Gespraeche fuer besonders Betroffene anbieten",
        "Langfristige Nachsorge planen (Wochen und Monate danach)",
        "Evaluation: Was hat funktioniert, was muss verbessert werden?",
        "Krisenplan aktualisieren"
    ])

    doc.add_paragraph(
        "Letzte Aktualisierung: _______________  "
        "Naechste geplante Ueberpruefung: _______________")

    # =====================================================================
    # ARBEITSBLATT 25: ELTERNBRIEF-VORLAGEN
    # =====================================================================
    doc.add_heading('Arbeitsblatt 25: Elternbrief-Vorlagen', level=3)

    doc.add_paragraph(
        "Zweck: Drei Muster-Elternbriefe fuer verschiedene Anlaesse. "
        "Passen Sie die Texte an Ihre konkrete Situation an. "
        "Beachten Sie die Mehrsprachigkeit in Luxemburg - bei Bedarf "
        "koennen die Briefe auch auf Franzoesisch oder Portugiesisch verfasst werden.")

    doc.add_paragraph(
        "VORLAGE A: Allgemeine Information ueber das Beratungsangebot")
    add_praxisbox(doc, "ELTERNBRIEF A: Allgemeine Information",
        "Sehr geehrte Eltern,\n\n"
        "im Rahmen des CDSE (Centre de Developpement Socio-Emotionnel) "
        "bieten wir an der Schule Ihres Kindes psychologische Beratung an. "
        "Dieses Angebot ist kostenlos und vertraulich.\n\n"
        "Unser Angebot umfasst:\n"
        "- Einzelgespraeche fuer Schueler/innen bei persoenlichen Schwierigkeiten\n"
        "- Beratung fuer Eltern bei Erziehungsfragen\n"
        "- Unterstuetzung bei schulischen Herausforderungen\n"
        "- Krisenintervention bei akuten Belastungen\n\n"
        "Ihr Kind kann sich jederzeit direkt an uns wenden. "
        "Auch Sie als Eltern koennen uns kontaktieren.\n\n"
        "Kontakt: [Name], Psychologe/in CDSE\n"
        "Telefon: [Nummer]\n"
        "E-Mail: [Adresse]\n"
        "Sprechzeiten: [Zeiten]\n\n"
        "Mit freundlichen Gruessen,\n"
        "[Name, Funktion]")

    doc.add_paragraph(
        "VORLAGE B: Besorgnis und Einladung zum Gespraech")
    add_praxisbox(doc, "ELTERNBRIEF B: Besorgnis",
        "Sehr geehrte Eltern von [Name],\n\n"
        "ich wende mich an Sie, weil mir bei Ihrem Kind [Name] "
        "einige Dinge aufgefallen sind, die ich gerne mit Ihnen besprechen moechte. "
        "Es geht dabei um [allgemeine Beschreibung, z.B. Veraenderungen im "
        "Verhalten / Rueckzug / schulische Schwierigkeiten].\n\n"
        "Ich moechte betonen, dass es mir darum geht, gemeinsam mit Ihnen "
        "nach Wegen zu suchen, wie wir [Name] bestmoeglich unterstuetzen koennen. "
        "Ihre Sichtweise als Eltern ist dabei sehr wichtig.\n\n"
        "Ich lade Sie herzlich ein zu einem persoenlichen Gespraech:\n"
        "Terminvorschlag: [Datum, Uhrzeit]\n"
        "Ort: [Raum]\n"
        "Dauer: ca. 30-45 Minuten\n\n"
        "Falls dieser Termin nicht passt, kontaktieren Sie mich bitte "
        "unter [Telefon / E-Mail], damit wir einen passenden Termin finden.\n\n"
        "Mit freundlichen Gruessen,\n"
        "[Name, Funktion]")

    doc.add_paragraph(
        "VORLAGE C: Einladung zum Runden Tisch")
    add_praxisbox(doc, "ELTERNBRIEF C: Einladung Runder Tisch",
        "Sehr geehrte Eltern von [Name],\n\n"
        "um Ihr Kind [Name] optimal zu unterstuetzen, moechten wir Sie zu einem "
        "gemeinsamen Gespraech (Runder Tisch) einladen, an dem alle beteiligten "
        "Fachpersonen teilnehmen.\n\n"
        "Datum: [Datum]\n"
        "Uhrzeit: [Uhrzeit]\n"
        "Ort: [Raum]\n"
        "Voraussichtliche Dauer: ca. 60 Minuten\n\n"
        "Teilnehmer/innen: [Aufzaehlung, z.B. Klassenlehrer/in, "
        "Psychologe/in CDSE, Schulleitung, ggf. weitere Fachpersonen]\n\n"
        "Ziel des Gespraechs ist es, gemeinsam die aktuelle Situation zu besprechen, "
        "Staerken und Ressourcen von [Name] hervorzuheben und konkrete "
        "Unterstuetzungsmassnahmen zu vereinbaren.\n\n"
        "Ihre Anwesenheit und Ihre Perspektive sind uns sehr wichtig. "
        "Bitte geben Sie uns bis zum [Datum] Rueckmeldung, ob Sie teilnehmen koennen.\n\n"
        "Bei Fragen stehe ich Ihnen gerne zur Verfuegung.\n\n"
        "Mit freundlichen Gruessen,\n"
        "[Name, Funktion]\n"
        "[Kontaktdaten]")

    # =====================================================================
    # SCHLUSSWORT
    # =====================================================================
    doc.add_heading('Schlusswort', level=2)

    doc.add_paragraph(
        "Dieses Praxishandbuch versteht sich als lebendiges Dokument. Ergaenzen Sie es mit "
        "eigenen Erfahrungen, lokalen Anpassungen und neuen Erkenntnissen. Die Arbeit mit "
        "Jugendlichen mit sozio-emotionalen Schwierigkeiten ist herausfordernd und gleichzeitig "
        "eine der sinnvollsten Taetigkeiten, die es gibt. Jeder Jugendliche, dem Sie eine sichere "
        "Beziehung anbieten, dem Sie zuhoeren und den Sie ernst nehmen, traegt das in sich weiter - "
        "in seine Beziehungen, seine Familie, seine Zukunft.")

    doc.add_paragraph(
        "Vergessen Sie nie: Sie muessen nicht perfekt sein. Sie muessen nicht alles wissen. "
        "Sie muessen nur DA sein - verlaesslich, ehrlich und mit echtem Interesse. Das ist mehr, "
        "als viele Jugendliche jemals erfahren haben.")
