#!/usr/bin/env python3
"""
Interaktive Lernplattform: Psychische Gesundheit bei Jugendlichen
Praxishandbuch für Schulpsychologen (CDSE Luxemburg)
"""
import streamlit as st
import json
import os

# Page config
st.set_page_config(
    page_title="Lernplattform - Jugendpsychologie",
    page_icon="🧠",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Custom CSS
st.markdown("""
<style>
    .main-header {
        font-size: 2.2rem;
        font-weight: 700;
        color: #1a5276;
        margin-bottom: 0.5rem;
    }
    .sub-header {
        font-size: 1.1rem;
        color: #5d6d7e;
        margin-bottom: 2rem;
    }
    .module-card {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 12px;
        padding: 1.5rem;
        color: white;
        margin-bottom: 1rem;
        cursor: pointer;
    }
    .quiz-correct {
        background-color: #d4edda;
        border: 1px solid #c3e6cb;
        border-radius: 8px;
        padding: 1rem;
        margin: 0.5rem 0;
    }
    .quiz-wrong {
        background-color: #f8d7da;
        border: 1px solid #f5c6cb;
        border-radius: 8px;
        padding: 1rem;
        margin: 0.5rem 0;
    }
    .case-study {
        background-color: #fff3cd;
        border-left: 4px solid #ffc107;
        border-radius: 4px;
        padding: 1rem;
        margin: 1rem 0;
    }
    .intervention-box {
        background-color: #d1ecf1;
        border-left: 4px solid #17a2b8;
        border-radius: 4px;
        padding: 1rem;
        margin: 1rem 0;
    }
    .red-flag {
        background-color: #f8d7da;
        border-left: 4px solid #dc3545;
        border-radius: 4px;
        padding: 1rem;
        margin: 1rem 0;
    }
    .green-box {
        background-color: #d4edda;
        border-left: 4px solid #28a745;
        border-radius: 4px;
        padding: 1rem;
        margin: 1rem 0;
    }
    .stProgress > div > div > div > div {
        background-color: #667eea;
    }
    .info-card {
        background: #f8f9fa;
        border-radius: 8px;
        padding: 1.2rem;
        margin: 0.8rem 0;
        border: 1px solid #dee2e6;
    }
</style>
""", unsafe_allow_html=True)


def init_session_state():
    """Initialize session state for progress tracking."""
    if "progress" not in st.session_state:
        st.session_state.progress = {}
    if "quiz_scores" not in st.session_state:
        st.session_state.quiz_scores = {}
    if "current_module" not in st.session_state:
        st.session_state.current_module = "home"
    if "self_assessment" not in st.session_state:
        st.session_state.self_assessment = {}


def get_total_progress():
    """Calculate overall learning progress."""
    total_modules = 7
    completed = sum(1 for v in st.session_state.progress.values() if v.get("completed", False))
    return completed / total_modules if total_modules > 0 else 0


def show_quiz(quiz_id, question, options, correct_idx, explanation):
    """Render an interactive quiz question."""
    st.markdown(f"**{question}**")
    key = f"quiz_{quiz_id}"
    answer_key = f"answered_{quiz_id}"

    if answer_key not in st.session_state:
        st.session_state[answer_key] = False

    selected = st.radio(
        "Wähle deine Antwort:",
        options,
        key=key,
        index=None,
        label_visibility="collapsed"
    )

    if st.button("Antwort prüfen", key=f"check_{quiz_id}"):
        if selected is None:
            st.warning("Bitte wähle eine Antwort aus.")
        else:
            selected_idx = options.index(selected)
            st.session_state[answer_key] = True
            if selected_idx == correct_idx:
                st.markdown(f'<div class="quiz-correct">✅ <strong>Richtig!</strong> {explanation}</div>',
                           unsafe_allow_html=True)
                if quiz_id not in st.session_state.quiz_scores:
                    st.session_state.quiz_scores[quiz_id] = True
            else:
                st.markdown(
                    f'<div class="quiz-wrong">❌ <strong>Nicht ganz.</strong> Die richtige Antwort ist: '
                    f'<strong>{options[correct_idx]}</strong><br>{explanation}</div>',
                    unsafe_allow_html=True)
                st.session_state.quiz_scores[quiz_id] = False


def show_case_study(title, description, questions=None):
    """Show an interactive case study / Fallvignette."""
    st.markdown(f'<div class="case-study"><strong>📋 Fallvignette: {title}</strong><br><br>{description}</div>',
               unsafe_allow_html=True)
    if questions:
        for i, q in enumerate(questions):
            with st.expander(f"💭 {q['question']}"):
                st.markdown(q["answer"])


def show_red_flag(content):
    """Show a red flag warning box."""
    st.markdown(f'<div class="red-flag">🚩 <strong>Red Flag</strong><br>{content}</div>',
               unsafe_allow_html=True)


def show_intervention(title, content):
    """Show an intervention technique box."""
    st.markdown(f'<div class="intervention-box">🛠️ <strong>Intervention: {title}</strong><br><br>{content}</div>',
               unsafe_allow_html=True)


def show_green_box(title, content):
    """Show a positive/normal development box."""
    st.markdown(f'<div class="green-box">✅ <strong>{title}</strong><br>{content}</div>',
               unsafe_allow_html=True)


def mark_section_complete(module_id, section_id):
    """Mark a section as complete."""
    if module_id not in st.session_state.progress:
        st.session_state.progress[module_id] = {"sections": {}, "completed": False}
    st.session_state.progress[module_id]["sections"][section_id] = True


# Import page modules
from pages import (
    home,
    modul1_grundlagen,
    modul2_stoerungsbilder,
    modul3_gespraechsfuehrung,
    modul4_interventionen,
    modul5_krisen,
    modul6_elternarbeit,
    modul7_diagnostik
)

PAGES = {
    "home": ("🏠 Startseite", home.show),
    "modul1": ("📖 Modul 1: Grundlagen der Adoleszenz", modul1_grundlagen.show),
    "modul2": ("🔍 Modul 2: Störungsbilder & Manifestationen", modul2_stoerungsbilder.show),
    "modul3": ("💬 Modul 3: Gesprächsführung", modul3_gespraechsfuehrung.show),
    "modul4": ("🛠️ Modul 4: Interventionen & Methoden", modul4_interventionen.show),
    "modul5": ("🚨 Modul 5: Krisen & Notfälle", modul5_krisen.show),
    "modul6": ("👨‍👩‍👧 Modul 6: Elternarbeit & System", modul6_elternarbeit.show),
    "modul7": ("📊 Modul 7: Diagnostik & Selbstfürsorge", modul7_diagnostik.show),
}


def main():
    init_session_state()

    # Sidebar navigation
    with st.sidebar:
        st.markdown("### 🧠 Lernplattform")
        st.markdown("*Jugendpsychologie für Schulpsychologen*")
        st.markdown("---")

        # Progress bar
        progress = get_total_progress()
        st.progress(progress)
        st.caption(f"Gesamtfortschritt: {int(progress * 100)}%")
        st.markdown("---")

        # Navigation
        for key, (label, _) in PAGES.items():
            if st.sidebar.button(label, key=f"nav_{key}", use_container_width=True):
                st.session_state.current_module = key
                st.rerun()

        st.markdown("---")

        # Quiz score
        total_quizzes = len(st.session_state.quiz_scores)
        correct_quizzes = sum(1 for v in st.session_state.quiz_scores.values() if v)
        if total_quizzes > 0:
            st.markdown(f"**Quiz-Score:** {correct_quizzes}/{total_quizzes}")

    # Main content
    current = st.session_state.current_module
    if current in PAGES:
        _, page_func = PAGES[current]
        page_func()
    else:
        home.show()


if __name__ == "__main__":
    main()
