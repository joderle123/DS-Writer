"""
Kapitel 8: Selbstfuersorge und Professionelle Entwicklung
"""
from styles import (add_table, add_bullet_list, add_praxisbox, add_dialog,
                    add_redflag, add_important_box, add_tip_box, add_section_intro,
                    add_checklist, add_flowchart, add_numbered_list)


def add_chapter8(doc):
    """Kapitel 8: Selbstfuersorge und Professionelle Entwicklung"""

    doc.add_heading('KAPITEL 8: SELBSTFUERSORGE UND PROFESSIONELLE ENTWICKLUNG', level=1)

    add_section_intro(doc,
        "Sie koennen anderen nur helfen, wenn es Ihnen selbst gut genug geht. Dieses Kapitel ist "
        "kein Luxus, sondern professionelle Notwendigkeit. Lesen Sie es regelmaessig - nicht nur, "
        "wenn Sie bereits ausgebrannt sind. Die Arbeit mit belasteten Jugendlichen am CDSE "
        "Luxemburg bringt besondere Herausforderungen mit sich: die multikulturelle Komplexitaet, "
        "die oft schwierigen Familienkonstellationen und die Tatsache, dass Sie als Psychologe "
        "haeufig die einzige Vertrauensperson fuer diese jungen Menschen sind. Das ist eine "
        "Ehre - und eine Last. Dieses Kapitel hilft Ihnen, beides zu tragen.")

    # =====================================================================
    # 8.1 SEKUNDAERE TRAUMATISIERUNG UND BURNOUT
    # =====================================================================
    doc.add_heading('8.1 Sekundaere Traumatisierung und Burnout', level=2)

    doc.add_paragraph(
        "Sekundaere Traumatisierung (auch \"Compassion Fatigue\" oder \"Vicarious Trauma\") entsteht "
        "durch die wiederholte Exposition gegenueber den traumatischen Erfahrungen anderer. "
        "Sie ist NICHT Schwaeche - sie ist eine natuerliche Reaktion empathischer Menschen auf "
        "belastendes Material. Wer taeglich Geschichten von Missbrauch, Vernachlaessigung, Flucht "
        "und Gewalt hoert, wird davon beeinflusst. Das ist keine Frage des \"Ob\", sondern des \"Wann\" "
        "und \"Wie stark\".")

    doc.add_paragraph(
        "Burnout unterscheidet sich von sekundaerer Traumatisierung: Waehrend sekundaere "
        "Traumatisierung durch die Inhalte der Arbeit entsteht (die Geschichten der Klienten), "
        "entsteht Burnout primaer durch die Rahmenbedingungen (zu viele Faelle, zu wenig "
        "Unterstuetzung, buerokratische Belastung, fehlende Anerkennung). Beide koennen "
        "gleichzeitig auftreten und verstaerken sich gegenseitig.")

    doc.add_heading('Warnsignale bei Ihnen selbst', level=3)

    doc.add_paragraph(
        "Die folgende Tabelle listet Warnsignale in fuenf zentralen Bereichen. Seien Sie ehrlich "
        "zu sich selbst - Erkennung ist der erste Schritt.")

    add_table(doc,
        ["Bereich", "Warnsignale"],
        [
            ["Physisch",
             "Chronische Erschoepfung trotz ausreichend Schlaf; haeufige Erkaeltungen und "
             "Infekte (geschwaechteres Immunsystem); Kopfschmerzen und Migraene; Magenprobleme, "
             "Uebelkeit, Appetitveraenderungen; Muskelverspannungen (besonders Nacken, Schultern, "
             "Ruecken); Schlafprobleme - Einschlaf- oder Durchschlafstoerungen; erhoehter Blutdruck; "
             "Tinnitus oder Schwindel"],
            ["Emotional",
             "Zunehmende Reizbarkeit und kurze Zuendschnur; emotionale Taubheit - Sie fuehlen "
             "\"nichts mehr\"; Zynismus gegenueber Jugendlichen oder deren Familien; uebermaessige "
             "Angst um eigene Kinder oder Familie; Traurigkeit ohne klaren Grund; "
             "Schuldgefuehle (\"Ich tue nicht genug\"); Gefuehl der Hilflosigkeit und "
             "Hoffnungslosigkeit; schnelles Weinen oder ploetzliche Wutausbrueche"],
            ["Kognitiv",
             "Konzentrationsprobleme und Vergesslichkeit; intrusive Bilder oder Gedanken von "
             "Klienten-Geschichten (Sie sehen die Szenen vor sich); Schwierigkeiten abzuschalten "
             "nach der Arbeit; Albtraeume mit beruflichem Inhalt; zwanghaftes Nachdenken ueber "
             "Faelle; Entscheidungsschwierigkeiten; Verlust der professionellen Distanz - "
             "Sie koennen nicht mehr klar denken"],
            ["Behavioral",
             "Rueckzug von Freunden und Familie; erhoehter Alkohol-, Medikamenten- oder "
             "Substanzkonsum; Workaholismus ODER zunehmende Arbeitsvermeidung; "
             "Vernachlaessigung eigener Beduerfnisse (Essen, Bewegung, Hobbys); "
             "Prokrastination bei der Falldokumentation; Vermeidung bestimmter Faelle oder "
             "Themen; Haeufigeres Zuspaetkommen; Zynische Bemerkungen ueber Klienten"],
            ["Spirituell/Existenziell",
             "Sinnverlust - \"Warum mache ich das eigentlich?\"; Hoffnungslosigkeit bezueglich "
             "der Menschheit; Zynismus (\"Es aendert sich ja doch nichts\"); Verlust von Freude "
             "an Dingen, die frueher Freude machten; Infragestellung eigener Werte; "
             "Gefuehl der Entfremdung von der eigenen Identitaet; existenzielle "
             "Erschuetterung nach besonders schweren Faellen"]
        ])

    add_tip_box(doc,
        "Lesen Sie diese Tabelle nicht nur einmal. Drucken Sie sie aus und haengen Sie sie an "
        "einen Ort, den Sie regelmaessig sehen. Bitten Sie eine Vertrauensperson, Sie darauf "
        "anzusprechen, wenn sie Veraenderungen bemerkt.")

    # --- 20-Fragen Self-Assessment ---
    doc.add_heading('Selbst-Assessment: 20-Fragen-Check', level=3)

    doc.add_paragraph(
        "Bewerten Sie jede Aussage ehrlich: 0 = trifft nicht zu, 1 = trifft etwas zu, "
        "2 = trifft voll zu. Zaehlen Sie am Ende Ihre Punkte zusammen.")

    add_numbered_list(doc, [
        "Ich denke auch nach Feierabend oft an meine Klienten.",
        "Ich schlafe schlecht wegen beruflicher Belastung.",
        "Ich habe das Gefuehl, dass meine Arbeit nichts bewirkt.",
        "Ich bin gereizter als frueher.",
        "Ich vermeide bestimmte Faelle oder Themen.",
        "Ich fuehle mich emotional taub.",
        "Ich trinke mehr Alkohol / esse mehr / bewege mich weniger als frueher.",
        "Ich habe weniger Energie fuer Freunde und Familie.",
        "Ich bin zynisch gegenueber Jugendlichen oder deren Familien.",
        "Ich habe das Gefuehl, dass niemand meine Arbeit versteht.",
        "Ich vergesse Termine oder wichtige Details.",
        "Ich fuehle mich von den Problemen meiner Klienten ueberwaeltigt.",
        "Ich habe intrusive Gedanken oder Bilder von Klienten-Geschichten.",
        "Ich ziehe mich von Kollegen zurueck.",
        "Ich habe Schwierigkeiten, Grenzen zu setzen (zu viel arbeiten, zu viel helfen).",
        "Ich fuehle mich schuldig, wenn ich Feierabend mache.",
        "Ich zweifle an meiner Kompetenz.",
        "Ich habe koerperliche Symptome (Kopfschmerzen, Ruecken, Magen) ohne medizinische Ursache.",
        "Ich freue mich nicht mehr auf die Arbeit.",
        "Ich habe das Gefuehl, leer zu sein."
    ])

    doc.add_heading('Auswertung', level=4)

    add_table(doc,
        ["Punktzahl", "Bedeutung", "Empfohlene Massnahme"],
        [
            ["0-10", "Gute Selbstfuersorge",
             "Weiter so! Bleiben Sie aufmerksam und pflegen Sie Ihre Strategien. "
             "Praevention ist der beste Schutz."],
            ["11-20", "Erste Warnsignale",
             "Aktiv gegensteuern. Ueberpruefen Sie Ihre Selbstfuersorge-Routinen. "
             "Sprechen Sie in der naechsten Supervision darueber. Identifizieren Sie "
             "die Hauptbelastungsquellen."],
            ["21-30", "Deutliche Belastung",
             "Supervision und Entlastung dringend empfohlen. Reduzieren Sie wenn moeglich "
             "die Fallzahl. Planen Sie konkrete Entlastungsmassnahmen. Sprechen Sie mit "
             "Ihrer Leitung."],
            ["31-40", "Akute Belastung",
             "Professionelle Hilfe fuer SICH SELBST suchen. Sprechen Sie sofort mit Ihrem "
             "Supervisor und Ihrer Leitung. Erwaegen Sie eine berufliche Auszeit. Sie "
             "koennen in diesem Zustand nicht gut fuer andere sorgen."]
        ])

    add_redflag(doc,
        "Wenn Ihr Wert ueber 30 liegt, nehmen Sie das ernst. Es ist kein Zeichen von "
        "Schwaeche, professionelle Hilfe zu suchen - es ist ein Zeichen von Professionalitaet. "
        "Sie wuerden Ihren Klienten dasselbe raten.")

    # --- Selbstfuersorge-Strategien ---
    doc.add_heading('Konkrete Selbstfuersorge-Strategien', level=3)

    doc.add_paragraph(
        "Selbstfuersorge ist keine Belohnung fuer gute Arbeit - sie ist die Voraussetzung "
        "dafuer. Die folgende Tabelle bietet acht konkrete Bereiche mit umsetzbaren Strategien.")

    add_table(doc,
        ["Bereich", "Strategie", "Konkrete Umsetzung"],
        [
            ["Taegliche Rituale",
             "Bewusster Uebergang von Arbeit zu Privatleben",
             "Kleidung wechseln nach der Arbeit. Bewusst eine andere Route nach Hause "
             "nehmen. Musik hoeren, die nichts mit Arbeit zu tun hat. Nicht sofort nach "
             "dem letzten Termin nach Hause fahren - 15 Minuten Pause einlegen. Ein "
             "\"Abschlussritual\" entwickeln (z.B. Haende waschen als symbolisches Loslassen)."],
            ["Grenzen setzen",
             "Klare Trennung zwischen Beruf und Privat",
             "Feste Arbeitszeiten einhalten - auch wenn es schwerfaellt. Keine beruflichen "
             "Mails am Abend oder Wochenende lesen. Nicht mehr Faelle uebernehmen als "
             "machbar. Lernen, \"Nein\" zu sagen ohne Schuldgefuehle. Berufliches Telefon "
             "nach Feierabend ausschalten."],
            ["Koerperliche Gesundheit",
             "Den eigenen Koerper als Instrument pflegen",
             "Regelmaessige Bewegung - mindestens 3x pro Woche (nicht verhandelbar!). "
             "Ausreichend Schlaf (7-8 Stunden). Gesunde Ernaehrung, regelmaessige "
             "Mahlzeiten. Regelmaessige Arztbesuche und Vorsorge. Keine Mahlzeiten am "
             "Schreibtisch zwischen zwei Terminen."],
            ["Soziale Kontakte",
             "Beziehungen ausserhalb der Arbeit pflegen",
             "Freundschaften pflegen, die NICHTS mit der Arbeit zu tun haben. "
             "Regelmaessige Verabredungen fest im Kalender eintragen. Lachen. "
             "Leichtigkeit zulassen. Nicht immer nur ueber Arbeit reden."],
            ["Supervision",
             "Professionelle Reflexion als Routine",
             "Regelmaessig nutzen, nicht nur bei Krisen. Supervision nicht als Schwaeche "
             "betrachten, sondern als professionelle Hygiene. Verschiedene Formate "
             "ausprobieren (Einzel, Gruppe, Intervision). Offenheit und Ehrlichkeit in "
             "der Supervision - nur dann hilft sie."],
            ["Kreativitaet",
             "Ausgleich durch kreative Taetigkeiten",
             "Hobbys pflegen, die nichts mit \"Helfen\" zu tun haben. Musik machen oder "
             "hoeren. Malen, Zeichnen, Fotografieren. Kochen, Backen, Gaertnern. "
             "Handwerkliche Taetigkeiten - etwas mit den Haenden schaffen."],
            ["Natur",
             "Regeneration durch Naturerfahrung",
             "Regelmaessig Zeit draussen verbringen. Wald, Park, Wasser - die Forschung "
             "ist eindeutig: Natur regeneriert (Bratman et al., 2019). Spaziergaenge in "
             "der Mittagspause. Luxemburg bietet wunderbare Natur - nutzen Sie sie! "
             "Muellerthal, Naturparks, Our-Tal."],
            ["Sinngebung",
             "Den eigenen Sinn der Arbeit pflegen",
             "Sich regelmaessig erinnern, WARUM Sie diese Arbeit machen. "
             "Erfolgsgeschichten sammeln und aufschreiben. Ein \"Danke-Ordner\" mit "
             "positiven Rueckmeldungen. Sich bewusst machen: Auch kleine Veraenderungen "
             "zaehlen. Austausch mit Kollegen ueber gelungene Momente."]
        ])

    add_tip_box(doc,
        "Waehlen Sie aus jeder Kategorie mindestens EINE konkrete Massnahme und setzen Sie "
        "diese in der naechsten Woche um. Nicht alles auf einmal - aber beginnen Sie JETZT. "
        "Schreiben Sie Ihre Massnahmen auf und legen Sie einen Termin zur Ueberpruefung fest.")

    # =====================================================================
    # 8.2 SUPERVISION UND INTERVISION
    # =====================================================================
    doc.add_heading('8.2 Supervision und Intervision', level=2)

    add_important_box(doc,
        "Supervision ist NICHT optional. Sie ist ethische Pflicht. Wer regelmaessig mit "
        "belasteten Jugendlichen arbeitet und keine Supervision nutzt, riskiert nicht nur "
        "die eigene Gesundheit, sondern auch die Qualitaet der Arbeit mit den Jugendlichen. "
        "Jede serioeuse berufsethische Richtlinie fuer Psychologen fordert regelmaessige "
        "Supervision - nicht als Luxus, sondern als Mindeststandard professionellen Handelns. "
        "Im luxemburgischen Kontext, wo Sie oft als einziger Psychologe am CDSE arbeiten, "
        "ist externe Supervision umso wichtiger.")

    doc.add_paragraph(
        "Supervision dient mehreren Zwecken: Sie schuetzt die Klienten (durch Qualitaetssicherung), "
        "sie schuetzt Sie selbst (durch Reflexion und Entlastung), und sie foerdert Ihre "
        "professionelle Entwicklung (durch neue Perspektiven und Lernmoeglichkeiten). "
        "Es gibt verschiedene Formate, die sich in Struktur, Kosten und Fokus unterscheiden.")

    # --- Formate im Vergleich ---
    doc.add_heading('Formate im Vergleich', level=3)

    add_table(doc,
        ["Format", "Beschreibung", "Vorteile", "Empfohlene Frequenz"],
        [
            ["Einzelsupervision",
             "1:1 mit einem ausgebildeten Supervisor. Sie bringen Ihre Faelle, "
             "Fragen und Belastungen ein. Der Supervisor bietet Reflexion, neue "
             "Perspektiven und emotionale Entlastung.",
             "Hohe Vertraulichkeit; tiefe individuelle Reflexion; massgeschneidert auf "
             "Ihre Beduerfnisse; Raum fuer persoenliche Themen; ungeteilte Aufmerksamkeit",
             "Alle 2-4 Wochen, 60 Minuten"],
            ["Gruppensupervision",
             "3-8 Kollegen treffen sich mit einem externen Supervisor. Faelle "
             "werden reihum eingebracht und gemeinsam reflektiert. Der Supervisor "
             "moderiert und steuert den Prozess.",
             "Verschiedene Perspektiven und Erfahrungen; kostenguenstiger als "
             "Einzelsupervision; Teamstaerkung und gegenseitige Unterstuetzung; "
             "Lernen von den Faellen anderer; Normalisierung eigener Schwierigkeiten",
             "Alle 4-6 Wochen, 90 Minuten"],
            ["Kollegiale Intervision",
             "3-6 Kollegen treffen sich ohne externen Supervisor nach einem festen "
             "Schema. Ein Teilnehmer bringt einen Fall ein, die anderen reflektieren "
             "nach vereinbarten Regeln (z.B. Reflecting Team).",
             "Niedrigschwellig und kostenlos; staerkt die Teamkultur und den "
             "kollegialen Zusammenhalt; regelmaessig und unkompliziert umsetzbar; "
             "foerdert Eigenverantwortung und Reflexionskompetenz",
             "Alle 2-4 Wochen, 60-90 Minuten"],
            ["Balint-Gruppe",
             "Spezielle Form der Gruppensupervision mit Fokus auf die "
             "Beziehungsdynamik zwischen Helfer und Klient. Benannt nach Michael "
             "Balint. Ein Fall wird vorgestellt, dann assoziieren die Teilnehmer "
             "frei zu ihren Gefuehlen und Fantasien.",
             "Besonders hilfreich fuer emotionale Verstrickungen und "
             "Gegenuebertragungs-Phaenomene; tiefes Verstaendnis der "
             "Beziehungsdynamik; foerdert emotionale Reflexionsfaehigkeit",
             "Alle 4-6 Wochen, 90 Minuten"]
        ])

    add_tip_box(doc,
        "Ideal ist eine Kombination: Einzelsupervision fuer persoenliche Themen und schwere "
        "Faelle, plus kollegiale Intervision fuer den regelmaessigen Austausch. So haben Sie "
        "sowohl Tiefe als auch Breite in Ihrer professionellen Reflexion.")

    # --- Falldokumentation fuer Supervision ---
    doc.add_heading('Falldokumentation fuer Supervision - Vorlage', level=3)

    doc.add_paragraph(
        "Eine gute Vorbereitung macht die Supervision deutlich effektiver. Nutzen Sie die "
        "folgende Vorlage, um Ihren Fall strukturiert einzubringen.")

    add_table(doc,
        ["Feld", "Inhalt / Leitfragen"],
        [
            ["Klient (anonymisiert)",
             "Alter, Geschlecht, Klasse, relevanter Hintergrund (kurz). Beispiel: "
             "\"Maennlich, 15 Jahre, 4e, seit 2 Jahren in Luxemburg, unbegleiteter "
             "Minderjaehriger aus Eritrea.\""],
            ["Fragestellung / Anliegen",
             "Was genau will ich in der Supervision besprechen? Was ist mein konkretes "
             "Anliegen? Beispiel: \"Ich weiss nicht, ob ich die Schweigepflicht brechen "
             "muss. Der Jugendliche zeigt Hinweise auf haeusliche Gewalt, will aber "
             "nicht darueber sprechen.\""],
            ["Bisheriger Verlauf",
             "Was habe ich bisher getan? Welche Interventionen habe ich versucht? "
             "Was hat funktioniert, was nicht? Wie viele Sitzungen gab es? "
             "Was war der bisherige Beziehungsaufbau?"],
            ["Meine Gefuehle / Reaktionen",
             "Was loest der Fall in mir aus? Wo bin ich unsicher? Was fuehle ich "
             "waehrend und nach den Sitzungen? Gibt es Parallelen zu eigenen "
             "Erfahrungen? Beispiel: \"Ich fuehle mich hilflos und aergerlich "
             "gegenueber den Eltern. Ich merke, dass ich den Jugendlichen "
             "beschuetzen will.\""],
            ["Hypothesen",
             "Was vermute ich? Was koennte hinter dem Verhalten des Jugendlichen "
             "stecken? Welche systemischen Dynamiken sehe ich? Was ist meine "
             "vorlaeufige Einschaetzung?"],
            ["Konkrete Frage",
             "Was moechte ich von der Supervisionsgruppe / dem Supervisor? "
             "Brauche ich neue Interventionsideen? Emotionale Entlastung? "
             "Eine andere Perspektive? Eine ethische Einschaetzung?"]
        ])

    # =====================================================================
    # 8.3 ETHISCHE DILEMMATA
    # =====================================================================
    doc.add_heading('8.3 Ethische Dilemmata', level=2)

    doc.add_paragraph(
        "Ethische Dilemmata gehoeren zum Berufsalltag. Sie entstehen, wenn zwei oder mehr "
        "ethische Prinzipien miteinander in Konflikt geraten - zum Beispiel Schweigepflicht "
        "versus Kinderschutz, oder Autonomie des Jugendlichen versus Fuersorgepflicht. "
        "Es gibt selten eine eindeutig \"richtige\" Antwort. Entscheidend ist, dass Sie "
        "systematisch reflektieren, Ruecksprache halten und Ihre Entscheidungen dokumentieren.")

    doc.add_paragraph(
        "Die folgenden fuenf Fallbeispiele stammen aus der Praxis am CDSE und illustrieren "
        "typische ethische Herausforderungen. Nutzen Sie sie als Reflexions- und "
        "Diskussionsgrundlage in der Supervision oder Intervision.")

    # --- Dilemma 1 ---
    doc.add_heading('Fuenf ethische Fallbeispiele', level=3)

    add_praxisbox(doc, "Dilemma 1: Schweigepflicht vs. Kinderschutz",
        "SITUATION: Eine 15-Jaehrige erzaehlt Ihnen unter Traenen, dass ihr Vater sie "
        "schlaegt, wenn er getrunken hat. Sie bittet Sie dringend, nichts zu unternehmen: "
        "\"Bitte sagen Sie nichts! Wenn Sie was sagen, komme ich ins Heim! Meine Mama "
        "weiss es und sie sagt, er meint es nicht so.\"\n\n"
        "ANALYSE: Hier stehen Schweigepflicht und Vertrauen des Jugendlichen gegen die "
        "gesetzliche Pflicht zum Kinderschutz. In Luxemburg gilt: Bei Kindeswohlgefaehrdung "
        "ueberwiegt die Schutzpflicht. Art. 7 des Jugendschutzgesetzes verpflichtet "
        "Fachkraefte zur Meldung.\n\n"
        "EMPFEHLUNG: Kinderschutz hat Vorrang. Die Schweigepflicht kann und muss gebrochen "
        "werden, wenn eine Kindeswohlgefaehrdung vorliegt. ABER: Transparent kommunizieren. "
        "\"Ich verstehe deine Angst. Ich hoere, dass du nicht willst, dass ich etwas sage. "
        "Aber es ist meine Pflicht, dafuer zu sorgen, dass du sicher bist. Ich werde nichts "
        "tun, ohne dich einzubeziehen. Wir werden das zusammen angehen.\" Dokumentieren Sie "
        "das Gespraech. Informieren Sie die zustaendige Stelle (ONE - Office National de "
        "l'Enfance). Halten Sie den Kontakt zum Jugendlichen - er braucht Sie jetzt mehr denn je.")

    # --- Dilemma 2 ---
    add_praxisbox(doc, "Dilemma 2: Social Media - Schueler schickt Freundschaftsanfrage",
        "SITUATION: Ein 16-jaehriger Schueler, mit dem Sie seit Monaten arbeiten und eine "
        "gute Beziehung aufgebaut haben, schickt Ihnen eine Freundschaftsanfrage auf "
        "Instagram. Er schreibt dazu: \"Sie sind der einzige Erwachsene, der mich versteht. "
        "Ich will auch ausserhalb der Schule Kontakt.\"\n\n"
        "ANALYSE: Soziale Medien verwischen die Grenze zwischen professioneller und privater "
        "Beziehung. Eine Annahme der Anfrage wuerde die therapeutische Beziehung gefaehrden: "
        "Der Jugendliche sieht Ihr Privatleben, Sie sehen seines. Die professionelle Distanz "
        "geht verloren.\n\n"
        "EMPFEHLUNG: Ablehnen - aber mit Wertschaetzung. \"Ich freue mich, dass du mir "
        "vertraust, und ich nehme das als Kompliment. Aber ich bin gerne fuer dich da - im "
        "Rahmen meiner professionellen Rolle. Private Social-Media-Kontakte koennten unsere "
        "Arbeitsbeziehung beeinflussen, und die ist mir wichtig.\" Praeventiv: Keine privaten "
        "Accounts fuer Klienten zugaenglich machen. Privacy-Einstellungen ueberpruefen. "
        "Berufliche und private Online-Praesenz strikt trennen.")

    # --- Dilemma 3 ---
    add_praxisbox(doc, "Dilemma 3: Doppelrolle - Schueler, Eltern und Lehrer wollen Verschiedenes",
        "SITUATION: Sie beraten einen 14-jaehrigen Schueler wegen Schulverweigerung. Der "
        "Schueler sagt: \"Ich will nicht in die Schule, weil der Lehrer mich hasst.\" Die "
        "Eltern bitten um ein Gespraech und sagen: \"Machen Sie, dass er wieder in die "
        "Schule geht.\" Der Klassenlehrer sagt: \"Der Junge ist faul, reden Sie ihm ins "
        "Gewissen.\"\n\n"
        "ANALYSE: Sie haben es mit drei verschiedenen Auftraegen zu tun. Alle haben "
        "unterschiedliche Interessen und Erwartungen an Sie. Die Gefahr besteht darin, "
        "es allen recht machen zu wollen - und dabei niemandem gerecht zu werden.\n\n"
        "EMPFEHLUNG: Transparenz ueber Ihre Rolle gegenueber allen Beteiligten. \"Ich "
        "arbeite fuer das Wohl von [Name]. Ich hoere alle Seiten, aber meine erste "
        "Loyalitaet gilt dem Jugendlichen.\" Vereinbaren Sie klar, was Sie wem mitteilen "
        "duerfen. Holen Sie die Zustimmung des Jugendlichen ein, bevor Sie Informationen "
        "weitergeben. Machen Sie Ihre Rolle transparent: Sie sind weder Anwalt der Eltern "
        "noch Erfuellungsgehilfe der Schule, sondern Unterstuetzung fuer den Jugendlichen.")

    # --- Dilemma 4 ---
    add_praxisbox(doc, "Dilemma 4: Geschenk von einem Jugendlichen",
        "SITUATION: Ein 13-jaehriger Schueler, den Sie seit einem Jahr begleiten, schenkt "
        "Ihnen zum Geburtstag ein selbstgemachtes Armband. Er sagt: \"Ich habe das extra "
        "fuer Sie gemacht. Sie haben mir so geholfen.\"\n\n"
        "ANALYSE: Geschenke in professionellen Beziehungen sind ein heikles Thema. Einerseits "
        "kann die Ablehnung den Jugendlichen verletzen und die Beziehung beschaedigen. "
        "Andererseits koennen Geschenke die professionelle Grenze verwischen. Die Art des "
        "Geschenks spielt eine wichtige Rolle.\n\n"
        "EMPFEHLUNG: Kleine, selbstgemachte Geschenke koennen angenommen werden - sie sind "
        "Ausdruck der Beziehung und der Wertschaetzung. \"Das ist wunderschoen, vielen Dank! "
        "Ich sehe, dass du dir viel Muehe gegeben hast.\" Hochwertige oder gekaufte Geschenke "
        "sollten freundlich abgelehnt werden: \"Ich freue mich ueber den Gedanken, aber ich "
        "kann das nicht annehmen. Unsere Gespraeche sind fuer mich Geschenk genug.\" "
        "Reflektieren Sie: Was bedeutet das Geschenk im Beziehungskontext? Ist es Dankbarkeit, "
        "Bestechung, Bindungswunsch? Dokumentieren Sie den Vorgang.")

    # --- Dilemma 5 ---
    add_praxisbox(doc, "Dilemma 5: Koerperliche Beruehrung - Weinender Schueler greift nach Ihrer Hand",
        "SITUATION: Ein 12-jaehriger Junge bricht waehrend eines Gespraechs in Traenen aus. "
        "Er hat gerade erzaehlt, dass seine Eltern sich trennen. Er greift nach Ihrer Hand "
        "und haelt sie fest. Sie spueren, dass er Trost braucht.\n\n"
        "ANALYSE: Koerperliche Beruehrung in professionellen Beziehungen ist ein sensibles "
        "Thema, besonders in der Arbeit mit Minderjaehrigen. Die Angst vor falschem Anschein "
        "kann dazu fuehren, dass Fachkraefte jeglichen Koerperkontakt vermeiden - was fuer "
        "ein weinendes Kind grausam und beziehungsschaedigend sein kann.\n\n"
        "EMPFEHLUNG: Kontextabhaengig. Grundsaetzlich gilt: Der Jugendliche initiiert. Nicht "
        "von sich aus anfassen. Ein kurzes Halten der Hand oder eine seitliche Umarmung "
        "koennen in der akuten Krise angemessen sein. Achten Sie auf die Reaktion des "
        "Jugendlichen - zieht er sich zurueck, sofort loslassen. Dokumentieren Sie "
        "kontroverse Situationen. Bei aelteren Jugendlichen ist mehr Vorsicht geboten als "
        "bei juengeren. Im Zweifel: Verbal troesten. \"Ich sehe, dass dich das sehr "
        "belastet. Ich bin hier. Du musst das nicht alleine durchstehen.\"")

    add_tip_box(doc,
        "Besprechen Sie alle fuenf Dilemmata in Ihrer naechsten Supervision oder Intervision. "
        "Diskutieren Sie: Wie haetten Sie gehandelt? Warum? Was waere anders, wenn der "
        "Jugendliche aelter oder juenger waere? Was, wenn die kulturellen Normen andere sind?")

    # =====================================================================
    # 8.4 WEITERBILDUNG UND LITERATUR
    # =====================================================================
    doc.add_heading('8.4 Weiterbildung und Literatur', level=2)

    doc.add_paragraph(
        "Professionelle Entwicklung endet nicht mit dem Studium. Die Psychologie ist ein sich "
        "staendig weiterentwickelndes Feld, und gerade in der Arbeit mit Jugendlichen kommen "
        "regelmaessig neue Erkenntnisse, Methoden und Ansaetze hinzu. Die folgende Auswahl "
        "an Buechern und Ressourcen ist fuer Ihre Arbeit am CDSE Luxemburg besonders relevant.")

    # --- Top 20 Buecher ---
    doc.add_heading('Top 20 Buecher fuer Ihre Praxis', level=3)

    add_table(doc,
        ["Titel", "Autor", "Thema", "Warum dieses Buch?"],
        [
            ["Motivierende Gespraechsfuehrung",
             "Miller & Rollnick",
             "MI",
             "Das Standardwerk. Pflichtlektuere fuer jeden, der mit ambivalenten "
             "Jugendlichen arbeitet. Die dritte Auflage ist besonders praxisnah."],
            ["DBT Skills Training",
             "Marsha Linehan",
             "DBT",
             "Die Skills-Module im Original. Viele direkt uebertragbare Uebungen "
             "fuer Emotionsregulation, Stresstoleranz und zwischenmenschliche "
             "Fertigkeiten."],
            ["Die Kraft der Bindung",
             "Karl Heinz Brisch",
             "Bindung",
             "Praxisnah und verstaendlich. Bindungstheorie fuer den Alltag mit "
             "Kindern und Jugendlichen. Unverzichtbar fuer das Verstaendnis "
             "von Beziehungsdynamiken."],
            ["Traumatherapie bei Kindern und Jugendlichen",
             "Markus Landolt",
             "Trauma",
             "Deutschsprachiges Standardwerk. Guter Ueberblick ueber Diagnostik "
             "und evidenzbasierte Behandlungsmethoden. Praktische Anleitungen "
             "fuer den klinischen Alltag."],
            ["Psychische Stoerungen im Kindes- und Jugendalter",
             "Petermann (Hrsg.)",
             "Stoerungsbilder",
             "Umfassendes Nachschlagewerk fuer alle relevanten Stoerungsbilder. "
             "Gut strukturiert, evidenzbasiert, mit Fallbeispielen."],
            ["Suizidales Erleben und Verhalten",
             "Tobias Teismann",
             "Suizidalitaet",
             "Forschungsbasiert und praxisnah. Enthaelt den Sicherheitsplan und "
             "konkrete Gespraechsleitfaeden. Unverzichtbar fuer Ihre Arbeit."],
            ["Selbstverletzendes Verhalten",
             "Tina In-Albon",
             "SVV",
             "Aktuell, evidenzbasiert, mit konkreten Gespraechshilfen und "
             "Interventionsstrategien. Differenzierte Darstellung eines "
             "haeufigen Phaenomens."],
            ["Systemische Therapie mit Kindern",
             "Ruediger Retzlaff",
             "Systemisch",
             "Viele kreative Techniken und Fragetechniken fuer die Arbeit mit "
             "Familien. Besonders hilfreich fuer den systemischen Blick auf "
             "schulische Probleme."],
            ["Narrative Therapie mit Kindern und Jugendlichen",
             "Michael White",
             "Narrative Therapie",
             "Der Klassiker. Tree of Life und Externalisierung im Original. "
             "Befreiende Perspektiven fuer die Arbeit mit belasteten "
             "Jugendlichen."],
            ["Aggression bei Kindern und Jugendlichen",
             "Franz Petermann",
             "Aggression",
             "Differenzierte Darstellung verschiedener Aggressionsformen mit "
             "konkreten Interventionsanleitungen. Hilfreich fuer den Schulalltag."],
            ["Achtsamkeit mit Kindern und Jugendlichen",
             "Eline Snel",
             "Achtsamkeit",
             "Praktisch und kindgerecht. Viele Uebungen zum sofortigen Einsatz. "
             "Gut geeignet fuer Gruppen und Einzelarbeit."],
            ["Die Pubertaet - Wenn Erziehen nicht mehr geht",
             "Ralph Dawirs & Gunther Moll",
             "Neurobiologie",
             "Gehirnentwicklung verstaendlich erklaert. Gute Lektuere auch fuer "
             "Elterngespraeche. Hilfreich, um Verhalten von Jugendlichen "
             "neurobiologisch einzuordnen."],
            ["Mobbing unter Kindern und Jugendlichen",
             "Mechthild Schaefer",
             "Mobbing",
             "Fundiert, mit evidenzbasierten Interventionsprogrammen. "
             "Differenziert zwischen verschiedenen Formen und Rollen im "
             "Mobbing-Geschehen."],
            ["Essstoerungen",
             "Corinna Jacobi et al.",
             "Essstoerungen",
             "Aktuell, differenziert, praxisrelevant. Deckt Anorexie, Bulimie "
             "und Binge-Eating ab. Mit Screening-Instrumenten und "
             "Gespraechsleitfaeden."],
            ["Kultursensibler Kinderschutz",
             "Joerg Maywald",
             "Kultursensibilitaet",
             "Besonders wichtig fuer den luxemburgischen Kontext mit seiner "
             "multikulturellen Schuelerschaft. Hilft, kulturelle Normen und "
             "Kinderschutz in Einklang zu bringen."],
            ["Gewaltfreie Kommunikation",
             "Marshall Rosenberg",
             "GfK",
             "Das Original. Veraendert die eigene Kommunikation grundlegend. "
             "Hilfreich fuer Gespraeche mit Jugendlichen, Eltern und Kollegen "
             "gleichermassen."],
            ["Der Koerper vergisst nicht",
             "Bessel van der Kolk",
             "Trauma",
             "Bahnbrechendes Werk ueber die koerperlichen Auswirkungen von "
             "Trauma. Veraendert das Verstaendnis von Traumafolgestoerungen "
             "grundlegend."],
            ["Jugend und Psyche",
             "Michael Schulte-Markwort",
             "Allgemein",
             "Verstaendliche Uebersicht ueber psychische Probleme im "
             "Jugendalter. Gut geeignet als Einstiegslektuere und als "
             "Nachschlagewerk."],
            ["Cooldown - Wut und Aggression kreativ bearbeiten",
             "Jens Mollenhauer",
             "Aggression/Deeskalation",
             "Konkrete Deeskalationsstrategien und kreative Methoden fuer den "
             "Alltag. Viele direkt umsetzbare Uebungen und Spiele."],
            ["Handbuch der Suizidpraevention",
             "Manfred Wolfersdorf",
             "Suizidpraevention",
             "Umfassendes deutschsprachiges Referenzwerk. Deckt Theorie, "
             "Diagnostik, Intervention und Postvention ab. Wichtige "
             "Grundlage fuer Ihre Arbeit."]
        ])

    # --- Online-Ressourcen ---
    doc.add_heading('Online-Ressourcen und Weiterbildung', level=3)

    doc.add_paragraph(
        "Die folgenden Online-Ressourcen bieten Weiterbildungsmoeglichkeiten, Materialien "
        "und Netzwerke, die fuer Ihre Arbeit am CDSE relevant sind.")

    add_bullet_list(doc, [
        "MI-Training: Motivational Interviewing Network of Trainers (MINT) - "
        "mintinternational.org - Workshops, Trainingsmaterialien und Zertifizierung "
        "in Motivierender Gespraechsfuehrung",
        "DBT-Skills: Behavioral Tech (Linehan Institute) - behavioraltech.org - "
        "Online-Kurse und Materialien zur Dialektisch-Behavioralen Therapie, "
        "Skills-Training-Handouts zum Download",
        "Trauma-Informed Care: National Child Traumatic Stress Network (NCTSN) - "
        "nctsn.org - Umfangreiche kostenlose Ressourcen zu traumainformierter Arbeit "
        "mit Kindern und Jugendlichen, Webinare und Toolkit",
        "Suizidpraevention: Zero Suicide Institute - zerosuicide.edc.org - "
        "Evidenzbasierte Materialien zur Suizidpraevention, kostenlose Online-Trainings, "
        "Screening-Instrumente und Sicherheitsplanvorlagen",
        "Achtsamkeit: Mindfulness-Based Stress Reduction (MBSR) Kurse - lokal in "
        "Luxemburg verfuegbar ueber das Centre de Psychologie et d'Orientation Scolaires. "
        "MBSR fuer Jugendliche adaptierte Programme (z.B. MindUP, .b Foundation)",
        "Systemische Weiterbildung: Deutsche Gesellschaft fuer Systemische Therapie, "
        "Beratung und Familientherapie (DGSF) - dgsf.org - Zertifizierte "
        "Weiterbildungscurricula, Tagungen und Fachzeitschrift",
        "Kinderschutz in Luxemburg: Office National de l'Enfance (ONE) - one.lu - "
        "Formation continue des professions de sante. Meldewege, rechtliche Grundlagen "
        "und Fortbildungsangebote speziell fuer den luxemburgischen Kontext"
    ])

    add_important_box(doc,
        "Planen Sie mindestens eine groessere Weiterbildung pro Jahr und lesen Sie "
        "mindestens zwei Fachbuecher. Tragen Sie beides fest in Ihren Kalender ein. "
        "Professionelle Entwicklung ist kein Zufall - sie ist Planung.")
