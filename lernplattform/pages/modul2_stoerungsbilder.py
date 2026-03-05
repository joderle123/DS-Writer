"""Modul 2: Stoerungsbilder & Manifestationen — Das Kernmodul."""
import streamlit as st
from components.helpers import show_quiz, show_case_study, show_red_flag, show_intervention, show_green_box


def show():
    st.markdown("## Modul 2: Stoerungsbilder & Manifestationen")
    st.markdown("*Wie zeigen sich psychische Belastungen KONKRET im Schulalltag? Und was tust du?*")
    st.warning("**Wichtig:** Als Schulpsycholog:in stellst du KEINE Diagnosen. Du beschreibst Verhalten, erkennst Muster und entscheidest, ob du selbst intervenierst oder weiterleitest.")

    tab1, tab2, tab3, tab4, tab5, tab6, tab7 = st.tabs([
        "Angststoerungen",
        "Depression",
        "Selbstverletzung & Suizidalitaet",
        "ADHS",
        "Trauma & PTBS",
        "Essstoerungen",
        "Weitere"
    ])

    # ════════════════════════════════════════════
    # TAB 1: ANGSTSTOERUNGEN
    # ════════════════════════════════════════════
    with tab1:
        st.markdown("### Angststoerungen bei Jugendlichen")
        st.markdown("**Praevalenz: 15-20%** — die haeufigste psychische Stoerung bei Jugendlichen. "
                    "Wird am meisten UEBERSEHEN, weil aengstliche Kinder still sind und nicht auffallen.")

        anxiety_types = st.selectbox("Waehle eine Angstform:", [
            "Generalisierte Angststoerung (GAD)",
            "Soziale Angststoerung",
            "Trennungsangst",
            "Panikstörung",
            "Spezifische Phobien",
            "Selektiver Mutismus"
        ], key="anxiety_select")

        if anxiety_types == "Generalisierte Angststoerung (GAD)":
            st.markdown("#### Generalisierte Angststoerung — Der/die chronische Sorgenmacher:in")
            st.markdown("""
            **Was es ist:** Uebermaeßige, unkontrollierbare Sorgen ueber ALLES — Schule, Gesundheit,
            Familie, Zukunft, Weltlage. Nicht eine spezifische Angst, sondern ein Dauergrundprogramm der Sorge.
            """)
            st.markdown("**Wie es sich im Schulalltag zeigt:**")
            st.markdown("""
            - Fragt Lehrer:innen wiederholt nach, ob Antworten richtig sind
            - Macht Aufgaben mehrfach, weil sie nicht "gut genug" sind
            - Kann sich nicht entscheiden (Angst vor falscher Wahl)
            - Koerperliche Beschwerden: Bauchschmerzen, Kopfschmerzen, Muskelverspannungen
            - Schlaeft schlecht, sieht muede aus
            - Denkt staendig ueber "Was waere wenn"-Szenarien nach
            - Braucht uebermaeßig viel Beruhigung von Erwachsenen
            """)
            show_red_flag("Wenn die Sorgen den Alltag dominieren (> 50% der wachen Zeit), Schlaf massiv gestoert ist, oder der/die Jugendliche nicht mehr zur Schule kommen kann.")
            show_intervention("Erstintervention bei GAD",
                "1. Sorgen externalisieren: 'Die Sorgenmaschine in deinem Kopf laeuft auf Hochtouren'\n"
                "2. Sorgenzeit einfuehren: 15 Min am Tag bewusst sorgen, Rest des Tages 'parken'\n"
                "3. Kognitive Umstrukturierung: 'Wie wahrscheinlich ist es wirklich?' (1-100%)\n"
                "4. Koerperlich: Progressive Muskelentspannung, Atemtechniken\n"
                "5. Bei schwerer Auspraegung: Weiterleitung an Therapeut:in")

        elif anxiety_types == "Soziale Angststoerung":
            st.markdown("#### Soziale Angststoerung — Die Angst vor dem Urteil anderer")
            st.markdown("""
            **Was es ist:** Intensive Angst vor sozialen Situationen, in denen man bewertet werden koennte.
            Nicht einfach "Schuechternheit" — es ist eine laehmende Angst, die das Leben stark einschraenkt.
            """)
            st.markdown("**Wie es sich im Schulalltag zeigt:**")
            st.markdown("""
            - Weigert sich, vor der Klasse zu praesentieren (wird ggf. "krank")
            - Sitzt allein in der Pause, traut sich nicht, andere anzusprechen
            - Geht auf die Toilette, wenn Gruppenarbeit angekuendigt wird
            - Antwortet nur fluesternd oder gar nicht, wenn aufgerufen
            - Meidet Augenkontakt mit Erwachsenen und Peers
            - Wird rot, zittert, schwitzt in sozialen Situationen
            - Hat Angst, in der Mensa zu essen (andere koennten zuschauen)
            - Ist online aktiv, aber offline zurueckgezogen
            """)
            show_red_flag("Wenn Schulbesuch durch Vermeidung gefaehrdet ist oder der/die Jugendliche voellig isoliert lebt.")
            show_intervention("Erstintervention bei sozialer Angst",
                "1. NICHT zwingen, vor der Klasse zu sprechen (verstaerkt die Angst!)\n"
                "2. Graduierte Exposition: Erst 1:1, dann Kleingruppe, dann Klasse\n"
                "3. Soziale Kompetenzen in sicherem Rahmen ueben\n"
                "4. Kognitive Arbeit: 'Was genau denkst du, was passieren wird?'\n"
                "5. Lehrer:innen informieren: Alternative Prüfungsformen ermoeglichen")

        elif anxiety_types == "Trennungsangst":
            st.markdown("#### Trennungsangst — Kann nicht von den Eltern weg")
            st.markdown("""
            **Was es ist:** Uebermaeßige Angst bei Trennung von Bezugspersonen. Bei juengeren Jugendlichen
            (10-14) noch relativ haeufig, bei aelteren ein deutliches Warnsignal.
            """)
            st.markdown("**Wie es sich im Schulalltag zeigt:**")
            st.markdown("""
            - Weint beim Abschied von den Eltern (auch mit 12-13 Jahren)
            - Ruft Eltern mehrfach am Tag an
            - Will nicht auf Klassenfahrt
            - Koerperliche Beschwerden morgens vor der Schule, die am Wochenende verschwinden
            - Angst, den Eltern koennte etwas passieren
            - Kann nicht bei Freunden uebernachten
            """)
            show_intervention("Erstintervention bei Trennungsangst",
                "1. Sicherheitsverhalten langsam abbauen (nicht abrupt!)\n"
                "2. Klare Abschiedsrituale mit den Eltern entwickeln\n"
                "3. Kontaktmoeglichkeit vereinbaren (z.B. eine SMS mittags)\n"
                "4. Selbstwirksamkeit staerken: 'Du hast das gestern schon geschafft!'\n"
                "5. Elternarbeit: Eigene Angst der Eltern bearbeiten")

        elif anxiety_types == "Panikstörung":
            st.markdown("#### Panikstoeung — Ploetzliche Panikattacken")
            st.markdown("""
            **Was es ist:** Wiederkehrende, unerwartete Panikattacken mit intensiven koerperlichen Symptomen.
            Jugendliche denken oft, sie sterben oder werden verrueckt.
            """)
            st.markdown("**Wie es sich im Schulalltag zeigt:**")
            st.markdown("""
            - Ploetzliches Aufstehen im Unterricht und Rausgehen
            - Herzrasen, Hyperventilation, Zittern, Schwindel
            - Sagt: "Ich kann nicht atmen" / "Mir wird schwarz vor Augen"
            - Angst vor der naechsten Attacke (Angst vor der Angst)
            - Meidet Orte, an denen Attacken auftraten (Mensa, Sporthalle)
            - Geht haeufig zum Schulkrankenzimmer
            """)
            show_intervention("Erstintervention bei Panikattacke",
                "1. Ruhig bleiben und Ruhe ausstrahlen\n"
                "2. 'Du hast eine Panikattacke. Das ist sehr unangenehm, aber nicht gefaehrlich.'\n"
                "3. Box Breathing: 4 Sekunden ein, 4 halten, 4 aus, 4 halten\n"
                "4. Grounding: 'Nenne mir 5 Dinge, die du siehst'\n"
                "5. NICHT: 'Beruhig dich!' oder 'Stell dich nicht so an!'")

        elif anxiety_types == "Spezifische Phobien":
            st.markdown("#### Spezifische Phobien")
            st.markdown("""
            **Was es ist:** Intensive, irrationale Angst vor einem spezifischen Objekt oder einer Situation.
            Bei Jugendlichen haeufig: Prüfungsangst, Spritzenphobie, Emetophobie (Angst vor Erbrechen).

            **Schulrelevant:** Pruefungsangst kann Leistung massiv beeintraechtigen, obwohl das Wissen da ist.
            """)
            show_intervention("Erstintervention bei spezifischer Phobie",
                "1. Nicht erzwingen, sich der Angst auszusetzen\n"
                "2. Graduierte Exposition planen (in kleinen Schritten)\n"
                "3. Bei Pruefungsangst: Entspannungstechniken vor der Pruefung\n"
                "4. Alternative Pruefungsformen pruefen (muendlich statt schriftlich)")

        else:  # Selektiver Mutismus
            st.markdown("#### Selektiver Mutismus — Spricht zu Hause, schweigt in der Schule")
            st.markdown("""
            **Was es ist:** Der/die Jugendliche KANN sprechen (spricht zu Hause normal), aber schweigt
            konsequent in bestimmten sozialen Kontexten (Schule, fremde Erwachsene). Nicht Trotz — Angst.
            """)
            st.markdown("**Wie es sich im Schulalltag zeigt:**")
            st.markdown("""
            - Spricht kein einziges Wort im Unterricht
            - Kommuniziert ueber Nicken, Zeigen, Schreiben
            - Hat eventuell eine:n Freund:in, die/der fuer sie spricht
            - Wirkt "eingefroren", wenn direkt angesprochen
            - Kann in der Pause mit einem vertrauten Kind sprechen
            """)
            show_intervention("Erstintervention bei selektivem Mutismus",
                "1. KEINEN Druck zum Sprechen ausueben!\n"
                "2. Alternative Kommunikationswege akzeptieren (Schreiben, Zeigen)\n"
                "3. Sliding-in-Technik: Vertraute Person dabei, dann langsam zurueckziehen\n"
                "4. Kleine Erfolge feiern (z.B. ein Wort gesagt)\n"
                "5. Unbedingt Fachperson einbeziehen — Behandlung ist komplex")

        st.markdown("---")

        show_case_study(
            "Sophie (14) — Bauchschmerzen und Fehlzeiten",
            "Sophie fehlt seit 3 Wochen immer montags und mittwochs. Die Eltern sagen, sie habe "
            "Bauchschmerzen. Der Kinderarzt findet nichts. Wenn sie in der Schule ist, sitzt sie "
            "in den Pausen allein, geht bei Gruppenarbeit auf die Toilette und fluestert nur, "
            "wenn sie direkt angesprochen wird. Ihre Noten sind gut — sie macht alles schriftlich perfekt.",
            [
                {"question": "Was koennte hinter Sophies Verhalten stecken?",
                 "answer": "**Soziale Angststoerung** mit somatischer Komponente. Die Bauchschmerzen sind ein koerperlicher Ausdruck der Angst (Somatisierung). Sie VERMEIDET soziale Situationen systematisch. Ihre guten schriftlichen Noten zeigen, dass die Intelligenz da ist — es ist die Angst, die blockiert."},
                {"question": "Warum wurde das so lange nicht erkannt?",
                 "answer": "Weil Sophie STILL ist. Aengstliche Jugendliche stoeren nicht. Sie fallen nicht auf. Lehrer:innen bemerken eher den lauten ADHS-Jungen als das still leidende Maedchen. Die Bauchschmerzen lenken zusaetzlich auf eine koerperliche Ursache ab."},
                {"question": "Was sind deine naechsten Schritte?",
                 "answer": "1. Einzelgespraech in ruhiger Umgebung (nicht vor der Klasse ansprechen!)\n2. Behutsam explorieren: 'Ich habe bemerkt, dass du dich in bestimmten Situationen unwohl fuehlst...'\n3. Lehrer:innen informieren: keine Praesentationen erzwingen, Gruppenarbeit in Zweierteams\n4. Mit Eltern sprechen: Psychoedukation ueber soziale Angst\n5. Bei fortbestehender Belastung: Weiterleitung an Therapeut:in"}
            ]
        )

        show_quiz("m2_q1",
            "Welche Angststoerung wird bei Jugendlichen am haeufigsten UEBERSEHEN?",
            ["Panikstoeung", "Soziale Angststoerung / GAD", "Spezifische Phobien", "Trennungsangst"],
            1,
            "Aengstliche Jugendliche sind still und stoerenicht. Sie fallen im Unterricht nicht auf. "
            "Die Praevalenz liegt bei 15-20%, aber viele werden nie erkannt.")

        show_quiz("m2_q2",
            "Sophie geht bei Gruppenarbeit auf die Toilette. Was ist die richtige Reaktion als Lehrer:in?",
            [
                "Sie vor der Klasse darauf ansprechen",
                "Sie zwingen, in der Gruppe zu bleiben",
                "Eine Alternative anbieten (z.B. Partnerarbeit) und spaeter in Ruhe ansprechen",
                "Ignorieren und nichts tun"
            ],
            2,
            "Vor der Klasse ansprechen verstaerkt die Angst. Zwingen ebenfalls. Ignorieren hilft nicht. "
            "Eine diskrete Alternative und ein Gespraech unter vier Augen ist der richtige Weg.")

        show_quiz("m2_q3",
            "Was ist der HAEUFIGSTE Fehler im Umgang mit Angststoerungen?",
            [
                "Zu viel darueber reden",
                "Vermeidung zulassen und damit die Angst aufrechterhalten",
                "Zu frueh an Therapie verweisen",
                "Zu viele Entspannungsuebungen machen"
            ],
            1,
            "Wenn wir Vermeidung zulassen (z.B. 'Du musst nicht praesentieren'), bestaetigen wir die Angst: "
            "'Die Situation IST gefaehrlich.' Besser: Graduierte Exposition in kleinen, sicheren Schritten.")

        show_quiz("m2_q4",
            "Ein Jugendlicher hat eine Panikattacke im Unterricht. Was machst du ZUERST?",
            [
                "'Beruhig dich mal!' sagen",
                "Ruhig bleiben und benennen: 'Das ist eine Panikattacke. Nicht gefaehrlich.'",
                "Sofort den Notarzt rufen",
                "Ihn auffordern, tief zu atmen und sich zusammenzureissen"
            ],
            1,
            "Benennen gibt Orientierung und reduziert die Angst vor der Angst. Dann: Box Breathing und Grounding.")

    # ════════════════════════════════════════════
    # TAB 2: DEPRESSION
    # ════════════════════════════════════════════
    with tab2:
        st.markdown("### Depression bei Jugendlichen")
        st.error("**Kerneinsicht:** Depression bei Jugendlichen sieht ANDERS aus als bei Erwachsenen. "
                "Das Hauptsymptom ist nicht Traurigkeit, sondern **Reizbarkeit und Wut**!")

        st.markdown("#### Wie Depression sich nach Geschlecht unterscheidet")
        col1, col2 = st.columns(2)
        with col1:
            st.markdown("""
            **Jungen zeigen oft:**
            - Aggression, Reizbarkeit, kurze Zuendschnur
            - Risikoverhalten, Substanzkonsum
            - Rueckzug in Gaming (exzessiv)
            - Koerperliche Beschwerden
            - Psychomotorische Unruhe
            - "Mir ist langweilig" (kodiert fuer: ich fuehle nichts)
            """)
        with col2:
            st.markdown("""
            **Maedchen zeigen oft:**
            - Sozialer Rueckzug, Weinen
            - Perfektionismus-Zusammenbruch
            - Somatische Beschwerden (Kopf/Bauch)
            - Social Media Doom-Scrolling
            - Uebermaessiges Gruebeln
            - Essprobleme, Koerperunzufriedenheit
            """)

        st.markdown("#### Wie Depression sich nach Alter unterscheidet")

        with st.expander("Fruehe Adoleszenz (12-14 Jahre)"):
            st.markdown("""
            - Somatische Beschwerden dominieren (Bauchweh, Kopfweh)
            - Klammern an Eltern oder voelliges Ablehnen
            - Schulverweigerung mit koerperlicher Begruendung
            - Weinerlichkeit, Aengstlichkeit
            - Regressives Verhalten (verhaelt sich juenger als er/sie ist)
            """)

        with st.expander("Mittlere Adoleszenz (14-16 Jahre)"):
            st.markdown("""
            - Reizbarkeit als Hauptsymptom
            - Leistungseinbruch
            - Sozialer Rueckzug (erst von Erwachsenen, dann auch von Peers)
            - Interessenverlust ("Ich hab auf nichts mehr Bock")
            - Schlaf veraendert sich massiv (viel zu viel oder viel zu wenig)
            """)

        with st.expander("Spaete Adoleszenz (16-18 Jahre)"):
            st.markdown("""
            - Hoffnungslosigkeit, existenzielle Verzweiflung
            - "Alles ist sinnlos"
            - Substanzkonsum als Selbstmedikation
            - Identitaetskrise: "Ich weiss nicht, wer ich bin"
            - Suizidgedanken koennen erstmals artikuliert werden
            - Zukunftsangst und -vermeidung
            """)

        st.markdown("#### Schlechte Laune vs. Depression — Der Unterschied")
        col1, col2 = st.columns(2)
        with col1:
            show_green_box("Normale schlechte Laune",
                "Dauer: Stunden bis wenige Tage\n"
                "Ausloeser: erkennbar (Streit, schlechte Note)\n"
                "Funktionalitaet: erhalten\n"
                "Interessen: noch vorhanden\n"
                "Schlaf/Appetit: stabil\n"
                "Gedanken: situativ ('Das nervt')\n"
                "Erreichbar: reagiert auf Positives")
        with col2:
            show_red_flag(
                "Dauer: 2+ Wochen, taeglich\n"
                "Ausloeser: oft keiner erkennbar\n"
                "Funktionalitaet: eingeschraenkt\n"
                "Interessen: Verlust ('Alles egal')\n"
                "Schlaf/Appetit: veraendert\n"
                "Gedanken: generalisiert ('Alles ist sinnlos')\n"
                "Erreichbar: reagiert auf NICHTS mehr")

        st.markdown("---")

        show_case_study(
            "Luca (15) — 'Alles ist dumm'",
            "Lucas Noten sind in den letzten 2 Monaten von 2-3 auf 4-5 abgerutscht. Er war frueher im "
            "Fussballverein, hat aufgehoert. Im Unterricht ist er gereizt, hat einen Lehrer angeschrien. "
            "Zu Hause zockt er bis 3 Uhr nachts. Seine Mutter sagt: 'Er ist einfach in der Pubertaet.' "
            "Im Gespraech mit dir sagt er: 'Alles ist dumm. Schule ist dumm. Leben ist dumm.'",
            [
                {"question": "Ist das 'nur Pubertaet'?",
                 "answer": "**Nein.** Mehrere Warnsignale: Dauer > 2 Wochen, Leistungseinbruch, Interessenverlust (Fussball), Reizbarkeit, Schlafverschiebung, generalisierte Aussagen ('alles ist dumm'). Das Muster spricht fuer eine depressive Episode, nicht fuer normale Pubertaetslaunen."},
                {"question": "Was sind die Red Flags in Lucas Fall?",
                 "answer": "1. **Interessenverlust** (Fussball aufgegeben)\n2. **Leistungseinbruch** in mehreren Faechern\n3. **Reizbarkeit** (Lehrer angeschrien — fuer ihn untypisch)\n4. **Schlafverschiebung** (3 Uhr nachts)\n5. **Generalisierte Hoffnungslosigkeit** ('alles ist dumm')\n6. Wichtig: Das Wort 'Leben ist dumm' braucht eine Nachfrage zur Suizidalitaet!"},
                {"question": "Was fragst du Luca als naechstes?",
                 "answer": "Du musst die Aussage 'Leben ist dumm' weiter explorieren:\n'Luca, wenn du sagst, Leben ist dumm — meinst du damit, dass du manchmal denkst, du moechtest nicht mehr leben?'\nDirekt fragen. Nicht darum herumreden. Direkte Fragen nach Suizidalitaet erhoehen das Risiko NICHT."}
            ]
        )

        show_quiz("m2_q5",
            "Was ist das HAUPTSYMPTOM von Depression bei Jugendlichen?",
            ["Traurigkeit und Weinen", "Reizbarkeit und Wut", "Muedigkeit", "Appetitlosigkeit"],
            1,
            "Anders als bei Erwachsenen zeigt sich Depression bei Jugendlichen hauptsaechlich als Reizbarkeit, "
            "Wut und 'alles ist dumm'. Traurigkeit kann dabei sein, muss aber nicht.")

        show_quiz("m2_q6",
            "Lucas Mutter sagt: 'Er ist in der Pubertaet, das geht vorbei.' Wie reagierst du?",
            [
                "Zustimmen — sie kennt ihren Sohn am besten",
                "Widersprechen — 'Ihr Sohn hat eine Depression!'",
                "Behutsam die Unterschiede zwischen Pubertaet und Depression erklaeren und die konkreten Veraenderungen benennen",
                "Die Mutter ignorieren und nur mit Luca arbeiten"
            ],
            2,
            "Weder bagatellisieren noch dramatisieren. Konkret benennen: 'Ich beobachte X, Y, Z — das geht ueber "
            "normale Pubertaet hinaus und verdient Aufmerksamkeit.'")

    # ════════════════════════════════════════════
    # TAB 3: SELBSTVERLETZUNG & SUIZIDALITAET
    # ════════════════════════════════════════════
    with tab3:
        st.markdown("### Selbstverletzung (SVV) und Suizidalitaet")
        st.error("**Grundregel:** Selbstverletzung ist NICHT dasselbe wie ein Suizidversuch. "
                "Beides erfordert Aufmerksamkeit, aber unterschiedliche Reaktionen.")

        st.markdown("#### Selbstverletzendes Verhalten (SVV)")
        st.markdown("**Praevalenz:** 17-25% der Jugendlichen. Meist Ritzen, aber auch Verbrennen, Schlagen, Kratzen.")

        st.markdown("**Die 5 Funktionen von SVV — warum Jugendliche sich verletzen:**")
        functions = [
            ("Spannungsabbau", "Unertraegliche innere Spannung wird durch Schmerz 'abgelassen'. Danach Erleichterung."),
            ("Emotionsregulation", "Wenn Gefuehle so ueberwаeltigend sind, dass nichts anderes hilft. Der Schmerz 'reset' das System."),
            ("Selbstbestrafung", "Tief verinnerlichtes Gefuehl: 'Ich verdiene es nicht besser.' Oft bei Missbrauchs-/Vernachlaessigungserfahrung."),
            ("Kommunikation", "Wenn Worte fuer den Schmerz fehlen. 'Schaut her, wie schlecht es mir geht.' Kein 'Aufmerksamkeit suchen' — sondern Hilfeschrei."),
            ("Kontrolle", "In einer als unkontrollierbar erlebten Welt ist SVV das Einzige, das der/die Jugendliche kontrollieren kann."),
        ]
        for title, desc in functions:
            with st.expander(title):
                st.markdown(desc)

        show_intervention("Wenn du SVV entdeckst — Schritt fuer Schritt",
            "1. **Ruhig bleiben.** Kein Erschrecken, kein Entsetzen zeigen.\n"
            "2. **Nicht sofort auf die Wunden fokussieren.** Erst Beziehung.\n"
            "3. **Fragen:** 'Ich habe gesehen, dass du dich verletzt. Ich mache mir Sorgen. Magst du mir davon erzaehlen?'\n"
            "4. **Zuhoeren**, nicht urteilen. NICHT: 'Warum machst du das?' (klingt vorwurfsvoll)\n"
            "5. **Fragen, ob Suizidgedanken bestehen** (SVV ist kein Suizidversuch, aber kann koexistieren)\n"
            "6. **Wundversorgung** sicherstellen (ggf. Schulkrankenschwester)\n"
            "7. **Eltern informieren** (gemeinsam mit dem/der Jugendlichen planen)\n"
            "8. **Alternatives Verhalten** explorieren: Eiswuerfel, rote Farbe auf die Haut, Gummiband\n"
            "9. **Weiterleitung** an Therapeut:in bei regelmaessigem SVV")

        st.markdown("---")
        st.markdown("#### Suizidalitaet")
        st.error("Suizid ist die **zweithaeufigste Todesursache** bei Jugendlichen (15-24 Jahre).")

        st.markdown("**Warnsignale — direkte und indirekte:**")
        col1, col2 = st.columns(2)
        with col1:
            st.markdown("""
            **Direkte Warnsignale:**
            - "Ich will nicht mehr leben"
            - "Es waere besser, wenn ich nicht mehr da waere"
            - "Bald habt ihr eure Ruhe"
            - Verschenkt persoenliche Gegenstaende
            - Recherchiert Suizidmethoden
            - Ploetzliche Ruhe nach Depression (Entschluss gefasst)
            """)
        with col2:
            st.markdown("""
            **Indirekte Warnsignale:**
            - "Alles ist sinnlos"
            - "Ich bin eine Last fuer alle"
            - "Niemand wuerde mich vermissen"
            - Sozialer Rueckzug
            - Risikoverhalten ohne Selbstschutz
            - Verabschiedung ("Danke fuer alles")
            - Interesse an Tod (Musik, Texte, Posts)
            """)

        st.markdown("**Wie du nach Suizidalitaet fragst — konkrete Saetze:**")
        st.markdown("""
        Direkte Fragen sind NICHT gefaehrlich. Sie erhoehen das Risiko NICHT. Sie zeigen: "Ich nehme dich ernst."

        - *"Hast du manchmal Gedanken, dass du nicht mehr leben moechtest?"*
        - *"Denkst du daran, dir etwas anzutun?"*
        - *"Hast du einen konkreten Plan, wie du dir etwas antun wuerdest?"*
        - *"Hast du Zugang zu Mitteln?" (Medikamente, scharfe Gegenstaende)*
        """)

        st.markdown("**Was du NICHT sagen solltest:**")
        st.markdown("""
        - ~~"Das wird schon wieder"~~ (bagatellisiert)
        - ~~"Andere haben es viel schlimmer"~~ (entwertet)
        - ~~"Denk an deine Familie"~~ (erzeugt Schuldgefuehle)
        - ~~"Das ist doch eine Kurzschlussreaktion"~~ (verharmlost)
        - ~~"Versprich mir, dass du dir nichts antust"~~ (Anti-Suizid-Vertraege wirken NICHT)
        """)

        st.info("**Notfallnummern Luxemburg:**\n"
               "- **112** — Notruf\n"
               "- **45 45 45** — SOS Detresse\n"
               "- **116 111** — Kanner-Jugendtelefon")

        show_quiz("m2_q7",
            "Was ist der Unterschied zwischen SVV und Suizidversuch?",
            [
                "Kein Unterschied — beides ist gleich gefaehrlich",
                "SVV dient der Emotionsregulation/Spannungsabbau, Suizidversuch hat das Ziel, das Leben zu beenden",
                "SVV ist harmlos und braucht keine Beachtung",
                "SVV ist immer ein Hilferuf, Suizid nie"
            ],
            1,
            "SVV ist eine (dysfunktionale) Bewaeltigungsstrategie. Suizidversuch hat das Ziel, das Leben zu beenden. "
            "Beides braucht Aufmerksamkeit, aber die Intervention ist unterschiedlich.")

        show_quiz("m2_q8",
            "Erhoehen direkte Fragen nach Suizidalitaet das Risiko?",
            ["Ja, man bringt jemanden erst auf die Idee", "Nein — direkte Fragen sind sicher und notwendig", "Nur bei juengeren Jugendlichen", "Es kommt auf die Formulierung an"],
            1,
            "Forschung zeigt eindeutig: Direkte Fragen nach Suizidalitaet erhoehen das Risiko NICHT. "
            "Im Gegenteil — sie zeigen dem Jugendlichen, dass man ihn ernst nimmt und das Thema nicht tabu ist.")

        show_quiz("m2_q9",
            "Ein Jugendlicher, der wochenlang depressiv war, wirkt ploetzlich ruhig und gelassen. Was koennte das bedeuten?",
            [
                "Er hat seine Depression ueberwunden",
                "Moegliches Warnsignal: Er koennte einen Entschluss gefasst haben (Suizidplan)",
                "Die Therapie wirkt",
                "Das ist ein normaler Stimmungswechsel"
            ],
            1,
            "Ploetzliche Ruhe nach depressiver Phase kann bedeuten, dass der Jugendliche einen Entschluss gefasst hat "
            "und sich 'erleichtert' fuehlt. Das ist ein RED FLAG, das sofortige Nachfrage erfordert.")

    # ════════════════════════════════════════════
    # TAB 4: ADHS
    # ════════════════════════════════════════════
    with tab4:
        st.markdown("### ADHS im Jugendalter")
        st.markdown("**Praevalenz: 5-7%.** ADHS ist nicht nur 'der hyperaktive Junge'. Es gibt verschiedene Auspraegungen.")

        st.markdown("#### Die drei ADHS-Typen")
        col1, col2, col3 = st.columns(3)
        with col1:
            st.markdown("""
            **Vorwiegend unaufmerksam**
            (oft bei Maedchen)
            - Traeumend, verpasst Anweisungen
            - Verliert Materialien
            - Kann Aufgaben nicht beenden
            - Vergisst Termine/Hausaufgaben
            - "In ihrer eigenen Welt"
            - Wird SELTEN erkannt!
            """)
        with col2:
            st.markdown("""
            **Vorwiegend hyperaktiv-impulsiv**
            (der "klassische" Typ)
            - Zappelt, steht auf, laeuft herum
            - Ruft rein, kann nicht warten
            - Redet uebermaessig viel
            - Unterbricht andere
            - Wirkt "wie angetrieben"
            """)
        with col3:
            st.markdown("""
            **Kombinierter Typ**
            - Beide Symptomgruppen
            - Am haeufigsten
            - Hyperaktivitaet nimmt
              in der Adoleszenz ab,
              Aufmerksamkeitsprobleme
              bleiben
            """)

        st.markdown("#### Was Lehrer:innen sehen vs. was wirklich passiert")
        col1, col2 = st.columns(2)
        with col1:
            st.markdown("""
            **Was Lehrer:innen sehen:**
            - "Faul" / "Gibt sich keine Muehe"
            - "Respektlos" (ruft rein)
            - "Unorganisiert"
            - "Kann sich nicht konzentrieren"
            - "Stoert den Unterricht"
            """)
        with col2:
            st.markdown("""
            **Was wirklich passiert:**
            - Exekutive Funktionen unreif
            - Impulskontrolle neurobiologisch erschwert
            - Arbeitsgedaechtnis ueberlastet
            - Dopaminmangel → sucht Stimulation
            - Emotionale Dysregulation (komorbid)
            """)

        show_intervention("ADHS-freundliche Beratung",
            "- **Kuerzere Sitzungen** (20-30 Min statt 50)\n"
            "- **Bewegung erlauben** (Stressball, stehen, laufen)\n"
            "- **Visuelle Hilfen** (Whiteboards, Karten, Zeichnungen)\n"
            "- **Struktur geben** (klare Agenda, Timer, Checklisten)\n"
            "- **Eine Anweisung auf einmal** (nicht drei auf einmal)\n"
            "- **Staerken betonen** (Kreativitaet, Energie, Begeisterungsfaehigkeit)")

        show_quiz("m2_q10",
            "Welcher ADHS-Typ wird am haeufigsten uebersehen?",
            ["Hyperaktiv-impulsiv", "Kombiniert", "Vorwiegend unaufmerksam", "Alle werden gleich haeufig erkannt"],
            2,
            "Der unaufmerksame Typ (haeufiger bei Maedchen) faellt nicht auf, weil er nicht stoert. "
            "Diese Jugendlichen traeumen vor sich hin und leiden still.")

    # ════════════════════════════════════════════
    # TAB 5: TRAUMA & PTBS
    # ════════════════════════════════════════════
    with tab5:
        st.markdown("### Trauma und PTBS bei Jugendlichen")
        st.markdown("**25-70% der Jugendlichen** erleben mindestens ein traumatisches Ereignis.")

        st.markdown("#### Die 3 Trauma-Typen")
        col1, col2, col3 = st.columns(3)
        with col1:
            st.markdown("""
            **Typ I — Einzelereignis**
            - Unfall, Naturkatastrophe
            - Einmaliger Uebergriff
            - Zeuge von Gewalt
            - Ploetzlicher Todesfall
            """)
        with col2:
            st.markdown("""
            **Typ II — Chronisch**
            - Wiederholter Missbrauch
            - Haeusliche Gewalt
            - Mobbing ueber Monate
            - Krieg, Flucht
            """)
        with col3:
            st.markdown("""
            **Entwicklungstrauma**
            - Vernachlaessigung in Kindheit
            - Emotionale Deprivation
            - Instabile Bezugspersonen
            - Oft: desorganisierte Bindung
            """)

        st.markdown("#### Wie Trauma sich im Schulalltag zeigt")
        manifestations = [
            ("Hypervigilanz", "Scannt staendig den Raum, sitzt am Ausgang, zuckt bei Geraueschen zusammen, kann sich nicht entspannen, ist staendig 'auf dem Sprung'."),
            ("Dissoziation", "Wirkt abwesend, 'nicht da', starrer Blick, reagiert nicht auf Ansprache, kann sich an Unterrichtsinhalte nicht erinnern. NICHT mit Tagtraeumen oder ADHS verwechseln!"),
            ("Emotionale Ueberflutung", "Ploetzliche Wutausbrueche oder Weinkraempfe, scheinbar ohne Ausloeser. Ein Geraeusch, Geruch oder Wort kann einen Flashback ausloesen."),
            ("Vermeidung", "Meidet bestimmte Orte, Personen oder Themen. Fehlt bei Themen, die mit dem Trauma zusammenhaengen. Geht nicht auf die Schultoilette (Missbrauchsort)."),
            ("Konzentrationsprobleme", "Das Gehirn ist im Ueberlebensmodus — fuer Lernen ist keine Kapazitaet. Sieht aus wie ADHS, ist aber trauma-bedingt."),
            ("Regressives Verhalten", "Verhaelt sich juenger als erwartet, klammert, nuckelt an Fingern, spricht wie ein juengeres Kind."),
        ]
        for title, desc in manifestations:
            with st.expander(title):
                st.markdown(desc)

        st.markdown("#### KRITISCH: Trauma vs. ADHS — Verwechslungsgefahr")
        col1, col2 = st.columns(2)
        with col1:
            st.markdown("""
            **ADHS:**
            - Symptome seit Kindheit
            - Konsistent ueber Kontexte
            - Hyperaktivitaet ist "freudig"
            - Reagiert auf Struktur
            - Kein Schreckreflex
            """)
        with col2:
            st.markdown("""
            **Trauma:**
            - Symptome NACH einem Ereignis
            - Kontextabhaengig (Trigger)
            - Hyperaktivitaet ist "angespannt"
            - Reagiert auf Sicherheit
            - Uebertriebener Schreckreflex
            """)

        st.markdown("#### Was du NICHT tun solltest bei Traumatisierten")
        st.markdown("""
        - Nicht erzwingen, ueber das Trauma zu sprechen
        - Nicht in die Augen schauen erzwingen ("Schau mich an!")
        - Keine Ueberraschungsuebungen oder ploetzliche laute Geraeusche
        - Nicht von hinten ansprechen oder anfassen
        - Nicht Augenkontakt erzwingen
        - Nicht: "Das ist lange her, jetzt ist es vorbei"
        """)

        show_case_study(
            "Amara (16) — Fluechterfahrung",
            "Amara ist vor 2 Jahren aus Syrien geflohen. Sie ist eine gute Schuelerin, aber bei lauten "
            "Geraueschen (Tueren knallen, Sportunterricht, Feueralarm) erstarrt sie komplett. Einmal hat sie "
            "unter dem Tisch gesessen und gezittert. Lehrer:innen berichten, dass sie manchmal 'wegdriftet' "
            "und nicht ansprechbar ist. Sie sagt, es gehe ihr gut.",
            [
                {"question": "Was beobachtest du?",
                 "answer": "**Posttraumatische Belastungsstoeung (PTBS):**\n- Hypervigilanz (Schreckreaktion bei Geraueschen)\n- Flashbacks/Reexperiencing (erstarrt, zittert — sie ist 'zurueck' im Trauma)\n- Dissoziation (wegdriften, nicht ansprechbar)\n- Vermeidung (sagt, es gehe ihr gut — schuetzt sich vor dem Erinnern)"},
                {"question": "Was tust du, wenn Amara unter dem Tisch sitzt?",
                 "answer": "1. Ruhig hinknien, auf Augenhoehe\n2. Sanft mit Namen ansprechen\n3. 'Amara, du bist in der Schule. Du bist sicher.'\n4. Grounding: 'Kannst du den Boden unter deinen Fuessen spueren?'\n5. NICHT anfassen ohne zu fragen\n6. Wenn sie zurueck ist: 'Du bist sicher. Das war eine Erinnerung.'"},
                {"question": "Wie sprichst du mit den Lehrer:innen?",
                 "answer": "Trauma-Infoblatt (ohne Details zu Amaras Geschichte):\n- Laute Geraeusche koennen Amaras Nervensystem aktivieren\n- Wenn sie erstarrt: sanft ansprechen, nicht anfassen\n- Sitzplatz am Ausgang anbieten\n- Bei Feueralarm vorher informieren wenn moeglich\n- Sie 'driftet ab' — nicht persoenlich nehmen, sanft zurueckholen"}
            ]
        )

        show_quiz("m2_q11",
            "Amara sitzt unter dem Tisch und zittert. Was passiert gerade neurobiologisch?",
            [
                "Sie will Aufmerksamkeit",
                "Ein Trigger hat einen Flashback ausgeloest — ihr Nervensystem ist im Ueberlebensmodus",
                "Sie hat Angst vor der Pruefung",
                "Sie simuliert"
            ],
            1,
            "Ein sensorischer Trigger (lautes Geraeusch) hat die traumatische Erinnerung aktiviert. "
            "Die Amygdala schaltet auf Kampf/Flucht/Erstarrung. Amara ist neurobiologisch 'zurueck' im Trauma.")

        show_quiz("m2_q12",
            "Was ist der wichtigste Unterschied zwischen ADHS und Trauma-bedingten Konzentrationsproblemen?",
            [
                "Kein Unterschied",
                "ADHS-Symptome bestehen seit der Kindheit, Trauma-Symptome beginnen NACH einem Ereignis",
                "ADHS ist neurologisch, Trauma ist psychologisch",
                "Trauma-Kinder sind stiller als ADHS-Kinder"
            ],
            1,
            "Zeitlicher Verlauf ist der Schluesselunterschied. ADHS-Symptome sind von Anfang an da. "
            "Trauma-Symptome beginnen nach einem belastenden Ereignis.")

    # ════════════════════════════════════════════
    # TAB 6: ESSSTOERUNGEN
    # ════════════════════════════════════════════
    with tab6:
        st.markdown("### Essstoerungen")
        st.error("**Essstoerungen haben die HOECHSTE Mortalitaetsrate aller psychischen Stoerungen.** "
                "Frueherkennung rettet Leben.")

        disorders = [
            ("Anorexia Nervosa", "Starke Gewichtsreduktion, Angst vor Gewichtszunahme, verzerrte Koerperwahrnehmung.",
             "Deutlich abgemagert, traegt weite Kleidung, isst in der Mensa extrem wenig oder gar nicht, "
             "uebertriebener Sport, zaehlt Kalorien, friert staendig, Haare werden duenn, Schwindel.",
             "BMI < 17.5, Ohnmachtsanfaelle, Herzrhythmusstoerungen — sofortige medizinische Abklaerung!"),
            ("Bulimia Nervosa", "Essanfaelle gefolgt von Kompensation (Erbrechen, Abfuehrmittel, extremer Sport).",
             "Normalgewichtig (daher schwer zu erkennen!), geht nach dem Essen auf die Toilette, "
             "Schwellungen im Gesicht, kaputte Zaehne (Magensaeure), Essensvorraete verschwinden.",
             "Elektrolytentgleisungen koennen lebensbedrohlich sein. Aerztliche Abklaerung dringend!"),
            ("Binge-Eating", "Wiederholte Essanfaelle ohne Kompensation. Kontrollverlust beim Essen.",
             "Gewichtszunahme, isst heimlich, schaemt sich fuer das Essen, depressive Symptome.",
             "Adipositas mit psychischer Belastung — nicht nur Ernaehrungsberatung, sondern psychologische Hilfe."),
            ("Orthorexie", "Zwanghaft 'gesundes' Essen. Immer mehr Lebensmittel werden ausgeschlossen.",
             "Extrem eingeschraenktes Essen ('nur bio, nur vegan, nur roh'), soziale Isolation wegen Essen, "
             "kann nicht bei Freunden essen, staendige Beschaeftigung mit 'gesundem' Essen.",
             "Wenn die Gesundheitsfixierung selbst krank macht — Mangelerernaehrung trotz 'gesundem' Essen."),
        ]

        for name, desc, school_signs, red_flag in disorders:
            with st.expander(name):
                st.markdown(f"**Was es ist:** {desc}")
                st.markdown(f"**Wie es sich in der Schule zeigt:** {school_signs}")
                show_red_flag(red_flag)

        st.markdown("#### Was du NICHT sagen solltest")
        st.markdown("""
        - ~~"Iss doch einfach was"~~ (verkennt die Stoerung komplett)
        - ~~"Du siehst doch gar nicht duenn aus"~~ (verstaerkt das Streben nach Duennsein)
        - ~~"Du hast doch so ein huebsches Gesicht"~~ (fokussiert auf Aeusseres)
        - ~~Kommentare zum Gewicht~~ — weder positiv noch negativ
        """)

        show_quiz("m2_q13",
            "Welche Essstoerung hat die hoechste Mortalitaetsrate?",
            ["Bulimia Nervosa", "Binge-Eating", "Anorexia Nervosa", "Orthorexie"],
            2,
            "Anorexia Nervosa hat die hoechste Mortalitaetsrate aller psychischen Stoerungen. "
            "5-10% der Betroffenen sterben daran (Herzversagen, Organversagen, Suizid).")

    # ════════════════════════════════════════════
    # TAB 7: WEITERE STOERUNGSBILDER
    # ════════════════════════════════════════════
    with tab7:
        st.markdown("### Weitere Stoerungsbilder — Kurzuebersicht")

        with st.expander("Schulverweigerung — 4 Typen, 4 verschiedene Interventionen"):
            st.markdown("""
            | Typ | Motivation | Intervention |
            |-----|-----------|-------------|
            | **Schulangst** | Angst vor Schule (Pruefungen, Lehrer, Mitschueler) | Angstbehandlung, graduierte Rueckkehr |
            | **Trennungsangst** | Angst, von Eltern getrennt zu sein | Elternarbeit, schrittweise Abloesung |
            | **Schwаenzen** | Keine Angst — kein Bock, andere Aktivitaeten | Motivationsarbeit, Konsequenzen, Ursachenforschung |
            | **Schulmüdigkeit** | Chronische Unterforderung oder Ueberforderung | Schulische Anpassung, Begabtenfoerderung oder Lernhilfe |

            **Wichtig:** Jeder Typ braucht eine ANDERE Intervention! Alle gleich zu behandeln ist ein haeufiger Fehler.
            """)

        with st.expander("Aggression — Reaktiv vs. Proaktiv"):
            col1, col2 = st.columns(2)
            with col1:
                st.markdown("""
                **Reaktive Aggression:**
                - Emotional, impulsiv
                - Ausgeloest durch Provokation
                - "Sieht rot"
                - **Dahinter:** Angst, Ueberforderung, Schmerz
                - **Intervention:** Emotionsregulation, Trigger identifizieren
                """)
            with col2:
                st.markdown("""
                **Proaktive Aggression:**
                - Geplant, instrumentell
                - Zielgerichtet (Macht, Status)
                - "Kalkuliert"
                - **Dahinter:** Machtwunsch, fehlende Empathie
                - **Intervention:** Klare Grenzen, Konsequenzen, Empathiefoerderung
                """)
            st.info("**Merksatz:** Aggression maskiert IMMER ein unerfuelltes Beduerfnis "
                   "(Sicherheit, Kontrolle, Zugehoerigkeit, Anerkennung).")

        with st.expander("Substanzkonsum"):
            st.markdown("""
            **Unterscheidung:**

            | Stufe | Beschreibung | Intervention |
            |-------|-------------|-------------|
            | Probierkonsum | Einmalig/selten, aus Neugier | Psychoedukation, Gespra\u00e4ch |
            | Regelmaessiger Konsum | Woechentlich, sozial | Motivierende Gespraechsfuehrung |
            | Missbrauch | Trotz Konsequenzen, zur Bewaeltigung | Beratung, Weiterverweisung |
            | Abhaengigkeit | Kontrollverlust, Entzug | Fachstelle, Therapie |
            """)

        with st.expander("Gaming & Social Media — Wann wird es problematisch?"):
            st.markdown("""
            **Warnsignale fuer problematische Nutzung:**
            - Kann nicht aufhoeren, trotz negativer Konsequenzen
            - Vernachlaessigt Schule, Freundschaften, Hygiene
            - Wird aggressiv bei Unterbrechung
            - Luegt ueber Nutzungszeit
            - Schlaeft nicht mehr ausreichend
            - Zeigt Entzugserscheinungen (Unruhe, Reizbarkeit)
            - Geldausgaben fuer In-Game-Kaeufe / Lootboxen
            - Hat keine anderen Interessen mehr
            """)

        with st.expander("Mobbing & Cybermobbing"):
            st.markdown("""
            **Praevalenz:** 10-15% betroffen. **Cybermobbing hoert nie auf** — es folgt dem Jugendlichen nach Hause.

            **4 Formen:** Physisch, verbal, relational (Ausschluss), cyber

            **Warnsignale (Opfer):**
            - Ploetzlich keine Freunde mehr
            - Will nicht mehr zur Schule
            - Veraeendertes Online-Verhalten (loescht Accounts, wird stiller)
            - Somatische Beschwerden
            - Leistungseinbruch
            - Schlafstoerungen

            **Erstintervention:**
            1. Glauben und Ernst nehmen
            2. Dokumentieren (Screenshots sichern)
            3. Schutz gewaehrleisten (Klasse, Pausenaufsicht)
            4. Taeter:innen ansprechen (nicht konfrontativ, sondern verstehend)
            5. Systemische Arbeit: Klasse, Eltern, Lehrer:innen
            6. Bei Cybermobbing: BEE SECURE einschalten (8002 1234)
            """)

        show_quiz("m2_q14",
            "Ein Schueler schwаenzt regelmaessig, verbringt die Zeit mit Freunden in der Stadt. Welcher Typ Schulverweigerung?",
            ["Schulangst", "Trennungsangst", "Schwаenzen", "Schulmuedigkeit"],
            2,
            "Schwаenzen: Keine Angst vor der Schule, sondern alternative Aktivitaeten sind attraktiver. "
            "Erfordert andere Intervention als angstbasierte Schulverweigerung.")
