"""Wiederverwendbare UI-Komponenten fuer die Lernplattform."""
import streamlit as st


def show_quiz(quiz_id, question, options, correct_idx, explanation):
    """Render an interactive quiz question."""
    st.markdown(f"**{question}**")
    key = f"quiz_{quiz_id}"
    answer_key = f"answered_{quiz_id}"

    if answer_key not in st.session_state:
        st.session_state[answer_key] = False

    selected = st.radio(
        "Waehle deine Antwort:",
        options,
        key=key,
        index=None,
        label_visibility="collapsed"
    )

    if st.button("Antwort pruefen", key=f"check_{quiz_id}"):
        if selected is None:
            st.warning("Bitte waehle eine Antwort aus.")
        else:
            selected_idx = options.index(selected)
            st.session_state[answer_key] = True
            if selected_idx == correct_idx:
                st.markdown(
                    f'<div class="quiz-correct">&#10003; <strong>Richtig!</strong> {explanation}</div>',
                    unsafe_allow_html=True)
                if quiz_id not in st.session_state.get("quiz_scores", {}):
                    if "quiz_scores" not in st.session_state:
                        st.session_state.quiz_scores = {}
                    st.session_state.quiz_scores[quiz_id] = True
            else:
                st.markdown(
                    f'<div class="quiz-wrong">&#10007; <strong>Nicht ganz.</strong> Die richtige Antwort ist: '
                    f'<strong>{options[correct_idx]}</strong><br>{explanation}</div>',
                    unsafe_allow_html=True)
                if "quiz_scores" not in st.session_state:
                    st.session_state.quiz_scores = {}
                st.session_state.quiz_scores[quiz_id] = False


def show_case_study(title, description, questions=None):
    """Show an interactive case study / Fallvignette."""
    st.markdown(
        f'<div class="case-study"><strong>Fallvignette: {title}</strong><br><br>{description}</div>',
        unsafe_allow_html=True)
    if questions:
        for i, q in enumerate(questions):
            with st.expander(f"{q['question']}"):
                st.markdown(q["answer"])


def show_red_flag(content):
    """Show a red flag warning box."""
    st.markdown(
        f'<div class="red-flag"><strong>Red Flag</strong><br>{content}</div>',
        unsafe_allow_html=True)


def show_intervention(title, content):
    """Show an intervention technique box."""
    st.markdown(
        f'<div class="intervention-box"><strong>Intervention: {title}</strong><br><br>{content}</div>',
        unsafe_allow_html=True)


def show_green_box(title, content):
    """Show a positive/normal development box."""
    st.markdown(
        f'<div class="green-box"><strong>{title}</strong><br>{content}</div>',
        unsafe_allow_html=True)


def mark_section_complete(module_id, section_id):
    """Mark a section as complete."""
    if "progress" not in st.session_state:
        st.session_state.progress = {}
    if module_id not in st.session_state.progress:
        st.session_state.progress[module_id] = {"sections": {}, "completed": False}
    st.session_state.progress[module_id]["sections"][section_id] = True
