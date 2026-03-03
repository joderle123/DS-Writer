"""Modul 3: Gespraechsfuehrung — Dialogsimulationen und Praxis."""
import streamlit as st
from components.helpers import show_quiz, show_case_study, show_red_flag, show_intervention, show_green_box


def show():
    st.markdown("## Modul 3: Gespraechsfuehrung")
    st.markdown("*Die Kernkompetenz: Wie du mit Jugendlichen sprichst — mit interaktiven Uebungen und Dialogsimulationen.*")

    tab1, tab2, tab3, tab4, tab5, tab6 = st.tabs([
        "Grundhaltungen",
        "Aktives Zuhoeren",
        "Motivierende Gespraechsfuehrung",
        "Loesungsorientiert",
        "Erstgespraech",
        "Schwierige Situationen"
    ])

    # ════════════════════════════════════════════
    # TAB 1: GRUNDHALTUNGEN
    # ════════════════════════════════════════════
    with tab1:
        st.markdown("### Grundhaltungen nach Rogers")
        st.markdown("Drei Bedingungen, ohne die kein therapeutisches Gespraech funktioniert:")

        col1, col2, col3 = st.columns(3)
        with col1:
            st.markdown("""
            **Empathie**
            Die Welt mit den Augen des
            Jugendlichen sehen. Nicht
            "Ich verstehe dich", sondern
            WIRKLICH verstehen, wie es
            sich anfuehlt.
            """)
        with col2:
            st.markdown("""
            **Wertschaetzung**
            Die Person akzeptieren,
            auch wenn du das Verhalten
            nicht gutheisst.
            "Ich mag dich, auch wenn
            ich dein Verhalten schwierig
            finde."
            """)
        with col3:
            st.markdown("""
            **Kongruenz**
            Echt sein. Keine Fassade.
            Deine Worte und deine
            Koerpersprache stimmen
            ueberein. Jugendliche
            spueren Falschheit sofort.
            """)

        st.markdown("#### Empathisch oder nicht? — Interaktive Uebung")
        st.markdown("Ein:e Schueler:in sagt etwas. Welche Antwort ist empathisch?")

        examples = [
            ("'Niemand mag mich in der Klasse.'",
             [("'Das stimmt doch nicht, du hast doch Freunde!' (Korrigieren)", False, "Das entwertet das Gefuehl. Der/die Jugendliche fuehlt sich nicht gehooert."),
              ("'Du fuehlst dich gerade ziemlich allein und ausgeschlossen.' (Spiegeln)", True, "Perfekt: Du spiegelst das Gefuehl, ohne zu korrigieren oder zu bewerten."),
              ("'Vielleicht solltest du mal auf andere zugehen.' (Ratschlag)", False, "Ratschlaege sind keine Empathie. Der/die Jugendliche braucht erst, dass du ihr Erleben verstehst."),
              ("'Mir ging es in deinem Alter genauso.' (Eigene Geschichte)", False, "Gut gemeint, aber lenkt den Fokus auf dich. Der/die Jugendliche braucht DEINEN Fokus auf SICH.")]),
            ("'Meine Eltern streiten sich jede Nacht. Ich kann nicht schlafen.'",
             [("'Hast du schon mal Ohrstoepsel probiert?' (Loesungsversuch)", False, "Viel zu frueh — der/die Jugendliche braucht erst, dass du den Ernst der Lage anerkennst."),
              ("'Das klingt sehr belastend. Du liegst nachts wach und hoerst alles mit.' (Empathie)", True, "Du zeigst, dass du verstehst, was er/sie durchmacht. Das ist die Basis fuer alles Weitere."),
              ("'Ach, meine Eltern haben sich auch gestritten.' (Vergleich)", False, "Entwertet die individuelle Erfahrung."),
              ("'Trennen sich deine Eltern?' (Sachfrage)", False, "Zu frueh — erst das Gefuehl spiegeln, dann faktenorientierte Fragen.")]),
            ("'Ich habe mich geritzt. Aber es hilft mir.'",
             [("'Das darfst du nicht machen!' (Verbot)", False, "Moralisiering. Fuehrt dazu, dass der/die Jugendliche sich verschliesst. Du verlierst den Zugang."),
              ("'Wollen wir mal schauen, ob wir andere Wege finden?' (Loesungsfokus)", False, "Zu frueh. Erst die Funktion verstehen, bevor du Alternativen anbietest."),
              ("'Es klingt, als waere das gerade dein einziger Weg, mit dem Schmerz umzugehen.' (Empathie)", True, "Du anerkennst die Funktion des SVV, ohne es gutzuheissen. Das oeffnet den Dialog."),
              ("'Warum machst du so etwas?' (Warum-Frage)", False, "'Warum' klingt vorwurfsvoll. Besser: 'Was passiert in dir, bevor du dich ritzt?'")])
        ]

        for i, (statement, options) in enumerate(examples):
            st.markdown(f"**Schueler:in sagt:** {statement}")
            selected = st.radio(
                "Welche Antwort ist am empathischsten?",
                [opt[0] for opt in options],
                key=f"empathy_{i}",
                index=None,
                label_visibility="collapsed"
            )
            if st.button("Auswahl pruefen", key=f"check_emp_{i}"):
                if selected:
                    for opt_text, is_correct, explanation in options:
                        if opt_text == selected:
                            if is_correct:
                                st.success(f"Richtig! {explanation}")
                            else:
                                correct = [o[0] for o in options if o[1]][0]
                                st.error(f"{explanation} Die empathische Antwort waere: {correct}")
                else:
                    st.warning("Bitte waehle eine Antwort.")
            st.markdown("---")

        show_quiz("m3_q1",
            "Was ist der haeufigste 'Empathie-Killer' in der Beratung?",
            ["Stille zulassen", "Zu frueh Ratschlaege geben", "Offene Fragen stellen", "Gefuehle spiegeln"],
            1,
            "Ratschlaege signalisieren: 'Ich weiss es besser als du.' Empathie bedeutet: Erst verstehen, dann (vielleicht) loesen.")

    # ════════════════════════════════════════════
    # TAB 2: AKTIVES ZUHOEREN
    # ════════════════════════════════════════════
    with tab2:
        st.markdown("### Aktives Zuhoeren — 6 Techniken")

        techniques = [
            ("Paraphrasieren", "Den Inhalt in eigenen Worten wiedergeben.",
             "'Mein Bruder nervt mich total, der macht immer meine Sachen kaputt.'",
             "'Dein Bruder geht an deine Sachen und das macht dich richtig wuetend.'"),
            ("Gefuehle spiegeln", "Die Emotion benennen, die du hoerst.",
             "'Ich habe die Pruefung verhauen. Ich bin so bloed.'",
             "'Du bist enttaeuscht und aergerst dich ueber dich selbst.'"),
            ("Zusammenfassen", "Mehrere Aussagen buendeln.",
             "(Nach 10 Minuten Erzaehlen ueber Schulstress, Elternstreit, Freundschaftsprobleme)",
             "'Du hast gerade eine Menge auf dem Teller: Stress in der Schule, Zoff zu Hause und Aerger mit Freunden. Kein Wunder, dass du dich ueberfordert fuehlst.'"),
            ("Offene Fragen", "Fragen, die mehr als Ja/Nein erfordern.",
             "STATT: 'Bist du traurig?' (geschlossen)",
             "'Wie fuehlt sich das fuer dich an?' / 'Was geht dir durch den Kopf?' / 'Erzaehl mir mehr davon.'"),
            ("Minimale Ermutigungen", "Kleine Signale, dass du zuhoerst.",
             "(Waehrend der/die Jugendliche erzaehlt)",
             "'Mhm', 'Ja', 'Aha', 'Und dann?', Nicken, Blickkontakt halten"),
            ("Konkretisieren", "Vages konkret machen.",
             "'Alles ist scheisse.'",
             "'Was genau ist gerade scheisse? Kannst du mir ein Beispiel nennen?'"),
        ]

        for name, desc, student_says, you_say in techniques:
            with st.expander(f"{name}"):
                st.markdown(f"**Was es ist:** {desc}")
                st.markdown(f"**Schueler:in sagt:** *{student_says}*")
                st.markdown(f"**Du sagst:** *{you_say}*")

        st.markdown("#### Die haeufigsten Fehler")
        col1, col2 = st.columns(2)
        with col1:
            show_red_flag(
                "**Was du NICHT tun solltest:**\n"
                "- Zu schnell Ratschlaege geben\n"
                "- Eigene Erfahrungen erzaehlen\n"
                "- Gefuehle kleinreden ('So schlimm ist das nicht')\n"
                "- Moralisieren ('Du solltest...')\n"
                "- Vorschnell interpretieren\n"
                "- Unterbrechen")
        with col2:
            show_green_box("Was du stattdessen tust",
                "- Stille aushalten (5-10 Sekunden sind OK!)\n"
                "- Gefuehle benennen, nicht bewerten\n"
                "- 'Erzaehl mir mehr' statt 'Warum?'\n"
                "- Zusammenfassen statt sofort reagieren\n"
                "- Nachfragen wenn unklar\n"
                "- Tempo des Jugendlichen folgen")

        show_quiz("m3_q2",
            "Ein Schueler sagt: 'Alles ist scheisse.' Welche Technik wendest du an?",
            ["Paraphrasieren", "Konkretisieren", "Gefuehle spiegeln", "Zusammenfassen"],
            1,
            "'Alles ist scheisse' ist vage. Konkretisieren hilft: 'Was genau ist gerade scheisse? Kannst du mir ein Beispiel nennen?' So kommst du vom Allgemeinen zum Konkreten.")

    # ════════════════════════════════════════════
    # TAB 3: MOTIVIERENDE GESPRAECHSFUEHRUNG (MI)
    # ════════════════════════════════════════════
    with tab3:
        st.markdown("### Motivierende Gespraechsfuehrung (MI)")
        st.markdown("**Kernprinzip:** Motivation kommt vom Klienten, nicht vom Berater. Du ZIEHST "
                    "die Motivation heraus, statt sie HINEINZUDRUECKEN.")

        st.markdown("#### OARS — Die 4 MI-Techniken")

        col1, col2 = st.columns(2)
        with col1:
            st.markdown("""
            **O = Open Questions** (Offene Fragen)
            - STATT: "Rauchst du?" → "Erzaehl mir ueber dein Rauchen."
            - STATT: "Willst du aufhoeren?" → "Was denkst du ueber dein Rauchen?"

            **A = Affirmations** (Wertschaetzung)
            - Nicht: "Toll gemacht!" (generisch)
            - SONDERN: "Du hast dich getraut, hierher zu kommen, obwohl es dir schwerfaellt. Das zeigt Mut."
            """)
        with col2:
            st.markdown("""
            **R = Reflections** (Reflexionen)
            - Einfach: "Du fuehlst dich unter Druck."
            - Komplex: "Einerseits geniesst du das Kiffen, andererseits merkst du, dass es Probleme macht."

            **S = Summaries** (Zusammenfassungen)
            - Buendeln, was gesagt wurde
            - Besonders die Ambivalenz hervorheben
            """)

        st.markdown("#### Change Talk erkennen — DARN-CAT")
        st.markdown("""
        Achte auf diese Aussagen — sie zeigen Veraenderungsbereitschaft:

        | Typ | Beispiel | Was du tust |
        |-----|---------|-------------|
        | **D**esire (Wunsch) | "Ich wuenschte, ich koennte aufhoeren" | Vertiefen: "Was wuenschst du dir genau?" |
        | **A**bility (Faehigkeit) | "Ich koennte weniger kiffen, wenn ich wollte" | Staerken: "Was gibt dir diese Zuversicht?" |
        | **R**easons (Gruende) | "Meine Noten werden schlechter wegen Kiffen" | Explorieren: "Was wuerde sich aendern?" |
        | **N**eed (Notwendigkeit) | "Ich muss etwas aendern" | Unterstuetzen: "Was waere der erste Schritt?" |
        | **C**ommitment (Verpflichtung) | "Ich werde naechste Woche weniger kiffen" | Konkretisieren: "Wie genau?" |
        | **A**ctivation (Aktivierung) | "Ich bin bereit, es zu versuchen" | Planen: "Was brauchst du dafuer?" |
        | **T**aking Steps (Schritte) | "Ich habe gestern nicht gekifft" | Feiern: "Wow! Wie hast du das geschafft?" |
        """)

        st.markdown("#### Dialog-Simulation: Cannabis-Konsum")
        st.markdown("*Tim (16) wurde geschickt, weil er auf dem Schulhof gekifft hat.*")

        dialog = [
            ("Tim", "Ich weiss nicht, warum ich hier bin. Es war nur ein Joint."),
            ("Berater:in — Option A", "'Nur ein Joint? Cannabis ist illegal und schaedlich!' ❌ (Konfrontation — erzeugt Widerstand)"),
            ("Berater:in — Option B", "'Du findest es uebertrieben, dass du wegen einem Joint hier sitzt.' ✅ (Reflexion — zeigt Verstaendnis)"),
            ("Tim", "Ja, genau. Alle kiffen doch. Das ist nichts Besonderes."),
            ("Berater:in — Option A", "'Nicht alle kiffen. Du redest dir das schoen!' ❌ (Korrektur — verstaerkt Widerstand)"),
            ("Berater:in — Option B", "'Fuer dich gehoert das dazu und ist normal. Gleichzeitig bist du jetzt hier. Was denkst du, wie es weitergeht?' ✅ (Reflexion + offene Frage)"),
            ("Tim", "Naja... Meine Mutter regt sich halt auf. Und meine Noten sind auch nicht so toll gerade."),
            ("Berater:in", "'Du merkst also, dass das Kiffen Auswirkungen hat — auf deine Mutter und auf die Schule.' ✅ (Reflexion — Change Talk hervorheben!)"),
            ("Tim", "Ja, schon. Ich will meine Mutter nicht stressen. Und die Noten... ich will eigentlich Abi machen."),
            ("Berater:in", "'Einerseits geniesst du das Kiffen, andererseits willst du dein Abi und deine Mutter nicht belasten. Das ist ein Zwiespalt.' ✅ (Ambivalenz benennen)"),
        ]

        for speaker, text in dialog:
            if "Option A" in speaker:
                st.markdown(f"**{speaker}:** {text}")
            elif "Option B" in speaker or "Berater:in" == speaker:
                st.markdown(f"**{speaker}:** {text}")
            else:
                st.markdown(f"*{speaker}: {text}*")

        st.info("**MI-Prinzip:** Wenn du gegen die Veraenderung argumentierst, argumentiert der Klient FUER die Veraenderung. "
               "Wenn du FUER die Veraenderung argumentierst, argumentiert der Klient DAGEGEN. Lass den Klienten seine eigenen Gruende finden.")

        show_quiz("m3_q3",
            "Tim sagt: 'Naja, meine Noten sind nicht so toll gerade.' Was ist das in MI-Sprache?",
            ["Sustain Talk (fuer den Status quo)", "Change Talk (Grund fuer Veraenderung)", "Widerstand", "Smalltalk"],
            1,
            "Tim benennt eine negative Konsequenz seines Konsums = Reasons (DARN). Das ist Change Talk! "
            "Vertiefe es: 'Erzaehl mir mehr darueber.'")

        show_quiz("m3_q4",
            "Was passiert, wenn du als Berater:in FUER die Veraenderung argumentierst?",
            ["Der Klient ist dankbar", "Der Klient argumentiert DAGEGEN (Reaktanz)", "Nichts", "Der Klient aendert sich sofort"],
            1,
            "Das ist der 'MI-Reflex des Beratens': Wenn du sagst 'Du solltest aufhoeren zu kiffen', "
            "sagt der Klient 'Ist doch nicht so schlimm'. Ambivalenz explorieren statt predigen.")

    # ════════════════════════════════════════════
    # TAB 4: LOESUNGSORIENTIERT
    # ════════════════════════════════════════════
    with tab4:
        st.markdown("### Loesungsorientierte Kurzberatung")
        st.markdown("**Grundprinzip:** Statt Probleme zu analysieren, suchen wir nach Loesungen, "
                    "die BEREITS funktionieren.")

        st.markdown("#### Die 4 Schluesseltechniken")

        with st.expander("Die Wunderfrage"):
            st.markdown("""
            **Wie du sie stellst:**
            *"Stell dir vor, heute Nacht passiert ein Wunder, waehrend du schlaefst. Und das Problem,
            weswegen du hier bist, ist ploetzlich geloest. Aber du weisst es nicht, weil du geschlafen hast.
            Woran wuerdest du morgen frueh als erstes merken, dass das Wunder passiert ist?"*

            **Warum sie wirkt:**
            - Umgeht das "Ja, aber" des Problemdenkens
            - Macht eine positive Zukunft vorstellbar
            - Fuehrt zu konkreten, erreichbaren Zielen
            - Jugendliche koennen sich erstmals vorstellen, wie es OHNE Problem waere

            **Beispielantworten und Nachfragen:**
            - "Ich wuerde gut geschlafen haben" → "Was waere anders, wenn du gut schlaefst?"
            - "Ich wuerde mich auf die Schule freuen" → "Was genau wuerde dich freuen?"
            - "Meine Eltern wuerden nicht mehr streiten" → "Und was waere dann fuer DICH anders?"
            """)

        with st.expander("Skalierungsfragen"):
            st.markdown("""
            **Wie du sie nutzt:**
            *"Auf einer Skala von 1 bis 10 — wobei 1 das Schlimmste ist und 10 das Beste — wo stehst du gerade?"*

            **Nachfragen:**
            - "Was hat dich von 1 auf [aktuelle Zahl] gebracht?" (Ressourcen entdecken!)
            - "Was muesste passieren, damit du einen Punkt hoeher kommst?" (Kleiner naechster Schritt!)
            - "Was hast du schon versucht, was funktioniert hat?" (Ausnahmen finden!)

            **Warum es wirkt:** Macht subjektives Erleben messbar und Fortschritte sichtbar.
            Auch eine 3 ist besser als eine 1 — was hat die 3 ermoeglicht?
            """)

        with st.expander("Ausnahmefragen"):
            st.markdown("""
            **Grundidee:** Kein Problem tritt 24/7 auf. Es gibt immer Momente, in denen es BESSER ist.

            **Fragen:**
            - "Wann war das Problem in letzter Zeit etwas weniger schlimm?"
            - "Was war da anders? Was hast DU anders gemacht?"
            - "Gibt es Zeiten, in denen du dich wohler fuehlst? Was passiert dann?"
            - "Was machen die guten Tage anders als die schlechten?"

            **Warum es wirkt:** Der/die Jugendliche entdeckt, dass er/sie bereits Loesungen HAT —
            sie werden nur nicht bewusst eingesetzt.
            """)

        with st.expander("Bewaeltigungsfragen"):
            st.markdown("""
            **Grundidee:** Anerkennen, dass der/die Jugendliche eine schwierige Situation UEBERLEBT.

            **Fragen:**
            - "Bei allem, was du durchmachst — wie schaffst du es, trotzdem jeden Tag aufzustehen?"
            - "Was gibt dir die Kraft, weiterzumachen?"
            - "Andere haetten laengst aufgegeben. Was ist bei dir anders?"

            **Warum es wirkt:** Validiert die Belastung UND die Staerke. Besonders wirksam bei
            Jugendlichen, die sich als hilflos erleben.
            """)

        show_quiz("m3_q5",
            "Eine Schuelerin sagt: 'Auf der Skala bin ich bei einer 3.' Was fragst du ZUERST?",
            ["'Warum bist du nur bei einer 3?'", "'Was muesste passieren, damit du eine 10 erreichst?'", "'Was hat dich von 1 auf 3 gebracht?'", "'Warum nicht hoeher?'"],
            2,
            "Immer erst nach den RESSOURCEN fragen: Was hat die 3 ermoeglicht? Nicht: Warum nicht hoeher? "
            "Das fokussiert auf Defizite statt auf Staerken.")

    # ════════════════════════════════════════════
    # TAB 5: ERSTGESPRAECH
    # ════════════════════════════════════════════
    with tab5:
        st.markdown("### Das Erstgespraech — 3 Szenarien")

        scenario = st.selectbox("Waehle ein Szenario:", [
            "Freiwilliger Jugendlicher",
            "Widerstaendiger Jugendlicher ('Ich will nicht hier sein')",
            "Sehr stiller Jugendlicher"
        ], key="first_session")

        if scenario == "Freiwilliger Jugendlicher":
            st.markdown("#### Szenario 1: Der/die Jugendliche kommt freiwillig")
            st.markdown("""
            **Eroeffnung:**
            *"Hallo, schoen dass du da bist. Ich bin [Name] und ich bin Psycholog:in hier an der Schule.
            Alles, was du mir erzaehlst, bleibt unter uns — es sei denn, du bist in Gefahr.
            Was fuehrt dich her?"*

            **Ablauf:**
            1. Begruessung, Rahmen setzen (Vertraulichkeit, Zeit, Freiwilligkeit)
            2. Anliegen explorieren: "Was beschaeftigt dich?"
            3. Lebenssituation verstehen: Schule, Familie, Freunde, Freizeit
            4. Staerken erfragen: "Was laeuft gut? Was kannst du gut?"
            5. Aktuelle Belastungen: "Was stresst dich gerade am meisten?"
            6. Suizidalitaet/SVV checken (routinemaessig, nicht dramatisch)
            7. Erwartungen: "Was erhoffst du dir von unseren Gespraechen?"
            8. Naechste Schritte vereinbaren
            9. Dokumentieren
            """)

        elif scenario == "Widerstaendiger Jugendlicher ('Ich will nicht hier sein')":
            st.markdown("#### Szenario 2: 'Ich hab keinen Bock, hier zu sein'")
            st.markdown("""
            **Was du NICHT tun solltest:**
            - Nicht ueberreden: "Aber es ist doch gut fuer dich!"
            - Nicht ignorieren: Einfach anfangen als waere alles OK
            - Nicht drohen: "Wenn du nicht mitmachst..."

            **Was du stattdessen sagst:**

            *"Hey, ich merke, du hast nicht freiwillig hergefunden. Das ist OK.
            Du musst hier nicht reden, wenn du nicht willst.
            Aber wir haben jetzt diese Zeit — wir koennen sie nutzen oder einfach still sitzen.
            Du entscheidest."*

            **Wenn Stille folgt:** Halte sie aus. 30 Sekunden, eine Minute. Das ist OK.

            **Wenn er/sie sagt "Ich will aber nicht hier sein":**
            *"Verstehe. Was muesste passieren, damit diese Zeit hier wenigstens nicht verschwendet ist?"*

            **Wenn er/sie sagt "Mir geht es gut, ich brauche keine Hilfe":**
            *"OK, mag sein. Was glaubst du, warum [Lehrer/Eltern] sich Sorgen machen?"*
            (Verschiebt die Perspektive, ohne zu konfrontieren)
            """)

        else:
            st.markdown("#### Szenario 3: Der/die sehr stille Jugendliche")
            st.markdown("""
            **Strategien fuer stille Jugendliche:**

            1. **Druck rausnehmen:** "Du musst nicht reden. Wir koennen auch einfach hier sitzen."
            2. **Schreiben anbieten:** "Manchmal ist es einfacher, Dinge aufzuschreiben."
            3. **Geschlossene Fragen als Einstieg:** "Magst du lieber hier sitzen oder am Fenster?"
               (Geringe Huerde — Ja/Nein statt offene Fragen)
            4. **Ueber Dritte sprechen:** "Manche Jugendliche finden es schwer, ueber Gefuehle zu reden..."
            5. **Kreative Methoden:** Zeichnen, Karten legen, Emotionsrad
            6. **Skalierung:** "Zeig mir mit den Fingern, wie es dir geht. 1 = schlecht, 10 = super."
            7. **Stille aushalten:** Manchmal braucht es 3-4 Sitzungen bis jemand auftaut. Geduld.

            **Wichtig:** Stilles Verhalten kann bedeuten:
            - Unsicher-vermeidende Bindung
            - Soziale Angst
            - Traumaerfahrung (Dissoziation)
            - Selektiver Mutismus
            - Kulturelle Faktoren
            - Oder einfach: Pubertaet
            """)

        st.markdown("---")
        st.markdown("#### Checkliste Erstgespraech (10 Punkte)")
        checks = [
            "Begruessung und Vorstellung",
            "Vertraulichkeit und Grenzen erklaert",
            "Anliegen / Anlass besprochen",
            "Lebenssituation exploriert (Schule, Familie, Peers)",
            "Staerken und Ressourcen erfragt",
            "Aktuelle Belastungsfaktoren identifiziert",
            "Suizidalitaet / SVV abgefragt (routine!)",
            "Erwartungen an die Beratung geklaert",
            "Naechste Schritte vereinbart (Termin, Ziele)",
            "Dokumentation erstellt",
        ]
        for check in checks:
            st.checkbox(check, key=f"check_{check}")

        show_quiz("m3_q6",
            "Ein widerstaendiger Schueler sagt: 'Ich brauche keine Hilfe, mir geht es gut.' Wie reagierst du?",
            [
                "'Wenn es dir gut ginge, waerst du nicht hier.'",
                "'OK, mag sein. Was glaubst du, warum die anderen sich Sorgen machen?'",
                "'Dann koennen wir ja aufhoeren.'",
                "'Du musst zugeben, dass du Hilfe brauchst.'"
            ],
            1,
            "Die Perspektive verschieben, ohne zu konfrontieren. Nicht: 'Du hast ein Problem.' Sondern: "
            "'Andere sehen etwas — was koennten sie sehen?'")

    # ════════════════════════════════════════════
    # TAB 6: SCHWIERIGE SITUATIONEN
    # ════════════════════════════════════════════
    with tab6:
        st.markdown("### Schwierige Gespraechssituationen — Was tun?")

        situations = st.selectbox("Waehle eine Situation:", [
            "Schueler:in weint unkontrolliert",
            "Schueler:in wird aggressiv / droht",
            "Schueler:in dissoziiert (ist 'weg')",
            "Schueler:in offenbart Missbrauch",
            "Schueler:in sagt 'Ich will sterben'"
        ], key="difficult_sit")

        if situations == "Schueler:in weint unkontrolliert":
            st.markdown("""
            **Schritt-fuer-Schritt:**
            1. **Stille aushalten.** Nicht sofort reden. Weinen duerfen.
            2. **Taschentuecher anbieten**, Wasser hinstellen.
            3. **Praesent sein:** "Ich bin hier. Nimm dir die Zeit, die du brauchst."
            4. **NICHT:** "Nicht weinen", "Ist doch nicht so schlimm", oder sofort umarmen.
            5. Wenn ruhiger: "Magst du mir erzaehlen, was dich so bewegt?"
            6. Tempo des Jugendlichen folgen — nicht draengen.
            """)

        elif situations == "Schueler:in wird aggressiv / droht":
            st.markdown("""
            **Schritt-fuer-Schritt:**
            1. **Sicherheit ZUERST.** Wenn du dich bedroht fuehlst: Raum verlassen, Hilfe holen.
            2. **Abstand halten** (1.5+ Meter), seitlich positionieren (nicht frontal)
            3. **Ruhig bleiben.** Stimme senken, langsam sprechen.
            4. **Gefuehl validieren:** "Ich sehe, dass du richtig wuetend bist. Das ist OK."
            5. **Verhalten begrenzen:** "Wuetend sein ist OK. Sachen kaputtmachen nicht."
            6. **Wahlmoeglichkeiten anbieten:** "Willst du dich setzen oder lieber eine Runde laufen?"
            7. **NICHT:** Argumentieren, drohen, schreien, festhalten, beschaemen.
            8. **Zeit geben.** Adrenalin braucht 20+ Minuten zum Abbauen.
            """)

        elif situations == "Schueler:in dissoziiert (ist 'weg')":
            st.markdown("""
            **Schritt-fuer-Schritt:**
            1. **Erkennen:** Starrer Blick, reagiert nicht, wirkt "nicht da", verlangsamte Bewegungen.
            2. **Sanft mit Namen ansprechen:** "[Name], ich bin hier. Du bist in der Schule."
            3. **Grounding:** "Kannst du deine Fuesse auf dem Boden spueren?"
            4. **Sinne aktivieren:** Eiswuerfel, kaltes Wasser, Pfefferminzoeel, lautes Klatschen (mit Erlaubnis)
            5. **5-4-3-2-1:** "Nenne mir 5 Dinge, die du siehst."
            6. **NICHT:** Anfassen ohne Erlaubnis, schuetteln, anschreien.
            7. **Wenn zurueck:** "Du warst kurz weg. Du bist jetzt hier. Du bist sicher."
            """)

        elif situations == "Schueler:in offenbart Missbrauch":
            st.markdown("""
            **Schritt-fuer-Schritt:**
            1. **Ruhig bleiben.** Kein Erschrecken, kein Entsetzen im Gesicht.
            2. **"Ich glaube dir."** (Die wichtigsten Worte.)
            3. **Zuhoeren.** Nicht unterbrechen, nicht nachbohren.
            4. **KEINE Leitfragen:** Nicht "Hat er dich angefasst?" — Offene Fragen: "Was ist passiert?"
            5. **"Das ist nicht deine Schuld."**
            6. **Ehrlich sein:** "Ich muss dafuer sorgen, dass du sicher bist. Dafuer brauche ich Hilfe."
            7. **Dokumentieren** (woertliche Aussagen, nicht interpretieren)
            8. **ONE melden** innerhalb von 24 Stunden (Pflichtmeldung!)
            9. **Taeter:in NICHT konfrontieren**
            10. **Eltern NICHT informieren, wenn Taeter:in im Haushalt lebt**
            """)
            show_red_flag("**Pflichtmeldung Luxemburg:** Artikel 7 Jugendschutzgesetz. "
                         "Kinderschutz geht VOR Schweigepflicht. ONE: 247-73100")

        else:  # "Ich will sterben"
            st.markdown("""
            **Schritt-fuer-Schritt:**
            1. **Ruhig bleiben.** Nicht in Panik geraten.
            2. **Direkt nachfragen:** "Wenn du sagst, du willst sterben — hast du Gedanken, dir etwas anzutun?"
            3. **Zuhoeren.** Nicht sofort beruhigen oder ablenken.
            4. **Risiko einschaetzen:** Gibt es einen Plan? Zugang zu Mitteln? Zeitrahmen?
            5. **Ernst nehmen:** Jede Aussage ueber Suizid ist ernst zu nehmen.
            6. **Nicht alleine lassen.** Wenn akute Gefahr: Bei der Person bleiben.
            7. **Hilfe holen:** Bei akuter Gefahr → 112. Sonst → SOS Detresse 45 45 45
            8. **Sicherheitsplan erstellen** (siehe Modul 4)
            9. **Eltern informieren** (in den meisten Faellen)
            10. **Nachsorge:** Folgetermin am naechsten Tag.
            """)
            st.error("**NOTFALLNUMMERN:** 112 (Notruf) | 45 45 45 (SOS Detresse) | 116 111 (Kanner-Jugendtelefon)")

        show_quiz("m3_q7",
            "Ein Schueler sagt: 'Mein Stiefvater schlaegt mich.' Was sagst du ZUERST?",
            ["'Bist du sicher?'", "'Ich glaube dir.'", "'Warum hast du das nicht frueher gesagt?'", "'Das muessen wir sofort melden.'"],
            1,
            "'Ich glaube dir' — die drei wichtigsten Worte bei einer Offenbarung. Nicht hinterfragen, nicht anzweifeln. "
            "Dann: zuhoeren, nicht deine Schuld, und ehrlich ueber naechste Schritte sein.")
