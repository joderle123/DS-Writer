"""Modul 1: Grundlagen der Adoleszenz — interaktiv."""
import streamlit as st
from components.helpers import show_quiz, show_case_study, show_red_flag, show_intervention, show_green_box


def show():
    st.markdown("## Modul 1: Grundlagen der Adoleszenz")
    st.markdown("*Verstehe, warum Jugendliche so handeln, wie sie handeln — und was das fuer deine Arbeit bedeutet.*")

    tab1, tab2, tab3, tab4, tab5 = st.tabs([
        "Gehirnentwicklung",
        "Entwicklungsaufgaben",
        "Bindung",
        "Normal vs. Auffaellig",
        "Emotionsregulation"
    ])

    # ──────────────────────────────────────────
    # TAB 1: NEUROBIOLOGISCHE ENTWICKLUNG
    # ──────────────────────────────────────────
    with tab1:
        st.markdown("### Das Jugendgehirn: Eine Baustelle")
        st.markdown("""
        Das Gehirn von Jugendlichen ist **nicht einfach ein kleines Erwachsenengehirn**. Es befindet sich
        in einem massiven Umbau, der bis etwa zum **25. Lebensjahr** andauert. Das erklaert vieles von dem,
        was wir im Schulalltag beobachten.
        """)

        st.markdown("#### Das Dual-Systems-Modell")
        col1, col2 = st.columns(2)
        with col1:
            st.markdown("""
            **Limbisches System (Gaspedal)**
            - Amygdala: Alarmanlage, ueberreagiert
            - Nucleus Accumbens: Belohnungszentrum, sucht Kicks
            - Bereits voll entwickelt in der Pubertaet
            - Steuert: Emotionen, Impulse, Belohnungssuche
            """)
        with col2:
            st.markdown("""
            **Praefrontaler Kortex (Bremse)**
            - Planung, Impulskontrolle, Konsequenzdenken
            - Reift als LETZTES (bis ca. 25 Jahre)
            - Noch nicht zuverlaessig verfuegbar
            - Unter Stress faellt er als erstes aus
            """)

        st.warning("**Kerneinsicht:** Jugendliche haben ein voll funktionsfaehiges Gaspedal, aber eine noch unreife Bremse. Das ist keine Charakterschwaeche — das ist Neurobiologie.")

        st.markdown("#### Wie zeigt sich das im Schulalltag?")

        with st.expander("Impulsive Ausbrueche im Unterricht"):
            st.markdown("""
            **Was du siehst:** Ein 14-Jaehriger ruft rein, wirft Sachen, reagiert uebertrieben auf Kritik.

            **Was dahinter steckt:** Der praefrontale Kortex (Impulskontrolle) ist noch nicht ausgereift.
            Unter Stress (Scham, Ueberforderung, Muedigkeit) faellt die ohnehin schwache Bremse komplett aus.
            Die Amygdala uebernimmt — Kampf- oder Fluchtreaktion.

            **Was du tun kannst:**
            - Nicht in der akuten Situation diskutieren (PFC offline)
            - Erst beruhigen lassen (mind. 20 Min fuer Adrenalinabbau)
            - Spaeter reflektieren: "Was ist passiert? Was haette dir geholfen?"
            - Psychoedukation: Erklaere dem Jugendlichen sein eigenes Gehirn
            """)

        with st.expander("Risikofreudiges Verhalten"):
            st.markdown("""
            **Was du siehst:** Mutproben, Substanzkonsum, gefaehrliche TikTok-Challenges, ungeschuetzter Sex.

            **Was dahinter steckt:** Das Dopaminsystem veraendert sich — der Baseline-Dopaminspiegel SINKT,
            aber die Empfindlichkeit fuer Belohnung STEIGT. Jugendliche brauchen intensivere Reize,
            um sich "normal" zu fuehlen. Gleichzeitig fehlt die Faehigkeit, Langzeitkonsequenzen abzuschaetzen.

            **Was du tun kannst:**
            - Nicht moralisieren ("Du weisst doch, dass das gefaehrlich ist" — ja, wissen sie, aber fuehlen es nicht)
            - Gesundes Risiko anbieten: Sport, Klettern, Theater, Wettbewerbe
            - Harm Reduction statt Abstinenzforderung
            """)

        with st.expander("Emotionale Ueberreaktionen"):
            st.markdown("""
            **Was du siehst:** Traenen wegen einer schlechten Note, Wutausbruch wegen eines Kommentars,
            "Ich hasse dich!" an die Eltern.

            **Was dahinter steckt:** Die Amygdala (Emotionszentrum) ist hyperaktiv, waehrend der PFC
            (Emotionsregulation) noch reift. Jugendliche FUEHLEN Emotionen intensiver als Erwachsene
            und koennen sie schlechter regulieren.

            **Was du tun kannst:**
            - Gefuehle validieren, nicht kleinreden ("Das klingt wirklich frustrierend")
            - Emotionsregulationsstrategien vermitteln (siehe Modul 4)
            - Normalisieren: "Dein Gehirn reagiert gerade sehr stark. Das ist normal."
            """)

        with st.expander("Schlafprobleme und Muedigkeit"):
            st.markdown("""
            **Was du siehst:** Schlaeft im Unterricht, kommt zu spaet, kann sich morgens nicht konzentrieren.

            **Was dahinter steckt:** Die innere Uhr verschiebt sich in der Pubertaet um 1-3 Stunden nach
            hinten. Melatonin wird spaeter ausgeschuettet. Jugendliche sind biologisch "Nachteulen" —
            fruehe Schulzeiten arbeiten gegen ihre Biologie. Empfohlen: 8-10 Stunden Schlaf.

            **Was du tun kannst:**
            - Schlafhygiene besprechen (kein Handy 1h vor dem Schlaf, regelmaessige Zeiten)
            - Nicht pathologisieren — der spaete Rhythmus ist biologisch NORMAL
            - Bei chronischer Muedigkeit: Depression ausschliessen
            """)

        st.markdown("---")
        show_quiz(
            "m1_q1",
            "Warum reagieren Jugendliche oft impulsiver als Erwachsene?",
            [
                "Weil sie respektlos sind und keine Grenzen kennen",
                "Weil der praefrontale Kortex noch nicht ausgereift ist und die Amygdala dominiert",
                "Weil sie zu viel Zucker essen",
                "Weil sie absichtlich provozieren wollen"
            ],
            1,
            "Der praefrontale Kortex (Impulskontrolle, Planung, Konsequenzdenken) reift als letztes Hirnareal — erst mit ca. 25 Jahren. In der Zwischenzeit dominiert das limbische System (Emotionen, Impulse)."
        )

        show_quiz(
            "m1_q2",
            "Was passiert mit dem Dopaminsystem in der Adoleszenz?",
            [
                "Es schaltet sich komplett ab",
                "Der Baseline-Spiegel sinkt, aber die Belohnungsempfindlichkeit steigt",
                "Es wird weniger empfindlich fuer alle Reize",
                "Es veraendert sich nicht wesentlich"
            ],
            1,
            "Jugendliche haben einen niedrigeren Baseline-Dopaminspiegel (fuehlen sich oefter 'gelangweilt'), reagieren aber STAERKER auf Belohnungsreize. Das erklaert die Suche nach intensiven Erlebnissen."
        )

        show_quiz(
            "m1_q3",
            "Ein 15-Jaehriger schlaeft regelmaessig im Unterricht ein. Was ist die wahrscheinlichste Erklaerung?",
            [
                "Er ist faul und unmotiviert",
                "Er hat definitiv eine Depression",
                "Die biologische Verschiebung der inneren Uhr in der Pubertaet",
                "Er nimmt Drogen"
            ],
            2,
            "Die circadiane Uhr verschiebt sich in der Pubertaet um 1-3 Stunden. Melatonin wird spaeter ausgeschuettet. Fruehe Schulzeiten arbeiten gegen die Biologie. Natuerlich sollte man auch andere Ursachen (Depression, Substanzen) im Blick behalten."
        )

    # ──────────────────────────────────────────
    # TAB 2: PSYCHOSOZIALE ENTWICKLUNGSAUFGABEN
    # ──────────────────────────────────────────
    with tab2:
        st.markdown("### Entwicklungsaufgaben der Adoleszenz")

        st.markdown("#### Erikson: Identitaet vs. Rollendiffusion")
        st.markdown("""
        Die **zentrale Aufgabe** der Adoleszenz ist die Identitaetsfindung: *Wer bin ich? Wer will ich sein?*
        Das betrifft mehrere Bereiche gleichzeitig:
        """)

        col1, col2 = st.columns(2)
        with col1:
            st.markdown("""
            - **Berufliche Identitaet:** Was will ich werden?
            - **Sexuelle/romantische Identitaet:** Wen liebe ich? Wie?
            - **Weltanschauung:** Woran glaube ich?
            """)
        with col2:
            st.markdown("""
            - **Soziale Identitaet:** Zu wem gehoere ich?
            - **Koerperliche Identitaet:** Wie stehe ich zu meinem Koerper?
            - **Werte-Identitaet:** Was ist mir wichtig?
            """)

        st.markdown("#### Marcia: 4 Identitaetsstatus")
        st.markdown("Nicht jeder Jugendliche durchlaeuft die Identitaetsfindung gleich. Marcia unterscheidet 4 Status:")

        with st.expander("1. Diffuse Identitaet — 'Mir ist alles egal'"):
            st.markdown("""
            **Was es ist:** Keine aktive Suche, keine Festlegung. Der Jugendliche hat sich weder mit
            Optionen auseinandergesetzt noch sich entschieden.

            **Wie es im Schulalltag aussieht:**
            - "Weiss nicht" als Standardantwort auf alles
            - Kein Interesse an Berufsorientierung
            - Wechselt Freundesgruppen staendig, ohne tiefe Bindungen
            - Wirkt gleichgueltig oder orientierungslos
            - Laesst sich leicht von anderen beeinflussen

            **Was der/die Jugendliche braucht:**
            - Geduldige Exploration ohne Druck
            - Erfahrungsraeume (Praktika, Projekte, Vereine)
            - Frage: "Was hat dich als Kind begeistert?"
            """)

        with st.expander("2. Uebernommene Identitaet (Foreclosed) — 'Ich werde Arzt, wie Papa'"):
            st.markdown("""
            **Was es ist:** Festlegung OHNE eigene Exploration. Der Jugendliche hat die Werte/Plaene
            der Eltern oder einer Gruppe uebernommen, ohne sie zu hinterfragen.

            **Wie es im Schulalltag aussieht:**
            - Sehr bestimmte Zukunftsplaene, aber ohne eigene Begeisterung
            - Angst vor Abweichung von elterlichen Erwartungen
            - Konformitaet mit einer Gruppe (religioes, kulturell, politisch)
            - Reagiert defensiv auf Hinterfragen
            - Wenig Flexibilitaet im Denken

            **Was der/die Jugendliche braucht:**
            - Behutsames Hinterfragen ("Wie waere es, wenn du was anderes waehlen koenntest?")
            - NICHT die Ueberzeugungen angreifen, sondern Denkraeume oeffnen
            - Kontakt mit unterschiedlichen Lebensentwuerfen
            """)

        with st.expander("3. Moratorium — 'Ich suche noch'"):
            st.markdown("""
            **Was es ist:** Aktive Suche, aber noch keine Entscheidung. Der Jugendliche setzt sich
            aktiv mit verschiedenen Optionen auseinander — das ist GESUND und WUENSCHENSWERT.

            **Wie es im Schulalltag aussieht:**
            - Probiert verschiedene Stile, Gruppen, Interessen aus
            - Kann verunsichert oder ueberfordert wirken
            - Stellt viele Fragen, hinterfragt Autoritaeten
            - Wechselt Meinungen — "letzte Woche war ich Veganer, jetzt nicht mehr"
            - Kann anstrengend fuer Erwachsene sein, aber ist entwicklungspsychologisch IDEAL

            **Was der/die Jugendliche braucht:**
            - Geduld und Raum fuer Exploration
            - Ermutigung: "Es ist gut, dass du nachdenkst"
            - Keine Fixierung auf schnelle Entscheidungen
            """)

        with st.expander("4. Erarbeitete Identitaet (Achieved) — 'Ich weiss, wer ich bin'"):
            st.markdown("""
            **Was es ist:** Nach aktiver Auseinandersetzung hat der Jugendliche eigene Werte,
            Ueberzeugungen und Plaene entwickelt. Flexibel, aber gefestigt.

            **Wie es im Schulalltag aussieht:**
            - Selbstbewusst, aber nicht arrogant
            - Kann eigene Meinung vertreten UND andere Perspektiven tolerieren
            - Klare Zukunftsvorstellungen mit eigener Motivation
            - Stabile Freundschaften
            - Kann mit Misserfolgen umgehen

            **Hinweis:** Nicht jeder erreicht diesen Status in allen Bereichen. Das ist normal.
            Identitaetsentwicklung ist ein lebenslanger Prozess.
            """)

        st.markdown("---")

        show_case_study(
            "Lara (16) — Identitaetskrise",
            "Lara war immer eine Musterschuelerin, die den Erwartungen ihrer Eltern entsprach. "
            "Seit einigen Monaten faerbt sie sich die Haare bunt, hoert andere Musik, hat neue Freunde "
            "und ihre Noten sind abgesackt. Die Eltern sind besorgt und sehen das als 'Rebellion'. "
            "In der Beratung sagt Lara: 'Ich weiss gar nicht, wer ich wirklich bin. Alles war immer "
            "schon fuer mich entschieden.'",
            [
                {"question": "Welchen Identitaetsstatus hatte Lara vermutlich vorher?",
                 "answer": "**Uebernommene Identitaet (Foreclosed)** — Sie hat die Werte und Plaene der Eltern uebernommen, ohne eigene Exploration. Jetzt bewegt sie sich ins Moratorium."},
                {"question": "Ist Laras Verhalten besorgniserregend?",
                 "answer": "**Grundsaetzlich NEIN.** Lara zeigt gesundes Explorationsverhalten. Sie loest sich von uebernommenen Identitaeten und sucht ihre eigene. Das ist entwicklungspsychologisch wuenschenswert, auch wenn es fuer die Eltern verunsichernd ist. Besorgniserregend waere es, wenn: Substanzkonsum dazukommt, sie sich selbst verletzt, die Stimmung dauerhaft depressiv ist, oder sie sich komplett isoliert."},
                {"question": "Wie wuerdest du mit Laras Eltern sprechen?",
                 "answer": "Normalisierung und Psychoedukation: 'Lara tut etwas sehr Wichtiges — sie findet heraus, wer sie ist. Das sieht von aussen chaotisch aus, ist aber ein gesunder Entwicklungsprozess. Ihre Aufgabe als Eltern ist, die Beziehung zu halten, auch wenn Laras Entscheidungen Ihnen fremd vorkommen.'"}
            ]
        )

        show_quiz(
            "m1_q4",
            "Ein 17-Jaehriger sagt: 'Ich werde Anwalt, wie mein Vater. Das war schon immer klar.' Er hat nie Alternativen in Betracht gezogen. Welcher Identitaetsstatus?",
            [
                "Diffuse Identitaet",
                "Uebernommene Identitaet (Foreclosed)",
                "Moratorium",
                "Erarbeitete Identitaet"
            ],
            1,
            "Typisch Foreclosed: Festlegung ohne eigene Exploration. Der Jugendliche hat die Plaene der Eltern uebernommen, ohne sie zu hinterfragen."
        )

        show_quiz(
            "m1_q5",
            "Welcher Identitaetsstatus ist entwicklungspsychologisch am gesuendesten fuer einen 16-Jaehrigen?",
            [
                "Erarbeitete Identitaet — je frueher, desto besser",
                "Uebernommene Identitaet — Stabilitaet ist wichtig",
                "Moratorium — aktive Suche ist der gesunde Weg zur Identitaet",
                "Diffuse Identitaet — Jugendliche sollten sich nicht stressen"
            ],
            2,
            "Das Moratorium (aktive Exploration) ist der gesunde und erwuenschte Prozess. Man MUSS verschiedene Optionen ausprobieren, um zu einer echten eigenen Identitaet zu gelangen."
        )

    # ──────────────────────────────────────────
    # TAB 3: BINDUNG
    # ──────────────────────────────────────────
    with tab3:
        st.markdown("### Bindung im Jugendalter")
        st.markdown("""
        Die Bindungstheorie erklaert, wie fruehe Beziehungserfahrungen das Verhalten in der Beratung
        beeinflussen. Als Schulpsycholog:in wirst du Jugendliche mit verschiedenen Bindungsstilen treffen —
        und jeder braucht etwas anderes von dir.
        """)

        with st.expander("Sicher gebunden (55-65%) — 'Ich kann dir vertrauen'"):
            st.markdown("""
            **Was du in der Beratung siehst:**
            - Offenes, kooperatives Verhalten
            - Kann ueber Gefuehle sprechen
            - Sucht aktiv Hilfe, wenn noetig
            - Kann Naehe und Distanz regulieren

            **Was der/die Jugendliche braucht:**
            - "Normales" therapeutisches Arbeiten funktioniert gut
            - Empathie, aktives Zuhoeren, loesungsorientiert

            **Haeufige Fehler:** Keine besonderen — diese Jugendlichen sind am einfachsten zu beraten.
            """)

        with st.expander("Unsicher-vermeidend (20-25%) — 'Ich brauche niemanden'"):
            st.markdown("""
            **Was du in der Beratung siehst:**
            - Emotional distanziert, "cool", kontrolliert
            - Redet ueber Fakten, nicht Gefuehle
            - "Mir geht es gut" (obwohl offensichtlich nicht)
            - Bricht Beratung frueh ab oder kommt unregelmaessig
            - Wertet Hilfe ab: "Das bringt doch nichts"

            **Was dahinter steckt:** Fruehe Erfahrung: "Wenn ich Naehe zeige, werde ich abgewiesen."
            Strategie: Emotionen unterdr\u00fccken, unabhaengig wirken.

            **Was der/die Jugendliche braucht:**
            - Geduld, Geduld, Geduld
            - KEINEN Druck, sich zu oeffnen
            - Respekt fuer die Distanz — sie hat eine Schutzfunktion
            - Ueber "sichere Themen" Beziehung aufbauen (Hobbys, Schule)
            - Langsam emotionale Themen annaehern

            **Haeufige Fehler:**
            - Zu frueh nach Gefuehlen fragen
            - Die Distanz als "Widerstand" bewerten
            - Aufgeben, weil "er ja nicht will"
            """)

        with st.expander("Unsicher-ambivalent (10-15%) — 'Geh weg! Nein, bleib!'"):
            st.markdown("""
            **Was du in der Beratung siehst:**
            - Klammert sich an die Beratung, dann stoeßt ab
            - Emotionale Berg- und Talfahrt
            - Testet staendig die Beziehung ("Magst du mich wirklich?")
            - Ueberflutung mit Problemen
            - Zwischen Sitzungen viele Nachrichten/Anrufe
            - Reagiert extrem auf Terminaenderungen

            **Was dahinter steckt:** Fruehe Erfahrung: "Manchmal bist du da, manchmal nicht."
            Strategie: Bindung intensiv suchen, aber der Zuverlaessigkeit misstrauen.

            **Was der/die Jugendliche braucht:**
            - Zuverlaessigkeit und Vorhersagbarkeit (feste Termine, klare Regeln)
            - Gefuehle ernst nehmen, aber auch begrenzen koennen
            - Klare Strukturen geben Sicherheit
            - Thematisieren: "Ich merke, du machst dir Sorgen, ob ich da bin. Ich bin da."

            **Haeufige Fehler:**
            - Sich von der Intensitaet ueberwaeltigen lassen
            - Grenzen nicht setzen (Erreichbarkeit 24/7)
            - Genervt reagieren auf das "Klammern"
            """)

        with st.expander("Desorganisiert (5-10%) — 'Ich brauche dich, aber du machst mir Angst'"):
            st.markdown("""
            **Was du in der Beratung siehst:**
            - Widersprüchliches Verhalten (kommt und geht, kooperiert und boykottiert)
            - Dissoziative Episoden (wegtreten, "nicht da sein")
            - Kann aggressiv werden, wenn Naehe entsteht
            - Verwirrende Beziehungsgestaltung
            - Oft: Traumahintergrund

            **Was dahinter steckt:** Fruehe Erfahrung: Die Bezugsperson war gleichzeitig Quelle von Trost
            UND Angst (z.B. missbrauchender Elternteil). Das fuehrt zu einem unloesbareren Dilemma:
            "Ich brauche Naehe, aber Naehe ist gefaehrlich."

            **Was der/die Jugendliche braucht:**
            - Maximale Vorhersagbarkeit und Transparenz
            - Traumasensibles Arbeiten
            - Keine Ueberraschungen, keine ploetzlichen Veraenderungen
            - Langsamer Beziehungsaufbau mit vielen Rueckzugsmoeglichkeiten
            - Eventuell Weiterleitung an Traumatherapeut:in

            **Haeufige Fehler:**
            - Aggressives Verhalten persoenlich nehmen
            - Zu schnell Naehe herstellen wollen
            - Dissoziation nicht erkennen
            """)

        st.info("**Zentrale Erkenntnis:** Du als Berater:in wirst Teil des Bindungssystems. "
                "Du kannst eine **korrigierende Beziehungserfahrung** bieten — 'Es gibt jemanden, "
                "der zuverlaessig, wertschaetzend und praesent ist.' Das ist oft wirkungsvoller als jede Technik.")

        st.markdown("---")

        show_case_study(
            "Marco (15) — Vermeidende Bindung",
            "Marco wurde wegen aggressivem Verhalten geschickt. Im Gespraech sitzt er mit verschraenkten "
            "Armen, schaut auf sein Handy, antwortet einsilbig. Auf die Frage 'Wie geht es dir?' sagt er: "
            "'Normal.' Du merkst, dass er seit Monaten gemobbt wird, aber er sagt: 'Ist mir egal, die "
            "sind eh alle dumm.'",
            [
                {"question": "Was beobachtest du an Marcos Bindungsverhalten?",
                 "answer": "**Unsicher-vermeidende Bindung:** Distanz, Abwehr von Naehe, Minimierung von Gefuehlen ('ist mir egal'), Koerpersprache signalisiert Verschlossenheit. Die 'Egal-Fassade' schuetzt vor Verletzlichkeit."},
                {"question": "Was ist dein erster Fehler, den du machen koenntest?",
                 "answer": "Zu frueh nach Gefuehlen fragen ('Wie fuehlt sich das an, gemobbt zu werden?'). Marco hat gelernt, dass Gefuehle zeigen gefaehrlich ist. Stattdessen: Ueber sichere Themen ins Gespraech kommen (Gaming, Sport), Beziehung aufbauen, DANN langsam emotionale Themen."},
                {"question": "Was sagst du zu Marco?",
                 "answer": "NICHT: 'Erzaehl mir, wie du dich fuehlst.' SONDERN z.B.: 'Hey, du musst hier nicht reden, wenn du nicht willst. Ich bin einfach da. Was zockst du gerade?' — Erst Beziehung aufbauen, ueber seine Welt sprechen, dann kommt der Rest."}
            ]
        )

        show_quiz(
            "m1_q6",
            "Eine Schuelerin schickt dir zwischen den Sitzungen viele Nachrichten, klammert sich an dich, reagiert extrem wenn du einen Termin verschiebst. Welcher Bindungsstil?",
            [
                "Sicher",
                "Unsicher-vermeidend",
                "Unsicher-ambivalent",
                "Desorganisiert"
            ],
            2,
            "Typisch unsicher-ambivalent: Intensive Bindungssuche bei gleichzeitigem Misstrauen gegenueber der Zuverlaessigkeit. Feste Termine und klare Grenzen geben Sicherheit."
        )

        show_quiz(
            "m1_q7",
            "Was ist die wichtigste therapeutische Funktion, die du als Berater:in fuer unsicher gebundene Jugendliche erfuellst?",
            [
                "Diagnosen stellen",
                "Eine korrigierende Beziehungserfahrung bieten",
                "Den Eltern Vorwuerfe machen",
                "Moeglichst viele Techniken anwenden"
            ],
            1,
            "Die Beziehung IST die Intervention. Eine zuverlaessige, wertschaetzende, praesente Beziehung kann fruehe Bindungsverletzungen teilweise 'reparieren'."
        )

    # ──────────────────────────────────────────
    # TAB 4: NORMAL VS. AUFFAELLIG
    # ──────────────────────────────────────────
    with tab4:
        st.markdown("### Ist das noch normal? — Die zentrale Frage")
        st.markdown("""
        Die groesste Herausforderung in der Arbeit mit Jugendlichen: **Wo hoert normale Adoleszenz auf
        und wo faengt klinische Auffaelligkeit an?** Hier lernst du, den Unterschied zu erkennen.
        """)

        st.markdown("#### Vergleich: Normal vs. Warnsignal")

        categories = [
            ("Stimmungsschwankungen",
             "Wechselnde Stimmung innerhalb eines Tages, reagiert auf konkrete Ausloeser, kann sich wieder regulieren, hat auch gute Phasen",
             "Anhaltend gedrückte Stimmung ueber 2+ Wochen, kein erkennbarer Ausloeser, Interessenverlust, Hoffnungslosigkeit, Suizidgedanken"),
            ("Sozialer Rueckzug",
             "Zieht sich phasenweise zurueck, hat aber Freunde, sucht Privatsphaere gegenueber Eltern, ist in der Peer-Group aktiv",
             "Vollstaendiger Rueckzug ueber Wochen, verliert Freundschaften, geht nicht mehr raus, isoliert sich auch online, meidet alle Kontakte"),
            ("Risikoverhalten",
             "Experimentiert gelegentlich (Alkohol auf Party), Mutproben mit Peers, testet Grenzen, kann Risiken einschaetzen",
             "Regelmaessiger Substanzkonsum, selbstverletzendes Verhalten, wiederholt gefaehrliche Aktionen, kann nicht aufhoeren"),
            ("Konflikte mit Eltern",
             "Diskussionen ueber Regeln, will mehr Freiheit, knallt Tueren, sagt 'Ihr versteht mich nicht'",
             "Totaler Beziehungsabbruch, haeusliche Gewalt, Weglaufen, keine Kommunikation mehr ueber Wochen"),
            ("Schulische Veraenderungen",
             "Leichter Notenrueckgang, weniger Motivation in bestimmten Faechern, andere Prioritaeten als Schule",
             "Dramatischer Leistungseinbruch, Schulverweigerung, kann sich nicht mehr konzentrieren, Fehlzeiten haeufig"),
            ("Schlafveraenderungen",
             "Spaeter einschlafen und aufstehen (biologischer Rhythmus), am Wochenende ausschlafen",
             "Schlaeft kaum noch oder schlaeft den ganzen Tag, Albtraeume, chronische Erschoepfung trotz genug Schlaf"),
        ]

        for category, normal, warning in categories:
            st.markdown(f"**{category}**")
            col1, col2 = st.columns(2)
            with col1:
                show_green_box("Normal / Entwicklungstypisch", normal)
            with col2:
                show_red_flag(warning)

        st.markdown("#### Entscheidungshilfe: Wann intervenieren?")
        st.markdown("""
        Frage dich bei jedem Verhalten diese **4 Fragen**:

        1. **Dauer:** Wie lange geht das schon? (> 2 Wochen = aufmerksam werden)
        2. **Intensitaet:** Wie stark ist die Belastung? (beeintraechtigt Alltag?)
        3. **Funktionalitaet:** Kann der/die Jugendliche noch am normalen Leben teilnehmen?
        4. **Leidensdruck:** Leidet der/die Jugendliche selbst darunter (oder nur die Umgebung)?

        Wenn 2 oder mehr Fragen mit "Ja, das ist bedenklich" beantwortet werden → **aktiv werden**.
        """)

        st.markdown("---")

        show_quiz(
            "m1_q8",
            "Eine 14-Jaehrige hat seit 3 Tagen schlechte Laune, weil ihre beste Freundin sich mit einer anderen versteht. Sie weint manchmal, ist aber in der Schule funktional. Ist das klinisch relevant?",
            [
                "Ja, das koennte eine Depression sein",
                "Nein, das ist eine normale emotionale Reaktion auf eine soziale Situation",
                "Ja, sie braucht sofort Therapie",
                "Nur wenn sie sich selbst verletzt"
            ],
            1,
            "Kurze Dauer (3 Tage), klarer Ausloeser, noch funktional, normaler Trauerprozess. Das ist typische Adoleszenz. Beobachten, aber nicht pathologisieren."
        )

        show_quiz(
            "m1_q9",
            "Ein 16-Jaehriger hat seit 4 Wochen Leistungseinbruch, zieht sich zurueck, schlaeft im Unterricht, hat aufgehoert, Fussball zu spielen, und sagt 'Alles ist sinnlos'. Was tust du?",
            [
                "Abwarten, das ist normale Pubertaet",
                "Den Eltern Bescheid geben, dass er faul geworden ist",
                "Aktiv werden: Dauer ueber 2 Wochen, mehrere Bereiche betroffen, Interessenverlust, Hoffnungslosigkeit",
                "Ihn zum Direktor schicken"
            ],
            2,
            "Hier sind ALLE 4 Warnsignale erfuellt: Dauer > 2 Wochen, hohe Intensitaet, Funktionseinschraenkung in mehreren Bereichen, Ausdruck von Sinnlosigkeit. Das erfordert ein Gespraech und moegliche Weiterverweisung."
        )

        show_quiz(
            "m1_q10",
            "Welche der 4 Prueffragen ist bei Jugendlichen am schwierigsten zu beantworten?",
            [
                "Dauer — weil man selten von Anfang an beobachtet",
                "Leidensdruck — weil Jugendliche ihr Leiden oft nicht zeigen oder verleugnen",
                "Intensitaet — weil Jugendliche alles uebertreiben",
                "Funktionalitaet — weil man die Schulnoten sieht"
            ],
            1,
            "Oft erfahren Schulpsychologen erst spaet von Problemen. Daher ist eine gute Zusammenarbeit mit Lehrern und Eltern wichtig, um Veraenderungen frueh zu bemerken."
        )

    # ──────────────────────────────────────────
    # TAB 5: EMOTIONSREGULATION
    # ──────────────────────────────────────────
    with tab5:
        st.markdown("### Emotionsregulation bei Jugendlichen")

        st.markdown("#### Das Gross-Modell: 5 Interventionspunkte")
        st.markdown("""
        Emotionsregulation laesst sich an 5 Stellen beeinflussen:

        1. **Situationsselektion** — Welche Situationen suche ich auf / meide ich?
        2. **Situationsmodifikation** — Kann ich die Situation veraendern?
        3. **Aufmerksamkeitslenkung** — Worauf richte ich meinen Fokus?
        4. **Kognitive Umbewertung** — Wie bewerte ich das, was passiert?
        5. **Reaktionsmodulation** — Wie gehe ich mit der bereits entstandenen Emotion um?
        """)

        st.markdown("#### Wie schlechte Emotionsregulation sich in der Schule zeigt")

        with st.expander("Ausbrueche (Externalisierend)"):
            st.markdown("""
            **Was du siehst:** Schreien, Weinen, Tisch umwerfen, Tuer knallen, Mitschueler anschreien.

            **Was dahinter steckt:** Die Emotion ist so ueberwаeltigend, dass keine Regulationsstrategie
            mehr verfuegbar ist. "Emotionale Ueberflutung" — das Fenster der Toleranz ist ueberschritten.

            **Erstintervention:**
            - Sicherheit gewaehrleisten
            - Ruhig bleiben, wenig sprechen
            - Wenn moeglich: Raum wechseln, Reize reduzieren
            - NICHT: In der Akutsituation diskutieren oder moralisieren
            - Erst wenn ruhiger: Grounding, Atmung
            """)

        with st.expander("Shutdown (Internalisierend)"):
            st.markdown("""
            **Was du siehst:** Voellige Starre, antwortet nicht, starrer Blick, "wie eingefroren",
            zieht sich komplett zurueck.

            **Was dahinter steckt:** Das Nervensystem schaltet auf "Totstellreflex". Hypoarousal —
            unter dem Fenster der Toleranz. Oft bei traumatisierten Jugendlichen.

            **Erstintervention:**
            - Sanft ansprechen: "Ich bin hier. Du bist sicher."
            - 5-4-3-2-1 Grounding (ueber Sinne zurueck in den Koerper)
            - Kaltes Wasser, Eiswuerfel in der Hand
            - NICHT: anfassen ohne Erlaubnis, anschreien, schuetteln
            """)

        with st.expander("Somatisierung"):
            st.markdown("""
            **Was du siehst:** Bauchschmerzen vor Pruefungen, Kopfschmerzen bei Konflikten,
            ploetzliche Uebelkeit in sozialen Situationen.

            **Was dahinter steckt:** Der Koerper drueckt aus, was emotional nicht verarbeitet werden kann.
            Das ist KEINE Simulation — die Schmerzen sind REAL.

            **Erstintervention:**
            - Ernst nehmen, nicht abwerten ("Das bildest du dir nicht ein")
            - Koerperlich: Medizinisch abklaeren lassen
            - Psychisch: "Dein Koerper reagiert auf etwas. Lass uns schauen, was das sein koennte"
            - Koerperorientierte Methoden: Atmung, Body Scan
            """)

        st.markdown("#### Das Fenster der Toleranz")
        show_intervention(
            "Das Fenster der Toleranz erklaeren",
            "Stell dir eine Zone vor — dein Fenster der Toleranz. Innerhalb dieser Zone kannst du "
            "denken, fuehlen und handeln. "
            "Wenn du UEBER das Fenster hinausgehst (Hyperarousal): Wut, Panik, Ueberreizung. "
            "Wenn du UNTER das Fenster faellst (Hypoarousal): Taubheit, Starre, Dissoziation. "
            "Unser Ziel: Dein Fenster vergroessern, damit du mehr aushalten kannst, ohne auszurasten "
            "oder abzuschalten. Wie? Durch Uebung: Atmung, Grounding, Koerperwahrnehmung."
        )

        st.markdown("---")

        show_quiz(
            "m1_q11",
            "Ein Schueler sitzt nach einem Streit mit einem Mitschueler voellig erstarrt da, reagiert auf nichts. Was ist am wahrscheinlichsten passiert?",
            [
                "Er ignoriert dich absichtlich",
                "Er ist ins Hypoarousal gerutscht (unter das Fenster der Toleranz)",
                "Er ueberlegt sich eine gute Antwort",
                "Er schlaeft"
            ],
            1,
            "Starre, fehlende Reaktion, 'Einfrieren' — das sind Zeichen fuer Hypoarousal / Dissoziation. "
            "Das Nervensystem hat auf 'Totstellreflex' geschaltet. Sanftes Grounding hilft."
        )

        show_quiz(
            "m1_q12",
            "Eine Schuelerin hat vor jeder Mathearbeit starke Bauchschmerzen. Die Aerztin findet nichts. Wie gehst du damit um?",
            [
                "'Das bildest du dir ein, es gibt keinen medizinischen Befund'",
                "Die Schmerzen ernst nehmen und explorieren, worauf der Koerper reagiert",
                "Sagen, sie soll sich zusammenreissen",
                "Direkt eine Angstdiagnose stellen"
            ],
            1,
            "Somatisierung: Der Koerper drueckt aus, was emotional nicht verarbeitet werden kann. Die Schmerzen sind REAL. "
            "Den Koerper als Zugang nutzen: 'Dein Koerper reagiert auf etwas. Lass uns schauen, was das sein koennte.'"
        )
