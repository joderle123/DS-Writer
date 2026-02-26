"""
Kapitel 4: Interventionen und Methoden
"""
from styles import (add_table, add_bullet_list, add_praxisbox, add_dialog,
                    add_redflag, add_important_box, add_tip_box, add_section_intro,
                    add_checklist, add_flowchart, add_numbered_list)


def add_chapter4(doc):
    """Kapitel 4: Interventionen und Methoden"""

    doc.add_heading('KAPITEL 4: INTERVENTIONEN UND METHODEN', level=1)

    add_section_intro(doc,
        "Dieses Kapitel stellt konkrete Interventionsmethoden vor, die Sie in der Beratung "
        "einsetzen koennen. Alle Methoden sind an den schulischen Kontext und die Altersgruppe "
        "10-18 angepasst. Denken Sie daran: Sie machen keine Psychotherapie - Sie nutzen "
        "therapeutische Techniken im Rahmen der Beratung.")

    # =====================================================================
    # 4.1 KVT
    # =====================================================================
    doc.add_heading('4.1 Kognitive Verhaltenstherapie - Adaptierte Techniken', level=2)

    doc.add_paragraph(
        "Die Kognitive Verhaltenstherapie (KVT/CBT) basiert auf dem Zusammenhang zwischen "
        "Gedanken, Gefuehlen und Verhalten. Der zentrale Grundsatz: Nicht die Situation selbst "
        "bestimmt, wie wir uns fuehlen, sondern unsere INTERPRETATION der Situation.")

    add_praxisbox(doc, "Das kognitive Modell in Aktion",
        "Situation: Der Lehrer gibt die Klassenarbeit zurueck und sagt: Einige von euch "
        "muessen sich mehr anstrengen.\n\n"
        "Schueler A denkt: Er meint mich. Ich bin zu dumm.\n"
        "Fuehlt: Scham, Angst. Verhalten: Gibt auf, lernt nicht mehr.\n\n"
        "Schueler B denkt: Na, er meint die anderen.\n"
        "Fuehlt: Gleichgueltig. Verhalten: Macht weiter wie bisher.\n\n"
        "Schueler C denkt: Stimmt, ich kann mich verbessern.\n"
        "Fuehlt: Motiviert. Verhalten: Lernt mehr.\n\n"
        "DIESELBE Situation - drei verschiedene Gedanken - drei verschiedene Gefuehle - "
        "drei verschiedene Verhaltensweisen.")

    doc.add_heading('20 haeufige kognitive Verzerrungen bei Jugendlichen', level=3)
    add_table(doc,
        ["Verzerrung", "Beschreibung", "Typisches Beispiel", "Gegenfrage"],
        [
            ["Schwarz-Weiss-Denken", "Alles oder nichts, keine Grautone",
             "Wenn ich keine 1 bekomme, bin ich ein Versager.",
             "Gibt es etwas zwischen perfekt und Versager?"],
            ["Katastrophisieren", "Vom Schlimmsten ausgehen",
             "Wenn ich die Pruefung versaue, ist mein Leben vorbei.",
             "Was ist das Wahrscheinlichste, das passieren wird?"],
            ["Gedankenlesen", "Glauben zu wissen, was andere denken",
             "Alle denken, ich bin komisch.",
             "Woher weisst du das? Hast du jemanden gefragt?"],
            ["Uebergeneralisierung", "Aus einem Fall eine Regel machen",
             "Immer geht alles schief. Nie klappt etwas.",
             "War das wirklich IMMER so? Gab es Ausnahmen?"],
            ["Emotionales Schlussfolgern", "Gefuehle als Beweis nehmen",
             "Ich fuehle mich dumm, also BIN ich dumm.",
             "Nur weil du dich so fuehlst - ist das ein Beweis?"],
            ["Personalisierung", "Alles auf sich beziehen",
             "Der Lehrer hat mich boese angeschaut. Er hasst mich.",
             "Koennte es sein, dass er einfach einen schlechten Tag hatte?"],
            ["Sollte-Tyrannei", "Starre Regeln an sich und andere",
             "Ich MUSS immer stark sein. Ich DARF nicht weinen.",
             "Wer hat das entschieden? Was passiert, wenn du weinst?"],
            ["Selektive Wahrnehmung", "Nur das Negative sehen",
             "In der Arbeit waren 3 Fehler (bei 47 richtigen).",
             "Was hast du alles RICHTIG gemacht?"],
            ["Minimierung", "Eigene Erfolge kleinreden",
             "Die gute Note war nur Glueck.",
             "Was hast DU dazu beigetragen?"],
            ["Fortune Telling", "Zukunft negativ vorhersagen",
             "Das wird sowieso nichts.",
             "Woher weisst du das? Hast du es schon versucht?"]
        ])

    doc.add_heading('Gedankenprotokoll', level=3)
    add_table(doc,
        ["Situation\n(Was ist passiert?)", "Automatischer Gedanke\n(Was ging mir durch den Kopf?)",
         "Gefuehl\n(Was habe ich gefuehlt? 0-100%)", "Beweise DAFUER",
         "Beweise DAGEGEN", "Alternativer Gedanke\n(Ausgewogener, realistischer)"],
        [
            ["___", "___", "___", "___", "___", "___"],
            ["___", "___", "___", "___", "___", "___"],
            ["___", "___", "___", "___", "___", "___"]
        ])

    # =====================================================================
    # 4.2 EMOTIONSREGULATION
    # =====================================================================
    doc.add_heading('4.2 Emotionsregulationsstrategien', level=2)

    doc.add_paragraph(
        "Emotionsregulation ist eine der wichtigsten Faehigkeiten, die Jugendliche "
        "entwickeln muessen. Viele Verhaltensauffaelligkeiten sind letztlich Ausdruck "
        "von Emotionsregulationsdefiziten.")

    doc.add_heading('Box Breathing (4-4-4-4)', level=3)
    add_praxisbox(doc, "Box Breathing Anleitung",
        "1. Atme 4 Sekunden lang EIN (durch die Nase)\n"
        "2. Halte den Atem 4 Sekunden lang AN\n"
        "3. Atme 4 Sekunden lang AUS (durch den Mund)\n"
        "4. Halte 4 Sekunden lang die Luft AN\n"
        "5. Wiederhole 4 Runden\n\n"
        "Warum es funktioniert: Die verlaengerte Ausatmung aktiviert den Parasympathikus "
        "(Ruhenerv) und senkt die Herzfrequenz. Innerhalb von 2 Minuten spuerbar.")

    doc.add_heading('5-4-3-2-1 Grounding', level=3)
    add_praxisbox(doc, "5-4-3-2-1 Uebung bei Panik oder Dissoziation",
        "Nenne mir:\n"
        "5 Dinge, die du SIEHST (Stuhl, Tisch, Lampe, Poster, Fenster)\n"
        "4 Dinge, die du FUEHLEN kannst (Stuhl unter dir, Fuss auf dem Boden...)\n"
        "3 Dinge, die du HOERST (Uhr, Autos, Stimmen...)\n"
        "2 Dinge, die du RIECHST (frische Luft, Papier...)\n"
        "1 Ding, das du SCHMECKST (Kaugummi, Wasser...)\n\n"
        "Warum es funktioniert: Es bringt den Jugendlichen zurueck in den Moment. "
        "Bei Dissoziation oder Panik ist die Person mental nicht im Hier und Jetzt - "
        "die Sinneswahrnehmung verankert sie wieder.")

    doc.add_heading('TIPP-Skills', level=3)
    add_table(doc,
        ["Skill", "Wie es geht", "Warum es wirkt"],
        [
            ["T - Temperatur", "Kaltes Wasser ins Gesicht, Eiswuerfel in die Hand, "
             "kalte Dusche",
             "Aktiviert den Tauchreflex, senkt die Herzfrequenz sofort"],
            ["I - Intensive Bewegung", "20 Liegestuetze, Treppen rennen, auf der "
             "Stelle springen",
             "Baut Stresshormone (Adrenalin, Cortisol) ab"],
            ["P - Paced Breathing", "Laenger aus- als einatmen (4 Sek ein, 8 Sek aus)",
             "Aktiviert den Parasympathikus"],
            ["P - Progressive Relaxation", "Alle Muskeln 5 Sek anspannen, dann loslassen",
             "Koerperliche Entspannung durch Kontrasterleben"]
        ])

    doc.add_heading('Emotionssurfen', level=3)
    add_praxisbox(doc, "Emotionssurfen - Anleitung",
        "Stell dir deine Emotion als eine Welle im Meer vor. Sie kommt, sie wird "
        "groesser, sie erreicht ihren Hoehepunkt - und dann wird sie wieder kleiner "
        "und geht zurueck. Keine Welle bleibt fuer immer.\n\n"
        "Deine Aufgabe ist nicht, die Welle zu stoppen (das kannst du nicht) oder "
        "vor ihr wegzulaufen (das funktioniert nicht). Deine Aufgabe ist, auf der "
        "Welle zu surfen - sie wahrzunehmen, sie zuzulassen, und zu wissen: Sie "
        "geht vorbei. Immer.")

    # =====================================================================
    # 4.3 DBT-SKILLS
    # =====================================================================
    doc.add_heading('4.3 DBT-Skills fuer die Beratung', level=2)

    doc.add_paragraph(
        "Die Dialektisch-Behaviorale Therapie (Linehan, 1993) bietet besonders fuer "
        "die Arbeit mit emotional instabilen Jugendlichen wertvolle Skills. "
        "Hier die wichtigsten fuer den Beratungskontext:")

    doc.add_heading('DEAR MAN - Fuer sich einstehen', level=3)
    add_table(doc,
        ["Buchstabe", "Bedeutung", "Beispiel"],
        [
            ["D - Describe", "Die Situation beschreiben (Fakten)",
             "In den letzten drei Pausen war ich allein."],
            ["E - Express", "Die Gefuehle ausdruecken",
             "Das macht mich traurig und einsam."],
            ["A - Assert", "Klar sagen, was man will",
             "Ich moechte, dass ihr mich in der Pause einladet."],
            ["R - Reinforce", "Erklaeren, warum es sich lohnt",
             "Dann macht die Pause fuer alle mehr Spass."],
            ["M - Mindful", "Beim Thema bleiben",
             "Nicht ablenken lassen oder das Thema wechseln."],
            ["A - Appear confident", "Selbstsicher auftreten",
             "Aufrecht stehen, Blickkontakt, klare Stimme."],
            ["N - Negotiate", "Verhandeln, kompromissbereit sein",
             "Vielleicht koennen wir abwechselnd entscheiden, was wir spielen."]
        ])

    doc.add_heading('STOP-Skill', level=3)
    add_praxisbox(doc, "STOP - Bei starken Impulsen",
        "S - Stop: Halte an. Mach NICHTS.\n"
        "T - Take a step back: Tritt einen Schritt zurueck (mental und/oder physisch).\n"
        "O - Observe: Beobachte, was in dir vorgeht. Was fuehlst du? Was denkst du?\n"
        "P - Proceed mindfully: Handele erst, wenn du nachgedacht hast.\n\n"
        "Ideal fuer: Wutausbrueche, Impulskauf, aggressive Reaktionen, SVV-Drang")

    doc.add_heading('Wise Mind', level=3)
    doc.add_paragraph(
        "Das Konzept des Wise Mind (Weiser Geist) beschreibt die Balance zwischen dem "
        "Emotional Mind (rein gefuehlsgesteuert) und dem Reasonable Mind (rein "
        "verstandesgesteuert). Der Wise Mind integriert beides:")

    add_table(doc,
        ["Emotional Mind", "Wise Mind", "Reasonable Mind"],
        [
            ["Handelt rein aus Gefuehlen", "Beruecksichtigt Gefuehle UND Fakten",
             "Handelt rein aus Logik"],
            ["Impulsiv", "Reflektiert und intuitiv", "Kalt und distanziert"],
            ["Ich FUEHLE, also ist es wahr", "Ich fuehle UND ich denke nach",
             "Gefuehle sind irrelevant"],
            ["Risiko: Ueberreaktion", "Balance und Weisheit", "Risiko: Gefuehlsarmut"]
        ])

    # =====================================================================
    # 4.4 NARRATIVE THERAPIE
    # =====================================================================
    doc.add_heading('4.4 Narrative Therapie', level=2)

    doc.add_heading('Externalisierung', level=3)
    doc.add_paragraph(
        "Die Externalisierung (White & Epston, 1990) trennt das Problem von der Person. "
        "Nicht der Jugendliche IST das Problem - er HAT ein Problem, das ihn beeinflusst.")

    add_dialog(doc, [
        ("Psychologe", "Wie wuerdest du diese Angst nennen, wenn sie einen Namen haette?"),
        ("Jugendliche", "Ich weiss nicht... der schwarze Nebel?"),
        ("Psychologe", "Der schwarze Nebel. Wann kommt der schwarze Nebel besonders gerne?"),
        ("Jugendliche", "Morgens, bevor ich zur Schule muss. Und abends."),
        ("Psychologe", "Was macht der schwarze Nebel mit dir, wenn er da ist?"),
        ("Jugendliche", "Er macht alles schwer. Ich kann nicht klar denken."),
        ("Psychologe", "Gibt es Zeiten, wo du staerker bist als der schwarze Nebel? "
         "Wo er weniger Macht ueber dich hat?"),
        ("Jugendliche", "Wenn ich mit meiner Freundin rede. Oder wenn ich Musik hoere."),
        ("Psychologe", "Das sind deine Waffen gegen den schwarzen Nebel. Deine Freundin "
         "und die Musik. Was noch?")
    ])

    doc.add_heading('Tree of Life', level=3)
    add_praxisbox(doc, "Tree of Life - Ausfuehrliche Anleitung",
        "Material: Grosses Papier (A2 oder groesser), bunte Stifte\n\n"
        "Zeichne einen grossen Baum und fuelle die Teile:\n\n"
        "WURZELN (Woher du kommst):\n"
        "- Deine Familie, dein Herkunftsort\n"
        "- Deine Kultur, deine Sprache(n)\n"
        "- Werte, die dir wichtig sind\n\n"
        "STAMM (Deine Staerken):\n"
        "- Was kannst du gut?\n"
        "- Was macht dich aus?\n"
        "- Welche Faehigkeiten hast du?\n\n"
        "AESTE (Deine Hoffnungen und Traeume):\n"
        "- Was wuenschst du dir fuer die Zukunft?\n"
        "- Wohin willst du?\n\n"
        "BLAETTER (Wichtige Menschen):\n"
        "- Schreibe die Namen der Menschen auf, die dir wichtig sind\n"
        "- Lebende und verstorbene\n\n"
        "FRUECHTE (Deine Erfolge):\n"
        "- Was hast du schon erreicht?\n"
        "- Worauf bist du stolz?\n\n"
        "BLUETEN (Geschenke und Gaben):\n"
        "- Was haben andere dir geschenkt? (nicht materiell)\n"
        "- Welche guten Erfahrungen hast du gemacht?")

    # =====================================================================
    # 4.5 KREATIVE METHODEN
    # =====================================================================
    doc.add_heading('4.5 Kreative und erlebnisorientierte Methoden', level=2)

    add_table(doc,
        ["Methode", "Alter", "Dauer", "Material", "Ziel"],
        [
            ["Emotionsrad zeichnen", "10+", "15 Min", "Papier, Stifte",
             "Emotionsdifferenzierung"],
            ["Koerperumriss", "10+", "20 Min", "Grosses Papier, Stifte",
             "Koerperwahrnehmung, wo sitzen Gefuehle?"],
            ["Collage: Mein Leben", "12+", "30-45 Min", "Zeitschriften, Schere, Kleber",
             "Identitaetsexploration"],
            ["Soundtrack meines Lebens", "14+", "20 Min", "Papier",
             "Selbstreflexion, Zugang ueber Musik"],
            ["Brief an mein juengeres Ich", "14+", "20 Min", "Papier",
             "Selbstmitgefuehl, Perspektivenwechsel"],
            ["Wutvulkan malen", "10-14", "15 Min", "Papier, Stifte",
             "Wutausloeser und Warnsignale identifizieren"],
            ["Sorgenkiste basteln", "10-14", "20 Min", "Schachtel, Papier",
             "Sorgen externalisieren und kontrollierbar machen"],
            ["Timeline: Meine Geschichte", "12+", "30 Min", "Langes Papier",
             "Lebensgeschichte strukturieren, Ressourcen finden"],
            ["Gefuehlswetterbericht", "10+", "5 Min", "Verbal",
             "Taeglich als Check-in nutzbar"],
            ["Masken basteln", "12+", "45 Min", "Masken, Farbe",
             "Aussen vs. Innen, was zeige ich der Welt?"],
            ["Staerken-Stern", "10+", "15 Min", "Papier",
             "Ressourcenaktivierung"],
            ["Zukunftsbild malen", "10+", "20 Min", "Papier, Stifte",
             "Hoffnung, Zielorientierung"],
            ["Steine bemalen", "10+", "20 Min", "Steine, Farbe",
             "Kreativitaet, Ressourcen-Anker"],
            ["Gefuehle-Memory", "10-14", "20 Min", "Karten",
             "Emotionserkennung, spielerisch"],
            ["Fotoprojekt: Meine Welt", "14+", "Mehrere Sitzungen", "Kamera/Handy",
             "Perspektive teilen, Selbstwirksamkeit"]
        ])

    # =====================================================================
    # 4.6 PSYCHOEDUKATION
    # =====================================================================
    doc.add_heading('4.6 Psychoedukation fuer Jugendliche', level=2)

    doc.add_heading('Stress und das Gehirn (jugendgerecht)', level=3)
    add_praxisbox(doc, "Psychoedukation: Stress erklaert",
        "Stell dir vor, in deinem Gehirn gibt es zwei wichtige Teile:\n\n"
        "1. Den ALARMMELDER (Amygdala): Er sucht staendig nach Gefahren. Wenn er "
        "eine Gefahr sieht - ALARM! Dein Koerper geht in den Kampf-oder-Flucht-Modus.\n\n"
        "2. Den CHEF (Praefrontaler Cortex): Er denkt nach, plant, ueberegt. Er kann "
        "den Alarmmelder beruhigen: Hey, das ist gar nicht so gefaehrlich.\n\n"
        "Das Problem: In deinem Alter ist der Chef noch in der Ausbildung! Der "
        "Alarmmelder ist aber schon voll aktiv. Deshalb reagierst du manchmal heftiger "
        "als Erwachsene - nicht weil du schwach bist, sondern weil dein Gehirn noch "
        "am Reifen ist.\n\n"
        "Die gute Nachricht: Du kannst deinen Chef trainieren! Jedes Mal, wenn du "
        "eine Emotion aushaltst, statt sofort zu reagieren, wird der Chef ein "
        "bisschen staerker.")

    doc.add_heading('Schlafhygiene-Checkliste', level=3)
    add_checklist(doc, [
        "Feste Schlafenszeit (auch am Wochenende maximal 1h Abweichung)",
        "Bildschirmpause mindestens 30 Minuten vor dem Schlafen",
        "Kein Koffein nach 14 Uhr",
        "Dunkles, kuehles Zimmer (16-18 Grad optimal)",
        "Bett nur zum Schlafen nutzen (nicht zum Lernen, Essen, Fernsehen)",
        "Entspannungsroutine entwickeln (Musik, Lesen, Atemuebung)",
        "Regelmaessige koerperliche Aktivitaet (aber nicht direkt vor dem Schlafen)",
        "Bei Gruebeln: Sorgen aufschreiben und beiseitelegen"
    ])

    # =====================================================================
    # 4.7 ACHTSAMKEIT
    # =====================================================================
    doc.add_heading('4.7 Achtsamkeit und Meditation', level=2)

    add_important_box(doc,
        "VORSICHT bei Trauma: Achtsamkeitsuebungen koennen bei traumatisierten "
        "Jugendlichen kontraindiziert sein! Koerperwahrnehmung und Stille koennen "
        "Flashbacks oder Dissoziation ausloesen. Bei Verdacht auf Trauma: Nur mit "
        "offenen Augen, nur kurze Uebungen, immer mit Ankerpunkt im Raum.")

    doc.add_heading('5 kurze Achtsamkeitsuebungen', level=3)

    add_praxisbox(doc, "Uebung 1: Achtsames Atmen (3 Minuten)",
        "Setz dich bequem hin. Du kannst die Augen schliessen oder einen Punkt "
        "am Boden fixieren. Spuere deinen Atem. Wie er einfliesst und wieder "
        "ausfliesst. Du musst den Atem nicht veraendern. Nur beobachten. Wenn "
        "Gedanken kommen - und sie werden kommen! - stell dir vor, du setzt sie "
        "auf eine Wolke und laesst sie weiterziehen. Dann komm zurueck zum Atem.")

    add_praxisbox(doc, "Uebung 2: Bodyscan kurz (5 Minuten)",
        "Beginne bei deinen Fuessen. Was spuerst du? Waerme? Druck? Kribbeln? "
        "Wandere langsam nach oben: Beine, Bauch, Brust, Arme, Haende, "
        "Schultern, Nacken, Kopf. Bei jedem Koerperteil: nur wahrnehmen, nicht "
        "bewerten. Wenn du Anspannung findest, atme bewusst dorthin.")

    add_praxisbox(doc, "Uebung 3: Achtsam essen (5 Minuten)",
        "Nimm ein Stueck Schokolade oder eine Rosine. Betrachte es zuerst nur. "
        "Welche Farbe? Form? Dann rieche daran. Dann lege es auf die Zunge, "
        "ohne zu kauen. Was spuerst du? Dann langsam kauen. Wie veraendert sich "
        "der Geschmack? Schlucke bewusst. Das Ziel: Eine einzige Handlung mit "
        "voller Aufmerksamkeit tun.")

    add_praxisbox(doc, "Uebung 4: RAIN bei schwierigen Gefuehlen",
        "R - Recognize (Erkenne): Was fuehle ich gerade?\n"
        "A - Allow (Erlaube): Ich erlaube diesem Gefuehl, da zu sein.\n"
        "I - Investigate (Untersuche): Wo spuere ich es im Koerper? Wie stark ist es?\n"
        "N - Non-identification (Nicht-identifizieren): Ich BIN nicht die Angst. "
        "Ich HABE gerade Angst. Das ist ein Unterschied.")

    add_praxisbox(doc, "Uebung 5: Drei gute Dinge",
        "Jeden Abend vor dem Einschlafen: Nenne drei gute Dinge, die heute "
        "passiert sind. Es muessen keine grossen Dinge sein. Ein gutes "
        "Mittagessen. Ein Laecheln. Sonnenschein.\n\n"
        "Warum es wirkt: Es trainiert das Gehirn, nach dem Positiven zu suchen. "
        "Nach 2-3 Wochen spueren die meisten Menschen einen Unterschied.")

    # =====================================================================
    # 4.8 STAERKENORIENTIERUNG
    # =====================================================================
    doc.add_heading('4.8 Staerken- und Ressourcenorientierung', level=2)

    doc.add_paragraph(
        "Ressourcenorientierung bedeutet: Wir suchen nicht nur nach dem, was FEHLT, "
        "sondern auch nach dem, was DA IST. Jeder Jugendliche hat Staerken, "
        "Kompetenzen und Ressourcen - auch wenn er oder sie das nicht sehen kann.")

    doc.add_heading('Staerkenexploration - Fragen', level=3)
    add_bullet_list(doc, [
        "Was kannst du besonders gut? (Auch Dinge, die in der Schule nicht zaehlen!)",
        "Was wuerde dein bester Freund sagen, was er an dir schaetzt?",
        "Wann hast du das letzte Mal etwas geschafft, auf das du stolz warst?",
        "Was machst du in deiner Freizeit gerne?",
        "Worueber kannst du stundenlang reden?",
        "Was wuerden Leute, die dich moegen, ueber dich sagen?",
        "Wenn du eine Superkraft haettest - welche waere es? (Die Antwort verraet die Sehnsucht!)",
        "Was hast du aus schwierigen Erfahrungen gelernt?",
        "Wofuer bist du dankbar?"
    ])

    doc.add_heading('VIA-Charakterstaerken: Ueberblick', level=3)
    add_table(doc,
        ["Kategorie", "Staerken"],
        [
            ["Weisheit und Wissen", "Kreativitaet, Neugier, Urteilskraft, Lernfreude, Weitsicht"],
            ["Mut", "Tapferkeit, Ausdauer, Ehrlichkeit, Enthusiasmus"],
            ["Menschlichkeit", "Liebe, Freundlichkeit, Soziale Intelligenz"],
            ["Gerechtigkeit", "Teamwork, Fairness, Fuehrung"],
            ["Maessigung", "Vergebung, Bescheidenheit, Besonnenheit, Selbstregulation"],
            ["Transzendenz", "Sinn fuer Schoenheit, Dankbarkeit, Hoffnung, Humor, Spiritualitaet"]
        ])

    # =====================================================================
    # 4.9 SICHERHEITSPLANUNG
    # =====================================================================
    doc.add_heading('4.9 Sicherheitsplanung bei Suizidalitaet', level=2)

    add_important_box(doc,
        "Der Sicherheitsplan nach Stanley und Brown (2012) ist KEIN Anti-Suizid-Vertrag! "
        "Anti-Suizid-Vertraege sind wirkungslos und koennten sogar schaedlich sein. "
        "Der Sicherheitsplan ist ein aktives, konkretes Werkzeug fuer die Krise.")

    doc.add_heading('Sicherheitsplan - Vorlage', level=3)

    doc.add_paragraph("SCHRITT 1: Warnsignale erkennen")
    doc.add_paragraph(
        "Welche Gedanken, Gefuehle, Situationen zeigen mir, dass eine Krise kommt?")
    add_checklist(doc, [
        "Gedanke: _______________",
        "Gefuehl: _______________",
        "Situation: _______________",
        "Koerperliches Zeichen: _______________"
    ])

    doc.add_paragraph("SCHRITT 2: Eigene Bewaeltigungsstrategien")
    doc.add_paragraph(
        "Was kann ich ALLEINE tun, um mich abzulenken oder zu beruhigen?")
    add_checklist(doc, [
        "1. _______________",
        "2. _______________",
        "3. _______________"
    ])

    doc.add_paragraph("SCHRITT 3: Menschen, die ablenken koennen")
    doc.add_paragraph(
        "Mit wem kann ich reden oder etwas unternehmen? (Ohne das Problem zu besprechen)")
    add_checklist(doc, [
        "Name: _______________ Tel: _______________",
        "Name: _______________ Tel: _______________"
    ])

    doc.add_paragraph("SCHRITT 4: Menschen, die helfen koennen")
    doc.add_paragraph(
        "Wen kann ich anrufen, wenn es mir wirklich schlecht geht?")
    add_checklist(doc, [
        "Name: _______________ Tel: _______________",
        "Professionelle Person: _______________ Tel: _______________"
    ])

    doc.add_paragraph("SCHRITT 5: Professionelle Hilfe")
    add_checklist(doc, [
        "Kanner-Jugendtelefon: 116 111",
        "SOS Detresse: 45 45 45",
        "Notarzt/Ambulanz: 112",
        "Mein Therapeut/Berater: _______________ Tel: _______________"
    ])

    doc.add_paragraph("SCHRITT 6: Umgebung sicher machen")
    doc.add_paragraph(
        "Was kann ich tun, um gefaehrliche Mittel aus meiner Umgebung zu entfernen?")
    add_checklist(doc, [
        "Medikamente: _______________",
        "Scharfe Gegenstaende: _______________",
        "Anderes: _______________"
    ])

    add_tip_box(doc,
        "Gehen Sie den Sicherheitsplan GEMEINSAM mit dem Jugendlichen durch. "
        "Ueberpruefen und aktualisieren Sie ihn regelmaessig. Fragen Sie: Hast du "
        "den Plan schon mal benutzt? Was hat funktioniert, was nicht? Der Plan lebt!")
