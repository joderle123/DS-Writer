"""
Kapitel 3: Gespraechsfuehrung - Die Kernkompetenz
"""
from styles import (add_table, add_bullet_list, add_praxisbox, add_dialog,
                    add_redflag, add_important_box, add_tip_box, add_section_intro,
                    add_checklist, add_flowchart, add_numbered_list)


def add_chapter3(doc):
    """Kapitel 3: Gespraechsfuehrung"""

    doc.add_heading('KAPITEL 3: GESPRAECHSFUEHRUNG - DIE KERNKOMPETENZ', level=1)

    add_section_intro(doc,
        "Gespraechsfuehrung ist Ihre wichtigste Kompetenz. Alle Methoden und Interventionen "
        "sind nur so wirksam wie die Beziehung, die Sie zum Jugendlichen aufbauen. Dieses "
        "Kapitel vermittelt die Grundlagen und konkreten Techniken.")

    # =====================================================================
    # 3.1 GRUNDHALTUNGEN NACH ROGERS
    # =====================================================================
    doc.add_heading('3.1 Grundhaltungen nach Carl Rogers', level=2)

    doc.add_paragraph(
        "Carl Rogers (1957, 1961) formulierte drei Kernbedingungen fuer eine wirksame "
        "therapeutische Beziehung, die fuer jede professionelle Beratung gelten:")

    doc.add_heading('Empathie', level=3)
    doc.add_paragraph(
        "Die Faehigkeit, die Welt aus der Perspektive des Jugendlichen zu sehen und zu "
        "verstehen - als ob es die eigene waere, ohne je das Als-ob zu verlieren. Empathie "
        "ist nicht Mitleid, nicht Sympathie, nicht Zustimmung - es ist tiefes Verstehen.")

    doc.add_heading('Bedingungslose positive Wertschaetzung', level=3)
    doc.add_paragraph(
        "Den Jugendlichen als Person vollstaendig akzeptieren, unabhaengig von seinem Verhalten. "
        "Das bedeutet NICHT, dass Sie jedes Verhalten gutheissen. Es bedeutet, dass Sie den "
        "MENSCHEN hinter dem Verhalten sehen und wertschaetzen.")

    doc.add_heading('Kongruenz/Echtheit', level=3)
    doc.add_paragraph(
        "Authentisch sein, ohne alles zu teilen. Professionelle Echtheit bedeutet: Ihre Worte und "
        "Ihre Koerpersprache stimmen ueberein. Sie spielen keine Rolle, Sie sind echt. Aber "
        "Sie teilen nur das, was der Beziehung und dem Jugendlichen dient.")

    doc.add_heading('Empathisch vs. Nicht-empathisch', level=3)
    add_table(doc,
        ["Jugendlicher sagt", "Nicht-empathische Antwort", "Empathische Antwort"],
        [
            ["Ich hasse die Schule!",
             "Schule ist aber wichtig fuer deine Zukunft.",
             "Die Schule frustriert dich gerade sehr. Was genau macht es so schwer?"],
            ["Meine Eltern verstehen mich nicht.",
             "Sie meinen es doch gut mit dir.",
             "Das Gefuehl, nicht verstanden zu werden, tut weh. Was wuerdest du dir wuenschen?"],
            ["Mir ist alles egal.",
             "Du musst dich aber anstrengen!",
             "Es klingt, als waerst du gerade erschoepft und frustriert. Wann war das anders?"],
            ["Ich bin haesslich.",
             "Das stimmt doch gar nicht!",
             "Du bist unzufrieden mit deinem Aussehen. Was genau stoert dich?"],
            ["Alle hassen mich.",
             "Bestimmt nicht alle!",
             "Du fuehlst dich abgelehnt und einsam. Das muss sich schlimm anfuehlen."]
        ])

    # =====================================================================
    # 3.2 AKTIVES ZUHOEREN
    # =====================================================================
    doc.add_heading('3.2 Aktives Zuhoeren mit Jugendlichen', level=2)

    doc.add_heading('10 Regeln des aktiven Zuhoerens', level=3)
    add_numbered_list(doc, [
        "PRAESENT SEIN: Handy weg, Computer aus, Blickkontakt (aber nicht starren).",
        "NICHT UNTERBRECHEN: Auch wenn es schwerfaellt. Pausen aushalten.",
        "PARAPHRASIEREN: In eigenen Worten wiedergeben, was Sie verstanden haben.",
        "GEFUEHLE SPIEGELN: Benennen Sie die Emotionen, die Sie wahrnehmen.",
        "OFFENE FRAGEN STELLEN: Was, Wie, Wozu - statt Warum (klingt vorwurfsvoll).",
        "KOERPERSPRACHE BEACHTEN: Was sagt der Koerper, was der Mund nicht sagt?",
        "NICHT BEWERTEN: Keine Ratschlaege, bevor Sie nicht verstanden haben.",
        "ZUSAMMENFASSEN: Am Ende des Gespraeches zusammenfassen, was Sie gehoert haben.",
        "FRAGEN STATT ANNEHMEN: Wenn Sie unsicher sind, fragen Sie nach.",
        "STILLE AUSHALTEN: Schweigen ist nicht Nichts - es ist Verarbeitung."
    ])

    add_table(doc,
        ["Technik", "Beschreibung", "Beispiel"],
        [
            ["Paraphrasieren", "Inhalt in eigenen Worten wiedergeben",
             "Wenn ich dich richtig verstehe, sagst du..."],
            ["Spiegeln", "Gefuehle benennen, die Sie wahrnehmen",
             "Das klingt, als waerst du wirklich wuetend darueber."],
            ["Zusammenfassen", "Mehrere Aussagen buendeln",
             "Du hast mir heute erzaehlt, dass... und... und..."],
            ["Offene Fragen", "Fragen, die zum Erzaehlen einladen",
             "Wie war das fuer dich? Was hast du dann gemacht?"],
            ["Minimale Ermutigungen", "Kleine Zeichen der Aufmerksamkeit",
             "Mhm, aha, erzaehl weiter, und dann?"],
            ["Konkretisieren", "Vages konkret machen",
             "Was genau meinst du mit alles? Wann war das zuletzt?"]
        ])

    add_praxisbox(doc, "Haeufige Fehler beim Zuhoeren",
        "1. Zu schnell Ratschlaege geben (Loesungsmodus)\n"
        "2. Eigene Erfahrungen erzaehlen (Ja, das kenne ich auch...)\n"
        "3. Bagatellisieren (Das ist doch nicht so schlimm)\n"
        "4. Moralisieren (Du solltest aber...)\n"
        "5. Interpretieren, bevor man verstanden hat")

    # =====================================================================
    # 3.3 MOTIVIERENDE GESPRAECHSFUEHRUNG
    # =====================================================================
    doc.add_heading('3.3 Motivierende Gespraechsfuehrung (MI)', level=2)

    doc.add_paragraph(
        "Motivierende Gespraechsfuehrung (Motivational Interviewing, Miller & Rollnick, 2013) "
        "ist eine der wirksamsten Methoden fuer die Arbeit mit ambivalenten oder widerstaendigen "
        "Jugendlichen. MI geht davon aus, dass Motivation keine Eigenschaft ist, die jemand hat "
        "oder nicht hat, sondern ein interpersonaler Prozess, der durch das Gespraech beeinflusst wird.")

    doc.add_heading('OARS - Die Grundtechniken', level=3)
    add_table(doc,
        ["Technik", "Beschreibung", "Beispiel"],
        [
            ["O - Open Questions\n(Offene Fragen)",
             "Fragen, die zum Nachdenken und Erzaehlen einladen",
             "Was wuerdest du gerne veraendern? Wie stellst du dir dein Leben in einem Jahr vor?"],
            ["A - Affirmations\n(Wuerdigung)",
             "Staerken und Bemuehungen anerkennen",
             "Es zeigt Mut, dass du hier bist. Du hast schon einiges ausprobiert, um damit umzugehen."],
            ["R - Reflections\n(Reflexionen)",
             "Aussagen des Jugendlichen zurueckspiegeln, verstaerkt oder umformuliert",
             "Einerseits willst du aufhoeren, andererseits hilft es dir, dich zu beruhigen."],
            ["S - Summaries\n(Zusammenfassungen)",
             "Das Gehoerte buendeln und zurueckgeben",
             "Lass mich zusammenfassen: Du sagst, dass..."]
        ])

    doc.add_heading('Change Talk erkennen und staerken', level=3)
    doc.add_paragraph(
        "DARN-CAT beschreibt verschiedene Formen von Change Talk - Aussagen des Jugendlichen, "
        "die in Richtung Veraenderung weisen:")

    add_table(doc,
        ["Akronym", "Bedeutung", "Beispiel-Aussage des Jugendlichen"],
        [
            ["D - Desire", "Wunsch nach Veraenderung", "Ich wuensche mir, dass es anders waere."],
            ["A - Ability", "Faehigkeit zur Veraenderung", "Ich koennte es schaffen, wenn ich wollte."],
            ["R - Reasons", "Gruende fuer Veraenderung", "Wenn ich aufhoere, geht es meiner Mutter besser."],
            ["N - Need", "Notwendigkeit der Veraenderung", "Ich muss etwas aendern, sonst fliege ich von der Schule."],
            ["C - Commitment", "Verpflichtung zur Veraenderung", "Ich werde es versuchen."],
            ["A - Activation", "Bereitschaft zum Handeln", "Ich bin bereit, den naechsten Schritt zu machen."],
            ["T - Taking Steps", "Bereits unternommene Schritte", "Ich habe gestern schon weniger geraucht."]
        ])

    doc.add_heading('MI-Dialog 1: Substanzkonsum', level=3)
    add_dialog(doc, [
        ("Psychologe", "Was hat dich heute hergebracht?"),
        ("Jugendlicher", "Mein Lehrer hat mich geschickt. Angeblich rauche ich zu viel Gras."),
        ("Psychologe", "Angeblich - das klingt, als siehst du das anders?"),
        ("Jugendlicher", "Ja, das ist doch normal. Alle machen das."),
        ("Psychologe", "Es gehoert fuer dich zum Alltag. Und gleichzeitig hat dein Lehrer "
         "sich Sorgen gemacht. Was denkst du, hat er bemerkt?"),
        ("Jugendlicher", "Keine Ahnung. Ich bin halt manchmal muede."),
        ("Psychologe", "Die Muedigkeit. Faellt dir das auch auf?"),
        ("Jugendlicher", "Ja, schon. Und meine Noten sind schlechter geworden."),
        ("Psychologe", "Das beschaeftigt dich. Einerseits gehoert das Kiffen fuer dich "
         "dazu, andererseits merkst du Auswirkungen. Wie waere es fuer dich, wenn du "
         "an deiner Muedigkeit etwas aendern koenntest?"),
        ("Jugendlicher", "Das waere schon gut. Aber ich will nicht ganz aufhoeren."),
        ("Psychologe", "Niemand verlangt, dass du sofort alles aenderst. Was waere ein "
         "kleiner erster Schritt, den du dir vorstellen koenntest?")
    ])

    doc.add_heading('MI-Dialog 2: Schulmotivation', level=3)
    add_dialog(doc, [
        ("Psychologe", "Ich wuerde gerne verstehen, wie es dir in der Schule geht."),
        ("Jugendliche", "Schule ist langweilig. Ich sehe den Sinn nicht."),
        ("Psychologe", "Du fragst dich, wozu das Ganze gut sein soll. Was muesste "
         "anders sein, damit Schule fuer dich Sinn macht?"),
        ("Jugendliche", "Ich weiss nicht. Vielleicht wenn es um echte Sachen ginge."),
        ("Psychologe", "Echte Sachen. Was waere ein echtes Thema fuer dich?"),
        ("Jugendliche", "Ich will spaeter was mit Tieren machen. Aber in der Schule "
         "lernt man nichts darueber."),
        ("Psychologe", "Du hast also ein klares Ziel - du weisst, was du willst. "
         "Das ist eine Staerke. Wie koenntest du die Schule nutzen, um diesem Ziel "
         "naeherzukommen?")
    ])

    doc.add_heading('MI-Dialog 3: Gesundheitsverhalten', level=3)
    add_dialog(doc, [
        ("Psychologe", "Dein Arzt hat mir geschrieben, dass er sich Sorgen um dein "
         "Gewicht macht. Wie geht es dir damit?"),
        ("Jugendlicher", "Der nervt. Ich bin halt so. Das ist genetisch."),
        ("Psychologe", "Du fuehlst dich unter Druck gesetzt und findest, dass "
         "dein Koerper okay ist, wie er ist. Was ist dir wichtig, wenn du an "
         "deine Gesundheit denkst?"),
        ("Jugendlicher", "Naja, ich wuerde schon gerne mehr Sport machen. "
         "Aber ich hab keine Lust, im Verein zu sein."),
        ("Psychologe", "Du hast Lust auf Bewegung, aber auf deine eigene Art. "
         "Was fuer Bewegung macht dir Spass?")
    ])

    add_tip_box(doc,
        "Der MI-Geist laesst sich in vier Worten zusammenfassen: Partnerschaft statt "
        "Expertentum, Akzeptanz statt Bewertung, Mitgefuehl statt Distanz, "
        "Evokation statt Instruktion. Sie foerdern Veraenderung, indem Sie "
        "dem Jugendlichen helfen, seine EIGENEN Gruende dafuer zu entdecken.")

    # =====================================================================
    # 3.4 LOESUNGSORIENTIERTE KURZBERATUNG
    # =====================================================================
    doc.add_heading('3.4 Loesungsorientierte Kurzberatung', level=2)

    doc.add_paragraph(
        "Die loesungsorientierte Kurzberatung (de Shazer, 1985) fokussiert auf Loesungen "
        "statt auf Probleme. Sie fragt nicht: Was ist kaputt? sondern: Was funktioniert "
        "bereits? und: Wie saehe die Zukunft aus, wenn das Problem geloest waere?")

    doc.add_heading('Wunderfrage', level=3)
    add_praxisbox(doc, "Die Wunderfrage - Wort-fuer-Wort",
        "Stell dir vor, heute Nacht, waehrend du schlaefst, geschieht ein Wunder. "
        "Und das Problem, wegen dem du hier bist, ist voellig geloest. Aber du weisst "
        "es nicht, weil du geschlafen hast. Woran wuerdest du morgen frueh als Erstes "
        "merken, dass das Wunder geschehen ist? Was waere anders? Was wuerdest du "
        "anders machen? Was wuerden andere an dir bemerken?")

    doc.add_heading('Skalierungsfragen', level=3)
    add_bullet_list(doc, [
        "Auf einer Skala von 0 bis 10: Wo stehst du gerade? (0 = am schlimmsten, 10 = Wunder)",
        "Was hat dafuer gesorgt, dass du nicht bei 0 bist?",
        "Was muesste passieren, damit du einen Punkt hoeher kommst?",
        "Woran wuerdest du merken, dass du bei einer 6 bist statt bei einer 4?"
    ])

    doc.add_heading('Ausnahmefragen', level=3)
    add_bullet_list(doc, [
        "Wann war das Problem mal weniger schlimm oder gar nicht da?",
        "Was war an diesem Tag anders?",
        "Was hast DU anders gemacht?",
        "Wie koenntest du mehr von diesen Ausnahme-Tagen haben?"
    ])

    doc.add_heading('Bewaeltigungsfragen', level=3)
    add_bullet_list(doc, [
        "Wie hast du es geschafft, trotz allem weiterzumachen?",
        "Was gibt dir Kraft?",
        "Wer oder was hilft dir, wenn es schwer wird?",
        "Was wuerdest du einem Freund raten, der in der gleichen Situation waere?"
    ])

    # =====================================================================
    # 3.5 GEWALTFREIE KOMMUNIKATION
    # =====================================================================
    doc.add_heading('3.5 Gewaltfreie Kommunikation (GfK)', level=2)

    doc.add_paragraph(
        "Die Gewaltfreie Kommunikation (Rosenberg, 2003) basiert auf vier Schritten "
        "und hilft, Konflikte zu deeskalieren und echte Verstaendigung zu foerdern.")

    add_table(doc,
        ["Schritt", "Beschreibung", "Beispiel (Lehrer zu Schueler)", "Beispiel (Psychologe zu Jugendlichem)"],
        [
            ["1. Beobachtung\n(ohne Bewertung)",
             "Beschreiben, was Sie sehen/hoeren - ohne zu interpretieren",
             "Ich sehe, dass du in den letzten drei Stunden auf dein Handy geschaut hast.",
             "Mir faellt auf, dass du heute sehr still bist."],
            ["2. Gefuehl\n(nicht Gedanke)",
             "Ausdruecken, was Sie fuehlen - Ich-Botschaften",
             "Ich bin frustriert, weil...",
             "Ich mache mir Sorgen, wenn..."],
            ["3. Beduerfnis",
             "Das Beduerfnis hinter dem Gefuehl benennen",
             "...weil mir wichtig ist, dass alle lernen koennen.",
             "...weil mir dein Wohlergehen wichtig ist."],
            ["4. Bitte\n(nicht Forderung)",
             "Eine konkrete, machbare Bitte formulieren",
             "Waerst du bereit, das Handy in die Tasche zu legen?",
             "Wuerdest du mir erzaehlen, was gerade los ist?"]
        ])

    add_tip_box(doc,
        "GfK fuer Jugendliche anpassen: Die Originalsprache kann fuer Jugendliche "
        "gestelzt klingen. Vereinfachen Sie: Statt eines Beduerfnisses nach Autonomie "
        "koennen Sie sagen: Du willst selbst entscheiden, und das ist voellig "
        "verstaendlich.")

    # =====================================================================
    # 3.6 SYSTEMISCHE FRAGETECHNIKEN
    # =====================================================================
    doc.add_heading('3.6 Systemische Fragetechniken', level=2)

    doc.add_paragraph(
        "Systemische Fragen erweitern die Perspektive und helfen, Muster und "
        "Zusammenhaenge sichtbar zu machen. Hier sind 20 zentrale Fragetechniken:")

    add_table(doc,
        ["Fragentyp", "Beispielfrage"],
        [
            ["Zirkulaere Frage", "Was wuerde dein bester Freund sagen, wie es dir gerade geht?"],
            ["Zirkulaere Frage", "Wer in der Familie macht sich die meisten Sorgen um dich?"],
            ["Hypothetische Frage", "Angenommen, du wuerdest morgen aufwachen und alles waere gut - was waere anders?"],
            ["Hypothetische Frage", "Was wuerde passieren, wenn du es einfach mal ausprobierst?"],
            ["Skalierungsfrage", "Auf einer Skala von 0-10, wie stark belastet dich das?"],
            ["Skalierungsfrage", "Wo warst du auf der Skala vor einem Monat?"],
            ["Ausnahmefrage", "Wann war das Problem mal nicht da? Was war an dem Tag anders?"],
            ["Ausnahmefrage", "Gibt es Situationen, in denen du das Problem gut meisterst?"],
            ["Bewaeltigungsfrage", "Wie hast du es geschafft, bis hierher durchzuhalten?"],
            ["Bewaeltigungsfrage", "Was gibt dir die Kraft, trotzdem weiterzumachen?"],
            ["Zukunftsfrage", "Wo siehst du dich in einem Jahr, wenn alles gut laeuft?"],
            ["Zukunftsfrage", "Was waere das erste kleine Zeichen, dass es besser wird?"],
            ["Ressourcenfrage", "Was kannst du besonders gut?"],
            ["Ressourcenfrage", "Wer in deinem Leben glaubt am meisten an dich?"],
            ["Verschlimmerungsfrage", "Was koenntest du tun, um das Problem NOCH schlimmer zu machen?"],
            ["Verschlimmerungsfrage", "Was muesste passieren, damit du sicher aufgibst?"],
            ["Kontextfrage", "Wo ist das Problem staerker - zu Hause oder in der Schule?"],
            ["Kontextfrage", "Bei welchem Lehrer funktioniert es besser? Was macht der anders?"],
            ["Werte-Frage", "Was ist dir im Leben am wichtigsten?"],
            ["Werte-Frage", "Wofuer wuerdest du kaempfen?"]
        ])

    # =====================================================================
    # 3.7 ERSTGESPRAECH
    # =====================================================================
    doc.add_heading('3.7 Erstgespraech mit Jugendlichen', level=2)

    doc.add_heading('Variante 1: Freiwilliger Jugendlicher', level=3)
    add_dialog(doc, [
        ("Psychologe", "Hallo! Schoen, dass du da bist. Ich bin [Name], und ich arbeite "
         "hier als Psychologe. Bevor wir anfangen: Weisst du, was ein Psychologe macht?"),
        ("Jugendlicher", "Naja, so jemand, der mit Leuten redet, denen es nicht gut geht?"),
        ("Psychologe", "Genau, und das Wichtigste: Alles, was du hier sagst, bleibt "
         "zwischen uns. Es gibt nur wenige Ausnahmen - wenn jemand in Gefahr ist. "
         "Aber das erklaere ich dir genau, wenn es so weit ist. Was hat dich hergebracht?")
    ])

    doc.add_heading('Variante 2: Widerstaendiger Jugendlicher', level=3)
    add_dialog(doc, [
        ("Psychologe", "Hi. Ich bin [Name]. Ich weiss, dass du nicht freiwillig hier bist. "
         "Das ist okay. Ich wuerde trotzdem gerne wissen, wie es dir geht."),
        ("Jugendlicher", "Mir geht es gut. Ich brauch das nicht."),
        ("Psychologe", "Verstehe ich. Und ich werde dich zu nichts zwingen. "
         "Aber da wir jetzt diese halbe Stunde zusammen haben - gibt es irgendetwas, "
         "das dich gerade beschaeftigt? Egal was?"),
        ("Jugendlicher", "Na ja... die Schule nervt halt."),
        ("Psychologe", "Die Schule nervt. Das hoere ich oft. Was genau nervt am meisten?")
    ])

    doc.add_heading('Variante 3: Sehr stiller Jugendlicher', level=3)
    add_dialog(doc, [
        ("Psychologe", "Hallo. Ich bin [Name]. Du musst hier nicht viel reden, wenn du "
         "nicht willst. Wir koennen auch einfach hier sitzen. Oder ich kann dir erzaehlen, "
         "was ich so mache. Was waere dir lieber?"),
        ("Jugendlicher", "(schweigt, zuckt mit den Schultern)"),
        ("Psychologe", "Okay, ich fange mal an. Ich rede mit Jugendlichen ueber alles "
         "Moegliche - Schule, Freunde, Familie, Dinge die stressen. Alles bleibt unter "
         "uns. Und du bestimmst, worueber wir reden. (Pause) Magst du mir mit einem Wort "
         "sagen, wie es dir gerade geht?"),
        ("Jugendlicher", "...okay."),
        ("Psychologe", "Okay ist ein guter Anfang. Danke. Wollen wir uns naechste Woche "
         "nochmal treffen? Vielleicht faellt dir bis dahin etwas ein, das du besprechen moechtest.")
    ])

    doc.add_heading('Erstgespraech-Checkliste', level=3)
    add_checklist(doc, [
        "Vorstellung und Rollenerklaerung",
        "Schweigepflicht und Grenzen erklaeren",
        "Anliegen/Grund der Vorstellung klaeren",
        "Aktuelle Lebenssituation erfragen (Familie, Schule, Freunde)",
        "Staerken und Ressourcen erkunden",
        "Aktuelle Belastungen einschaetzen",
        "Suizidalitaet / SVV pruefen (wenn indiziert)",
        "Erwartungen an die Beratung klaeren",
        "Naechste Schritte und Termin vereinbaren",
        "Dokumentation anfertigen"
    ])

    # =====================================================================
    # 3.8 SCHWIERIGE GESPRAECHSSITUATIONEN
    # =====================================================================
    doc.add_heading('3.8 Schwierige Gespraechssituationen', level=2)

    add_table(doc,
        ["Was FUNKTIONIERT", "Was NICHT funktioniert"],
        [
            ["Zuhoeren vor Ratschlag", "Sofort Loesungen anbieten"],
            ["Gefuehle validieren", "Gefuehle korrigieren oder bagatellisieren"],
            ["Humor (dosiert und respektvoll)", "Sarkasmus oder Ironie auf Kosten des Jugendlichen"],
            ["Transparenz ueber eigene Rolle", "Sich als Freund oder Kumpel positionieren"],
            ["Grenzen setzen mit Erklaerung", "Autoritaere Ansagen ohne Begruendung"]
        ])

    doc.add_heading('Umgang mit Schweigen', level=3)
    add_bullet_list(doc, [
        "Schweigen aushalten - 30 Sekunden fuehlen sich lang an, sind aber oft produktiv",
        "Nonverbale Signale beachten: Was drueckt der Koerper aus?",
        "Angebote machen: Wir muessen nicht reden. Wir koennen auch malen oder etwas spielen.",
        "Normalisieren: Es ist okay, wenn dir gerade nichts einfaellt."
    ])

    doc.add_heading('Umgang mit Traenen', level=3)
    add_bullet_list(doc, [
        "Taschentuecher bereithalten (nicht anbieten - einfach hinstellen)",
        "Nicht trösten mit: Ist schon gut - denn es ist offensichtlich NICHT gut",
        "Stattdessen: Nimm dir die Zeit, die du brauchst. Ich bin hier.",
        "Weinen ist ein gutes Zeichen - es zeigt Vertrauen und Emotionszugang"
    ])

    doc.add_heading('Umgang mit Wut', level=3)
    add_bullet_list(doc, [
        "Ruhig bleiben. Ihre Ruhe ist ansteckend - genau wie Aufregung",
        "Validieren: Ich sehe, dass du richtig wuetend bist. Das ist in Ordnung.",
        "Grenzen: Wuetend sein ist okay. Sachen kaputt machen ist es nicht.",
        "Raum geben: Brauchst du einen Moment fuer dich?",
        "Sicherheit beachten: Wenn Sie sich bedroht fuehlen, beenden Sie das Gespraech"
    ])

    # =====================================================================
    # 3.9 GRUPPENARBEIT
    # =====================================================================
    doc.add_heading('3.9 Gruppenarbeit mit Jugendlichen', level=2)

    doc.add_paragraph(
        "Gruppenarbeit nutzt die wichtigste Ressource des Jugendalters: die Peers. "
        "In Gruppen koennen Jugendliche voneinander lernen, sich gegenseitig unterstuetzen "
        "und soziale Kompetenzen trainieren.")

    doc.add_heading('Gruppenregeln (gemeinsam erarbeiten)', level=3)
    add_checklist(doc, [
        "Was hier gesagt wird, bleibt hier (Vertraulichkeit)",
        "Jeder darf ausreden",
        "Wir lachen MIT jemandem, nicht UEBER jemanden",
        "Handy bleibt aus/stumm",
        "Jeder darf passen (nicht antworten)",
        "Respektvoller Umgang"
    ])

    doc.add_heading('20 Ice-Breaker-Uebungen', level=3)
    add_table(doc,
        ["Name", "Dauer", "Gruppengroesse", "Ziel"],
        [
            ["Zwei Wahrheiten, eine Luege", "15 Min", "5-15", "Kennenlernen, Spass"],
            ["Stimmungsbarometer", "5 Min", "beliebig", "Check-in, Gefuehle benennen"],
            ["Gemeinsamkeiten finden", "10 Min", "6-20", "Verbindung schaffen"],
            ["Wenn ich ein Tier waere...", "10 Min", "5-15", "Kreativitaet, Selbstreflexion"],
            ["Menschliches Bingo", "15 Min", "10-30", "Kennenlernen, Bewegung"],
            ["Positionsbarometer", "10 Min", "5-30", "Meinungen sichtbar machen"],
            ["Satzanfaenge ergaenzen", "10 Min", "5-15", "Reflexion, Teilen"],
            ["Emoji-Check-in", "5 Min", "beliebig", "Gefuehle benennen (niedrigschwellig)"],
            ["Speed-Dating", "15 Min", "10-30", "Kennenlernen, Gespraechsuebung"],
            ["Krafttier zeichnen", "15 Min", "5-15", "Ressourcen aktivieren"],
            ["Ich packe meinen Koffer", "10 Min", "5-15", "Konzentration, Spass"],
            ["Standogramm", "10 Min", "5-30", "Kennenlernen, Bewegung"],
            ["Heisser Stuhl (positiv)", "15 Min", "5-15", "Wertschaetzung, Staerken"],
            ["Blitzlicht", "5 Min", "beliebig", "Check-in/Check-out"],
            ["Pantomime-Gefuehle", "10 Min", "5-20", "Emotionserkennung, Spass"],
            ["Wuerfelfragen", "15 Min", "5-15", "Kennenlernen, Zufall"],
            ["Seilkreis", "10 Min", "8-20", "Kooperation, Vertrauen"],
            ["Komplimente-Kette", "10 Min", "5-15", "Wertschaetzung, Selbstwert"],
            ["Musik-Stopp-Austausch", "15 Min", "10-30", "Kennenlernen, Bewegung"],
            ["Brief an mich", "15 Min", "beliebig", "Selbstreflexion, Ziele"]
        ])
