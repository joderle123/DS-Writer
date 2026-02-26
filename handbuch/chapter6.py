"""
Kapitel 6: Krisen und Notfaelle
"""
from styles import (add_table, add_bullet_list, add_praxisbox, add_dialog,
                    add_redflag, add_important_box, add_tip_box, add_section_intro,
                    add_checklist, add_flowchart, add_numbered_list)


def add_chapter6(doc):
    """Kapitel 6: Krisen und Notfaelle"""

    doc.add_heading('KAPITEL 6: KRISEN UND NOTFAELLE', level=1)

    add_section_intro(doc,
        "Krisen gehoeren zur Arbeit mit Jugendlichen. Dieses Kapitel gibt Ihnen Handlungssicherheit "
        "fuer die Momente, in denen schnell, klar und richtig gehandelt werden muss. Lesen Sie dieses "
        "Kapitel, BEVOR Sie es brauchen - nicht wenn die Krise bereits da ist. "
        "Jede Krise ist auch eine Chance: Wer in der Krise gut begleitet wird, entwickelt "
        "Vertrauen in professionelle Hilfe und in die eigene Widerstandskraft.")

    # =====================================================================
    # 6.1 KRISENINTERVENTION - ALLGEMEINES MODELL
    # =====================================================================
    doc.add_heading('6.1 Krisenintervention - Allgemeines Modell', level=2)

    doc.add_paragraph(
        "Krisenintervention folgt einem strukturierten Vorgehen. Die folgenden Modelle "
        "geben Ihnen einen Rahmen, der auch unter Stress funktioniert. Verinnerlichen Sie "
        "diese Schritte, damit sie in der akuten Situation abrufbar sind.")

    doc.add_heading('SAFER-R Modell fuer Krisenintervention', level=3)

    add_table(doc,
        ["Phase", "Bedeutung", "Handlungen", "Beispielsaetze"],
        [
            ["S", "Stabilize\n(Stabilisieren)",
             "Physische und emotionale Sicherheit herstellen. "
             "Ruhigen Raum aufsuchen. Reize reduzieren. "
             "Grundbeduerfnisse sicherstellen (Wasser, Sitzplatz).",
             "\"Komm, wir gehen hier raus, wo es ruhiger ist.\" / "
             "\"Du bist jetzt sicher. Ich bin bei dir.\""],
            ["A", "Acknowledge\n(Anerkennen)",
             "Die Krise benennen und validieren. "
             "Gefuehle des Betroffenen ernst nehmen. "
             "Nicht bagatellisieren oder rationalisieren.",
             "\"Ich sehe, dass es dir gerade wirklich schlecht geht.\" / "
             "\"Das ist eine ernste Situation, und es ist okay, dass du so reagierst.\""],
            ["F", "Facilitate Understanding\n(Verstaendnis foerdern)",
             "Psychoedukation: Normale Reaktionen auf unnormale Situationen erklaeren. "
             "Helfen, das Erlebte einzuordnen. Kontrolle zurueckgeben.",
             "\"Was du gerade erlebst, ist eine normale Reaktion auf eine unnormale Situation.\" / "
             "\"Viele Menschen reagieren so, wenn ihnen so etwas passiert.\""],
            ["E", "Encourage Coping\n(Bewaeltigung foerdern)",
             "Vorhandene Ressourcen aktivieren. "
             "Fruehere Bewaeltigungsstrategien erfragen. "
             "Gemeinsam ueberlegen, was jetzt helfen koennte.",
             "\"Was hat dir in der Vergangenheit geholfen, wenn es dir schlecht ging?\" / "
             "\"Was koennten wir jetzt tun, damit es dir etwas besser geht?\""],
            ["R", "Recovery\n(Erholung einleiten)",
             "Funktionieren wiederherstellen. Konkreten naechsten Schritt planen. "
             "Orientierung auf die nahe Zukunft geben. Selbstwirksamkeit staerken.",
             "\"Was ist das Erste, was du jetzt tun musst?\" / "
             "\"Lass uns zusammen ueberlegen, wie der Rest des Tages aussehen kann.\""],
            ["R", "Referral\n(Weiterverweisen)",
             "Bei Bedarf an spezialisierte Hilfe verweisen. "
             "Bruecke bauen, nicht einfach abschieben. "
             "Uebergabe aktiv gestalten und begleiten.",
             "\"Ich moechte dich an jemanden vermitteln, der dir noch besser helfen kann.\" / "
             "\"Ich begleite dich bei diesem Schritt und bleibe in Kontakt.\""]
        ])

    doc.add_heading('Psychologische Erste Hilfe (PFA) - 5 Kernelemente', level=3)

    doc.add_paragraph(
        "Psychologische Erste Hilfe (Psychological First Aid) ist ein evidenzbasierter "
        "Ansatz der WHO fuer die fruehe Unterstuetzung nach belastenden Ereignissen. "
        "Die fuenf Kernelemente:")

    add_numbered_list(doc, [
        "KONTAKT herstellen: Stellen Sie sich vor. Sprechen Sie ruhig, langsam und klar. "
        "\"Ich bin [Name], Psychologin am CDSE. Ich bin hier, um dir zu helfen.\" "
        "Begeben Sie sich auf Augenhoehe. Fragen Sie, ob Sie sich setzen duerfen.",
        "SICHERHEIT gewaehrleisten: Ist der Jugendliche physisch sicher? Besteht akute Gefahr? "
        "Suchen Sie einen ruhigen Ort auf. Sorgen Sie fuer Grundbeduerfnisse: Wasser, Waerme, "
        "Sitzgelegenheit. Informieren Sie ueber die aktuelle Situation, soweit bekannt.",
        "STABILISIERUNG: Wenden Sie Grounding-Techniken an, wenn der Jugendliche dissoziiert "
        "oder panisch ist. 5-4-3-2-1-Methode: \"Nenne mir 5 Dinge, die du siehst. 4 Dinge, "
        "die du hoerst. 3 Dinge, die du fuehlen kannst. 2 Dinge, die du riechst. 1 Ding, das "
        "du schmeckst.\" Atemuebung: \"Atme mit mir zusammen. Ein... zwei... drei... vier... "
        "und aus... zwei... drei... vier...\"",
        "INFORMATIONSSAMMLUNG: Was ist passiert? Was braucht der Jugendliche JETZT? "
        "Nicht interrogieren, sondern behutsam und offen fragen. "
        "\"Magst du mir erzaehlen, was passiert ist?\" Akzeptieren Sie, wenn der Jugendliche "
        "nicht sprechen moechte. Beobachten Sie nonverbale Signale.",
        "ANBINDUNG an Unterstuetzungssysteme: Wer sind die Bezugspersonen? Eltern, Freunde, "
        "Therapeuten? Leiten Sie an professionelle Hilfe weiter, wenn noetig. "
        "Stellen Sie sicher, dass der Jugendliche nicht allein nach Hause geht. "
        "Vereinbaren Sie einen Folgekontakt: \"Ich melde mich morgen bei dir.\""
    ])

    add_tip_box(doc,
        "Merksatz fuer PFA: SEHEN - HOEREN - VERBINDEN. Sehen Sie hin, was der Mensch "
        "braucht. Hoeren Sie zu, ohne zu urteilen. Verbinden Sie ihn mit Hilfe und "
        "Unterstuetzung.")

    doc.add_heading('Flowchart: Krisenintervention', level=3)

    add_flowchart(doc, [
        "Krise wird erkannt (durch Beobachtung, Disclosure oder Meldung Dritter)",
        ("Besteht unmittelbare Gefahr fuer Leib und Leben?",
         "SOFORT 112 anrufen. Jugendlichen NICHT allein lassen. Erste Hilfe leisten.",
         "Weiter mit Stabilisierung"),
        "Ruhigen, sicheren Raum aufsuchen. Reize minimieren.",
        "Stabilisierung: Grounding, Atmen, Beruhigen (SAFER-R: S und A)",
        ("Kann der Jugendliche kommunizieren und ist orientiert?",
         "Behutsam erkunden: Was ist passiert? Was braucht er/sie jetzt? (SAFER-R: F und E)",
         "Anwesenheit signalisieren, Sicherheit herstellen, abwarten. Bei Dissoziation: Grounding."),
        "Einschaetzung: Welche Art von Krise? Suizidalitaet? Gewalt? Missbrauch? Trauer?",
        ("Ist spezialisierte Hilfe erforderlich?",
         "Weiterleitung: CHL Notaufnahme, Police 113, SOS Detresse 45 45 45, ONE 247-73100",
         "Beratung fortsetzen. Bewaeltigung foerdern (SAFER-R: E und R)."),
        "Plan erstellen: Naechste Schritte, Anbindung, Sicherheitsplan, Follow-up-Termin",
        "Dokumentation (zeitnah, sachlich, woertliche Zitate des Jugendlichen)",
        "Selbstfuersorge: Nachbesprechung fuer SIE als Helfer. Supervision suchen."
    ])

    # =====================================================================
    # 6.2 AKUTE SUIZIDALITAET
    # =====================================================================
    doc.add_heading('6.2 Akute Suizidalitaet', level=2)

    add_redflag(doc,
        "Bei akuter Suizidalitaet gilt: HANDELN. Nicht abwarten, nicht allein "
        "entscheiden, nicht die Schweigepflicht ueber das Leben stellen. "
        "Die Schweigepflicht endet dort, wo Lebensgefahr beginnt.")

    doc.add_heading('Minute-fuer-Minute Handlungsplan', level=3)

    add_numbered_list(doc, [
        "MINUTE 0-2 - ERKENNEN UND RUHE BEWAHREN: "
        "Sie haben ein Signal erhalten (direkte Aeusserung, Hinweis Dritter, Verhaltensauffaelligkeit). "
        "Atmen Sie selbst durch. Ihre Ruhe ist die wichtigste Intervention. "
        "Zeigen Sie keine Panik, keinen Schock, keine Vorwuerfe.",
        "MINUTE 2-5 - KONTAKT UND SICHERHEIT: "
        "Stellen Sie Blickkontakt her (wenn kulturell angemessen). "
        "\"Ich bin froh, dass du mir das sagst. Das war mutig.\" "
        "Sorgen Sie dafuer, dass der Jugendliche nicht allein ist. "
        "Entfernen Sie zugaengliche gefaehrliche Gegenstaende (Scheren, Guertel, Medikamente).",
        "MINUTE 5-15 - EINSCHAETZUNG DER SUIZIDALITAET: "
        "Fragen Sie DIREKT. Direkte Fragen erhoehen das Risiko NICHT. "
        "\"Denkst du daran, dir das Leben zu nehmen?\" "
        "\"Hast du einen konkreten Plan, wie du es tun wuerdest?\" "
        "\"Hast du Zugang zu Mitteln (Medikamente, Waffen, Hoehe)?\" "
        "\"Hast du dir einen Zeitpunkt ueberlegt?\" "
        "Je konkreter Plan, Mittel und Zeitpunkt, desto hoeher das akute Risiko.",
        "MINUTE 15-20 - SICHERUNG: "
        "Jugendlichen NICHT allein lassen - auch nicht auf der Toilette. "
        "Tuer nicht abschliessen. Gefaehrliche Gegenstaende entfernen. "
        "Kollegin/Kollegen informieren (kurze Nachricht genuegt). "
        "Schulleitung informieren.",
        "MINUTE 20-30 - HILFE ORGANISIEREN: "
        "Bei akuter Lebensgefahr (konkreter Plan, Mittel verfuegbar): 112 anrufen. "
        "Bei hohem Risiko: Psychiatrische Notaufnahme CHL (+352 4411-2148). "
        "Eltern/Sorgeberechtigte kontaktieren. "
        "Ueberlegen: Kann der Jugendliche sicher nach Hause? Wer begleitet ihn?",
        "MINUTE 30-45 - UEBERGABE UND SICHERHEITSPLAN: "
        "Wenn der Zustand es erlaubt: Sicherheitsplan erstellen (siehe unten). "
        "Notfallnummern uebergeben (SOS Detresse: 45 45 45, KJT: 116 111). "
        "Folgetermin vereinbaren: \"Ich moechte dich morgen wiedersehen.\" "
        "Klare Absprache: Wer begleitet den Jugendlichen jetzt?",
        "NACH DER AKUTPHASE - FOLLOW-UP: "
        "Am naechsten Tag Kontakt aufnehmen (Anruf oder persoenlich). "
        "Woechentliche Checks fuer mindestens 4 Wochen. "
        "Dokumentation: Zeitnah, sachlich, mit woertlichen Zitaten. "
        "Eigene Supervision suchen - Suizidalitaet belastet auch Helfer."
    ])

    doc.add_heading('Risikoeinschaetzung: Vier Stufen', level=3)

    add_table(doc,
        ["Risikostufe", "Indikatoren", "Massnahmen"],
        [
            ["NIEDRIG\n(Passive Gedanken)",
             "Aeusserungen wie: \"Manchmal waere es einfacher, nicht da zu sein.\" "
             "Kein konkreter Plan. Keine Vorbereitung. Distanzierung moeglich. "
             "Schutzfaktoren vorhanden (Beziehungen, Zukunftsplaene).",
             "Gespraech vertiefen. Ressourcen staerken. Therapeutische Anbindung empfehlen. "
             "Folgetermin vereinbaren. Eltern informieren (mit Zustimmung). "
             "Dokumentieren."],
            ["MITTEL\n(Aktive Gedanken, kein Plan)",
             "Aeusserungen wie: \"Ich will nicht mehr leben.\" "
             "Gedanken an Suizid, aber kein konkreter Plan. Ambivalenz vorhanden. "
             "Einige Schutzfaktoren noch wirksam. Moegliche Risikofaktoren: "
             "frueherer Versuch, psychische Erkrankung, Isolation.",
             "Sicherheitsplan erstellen. Therapeutische Anbindung dringend empfehlen. "
             "Eltern informieren. Zugang zu Mitteln einschraenken (Eltern einbeziehen). "
             "Engmaschige Kontakte (alle 2-3 Tage). Notfallnummern uebergeben."],
            ["HOCH\n(Konkreter Plan vorhanden)",
             "Konkreter Plan vorhanden: Methode, Ort, Zeitpunkt benannt. "
             "Zugang zu Mitteln moeglich. Wenige Schutzfaktoren. "
             "Moegliche Vorbereitungen: Abschiedsbriefe, Verschenken von Besitzttuemern. "
             "Frueherer Suizidversuch. Starke Hoffnungslosigkeit.",
             "SOFORT handeln. Jugendlichen nicht allein lassen. "
             "Eltern und Schulleitung informieren. Psychiatrische Notaufnahme CHL kontaktieren. "
             "Begleitung zur Notaufnahme organisieren. "
             "Sicherheitsplan nur als Ueberbrueckung bis zur professionellen Uebernahme."],
            ["AKUT\n(Unmittelbare Gefahr)",
             "Jugendlicher hat Suizidmittel bei sich oder hat bereits einen Versuch unternommen. "
             "Akute Intoxikation oder Selbstverletzung. Nicht absprache- oder buendnisfaehig. "
             "Vollstaendige Hoffnungslosigkeit. Abschied genommen.",
             "112 ANRUFEN. Jugendlichen NICHT allein lassen. "
             "Erste Hilfe leisten, wenn noetig. "
             "Schulleitung sofort informieren. "
             "Eltern sofort informieren. Dokumentation nach Akutphase."]
        ])

    doc.add_heading('Sicherheitsplan (nach Stanley und Brown)', level=3)

    doc.add_paragraph(
        "Der Sicherheitsplan ist ein konkretes, schriftliches Dokument, das der Jugendliche "
        "in suizidalen Krisen als Leitfaden nutzen kann. Er wird GEMEINSAM mit dem "
        "Jugendlichen erstellt und sollte auf einer Karte oder im Handy gespeichert werden.")

    add_numbered_list(doc, [
        "WARNZEICHEN ERKENNEN: \"Woran merkst du, dass es dir schlechter geht?\" "
        "Beispiele: Rueckzug, Schlafprobleme, bestimmte Gedanken, Reizbarkeit. "
        "Ziel: Der Jugendliche lernt, die Krise frueh zu erkennen.",
        "EIGENE BEWAELTIGUNGSSTRATEGIEN: \"Was kannst du selbst tun, ohne jemanden "
        "zu kontaktieren?\" Beispiele: Spaziergang, Musik hoeren, Sport, kaltes Wasser "
        "ueber die Haende laufen lassen, Eiswuerfel halten, Tagebuch schreiben. "
        "Ziel: Erste Selbsthilfe-Massnahmen.",
        "SOZIALE KONTAKTE ZUR ABLENKUNG: \"Mit wem kannst du Zeit verbringen oder "
        "telefonieren, um dich abzulenken?\" Namen und Nummern eintragen. "
        "Diese Personen muessen nicht ueber die Krise Bescheid wissen.",
        "PERSONEN, DIE HELFEN KOENNEN: \"Wen kannst du anrufen und sagen: Es geht "
        "mir schlecht, ich brauche Hilfe?\" Namen und Nummern eintragen. "
        "Mindestens 2-3 Vertrauenspersonen. Auch professionelle Kontakte: "
        "Therapeut, Psychologe CDSE, Hausarzt.",
        "PROFESSIONELLE NOTFALLKONTAKTE: SOS Detresse: 45 45 45 (24/7). "
        "Kanner-Jugendtelefon: 116 111. CHL Notaufnahme: +352 4411-2148. "
        "Europaeischer Notruf: 112.",
        "UMGEBUNG SICHER MACHEN: \"Was muessen wir tun, damit du keinen Zugang zu "
        "gefaehrlichen Mitteln hast?\" Medikamente wegsperren (Eltern einbeziehen). "
        "Scharfe Gegenstaende entfernen. Zugang zu gefaehrlichen Orten einschraenken. "
        "Alkohol und Drogen vermeiden (senken die Hemmschwelle)."
    ])

    add_important_box(doc,
        "DOKUMENTATION BEI SUIZIDALITAET: Jedes Gespraech ueber Suizidalitaet MUSS "
        "dokumentiert werden. Dokumentieren Sie: (1) Woertliche Aeusserungen des "
        "Jugendlichen, (2) Ihre Einschaetzung des Risikos, (3) Ergriffene Massnahmen, "
        "(4) Informierte Personen (Eltern, Schulleitung, Notdienst), (5) Vereinbarungen "
        "und Folgetermine. Diese Dokumentation schuetzt den Jugendlichen UND Sie. "
        "Bewahren Sie sie sicher und vertraulich auf.")

    doc.add_heading('Dialogskript: Suizidalitaet ansprechen', level=3)

    add_dialog(doc, [
        ("Psychologe",
         "(ruhig, warmherzig) Ich habe mir in letzter Zeit Sorgen um dich gemacht. "
         "Du wirkst sehr belastet. Ich moechte dich etwas Schwieriges fragen, und ich "
         "bitte dich, ehrlich zu antworten."),
        ("Jugendlicher", "(leise) Okay..."),
        ("Psychologe",
         "Hast du in letzter Zeit daran gedacht, dass es besser waere, nicht mehr "
         "da zu sein?"),
        ("Jugendlicher",
         "(nickt, schaut weg) Manchmal... manchmal denke ich, es waere fuer alle "
         "einfacher ohne mich."),
        ("Psychologe",
         "Danke, dass du ehrlich bist. Das ist wichtig und mutig. Ich nehme das sehr "
         "ernst. Darf ich dich noch etwas mehr fragen?"),
        ("Jugendlicher", "Ja..."),
        ("Psychologe",
         "Denkst du manchmal daran, dir selbst etwas anzutun? Hast du Gedanken daran, "
         "dir das Leben zu nehmen?"),
        ("Jugendlicher",
         "(weint) Ja. Aber ich wuerde es nicht tun... glaube ich."),
        ("Psychologe",
         "Ich hoere dich. Und ich bin froh, dass du es mir sagst. Hast du dir ueberlegt, "
         "wie du es tun wuerdest? Einen konkreten Plan?"),
        ("Jugendlicher", "Nein... nicht wirklich. Ich will eigentlich nicht sterben. "
         "Ich will nur, dass der Schmerz aufhoert."),
        ("Psychologe",
         "Das verstehe ich. Du willst nicht sterben - du willst, dass es aufhoert, "
         "so wehzutun. Und genau daran koennen wir arbeiten. Du musst das nicht allein "
         "durchstehen. Lass uns zusammen ueberlegen, was dir jetzt helfen kann.")
    ])

    add_tip_box(doc,
        "Die Frage nach Suizidalitaet erhoehen das Risiko NICHT. Im Gegenteil: "
        "Jugendliche sind oft erleichtert, wenn jemand direkt fragt. Vermeiden Sie "
        "Umschreibungen wie \"etwas Dummes tun\". Fragen Sie klar und direkt.")

    # =====================================================================
    # 6.3 AKUTE AGGRESSION / GEWALT
    # =====================================================================
    doc.add_heading('6.3 Akute Aggression / Gewalt', level=2)

    doc.add_paragraph(
        "Aggressive Eskalationen gehoeren zu den belastendsten Situationen im Schulalltag. "
        "De-Eskalation ist eine erlernbare Faehigkeit. Das Wichtigste: Ihre eigene "
        "Sicherheit hat immer Prioritaet.")

    doc.add_heading('De-Eskalation in 10 Schritten', level=3)

    add_numbered_list(doc, [
        "EIGENE SICHERHEIT ZUERST: Fluchtweg sicherstellen. Tuer offen lassen. "
        "Keine Hindernisse zwischen sich und dem Ausgang. Schluessel, Handy griffbereit.",
        "ABSTAND WAHREN: Mindestens 1,5 Meter. Nicht bedraengen, nicht anfassen. "
        "Armlange ist zu nah. Respektieren Sie den persoenlichen Raum.",
        "SEITLICHE POSITION: Nie frontal gegenueber stehen. Leicht seitlich stehen "
        "reduziert die wahrgenommene Bedrohung und Konfrontation.",
        "HAENDE SICHTBAR: Offene Handflaechen zeigen. Keine verschraenkten Arme. "
        "Keine Haende in den Taschen. Keine hektischen Bewegungen.",
        "STIMME SENKEN: Leise, langsam, tief sprechen. Je lauter der Jugendliche, "
        "desto ruhiger Sie. Ihre Stimme ist das wichtigste De-Eskalationswerkzeug.",
        "VALIDIEREN: \"Ich sehe, dass du richtig wuetend bist. Du hast ein Recht "
        "auf deine Wut.\" Validierung bedeutet NICHT, dass Sie das Verhalten gutheissen. "
        "Sie erkennen das Gefuehl an, nicht die Handlung.",
        "NICHT ARGUMENTIEREN: Keine Logik, keine Moral, keine Konsequenzen-Drohungen. "
        "Das funktioniert NICHT bei akuter Aggression. Der praerontale Kortex ist "
        "offline - rationale Argumente erreichen den Jugendlichen nicht.",
        "WAHLMOEGLICHKEITEN GEBEN: \"Moechtest du kurz rausgehen oder hier bleiben "
        "und ein Glas Wasser trinken?\" Zwei Optionen, beide akzeptabel. Das gibt "
        "Kontrolle zurueck und reduziert das Gefuehl der Machtlosigkeit.",
        "ZEIT GEBEN: \"Nimm dir eine Minute. Ich warte hier.\" "
        "Adrenalin braucht mindestens 20 Minuten zum Abbauen. Nicht draengen. "
        "Stille aushalten. Manchmal ist Schweigen die beste Intervention.",
        "HILFE HOLEN WENN NOETIG: Wenn die Situation eskaliert - Kollegin informieren. "
        "Bei koerperlicher Gewalt: 113 (Polizei). Sie sind kein Sicherheitsdienst. "
        "Es ist keine Schwaeche, Hilfe zu rufen."
    ])

    doc.add_heading('Was funktioniert vs. was nicht funktioniert', level=3)

    add_table(doc,
        ["Was FUNKTIONIERT", "Was NICHT funktioniert"],
        [
            ["Ruhige, tiefe Stimme",
             "Lauter werden, schreien, drohen"],
            ["Validieren: \"Ich sehe deine Wut\"",
             "Bagatellisieren: \"Stell dich nicht so an\""],
            ["Wahlmoeglichkeiten geben",
             "Befehle erteilen oder Ultimaten stellen"],
            ["Abstand wahren, offene Koerpersprache",
             "Anfassen, festhalten, bedraengen"],
            ["Zeit geben, Stille aushalten",
             "Sofortige Loesung oder Entschuldigung fordern"],
            ["Seitlich stehen, Blickkontakt dosieren",
             "Frontal stehen, starrer Blickkontakt"],
            ["Name des Jugendlichen ruhig nennen",
             "\"Du musst jetzt sofort aufhoeren!\""],
            ["Eigene Grenze benennen: \"Ich moechte dir helfen, aber ich kann das nur, wenn du das Messer weglegst.\"",
             "Physisch eingreifen oder Gegenstaende entreissen"],
            ["Spaeter das Gespraech suchen, wenn alle ruhig sind",
             "Sofort Konsequenzen verhaengen waehrend der Eskalation"],
            ["Kollegin / Hilfe holen",
             "Heldenhaft allein handeln wollen"]
        ])

    add_redflag(doc,
        "SOFORT den Raum verlassen und 113 anrufen, wenn: "
        "(1) Der Jugendliche eine Waffe hat (Messer, Schere, Gegenstand). "
        "(2) Der Jugendliche Sie oder andere direkt koerperlich angreift. "
        "(3) Sie sich unsicher fuehlen. Ihre Sicherheit hat ABSOLUTE Prioritaet. "
        "Es ist keine Schwaeche, sich zurueckzuziehen. Es ist professionell.")

    add_important_box(doc,
        "NACH einer aggressiven Eskalation: (1) Eigene Gefuehle wahrnehmen und ernst nehmen. "
        "(2) Vorfall dokumentieren. (3) Nachbesprechung mit Kolleginnen und Schulleitung. "
        "(4) Gespraech mit dem Jugendlichen SPAETER (nicht am selben Tag) - was ist passiert? "
        "Was koennen wir naechstes Mal anders machen? (5) Supervision suchen.")

    # =====================================================================
    # 6.4 DISCLOSURE - SCHWERWIEGENDE ENTHUELLUNGEN
    # =====================================================================
    doc.add_heading('6.4 Disclosure - Schwerwiegende Enthuellungen', level=2)

    doc.add_paragraph(
        "Disclosure bezeichnet den Moment, in dem ein Jugendlicher Ihnen etwas "
        "Schwerwiegendes anvertraut: sexueller Missbrauch, koerperliche Gewalt, "
        "Vernachlaessigung, haeusliche Gewalt. Ihre Reaktion in diesem Moment "
        "ist entscheidend fuer das Vertrauen des Jugendlichen und den weiteren Verlauf.")

    doc.add_heading('Handlungsprotokoll bei Disclosure von sexuellem Missbrauch', level=3)

    add_numbered_list(doc, [
        "RUHIG BLEIBEN. Ihre Reaktion praegt, ob das Kind sich sicher fuehlt. "
        "Kein Schock, kein Weinen, keine Wut zeigen. Ihr Gesichtsausdruck muss "
        "Ruhe und Sicherheit vermitteln.",
        "GLAUBEN. \"Ich glaube dir.\" - Punkt. Kinder erfinden sexuellen Missbrauch "
        "extrem selten. Ihre erste Reaktion muss Glauben signalisieren.",
        "NICHT BEFRAGEN. Stellen Sie keine detaillierten Fragen. Keine W-Fragen (wann genau, "
        "wie oft, was genau). Das ist Aufgabe der Justiz und speziell geschulter Vernehmer. "
        "Jede Befragung kann Erinnerungen kontaminieren und den Gerichtsprozess gefaehrden.",
        "ZUHOEREN. Lassen Sie das Kind erzaehlen, was es erzaehlen moechte. "
        "Nicht unterbrechen. Nicht nachfragen. Nicht interpretieren.",
        "WORTWAHL BEACHTEN. Sagen Sie NICHT: \"Warum hast du nichts gesagt?\" "
        "Sagen Sie NICHT: \"Bist du sicher?\" Sagen Sie: \"Das, was dir passiert, "
        "ist nicht deine Schuld.\"",
        "EHRLICH SEIN ueber naechste Schritte. \"Ich muss mit Stellen sprechen, die "
        "dir helfen koennen. Aber ich begleite dich dabei.\" NICHT versprechen: "
        "\"Ich sage es niemandem\" - denn das koennen Sie nicht halten.",
        "DOKUMENTIEREN. Zeitnah aufschreiben, was der Jugendliche SPONTAN erzaehlt hat. "
        "Woertlich zitieren. Keine eigene Interpretation. Datum, Uhrzeit, Ort, "
        "Anwesende notieren.",
        "MELDEN. ONE (Office National de l'Enfance): 247-73100 und/oder Police: 113. "
        "Innerhalb von 24 Stunden. Im Zweifelsfall IMMER melden.",
        "NICHT den vermuteten Taeter konfrontieren. NICHT die Eltern informieren, "
        "wenn der Taeter im Haushalt lebt. Dies kann das Kind in Gefahr bringen "
        "und Beweise vernichten.",
        "SICHERHEIT pruefen. Kann das Kind nach Hause gehen? Wenn nicht: "
        "Notunterbringung ueber ONE. Der Jugendliche darf NICHT zum Taeter "
        "zurueck, bevor die Situation geklaert ist.",
        "BEGLEITUNG. Beim Kind bleiben, bis die naechsten Schritte klar sind. "
        "\"Ich bin hier. Du bist nicht allein.\"",
        "EIGENE SUPERVISION SUCHEN. Ein Disclosure von sexuellem Missbrauch "
        "ist auch fuer Sie als Helfer extrem belastend. Sie brauchen professionelle "
        "Unterstuetzung. Das ist keine Schwaeche."
    ])

    doc.add_heading('Dialogskript: Angemessene Reaktion bei Disclosure', level=3)

    add_dialog(doc, [
        ("Jugendliche",
         "(leise, zoegernd, vermeidet Blickkontakt) Ich... ich muss Ihnen was sagen. "
         "Aber Sie duerfen es niemandem sagen."),
        ("Psychologe",
         "(ruhig, warmherzig, offene Koerpersprache) Ich hoere dir zu. Ich kann dir "
         "nicht versprechen, dass ich alles fuer mich behalte, denn wenn du in Gefahr "
         "bist, muss ich dafuer sorgen, dass du sicher bist. Aber ich verspreche dir, "
         "dass ich dich auf jedem Schritt begleite."),
        ("Jugendliche",
         "(weint) Mein Stiefvater... er kommt nachts in mein Zimmer... er fasst "
         "mich an..."),
        ("Psychologe",
         "(ruhig, nicht erschrocken) Danke, dass du mir das erzaehlst. Das war sehr "
         "mutig von dir. Ich glaube dir. Was dir passiert, ist nicht deine Schuld. "
         "Das muss ich ganz klar sagen: Du hast nichts falsch gemacht."),
        ("Jugendliche", "Bitte sagen Sie es nicht meiner Mama! Sie wird mir nicht "
         "glauben. Und er wird wuetend..."),
        ("Psychologe",
         "Ich verstehe, dass du Angst hast. Diese Angst ist verstaendlich. "
         "Was du mir erzaehlst, ist so ernst, dass ich dafuer sorgen muss, dass "
         "du sicher bist. Das bedeutet, dass ich mit bestimmten Stellen sprechen "
         "muss, die dafuer ausgebildet sind, Kindern in deiner Situation zu helfen. "
         "Aber ich sage dir vorher genau, was passiert. Und ich bin die ganze Zeit "
         "bei dir."),
        ("Jugendliche", "Was passiert dann mit mir?"),
        ("Psychologe",
         "Es gibt Menschen, die genau dafuer ausgebildet sind, dir zu helfen. "
         "Die werden zunaechst mit dir sprechen und dafuer sorgen, dass du heute "
         "Abend an einem sicheren Ort bist. Ich bleibe jetzt bei dir und wir "
         "machen das zusammen. Du bist nicht allein.")
    ])

    doc.add_heading('ONE Meldungsvorlage / Checkliste', level=3)

    doc.add_paragraph(
        "Bei einer Meldung an das ONE (Office National de l'Enfance) sollten "
        "folgende Informationen bereitgestellt werden:")

    add_table(doc,
        ["Feld", "Inhalt / Hinweis"],
        [
            ["Datum der Meldung", "[Datum eintragen]"],
            ["Uhrzeit der Meldung", "[Uhrzeit eintragen]"],
            ["Name des meldenden Professionellen", "[Ihr Name]"],
            ["Funktion / Institution", "Psychologe / CDSE Luxembourg"],
            ["Telefon / E-Mail fuer Rueckfragen", "[Ihre Kontaktdaten]"],
            ["Name des betroffenen Kindes", "[Name des Kindes]"],
            ["Geburtsdatum des Kindes", "[Geburtsdatum]"],
            ["Adresse des Kindes", "[Aktuelle Adresse]"],
            ["Schule / Klasse", "[Schule und Klasse]"],
            ["Name(n) der Sorgeberechtigten", "[Namen eintragen]"],
            ["Name des vermuteten Taeters (falls bekannt)", "[Name, Beziehung zum Kind]"],
            ["Art der Gefaehrdung",
             "Sexueller Missbrauch / Koerperliche Gewalt / "
             "Vernachlaessigung / Psychische Gewalt / Sonstiges"],
            ["Beschreibung der Beobachtung / des Disclosures",
             "Sachlich beschreiben: Was wurde beobachtet? Was hat das Kind "
             "spontan erzaehlt? (Woertlich zitieren, keine Interpretation)"],
            ["Zeitraum der Beobachtung", "[Von - bis]"],
            ["Bereits ergriffene Massnahmen",
             "z.B. Gespraech mit dem Kind, Sicherheitseinschaetzung, "
             "Information an Schulleitung"],
            ["Einschaetzung der Dringlichkeit",
             "Akut (sofortige Gefahr) / Dringend (innerhalb 24h) / "
             "Mittelfristig (zeitnah, aber kein Notfall)"],
            ["Kann das Kind nach Hause gehen?",
             "Ja / Nein - Falls nein: Notunterbringung erforderlich"],
            ["Kontaktdaten fuer Rueckfragen", "[Telefon, E-Mail]"]
        ])

    add_checklist(doc, [
        "Meldung telefonisch an ONE (247-73100) UND schriftlich",
        "Dokumentation des Disclosures angefertigt (woertliche Zitate)",
        "Schulleitung informiert",
        "Sicherheit des Kindes eingeschaetzt",
        "Kind nicht zum vermuteten Taeter zurueckgeschickt",
        "Kind ueber naechste Schritte informiert",
        "Eigene Kontaktdaten an ONE uebermittelt",
        "Folgetermin mit dem Kind vereinbart",
        "Supervision/Nachbesprechung fuer sich selbst organisiert"
    ])

    doc.add_heading('Wichtig: Was tun und was lassen nach einem Disclosure', level=3)

    add_table(doc,
        ["TUN (Do)", "LASSEN (Don't)"],
        [
            ["Ruhig bleiben und zuhoeren",
             "Schock, Wut oder Traenen zeigen"],
            ["\"Ich glaube dir\" sagen",
             "\"Bist du sicher?\" oder \"Warum hast du nichts gesagt?\" fragen"],
            ["\"Das ist nicht deine Schuld\" sagen",
             "Suggestivfragen stellen oder Details erfragen"],
            ["Ehrlich sein ueber die naechsten Schritte",
             "\"Ich sage es niemandem\" versprechen"],
            ["Woertlich dokumentieren, was das Kind gesagt hat",
             "Eigene Interpretationen oder Bewertungen aufschreiben"],
            ["ONE und/oder Polizei melden (innerhalb 24h)",
             "Selbst ermitteln oder den Taeter konfrontieren"],
            ["Sicherheit des Kindes pruefen",
             "Kind zum vermuteten Taeter zurueckschicken"],
            ["Beim Kind bleiben, bis naechste Schritte klar sind",
             "Kind allein lassen oder an jemand anderen abschieben"],
            ["Professionelle Supervision fuer sich selbst suchen",
             "Allein damit fertig werden wollen"]
        ])

    add_important_box(doc,
        "RECHTLICHER HINWEIS: In Luxemburg besteht eine Meldepflicht bei "
        "Kindeswohlgefaehrdung (Art. 7 des Jugendschutzgesetzes). "
        "Als Professioneller, der mit Kindern arbeitet, sind Sie VERPFLICHTET, "
        "eine Gefaehrdung zu melden. Die Meldung an ONE oder Polizei hat "
        "Vorrang vor der Schweigepflicht. Eine unterlassene Meldung kann "
        "strafrechtliche Konsequenzen haben.")

    # =====================================================================
    # 6.5 SCHULKRISE
    # =====================================================================
    doc.add_heading('6.5 Schulkrise', level=2)

    doc.add_paragraph(
        "Eine Schulkrise ist ein Ereignis, das die gesamte Schulgemeinschaft betrifft: "
        "der Tod eines Schuelers oder Lehrers, ein schwerer Unfall, ein Gewaltvorfall, "
        "eine Naturkatastrophe. In solchen Momenten braucht die Schule einen klaren Plan "
        "und ein koordiniertes Team.")

    doc.add_heading('Schulkrisenprotokoll: Schritt fuer Schritt', level=3)

    add_numbered_list(doc, [
        "PHASE 1 - ALARMIERUNG (erste 30 Minuten): "
        "Schulleitung informieren. Krisenstab einberufen. Gesicherte Fakten sammeln. "
        "KEINE Geruechte weitergeben. Ueberpruefen: Sind alle Schueler und Lehrkraefte "
        "in Sicherheit?",
        "PHASE 2 - ERSTE REAKTION (erste 2 Stunden): "
        "Einheitliche Information an alle Lehrkraefte (Notfallkonferenz). "
        "Vorbereiteten Text fuer Klasseninformationen erstellen. "
        "Rueckzugsraum einrichten (mit Betreuung). "
        "Entscheidung: Unterricht fortsetzen oder abbrechen?",
        "PHASE 3 - INFORMATION (am selben Tag): "
        "Information an alle Klassen durch Klassenlehrerinnen (mit vorbereiteter Formulierung). "
        "Elternbrief verfassen und versenden. Hotline / Ansprechpartner benennen. "
        "Social-Media-Monitoring starten.",
        "PHASE 4 - BETREUUNG (Tag 1-3): "
        "Gespraechsangebote fuer Schueler (Einzel und Gruppe). "
        "Gespraechsangebote fuer Lehrkraefte. "
        "Besonders betroffene Schueler identifizieren und aktiv ansprechen. "
        "Externe Unterstuetzung hinzuziehen wenn noetig (CePAS, SePAS).",
        "PHASE 5 - RITUALE UND TRAUER (Woche 1): "
        "Erinnerungsort einrichten (Kerzen, Blumen, Briefe). "
        "Gedenkveranstaltung organisieren (wenn angemessen). "
        "Trauer Ausdruck geben: Kreative Angebote, Schreiben, Malen. "
        "Normalitaet schrittweise wiederherstellen.",
        "PHASE 6 - LANGFRISTIGES FOLLOW-UP (Wochen bis Monate): "
        "Besonders gefaehrdete Schueler weiter begleiten. "
        "Jahrestag beachten und vorbereiten. Nachbesprechung im Krisenteam. "
        "Krisenplan evaluieren und aktualisieren. "
        "Supervision fuer alle Beteiligten."
    ])

    doc.add_heading('Krisenteam: Rollen und Verantwortlichkeiten', level=3)

    add_table(doc,
        ["Rolle", "Person", "Verantwortlichkeiten"],
        [
            ["Krisenleitung",
             "Schulleitung / Direktion",
             "Gesamtkoordination. Entscheidungen treffen. Kommunikation mit "
             "Behoerden und Medien. Einberufung des Krisenstabs."],
            ["Psychologische Leitung",
             "Psychologe/in CDSE",
             "Psychologische Erstversorgung. Einschaetzung des Betreuungsbedarfs. "
             "Koordination der psychologischen Unterstuetzung. "
             "Identifikation besonders gefaehrdeter Schueler."],
            ["Kommunikation intern",
             "Stellvertretende Schulleitung",
             "Information an Lehrkraefte. Vorbereitung der Klassengespreeche. "
             "Koordination der internen Kommunikation."],
            ["Kommunikation extern",
             "Schulleitung / Pressesprecher",
             "Elternbrief. Kontakt mit Medien (NUR ueber diese Person). "
             "Social-Media-Monitoring. Kontakt mit Behoerden."],
            ["Betreuungsteam",
             "Psychologe/in, SePAS, Sozialarbeiter/in",
             "Betreuung des Rueckzugsraums. Einzelgespraeche. "
             "Gruppenangebote. Begleitung besonders Betroffener."],
            ["Logistik",
             "Sekretariat / Hausmeister",
             "Raeume vorbereiten. Material bereitstellen. "
             "Telefondienst. Elternkontakte koordinieren."],
            ["Lehrkraefte",
             "Alle Klassenlehrerinnen und -lehrer",
             "Klassengespreeche fuehren (mit Leitfaden). "
             "Beobachtung der Schueler. Meldung auffaelliger Reaktionen "
             "an Betreuungsteam."]
        ])

    doc.add_heading('Kommunikationsrichtlinien bei Schulkrisen', level=3)

    doc.add_paragraph(
        "Kommunikation in der Krise ist entscheidend. Falsche oder fehlende "
        "Kommunikation kann die Situation verschlimmern. Folgende Grundsaetze gelten:")

    add_bullet_list(doc, [
        "EINE STIMME: Alle offiziellen Informationen kommen von einer zentralen Stelle "
        "(Schulleitung). Keine individuellen Statements an Medien oder Social Media.",
        "FAKTEN STATT SPEKULATIONEN: Nur gesicherte Informationen weitergeben. "
        "\"Wir wissen Folgendes: ...\" Unklar heiten benennen: \"Wir wissen noch nicht: ...\"",
        "FRUEH KOMMUNIZIEREN: Lieber frueh mit wenigen Fakten als spaet mit allen Details. "
        "Das Vakuum wird sonst von Geruechten gefuellt.",
        "ALTERSGERECHT: Information fuer juengere Schueler anders formulieren als fuer aeltere. "
        "Einfache Sprache. Keine Details, die traumatisieren koennten.",
        "ELTERN PROAKTIV INFORMIEREN: Elternbrief am selben Tag. Hinweis auf moegliche "
        "Reaktionen der Kinder. Empfehlungen, wie Eltern reagieren koennen. "
        "Kontaktdaten fuer Fragen und Unterstuetzung.",
        "SOCIAL MEDIA BEACHTEN: Jugendliche erfahren Nachrichten oft zuerst ueber "
        "Social Media. Falschinformationen schnell richtigstellen. "
        "Jugendliche sensibilisieren: Nicht teilen, was nicht gesichert ist.",
        "SPRACHE DER TRAUER: Bei Todesfaellen: Keine Euphemismen (\"Er ist von uns "
        "gegangen\"), aber auch keine brutalen Details. Klar und respektvoll.",
        "BEI SUIZID: Besondere Vorsicht. Methode NICHT nennen. Keine Heroisierung. "
        "Keine detaillierten Beschreibungen. Hinweis auf Hilfsangebote immer mitgeben. "
        "Werther-Effekt beachten."
    ])

    doc.add_heading('Follow-up Massnahmen nach einer Schulkrise', level=3)

    add_table(doc,
        ["Zeitraum", "Massnahme", "Verantwortlich"],
        [
            ["Tag 1-3",
             "Taegliche Nachbesprechung Krisenteam. Rueckzugsraum besetzt halten. "
             "Aktive Ansprache besonders Betroffener. Lehrkraefte-Briefing.",
             "Krisenteam"],
            ["Woche 1",
             "Gruppenangebote fuer betroffene Klassen. Einzelgespraeche bei Bedarf. "
             "Elternabend anbieten (optional). Normalitaet schrittweise wiederherstellen.",
             "Psychologe/in, Lehrkraefte"],
            ["Woche 2-4",
             "Screening: Welche Schueler zeigen anhaltende Belastungsreaktionen? "
             "Weiterleitung an externe Hilfe wenn noetig. "
             "Lehrkraefte-Supervision anbieten.",
             "Psychologe/in, SePAS"],
            ["Monat 2-3",
             "Follow-up-Gespraeche mit besonders Betroffenen. "
             "Krisenplan evaluieren: Was hat funktioniert? Was muss verbessert werden? "
             "Dokumentation abschliessen.",
             "Psychologe/in, Schulleitung"],
            ["6 Monate",
             "Zwischenbilanz: Gibt es noch Schueler, die Unterstuetzung brauchen? "
             "Krisenplan aktualisieren.",
             "Krisenteam"],
            ["Jahrestag",
             "Vorbereitung auf den Jahrestag (mindestens 2 Wochen vorher). "
             "Gedenkangebot planen. Besonders Betroffene ansprechen. "
             "Lehrkraefte sensibilisieren.",
             "Psychologe/in, Schulleitung"]
        ])

    add_tip_box(doc,
        "Erstellen Sie JETZT - bevor eine Krise eintritt - eine Krisenmappe mit: "
        "(1) Kontaktliste des Krisenteams, (2) Vorlagen fuer Elternbriefe, "
        "(3) Vorlagen fuer Klasseninformationen, (4) Notfallnummern, "
        "(5) Raumplan fuer Rueckzugsraeume. Eine gute Vorbereitung spart in der "
        "Krise wertvolle Zeit und reduziert Fehler.")

    add_important_box(doc,
        "SELBSTFUERSORGE FUER HELFER: Sie koennen nur helfen, wenn es Ihnen selbst "
        "gut genug geht. Nach jeder Krisensituation: (1) Sprechen Sie mit jemandem "
        "(Kollegin, Supervisor, Partner). (2) Achten Sie auf koerperliche "
        "Grundbeduerfnisse (Essen, Trinken, Schlaf). (3) Erlauben Sie sich eigene "
        "Gefuehle - auch Profis duerfen betroffen sein. (4) Suchen Sie professionelle "
        "Supervision. (5) Erkennen Sie Ihre Grenzen: Sie koennen nicht alles allein tragen.")
