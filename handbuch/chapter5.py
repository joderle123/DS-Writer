"""
Kapitel 5: Elternarbeit und Systemische Zusammenarbeit
"""
from styles import (add_table, add_bullet_list, add_praxisbox, add_dialog,
                    add_redflag, add_important_box, add_tip_box, add_section_intro,
                    add_checklist, add_flowchart, add_numbered_list)


def add_chapter5(doc):
    """Kapitel 5: Elternarbeit und Systemische Zusammenarbeit"""

    doc.add_heading('KAPITEL 5: ELTERNARBEIT UND SYSTEMISCHE ZUSAMMENARBEIT', level=1)

    add_section_intro(doc,
        "Kein Jugendlicher existiert isoliert. Die Arbeit mit dem System - Eltern, Lehrer, "
        "externe Fachkraefte - ist oft ebenso wichtig wie die direkte Arbeit mit dem Jugendlichen. "
        "Dieses Kapitel gibt Ihnen konkrete Werkzeuge fuer die haeufigsten Kooperationssituationen "
        "im luxemburgischen Schulsystem.")

    # =====================================================================
    # 5.1 ELTERNGESPRAECHE FUEHREN
    # =====================================================================
    doc.add_heading('5.1 Elterngespraeche fuehren', level=2)

    doc.add_paragraph(
        "Elterngespraeche gehoeren zu den anspruchsvollsten Aufgaben im Schulalltag. "
        "Eltern kommen oft mit eigenen Aengsten, Schuldgefuehlen oder Abwehr in das Gespraech. "
        "Eine sorgfaeltige Vorbereitung und eine wertschaetzende Grundhaltung sind entscheidend.")

    doc.add_heading('Grundsaetze fuer Elterngespraeche', level=3)

    add_table(doc,
        ["Nr.", "Grundsatz", "Erlaeuterung"],
        [
            ["1", "Positiv beginnen",
             "Starten Sie immer mit einer Staerke des Kindes, auch wenn das schwerfaellt. "
             "Eltern muessen spueren, dass Sie ihr Kind nicht nur als Problemfall sehen."],
            ["2", "Verstaendnis zeigen",
             "Eltern haben oft selbst Angst, Scham oder Hilflosigkeit. "
             "Bevor Sie Informationen vermitteln, validieren Sie die Emotionen der Eltern."],
            ["3", "Sprache anpassen",
             "Verzichten Sie auf Fachjargon und Diagnose-Begriffe. Sprechen Sie in Alltagssprache. "
             "Statt \"Ihr Kind zeigt Symptome einer Angststoerung\" sagen Sie: "
             "\"Ihrem Kind faellt es gerade sehr schwer, zur Schule zu kommen.\""],
            ["4", "Gemeinsam statt gegeneinander",
             "Betonen Sie immer wieder die gemeinsame Perspektive: "
             "\"Wir wollen alle das Beste fuer Ihr Kind.\" "
             "Positionieren Sie sich als Partner, nicht als Experte, der belehrt."],
            ["5", "Schweigepflicht beachten",
             "Was der Jugendliche Ihnen anvertraut hat, duerfen Sie nicht automatisch an die Eltern "
             "weitergeben. Klaeren Sie vorher mit dem Jugendlichen, was geteilt werden darf."],
            ["6", "Kulturelle Sensibilitaet",
             "Luxemburg ist ein multikulturelles Land. Erziehungsvorstellungen und "
             "Familienstrukturen variieren stark. Fragen Sie nach, statt anzunehmen."],
            ["7", "Dolmetscher einsetzen",
             "Wenn Eltern die Gespraechssprache nicht ausreichend beherrschen, organisieren Sie "
             "einen professionellen Dolmetscher. Benutzen Sie NIEMALS das Kind als Dolmetscher - "
             "das ueberfordert und parentifiziert."],
            ["8", "Dokumentieren",
             "Halten Sie schriftlich fest: Was wurde besprochen? Was wurde vereinbart? "
             "Wer macht was bis wann? Geben Sie den Eltern eine Kopie der Vereinbarungen."]
        ])

    add_tip_box(doc,
        "Bereiten Sie sich auf schwierige Elterngespraeche immer schriftlich vor: "
        "Was ist das Ziel des Gespraechs? Was sind die wichtigsten Punkte? "
        "Was koennten schwierige Reaktionen der Eltern sein, und wie reagieren Sie darauf?")

    # ------------------------------------------------------------------
    # Dialog 1: Selbstverletzung
    # ------------------------------------------------------------------
    doc.add_heading('Elterngespraech 1: Selbstverletzung offenlegen', level=3)

    doc.add_paragraph(
        "Situation: Sie haben erfahren, dass sich eine 14-jaehrige Schuelerin selbst verletzt "
        "(Ritzen an den Unterarmen). Nach Absprache mit der Jugendlichen haben Sie die Eltern "
        "zu einem Gespraech eingeladen. Beide Elternteile sind anwesend.")

    add_dialog(doc, [
        ("Psychologe",
         "Herr und Frau Schmitt, vielen Dank, dass Sie so kurzfristig kommen konnten. "
         "Bevor wir anfangen, moechte ich Ihnen sagen, dass Laura eine engagierte und "
         "kreative Schuelerin ist, die von ihren Lehrern sehr geschaetzt wird. "
         "Ich moechte heute mit Ihnen ueber etwas sprechen, das mich besorgt - "
         "und ich weiss, dass es fuer Sie belastend sein wird. Laura weiss, dass ich "
         "mit Ihnen spreche, und hat dem zugestimmt."),
        ("Mutter",
         "(angespannt) Was ist denn los? Ist etwas Schlimmes passiert?"),
        ("Psychologe",
         "Laura hat sich mir anvertraut, dass sie sich seit einigen Wochen selbst verletzt - "
         "sie ritzt sich an den Unterarmen. Ich sage Ihnen das nicht, um Sie zu erschrecken, "
         "sondern weil ich weiss, dass Sie Laura lieben und informiert sein muessen, "
         "um sie unterstuetzen zu koennen."),
        ("Mutter",
         "(erschrocken, Traenen) Das kann nicht sein... Warum hat sie uns nichts gesagt? "
         "Wir haetten doch... Habe ich etwas falsch gemacht?"),
        ("Psychologe",
         "Frau Schmitt, Ihre Reaktion zeigt, wie sehr Sie sich um Laura sorgen. "
         "Und nein - Selbstverletzung ist kein Zeichen dafuer, dass Sie als Eltern versagt haben. "
         "Jugendliche, die sich verletzen, schaemen sich oft zutiefst und haben Angst vor "
         "der Reaktion ihrer Eltern. Dass Laura sich niemandem anvertraut hat, ist leider "
         "ganz typisch."),
        ("Vater",
         "(veraergert) Aber warum macht sie das? Will sie sich umbringen? "
         "Oder will sie uns damit unter Druck setzen?"),
        ("Psychologe",
         "Das sind genau die Fragen, die viele Eltern stellen, und ich moechte sie "
         "ehrlich beantworten. Erstens: Selbstverletzung ist in den allermeisten Faellen "
         "KEIN Suizidversuch. Laura will sich nicht toeten. Zweitens: Es ist auch KEINE "
         "Manipulation. Was Selbstverletzung tatsaechlich ist, ist ein - zugegebenermassen "
         "ungesunder - Bewaeltigungsmechanismus. Laura hat gelernt, dass der koerperliche "
         "Schmerz den seelischen Schmerz kurzfristig betaeubt. Es ist ihre Art, mit "
         "Ueberforderung umzugehen, weil sie noch keine besseren Strategien hat."),
        ("Mutter",
         "Was sollen wir jetzt tun? Sollen wir sie darauf ansprechen?"),
        ("Psychologe",
         "Ja, aber auf die richtige Art. Erstens: Versuchen Sie, ruhig zu bleiben, "
         "auch wenn es schwerfaellt. Laura braucht jetzt Eltern, die sie auffangen, "
         "nicht solche, die selbst in Panik geraten. Zweitens: Sprechen Sie Laura an - "
         "nicht vorwurfsvoll, sondern mitfuehlend. Zum Beispiel: \"Laura, wir wissen, "
         "dass du dich verletzt. Wir machen dir keinen Vorwurf. Wir moechten verstehen, "
         "was dich so belastet.\" Drittens: Ich empfehle dringend eine Anbindung an "
         "einen Kinder- und Jugendtherapeuten. Ich habe Ihnen eine Liste mit Kontakten "
         "vorbereitet. Viertens: Wir machen gemeinsam einen Plan - Sie, Laura und ich."),
        ("Vater",
         "Muessen wir jetzt alle scharfen Gegenstaende verstecken?"),
        ("Psychologe",
         "Es ist sinnvoll, Rasierklingen oder ahnliche Gegenstaende nicht offen "
         "herumliegen zu lassen. Aber bitte verwandeln Sie Ihr Zuhause nicht in ein "
         "Gefaengnis - das wuerde Laura das Gefuehl geben, dass Sie ihr nicht vertrauen, "
         "und koennte die Situation verschlimmern. Der wichtigste Schutzfaktor ist Ihre "
         "Beziehung zu Laura und dass sie weiss: Ich kann zu meinen Eltern kommen, "
         "wenn es mir schlecht geht.")
    ])

    add_important_box(doc,
        "Nach einem solchen Gespraech: Bieten Sie den Eltern an, sich bei Ihnen zu melden, "
        "wenn sie Fragen haben. Eltern brauchen nach einer solchen Nachricht Zeit, "
        "um die Information zu verarbeiten. Planen Sie ein Folgegespraech innerhalb einer Woche.")

    # ------------------------------------------------------------------
    # Dialog 2: Schulverweigerung
    # ------------------------------------------------------------------
    doc.add_heading('Elterngespraech 2: Schulverweigerung', level=3)

    doc.add_paragraph(
        "Situation: Ein 13-jaehriger Schueler fehlt seit drei Wochen immer haeufiger in der "
        "Schule. Die Eltern sind besorgt und haben um ein Gespraech gebeten. Die Mutter "
        "kommt alleine, der Vater kann aus beruflichen Gruenden nicht dabei sein.")

    add_dialog(doc, [
        ("Mutter",
         "Ich weiss nicht mehr weiter. Morgens bekomme ich Jonas einfach nicht aus dem Bett. "
         "Er sagt, er hat Bauchschmerzen, Kopfschmerzen - und wenn ich darauf bestehe, "
         "wird er richtig aggressiv. Sein Vater meint, ich soll strenger sein."),
        ("Psychologe",
         "Frau Mueller, erst einmal danke, dass Sie gekommen sind. Ich hoere, dass die "
         "Situation Sie sehr belastet - und dass es zuhause deswegen auch Spannungen gibt. "
         "Das ist bei Schulverweigerung ganz haeufig. Sie sind nicht allein damit."),
        ("Mutter",
         "(erleichtert) Wirklich? Ich dachte, wir machen alles falsch..."),
        ("Psychologe",
         "Schulverweigerung hat selten eine einzige Ursache, und sie ist fast nie ein Zeichen "
         "von Faulheit oder schlechter Erziehung. Darf ich Ihnen ein paar Fragen stellen, "
         "damit wir gemeinsam verstehen koennen, was hinter Jonas' Verhalten steckt?"),
        ("Mutter",
         "Ja, natuerlich."),
        ("Psychologe",
         "Wann hat es angefangen? Gab es ein bestimmtes Ereignis - einen Klassenwechsel, "
         "einen Streit mit Freunden, eine schlechte Note, etwas in der Familie?"),
        ("Mutter",
         "Es wurde schlimmer, nachdem sein bester Freund die Schule gewechselt hat. "
         "Und dann kam diese schlechte Mathe-Arbeit..."),
        ("Psychologe",
         "Das klingt, als ob mehrere Dinge zusammengekommen sind: Der Verlust des besten "
         "Freundes - also Einsamkeit in der Schule - und die schlechte Note, die sein "
         "Selbstvertrauen getroffen hat. Die koerperlichen Beschwerden, die Jonas zeigt, "
         "sind haeufig ein Zeichen dafuer, dass die Angst sich koerperlich ausdrueckt. "
         "Das ist keine Simulation - ihm tut wirklich der Bauch weh."),
        ("Mutter",
         "Aber was soll ich denn morgens machen? Ihn zwingen?"),
        ("Psychologe",
         "Ich verstehe das Dilemma. Einerseits gibt es die Schulpflicht und je laenger Jonas "
         "fehlt, desto schwieriger wird die Rueckkehr. Andererseits bringt Zwang allein nichts, "
         "weil er die Ursache nicht behebt. Ich schlage einen Stufenplan vor: Erstens klaeren "
         "wir ab, ob Jonas professionelle Unterstuetzung braucht - moeglichweise eine "
         "Beratung oder Therapie. Zweitens spreche ich mit Jonas alleine, um seine Perspektive "
         "zu hoeren. Drittens schauen wir in der Schule, wie wir den Wiedereinstieg erleichtern "
         "koennen - vielleicht erst einige Faecher, dann schrittweise aufbauen. Und viertens "
         "beziehen wir auch die Lehrer mit ein, damit alle am gleichen Strang ziehen."),
        ("Mutter",
         "Das klingt gut. Aber mein Mann... er wird sagen, das sei alles zu weich."),
        ("Psychologe",
         "Es waere sehr wichtig, dass Ihr Mann auch einbezogen wird. Darf ich vorschlagen, "
         "dass wir ein zweites Gespraech organisieren, zu dem auch er kommen kann? "
         "Schulverweigerung ist ein Familienthema, und es hilft enorm, wenn beide Elternteile "
         "die gleiche Strategie verfolgen. Wenn er beruflich verhindert ist, koennen wir "
         "auch einen Termin am spaeten Nachmittag oder fruehen Abend anbieten.")
    ])

    add_tip_box(doc,
        "Bei Schulverweigerung gilt: Je frueher die Intervention, desto besser die Prognose. "
        "Nach 4 Wochen durchgehendem Fehlen sinkt die Wahrscheinlichkeit einer erfolgreichen "
        "Rueckkehr deutlich. Handeln Sie schnell und koordiniert.")

    # ------------------------------------------------------------------
    # Dialog 3: Aggressives Verhalten
    # ------------------------------------------------------------------
    doc.add_heading('Elterngespraech 3: Aggressives Verhalten', level=3)

    doc.add_paragraph(
        "Situation: Ein 15-jaehriger Schueler hat in der Schule wiederholt andere Schueler "
        "geschubst und bedroht. Die Eltern wurden eingeladen und kommen mit einer defensiven "
        "Haltung. Der Vater ist sichtlich veraergert ueber die Einladung.")

    add_dialog(doc, [
        ("Vater",
         "(aufgebracht) Ich wurde von der Arbeit geholt fuer dieses Gespraech. "
         "Was hat Markus jetzt wieder angeblich gemacht?"),
        ("Psychologe",
         "Herr Weber, ich schaetze es sehr, dass Sie trotz des beruflichen Aufwands "
         "gekommen sind. Das zeigt, dass Ihnen Markus wichtig ist. Bevor wir ueber "
         "den Vorfall sprechen, moechte ich Ihnen sagen, dass Markus in Geschichte "
         "gute Leistungen zeigt und einen trockenen Humor hat, den seine Mitschueler "
         "moegen. Ich sehe ihn nicht als Problemschueler - aber es gibt ein Verhalten, "
         "das mich besorgt."),
        ("Vater",
         "Na ja, Jungs raufen halt. Das war frueher auch so."),
        ("Mutter",
         "Lass ihn doch erst mal erzaehlen..."),
        ("Psychologe",
         "Es gab in den letzten Wochen mehrere Situationen, in denen Markus andere "
         "Schueler koerperlich bedraengt und verbal bedroht hat. Ich moechte das nicht "
         "verharmlosen, aber ich moechte es auch nicht dramatisieren. Mich interessiert "
         "vor allem: Was steckt dahinter? Denn in meiner Erfahrung ist Aggression bei "
         "Jugendlichen fast immer ein Zeichen dafuer, dass etwas anderes nicht stimmt."),
        ("Vater",
         "Was soll denn nicht stimmen? Zuhause ist alles in Ordnung."),
        ("Psychologe",
         "Herr Weber, ich bin nicht hier, um jemanden zu beschuldigen - weder Markus noch "
         "Sie. Ich bin hier, weil ich glaube, dass Markus Unterstuetzung braucht. "
         "Jugendliche, die aggressiv werden, fuehlen sich oft selbst bedroht - "
         "sei es durch Leistungsdruck, soziale Unsicherheit oder etwas, das wir noch "
         "nicht verstehen. Aggression ist dann wie ein Schutzschild."),
        ("Mutter",
         "(leise) Er ist in letzter Zeit auch zuhause sehr gereizt. Und er schlaeft schlecht."),
        ("Psychologe",
         "Danke, Frau Weber, das ist ein wichtiger Hinweis. Schlafprobleme und Reizbarkeit "
         "koennen darauf hindeuten, dass Markus innerlich unter Druck steht. Darf ich "
         "vorschlagen, dass ich mich ein paar Mal mit Markus zusammensetze? Nicht als "
         "Strafe, sondern als Angebot. Ich moechte verstehen, was ihn belastet, und ihm "
         "helfen, andere Wege zu finden, damit umzugehen."),
        ("Vater",
         "Und was ist mit den anderen Schuelern? Die provozieren ihn doch auch."),
        ("Psychologe",
         "Das ist ein berechtigter Punkt, und ich werde auch die Klassensituation genauer "
         "anschauen. Es geht nicht darum, Markus zum alleinigen Schuldigen zu machen. "
         "Aber unabhaengig davon, was die anderen tun, muss Markus lernen, auf Provokation "
         "anders zu reagieren - fuer seinen eigenen Schutz. Denn im Moment schadet sein "
         "Verhalten vor allem ihm selbst: Er riskiert Schulstrafen und verliert Freunde. "
         "Unser Ziel ist, dass Markus Strategien bekommt, die ihm wirklich helfen."),
        ("Vater",
         "(etwas ruhiger) Na gut. Aber ich will nicht, dass er abgestempelt wird."),
        ("Psychologe",
         "Das will ich auch nicht. Markus ist kein schlechter Mensch - er zeigt gerade "
         "ein schwieriges Verhalten, und unsere Aufgabe ist herauszufinden, warum und "
         "wie wir ihm helfen koennen. Ich schlage vor: Ich treffe mich zweimal mit Markus, "
         "dann setzen wir uns wieder zusammen und besprechen, wie es weitergeht. "
         "Koennen wir das so vereinbaren?")
    ])

    add_redflag(doc,
        "Wenn Aggression ploetzlich und heftig auftritt oder mit anderen Warnsignalen "
        "einhergeht (Tierquaelerei, Faszination fuer Waffen, extreme Isolation), ziehen Sie "
        "sofort weitere Fachkraefte hinzu. Sicherheit geht immer vor.")

    # =====================================================================
    # 5.2 SYSTEMISCHE ZUSAMMENARBEIT
    # =====================================================================
    doc.add_heading('5.2 Systemische Zusammenarbeit', level=2)

    doc.add_paragraph(
        "In Luxemburg existiert ein dichtes Netz an Institutionen und Diensten, die Kinder, "
        "Jugendliche und Familien unterstuetzen. Als Psychologin oder Psychologe an einer "
        "CDSE-Schule sind Sie ein wichtiger Knotenpunkt in diesem Netzwerk. Ihre Aufgabe "
        "ist es, die richtigen Anlaufstellen zu kennen, Ueberweisungen vorzubereiten und "
        "die Zusammenarbeit zwischen den verschiedenen Akteuren zu koordinieren.")

    doc.add_heading('Grundprinzipien der Netzwerkarbeit', level=3)

    add_numbered_list(doc, [
        "KENNEN SIE IHR NETZWERK: Machen Sie sich zu Beginn Ihrer Taetigkeit mit den "
        "wichtigsten Anlaufstellen in Luxemburg vertraut. Besuchen Sie die Einrichtungen "
        "persoenlich, wenn moeglich.",
        "PERSOENLICHE KONTAKTE PFLEGEN: Ein Anruf bei einer bekannten Kollegin wirkt "
        "schneller als eine formelle Anfrage. Bauen Sie persoenliche Beziehungen zu "
        "Ansprechpartnern in den Institutionen auf.",
        "FRUEH UEBERWEISEN: Warten Sie nicht, bis eine Situation eskaliert. "
        "Lieber einmal zu frueh ueberwiesen als einmal zu spaet.",
        "ELTERN EINBEZIEHEN: Erklaeren Sie den Eltern transparent, warum Sie eine "
        "Ueberweisung empfehlen. Unterstuetzen Sie sie bei der Kontaktaufnahme.",
        "INFORMATIONSFLUSS SICHERN: Klaeren Sie mit dem Jugendlichen und den Eltern, "
        "welche Informationen an wen weitergegeben werden duerfen. Holen Sie schriftliche "
        "Einverstaendniserklaerungen ein.",
        "RUECKMELDUNG EINHOLEN: Fragen Sie nach dem Ergebnis der Ueberweisung. "
        "Ist der Jugendliche dort angekommen? Wird er betreut?",
        "RUNDE TISCHE ORGANISIEREN: Bei komplexen Faellen mit mehreren beteiligten "
        "Institutionen organisieren Sie einen Runden Tisch zur Abstimmung."
    ])

    doc.add_heading('Anlaufstellen in Luxemburg - Uebersicht', level=3)

    doc.add_paragraph(
        "Die folgende Tabelle gibt Ihnen einen Ueberblick ueber die wichtigsten "
        "Institutionen und Dienste fuer Kinder, Jugendliche und Familien in Luxemburg. "
        "Speichern Sie die relevanten Nummern in Ihrem Telefon.")

    add_table(doc,
        ["Institution", "Beschreibung und Angebot", "Kontakt"],
        [
            ["ONE (Office National de l'Enfance)",
             "Kinderschutz und Jugendhilfe. Zustaendig fuer Meldungen bei "
             "Kindeswohlgefaehrdung. Koordiniert Hilfsmassnahmen, stationaere und "
             "ambulante Jugendhilfe. Pflichtmeldung bei Verdacht auf Misshandlung "
             "oder Vernachlaessigung.",
             "Tel: 247-73100\none.gouvernement.lu"],
            ["CePAS (Centre psycho-social et d'accompagnement scolaires)",
             "Psychosoziale Beratung und Begleitung fuer Schueler des Enseignement "
             "secondaire. Bietet individuelle Beratung, Krisenintervention, "
             "Praevention und Fortbildung fuer Fachkraefte.",
             "Tel: 247-75910\ncepas.public.lu"],
            ["CPOS (Centre de psychologie et d'orientation scolaires)",
             "Berufliche Orientierung und psychologische Diagnostik. Zustaendig "
             "fuer Laufbahnberatung, Begabungsdiagnostik, Schulreifetests und "
             "Orientierungsentscheidungen.",
             "Tel: 247-75969\ncpos.public.lu"],
            ["Kanner-Jugendtelefon (KJT)",
             "Anonyme Telefon- und Online-Beratung fuer Kinder und Jugendliche. "
             "Niedrigschwellig, kostenlos, vertraulich. Auch Chat-Beratung verfuegbar. "
             "Wichtige Ressource, auf die Sie Schueler hinweisen koennen.",
             "Tel: 116 111\nkjt.lu"],
            ["BEE SECURE",
             "Nationale Initiative fuer Internetsicherheit. Beratung bei Cybermobbing, "
             "Sexting, Online-Grooming, exzessiver Mediennutzung. Bietet auch "
             "Schulworkshops und Elternabende an. Stopline fuer illegale Inhalte.",
             "Tel: 8002 1234\nbee-secure.lu"],
            ["SePAS (Service psycho-social et d'accompagnement scolaires)",
             "Psychosoziale Dienste direkt in den Sekundarschulen. Multiprofessionelle "
             "Teams aus Psychologen, Sozialpaedagogen und Erziehern. Erste Anlaufstelle "
             "fuer Schueler in Schwierigkeiten innerhalb der Schule.",
             "Ueber die jeweilige Schule"],
            ["SCAS (Service central d'assistance sociale)",
             "Sozialer Dienst fuer Familien in schwierigen Lebenslagen. Unterstuetzung "
             "bei finanziellen Problemen, Wohnungsnot, administrativen Fragen. "
             "Kann Familien an spezialisierte Dienste weitervermitteln.",
             "Tel: 247-83636\nmfamigr.gouvernement.lu"],
            ["CHL - Kinder- und Jugendpsychiatrie",
             "Psychiatrische Diagnostik und Behandlung fuer Kinder und Jugendliche. "
             "Ambulante und stationaere Versorgung. Psychiatrische Notaufnahme rund "
             "um die Uhr. Wichtigste Anlaufstelle bei akuter psychiatrischer Krise.",
             "Tel: +352 4411-2148\nchl.lu"],
            ["CHNP - Centre Hospitalier Neuro-Psychiatrique",
             "Psychiatrische Versorgung in Ettelbruck. Bietet stationaere und "
             "ambulante Behandlung, spezialisierte Abteilungen. Ergaenzung zum CHL "
             "im Norden des Landes.",
             "Tel: +352 2682-1\nchnp.lu"],
            ["Police Grand-Ducale - Jugendschutz",
             "Zustaendig fuer strafrechtliche Aspekte des Jugendschutzes. "
             "Ansprechpartner bei haeuslicher Gewalt, sexuellem Missbrauch, "
             "Bedrohungssituationen. Abteilung Protection de la Jeunesse.",
             "Notruf: 113 (Notfall: 112)\npolice.public.lu"],
            ["Planning Familial",
             "Beratung zu Sexualitaet, Verhuetung, ungewollter Schwangerschaft, "
             "sexuell uebertragbaren Infektionen. Kostenlos und anonym fuer "
             "Jugendliche. Mehrere Standorte in Luxemburg.",
             "Tel: +352 48 59 76\nplanningfamilial.lu"],
            ["Croix-Rouge Luxembourg",
             "Breites Angebot an sozialen Diensten: Jugendarbeit, Fluechtlingshilfe, "
             "Maisons Relais, therapeutische Wohngruppen fuer Jugendliche, "
             "psychosoziale Beratung, Schuldenberatung.",
             "Tel: +352 2755\ncroix-rouge.lu"],
            ["Caritas Luxembourg",
             "Soziale Dienste, Suchtberatung (Point Info), Schuldnerberatung, "
             "Wohnhilfe, Begleitung fuer unbegleitete minderjaehrige Fluechtlinge. "
             "Wichtiger Partner bei sozialer Prekaritaet.",
             "Tel: +352 40 21 31-1\ncaritas.lu"],
            ["ADEM (Agence pour le developpement de l'emploi)",
             "Arbeitsagentur, relevant fuer aeltere Jugendliche (16+) bei "
             "Schulabbruch oder Berufseinstieg. Bietet Orientierung, Massnahmen "
             "fuer Jugendliche (Garantie pour la Jeunesse), Praktika.",
             "Tel: +352 247-88888\nadem.lu"],
            ["SOS Detresse",
             "Telefonseelsorge und Krisentelefon, 24 Stunden am Tag erreichbar, "
             "7 Tage die Woche. Anonym und kostenlos. Wichtig fuer akute Krisen "
             "ausserhalb der Dienstzeiten.",
             "Tel: 45 45 45\n454545.lu"],
            ["Femmes en Detresse",
             "Beratung und Schutz bei Gewalt gegen Frauen und Maedchen. "
             "Frauenhaeuser, Beratungsstellen. Auch relevant fuer Schuelerinnen "
             "aus Familien mit haeuslicher Gewalt.",
             "Tel: +352 40 20 40\nfed.lu"],
            ["Fondation Pro Familia",
             "Familienberatung, Mediation bei Trennung und Scheidung, "
             "Elternberatung, Schwangerschaftsberatung. Kann Familien in "
             "Konfliktsituationen professionell begleiten.",
             "Tel: +352 227720\nprofamilia.lu"],
            ["OMEGA 90",
             "Palliativversorgung und Trauerbegleitung. Relevant, wenn Schueler "
             "mit Tod und Trauer konfrontiert sind - Verlust eines Elternteils, "
             "Geschwisters oder Freundes.",
             "Tel: +352 29 77 89-1\nomega90.lu"],
            ["Centre de Prevention des Toxicomanies (CePT)",
             "Suchtpraevention und Beratung. Informationen und Fruehintervention "
             "bei Substanzkonsum (Cannabis, Alkohol, andere Drogen). Bietet auch "
             "Schulworkshops an.",
             "Tel: +352 49 77 77-1\ncept.lu"],
            ["RESPECT.lu (BEE SECURE)",
             "Praeventionsprogramm gegen Radikalisierung und Extremismus. "
             "Beratung fuer Fachkraefte und Familien bei Anzeichen von "
             "Radikalisierung. Vertraulich.",
             "Tel: 8002 1234\nbee-secure.lu"],
            ["Ligue Luxembourgeoise d'Hygiene Mentale",
             "Psychologische Beratungsstellen fuer Kinder, Jugendliche und "
             "Erwachsene. Ambulante psychologische und psychiatrische Versorgung. "
             "Wartezeiten moeglich, aber wichtige Ressource.",
             "Tel: +352 49 30 53-1\nllhm.lu"],
            ["Kannerhaus Jean / Maisons des enfants",
             "Stationaere Jugendhilfe und betreutes Wohnen fuer Kinder und "
             "Jugendliche, die nicht mehr zuhause leben koennen. "
             "Vermittlung ueber ONE.",
             "Ueber ONE\none.gouvernement.lu"],
            ["Rehazenter",
             "Rehabilitationszentrum, auch fuer psychosomatische Erkrankungen "
             "bei Jugendlichen relevant. Interdisziplinaere Betreuung.",
             "Tel: +352 2646-51\nrehazenter.lu"],
            ["Service de la Jeunesse (SNJ)",
             "Foerderung der ausserschulischen Jugendarbeit. Freiwilligendienst, "
             "Jugendhaeuser, Ferienaktivitaeten. Kann als positive Ressource fuer "
             "Jugendliche dienen, die Anschluss suchen.",
             "Tel: +352 247-86483\nsnj.lu"]
        ])

    add_important_box(doc,
        "Bei akuter Gefahr fuer das Kind (Misshandlung, sexueller Missbrauch, "
        "schwere Vernachlaessigung) sind Sie gesetzlich verpflichtet, das ONE zu "
        "informieren. Diese Meldepflicht geht VOR die Schweigepflicht. "
        "Im Zweifelsfall koennen Sie das ONE auch anonym konsultieren.")

    doc.add_heading('Zusammenarbeit in der Praxis: Runde Tische', level=3)

    doc.add_paragraph(
        "Bei komplexen Faellen ist ein Runder Tisch oft die effektivste Methode, um alle "
        "Beteiligten zusammenzubringen und einen koordinierten Hilfeplan zu erstellen.")

    add_numbered_list(doc, [
        "VORBEREITUNG: Ziel definieren, Teilnehmer festlegen, Einverstaendnis der Eltern "
        "einholen, Zeitrahmen kommunizieren (maximal 60 Minuten)",
        "EROEFFNUNG: Begruessung, Anlass benennen, Zeitrahmen, Regeln festlegen "
        "(einer redet, Vertraulichkeit, keine Vorwuerfe)",
        "STAERKEN ZUERST: Was laeuft gut? Was kann das Kind gut? Was funktioniert bereits?",
        "PROBLEMDEFINITION: Was ist die Herausforderung? Verschiedene Perspektiven hoeren, "
        "ohne zu bewerten",
        "ZIELFORMULIERUNG: Was wollen wir konkret erreichen? SMART-Ziele formulieren",
        "MASSNAHMENPLANUNG: Wer macht was bis wann? Konkrete Aufgaben verteilen",
        "VEREINBARUNG: Schriftlich festhalten und allen Beteiligten eine Kopie geben",
        "NAECHSTER TERMIN: Immer einen Follow-up-Termin vereinbaren, um den Fortschritt "
        "zu ueberpruefen"
    ])

    add_tip_box(doc,
        "Laden Sie zu Runden Tischen nie mehr als 6-8 Personen ein. "
        "Je mehr Menschen am Tisch sitzen, desto weniger traut sich der Jugendliche zu sagen. "
        "Fragen Sie den Jugendlichen, ob er/sie dabei sein moechte - und respektieren Sie "
        "die Antwort.")

    # =====================================================================
    # 5.3 LEHRERBERATUNG
    # =====================================================================
    doc.add_heading('5.3 Lehrerberatung', level=2)

    doc.add_paragraph(
        "Lehrer sind Ihre wichtigsten Verbuendeten im Schulsystem. Sie verbringen taeglich "
        "Stunden mit den Schuelern und beobachten Verhalten, das Ihnen entgehen wuerde. "
        "Gleichzeitig fuehlen sich viele Lehrer mit verhaltensauffaelligen Schuelern "
        "ueberfordert und unsicher. Eine gute Lehrerberatung kann die Situation fuer alle "
        "Beteiligten verbessern - fuer den Schueler, den Lehrer und die Klasse.")

    doc.add_heading('Grundsaetze der Lehrerberatung', level=3)

    add_bullet_list(doc, [
        "SCHWEIGEPFLICHT: Teilen Sie Lehrern nur das mit, was der Schueler erlaubt hat. "
        "Keine Diagnosen, keine Familiendetails, keine Gespraechsinhalte.",
        "LEHRER SIND KEINE THERAPEUTEN: Geben Sie konkrete, umsetzbare Tipps, "
        "nicht psychologische Theorien.",
        "VALIDIEREN SIE DEN LEHRER: Lehrer fuehlen sich oft hilflos oder schuldig. "
        "Anerkennen Sie ihre Belastung.",
        "LOESUNGSORIENTIERT: Fokussieren Sie auf das, was der Lehrer tun KANN, "
        "nicht auf das, was er falsch macht.",
        "NACHFRAGEN: Erkundigen Sie sich nach einiger Zeit, ob die Empfehlungen "
        "geholfen haben."
    ])

    doc.add_heading('Was Lehrer wissen duerfen - und was NICHT', level=3)

    add_table(doc,
        ["Lehrer duerfen wissen", "Lehrer duerfen NICHT wissen"],
        [
            ["Dass Sie mit dem Schueler arbeiten (mit Zustimmung)",
             "Details aus den Gespraechen"],
            ["Allgemeine Empfehlungen fuer den Unterricht",
             "Diagnosen oder Verdachtsdiagnosen"],
            ["Dass der Schueler gerade eine schwierige Phase hat",
             "Familiaere Details (Scheidung, Gewalt, Sucht)"],
            ["Konkrete Verhaltenstipps fuer den Unterricht",
             "Dass sich der Schueler selbst verletzt"],
            ["Warnsignale, auf die sie achten sollen",
             "Inhalte, die der Schueler Ihnen anvertraut hat"]
        ])

    # ------------------------------------------------------------------
    # Infoblatt 1: Angst im Klassenzimmer
    # ------------------------------------------------------------------
    doc.add_heading('Infoblatt fuer Lehrer: Angst im Klassenzimmer', level=3)

    doc.add_paragraph(
        "Das folgende Infoblatt koennen Sie Lehrern als Handreichung geben, wenn ein "
        "Schueler mit Angstproblematik in ihrer Klasse ist.")

    add_table(doc,
        ["Bereich", "Beschreibung"],
        [
            ["WAS SIE SEHEN KOENNTEN",
             "Vermeidung von muendlicher Beteiligung und Praesentationen. "
             "Haeufige Fehlzeiten oder Zuspaetkommen. Somatische Beschwerden "
             "(Bauchschmerzen, Kopfschmerzen, Uebelkeit) besonders vor Tests. "
             "Extremer Perfektionismus oder Aufschiebeverhalten. "
             "Weinen oder Panik bei Pruefungen. Sozialer Rueckzug in der Pause. "
             "Staendiges Rueckversichern beim Lehrer."],
            ["WAS DAHINTERSTECKT",
             "Keine Faulheit und keine Verweigerung, sondern echte Angst. "
             "Das Gehirn des Schuelers befindet sich im Alarmmodus und interpretiert "
             "schulische Situationen als Bedrohung. Die koerperlichen Symptome sind "
             "real - der Schueler simuliert nicht. Angst ist die haeufigste "
             "psychische Erkrankung bei Jugendlichen."],
            ["WAS HILFT",
             "Nicht vor der Klasse aufrufen, wenn der Schueler sich nicht meldet. "
             "Muendliche Beteiligung in kleinen Gruppen ermoeglichen. "
             "Vorhersagbarkeit erhoehen (Tagesablauf an die Tafel schreiben). "
             "Bei Pruefungen: Zeitzuschlag anbieten, separaten Raum ermoeglichen. "
             "Rueckzugsmoeglichkeit anbieten (z.B. kurz auf den Flur gehen duerfen). "
             "Staerken betonen und kleine Erfolge anerkennen. "
             "Geheimes Signal vereinbaren, mit dem der Schueler zeigen kann, "
             "dass es zu viel wird."],
            ["WAS NICHT HILFT",
             "Konfrontation vor der Klasse (\"Nun sag doch mal was!\"). "
             "Saetze wie \"Stell dich nicht so an\" oder \"Das ist doch nicht so schlimm\". "
             "Unangekuendigte Tests oder ploetzliche Aenderungen im Ablauf. "
             "Den Schueler ignorieren in der Hoffnung, es legt sich von selbst. "
             "Vergleiche mit anderen Schuelern (\"Die anderen schaffen es doch auch\"). "
             "Eltern erst informieren, wenn die Situation eskaliert ist."]
        ])

    # ------------------------------------------------------------------
    # Infoblatt 2: ADHS im Unterricht
    # ------------------------------------------------------------------
    doc.add_heading('Infoblatt fuer Lehrer: ADHS im Unterricht', level=3)

    doc.add_paragraph(
        "Schueler mit ADHS stellen Lehrkraefte vor besondere Herausforderungen. "
        "Das folgende Infoblatt fasst die wichtigsten Informationen und Strategien zusammen.")

    add_table(doc,
        ["Bereich", "Beschreibung"],
        [
            ["WAS SIE SEHEN KOENNTEN",
             "Motorische Unruhe (zappeln, aufstehen, herumlaufen). "
             "Haeufiges Dazwischenreden und Schwierigkeiten abzuwarten. "
             "Vergessene Materialien, verlorene Arbeitszettel. "
             "Schwierigkeiten bei laengeren Aufgaben dranzubleiben. "
             "Tagtraeumen und scheinbares Nicht-Zuhoeren. "
             "Emotionale Ausbrueche, die uebertrieben wirken. "
             "Gute Leistungen in interessanten Faechern, schlechte in langweiligen."],
            ["WAS DAHINTERSTECKT",
             "ADHS ist keine schlechte Erziehung und kein Charakterfehler, sondern "
             "eine neurobiologische Besonderheit der exekutiven Funktionen. "
             "Das Gehirn hat Schwierigkeiten mit Aufmerksamkeitssteuerung, "
             "Impulskontrolle und Selbstregulation. Der Schueler WILL sich "
             "konzentrieren - er KANN es in dem Moment nicht. Die Reizfilterung "
             "funktioniert anders: Alles kommt ungefiltert an."],
            ["WAS HILFT",
             "Sitzplatz vorne, weg vom Fenster und von ablenkenden Mitschuelern. "
             "Aufgaben in kleine, ueberschaubare Schritte zerlegen. "
             "Bewegungspausen erlauben (zum Papierkorb gehen, Tafel wischen). "
             "Visuellen Timer oder Sanduhr nutzen fuer Zeitmanagement. "
             "Klare, kurze Anweisungen - eine nach der anderen. "
             "Positives Verhalten sofort verstaerken, nicht erst beim Elternabend. "
             "Fidget-Tools erlauben (Knetsachen, Gummiband am Stuhl). "
             "Aufgabenplaner gemeinsam mit dem Schueler fuehren. "
             "Blickkontakt herstellen, bevor Sie eine Anweisung geben. "
             "Uebergaenge ankuendigen (\"In 5 Minuten raeumt ihr auf\")."],
            ["WAS NICHT HILFT",
             "Staendige Ermahnungen vor der Klasse (\"Jetzt sitz endlich still!\"). "
             "Lange muendliche Anweisungen ohne visuelle Unterstuetzung. "
             "Bestrafung fuer Vergesslichkeit oder Unruhe. "
             "Erwarten, dass der Schueler sich genauso organisieren kann wie andere. "
             "Sarkasmus oder Ironie (\"Na, wieder nicht aufgepasst?\"). "
             "Alle Privilegien gleichzeitig streichen als Strafe. "
             "Davon ausgehen, dass der Schueler es absichtlich macht."]
        ])

    add_tip_box(doc,
        "Viele Lehrer empfinden ADHS-Schueler als anstrengend, was voellig "
        "nachvollziehbar ist. Validieren Sie dieses Gefuehl, bevor Sie Tipps geben. "
        "\"Ich verstehe, dass das fordernd ist. Hier sind ein paar Dinge, die helfen koennten.\"")

    # ------------------------------------------------------------------
    # Infoblatt 3: Trauma im Klassenzimmer
    # ------------------------------------------------------------------
    doc.add_heading('Infoblatt fuer Lehrer: Trauma-sensibles Klassenzimmer', level=3)

    doc.add_paragraph(
        "Traumatisierte Schueler brauchen eine besonders sichere und vorhersagbare "
        "Lernumgebung. Das folgende Infoblatt hilft Lehrkraeften, traumasensibel zu handeln.")

    add_table(doc,
        ["Bereich", "Beschreibung"],
        [
            ["WAS SIE SEHEN KOENNTEN",
             "Extreme Schreckhaftigkeit bei lauten Geraeuschen oder ploetzlichen Bewegungen. "
             "Ploetzliche Wutausbrueche, die scheinbar grundlos auftreten. "
             "Absencen - das Kind starrt ins Leere und ist nicht ansprechbar (Dissoziation). "
             "Massive Konzentrationsprobleme. "
             "Uebermaessige Anhaenglichkeit an bestimmte Erwachsene ODER extremer Rueckzug. "
             "Uebermaessiges Kontrollbeduerfnis oder extreme Hilflosigkeit. "
             "Regression (Verhalten, das juenger wirkt als das Alter). "
             "Koerperliche Beschwerden ohne medizinischen Befund."],
            ["WAS DAHINTERSTECKT",
             "Das Kind befindet sich in einem dauerhaften Alarmzustand. Sein Nervensystem "
             "ist auf Gefahr programmiert und reagiert auf harmlose Reize mit Kampf, "
             "Flucht oder Erstarren. Das Gehirn ist mit Ueberleben beschaeftigt, "
             "nicht mit Lernen. Das Verhalten ist keine bewusste Entscheidung, sondern "
             "eine automatische Stressreaktion. Das Kind braucht Sicherheit, bevor es "
             "lernen kann."],
            ["WAS HILFT",
             "Vorhersagbare Routinen schaffen - jede Veraenderung vorher ankuendigen. "
             "Sanfte Stimme und ruhige Koerpersprache. "
             "NIE von hinten ansprechen oder unangekuendigt beruehren. "
             "Einen sicheren Rueckzugsort anbieten, den das Kind jederzeit aufsuchen kann. "
             "Bei Absencen/Dissoziation: Sanft ansprechen mit dem Namen, orientieren: "
             "\"[Name], du bist hier in der Schule. Du bist sicher.\" "
             "Beziehung aufbauen durch zuverlaessiges, berechenbares Verhalten. "
             "Wahlmoeglichkeiten anbieten, um das Gefuehl von Kontrolle zu staerken. "
             "Strafen durch natuerliche Konsequenzen ersetzen. "
             "Uebergangsobjekte erlauben (z.B. ein Stein oder ein kleines Kuscheltier)."],
            ["WAS NICHT HILFT",
             "Ploetzliche Konfrontation oder Machtdemonstrationen. "
             "Isolation als Strafe (kann Panik ausloesen). "
             "Erzwungener Koerperkontakt (auch gut gemeintes Schulterklopfen). "
             "Sarkasmus, Ironie oder oeffentliche Bloesstellung. "
             "Fragen nach dem Trauma (\"Was ist dir denn passiert?\"). "
             "Erwarten, dass das Kind \"funktioniert\" wie andere. "
             "Aussagen wie \"Das ist doch lange her\" oder \"Andere haben Schlimmeres erlebt\". "
             "Das Verhalten persoenlich nehmen - es richtet sich nicht gegen Sie."]
        ])

    add_important_box(doc,
        "Wenn Sie bei einem Lehrer bemerken, dass er/sie selbst durch die Arbeit mit "
        "einem traumatisierten Schueler belastet ist (sekundaere Traumatisierung), "
        "sprechen Sie das behutsam an. Lehrer brauchen auch Unterstuetzung - "
        "und es ist keine Schwaeche, sich Hilfe zu holen.")

    add_redflag(doc,
        "Wenn ein Schueler im Unterricht dissoziiert (starrt ins Leere, reagiert nicht, "
        "wirkt wie abwesend), ist das kein Tagtraeumen. Schicken Sie einen Mitschueler, "
        "um den SePAS-Psychologen zu holen. Versuchen Sie NICHT, das Kind zu schuetteln "
        "oder laut anzusprechen.")
