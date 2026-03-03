"""Modul 4: Interventionen & Methoden — Die Toolbox."""
import streamlit as st
from components.helpers import show_quiz, show_case_study, show_red_flag, show_intervention, show_green_box


def show():
    st.markdown("## Modul 4: Interventionen & Methoden")
    st.markdown("*Deine Toolbox: Welche Technik wann? Schritt-fuer-Schritt-Anleitungen mit Kontraindikationen.*")

    tab1, tab2, tab3, tab4, tab5, tab6 = st.tabs([
        "CBT-Techniken",
        "Emotionsregulation",
        "DBT-Skills",
        "Narrative & Kreativ",
        "Achtsamkeit",
        "Sicherheitsplanung"
    ])

    # ════════════════════════════════════════════
    # TAB 1: CBT
    # ════════════════════════════════════════════
    with tab1:
        st.markdown("### Kognitive Verhaltenstherapie (CBT)")
        st.markdown("**Grundprinzip:** Gedanke → Gefuehl → Verhalten. Veraendere den Gedanken, veraendert sich das Gefuehl.")

        st.markdown("#### Die 10 wichtigsten kognitiven Verzerrungen bei Jugendlichen")

        distortions = [
            ("Schwarz-Weiss-Denken", "Alles oder nichts. Keine Graustufen.",
             "'Wenn ich keine 1 habe, bin ich ein Versager.'",
             "'Gibt es etwas zwischen Versager und perfekt? Wo wuerdest du dich einordnen?'"),
            ("Katastrophisieren", "Das Schlimmste wird passieren.",
             "'Wenn ich durchfalle, ist mein ganzes Leben vorbei.'",
             "'Stell dir vor, du faellst durch. Was wuerde WIRKLICH passieren? Und dann?'"),
            ("Gedankenlesen", "Ich weiss, was andere denken.",
             "'Alle denken, ich bin dumm.'",
             "'Woher weisst du das genau? Haben sie das gesagt? Gibt es andere Erklaerungen?'"),
            ("Uebergeneralisierung", "Ein Ereignis = immer so.",
             "'Nie klappt etwas bei mir.'",
             "'NIE? Gab es letzte Woche einen Moment, wo etwas geklappt hat?'"),
            ("Emotionales Schlussfolgern", "Ich fuehle es, also ist es wahr.",
             "'Ich fuehle mich dumm, also bin ich dumm.'",
             "'Gefuehle sind keine Fakten. Wenn du dich dumm FUEHLST — was sagen die Beweise?'"),
            ("Personalisierung", "Alles ist meine Schuld.",
             "'Die Lehrerin mag mich nicht, deshalb die schlechte Note.'",
             "'Welche anderen Gruende koennte es fuer die Note geben?'"),
            ("Sollte-Tyrannei", "Starre Regeln fuer sich und andere.",
             "'Ich sollte IMMER gute Noten haben.'",
             "'Woher kommt dieses Sollen? Was passiert, wenn du es nicht schaffst?'"),
            ("Selektive Aufmerksamkeit", "Nur das Negative sehen.",
             "'Die eine 4 ruiniert alles' (trotz drei 2en).",
             "'Wenn wir uns alle Noten anschauen — was faellt dir auf?'"),
            ("Minimierung", "Gutes kleinreden.",
             "'Die gute Note war nur Glueck.'",
             "'Und wenn es kein Glueck war? Was hast DU dazu beigetragen?'"),
            ("Wahrsagerei", "Die Zukunft negativ vorhersagen.",
             "'Es wird sowieso schiefgehen.'",
             "'Woher weisst du das? Gibt es Situationen, wo es doch geklappt hat?'"),
        ]

        for name, desc, example, counter in distortions:
            with st.expander(f"{name}"):
                st.markdown(f"**Was es ist:** {desc}")
                st.markdown(f"**Jugendlicher sagt:** *{example}*")
                st.markdown(f"**Deine Gegenfrage:** *{counter}*")

        st.markdown("#### Das Gedankenprotokoll — Interaktive Uebung")
        st.markdown("Situation: *Du bekommst eine 4 in Mathe zurueck.*")

        st.markdown("""
        | Spalte | Inhalt |
        |--------|--------|
        | **Situation** | Mathearbeit: Note 4 |
        | **Automatischer Gedanke** | "Ich bin dumm. Ich werde nie Abi schaffen." |
        | **Gefuehl** | Scham (80%), Angst (70%), Wut (40%) |
        | **Beweise DAFUER** | Eine schlechte Note, habe nicht alles verstanden |
        | **Beweise DAGEGEN** | In Deutsch 2, in Bio 1, letzte Mathearbeit war 3, habe wenig gelernt |
        | **Alternativer Gedanke** | "Eine 4 ist aergerlich, aber kein Weltuntergang. Ich kann naechstes Mal mehr lernen." |
        """)

        show_red_flag("**Wann CBT NICHT anwenden:**\n"
                     "- Akute Krise (erst stabilisieren!)\n"
                     "- Schweres Trauma (erst Sicherheit und Stabilisierung)\n"
                     "- Aktive Psychose\n"
                     "- Starke Dissoziation")

        show_quiz("m4_q1",
            "Eine Schuelerin sagt: 'Ich fuehle mich haesslich, also BIN ich haesslich.' Welche kognitive Verzerrung?",
            ["Katastrophisieren", "Emotionales Schlussfolgern", "Personalisierung", "Gedankenlesen"],
            1,
            "Emotionales Schlussfolgern: 'Ich fuehle X, also ist X wahr.' Gefuehle werden als Beweis genommen.")

        show_quiz("m4_q2",
            "Wann solltest du CBT-Techniken NICHT einsetzen?",
            ["Bei leichter Angst", "In akuten Krisen und bei schwerem Trauma", "Bei Pruefungsangst", "Bei kognitiven Verzerrungen"],
            1,
            "In akuten Krisen ist der PFC offline — kognitive Arbeit funktioniert nicht. Erst stabilisieren, dann kognitiv arbeiten.")

    # ════════════════════════════════════════════
    # TAB 2: EMOTIONSREGULATION
    # ════════════════════════════════════════════
    with tab2:
        st.markdown("### Emotionsregulationsstrategien")
        st.markdown("#### Welche Technik wann?")

        st.markdown("""
        | Zustand | Technik | Warum |
        |---------|---------|-------|
        | Sehr aufgeregt, panisch | **TIPP (Temperatur)** | Kaltes Wasser aktiviert den Tauchreflex → senkt Herzfrequenz sofort |
        | Aengstlich, angespannt | **Box Breathing** | Langsames Atmen aktiviert den Parasympathikus |
        | Dissoziierend, "weg" | **5-4-3-2-1 Grounding** | Sinnesreize holen zurueck in den Koerper |
        | Wuetend, voller Energie | **Intense Bewegung** | Adrenalin abbauen, erst dann regulieren |
        | Ueberwaeltigt von Gefuehlen | **Emotion Surfing** | Welle beobachten statt kaempfen |
        """)

        st.markdown("#### Techniken im Detail")

        with st.expander("Box Breathing (4-4-4-4)"):
            st.markdown("""
            **Schritt-fuer-Schritt:**
            1. Einatmen — zaehle langsam bis 4
            2. Luft anhalten — zaehle bis 4
            3. Ausatmen — zaehle bis 4
            4. Luft anhalten — zaehle bis 4
            5. Wiederhole 4-5 Mal

            **Wie du es erklaerst:**
            *"Stell dir vor, du zeichnest ein Quadrat in der Luft. Jede Seite ist 4 Sekunden.
            Oben einatmen, rechts halten, unten ausatmen, links halten."*

            **Wann anwenden:** Angst, Panik, vor Pruefungen, zur Beruhigung
            **Wann NICHT:** Bei Hyperventilation (dann: in Haende atmen)
            """)

        with st.expander("5-4-3-2-1 Grounding"):
            st.markdown("""
            **Schritt-fuer-Schritt:**
            1. Nenne **5 Dinge, die du SIEHST** (z.B. Tisch, Fenster, Stift, Poster, Lampe)
            2. Nenne **4 Dinge, die du FUEHLST** (z.B. Stuhl unter mir, Fuesse auf dem Boden, Armbanduhr, Stoff)
            3. Nenne **3 Dinge, die du HOERST** (z.B. Uhr tickt, Voegel, Stimmen)
            4. Nenne **2 Dinge, die du RIECHST** (z.B. Kaffee, Seife)
            5. Nenne **1 Ding, das du SCHMECKST** (z.B. Zahnpasta, Kaugummi)

            **Wann anwenden:** Dissoziation, Flashbacks, Derealisation, Panik
            **Wie du es erklaerst:** *"Wir holen dich jetzt zurueck in den Raum. Schau dich um..."*
            """)

        with st.expander("TIPP-Skills"):
            st.markdown("""
            **T = Temperatur:**
            Kaltes Wasser ins Gesicht oder Eiswuerfel in die Hand. Aktiviert den Tauchreflex
            → Herzfrequenz sinkt sofort um 10-25%.

            **I = Intense Bewegung:**
            Treppen rennen, Liegestuetze, auf der Stelle springen. Fuer 5-10 Minuten.
            Baut Stresshormone ab.

            **P = Paced Breathing:**
            Ausatmung laenger als Einatmung (z.B. 4 ein, 6 aus).
            Aktiviert den Vagusnerv.

            **P = Progressive Muskelentspannung:**
            Koerperteile 5 Sekunden anspannen, dann loslassen.
            Haende → Arme → Schultern → Gesicht → Beine.
            """)

        with st.expander("Emotion Surfing"):
            st.markdown("""
            **Metapher fuer Jugendliche:**
            *"Gefuehle sind wie Wellen im Meer. Sie kommen, werden groesser, erreichen ihren Hoehepunkt —
            und gehen wieder. Keine Welle bleibt fuer immer. Du bist der Surfer: Du reitest die Welle,
            statt gegen sie zu kaempfen. Beobachte: Wo im Koerper spuerst du die Welle? Wie stark ist
            sie gerade (1-10)? Wie veraendert sie sich, wenn du sie einfach beobachtest?"*

            **Wann anwenden:** Bei Jugendlichen, die gegen ihre Gefuehle kaempfen
            **Wann NICHT:** Bei akuter Dissoziation (erst zurueckholen)
            """)

        show_quiz("m4_q3",
            "Ein Schueler sitzt erstarrt da und reagiert nicht (Dissoziation). Welche Technik?",
            ["Box Breathing", "5-4-3-2-1 Grounding", "Emotion Surfing", "Progressive Muskelentspannung"],
            1,
            "5-4-3-2-1 Grounding: Sinnesreize holen den/die Jugendliche:n zurueck in den Koerper und den Raum.")

    # ════════════════════════════════════════════
    # TAB 3: DBT-SKILLS
    # ════════════════════════════════════════════
    with tab3:
        st.markdown("### DBT-Skills fuer Jugendliche")

        with st.expander("STOP-Skill — Bevor du etwas tust, das du bereust"):
            st.markdown("""
            **S = Stop** — Halte an. Tue NICHTS.
            **T = Take a step back** — Tritt einen Schritt zurueck (mental und physisch).
            **O = Observe** — Beobachte: Was passiert gerade? Was fuehle ich? Was denke ich?
            **P = Proceed mindfully** — Handle bewusst, nicht impulsiv.

            **Beispiel:** Max (15) will eine wuetende Nachricht an seine Ex schicken.
            - **S:** Handy weglegen.
            - **T:** Aufstehen, Raum wechseln.
            - **O:** "Ich bin wuetend und verletzt. Ich will sie verletzen, weil sie mich verletzt hat."
            - **P:** "Wenn ich diese Nachricht schicke, was passiert morgen? Will ich das wirklich?"
            """)

        with st.expander("DEAR MAN — Sich durchsetzen, ohne zu verletzen"):
            st.markdown("""
            **D = Describe** — Beschreibe die Situation (Fakten, nicht Bewertungen)
            **E = Express** — Druecke deine Gefuehle aus ("Ich fuehle...")
            **A = Assert** — Sage klar, was du willst
            **R = Reinforce** — Erklaere, warum es fuer beide gut waere
            **M = Mindful** — Bleib beim Thema, lass dich nicht ablenken
            **A = Appear confident** — Selbstsicheres Auftreten (Koerpersprache!)
            **N = Negotiate** — Kompromissbereit sein

            **Beispiel-Dialog:**
            *"Wenn du ueber meine Sachen gehst, ohne zu fragen (D), fuehle ich mich nicht respektiert (E).
            Ich moechte, dass du mich vorher fragst (A). Dann wuerde ich sie dir auch gerne leihen (R)."*
            """)

        with st.expander("Wise Mind — Der kluge Geist"):
            st.markdown("""
            **Drei Geister:**

            | Emotionaler Geist | Vernuenftiger Geist | Weiser Geist |
            |-------------------|---------------------|--------------|
            | "Ich bin so wuetend, ich schmeiss alles hin!" | "Statistisch ist Schulabbruch schlecht fuer die Karriere." | "Ich bin wuetend, und es gibt gute Gruende. Aber Aufhoeren waere jetzt keine gute Entscheidung." |
            | Heiss, impulsiv | Kalt, logisch | Warm, integriert |
            | Reagiert sofort | Analysiert endlos | Spuert UND denkt |

            **Uebung:** Gib dem Jugendlichen ein Szenario und frage:
            - "Was wuerde dein emotionaler Geist tun?"
            - "Was wuerde dein vernuenftiger Geist tun?"
            - "Was wuerde dein weiser Geist tun?"
            """)

        show_quiz("m4_q4",
            "Ein Schueler will eine wuetende Nachricht an seinen Lehrer schicken. Welchen DBT-Skill empfiehlst du?",
            ["DEAR MAN", "STOP-Skill", "Wise Mind", "Emotion Surfing"],
            1,
            "STOP: Erst anhalten, bevor eine impulsive Handlung Konsequenzen hat. "
            "Dann mit Wise Mind die Situation bewerten.")

    # ════════════════════════════════════════════
    # TAB 4: NARRATIVE & KREATIV
    # ════════════════════════════════════════════
    with tab4:
        st.markdown("### Narrative Therapie & Kreative Methoden")

        st.markdown("#### Externalisierung — Das Problem von der Person trennen")
        st.markdown("""
        **Grundidee:** Nicht "Du BIST aengstlich", sondern "Die Angst SAGT DIR..."

        **Beispiel-Dialog:**
        - Berater:in: *"Wie heisst diese Angst? Gib ihr einen Namen."*
        - Jugendliche: *"Der schwarze Schatten."*
        - Berater:in: *"Wann kommt der schwarze Schatten? Was fluester er dir ein?"*
        - Jugendliche: *"Vor Pruefungen. Er sagt, ich werde versagen."*
        - Berater:in: *"Und gibt es Momente, wo der schwarze Schatten leiser ist?"*
        - Jugendliche: *"Wenn ich bei meiner Freundin bin."*
        - Berater:in: *"Was macht deine Freundin, dass der Schatten leiser wird?"*

        **Warum es wirkt:** Die Person IST nicht das Problem. Das Problem IST das Problem.
        Das gibt Distanz und Handlungsspielraum.
        """)

        st.markdown("#### Tree of Life — Der Lebensbaum")
        show_intervention("Lebensbaum-Uebung (45-60 Min)",
            "Der/die Jugendliche zeichnet einen Baum:\n\n"
            "**Wurzeln:** Wo komme ich her? (Familie, Kultur, Herkunft)\n"
            "**Stamm:** Meine Staerken und Faehigkeiten\n"
            "**Aeste:** Meine Wuensche und Hoffnungen\n"
            "**Blaetter:** Wichtige Menschen in meinem Leben\n"
            "**Fruechte:** Meine Erfolge und Errungenschaften\n"
            "**Blueten:** Was ich anderen gebe\n\n"
            "Material: Grosses Papier, Stifte/Farben, 45-60 Min Zeit\n"
            "Besonders geeignet fuer: Ressourcenaktivierung, Identitaetsarbeit, Migration")

        st.markdown("#### 10 Kreative Methoden — Schnelluebersicht")
        methods = [
            ("Emotionsrad", "12-16", "15 Min", "Ein Rad mit Emotionen zeichnen und benennen"),
            ("Koerperumriss", "10-18", "20 Min", "Emotionen im Koerper lokalisieren und faerben"),
            ("Lebenscollage", "14-18", "45 Min", "Bilder aus Zeitschriften: So bin ich / So will ich sein"),
            ("Wutvulkan", "10-14", "20 Min", "Ausloeser, Warnsignale und Abkuehlung visualisieren"),
            ("Sorgen-Box", "10-16", "10 Min", "Sorgen aufschreiben und in die Box — symbolisches Ablegen"),
            ("Staerken-Stern", "12-18", "15 Min", "5 Zacken = 5 Staerken, belegen mit Beispielen"),
            ("Brief an mein juengeres Ich", "14-18", "20 Min", "Selbstmitgefuehl und Reflexion"),
            ("Soundtrack meines Lebens", "14-18", "30 Min", "5 Songs, die mein Leben beschreiben"),
            ("Masken", "12-18", "30 Min", "Aussen: Was andere sehen. Innen: Wie ich mich fuehle"),
            ("Bemalte Steine", "10-16", "20 Min", "Ressourcen-Steine als Anker zum Mitnehmen"),
        ]

        st.markdown("| Methode | Alter | Dauer | Beschreibung |")
        st.markdown("|---------|-------|-------|-------------|")
        for name, age, duration, desc in methods:
            st.markdown(f"| {name} | {age} | {duration} | {desc} |")

        show_quiz("m4_q5",
            "Ein Jugendlicher sagt: 'Ich BIN ein Versager.' Welche Technik nutzt du?",
            ["Gedankenprotokoll", "Externalisierung", "Box Breathing", "Skalierungsfrage"],
            1,
            "Externalisierung: 'Es gibt eine Stimme in dir, die sagt, du bist ein Versager. "
            "Wann ist diese Stimme besonders laut? Wann leiser?'")

    # ════════════════════════════════════════════
    # TAB 5: ACHTSAMKEIT
    # ════════════════════════════════════════════
    with tab5:
        st.markdown("### Achtsamkeit fuer Jugendliche")

        st.warning("**Vorsicht bei Trauma:** Achtsamkeitsuebungen mit Augen schliessen und "
                  "Koerperfokus koennen bei traumatisierten Jugendlichen Flashbacks ausloesen. "
                  "Immer die Option geben, Augen offen zu lassen. Bei Dissoziation: ABBRECHEN und Grounding.")

        exercises = [
            ("Achtsames Atmen (3 Min)", "Einfachste Uebung. Atme normal und zaehle die Atemzuege bis 10, dann von vorne. Gedanken kommen und gehen — bringe die Aufmerksamkeit sanft zurueck zum Atem. Augen offen oder geschlossen."),
            ("Body Scan Kurzversion (5 Min)", "Fuesse spueren — Beine — Bauch — Brust — Arme — Haende — Schultern — Nacken — Kopf. Nur wahrnehmen, nicht veraendern. 'Was spuerst du gerade in deinen Haenden?'"),
            ("Achtsames Essen (5 Min)", "Eine Rosine oder ein Stueck Schokolade: Anschauen, fuehlen, riechen, langsam in den Mund nehmen, Geschmack bemerken. Zeigt: Wie viel wir normalerweise NICHT wahrnehmen."),
            ("RAIN", "**R**ecognize: Was passiert gerade? (z.B. 'Ich bin wuetend')\n**A**llow: Es sein lassen, nicht dagegen kaempfen\n**I**nvestigate: Wo im Koerper spuere ich das?\n**N**on-Identification: 'Ich HABE Wut, ich BIN nicht die Wut'"),
            ("Drei gute Dinge", "Jeden Abend 3 Dinge aufschreiben, die heute gut waren. Auch kleine Dinge zaehlen. Trainiert den Fokus auf das Positive. Forschung zeigt: Nach 2 Wochen steigt das Wohlbefinden."),
        ]

        for name, desc in exercises:
            with st.expander(name):
                st.markdown(desc)

        st.markdown("#### Psychoedukation: Das Gehirn erklaeren")
        st.markdown("""
        **Fuer Jugendliche verstaendlich:**

        *"In deinem Gehirn gibt es zwei wichtige Teile. Der eine ist wie ein Wachhund — die Amygdala.
        Sie schuetzt dich vor Gefahr. Wenn sie Alarm schlaegt, reagierst du sofort: Herz rast,
        Muskeln spannen sich an, Atem wird schneller. Das ist super, wenn ein Auto auf dich zukommt.
        Aber manchmal schlaegt der Wachhund Alarm, obwohl keine echte Gefahr da ist — zum Beispiel
        vor einer Pruefung. Dann uebernimmt der Wachhund und der kluge Chef (der praefrontale Kortex)
        kann nicht mehr richtig arbeiten. Mit Atemuebungen kannst du dem Wachhund sagen: Es ist OK,
        keine echte Gefahr."*
        """)

        show_quiz("m4_q6",
            "Wann solltest du eine Achtsamkeitsuebung mit Augen schliessen NICHT durchfuehren?",
            ["Bei Pruefungsangst", "Bei Jugendlichen mit Traumahintergrund", "Bei ADHS", "Bei Traurigkeit"],
            1,
            "Augen schliessen + Koerperfokus kann bei Trauma Flashbacks ausloesen. "
            "Immer Option geben, Augen offen zu lassen. Bei Dissoziation sofort abbrechen.")

    # ════════════════════════════════════════════
    # TAB 6: SICHERHEITSPLANUNG
    # ════════════════════════════════════════════
    with tab6:
        st.markdown("### Sicherheitsplanung (Stanley & Brown)")
        st.error("**Wichtig:** Sicherheitsplaene ersetzen KEINE Anti-Suizid-Vertraege (die wirken NICHT). "
                "Der Plan wird GEMEINSAM mit dem Jugendlichen erstellt, nicht vorgegeben.")

        st.markdown("#### Die 6 Schritte")

        steps = [
            ("Schritt 1: Warnsignale erkennen",
             "Was sind DEINE persoenlichen Warnsignale, dass es dir schlecht geht?\n"
             "Beispiele: 'Ich ziehe mich zurueck', 'Ich schlafe nicht', 'Ich denke, dass alles sinnlos ist', "
             "'Ich fuehle mich taub'"),
            ("Schritt 2: Eigene Bewaeltigungsstrategien",
             "Was kannst DU selbst tun, um dich abzulenken/zu beruhigen? (OHNE andere einzubeziehen)\n"
             "Beispiele: Musik hoeren, joggen, duschen, zeichnen, mit dem Hund rausgehen, Tagebuch schreiben"),
            ("Schritt 3: Menschen und Orte zur Ablenkung",
             "Wohin kannst du gehen? Wen kannst du treffen (ohne ueber das Problem zu reden)?\n"
             "Beispiele: Cafe, Bibliothek, Sportverein, bestimmte Freunde"),
            ("Schritt 4: Menschen, die helfen koennen",
             "Wen kannst du anrufen und sagen: 'Mir geht es nicht gut'?\n"
             "Mindestens 3 Personen mit Telefonnummern: Freund:in, Familienmitglied, Vertrauensperson"),
            ("Schritt 5: Professionelle Hilfe",
             "**112** — Notruf\n"
             "**45 45 45** — SOS Detresse (24/7)\n"
             "**116 111** — Kanner-Jugendtelefon\n"
             "Therapeut:in: [Name + Nummer eintragen]\n"
             "Naechste Notaufnahme: CHL Luxembourg"),
            ("Schritt 6: Umgebung sicher machen",
             "Gefaehrliche Gegenstaende entfernen oder sichern:\n"
             "Medikamente wegsperren, scharfe Gegenstaende entfernen, Zugang zu Mitteln reduzieren.\n"
             "Wer kann dabei helfen? (Eltern, WG-Partner)"),
        ]

        for title, content in steps:
            with st.expander(title):
                st.markdown(content)

        st.markdown("#### Staerkenorientierung")
        st.markdown("""
        **9 Fragen zur Staerkenexploration:**
        1. Was kannst du besonders gut?
        2. Was sagen andere, was du gut kannst?
        3. Worauf bist du stolz?
        4. Was gibt dir Energie?
        5. Wann fuehlst du dich am wohlsten?
        6. Was hast du schon Schwieriges ueberstanden?
        7. Wer glaubt an dich?
        8. Was wuerdest du gerne lernen?
        9. Was macht dich einzigartig?
        """)

        show_quiz("m4_q7",
            "Warum werden Anti-Suizid-Vertraege ('Versprich mir, dass du dir nichts antust') NICHT empfohlen?",
            ["Sie funktionieren genauso gut wie Sicherheitsplaene",
             "Sie erzeugen Schuldgefuehle statt echte Sicherheit und sind nicht evidenzbasiert",
             "Sie sind zu aufwaendig",
             "Sie sind nur fuer Erwachsene geeignet"],
            1,
            "Anti-Suizid-Vertraege sind NICHT evidenzbasiert. Sie erzeugen Schuldgefuehle und verhindern, "
            "dass der/die Jugendliche im Ernstfall um Hilfe bittet. Sicherheitsplaene sind der Goldstandard.")
