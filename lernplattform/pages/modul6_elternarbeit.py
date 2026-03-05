"""Modul 6: Elternarbeit & Systemisches Arbeiten."""
import streamlit as st
from components.helpers import show_quiz, show_case_study, show_red_flag, show_intervention, show_green_box


def show():
    st.markdown("## Modul 6: Elternarbeit & Systemisches Arbeiten")
    st.markdown("*Elterngespraeche, Lehrerberatung, das Luxemburger Hilfsnetzwerk und Pflichtmeldungen.*")

    tab1, tab2, tab3, tab4, tab5 = st.tabs([
        "Elterngespraeche",
        "Lehrerberatung",
        "Netzwerk Luxemburg",
        "Pflichtmeldung",
        "Runde Tische"
    ])

    # ════════════════════════════════════════════
    # TAB 1: ELTERNGESPRAECHE
    # ════════════════════════════════════════════
    with tab1:
        st.markdown("### Elterngespraeche fuehren — Wenn es schwierig wird")

        st.markdown("#### 8 Grundprinzipien")
        principles = [
            "**Positiv beginnen:** Immer zuerst etwas Gutes ueber das Kind sagen.",
            "**Verstaendnis zeigen:** 'Ich kann mir vorstellen, dass das schwierig fuer Sie ist.'",
            "**Sprache anpassen:** Keine Fachbegriffe. Klar und verstaendlich.",
            "**Partnerschaftlich:** 'Wir arbeiten gemeinsam fuer Ihr Kind.'",
            "**Vertraulichkeit respektieren:** Was der/die Jugendliche erzaehlt hat, bleibt (groeßtenteils) vertraulich.",
            "**Kulturelle Sensibilitaet:** Luxemburg ist multikulturell. Andere Kulturen, andere Vorstellungen von Psyche.",
            "**Dolmetscher nutzen:** Bei Sprachbarrieren professionelle Dolmetscher einsetzen.",
            "**Dokumentieren:** Gespraech und Vereinbarungen festhalten.",
        ]
        for p in principles:
            st.markdown(f"- {p}")

        st.markdown("---")
        st.markdown("#### Dialogsimulationen")

        dialog_choice = st.selectbox("Waehle ein Szenario:", [
            "Eltern erfahren von Selbstverletzung (Ritzen)",
            "Schulverweigerung besprechen",
            "Aggressives Verhalten thematisieren"
        ], key="parent_dialog")

        if dialog_choice == "Eltern erfahren von Selbstverletzung (Ritzen)":
            st.markdown("##### Dialog: Eltern erfahren, dass ihr Kind sich ritzt")
            dialog = [
                ("Du", "Frau und Herr Mueller, danke, dass Sie gekommen sind. Bevor wir ins Gespraech gehen — Ihre Tochter Lisa ist ein engagiertes Maedchen, das in der Klasse geschaetzt wird."),
                ("Du", "Ich habe Sie eingeladen, weil mir etwas aufgefallen ist, das mir Sorgen macht. Lisa hat sich an den Armen geritzt."),
                ("Mutter", "(erschrocken) Was?! Das kann nicht sein! Sie... sie hat uns nichts gesagt!"),
                ("Vater", "Ist das nicht so ein Aufmerksamkeitsding? Haben wir was falsch gemacht?"),
                ("Du", "Ich verstehe Ihren Schock. Das ist erstmal viel zu verarbeiten. Und nein — Selbstverletzung bedeutet NICHT, dass Sie als Eltern versagt haben. Und es ist auch kein 'Aufmerksamkeitsding'."),
                ("Du", "Selbstverletzung ist eine Art, mit ueberwаeltigenden Gefuehlen umzugehen. Lisa hat gerade keinen anderen Weg gefunden, mit ihrem inneren Druck umzugehen. Das ist anders als ein Suizidversuch."),
                ("Mutter", "(weint) Aber warum sagt sie uns nichts?"),
                ("Du", "Viele Jugendliche schaemen sich und haben Angst vor der Reaktion der Eltern. Dass Sie jetzt hier sind und sich sorgen, zeigt Lisa, dass Sie fuer sie da sind."),
                ("Du", "Was Lisa jetzt braucht: Keine Vorwuerfe, kein Panik. Sondern das Signal: 'Wir sind da. Wir lieben dich. Und wir finden gemeinsam Hilfe.'"),
            ]
            for speaker, text in dialog:
                if speaker == "Du":
                    st.markdown(f"**Psycholog:in:** *{text}*")
                else:
                    st.markdown(f"**{speaker}:** {text}")

            st.info("**Kernsaetze fuer Eltern bei SVV:**\n"
                   "- SVV ist NICHT gleich Suizid\n"
                   "- SVV ist eine (dysfunktionale) Bewaeltigungsstrategie\n"
                   "- Nicht die Schuldfrage stellen, sondern: Was braucht das Kind JETZT?\n"
                   "- Professionelle Hilfe suchen\n"
                   "- Wunden nicht ignorieren, aber auch nicht dramatisieren")

        elif dialog_choice == "Schulverweigerung besprechen":
            st.markdown("##### Dialog: Schulverweigerung")
            dialog = [
                ("Du", "Frau Dupont, ich freue mich, dass Sie da sind. Tom ist mir aufgefallen — er ist ein kluger Junge mit tollen Ideen."),
                ("Du", "In den letzten 4 Wochen hat Tom aber 8 Tage gefehlt, immer montags und mittwochs. Die Fehlzeiten nehmen zu."),
                ("Mutter", "Ja, er hat immer Bauchschmerzen. Ich war beim Arzt, der findet nichts."),
                ("Du", "Das nehme ich sehr ernst. Wenn der Koerper auf etwas reagiert, das der Arzt nicht findet, kann es sein, dass Toms Koerper auf etwas Psychisches reagiert. Das ist NICHT simuliert — die Bauchschmerzen sind real."),
                ("Mutter", "Aber was soll ich machen? Ihn zwingen?"),
                ("Du", "Zwingen verstaerkt oft den Druck. Aber zu Hause lassen verstaerkt die Vermeidung. Der Mittelweg: Wir schauen gemeinsam, was Tom AN DER SCHULE stresst, und veraendern das. Gleichzeitig unterstuetzen wir Tom, schrittweise wieder regelmaessig zu kommen."),
                ("Du", "Darf ich fragen — gibt es zu Hause gerade Veraenderungen? Manchmal reagieren Kinder auf Familiensituationen mit Schulvermeidung."),
            ]
            for speaker, text in dialog:
                if speaker == "Du":
                    st.markdown(f"**Psycholog:in:** *{text}*")
                else:
                    st.markdown(f"**{speaker}:** {text}")

        else:
            st.markdown("##### Dialog: Aggressives Verhalten")
            dialog = [
                ("Du", "Herr und Frau Weber, danke fuers Kommen. Lukas hat eine Staerke, die mir auffaellt: Er hat einen starken Gerechtigkeitssinn."),
                ("Vater", "(ueberrascht) Das hoeren wir selten. Meistens hoeren wir, was er alles falsch macht."),
                ("Du", "Ich verstehe. Und ja, es gibt Situationen, die schwierig sind. Letzte Woche hat Lukas einen Mitschueler geschubst und einen Stuhl umgeworfen. Das koennen wir nicht akzeptieren."),
                ("Du", "Aber ich glaube, hinter dem Verhalten steckt etwas. Aggression ist fast immer ein Zeichen fuer ein unerfuelltes Beduerfnis — vielleicht Kontrolle, Zugehoerigkeit oder das Gefuehl, nicht gehooert zu werden."),
                ("Mutter", "Zu Hause ist er auch so. Wir wissen nicht mehr weiter."),
                ("Du", "Das klingt erschoepfend. Ich moechte mit Ihnen gemeinsam herausfinden, was Lukas braucht. Nicht: Was ist falsch mit Lukas? Sondern: Was fehlt ihm gerade?"),
            ]
            for speaker, text in dialog:
                if speaker == "Du":
                    st.markdown(f"**Psycholog:in:** *{text}*")
                else:
                    st.markdown(f"**{speaker}:** {text}")

            st.info("**Reframing bei Aggression:**\n"
                   "Nicht: 'Ihr Kind ist aggressiv.'\n"
                   "Sondern: 'Ihr Kind zeigt uns durch sein Verhalten, dass es etwas braucht, das es gerade nicht bekommt.'")

        show_quiz("m6_q1",
            "Wie beginnst du ein schwieriges Elterngespraech?",
            ["Direkt mit dem Problem", "Mit etwas Positivem ueber das Kind", "Mit einer Diagnose", "Mit Vorwuerfen an die Eltern"],
            1,
            "Immer zuerst etwas Positives ueber das Kind sagen. Das oeffnet die Eltern und zeigt: "
            "'Ich sehe Ihr Kind als Ganzes, nicht nur das Problem.'")

    # ════════════════════════════════════════════
    # TAB 2: LEHRERBERATUNG
    # ════════════════════════════════════════════
    with tab2:
        st.markdown("### Lehrerberatung")

        st.markdown("#### Was Lehrer:innen wissen DUERFEN vs. NICHT DUERFEN")
        col1, col2 = st.columns(2)
        with col1:
            show_green_box("Duerfen wissen",
                "- Dass du das Kind begleitest\n"
                "- Allgemeine Handlungsempfehlungen\n"
                "- Ob sie etwas beachten sollen\n"
                "- Warnsignale, auf die sie achten koennen\n"
                "- Ob akute Gefaehrdung besteht")
        with col2:
            show_red_flag(
                "- Diagnosen oder Verdachtsdiagnosen\n"
                "- Inhalte der Beratungsgespraeche\n"
                "- Familiensituationen im Detail\n"
                "- Persoenliche Informationen des Kindes\n"
                "- Traumadetails")

        st.markdown("#### Info-Blaetter fuer Lehrer:innen")

        info_choice = st.selectbox("Waehle ein Thema:", [
            "Angst im Klassenzimmer",
            "ADHS im Klassenzimmer",
            "Trauma-sensibles Klassenzimmer"
        ], key="info_sheet")

        if info_choice == "Angst im Klassenzimmer":
            st.markdown("##### Info-Blatt: Angst im Klassenzimmer")
            col1, col2 = st.columns(2)
            with col1:
                st.markdown("""
                **Was Sie beobachten koennen:**
                - Haeufige Toilettengaenge
                - Vermeidung von Praesentationen
                - Extrem stilles Verhalten
                - Haeufiges Fehlen (v.a. bestimmte Tage)
                - Koerperliche Beschwerden vor Tests
                - Uebermaessiges Nachfragen
                """)
            with col2:
                st.markdown("""
                **Was hilft:**
                - Vorhersagbare Struktur geben
                - Nicht vor der Klasse blosstellen
                - Alternative Prueéungsformen anbieten
                - Graduiert fordern (erst 1:1, dann Kleingruppe)
                - Positives Feedback geben
                - Geduld — Angst braucht Zeit
                """)

        elif info_choice == "ADHS im Klassenzimmer":
            st.markdown("##### Info-Blatt: ADHS im Klassenzimmer")
            col1, col2 = st.columns(2)
            with col1:
                st.markdown("""
                **Was Sie beobachten:**
                - Zappeln, aufstehen, herumlaufen
                - Reinrufen, nicht warten koennen
                - Verliert Materialien
                - Kann Aufgaben nicht beenden
                - "In seiner eigenen Welt"
                - Emotionale Ausbrueche
                """)
            with col2:
                st.markdown("""
                **Was hilft:**
                - Klare, kurze Anweisungen (eine auf einmal)
                - Sitzplatz vorne, wenig Ablenkung
                - Bewegungspausen erlauben
                - Timer und visuelle Hilfen nutzen
                - Checklisten fuer Aufgaben
                - Staerken foerdern (Kreativitaet!)
                """)

        else:
            st.markdown("##### Info-Blatt: Trauma-sensibles Klassenzimmer")
            col1, col2 = st.columns(2)
            with col1:
                st.markdown("""
                **Zeichen von Trauma in der Klasse:**
                - Schreckhaftigkeit bei Geraueschen
                - "Wegdriften" (Dissoziation)
                - Ueberreaktion auf kleine Auseinandersetzungen
                - Sitzt am Ausgang, scannt den Raum
                - Kann sich nicht konzentrieren
                - Aggressive Reaktionen ohne klaren Ausloeser
                """)
            with col2:
                st.markdown("""
                **Trauma-sensitive Strategien:**
                - Vorhersagbarkeit und Routine
                - NICHT erzwingen: Augenkontakt, lautes Vorlesen
                - Warnung VOR lauten Geraueschen geben
                - Sicheren Rueckzugsort anbieten
                - Nicht von hinten ansprechen
                - Bei Dissoziation: sanft mit Namen ansprechen
                """)
            show_red_flag("**Wichtig:** Wenn ein Kind dissoziiert (starrer Blick, 'weg'), "
                         "NICHT schuetteln oder laut ansprechen. Sanft: '[Name], du bist in der Klasse. Du bist sicher.'")

        show_quiz("m6_q2",
            "Darf ein Lehrer wissen, WARUM ein Schueler in Beratung ist?",
            ["Ja, vollstaendige Transparenz ist wichtig",
             "Nein — nur dass Beratung stattfindet und allgemeine Empfehlungen",
             "Ja, aber nur muendlich",
             "Nur wenn die Eltern zustimmen"],
            1,
            "Vertraulichkeit schuetzt den Jugendlichen. Lehrer:innen erfahren: Beratung findet statt + "
            "was sie konkret tun koennen. Keine Diagnosen, keine Inhalte.")

    # ════════════════════════════════════════════
    # TAB 3: NETZWERK LUXEMBURG
    # ════════════════════════════════════════════
    with tab3:
        st.markdown("### Das Luxemburger Hilfsnetzwerk")
        st.markdown("Kenne dein Netzwerk — du arbeitest nie allein.")

        institutions = [
            ("ONE (Office National de l'Enfance)", "247-73100", "Kinderschutz, Pflichtmeldungen, Schutzmassnahmen"),
            ("SePAS / CePAS / CPOS", "Schulintern", "Schulpsychologische Dienste, Berufsorientierung"),
            ("CHL — Kinder-/Jugendpsychiatrie", "+352 44 11 1", "Stationaere und ambulante psychiatrische Versorgung"),
            ("SOS Detresse", "45 45 45", "24/7 Krisentelefon fuer psychische Notlagen"),
            ("Kanner-Jugendtelefon", "116 111", "Anonymes Gespraechsangebot fuer Kinder und Jugendliche"),
            ("BEE SECURE", "8002 1234", "Online-Sicherheit, Cybermobbing, Medienkompetenz"),
            ("RESPECT.lu", "8002 1234", "Praevention von Radikalisierung und Extremismus"),
            ("Planning Familial", "+352 48 59 76", "Sexualitaet, Verhuetung, Schwangerschaftsberatung"),
            ("Croix-Rouge Luxembourg", "+352 27 55 1", "Soziale Hilfe, Notunterbringung, Jugendarbeit"),
            ("Caritas Luxembourg", "+352 40 21 31 1", "Sozialberatung, Migration, Wohnen"),
            ("Femmes en Detresse", "+352 40 20 40", "Gewalt gegen Frauen und Maedchen"),
            ("OMEGA 90", "+352 29 77 89-1", "Trauerbegleitung und Palliativversorgung"),
            ("Ligue HMC", "+352 49 04 54 1", "Psychische Gesundheitsfoerderung, Beratung"),
        ]

        st.markdown("| Institution | Telefon | Zustaendigkeit |")
        st.markdown("|------------|---------|---------------|")
        for name, phone, desc in institutions:
            st.markdown(f"| **{name}** | {phone} | {desc} |")

        st.markdown("---")
        st.markdown("#### Wohin verweise ich? — Interaktive Uebung")

        scenario = st.selectbox("Waehle ein Szenario:", [
            "14-Jaehrige wird online beleidigt und bedroht",
            "16-Jaehriger mit akuter Suizidalitaet",
            "12-Jaehrige zeigt blaue Flecken, will nicht darueber reden",
            "17-Jaehrige mit Essstoerung",
            "15-Jaehriger radikalisiert sich"
        ], key="referral_scenario")

        referrals = {
            "14-Jaehrige wird online beleidigt und bedroht": ("BEE SECURE (8002 1234)", "Fuer Cybermobbing und Online-Belastigung. Sie helfen bei Dokumentation, Meldung und bieten Beratung an. Bei Straftat auch: Police 113."),
            "16-Jaehriger mit akuter Suizidalitaet": ("112 (bei akuter Gefahr) oder SOS Detresse (45 45 45) + CHL Jugendpsychiatrie", "Bei akuter Lebensgefahr sofort 112. Sonst: SOS Detresse fuer Krisenintervention und CHL fuer psychiatrische Abklaerung."),
            "12-Jaehrige zeigt blaue Flecken, will nicht darueber reden": ("ONE (247-73100) — Pflichtmeldung!", "Bei Verdacht auf koerperliche Misshandlung: Pflichtmeldung an ONE. Du musst nicht sicher sein — der Verdacht reicht."),
            "17-Jaehrige mit Essstoerung": ("CHL Jugendpsychiatrie + Hausarzt", "Essstoerungen brauchen medizinische UND psychologische Behandlung. Erst aerztliche Abklaerung (Blutwerte, Herz), dann therapeutische Anbindung."),
            "15-Jaehriger radikalisiert sich": ("RESPECT.lu (8002 1234)", "Fachstelle fuer Radikalisierungspraevention. Vertraulich, auch anonyme Beratung moeglich. Bei akuter Bedrohung: Police 113."),
        }

        correct_ref, explanation = referrals[scenario]
        with st.expander("Richtige Antwort anzeigen"):
            st.success(f"**{correct_ref}**")
            st.markdown(explanation)

        show_quiz("m6_q3",
            "Du vermutest, dass ein Kind vernachlaessigt wird. Musst du warten, bis du sicher bist, bevor du meldest?",
            ["Ja, erst Beweise sammeln", "Nein — der Verdacht reicht fuer eine Pflichtmeldung an ONE", "Ja, erst mit den Eltern sprechen", "Nein, aber erst mit dem Kollegium beraten"],
            1,
            "Pflichtmeldung bei VERDACHT. Du musst nicht sicher sein. ONE kuemmert sich um die Aufklaerung. "
            "Lieber einmal zu viel melden als einmal zu wenig.")

    # ════════════════════════════════════════════
    # TAB 4: PFLICHTMELDUNG
    # ════════════════════════════════════════════
    with tab4:
        st.markdown("### Pflichtmeldung — Wann und Wie")
        st.error("**Artikel 7 Jugendschutzgesetz Luxemburg:** Wer Kenntnis von Kindesmisshandlung oder "
                "-vernachlaessigung erlangt, ist zur Meldung verpflichtet. Schweigepflicht ist hier NACHRANGIG.")

        st.markdown("#### Wann melden?")
        st.markdown("""
        - Koerperliche Misshandlung (Verletzungen, blaue Flecken, Verbrennungen)
        - Sexueller Missbrauch (Offenbarung oder starker Verdacht)
        - Vernachlaessigung (mangelnde Hygiene, Ernaehrung, medizinische Versorgung)
        - Psychische Misshandlung (extreme Abwertung, Isolation, Instrumentalisierung)
        - Zeuge haeuslicher Gewalt
        """)

        st.markdown("#### Wie melden?")
        st.markdown("""
        1. **Anruf bei ONE:** 247-73100
        2. **Schriftliche Meldung** mit folgenden Informationen:
           - Deine Daten (Name, Funktion, Institution, Kontakt)
           - Daten des Kindes (Name, Geburtsdatum, Adresse, Schule/Klasse)
           - Daten der Sorgeberechtigten
           - Daten des/der mutmasslichen Taeter:in
           - Art der Gefaehrdung
           - Konkrete Beobachtungen (Was? Wann? Wie oft?)
           - Koerperliche Anzeichen
           - Aussagen des Kindes (WOERTLICH)
           - Bisherige Massnahmen
           - Dringlichkeit (Akut / Innerhalb 48h / Mittelfristig)
        """)

        show_quiz("m6_q4",
            "In welcher Situation MUSS die Schweigepflicht gebrochen werden?",
            ["Wenn Eltern es verlangen", "Bei Kindesmisshandlung oder -vernachlaessigung",
             "Wenn der Schulleiter fragt", "Nur bei Suizidalitaet"],
            1,
            "Kinderschutz geht VOR Schweigepflicht. Das ist gesetzlich geregelt (Art. 7 Jugendschutzgesetz).")

    # ════════════════════════════════════════════
    # TAB 5: RUNDE TISCHE
    # ════════════════════════════════════════════
    with tab5:
        st.markdown("### Runde Tische & Fallkonferenzen")

        st.markdown("#### 8-Schritte-Protokoll")
        steps = [
            ("1. Vorbereitung", "Anlass klaeren, Teilnehmer:innen einladen, Einverstaendnis der Eltern einholen, Informationen zusammenstellen."),
            ("2. Eroeffnung", "Begruessung, Vertraulichkeit betonen, Regeln klaeren, Zeitrahmen festlegen."),
            ("3. Sachstandsbericht", "Jede:r Teilnehmer:in berichtet aus seiner/ihrer Perspektive. Keine Bewertungen."),
            ("4. Gemeinsame Analyse", "Was ist die zentrale Frage? Wo sind wir uns einig? Wo nicht?"),
            ("5. Zielsetzung", "SMART-Ziele formulieren: Spezifisch, Messbar, Attraktiv, Realistisch, Terminiert."),
            ("6. Massnahmenplanung", "Wer macht was bis wann? Konkret und verbindlich."),
            ("7. Dokumentation", "Protokoll mit Anwesenden, TOPs, Vereinbarungen, naechsten Schritten."),
            ("8. Folgetermin", "Wann treffen wir uns wieder? Wer evaluiert den Fortschritt?"),
        ]
        for title, desc in steps:
            with st.expander(title):
                st.markdown(desc)

        show_quiz("m6_q5",
            "Was bedeutet 'SMART' bei Zielsetzungen?",
            ["Schnell, Mutig, Aktiv, Radikal, Toll",
             "Spezifisch, Messbar, Attraktiv, Realistisch, Terminiert",
             "Sicher, Methodisch, Angepasst, Regulaer, Transparent",
             "Systematisch, Multiprofessionell, Allgemein, Richtig, Teamorientiert"],
            1,
            "SMART-Ziele sind konkret und ueberpruefbar. 'Es soll besser werden' ist KEIN SMART-Ziel. "
            "'Tom besucht bis Ende Maerz an 4 von 5 Tagen den Unterricht' ist eins.")
