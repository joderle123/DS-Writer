"""Homepage der Lernplattform."""
import streamlit as st


def show():
    st.markdown('<div class="main-header">Interaktive Lernplattform</div>', unsafe_allow_html=True)
    st.markdown('<div class="sub-header">Psychische Gesundheit bei Jugendlichen — Praxiswissen für Schulpsychologen (CDSE Luxemburg)</div>', unsafe_allow_html=True)

    st.markdown("""
    Willkommen! Diese Plattform ist dein interaktives Lernwerkzeug, um **praxisnah** zu verstehen,
    wie sich psychische Belastungen bei Jugendlichen **im Schulalltag manifestieren** und wie du
    als Schulpsycholog:in **konkret intervenieren** kannst.

    ### Wie diese Plattform funktioniert

    Jedes Modul kombiniert:
    - **Theorie** — kurz und prägnant, wissenschaftlich fundiert
    - **Fallvignetten** — realistische Szenarien aus dem Schulalltag
    - **Symptom-Explorer** — Wie zeigt sich etwas konkret? Was steckt dahinter?
    - **Interventions-Toolbox** — Schritt-für-Schritt-Anleitungen für konkrete Techniken
    - **Quizzes & Reflexion** — Teste dein Wissen, damit es hängen bleibt
    - **Red Flags vs. Normal** — Lerne zu unterscheiden, was Adoleszenz ist und was klinisch relevant
    """)

    st.markdown("---")

    # Module overview as cards
    st.markdown("### Module im Überblick")

    col1, col2 = st.columns(2)

    with col1:
        with st.container():
            st.markdown("""
            #### 📖 Modul 1: Grundlagen der Adoleszenz
            Gehirnentwicklung, Entwicklungsaufgaben, Bindung — und warum Jugendliche
            so handeln wie sie handeln. Mit interaktiven Übungen zur Unterscheidung
            von normalem vs. auffälligem Verhalten.
            """)

        with st.container():
            st.markdown("""
            #### 🔍 Modul 2: Störungsbilder & Manifestationen
            **Der Kern der Plattform.** Angst, Depression, ADHS, Trauma, Essstörungen,
            Selbstverletzung — wie zeigt sich das KONKRET im Klassenzimmer?
            Symptom-Explorer mit Fallvignetten und Entscheidungsbäumen.
            """)

        with st.container():
            st.markdown("""
            #### 💬 Modul 3: Gesprächsführung
            Dialogsimulationen: Was sagst du, wenn ein:e Jugendliche:r weint?
            Schweigt? Aggressiv wird? MI, lösungsorientierte Beratung,
            Erstgespräch-Training mit interaktiven Szenarien.
            """)

        with st.container():
            st.markdown("""
            #### 🛠️ Modul 4: Interventionen & Methoden
            Die Toolbox: CBT-Techniken, Emotionsregulation, DBT-Skills,
            kreative Methoden — wann welche Technik? Mit Schritt-für-Schritt-Anleitungen
            und Kontraindikationen.
            """)

    with col2:
        with st.container():
            st.markdown("""
            #### 🚨 Modul 5: Krisen & Notfälle
            Suizidalität, Selbstverletzung, akute Psychosen, häusliche Gewalt —
            Entscheidungsbäume für Notfälle. Was tun in den ersten 5 Minuten?
            Interaktive Krisenszenarien.
            """)

        with st.container():
            st.markdown("""
            #### 👨‍👩‍👧 Modul 6: Elternarbeit & System
            Elterngespräche führen, wenn es schwierig wird. Systemische
            Zusammenarbeit, Netzwerk in Luxemburg. Wann meldepflichtig?
            Simulierte Elterngespräche.
            """)

        with st.container():
            st.markdown("""
            #### 📊 Modul 7: Diagnostik & Selbstfürsorge
            Screening-Instrumente, Dokumentation, Fallkonzeption.
            Plus: Selbstfürsorge, Burnout-Prävention, Supervision —
            denn du kannst nur helfen, wenn es dir selbst gut geht.
            """)

    st.markdown("---")

    # Self-assessment
    st.markdown("### Selbsteinschätzung: Wo stehst du?")
    st.markdown("Bewerte dein Vorwissen in diesen Bereichen (1 = unsicher, 5 = sehr sicher):")

    areas = [
        "Neurobiologische Grundlagen der Adoleszenz",
        "Erkennung von Angststörungen bei Jugendlichen",
        "Erkennung von Depression bei Jugendlichen",
        "Umgang mit Suizidalität",
        "Gesprächsführung mit widerständigen Jugendlichen",
        "Krisenintervention",
        "Elterngespräche bei heiklen Themen",
        "Kenntnis des Luxemburger Hilfsnetzwerks",
    ]

    for area in areas:
        key = f"self_assess_{area}"
        val = st.slider(area, 1, 5, 3, key=key)
        st.session_state.self_assessment[area] = val

    if st.button("Empfehlung anzeigen"):
        weak_areas = [a for a, v in st.session_state.self_assessment.items() if v <= 2]
        if weak_areas:
            st.info("**Empfohlene Schwerpunkte für dich:**")
            for area in weak_areas:
                st.markdown(f"- {area}")
        else:
            st.success("Du hast ein solides Grundwissen! Nutze die Module zur Vertiefung.")
