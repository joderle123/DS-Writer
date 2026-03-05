"""Modul 7: Diagnostik, Selbstfuersorge & Spezialthemen."""
import streamlit as st
from components.helpers import show_quiz, show_case_study, show_red_flag, show_intervention, show_green_box


def show():
    st.markdown("## Modul 7: Diagnostik, Selbstfuersorge & Spezialthemen")
    st.markdown("*Screening-Instrumente, Burnout-Praevention und Spezialthemen wie Social Media, Hochbegabung und Trauer.*")

    tab1, tab2, tab3, tab4, tab5 = st.tabs([
        "Screening-Instrumente",
        "ABC-Analyse",
        "Selbstfuersorge",
        "Ethische Dilemmata",
        "Spezialthemen"
    ])

    # ════════════════════════════════════════════
    # TAB 1: SCREENING
    # ════════════════════════════════════════════
    with tab1:
        st.markdown("### Screening-Instrumente")
        st.warning("**Grundregel:** Screening ist NICHT gleich Diagnose! Screening identifiziert Auffaelligkeiten. "
                  "Diagnose ist Aufgabe von Fachaaerzt:innen und Therapeut:innen.")

        with st.expander("SDQ — Strengths and Difficulties Questionnaire"):
            st.markdown("""
            **Was:** 25 Items, 5 Skalen. Verfuegbar in vielen Sprachen (wichtig fuer Luxemburg!).

            **Skalen und Cut-Offs:**

            | Skala | Normal | Grenzwertig | Auffaellig |
            |-------|--------|-------------|-----------|
            | Emotionale Probleme | 0-3 | 4 | 5-10 |
            | Verhaltensprobleme | 0-2 | 3 | 4-10 |
            | Hyperaktivitaet | 0-5 | 6 | 7-10 |
            | Peer-Probleme | 0-2 | 3 | 4-10 |
            | Prosoziales Verhalten | 6-10 | 5 | 0-4 (umgekehrt!) |
            | **Gesamtproblemwert** | **0-13** | **14-16** | **17-40** |

            **Wichtig:** Prosozial ist UMGEKEHRT — niedrig = auffaellig!
            **Kann ausgefuellt werden von:** Jugendlichem selbst, Eltern, Lehrer:in.
            """)

        with st.expander("PHQ-A — Depression-Screening"):
            st.markdown("""
            **Was:** 9 Items zur Depressionserfassung.

            **Interpretation:**

            | Score | Bedeutung | Aktion |
            |-------|-----------|--------|
            | 0-4 | Minimal / keine Depression | Monitoring |
            | 5-9 | Leichte Depression | Beratung, Monitoring |
            | 10-14 | Mittlere Depression | Beratung intensivieren, Fachstelle erwaegen |
            | 15-19 | Mittelschwere Depression | Weiterverweisung an Therapeut:in |
            | 20-27 | Schwere Depression | Dringende Weiterverweisung |
            """)
            show_red_flag("**KRITISCH: Item 9** fragt nach Suizidalitaet. JEDER Score > 0 auf diesem Item "
                         "erfordert ein direktes Gespraech ueber Suizidgedanken!")

        with st.expander("GAD-7 — Angst-Screening"):
            st.markdown("""
            **Was:** 7 Items zur Angsterfassung.

            | Score | Bedeutung |
            |-------|-----------|
            | 0-4 | Minimal |
            | 5-9 | Leicht |
            | 10-14 | Mittel |
            | 15-21 | Schwer |
            """)

        with st.expander("SBQ-R — Suizidalitaets-Screening"):
            st.markdown("""
            **Was:** 4 Items zu suizidalem Erleben und Verhalten.
            **Score >= 7 = erhoehtes Risiko** → Sofort direktes Gespraech fuehren.

            **NIEMALS allein verwenden!** Immer in Kombination mit klinischem Gespraech.
            """)

        show_quiz("m7_q1",
            "Item 9 des PHQ-A zeigt einen Score von 1. Was tust du?",
            ["Nichts — Score 1 ist niedrig", "Ein direktes Gespraech ueber Suizidgedanken fuehren",
             "Die Eltern informieren", "Den Fragebogen nochmal ausfuellen lassen"],
            1,
            "JEDER Score > 0 bei Item 9 (Suizidalitaet) erfordert ein direktes Gespraech. "
            "Auch ein 'selten' oder 'an einzelnen Tagen' muss ernst genommen werden.")

    # ════════════════════════════════════════════
    # TAB 2: ABC-ANALYSE
    # ════════════════════════════════════════════
    with tab2:
        st.markdown("### Verhaltensbeobachtung — ABC-Analyse")
        st.markdown("""
        **A = Antecedent** (Was passierte VORHER?)
        **B = Behavior** (Was hat der/die Jugendliche GENAU getan?)
        **C = Consequence** (Was passierte DANACH? Wie reagierte die Umgebung?)
        """)

        st.markdown("#### 5 Funktionen von Verhalten")
        st.markdown("""
        | Funktion | Beispiel | Das Verhalten dient dazu... |
        |----------|---------|---------------------------|
        | **Aufmerksamkeit** | Reinrufen, Stoeren | ...Beachtung zu bekommen |
        | **Vermeidung** | Verweigerung, "Bauchschmerzen" | ...einer unangenehmen Situation zu entkommen |
        | **Kontrolle** | Wutanfall, Bestimmen-wollen | ...Kontrolle zu gewinnen in einer unkontrollierbaren Welt |
        | **Stimulation** | Zappeln, Kippeln, Herumrennen | ...sensorische Beduerfnisse zu befriedigen |
        | **Zugehoerigkeit** | Mitmachen bei Stoerern, Anpassen | ...zur Gruppe zu gehoeren |
        """)

        st.markdown("#### Interaktive Uebung: Marco (14)")
        show_case_study(
            "Marco verweigert Vorlesen",
            "Im Deutschunterricht soll Marco laut vorlesen. Er sagt: 'Nein, mach ich nicht.' "
            "Als die Lehrerin insistiert, wirft er das Buch auf den Boden und sagt: 'Scheiss Unterricht.' "
            "Er wird vor die Tuer geschickt.",
            [
                {"question": "Was ist A (Antecedent)?",
                 "answer": "Aufforderung, vor der Klasse laut vorzulesen. Oeffentliche Leistungssituation."},
                {"question": "Was ist B (Behavior)?",
                 "answer": "Verweigerung ('Nein'), Buch werfen, verbale Aggression ('Scheiss Unterricht')."},
                {"question": "Was ist C (Consequence)?",
                 "answer": "Wird vor die Tuer geschickt → ENTKOMMT der Vorlese-Situation! Die Konsequenz VERSTAERKT das Verhalten."},
                {"question": "Was ist die Funktion?",
                 "answer": "**Vermeidung.** Marco vermeidet die oeffentliche Leistungssituation. Moeglich: Leseschwaeche, soziale Angst, Scham.\n\n"
                          "**Intervention:** NICHT strafen (verstaerkt Vermeidung), sondern: Warum will Marco nicht vorlesen? Leseschwaeche testen? Alternative anbieten (leise lesen, in Kleingruppe)?"}
            ]
        )

        show_quiz("m7_q2",
            "Marco wird fuer sein stoerisches Verhalten vor die Tuer geschickt. Was passiert dadurch?",
            ["Er lernt daraus", "Sein Verhalten wird VERSTAERKT, weil er der Situation entkommt",
             "Er beruhigt sich", "Die Klasse lernt, dass Stoeren Konsequenzen hat"],
            1,
            "Wenn die Funktion des Verhaltens VERMEIDUNG ist, verstaerkt das Rausschicken das Verhalten! "
            "Marco hat sein Ziel erreicht: Er musste nicht vorlesen.")

    # ════════════════════════════════════════════
    # TAB 3: SELBSTFUERSORGE
    # ════════════════════════════════════════════
    with tab3:
        st.markdown("### Selbstfuersorge & Burnout-Praevention")
        st.markdown("*Du kannst nur helfen, wenn es dir selbst gut geht.*")

        st.markdown("#### Sekundaere Traumatisierung — Was ist das?")
        st.markdown("""
        Wenn du regelmaessig traumatische Geschichten hoerst, kann DEIN Nervensystem ebenfalls
        reagieren — als haettest du das Trauma selbst erlebt. Das ist **keine Schwaeche**, sondern
        eine natuerliche Reaktion empathischer Menschen.
        """)

        st.markdown("#### Warnsignale in 5 Bereichen")
        domains = [
            ("Koerperlich", "Chronische Erschoepfung, haeufige Infekte, Kopfschmerzen, Magen-Darm, Muskelverspannungen, Schlafstoerugen"),
            ("Emotional", "Reizbarkeit, emotionale Taubheit, Zynismus gegenueber Jugendlichen, uebermaessige Sorge, Schuldgefuehle"),
            ("Kognitiv", "Konzentrationsprobleme, intrusive Bilder, kann nach Feierabend nicht abschalten, Albtraeume"),
            ("Verhalten", "Sozialer Rueckzug, mehr Alkohol/Substanzen, Workaholic ODER Arbeitsvermeidung, Zynische Bemerkungen"),
            ("Existenziell", "Sinnverlust, Hoffnungslosigkeit, 'Es aendert sich doch nichts', Freudlosigkeit"),
        ]
        for domain, signs in domains:
            with st.expander(domain):
                st.markdown(signs)

        st.markdown("#### Selbsteinschaetzung")
        st.markdown("Beantworte diese Fragen ehrlich (0 = trifft nicht zu, 2 = trifft voll zu):")

        questions = [
            "Ich fuehle mich chronisch erschoepft, auch nach dem Wochenende",
            "Ich denke abends oft an Faelle und kann nicht abschalten",
            "Ich bin reizbarer geworden, auch im Privatleben",
            "Ich habe das Gefuehl, nie genug zu tun",
            "Ich mache mir uebermaessig Sorgen um bestimmte Jugendliche",
            "Ich habe zynische Gedanken ueber meine Arbeit",
            "Ich vernachlaessige eigene Beduerfnisse",
            "Ich schlafe schlecht oder habe Albtraeume",
            "Ich vermeide bestimmte Faelle oder Situationen",
            "Ich fuehle mich isoliert von Kolleg:innen",
        ]

        total_score = 0
        for i, q in enumerate(questions):
            val = st.slider(q, 0, 2, 0, key=f"selfcare_{i}")
            total_score += val

        if st.button("Auswertung anzeigen", key="selfcare_eval"):
            if total_score <= 5:
                st.success(f"**Score: {total_score}/20 — Gute Selbstfuersorge.** Halte deine Strategien aufrecht!")
            elif total_score <= 10:
                st.warning(f"**Score: {total_score}/20 — Erste Warnsignale.** Aktiv gegensteuern, Supervision nutzen.")
            elif total_score <= 15:
                st.error(f"**Score: {total_score}/20 — Deutliche Belastung.** Supervision dringend empfohlen. Caseload reduzieren wenn moeglich.")
            else:
                st.error(f"**Score: {total_score}/20 — Akute Belastung.** Bitte suche professionelle Hilfe fuer DICH. "
                        "Ueberlege, ob eine Auszeit moeglich ist.")

        st.markdown("#### 8 Selbstfuersorge-Strategien")
        strategies = [
            ("Uebergangsrituale", "Bewusster Uebergang von Arbeit zu Privat. Kleidung wechseln, anderer Heimweg, Musik, 15 Min Pause. 'Haende waschen' als symbolisches Loslassen."),
            ("Grenzen setzen", "Feste Arbeitszeiten. Keine E-Mails abends. Caseload begrenzen. NEIN sagen lernen."),
            ("Koerperliche Gesundheit", "3x/Woche Bewegung. 7-8h Schlaf. Regelmaessig essen. Nicht am Schreibtisch essen."),
            ("Soziale Kontakte", "Freundschaften AUSSERHALB der Arbeit pflegen. Nicht immer ueber Arbeit reden. Leichtigkeit suchen."),
            ("Supervision", "Regelmaessig, nicht nur in der Krise. Keine Schwaeche, sondern professionelle Hygiene."),
            ("Kreativitaet", "Hobbys, die NICHTS mit Helfen zu tun haben. Musik, Kunst, Garten, Kochen, Sport."),
            ("Natur", "Regelmaessig raus. Luxemburgs Natur nutzen: Muellerthal, Naturparks, Our-Tal."),
            ("Sinn pflegen", "Warum machst du diese Arbeit? Erfolgsgeschichten aufschreiben. 'Danke-Ordner' anlegen."),
        ]
        for name, desc in strategies:
            with st.expander(name):
                st.markdown(desc)

        show_quiz("m7_q3",
            "Was ist sekundaere Traumatisierung?",
            ["Burnout wegen zu viel Arbeit",
             "Traumareaktionen durch regelmaessiges Hoeren traumatischer Geschichten anderer",
             "Wenn man selbst traumatisiert wird",
             "Wenn Jugendliche ihre Traumata wiederholen"],
            1,
            "Sekundaere Traumatisierung entsteht durch empathische Teilhabe an den Traumaerfahrungen "
            "anderer. Dein Nervensystem reagiert, als haettest du es selbst erlebt.")

    # ════════════════════════════════════════════
    # TAB 4: ETHISCHE DILEMMATA
    # ════════════════════════════════════════════
    with tab4:
        st.markdown("### Ethische Dilemmata — Wie wuerdest du handeln?")

        dilemma = st.selectbox("Waehle ein Szenario:", [
            "Schweigepflicht vs. Kinderschutz",
            "Social Media — Freundschaftsanfrage",
            "Multiple Rollen — Alle wollen etwas anderes",
            "Geschenke annehmen?",
            "Koerperliche Beruehrung in der Krise"
        ], key="ethical")

        if dilemma == "Schweigepflicht vs. Kinderschutz":
            st.markdown("""
            **Szenario:** Eine 15-Jaehrige erzaehlt dir, dass ihr Vater sie regelmaessig schlaegt.
            Sie bittet dich: "Bitte sag niemandem etwas, sonst wird alles nur schlimmer."
            """)
            with st.expander("Was wuerdest du tun? (Klick fuer Antwort)"):
                st.markdown("""
                **Kinderschutz hat VORRANG vor Schweigepflicht.**

                Du sagst: *"Ich verstehe deine Angst. Meine wichtigste Aufgabe ist, dass du sicher bist.
                Dafuer brauche ich Unterstuetzung von Leuten, die sich damit auskennen. Ich werde nichts
                tun, ohne es dir zu sagen."*

                Dann: ONE melden (247-73100). Ehrlich mit der Jugendlichen bleiben.
                """)

        elif dilemma == "Social Media — Freundschaftsanfrage":
            st.markdown("""
            **Szenario:** Ein Schueler schickt dir eine Freundschaftsanfrage auf Instagram.
            """)
            with st.expander("Was wuerdest du tun? (Klick fuer Antwort)"):
                st.markdown("""
                **Ablehnen — freundlich aber klar.**

                *"Hey [Name], ich habe deine Anfrage gesehen. Ich freue mich, dass du mich cool findest.
                Aber als dein Schulpsychologe halte ich meine berufliche und private Welt getrennt.
                Das schuetzt dich und mich. In der Schule bin ich immer fuer dich da."*

                Professionelle Grenzen sind Schutz, nicht Ablehnung.
                """)

        elif dilemma == "Multiple Rollen — Alle wollen etwas anderes":
            st.markdown("""
            **Szenario:** Ein Schueler vertraut dir an, dass er kifft. Die Eltern wollen wissen, was in der Beratung
            besprochen wird. Der Schulleiter will, dass du das Kiffen meldest.
            """)
            with st.expander("Was wuerdest du tun? (Klick fuer Antwort)"):
                st.markdown("""
                **Deine Loyalitaet gehoert dem Jugendlichen.**

                - Eltern: "Ich kann Ihnen keine Inhalte mitteilen, aber ich arbeite mit [Name] daran, dass es ihm gut geht."
                - Schulleiter: "Ich bin an die Schweigepflicht gebunden. Wenn keine akute Gefaehrdung vorliegt, kann ich keine Inhalte weitergeben."
                - Jugendlicher: Transparenz: "Deine Eltern / der Schulleiter haben mich gefragt. Ich habe nichts gesagt. Was denkst du?"

                Ausnahme: Bei akuter Gefaehrdung (Suizidalitaet, Missbrauch) gilt Pflichtmeldung.
                """)

        elif dilemma == "Geschenke annehmen?":
            st.markdown("""
            **Szenario:** Eine Schuelerin bastelt dir ein Armband und schenkt es dir zum Abschied der Beratung.
            """)
            with st.expander("Was wuerdest du tun? (Klick fuer Antwort)"):
                st.markdown("""
                **Kleine selbstgemachte Geschenke: Annehmen.**

                Das Armband ist Ausdruck von Dankbarkeit und Beziehung. Ablehnen wuerde verletzen.
                Annehmen und wertschaetzen: "Das ist wunderschoen, danke! Das bedeutet mir viel."

                **Teure/gekaufte Geschenke: Freundlich ablehnen.**
                *"Das ist sehr lieb, aber ich kann das nicht annehmen. Dein Vertrauen ist das groesste Geschenk."*
                """)

        else:
            st.markdown("""
            **Szenario:** Ein 11-Jaehriger weint ueber die Trennung seiner Eltern und greift nach deiner Hand.
            """)
            with st.expander("Was wuerdest du tun? (Klick fuer Antwort)"):
                st.markdown("""
                **Kontextabhaengig — hier: Zulassen.**

                Kurzes Haendchhalten oder seitliche Umarmung kann in diesem Kontext angemessen sein:
                - Das Kind INITIIERT den Kontakt
                - Es dient dem Trost, nicht der Grenzverletzung
                - Du beobachtest die Reaktion des Kindes

                **Bei aelteren Jugendlichen:** Verbaler Trost ist sicherer.
                *"Ich bin hier. Du bist nicht allein."* statt koerperlicher Naehe.
                """)

        show_quiz("m7_q4",
            "Ein Schueler bittet dich, seiner Mutter nichts von seinem Cannabiskonsum zu erzaehlen. Was tust du?",
            ["Sofort die Mutter anrufen — Drogenkonsum ist gefaehrlich",
             "Schweigepflicht wahren — es sei denn, es besteht akute Gefaehrdung",
             "Dem Schulleiter melden",
             "Dem Schueler drohen, wenn er nicht aufhoert"],
            1,
            "Schweigepflicht gilt. Cannabiskonsum allein ist keine akute Gefaehrdung. "
            "Nutze MI, um mit dem Schueler an seiner Motivation zu arbeiten.")

    # ════════════════════════════════════════════
    # TAB 5: SPEZIALTHEMEN
    # ════════════════════════════════════════════
    with tab5:
        st.markdown("### Spezialthemen")

        topic = st.selectbox("Waehle ein Thema:", [
            "Social Media & Gaming",
            "Hochbegabung & Underachievement",
            "Psychosomatik",
            "Trauer bei Jugendlichen",
            "Radikalisierung"
        ], key="special_topic")

        if topic == "Social Media & Gaming":
            st.markdown("#### Gesundes vs. Problematisches Gaming")
            col1, col2 = st.columns(2)
            with col1:
                show_green_box("Gesund",
                    "- Sozial (mit Freunden)\n- Kann aufhoeren\n- Hat andere Hobbys\n"
                    "- Genuegend Schlaf\n- Stabile Schulleistung\n- Ehrlich ueber Nutzungszeit\n"
                    "- Emotional stabil beim Aufhoeren")
            with col2:
                show_red_flag(
                    "- Zunehmend isoliert\n- Kann nicht aufhoeren trotz Konsequenzen\n"
                    "- Einziges Interesse\n- Schlaf gestoert\n- Schulleistung faellt\n"
                    "- Luegt ueber Nutzungszeit\n- Aggressiv bei Unterbrechung")

            st.markdown("**15 Warnsignale fuer problematische Mediennutzung:**")
            signs = [
                "Nutzung hat in den letzten Monaten zugenommen",
                "Wird aufgeregt/gereizt ohne Zugang",
                "Schlaf gestoert (spielt bis spaet)",
                "Schulnoten verschlechtern sich",
                "Fruehere Hobbys aufgegeben",
                "Reale Freundschaften vernachlaessigt",
                "Hygiene/Ernaehrung vernachlaessigt",
                "Luegt ueber oder versteckt Nutzung",
                "Gescheiterte Reduktionsversuche",
                "Nutzt Medien zur Flucht vor negativen Gefuehlen",
                "Geldausgaben fuer In-App-Kaeufe/Lootboxen",
                "Koerperliche Symptome (Augen, Ruecken, Kopf)",
                "Entzugserscheinungen (Angst, Reizbarkeit)",
                "Konflikte mit Eltern/Lehrer:innen wegen Nutzung",
                "Heimliche Nutzung waehrend des Unterrichts",
            ]
            for i, sign in enumerate(signs, 1):
                st.markdown(f"{i}. {sign}")

        elif topic == "Hochbegabung & Underachievement":
            st.markdown("#### Hochbegabung — Oft uebersehen, oft missverstanden")
            st.markdown("**IQ >= 130** (ca. 2% der Bevoelkerung). Garantiert KEINEN Schulerfolg!")

            st.markdown("**Wie Hochbegabung MISSVERSTANDEN wird:**")
            col1, col2 = st.columns(2)
            with col1:
                st.markdown("""
                **Was du siehst:**
                - Korrigiert Lehrer:innen
                - Weigert sich, einfache Aufgaben zu machen
                - Langeweile, Stoeren
                - Perfektionismus, nichts abgeben
                - Emotional intensiv
                - Keine Freunde in der Klasse
                """)
            with col2:
                st.markdown("""
                **Was dahinter steckt:**
                - Genuines Wissen, nicht Respektlosigkeit
                - Unterforderung, nicht Faulheit
                - Fehlende Stimulation
                - Angst vor Unvollkommenheit
                - Dabrowski-Overexcitabilities
                - Sucht intellektuelle Peers
                """)

            st.markdown("**8 Ursachen fuer Underachievement:**")
            st.markdown("""
            1. Chronische Unterforderung — nie gelernt zu lernen
            2. Fehlende Lernstrategien — alles fiel immer leicht
            3. Perfektionismus — lieber gar nicht als imperfekt
            4. Soziale Anpassung — bewusst Faehigkeiten verstecken
            5. Emotionale Ueberlastung — hohe Sensibilitaet fuehrt zu Erschoepfung
            6. Fehldiagnose — ADHS/Autismus statt Hochbegabung
            7. Autoritaetskonflikte — hinterfragt Regeln und Aufgaben
            8. Twice-Exceptional — Hochbegabung + Lernschwaeche
            """)

        elif topic == "Psychosomatik":
            st.markdown("#### Psychosomatik bei Jugendlichen")
            st.warning("**Regel Nr. 1:** Immer ZUERST medizinische Ursachen ausschliessen!")
            st.markdown("Bis zu **25% der Jugendlichen** haben wiederkehrende koerperliche Beschwerden ohne ausreichende medizinische Erklaerung.")

            symptoms = [
                ("Chronische Kopfschmerzen", "Leistungsdruck, Perfektionismus, Stress", "'Wann genau kommen sie? Was passiert vorher?'"),
                ("Bauchschmerzen", "Angst, Trennungsangst, Schulangst", "'Wenn dein Bauch sprechen koennte, was wuerde er sagen?'"),
                ("Rueckenschmerzen", "Emotionale Last, zu viel Verantwortung", "'Was liegt dir auf den Schultern? Was ist zu schwer?'"),
                ("Schwindel", "Dissoziation, Ueberforderung", "'Dreht sich die Welt oder du? Was passiert gerade?'"),
                ("Chronische Muedigkeit", "Depression, emotionale Erschoepfung", "'Bist du muede, weil du nicht schlaefst, oder ist es eine innere Leere?'"),
                ("Herzrasen", "Panikattacken, Angst, PTBS", "'Was geht dir durch den Kopf, wenn dein Herz so schnell schlaegt?'"),
            ]

            st.markdown("| Symptom | Moegliche psychische Ursache | Gespraechseinstieg |")
            st.markdown("|---------|---------------------------|-------------------|")
            for symptom, cause, entry in symptoms:
                st.markdown(f"| {symptom} | {cause} | *{entry}* |")

            st.info("**Wichtig:** NIEMALS sagen: 'Das ist nur psychisch' oder 'Das bildest du dir ein.' "
                   "Die Schmerzen sind REAL. Der Weg fuehrt DURCH den Koerper ZUR Psyche.")

        elif topic == "Trauer bei Jugendlichen":
            st.markdown("#### Trauer bei Jugendlichen — Anders als bei Erwachsenen")
            st.markdown("""
            **Intermittierende Trauer:** Jugendliche koennen tief traurig sein und 5 Minuten spaeter mit
            Freunden lachen. Das ist KEIN Zeichen von Gefuehllosigkeit — die Psyche dosiert den Schmerz selbst.
            """)

            st.markdown("#### Normal vs. Komplizierte Trauer")
            col1, col2 = st.columns(2)
            with col1:
                show_green_box("Normale Trauer",
                    "- Schmerz nimmt ueber Wochen/Monate ab\n"
                    "- Kann am Alltag teilnehmen\n"
                    "- Gute und schlechte Tage wechseln\n"
                    "- Erinnerungen sind auch positiv\n"
                    "- Soziale Kontakte werden wieder aufgenommen\n"
                    "- Zukunft wird als moeglich erlebt")
            with col2:
                show_red_flag(
                    "- Intensiver Schmerz unveraendert nach 6+ Monaten\n"
                    "- Kann nicht zum Alltag zurueckkehren\n"
                    "- Fast nur schlechte Tage\n"
                    "- Erinnerungen loesen nur Schmerz aus\n"
                    "- Dauerhafter sozialer Rueckzug\n"
                    "- Zukunft fuehlt sich unmoeglich an")

            st.markdown("**10 Methoden der Trauerbegleitung:**")
            methods = [
                "Brief an den/die Verstorbene:n",
                "Erinnerungsbox (Fotos, Gegenstaende)",
                "Trauer-Playlist",
                "Erinnerungstimeline",
                "Vermaechtnis-Projekt (Was hat die Person hinterlassen?)",
                "Rituale (Jahrestage, Gedenkplatz)",
                "Kreative Ausdruck (Malen, Schreiben, Musik)",
                "Peer-Trauergruppe",
                "Koerperorientierte Methoden",
                "Psychoedukation ('Es gibt kein richtiges Trauern')",
            ]
            for i, m in enumerate(methods, 1):
                st.markdown(f"{i}. {m}")

            st.info("**Bei komplizierter Trauer:** OMEGA 90 (Tel: +352 29 77 89-1) — "
                   "spezialisierte Trauerbegleitung in Luxemburg.")

        else:  # Radikalisierung
            st.markdown("#### Radikalisierung erkennen und handeln")
            st.markdown("**Radikalisierung ist ein PROZESS**, kein Ereignis. Fruehwarnsignale sind erkennbar.")

            st.markdown("**Warnsignale in 3 Bereichen:**")
            with st.expander("Verhaltensaenderungen"):
                st.markdown("""
                - Ploetzlicher Bruch mit bisherigem Lebensstil
                - Drastische Veraenderung in Erscheinung/Kleidung
                - Neuer Medienkonsum, veraenderte Sprache
                - Neue, unbekannte Kontakte
                """)
            with st.expander("Soziale Veraenderungen"):
                st.markdown("""
                - Rueckzug aus altem Freundeskreis
                - Neue exklusive Bezugsgruppe
                - Abbruch von Beziehungen mit Andersdenkenden
                - Geheimhaltung ueber neue Kontakte
                """)
            with st.expander("Ideologische Zeichen"):
                st.markdown("""
                - Schwarz-Weiss-Denken (gut vs. boese)
                - Entmenschlichende Sprache ueber bestimmte Gruppen
                - Verherrlichung von Gewalt oder Maertyrerrum
                - Verehrung extremistischer Figuren
                """)

            st.error("**Bei akuter Bedrohung (Gewaltandrohung, Waffen, Reiseplaene):** Sofort Police (113) und Schulleitung!\n\n"
                    "**Bei Verdacht:** RESPECT.lu (8002 1234) — vertrauliche, anonyme Beratung.")

        show_quiz("m7_q5",
            "Ein Schueler aendert ploetzlich sein Auftreten, hat neue Kontakte und verwendet Schwarz-Weiss-Sprache. Was koennten Warnsignale sein fuer?",
            ["Normale Pubertaet", "Depression", "Moegliche Radikalisierung", "ADHS"],
            2,
            "Ploetzliche Aenderungen in Verhalten, sozialen Kontakten UND Sprache (Schwarz-Weiss-Denken, "
            "Feindbilder) koennen auf Radikalisierung hindeuten. RESPECT.lu kontaktieren.")
