"""
Kapitel 7: Diagnostische Hilfsmittel
"""
from styles import (add_table, add_bullet_list, add_praxisbox, add_dialog,
                    add_redflag, add_important_box, add_tip_box, add_section_intro,
                    add_checklist, add_flowchart, add_numbered_list)


def add_chapter7(doc):
    """Kapitel 7: Diagnostische Hilfsmittel"""

    doc.add_heading('KAPITEL 7: DIAGNOSTISCHE HILFSMITTEL (KEINE DIAGNOSTIK, ABER SCREENING)', level=1)

    add_important_box(doc,
        "Sie stellen keine Diagnosen. Die in diesem Kapitel beschriebenen Instrumente sind "
        "SCREENING-TOOLS, die Ihnen helfen, Auffälligkeiten systematisch zu erfassen und zu "
        "dokumentieren. Sie ersetzen keine klinische Diagnostik. Die Ergebnisse dienen als "
        "Grundlage für Ihre Einschätzung, ob eine Überweisung sinnvoll ist.")

    # =====================================================================
    # 7.1 SCREENINGS
    # =====================================================================
    doc.add_heading('7.1 Screenings, die Sie verwenden dürfen', level=2)

    doc.add_heading('SDQ - Strengths and Difficulties Questionnaire', level=3)
    doc.add_paragraph(
        "Der SDQ (Goodman, 1997) ist eines der weltweit am häufigsten eingesetzten Screening-Instrumente "
        "für Kinder und Jugendliche (4-17 Jahre). Er ist frei verfügbar, in vielen Sprachen erhältlich "
        "(wichtig für Luxemburg!) und kann von Eltern, Lehrern UND Jugendlichen selbst ausgefüllt werden.")

    doc.add_paragraph("Der SDQ umfasst 25 Items in 5 Skalen:")
    add_table(doc,
        ["Skala", "Beispiel-Item", "Was wird erfasst", "Cut-off Normal/Grenzwertig/Auffällig"],
        [
            ["Emotionale Probleme",
             "Hat viele Ängste, fürchtet sich leicht",
             "Angst, Traurigkeit, Somatisierung, Sorgen, Unsicherheit",
             "0-3 / 4 / 5-10"],
            ["Verhaltensprobleme",
             "Hat oft Wutanfälle, ist aufbrausend",
             "Aggression, Regelbrüche, Lügen, Stehlen",
             "0-2 / 3 / 4-10"],
            ["Hyperaktivität/Unaufmerksamkeit",
             "Ständig zappelig",
             "Aufmerksamkeitsprobleme, Impulsivität, motorische Unruhe",
             "0-5 / 6 / 7-10"],
            ["Probleme mit Gleichaltrigen",
             "Wird von anderen gehänselt",
             "Soziale Isolation, Ablehnung, fehlende Freundschaften",
             "0-2 / 3 / 4-10"],
            ["Prosoziales Verhalten",
             "Hilfsbereit, wenn andere verletzt sind",
             "Empathie, Hilfsbereitschaft, Rücksichtnahme",
             "6-10 / 5 / 0-4 (umgekehrt!)"]
        ])

    doc.add_paragraph(
        "Gesamtproblemwert (Summe der 4 Problemskalen): Normal 0-13, Grenzwertig 14-16, Auffällig 17-40. "
        "Die Prosozial-Skala wird separat ausgewertet (niedriger = problematischer).")

    add_tip_box(doc,
        "Nutzen Sie den SDQ als Gesprächsgrundlage: Sagen Sie dem Jugendlichen z.B., dass sein "
        "Lehrer diesen Fragebogen ausgefüllt hat und Sie sehen, dass er denkt, der Jugendliche "
        "habe oft Wutanfälle - und fragen Sie, wie er das selbst sieht. "
        "Das macht die abstrakten Zahlen konkret und beziehungsorientiert.")

    doc.add_heading('PHQ-A - Patient Health Questionnaire (Adolescent)', level=3)
    doc.add_paragraph(
        "Der PHQ-A ist ein Screening-Instrument für Depression bei Jugendlichen. 9 Items, jeweils "
        "auf einer Skala von 0 (überhaupt nicht) bis 3 (fast jeden Tag).")
    add_table(doc,
        ["Gesamtpunktzahl", "Schweregrad", "Empfohlene Maßnahme"],
        [
            ["0-4", "Minimal/keine Depression",
             "Beobachtung, supportive Begleitung"],
            ["5-9", "Milde Depression",
             "Beratung, Psychoedukation, Verlaufskontrolle nach 4 Wochen"],
            ["10-14", "Moderate Depression",
             "Therapeutische Anbindung empfehlen, engere Begleitung"],
            ["15-19", "Moderat schwere Depression",
             "Dringende Überweisung an Therapeuten/Psychiater"],
            ["20-27", "Schwere Depression",
             "Akute Überweisung. Suizidalitäts-Screening durchführen!"]
        ])

    add_redflag(doc,
        "Item 9 des PHQ fragt nach Suizidalität: Gedanken, dass man lieber tot wäre "
        "oder sich Leid zufügen möchte. Jeder Wert > 0 auf diesem Item erfordert ein direktes "
        "Gespräch über Suizidalität.")

    doc.add_heading('GAD-7 - Generalized Anxiety Disorder Scale', level=3)
    doc.add_paragraph(
        "7 Items, Skala 0-3. Gesamtpunktzahl: 0-4 minimal, 5-9 mild, 10-14 moderat, 15-21 schwer.")

    doc.add_heading('SBQ-R - Suicidal Behaviors Questionnaire Revised', level=3)
    doc.add_paragraph(
        "4 Items zum Thema Suizidalität. Cut-off für Jugendliche: >= 7 Punkte = erhöhtes Risiko. "
        "WICHTIG: Niemals als einziges Instrument verwenden. IMMER mit klinischem Gespräch kombinieren.")

    # =====================================================================
    # 7.2 VERHALTENSBEOBACHTUNG
    # =====================================================================
    doc.add_heading('7.2 Verhaltensbeobachtung', level=2)

    doc.add_heading('ABC-Analyse', level=3)
    doc.add_paragraph(
        "Die ABC-Analyse (Antecedent - Behavior - Consequence) ist ein fundamentales Werkzeug "
        "der Verhaltensanalyse. Sie hilft, Verhalten im Kontext zu verstehen.")

    add_praxisbox(doc, "ABC-Analyse: Fallbeispiel Marco (14)",
        "ANTECEDENT (Auslöser): Marco wird vom Lehrer gebeten, seine Hausaufgabe vorzulesen.\n\n"
        "BEHAVIOR (Verhalten): Marco wirft sein Heft auf den Boden, schreit einen Kraftausdruck und "
        "stürmt aus dem Klassenzimmer.\n\n"
        "CONSEQUENCE (Konsequenz): Marco muss nicht vorlesen (negative Verstärkung - das unangenehme "
        "Erlebnis wird beendet). Er bekommt Aufmerksamkeit von der Klasse. Er wird zum Direktor geschickt "
        "(was für ihn WENIGER aversiv sein könnte als die Scham, schlecht vorzulesen).\n\n"
        "INTERPRETATION: Marcos Verhalten ist FUNKTIONAL - es löst kurzfristig sein Problem "
        "(Vermeidung von Scham/Versagen). Intervention: Nicht das Verhalten bestrafen, sondern die "
        "Ursache adressieren (Leseschwäche? Versagensangst? Scham? Trauma?)")

    doc.add_heading('ABC-Analyse-Bogen', level=3)
    add_table(doc,
        ["Datum/Zeit", "Antecedent (Was geschah vorher?)", "Behavior (Was tat der Jugendliche genau?)",
         "Consequence (Was geschah danach?)", "Hypothese (Vermutete Funktion)"],
        [
            ["___ / ___", "___", "___", "___", "___"],
            ["___ / ___", "___", "___", "___", "___"],
            ["___ / ___", "___", "___", "___", "___"],
            ["___ / ___", "___", "___", "___", "___"],
            ["___ / ___", "___", "___", "___", "___"]
        ])

    # =====================================================================
    # 7.3 GENOGRAMM UND NETZWERKKARTE
    # =====================================================================
    doc.add_heading('7.3 Genogramm und Netzwerkkarte', level=2)

    doc.add_heading('Genogramm-Symbole', level=3)
    add_table(doc,
        ["Symbol", "Bedeutung"],
        [
            ["Quadrat", "Männlich"],
            ["Kreis", "Weiblich"],
            ["Raute", "Divers / unbekannt"],
            ["X durch Symbol", "Verstorben"],
            ["= (Doppellinie)", "Ehe / feste Partnerschaft"],
            ["--- (gestrichelt)", "Getrennt"],
            ["/  (einfacher Schrägstrich)", "Geschieden"],
            ["Wellenlinie", "Enge emotionale Bindung"],
            ["Zickzack", "Konflikthaftes Verhältnis"],
            ["Pfeil", "Richtung der Abhängigkeit"],
            ["Schraffiert", "Indexpatient (der Jugendliche, um den es geht)"],
            ["Ausgefüllter Kreis/Quadrat", "Psychische Erkrankung"],
            ["Flasche-Symbol", "Suchterkrankung"]
        ])

    doc.add_heading('Genogramm erstellen - Schritt für Schritt', level=3)
    add_numbered_list(doc, [
        "EINFÜHRUNG: Sagen Sie dem Jugendlichen, dass Sie gerne verstehen möchten, wer alles "
        "zu seiner Familie gehört, und schlagen Sie vor, das zusammen aufzumalen. "
        "(Großes Papier, Stifte bereitlegen)",
        "KERNFAMILIE: Fragen Sie, wer bei dem Jugendlichen zuhause lebt. "
        "(Eltern, Geschwister zeichnen)",
        "ERWEITERTE FAMILIE: Fragen Sie, wer noch zur Familie gehört. "
        "(Großeltern, Onkel, Tanten)",
        "BEZIEHUNGEN: Fragen Sie, wie er/sie sich mit den einzelnen Personen versteht - "
        "gut oder schwierig? (Linien einzeichnen)",
        "BESONDERHEITEN: Fragen Sie behutsam, ob jemand in der Familie gesundheitliche "
        "Probleme hat oder ob jemand gestorben ist. (Nur wenn der Jugendliche offen ist)",
        "RESSOURCEN: Fragen Sie, wer in der Familie besonders wichtig für den Jugendlichen ist. "
        "(Dick markieren)",
        "ZUSAMMENFASSUNG: Gemeinsam auf das Bild schauen. Fragen Sie, was dem Jugendlichen "
        "auffällt und wie es ist, das zu sehen."
    ])

    doc.add_heading('Netzwerkkarte', level=3)
    doc.add_paragraph(
        "Die Netzwerkkarte visualisiert die sozialen Ressourcen des Jugendlichen in konzentrischen Kreisen:")
    add_bullet_list(doc, [
        "INNERSTER KREIS (engste Vertrauenspersonen): Wer steht dir am nächsten?",
        "ZWEITER KREIS (wichtige Personen): Freunde, Familie, Lehrer, die wichtig sind",
        "DRITTER KREIS (Bekannte, lockere Kontakte): Trainer, Nachbarn, Online-Freunde",
        "ÄUSSERER KREIS (professionelle Helfer): Berater, Therapeut, Arzt"
    ])
    doc.add_paragraph(
        "Anleitung: Zeichnen Sie vier konzentrische Kreise auf ein großes Blatt. Der Jugendliche "
        "steht in der Mitte. Fragen Sie, wer in welchen Kreis gehört. Schreiben Sie die Namen "
        "hinein. Fragen Sie nach, ob jemand fehlt, ob es jemanden gibt, den der Jugendliche "
        "gerne näher hätte, oder ob jemand zu nah ist.")

    add_tip_box(doc,
        "Die Netzwerkkarte ist gleichzeitig Diagnostik und Intervention: Oft wird dem Jugendlichen "
        "erst beim Erstellen bewusst, dass er doch Menschen hat, an die er sich wenden kann - "
        "oder dass sein Netzwerk erschreckend dünn ist.")
