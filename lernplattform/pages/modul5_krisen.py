"""Modul 5: Krisen & Notfaelle — Entscheidungsbaeume und Protokolle."""
import streamlit as st
from components.helpers import show_quiz, show_case_study, show_red_flag, show_intervention, show_green_box


def show():
    st.markdown("## Modul 5: Krisen & Notfaelle")
    st.markdown("*Was tust du in den ersten 5 Minuten? Schritt-fuer-Schritt-Protokolle fuer jede Krisensituation.*")

    tab1, tab2, tab3, tab4, tab5 = st.tabs([
        "SAFER-R Modell",
        "Akute Suizidalitaet",
        "Aggression & Gewalt",
        "Offenbarung Missbrauch",
        "Notfallnummern"
    ])

    # ════════════════════════════════════════════
    # TAB 1: SAFER-R
    # ════════════════════════════════════════════
    with tab1:
        st.markdown("### SAFER-R — Das 6-Phasen-Modell der Krisenintervention")

        phases = [
            ("S — Stabilisieren", "Sicherheit herstellen",
             "- Physische Sicherheit gewaehrleisten\n"
             "- Reize reduzieren (ruhiger Raum, Tuer zu)\n"
             "- Ruhig und praesent sein\n"
             "- 'Du bist hier sicher. Ich bin bei dir.'"),
            ("A — Anerkennen", "Die Krise benennen und validieren",
             "- 'Ich sehe, dass es dir gerade sehr schlecht geht.'\n"
             "- Gefuehle ernst nehmen, nicht kleinreden\n"
             "- 'Das klingt wirklich belastend.'"),
            ("F — Facilitate (Verstehen foerdern)", "Psychoedukation ueber normale Reaktionen",
             "- 'Was du gerade erlebst, ist eine normale Reaktion auf eine unnormale Situation.'\n"
             "- Erklaere koerperliche Symptome: 'Dein Koerper reagiert auf Stress — Herzklopfen, Zittern, das ist dein Alarmsystem.'"),
            ("E — Encourage (Bewaeltigung aktivieren)", "Vorhandene Ressourcen mobilisieren",
             "- 'Was hat dir in schwierigen Situationen frueher geholfen?'\n"
             "- 'Wer ist fuer dich da?'\n"
             "- Bewaeltigungsstrategien anbieten: Atmung, Grounding"),
            ("R — Recovery (Erholung)", "Funktionsfaehigkeit wiederherstellen",
             "- Konkrete naechste Schritte planen\n"
             "- 'Was brauchst du jetzt?'\n"
             "- Struktur geben: 'Wir treffen uns morgen nochmal.'"),
            ("R — Referral (Weiterleitung)", "An Fachleute anbinden",
             "- Aktive Weiterleitung (nicht nur eine Nummer geben!)\n"
             "- 'Ich rufe jetzt dort an und erklaere die Situation.'\n"
             "- Begleitung zum Termin anbieten wenn moeglich"),
        ]

        for phase, desc, actions in phases:
            with st.expander(f"{phase} — {desc}"):
                st.markdown(actions)

        st.markdown("#### Psychologische Erste Hilfe — 5 Kernelemente")
        st.markdown("""
        1. **Kontakt herstellen:** Sich vorstellen, ruhig und freundlich
        2. **Sicherheit:** Physische Sicherheit gewaehrleisten
        3. **Stabilisierung:** Grounding (5-4-3-2-1), Atemuebungen
        4. **Information sammeln:** Offene Fragen: "Was brauchst du gerade?"
        5. **Anbindung:** Verbindung zu Unterstuetzungssystemen
        """)

        show_case_study(
            "Krisenszenario: Lea im Badezimmer",
            "Eine Lehrerin findet Lea (14) im Schulbadezimmer. Sie sitzt auf dem Boden, weint, hyperventiliert, "
            "und sagt immer wieder: 'Ich kann nicht mehr, ich kann nicht mehr.' Du wirst gerufen.",
            [
                {"question": "Was tust du ZUERST? (S — Stabilisieren)",
                 "answer": "1. Ruhig in die Naehe gehen (nicht zu nah, nicht zu weit)\n"
                          "2. Auf ihre Hoehe gehen (hinknien)\n"
                          "3. 'Lea, ich bin [Name]. Ich bin hier bei dir. Du bist sicher.'\n"
                          "4. Lehrerin bitten, vor der Tuer Ruhe zu sichern\n"
                          "5. Nicht anfassen ohne Erlaubnis"},
                {"question": "Lea hyperventiliert. Was machst du?",
                 "answer": "1. 'Lea, atme mit mir. Schau meine Haende an.'\n"
                          "2. Box Breathing vormachen: 4 ein, 4 halten, 4 aus\n"
                          "3. Wenn das nicht geht: In die gehoelten Haende atmen lassen\n"
                          "4. Grounding: 'Spuerst du den Boden unter dir? Drueck deine Fuesse fest drauf.'"},
                {"question": "Sie beruhigt sich. Was jetzt? (A, F, E, R, R)",
                 "answer": "**A:** 'Mir geht es gerade wirklich schlecht, oder?' — Validieren.\n"
                          "**F:** 'Dein Koerper hat auf etwas Schlimmes reagiert. Das Zittern und Herzrasen ist normal.'\n"
                          "**E:** 'Was hat dir frueher geholfen, wenn es dir schlecht ging?'\n"
                          "**R:** 'Wir machen jetzt einen Plan fuer heute. Magst du in den Unterricht oder brauchst du eine Pause?'\n"
                          "**R:** Je nach Ursache: Eltern informieren, Termin vereinbaren, ggf. Fachstelle"}
            ]
        )

        show_quiz("m5_q1",
            "Was ist der ERSTE Schritt im SAFER-R Modell?",
            ["Fragen, was passiert ist", "Stabilisieren und Sicherheit herstellen", "Eltern anrufen", "Einen Termin vereinbaren"],
            1,
            "Erst SICHERHEIT — physisch und emotional. Ohne Sicherheit kann kein Gespraech stattfinden.")

    # ════════════════════════════════════════════
    # TAB 2: AKUTE SUIZIDALITAET
    # ════════════════════════════════════════════
    with tab2:
        st.markdown("### Akute Suizidalitaet — Minuten-Protokoll")
        st.error("**Dies ist die kritischste Situation, der du begegnen kannst. Direktes, ruhiges Handeln rettet Leben.**")

        st.markdown("#### Minute fuer Minute")

        with st.expander("Minuten 0-5: Sicherheit"):
            st.markdown("""
            - **Ruhig bleiben.** Deine Ruhe ist die Ruhe des Jugendlichen.
            - **Bei der Person bleiben.** NICHT alleine lassen.
            - **Mittel entfernen** wenn moeglich (Medikamente, scharfe Gegenstaende)
            - **Sicheren Raum** aufsuchen (ruhig, geschuetzt)
            """)

        with st.expander("Minuten 5-15: Direkt fragen"):
            st.markdown("""
            Direkte Fragen sind SICHER und NOTWENDIG:

            1. *"Hast du Gedanken daran, dir etwas anzutun?"*
            2. Wenn ja: *"Hast du einen konkreten Plan?"*
            3. Wenn ja: *"Hast du Zugang zu Mitteln (Medikamente, Messer...)?"*
            4. *"Hast du schon einmal versucht, dir etwas anzutun?"*
            5. *"Gibt es jemanden, dem du dich anvertrauen kannst?"*

            **ZUHOEREN.** Nicht sofort beruhigen, nicht ablenken, nicht moralisieren.
            """)

        with st.expander("Minuten 15-30: Risiko einschaetzen"):
            st.markdown("""
            | Risiko | Merkmale | Massnahme |
            |--------|----------|-----------|
            | **Gering** | Passive Gedanken ("Waere besser, wenn ich nicht da waere"), kein Plan, schuetzende Faktoren vorhanden | Regelmaessige Beratung, Monitoring, Sicherheitsplan erstellen |
            | **Mittel** | Aktive Gedanken, vager Plan, aber noch distanzierbar, ambivalent | Intensivierter Kontakt, Eltern informieren, zeitnahe Fachstelle |
            | **Hoch** | Konkreter Plan, Zugang zu Mitteln, Hoffnungslosigkeit, frueherer Versuch | Sofortige Sicherheitsmassnahmen, Eltern, Notfallambulanz |
            | **Akut** | Unmittelbar bevorstehend, nicht mehr distanzierbar, plant Umsetzung | **112 RUFEN. Nicht alleine lassen. Hospitalisierung.** |
            """)

        with st.expander("Minuten 30-45: Handeln"):
            st.markdown("""
            **Bei geringem/mittlerem Risiko:**
            - Sicherheitsplan erstellen (siehe Modul 4)
            - Folgetermin fuer morgen vereinbaren
            - Eltern informieren (gemeinsam mit Jugendlichem planen)
            - Fachstelle kontaktieren

            **Bei hohem/akutem Risiko:**
            - 112 anrufen
            - Person NICHT alleine lassen — begleiten bis Hilfe da ist
            - Eltern sofort informieren
            - Dokumentieren (wer, wann, was, welche Massnahmen)
            """)

        st.markdown("---")

        show_case_study(
            "Jonas (16): 'Es hat alles keinen Sinn mehr'",
            "Jonas sitzt in deinem Buero. Er wurde vom Klassenlehrer geschickt, weil er 'komisch drauf' sei. "
            "Jonas sagt: 'Es hat alles keinen Sinn mehr. Meine Eltern lassen sich scheiden, meine Freundin "
            "hat Schluss gemacht, meine Noten sind im Keller. Wozu noch?' Er wirkt resigniert, nicht aufgeregt.",
            [
                {"question": "Wie fragst du nach Suizidalitaet?",
                 "answer": "Direkt und ruhig:\n"
                          "'Jonas, wenn du sagst, es hat keinen Sinn mehr — hast du manchmal Gedanken, dass du nicht mehr leben moechtest?'\n\n"
                          "NICHT: 'Du willst dir doch nicht etwas antun?' (suggestiv, verneint)\n"
                          "NICHT: 'Du denkst doch nicht an Selbstmord?' (zu konfrontativ)"},
                {"question": "Jonas sagt: 'Ja, manchmal denke ich, es waere besser, wenn ich einfach nicht mehr da waere.' Naechster Schritt?",
                 "answer": "Vertiefen (nicht erschrecken!):\n"
                          "'Danke, dass du mir das sagst. Das braucht Mut. Hast du einen konkreten Plan, wie du dir etwas antun wuerdest?'\n"
                          "Risiko einschaetzen: Plan? Mittel? Zeitrahmen? Frueherer Versuch?"},
                {"question": "Jonas sagt: 'Nein, keinen Plan. Aber manchmal denke ich einfach, alle waeren besser dran ohne mich.'",
                 "answer": "**Risikoeinschaetzung: MITTEL** (aktive Gedanken, aber kein Plan, noch ansprechbar)\n\n"
                          "1. Validieren: 'Du traegst gerade eine enorme Last.'\n"
                          "2. Sicherheitsplan erstellen: Warnsignale, Bewaeltigungsstrategien, Ansprechpersonen\n"
                          "3. Eltern informieren (mit Jonas gemeinsam)\n"
                          "4. Folgetermin morgen\n"
                          "5. Fachstelle kontaktieren (CHL, Therapeut:in)\n"
                          "6. Notfallnummern mitgeben: 45 45 45"}
            ]
        )

        show_quiz("m5_q2",
            "Erhoehen direkte Fragen nach Suizidalitaet das Risiko?",
            ["Ja, man bringt den Jugendlichen auf die Idee",
             "Nein — Forschung zeigt eindeutig, dass direkte Fragen sicher und notwendig sind",
             "Nur bei Jugendlichen unter 14",
             "Es kommt darauf an"],
            1,
            "Direkte Fragen nach Suizidalitaet erhoehen das Risiko NICHT. Sie zeigen: 'Ich nehme dich ernst. "
            "Dieses Thema ist nicht tabu.' Das entlastet.")

        show_quiz("m5_q3",
            "Ein depressiver Jugendlicher wirkt ploetzlich ruhig und verschenkt seine Lieblingssachen. Was tust du?",
            ["Freuen, dass es ihm besser geht",
             "Abwarten und beobachten",
             "SOFORT nachfragen — das kann ein Zeichen sein, dass ein Entschluss gefasst wurde",
             "Die Eltern informieren, aber nicht den Jugendlichen ansprechen"],
            2,
            "Ploetzliche Ruhe + Verschenken = moegliches Warnsignal fuer gefassten Suizidplan. "
            "SOFORT nachfragen: 'Ich mache mir Sorgen. Hast du vor, dir etwas anzutun?'")

    # ════════════════════════════════════════════
    # TAB 3: AGGRESSION
    # ════════════════════════════════════════════
    with tab3:
        st.markdown("### Akute Aggression — De-Eskalation in 10 Schritten")

        steps = [
            "**1. Eigene Sicherheit ZUERST.** Wenn du dich bedroht fuehlst: Raum verlassen, Hilfe holen.",
            "**2. Abstand halten.** Mindestens 1.5 Meter. Nie in die Ecke draengen.",
            "**3. Seitlich positionieren.** Nicht frontal gegenueber stehen (wirkt konfrontativ).",
            "**4. Haende sichtbar.** Offene Handflaechen zeigen — signalisiert: keine Bedrohung.",
            "**5. Stimme senken.** Langsam und ruhig sprechen. Leiser als der Jugendliche.",
            "**6. Gefuehle validieren.** 'Ich sehe, dass du richtig wuetend bist.' NICHT das Verhalten gutheissen.",
            "**7. Nicht argumentieren.** Keine Logik, keine Belehrungen. Das Gehirn ist im Kampfmodus.",
            "**8. Wahlmoeglichkeiten anbieten.** 'Willst du dich setzen oder eine Runde drehen?'",
            "**9. Zeit geben.** Adrenalin braucht 20+ Minuten. Nicht draengen.",
            "**10. Hilfe holen** wenn noetig. Das ist keine Schwaeche.",
        ]
        for step in steps:
            st.markdown(step)

        st.markdown("#### Was funktioniert vs. Was nicht funktioniert")
        col1, col2 = st.columns(2)
        with col1:
            show_green_box("Was funktioniert",
                "- Ruhig bleiben\n- Gefuehle benennen\n- Wahlmoeglichkeiten geben\n"
                "- Zeit und Raum geben\n- Praesent bleiben ohne zu draengen\n- Spaeter reflektieren")
        with col2:
            show_red_flag(
                "- Zurueckschreien\n- Drohen oder strafen\n- Festhalten (ausser bei Gefahr fuer andere)\n"
                "- Vor der Gruppe beschaemen\n- Logisch argumentieren\n- Sarkasmus oder Ironie")

        show_quiz("m5_q4",
            "Wie lange braucht Adrenalin ungefaehr, um abgebaut zu werden?",
            ["2-3 Minuten", "5 Minuten", "20+ Minuten", "1 Stunde"],
            2,
            "Adrenalin braucht mindestens 20 Minuten zum Abbauen. In dieser Zeit ist das Gehirn im "
            "'Kampf-oder-Flucht-Modus'. Kognitive Gespraeche sind sinnlos — erst stabilisieren.")

    # ════════════════════════════════════════════
    # TAB 4: OFFENBARUNG MISSBRAUCH
    # ════════════════════════════════════════════
    with tab4:
        st.markdown("### Wenn ein Kind Missbrauch offenbart — 12-Schritte-Protokoll")
        st.error("**Pflichtmeldung:** Artikel 7 Jugendschutzgesetz Luxemburg. Kinderschutz geht VOR Schweigepflicht.")

        protocol = [
            ("1. Ruhig bleiben", "Kein Erschrecken, kein Entsetzen im Gesicht. Deine Reaktion beeinflusst, ob das Kind weiterspricht."),
            ("2. Glauben", "'Ich glaube dir.' — Die drei wichtigsten Worte."),
            ("3. Nicht verhoerartig fragen", "Keine Leitfragen ('Hat er dich angefasst?'). Offene Fragen: 'Was ist passiert?'"),
            ("4. Zuhoeren", "Nicht unterbrechen. Nicht nachbohren. Was das Kind freiwillig erzaehlt, reicht."),
            ("5. Sorgfaeltige Sprache", "'Das ist nicht deine Schuld.' — 'Du hast nichts falsch gemacht.'"),
            ("6. Ehrlich sein", "'Ich muss dafuer sorgen, dass du sicher bist. Dafuer brauche ich Hilfe von Leuten, die sich damit auskennen.'"),
            ("7. Dokumentieren", "Woertliche Aussagen aufschreiben. NICHT interpretieren."),
            ("8. ONE melden", "Office National de l'Enfance — innerhalb von 24 Stunden. Tel: 247-73100"),
            ("9. Taeter:in NICHT konfrontieren", "Das gefaehrdet das Kind und die Ermittlung."),
            ("10. Eltern NICHT informieren", "Wenn die/der Taeter:in im Haushalt lebt!"),
            ("11. Sicherheit pruefen", "Kann das Kind sicher nach Hause gehen? Wenn nicht: Schutzmassnahmen."),
            ("12. Nicht alleine lassen", "Begleite das Kind. Stelle sicher, dass es betreut ist."),
        ]

        for title, desc in protocol:
            with st.expander(title):
                st.markdown(desc)

        st.markdown("---")

        show_case_study(
            "Mia (13): 'Mein Stiefvater tut mir weh'",
            "Mia kommt nach der Pause zu dir und sagt leise: 'Ich muss dir was sagen. Aber du darfst es "
            "niemandem sagen.' Du sagst: 'Ich hoere dir zu. Es gibt nur eine Ausnahme: Wenn du in Gefahr "
            "bist, muss ich dafuer sorgen, dass du sicher bist.' Mia sagt: 'Mein Stiefvater... er tut mir "
            "weh. Abends, wenn Mama arbeitet.'",
            [
                {"question": "Was sagst du ZUERST?",
                 "answer": "'Ich glaube dir, Mia. Das ist nicht deine Schuld. Dass du mir das erzaehlst, "
                          "ist sehr mutig.' — Glauben, validieren, Schuld nehmen."},
                {"question": "Mia sagt: 'Bitte sag es nicht meiner Mama, sie wird boese auf mich.' Was sagst du?",
                 "answer": "'Ich verstehe, dass du Angst hast. Aber es ist meine Aufgabe, dafuer zu sorgen, "
                          "dass du sicher bist. Es gibt Menschen, die sich damit auskennen und die dir helfen "
                          "koennen. Ich werde nichts tun, ohne es dir zu sagen.' — Ehrlich, nicht versprechen "
                          "was du nicht halten kannst."},
                {"question": "Was sind deine naechsten Schritte?",
                 "answer": "1. Dokumentieren (Mias Worte woertlich)\n"
                          "2. ONE anrufen (247-73100) innerhalb von 24h\n"
                          "3. Mutter NICHT informieren (Stiefvater im Haushalt!)\n"
                          "4. Stiefvater NICHT konfrontieren\n"
                          "5. Pruefen: Kann Mia heute sicher nach Hause? Wenn nein: Schutzunterbringung.\n"
                          "6. Mia nicht alleine lassen"}
            ]
        )

        show_quiz("m5_q5",
            "Mia bittet dich, es niemandem zu sagen. Was tust du?",
            ["Versprechen, es geheim zu halten — Vertrauen ist wichtiger",
             "Ehrlich sagen, dass du fuer ihre Sicherheit sorgen musst",
             "Sofort die Mutter anrufen",
             "Den Stiefvater zur Rede stellen"],
            1,
            "Niemals Geheimhaltung versprechen bei Kindeswohlgefaehrdung. Aber ehrlich und transparent sein: "
            "'Ich muss dafuer sorgen, dass du sicher bist.'")

    # ════════════════════════════════════════════
    # TAB 5: NOTFALLNUMMERN
    # ════════════════════════════════════════════
    with tab5:
        st.markdown("### Notfallnummern & Ressourcen Luxemburg")

        st.error("**Bei akuter Lebensgefahr: 112**")

        numbers = [
            ("112", "Notruf (Rettung, Polizei, Feuerwehr)", "Akute Lebensgefahr, medizinischer Notfall"),
            ("113", "Police Grand-Ducale", "Straftaten, Gewalt, Bedrohung"),
            ("45 45 45", "SOS Detresse", "Krisentelefon 24/7 — Suizidalitaet, psychische Krise"),
            ("116 111", "Kanner-Jugendtelefon", "Fuer Kinder und Jugendliche — anonym und kostenlos"),
            ("8002 1234", "BEE SECURE / RESPECT.lu", "Online-Sicherheit, Cybermobbing, Radikalisierung"),
            ("247-73100", "ONE (Office National de l'Enfance)", "Kinderschutz, Pflichtmeldung bei Missbrauch/Vernachlaessigung"),
            ("+352 29 77 89-1", "OMEGA 90", "Trauer- und Palliativberatung"),
        ]

        for number, name, desc in numbers:
            st.markdown(f"### {number}")
            st.markdown(f"**{name}** — {desc}")
            st.markdown("---")

        st.markdown("#### Wann welche Nummer?")
        st.markdown("""
        | Situation | Nummer |
        |-----------|--------|
        | Jugendlicher will sich JETZT etwas antun | **112** |
        | Jugendlicher hat Suizidgedanken (nicht akut) | **45 45 45** |
        | Kind offenbart Missbrauch | **247-73100** (ONE) |
        | Cybermobbing | **8002 1234** (BEE SECURE) |
        | Jugendlicher braucht Gespraechspartner | **116 111** |
        | Verdacht auf Radikalisierung | **8002 1234** (RESPECT.lu) |
        | Trauerfall | **+352 29 77 89-1** (OMEGA 90) |
        """)
