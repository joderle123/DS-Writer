"""
Kapitel 9: Spezialthemen
"""
from styles import (add_table, add_bullet_list, add_praxisbox, add_dialog,
                    add_redflag, add_important_box, add_tip_box, add_section_intro,
                    add_checklist, add_flowchart, add_numbered_list)


def add_chapter9(doc):
    """Kapitel 9: Spezialthemen"""

    doc.add_heading('KAPITEL 9: SPEZIALTHEMEN', level=1)

    add_section_intro(doc,
        "Dieses Kapitel behandelt Themen, die in der Arbeit mit Jugendlichen am CDSE "
        "zunehmend an Bedeutung gewinnen. Von digitalen Welten ueber Radikalisierung bis hin "
        "zu Hochbegabung, Psychosomatik und Trauer - diese Bereiche erfordern spezifisches "
        "Wissen und sensible Gespraechsfuehrung.")

    # =====================================================================
    # 9.1 SOCIAL MEDIA, GAMING UND DIGITALE WELTEN
    # =====================================================================
    doc.add_heading('9.1 Social Media, Gaming und digitale Welten', level=2)

    doc.add_paragraph(
        "Digitale Medien sind fuer Jugendliche kein Zusatz - sie sind ein integraler "
        "Bestandteil ihres sozialen Lebens, ihrer Identitaetsbildung und ihrer "
        "Kommunikation. Als Psychologe am CDSE muessen Sie diese Welten verstehen, "
        "ohne zu moralisieren. Nur wer die Plattformen kennt, kann glaubwuerdig mit "
        "Jugendlichen darueber sprechen.")

    # --- Platform profiles table ---
    doc.add_heading('Plattform-Steckbriefe', level=3)

    add_table(doc,
        ["Plattform", "Nutzung", "Risiken", "Gespraechseinstiege"],
        [
            ["TikTok",
             "Kurzvideos (15s-10min), algorithmisch kuratierter Feed, "
             "Challenges, Trends, Duette. Hauptzielgruppe: 13-24 Jahre.",
             "Suchtpotenzial durch endloses Scrollen, gefaehrliche Challenges, "
             "sexualisierte Inhalte, Koerperbild-Verzerrung durch Filter, "
             "Datenschutzprobleme, Desinformation.",
             "\"Was sind gerade deine Lieblings-Creators auf TikTok?\" / "
             "\"Hast du schon mal eine Challenge mitgemacht?\" / "
             "\"Wie lange scrollst du so am Tag?\""],
            ["Instagram",
             "Fotos, Stories, Reels, Messaging, Shopping. "
             "Hauptzielgruppe: 14-30 Jahre. Stark visuell orientiert.",
             "Koerperbildprobleme durch bearbeitete Bilder, sozialer Vergleich, "
             "FOMO (Fear of Missing Out), Cybermobbing, Influencer-Kultur "
             "mit unrealistischen Standards, Fake-Profile.",
             "\"Wem folgst du auf Instagram?\" / "
             "\"Postest du selbst oder schaust du eher?\" / "
             "\"Wie fuehlst du dich, wenn du durch Instagram scrollst?\""],
            ["Snapchat",
             "Verschwindende Nachrichten und Bilder, Stories, Snap Map "
             "(Standort-Sharing). Hauptzielgruppe: 13-24 Jahre.",
             "Sexting (Illusion des Verschwindens - Screenshots sind moeglich!), "
             "Standort-Tracking durch Snap Map, Streaks erzeugen sozialen Druck, "
             "Grooming durch Fremde.",
             "\"Nutzt du Snap Map? Wer kann deinen Standort sehen?\" / "
             "\"Wie wichtig sind dir deine Streaks?\" / "
             "\"Hat dir schon mal jemand Fremdes geschrieben?\""],
            ["YouTube",
             "Videos aller Art, Kommentare, Livestreams, Shorts. "
             "Alle Altersgruppen. Zweitgroesste Suchmaschine der Welt.",
             "Algorithmus-Radikalisierung (Empfehlungen werden immer extremer), "
             "Fehlinformation, unangemessene Inhalte, exzessive Nutzungszeit, "
             "parasoziale Beziehungen zu YouTubern.",
             "\"Was schaust du auf YouTube?\" / "
             "\"Gibt es YouTuber, die du regelmaessig verfolgst?\" / "
             "\"Wie lange schaust du so am Stueck?\""],
            ["Discord",
             "Gruppenchats (Server), Voice-Channels, Communities. "
             "Hauptzielgruppe: 14-30 Jahre. Urspruenglich Gaming, jetzt breiter.",
             "Unmoderierte Server mit extremistischen oder sexuellen Inhalten, "
             "Grooming durch Anonymitaet, Kontakt mit Fremden, "
             "schwer fuer Eltern zu ueberblicken.",
             "\"Auf welchen Discord-Servern bist du?\" / "
             "\"Kennst du alle Leute dort persoenlich?\" / "
             "\"Was passiert so auf euren Servern?\""],
            ["BeReal",
             "Taegliches Foto zu zufaelligem Zeitpunkt, zeigt Front- und "
             "Rueckkamera gleichzeitig. Hauptzielgruppe: 16-25 Jahre. "
             "Konzept: Authentizitaet statt Perfektion.",
             "Sozialer Druck zur staendigen Erreichbarkeit, "
             "auch vermeintliche Authentizitaet kann inszeniert werden, "
             "relativ risikoarm im Vergleich zu anderen Plattformen.",
             "\"Nutzt du BeReal? Wie findest du das Konzept?\" / "
             "\"Fuehlt sich das authentischer an als Instagram?\" / "
             "\"Stresst dich die Benachrichtigung?\""],
            ["WhatsApp",
             "Messaging, Gruppenchats, Sprachnachrichten, Status. "
             "Alle Altersgruppen. In Luxemburg die Haupt-Kommunikationsplattform.",
             "Cybermobbing in Klassengruppen, Verbreitung von Nacktbildern, "
             "Kettenbriefe und Angstmacherei, "
             "Gruppendruck (wer ist in der Gruppe, wer nicht), "
             "staendige Erreichbarkeit.",
             "\"Wie viele Gruppenchats hast du?\" / "
             "\"Gibt es manchmal Stress in euren WhatsApp-Gruppen?\" / "
             "\"Wirst du nachts auch noch von Nachrichten geweckt?\""]
        ],
        col_widths=[3.0, 5.0, 5.0, 5.0])

    # --- Gaming: Healthy vs. Problematic ---
    doc.add_heading('Gaming: Gesund oder problematisch?', level=3)

    doc.add_paragraph(
        "Gaming ist fuer viele Jugendliche ein wichtiges Hobby und kann soziale "
        "Kompetenzen, strategisches Denken und Teamfaehigkeit foerdern. Problematisch "
        "wird es erst, wenn das Spielen andere Lebensbereiche verdraengt. Die ICD-11 "
        "definiert Gaming Disorder als anhaltendes Muster mit Kontrollverlust, "
        "zunehmender Prioritaet des Spielens und Fortfuehrung trotz negativer Konsequenzen "
        "ueber mindestens 12 Monate.")

    add_table(doc,
        ["Gesundes Gaming", "Problematisches Gaming"],
        [
            ["Spielt mit Freunden, soziale Interaktion",
             "Spielt zunehmend isoliert, meidet reale Kontakte"],
            ["Hoert auf, wenn andere Pflichten rufen",
             "Kann nicht aufhoeren trotz negativer Konsequenzen"],
            ["Hat vielfaeltige Hobbys und Interessen",
             "Gaming ist das einzige Interesse"],
            ["Schlaeft ausreichend",
             "Spielt bis tief in die Nacht, chronischer Schlafmangel"],
            ["Schulleistung bleibt stabil",
             "Schulleistung faellt deutlich ab"],
            ["Emotionale Regulation vorhanden",
             "Extreme Wut oder Aggression bei Spielunterbrechung"],
            ["Ehrlich ueber Spielzeit",
             "Luegt ueber Spielzeit, spielt heimlich"],
            ["Isst und trinkt regelmaessig",
             "Vergisst Mahlzeiten, vernachlaessigt Koerperhygiene"],
            ["Freut sich auch ueber andere Aktivitaeten",
             "Zeigt kein Interesse an Aktivitaeten ausserhalb des Spielens"]
        ],
        col_widths=[8.5, 8.5])

    # --- Dialog script for digital media use ---
    doc.add_heading('Gespraechsleitfaden: Digitale Mediennutzung', level=3)

    doc.add_paragraph(
        "Das folgende Gespraech zeigt, wie Sie ohne Moralisierung mit einem "
        "Jugendlichen ueber seine Mediennutzung sprechen koennen. "
        "Ziel ist Verstaendnis, nicht Verurteilung.")

    add_dialog(doc, [
        ("Psychologe",
         "Erzaehl mir mal, was du so online machst. "
         "Was sind gerade deine Lieblings-Apps oder -Spiele?"),
        ("Jugendlicher",
         "Hauptsaechlich TikTok und Valorant. Valorant zocke ich jeden Tag so 4-5 Stunden."),
        ("Psychologe",
         "4-5 Stunden - das ist eine Menge Zeit. Was gibt dir das Spielen? "
         "Was macht Valorant fuer dich besonders?"),
        ("Jugendlicher",
         "Da bin ich richtig gut. Die Leute in meinem Team respektieren mich. "
         "Ich bin da wer."),
        ("Psychologe",
         "Respekt und das Gefuehl, kompetent zu sein - das sind wichtige Beduerfnisse. "
         "Wo in deinem Alltag ausserhalb des Spiels erlebst du das auch?"),
        ("Jugendlicher",
         "(ueberlegt lange) Eigentlich nirgends. In der Schule bin ich der Loser."),
        ("Psychologe",
         "Das ist eine sehr ehrliche Antwort. Ich hoere da zwei Dinge: Im Spiel fuehlst "
         "du dich stark und respektiert, in der Schule das Gegenteil. Stimmt das so?"),
        ("Jugendlicher",
         "Ja, genau. Deswegen zocke ich ja so viel."),
        ("Psychologe",
         "Das macht total Sinn. Wenn jemand nur an einem Ort Respekt bekommt, geht er "
         "natuerlich immer wieder dorthin. Die Frage ist: Koennten wir zusammen ueberlegen, "
         "wie du auch ausserhalb des Spiels dieses Gefuehl erleben kannst? "
         "Nicht statt Gaming - sondern zusaetzlich?"),
        ("Jugendlicher",
         "Hm, vielleicht. Aber ich weiss nicht wie."),
        ("Psychologe",
         "Das ist okay. Dafuer bin ich hier. Lass uns naechstes Mal darueber sprechen, "
         "was du gut kannst - auch im echten Leben. Ich wette, da gibt es mehr, als du denkst.")
    ])

    # --- Warning signs checklist ---
    doc.add_heading('Warnzeichen: Problematische Mediennutzung', level=3)

    doc.add_paragraph(
        "Nutzen Sie die folgende Checkliste, um problematische Mediennutzung "
        "systematisch zu erfassen. Je mehr Punkte zutreffen, desto dringender "
        "ist ein vertieftes Gespraech oder eine Weiterleitung.")

    add_checklist(doc, [
        "Nutzungszeit hat sich in den letzten Monaten deutlich erhoeht",
        "Jugendlicher wird unruhig, gereizt oder aggressiv, wenn er nicht online sein kann",
        "Schlafrhythmus ist gestoert (spielt/scrollt bis tief in die Nacht)",
        "Schulleistungen haben sich verschlechtert",
        "Frueheren Hobbys und Interessen wird nicht mehr nachgegangen",
        "Reale Freundschaften werden vernachlaessigt oder aufgegeben",
        "Koerperhygiene und Ernaehrung werden vernachlaessigt",
        "Jugendlicher luegt ueber Nutzungszeit oder versteckt sein Nutzungsverhalten",
        "Gescheiterter Versuch, die Nutzung zu reduzieren",
        "Nutzung dient primaer der Flucht vor negativen Gefuehlen",
        "Geldausgaben fuer In-App-Kaeufe, Lootboxen oder Abos",
        "Koerperliche Symptome (Augenprobleme, Rueckenschmerzen, Kopfschmerzen)",
        "Jugendlicher zeigt Entzugssymptome (Angst, Reizbarkeit) bei erzwungener Pause",
        "Konflikte mit Eltern oder Lehrern wegen Mediennutzung haeufen sich",
        "Jugendlicher nutzt Medien waehrend des Unterrichts heimlich"
    ])

    add_tip_box(doc,
        "Vermeiden Sie den Begriff \"Sucht\" im Gespraech mit Jugendlichen und Eltern. "
        "Sprechen Sie stattdessen von \"problematischer Nutzung\" oder \"ungluecklicher "
        "Gewohnheit\". Das reduziert Abwehr und oeffnet den Dialog.")

    # =====================================================================
    # 9.2 RADIKALISIERUNG UND EXTREMISMUS
    # =====================================================================
    doc.add_heading('9.2 Radikalisierung und Extremismus', level=2)

    doc.add_paragraph(
        "Radikalisierung ist ein Prozess, kein Ereignis. Jugendliche radikalisieren "
        "sich nicht ueber Nacht. Als Psychologe am CDSE koennen Sie fruehe Warnsignale "
        "erkennen und praeventiv handeln. Wichtig: Radikalisierung betrifft ALLE "
        "Formen von Extremismus - islamistisch, rechtsextrem, linksextrem, "
        "Verschwoerungsideologien und andere.")

    # --- Warning signs table ---
    doc.add_heading('Warnsignale der Radikalisierung', level=3)

    add_table(doc,
        ["Bereich", "Warnsignale", "Beispiele"],
        [
            ["Verhaltensaenderungen",
             "Ploetzlicher Bruch mit bisherigem Lebensstil, "
             "drastische Veraenderung von Aussehen oder Kleidung, "
             "Konsum neuer Medieninhalte, veraenderter Sprachgebrauch",
             "Jugendlicher traegt ploetzlich nur noch bestimmte Kleidung oder Symbole; "
             "nutzt Begriffe aus extremistischer Szene; "
             "hoert bestimmte Musik oder schaut neue Channels"],
            ["Soziale Veraenderungen",
             "Rueckzug aus bisherigem Freundeskreis, neuer exklusiver Freundeskreis, "
             "Abbruch von Beziehungen zu Andersdenkenden, "
             "Geheimhaltung ueber neue Kontakte",
             "Frueherer bester Freund wird ploetzlich gemieden; "
             "neue Freunde, die niemand kennt; "
             "konspirative Kommunikation; Treffen an unbekannten Orten"],
            ["Ideologische Zeichen",
             "Schwarz-Weiss-Denken, Einteilung in Gut und Boese, "
             "dehumanisierende Sprache ueber bestimmte Gruppen, "
             "Verherrlichung von Gewalt oder Maertyrertum, "
             "Verehrung extremistischer Figuren",
             "\"Die sind alle gleich\" / \"Volksverraeter\" / \"Unglaeubiige\"; "
             "Teilen extremistischer Memes oder Videos; "
             "Rechtfertigung von Gewalt als \"notwendig\"; "
             "Poster oder Bilder von extremistischen Fuehrern"]
        ],
        col_widths=[3.5, 6.5, 7.0])

    # --- Intervention steps flowchart ---
    doc.add_heading('Interventions-Flowchart', level=3)

    doc.add_paragraph(
        "Folgen Sie diesem Entscheidungsbaum, wenn Sie Verdacht auf "
        "Radikalisierung bei einem Jugendlichen haben:")

    add_flowchart(doc, [
        "Warnsignale beobachtet - Dokumentation beginnen",
        ("Besteht eine akute Bedrohung fuer den Jugendlichen oder andere?",
         "Sofort Police Grand-Ducale (113) kontaktieren und Schulleitung informieren",
         "Weiter mit naechstem Schritt"),
        "Kollegiale Beratung: Beobachtungen mit Vertrauenskollegen teilen (anonymisiert)",
        "Gespraech mit dem Jugendlichen suchen - offen, nicht konfrontativ, nicht moralisierend",
        ("Zeigt der Jugendliche Bereitschaft zum Dialog?",
         "Regelmaessige Gespraeche vereinbaren, Beziehung staerken, alternative Angebote machen",
         "Eltern einbeziehen (sofern keine Gefaehrdung durch Eltern), RESPECT.lu kontaktieren"),
        "Externe Fachberatung hinzuziehen: RESPECT.lu (8002 1234)",
        ("Fortschreitende Radikalisierung trotz Intervention?",
         "Meldung an zustaendige Behoerden, engmaschige Begleitung, Fallkonferenz einberufen",
         "Praeventive Begleitung fortsetzen, regelmaessige Neubewertung der Situation"),
        "Langfristige Nachbegleitung und Dokumentation sicherstellen"
    ])

    # --- Luxembourg-specific contacts ---
    doc.add_heading('Anlaufstellen in Luxemburg', level=3)

    add_table(doc,
        ["Institution", "Kontakt", "Zustaendigkeit"],
        [
            ["RESPECT.lu (BEE SECURE)",
             "Tel: 8002 1234 / www.respect.lu",
             "Radikalisierungspraevention, Beratung fuer Betroffene und Umfeld, "
             "erste Anlaufstelle bei Verdacht"],
            ["Police Grand-Ducale",
             "Tel: 113 (Notfall) / Tel: 244-40 1000",
             "Bei konkreter Bedrohung oder Verdacht auf strafbare Handlungen"],
            ["BEE SECURE Helpline",
             "Tel: 8002 1234",
             "Online-Radikalisierung, extremistische Inhalte melden, "
             "Beratung fuer Eltern und Fachkraefte"],
            ["BEE SECURE Stopline",
             "www.stopline.bee-secure.lu",
             "Anonyme Meldung von illegalen Online-Inhalten "
             "(Hassrede, extremistische Propaganda)"],
            ["Service de la Jeunesse",
             "Tel: +352 247-86464",
             "Praevention und Jugendschutz, Foerderprogramme"],
            ["Centre de Mediation",
             "Tel: +352 27 48 34",
             "Mediation bei Konflikten, interkulturelle Vermittlung"]
        ],
        col_widths=[4.5, 4.5, 8.0])

    # --- Important box about reporting obligations ---
    add_important_box(doc,
        "MELDEPFLICHT: Als Psychologe am CDSE haben Sie eine Verantwortung, bei "
        "konkretem Verdacht auf Radikalisierung zu handeln. Bei akuter Bedrohung "
        "(z.B. Ankuendigung einer Gewalttat, Besitz von Waffen, Reiseplaene in "
        "Krisengebiete) muessen Sie SOFORT die Polizei (113) und die Schulleitung "
        "informieren. Die Schweigepflicht tritt hinter den Schutz von Menschenleben "
        "zurueck. Dokumentieren Sie Ihre Beobachtungen sorgfaeltig. Im Zweifelsfall: "
        "RESPECT.lu (8002 1234) kontaktieren - auch anonym moeglich.")

    # =====================================================================
    # 9.3 HOCHBEGABUNG UND UNDERACHIEVEMENT
    # =====================================================================
    doc.add_heading('9.3 Hochbegabung und Underachievement', level=2)

    doc.add_paragraph(
        "Hochbegabung (IQ ab 130, ca. 2% der Bevoelkerung) ist kein Garant fuer "
        "schulischen Erfolg. Viele hochbegabte Jugendliche fallen gerade NICHT durch "
        "Hoechstleistungen auf, sondern durch Langeweile, Verhaltensauffaelligkeiten "
        "oder raetselhaft schlechte Noten. Als Psychologe am CDSE begegnen Ihnen "
        "diese Jugendlichen haeufiger, als Sie denken - oft mit der falschen Etikette.")

    # --- Characteristics table ---
    doc.add_heading('Merkmale hochbegabter Jugendlicher', level=3)

    add_table(doc,
        ["Bereich", "Typische Merkmale", "Moegliche Fehlinterpretation"],
        [
            ["Intellektuell",
             "Schnelle Auffassungsgabe, komplexes und vernetztes Denken, "
             "kritische und hinterfragende Haltung, unstillbarer Wissenshunger, "
             "Vorliebe fuer abstrakte Themen, fruehes Interesse an Gerechtigkeit "
             "und existenziellen Fragen",
             "Wird als \"altklug\", \"besserwisserisch\" oder \"respektlos\" "
             "wahrgenommen, wenn er/sie Lehrer korrigiert oder Aufgaben "
             "als zu einfach ablehnt"],
            ["Emotional",
             "Hohe Sensibilitaet und Intensitaet der Emotionen (Dabrowskis "
             "Ueberanregbarkeiten), tiefes Gerechtigkeitsempfinden, "
             "Perfektionismus, existenzielle Aengste, Frustration bei "
             "Unterforderung, starke Empathie",
             "Wird als \"ueberempfindlich\", \"dramatisch\" oder \"emotional "
             "instabil\" missverstanden; Perfektionismus wird als Stoerung "
             "statt als Merkmal gesehen"],
            ["Sozial",
             "Sucht geistig Gleichgestellte (oft aeltere Jugendliche oder "
             "Erwachsene), kann sich mit Gleichaltrigen langweilen, "
             "starkes Beduerfnis nach tiefgruendigen Gespraechen, "
             "kann sich bewusst anpassen (Camouflage)",
             "Wird als \"arrogant\", \"sozial inkompetent\" oder "
             "\"Einzelgaenger\" fehlgedeutet; Anpassung wird als "
             "\"normal\" interpretiert und Begabung bleibt unerkannt"]
        ],
        col_widths=[3.0, 7.5, 6.5])

    # --- Underachievement causes and signs ---
    doc.add_heading('Underachievement: Ursachen und Anzeichen', level=3)

    doc.add_paragraph(
        "Underachievement bedeutet eine signifikante Diskrepanz zwischen dem "
        "intellektuellen Potenzial und der tatsaechlichen schulischen Leistung. "
        "Schaetzungen zufolge betrifft dies 15-50% aller hochbegabten Jugendlichen.")

    add_table(doc,
        ["Ursachen fuer Underachievement", "Anzeichen im Schulalltag"],
        [
            ["Chronische Unterforderung: Der Jugendliche hat nie gelernt zu lernen",
             "Gute muendliche Leistungen, schlechte schriftliche Arbeiten"],
            ["Fehlende Lernstrategien: Alles flog bisher zu - bis es nicht mehr reicht",
             "Verweigerung von Hausaufgaben als \"sinnlos\" oder \"langweilig\""],
            ["Perfektionismus: Lieber gar nicht abgeben als etwas Unperfektes",
             "Angefangene Projekte werden nicht beendet"],
            ["Soziale Anpassung: Absichtliches Herunterspielen der Faehigkeiten",
             "Bewusste Fehler, um nicht aufzufallen oder gehaeuftes \"weiss ich nicht\""],
            ["Emotionale Ueberlastung: Sensibilitaet fuehrt zu Erschoepfung",
             "Haeufiges Fehlen, psychosomatische Beschwerden"],
            ["Fehldiagnose: ADHS, Autismus oder Verhaltensauffaelligkeit als Etikett",
             "Behandlung der \"Stoerung\" ohne Beruecksichtigung der Begabung"],
            ["Konflikte mit Autoritaeten: Hinterfragt Regeln und Aufgaben",
             "Disziplinarische Probleme, \"schwieriger Schueler\""],
            ["Twice Exceptional: Hochbegabung plus Lernschwierigkeit oder ADHS",
             "Durchschnittliche Leistungen, die weder Begabung noch Schwierigkeit zeigen"]
        ],
        col_widths=[8.5, 8.5])

    # --- Support strategies bullet list ---
    doc.add_heading('Unterstuetzungsstrategien', level=3)

    add_bullet_list(doc, [
        "Begabungsdiagnostik anregen: IQ-Test durch qualifizierten Psychologen "
        "(z.B. WISC-V oder WAIS-IV) als Grundlage fuer Foerderung empfehlen",
        "Enrichment statt nur Akzeleration: Nicht nur Klasse ueberspringen, "
        "sondern Vertiefung und Erweiterung des Lernstoffs anbieten",
        "Lernstrategien explizit vermitteln: Hochbegabte muessen oft erst lernen, "
        "wie man lernt - das ist keine Selbstverstaendlichkeit",
        "Peer-Gruppen ermoeglichen: Kontakt zu anderen hochbegabten Jugendlichen "
        "(z.B. ueber Enrichment-Programme oder Wettbewerbe)",
        "Perfektionismus bearbeiten: Unterschied zwischen gesundem Streben und "
        "laehmendem Perfektionismus thematisieren",
        "Staerken in den Vordergrund stellen: Nicht nur Defizite beheben, sondern "
        "Talente und Interessen foerdern und wertschaetzen",
        "Elternberatung: Eltern ueber Hochbegabung aufklaeren und unrealistische "
        "Erwartungen (in beide Richtungen) bearbeiten",
        "Lehrerkooperation: Lehrer fuer differenzierten Unterricht sensibilisieren "
        "und konkrete Strategien vorschlagen",
        "Emotionale Begleitung: Hochbegabte Jugendliche brauchen einen Raum, "
        "in dem ihre Intensitaet und Sensibilitaet akzeptiert werden",
        "Mentoring: Kontakt zu Erwachsenen herstellen, die aehnliche Erfahrungen "
        "gemacht haben und als Rollenvorbilder dienen koennen"
    ])

    # --- Dialog with gifted underachiever ---
    doc.add_heading('Gespraechsbeispiel: Hochbegabter Underachiever', level=3)

    add_dialog(doc, [
        ("Psychologe",
         "Deine Lehrer sagen, du koenntest so viel mehr. Wie siehst du das selbst?"),
        ("Jugendlicher",
         "Die haben keine Ahnung. Der Unterricht ist einfach stinklangweilig."),
        ("Psychologe",
         "Was genau langweilt dich? Kannst du mir ein Beispiel geben?"),
        ("Jugendlicher",
         "Na ja, in Mathe wiederholen wir seit drei Wochen das Gleiche. "
         "Ich hab das beim ersten Mal verstanden. Warum soll ich das zehnmal ueben?"),
        ("Psychologe",
         "Ich verstehe die Frustration. Du begreifst schnell, und dann "
         "wird es zaeh. Was machst du dann im Unterricht?"),
        ("Jugendlicher",
         "Nichts. Ich schalte ab. Oder ich stoere, weil mir langweilig ist. "
         "Dann kriege ich Aerger."),
        ("Psychologe",
         "Also: Du langweilst dich, stoerst, kriegst Aerger - und dann "
         "denken alle, du bist ein schlechter Schueler. Obwohl du den Stoff "
         "eigentlich beherrschst. Das ist wie ein Teufelskreis, oder?"),
        ("Jugendlicher",
         "Ja, genau! Und dann sagen meine Eltern: Du bist so klug, warum "
         "strengst du dich nicht an? Das nervt mich total."),
        ("Psychologe",
         "\"Streng dich an\" hilft nicht, wenn das Problem nicht Faulheit ist, "
         "sondern Unterforderung. Darf ich dir einen Vorschlag machen? "
         "Wir koennten zusammen schauen, was dich wirklich herausfordert - "
         "und dann mit deinen Lehrern besprechen, wie man das in den "
         "Schulalltag einbauen kann."),
        ("Jugendlicher",
         "Geht das ueberhaupt?"),
        ("Psychologe",
         "Es gibt Moeglichkeiten. Enrichment-Projekte, Wettbewerbe, "
         "anspruchsvollere Aufgaben. Aber zuerst moechte ich besser verstehen, "
         "was dich antreibt und wo du hin willst. Was interessiert dich wirklich?")
    ])

    add_tip_box(doc,
        "Hochbegabte Jugendliche durchschauen unechtes Interesse sofort. "
        "Seien Sie authentisch neugierig. Sprechen Sie mit ihnen auf Augenhoehe - "
        "sie bemerken, wenn Sie \"nach unten\" kommunizieren. Und: Vermeiden Sie "
        "den Satz \"Du bist doch so klug\" - er erzeugt Druck, keine Motivation.")

    # =====================================================================
    # 9.4 PSYCHOSOMATIK BEI JUGENDLICHEN
    # =====================================================================
    doc.add_heading('9.4 Psychosomatik bei Jugendlichen', level=2)

    add_important_box(doc,
        "Regel Nr. 1: IMMER erst medizinische Ursachen ausschliessen lassen. "
        "Psychosomatik ist eine AUSSCHLUSSDIAGNOSE. Schicken Sie den Jugendlichen "
        "zum Arzt, bevor Sie ueber psychische Ursachen sprechen. Nichts untergaebt "
        "Ihr Vertrauen schneller als ein uebersehenes koerperliches Problem.")

    doc.add_paragraph(
        "Jugendliche druecken psychischen Schmerz haeufig ueber den Koerper aus. "
        "Sie sagen nicht \"Ich habe Angst\", sondern \"Mir tut der Bauch weh\". "
        "Das ist kein Simulieren - der Koerper schmerzt tatsaechlich. "
        "Psychosomatische Beschwerden sind bei Jugendlichen sehr verbreitet: "
        "Studien zeigen, dass bis zu 25% aller Jugendlichen wiederkehrende "
        "koerperliche Beschwerden ohne ausreichende medizinische Erklaerung haben.")

    # --- Common psychosomatic symptoms table (10 symptoms) ---
    doc.add_heading('Haeufige psychosomatische Symptome', level=3)

    add_table(doc,
        ["Symptom", "Koerperliche Indikatoren", "Psychische Indikatoren",
         "Gespraechseinstieg"],
        [
            ["Kopfschmerzen (chronisch)",
             "Spannungskopfschmerz, oft nachmittags oder abends, "
             "bilateral, drueckend, kein Erbrechen",
             "Leistungsdruck, Perfektionismus, Anspannung, Gruebeln, "
             "Ueberforderung, chronischer Stress",
             "\"Wann genau kommen die Kopfschmerzen? Was passiert vorher? "
             "Was denkst du gerade, wenn sie anfangen?\""],
            ["Bauchschmerzen",
             "Diffuser Schmerz, oft morgens vor der Schule, "
             "wechselnde Lokalisation, keine organische Ursache",
             "Angst (das \"Bauchgefuehl\"), Trennungsangst, Schulangst, "
             "Stress, Konflikte in der Familie",
             "\"Dein Bauch reagiert auf etwas. Wenn dein Bauch sprechen "
             "koennte, was wuerde er sagen?\""],
            ["Rueckenschmerzen",
             "Verspannungen im Schulter-Nacken-Bereich, "
             "kein struktureller Befund, Schmerzen bei Belastung",
             "Chronischer Stress, emotionale Last, "
             "zu viel Verantwortung, Haltungsprobleme durch Rueckzug",
             "\"Was lastet gerade auf deinen Schultern? "
             "Wer oder was ist gerade zu schwer fuer dich?\""],
            ["Schwindel",
             "Unsystematischer Schwindel, kein Drehschwindel, "
             "oft situationsabhaengig, Benommenheit",
             "Dissoziation, Hyperventilation bei Angst, "
             "Ueberforderung, Orientierungslosigkeit im Leben",
             "\"Wie fuehlt sich der Schwindel an? Kommt die Welt ins "
             "Schwanken oder du selbst? Wann passiert es besonders?\""],
            ["Chronische Muedigkeit",
             "Staendige Erschoepfung trotz ausreichend Schlaf, "
             "Antriebslosigkeit, Konzentrationsprobleme",
             "Depression, Ueberforderung, emotionale Erschoepfung, "
             "Schlafqualitaet durch Gruebeln gestoert",
             "\"Bist du muede, obwohl du genug geschlafen hast? "
             "Oder ist es eher so eine innere Leere?\""],
            ["Uebelkeit",
             "Morgendliche Uebelkeit, situationsabhaengig, "
             "kein Erbrechen, appetitlos",
             "Pruefungsangst, soziale Angst, Ekel vor Situationen, "
             "Vermeidungsverhalten als Koerperreaktion",
             "\"Gibt es bestimmte Situationen, in denen dir besonders "
             "uebel wird? Was steht dann gerade an?\""],
            ["Brustschmerzen / Herzrasen",
             "Stechende Schmerzen, Herzrasen ohne kardiale Ursache, "
             "Engegefuehl in der Brust, Atemnot",
             "Panikattacken, Angstsyndrom, PTBS, "
             "chronische Anspannung, Hyperventilation",
             "\"Was geht dir durch den Kopf, wenn dein Herz so schnell "
             "schlaegt? Hast du dann auch Angstgedanken?\""],
            ["Hautprobleme",
             "Neurodermitis-Schuebe, Nesselsucht, Haarausfall, "
             "Akne-Verschlechterung ohne hormonelle Ursache",
             "Stress-Verschlechterung, Selbstwertprobleme, "
             "emotionale Anspannung, Schamgefuehle",
             "\"Faellt dir auf, dass deine Haut in bestimmten Phasen "
             "schlechter wird? Was passiert dann in deinem Leben?\""],
            ["Schlafprobleme",
             "Einschlafprobleme, Durchschlafprobleme, Albtraeume, "
             "Naechtliches Aufwachen, Frueherwachen",
             "Gruebeln, Angst, Depression, Trauma, "
             "Medienkonsum vor dem Schlafen, Sorgen",
             "\"Was passiert, wenn du abends im Bett liegst? "
             "Welche Gedanken kommen dann? Wann hat das angefangen?\""],
            ["Appetitveraenderungen",
             "Deutlicher Appetitverlust oder Stressessen, "
             "Gewichtsveraenderung ohne medizinische Ursache",
             "Depression, Kontrollbeduerfnis, Trauer, Stress, "
             "beginnende Essproblematik, emotionales Essen",
             "\"Hat sich dein Hunger in letzter Zeit veraendert? "
             "Isst du mehr oder weniger als frueher? Was koennte das ausloesen?\""]
        ],
        col_widths=[3.0, 4.5, 4.5, 5.0])

    # --- Red flags for referral ---
    doc.add_heading('Red Flags: Wann weiterleiten?', level=3)

    doc.add_paragraph(
        "Nicht jede psychosomatische Beschwerde erfordert eine sofortige "
        "Ueberweisung. Folgende Zeichen sprechen jedoch dafuer, dass eine "
        "vertiefte medizinische und/oder psychotherapeutische Abklaerung "
        "notwendig ist:")

    add_redflag(doc,
        "Symptome bestehen seit mehr als 4-6 Wochen ohne Besserung")

    add_redflag(doc,
        "Deutlicher Gewichtsverlust oder Gewichtszunahme (mehr als 5% in einem Monat)")

    add_redflag(doc,
        "Der Jugendliche fehlt regelmaessig in der Schule wegen der Beschwerden")

    add_redflag(doc,
        "Symptome verschlimmern sich trotz Entlastung und Gespraechsangeboten")

    add_redflag(doc,
        "Der Jugendliche zeigt zusaetzlich depressive Symptome oder Suizidalitaet")

    add_redflag(doc,
        "Symptome sind so stark, dass der Alltag erheblich eingeschraenkt ist")

    add_redflag(doc,
        "Verdacht auf koerperliche Misshandlung oder sexuellen Missbrauch als Ursache")

    add_redflag(doc,
        "Symptome treten in Kombination mit Substanzkonsum auf")

    # --- Conversation approaches for somatizing youth ---
    doc.add_heading('Gespraechsansaetze fuer somatisierende Jugendliche', level=3)

    doc.add_paragraph(
        "Das Wichtigste: Nehmen Sie die koerperlichen Beschwerden ERNST. "
        "Sagen Sie niemals \"Das ist nur psychisch\" oder \"Du bildest dir das ein\". "
        "Der Koerper schmerzt tatsaechlich. Der Weg fuehrt UEBER den Koerper ZUR Psyche.")

    add_dialog(doc, [
        ("Psychologe",
         "Ich hoere, dass du wirklich starke Bauchschmerzen hast. Das tut mir leid. "
         "Wie lange geht das schon so?"),
        ("Jugendlicher",
         "Seit ein paar Wochen. Immer morgens, bevor ich in die Schule muss."),
        ("Psychologe",
         "Immer morgens vor der Schule - das ist ein wichtiger Hinweis. "
         "Dein Koerper reagiert auf etwas. Warst du schon beim Arzt?"),
        ("Jugendlicher",
         "Ja, der hat nichts gefunden. Der sagt, es ist psychisch. Aber es tut wirklich weh!"),
        ("Psychologe",
         "Ich glaube dir das. Und dass der Arzt nichts Organisches findet, heisst nicht, "
         "dass der Schmerz nicht echt ist. Dein Koerper hat seine eigene Sprache. "
         "Manchmal drueckt er aus, was wir mit Worten noch nicht sagen koennen."),
        ("Jugendlicher",
         "Was soll denn mein Bauch sagen wollen?"),
        ("Psychologe",
         "Das ist eine gute Frage. Lass uns zusammen ueberlegen. "
         "Wenn dein Bauch sprechen koennte - was wuerde er sagen? "
         "Was passiert morgens vor der Schule?"),
        ("Jugendlicher",
         "(leise) Ich hab Angst, dass die mich wieder fertigmachen."),
        ("Psychologe",
         "Danke, dass du mir das sagst. Dein Bauch hat also Angst - "
         "und die ist berechtigt. Lass uns darueber sprechen, was in der Schule passiert.")
    ])

    add_tip_box(doc,
        "Nutzen Sie bei somatisierenden Jugendlichen koerperorientierte Methoden: "
        "Atemuebungen, Body Scan, Koerperreise. Der Zugang ueber den Koerper ist "
        "oft leichter als direktes Fragen nach Gefuehlen. Fragen Sie: \"Wo im "
        "Koerper spuerst du das?\" statt \"Was fuehlst du?\"")

    # =====================================================================
    # 9.5 TRAUER BEI JUGENDLICHEN
    # =====================================================================
    doc.add_heading('9.5 Trauer bei Jugendlichen', level=2)

    doc.add_paragraph(
        "Jugendliche trauern anders als Erwachsene - und das wird oft missverstanden. "
        "Sie koennen in einem Moment tief traurig sein und im naechsten mit Freunden "
        "lachen. Das ist KEINE Respektlosigkeit oder fehlende Trauer - es ist "
        "intermittierende Trauer: Die Psyche dosiert den Schmerz in ertraegliche "
        "Portionen. Als Psychologe am CDSE muessen Sie diese besonderen Trauerformen "
        "kennen und begleiten koennen.")

    # --- Developmental differences in grief understanding ---
    doc.add_heading('Entwicklungsbedingte Unterschiede im Trauerverstaendnis', level=3)

    add_table(doc,
        ["Altersgruppe", "Verstaendnis von Tod", "Typische Trauerreaktionen",
         "Was sie brauchen"],
        [
            ["10-12 Jahre",
             "Versteht Endgueltigkeit des Todes, beginnt abstrakt "
             "ueber Tod nachzudenken, kann Angst vor eigenem Tod entwickeln",
             "Rueckzug oder Klammern, Schulprobleme, Wut, "
             "somatische Beschwerden, Schuldgefuehle, "
             "Fragen nach dem \"Warum\"",
             "Ehrliche Antworten, Rituale, Erlaubnis zu trauern, "
             "Stabilitaet im Alltag, Geduld bei Wutausbruechen"],
            ["13-15 Jahre",
             "Vollstaendiges Verstaendnis, existenzielle Fragen, "
             "Auseinandersetzung mit eigener Sterblichkeit, "
             "kann Sinnfrage stellen",
             "Intermittierende Trauer (lachen und weinen im Wechsel), "
             "Risikoverhalten, Rueckzug von Erwachsenen, "
             "Suche nach Normalitaet in der Peergroup",
             "Raum fuer Trauer ohne Druck, Peer-Kontakte ermoeglichen, "
             "nicht staendig fragen \"Wie geht es dir?\", "
             "da sein ohne zu draengen"],
            ["16-18 Jahre",
             "Reifes Verstaendnis, kann Trauer reflektieren, "
             "Auseinandersetzung mit Lebenssinn, "
             "Verbindung zum eigenen Lebensentwurf",
             "Tiefe Traurigkeit, Wut auf die Ungerechtigkeit, "
             "Identitaetsfragen (\"Wer bin ich ohne diese Person?\"), "
             "Zukunftsaengste, Substanzkonsum als Bewaeltigungsversuch",
             "Gespraeche auf Augenhoehe, philosophische Fragen zulassen, "
             "praktische Unterstuetzung (z.B. bei Bestattung einbeziehen), "
             "professionelle Trauerbegleitung anbieten"]
        ],
        col_widths=[3.0, 4.5, 5.0, 4.5])

    # --- Normal grief vs complicated grief ---
    doc.add_heading('Normale Trauer vs. Komplizierte Trauer', level=3)

    doc.add_paragraph(
        "Nicht jede Trauer braucht professionelle Hilfe. Es ist wichtig, "
        "normale Trauerreaktionen von komplizierter (prolongierter) Trauer "
        "zu unterscheiden, um weder zu pathologisieren noch ernsthaft "
        "betroffene Jugendliche zu uebersehen.")

    add_table(doc,
        ["Normale Trauer", "Komplizierte (prolongierte) Trauer"],
        [
            ["Schmerz laesst ueber Wochen und Monate langsam nach",
             "Schmerz bleibt unveraendert intensiv ueber 6+ Monate"],
            ["Jugendlicher kann trotz Trauer am Alltag teilnehmen",
             "Jugendlicher kann nicht in den Alltag zurueckfinden"],
            ["Gute und schlechte Tage wechseln sich ab",
             "Ueberwiegend schlechte Tage, kaum Lichtblicke"],
            ["Erinnerungen an den Verstorbenen sind auch positiv",
             "Erinnerungen loesen nur Schmerz, Schuld oder Wut aus"],
            ["Soziale Kontakte werden langsam wieder aufgenommen",
             "Anhaltender Rueckzug von allen sozialen Kontakten"],
            ["Zukunft wird als moeglich gesehen",
             "Zukunft erscheint sinnlos oder undenkbar"],
            ["Schulleistung stabilisiert sich nach einigen Wochen",
             "Schulleistung bleibt dauerhaft eingebrochen"],
            ["Schlaf und Appetit normalisieren sich",
             "Anhaltende Schlaf- und Essprobleme"],
            ["Identitaet bleibt im Kern stabil",
             "Tiefgreifende Identitaetskrise, Sinnverlust"],
            ["Kann Freude an einzelnen Aktivitaeten empfinden",
             "Unfaehigkeit, Freude zu empfinden (Anhedonie)"]
        ],
        col_widths=[8.5, 8.5])

    add_redflag(doc,
        "Komplizierte Trauer: Wenn nach 6+ Monaten keine Besserung eintritt, "
        "der Jugendliche nicht in den Alltag zurueckfindet, intensive Schuldgefuehle "
        "oder Suizidgedanken hat, ueberweisen Sie an Trauerberatung oder Therapeuten. "
        "In Luxemburg: OMEGA 90 (Tel: +352 29 77 89-1)")

    # --- Support methods bullet list ---
    doc.add_heading('Methoden der Trauerbegleitung', level=3)

    add_bullet_list(doc, [
        "Brief an den Verstorbenen: Alles aufschreiben, was ungesagt geblieben ist. "
        "Der Brief muss nicht abgeschickt werden - das Schreiben selbst ist heilsam.",
        "Erinnerungsbox: Eine Box mit Gegenstaenden, Fotos, Erinnerungen fuellen. "
        "Der Jugendliche waehlt aus, was hineinkommt. Gibt dem Verlust einen Ort.",
        "Trauer-Playlist: Songs sammeln, die mit dem Verstorbenen verbunden sind oder "
        "die aktuellen Gefuehle ausdruecken. Musik als Ventil und Verbindung.",
        "Zeitstrahl der Erinnerungen: Gemeinsame Erlebnisse chronologisch aufzeichnen. "
        "Fokus auf schoene Momente. Zeigt, dass die Beziehung nicht weg ist.",
        "Vermaechtnis-Projekt: Was hat der Verstorbene hinterlassen? Was lebe ich in "
        "seinem/ihrem Sinne weiter? Werte, Hobbys, Sprueche als Anker.",
        "Rituale etablieren: Jahrliche Gedenkmomente, ein besonderer Ort, "
        "eine Kerze an besonderen Tagen. Rituale geben der Trauer Struktur.",
        "Kreative Ausdrucksformen: Zeichnen, Malen, Schreiben, Musik machen. "
        "Fuer Jugendliche, die nicht ueber Gefuehle sprechen wollen oder koennen.",
        "Peer-Trauergruppe: Austausch mit anderen Jugendlichen, die einen Verlust "
        "erlebt haben. Das Gefuehl, nicht allein zu sein, ist therapeutisch.",
        "Koerperorientierte Methoden: Atemuebungen, Bewegung, Yoga. "
        "Trauer sitzt im Koerper und muss auch koerperlich bearbeitet werden.",
        "Psychoedukation: Normalisierung von Trauerreaktionen. "
        "\"Es ist normal, dass du wuetend bist\" / \"Lachen ist keine Respektlosigkeit\""
    ])

    # --- Dialog: First conversation after a loss ---
    doc.add_heading('Gespraechsleitfaden: Erstes Gespraech nach einem Verlust', level=3)

    add_dialog(doc, [
        ("Psychologe",
         "(leise, langsam) Ich habe gehoert, was passiert ist. "
         "Es tut mir sehr leid. Du musst jetzt nichts sagen. Ich bin einfach hier."),
        ("Jugendlicher",
         "(schweigt lange, starrt auf den Boden)"),
        ("Psychologe",
         "(wartet geduldig. Schiebt leise ein Glas Wasser hin. Kein Druck.)"),
        ("Jugendlicher",
         "(nach langer Pause) Es fuehlt sich nicht real an."),
        ("Psychologe",
         "Das ist eine ganz normale Reaktion. Manchmal kann unser Gehirn "
         "etwas so Grosses nicht sofort verarbeiten. Es ist wie ein Schutzschild, "
         "das dich gerade schuetzt."),
        ("Jugendlicher",
         "Alle in der Klasse tun so, als ob nichts waere. Keiner sagt was."),
        ("Psychologe",
         "Vielleicht wissen sie nicht, was sie sagen sollen. Den meisten "
         "Menschen geht es so. Das bedeutet nicht, dass es ihnen egal ist. "
         "Viele haben Angst, etwas Falsches zu sagen."),
        ("Jugendlicher",
         "Ich habe heute Morgen ueber ein Video gelacht und dann habe ich "
         "mich sofort schlecht gefuehlt. Wie kann ich lachen, wenn..."),
        ("Psychologe",
         "Lachen und Trauern schliessen sich nicht aus. Dein Koerper "
         "braucht auch Momente der Leichtigkeit - das ist kein Verrat. "
         "Die Person, die du verloren hast, haette wahrscheinlich gewollt, "
         "dass du auch lachst."),
        ("Jugendlicher",
         "(weint) Ich habe nicht mal Tschuess gesagt."),
        ("Psychologe",
         "(leise, ruhig) Das tut weh. Sehr. Und es ist okay, das zu fuehlen. "
         "Wenn du moechtest, koennten wir irgendwann einen Weg finden, "
         "wie du doch noch Abschied nehmen kannst. Aber das hat Zeit. "
         "Jetzt ist es genug, einfach hier zu sein."),
        ("Jugendlicher",
         "Koennen wir einfach... sitzen?"),
        ("Psychologe",
         "Natuerlich. So lange du brauchst.")
    ])

    # --- Tip box about grief in school context ---
    add_tip_box(doc,
        "Trauer im Schulkontext: Wenn ein Schueler oder eine Lehrkraft stirbt, "
        "betrifft das die gesamte Schulgemeinschaft. Sprechen Sie sich mit der "
        "Schulleitung ueber ein abgestimmtes Vorgehen ab. Wichtig: Klassen "
        "informieren (nicht ueber Lautsprecher, sondern persoenlich durch eine "
        "Vertrauensperson), Raum fuer Trauer schaffen (Erinnerungstisch, "
        "offenes Gespraechsangebot), Normalitaet aufrechterhalten (Struktur gibt "
        "Halt), besonders belastete Schueler identifizieren (enge Freunde, "
        "vorbelastete Jugendliche) und langfristig begleiten. Trauer endet nicht "
        "nach einer Woche. Bieten Sie auch nach Wochen und Monaten noch "
        "Gespraeche an - besonders an Jahrestagen und besonderen Anlaessen.")
