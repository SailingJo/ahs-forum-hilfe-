export const audio = [{
        "q": "Es kommt kein Ton",
        "a": "- Signalweg verfolgen und gucken ob alle Stecker drinnen stecken?\n- Vorverstärkung (Gain)?\n- Kanal-Fader?\n- Master?\n- Lautsprecher an?\n- Mischpult an?\n- Kabel kaputt? (testen/austauschen)\n- Mikrofon kaputt?"
    },
    {
        "q": "Ein Funkmikrofon funktioniert nicht",
        "a": "- Gleiche Frequenz wie am Empfänger eingestellt?\n- Batterien geladen?\n- Bei Beltpacks - Mikrofon tauschen?\n- Kommt Funksignal an (siehe RF-Skala am Empfänger)"
    },
    {
        "q": "Es pfeift/brummt laut (Rückkopplung)",
        "a": "- Lautstärke des Kanals mit der Rückkopplung verringern\n- zur Not den Master leiser machen"
    }
];

export const video = [{
        "q": "Der Beamer findet die Quelle nicht",
        "a": "- Erst den Laptop einschalten, dann den Beamer\n- zwischen HDMI und VGA wehcseln\n- wenn möglich"
    },
    {
        "q": "Wo finde ich die Video-Kabel",
        "a": "- Video-Kabel sind auf der rechten Bühnenseite\n- hinter der schwarzen Wand"
    },
    {
        "q": "Wie kriege ich den Beamer an",
        "a": "- Die Fernbedienung liegt in der Technik-Kammer"
    }
];

export const licht = [{
        "q": "Das Licht geht nicht an",
        "a": "- Not-Aus-Schalter außer Kraft gesetzt (wenn Lampen glimmen-ja, wenn nicht-nein)?\n- Grand-Master auf 100%?\n- Master A und Master B auf 100%?\n- Fader für Lampen auf gewünschter %-zahl?\n- DMX Kabel in Stagebox (Kanal 20)?"
    },
    {
        "q": "Eine Lampe leuchtet nicht",
        "a": "- Sicherungen noch drin (Siehe grauer Schrank Band-Raum 1)?\n- Stecker der Lampe eingesteckt? (zur Not Kabel verfolgen)\n- Leuchtmittel durchgebrannt? (siehe rigging)"
    },
    {
        "q": "Das Lichtpult geht nicht",
        "a": "- Ist die Licht-Steckdose an?\n- Steckt das Netzteil drinnen?"
    },
    {
        "q": "Ich möchte eigene/geliehene Geräte mit einbinden",
        "a": "- Wenn wenig Ahnung von der Technik, Techniker um Hilfe bitten\n- bei dimmbaren Leuchtmitteln ausschließlich Licht-Steckdosen benutzen\n- bei sonstigen Geräten, DMX-Kabel und Stromkabel verlegen und bei Anbringen and gegenständen, jetzt den Rigging-Teil aufrufen"
    }
];

export const rigging = [{
        "q": "Ich möchte einen Scheinwerfer/sonstiges ausrichtn (nicht umhängen)",
        "a": "!!!JEGLICHE ARBEITEN MINDESTENS ZU ZWEIT ERLEDIGEN!!!\n- die große Leiter nehmen, eine Person die Leiter halten lassen, und dann vorsichtig die Scheinwerfer ausrichten"
    },
    {
        "q": "Ich möchte etwas anbauen/abbauen/umhängen",
        "a": "!!!JEGLICHE ARBEITEN MINDESTENS ZU ZWEIT ERLEDIGEN!!!\n!!!BEI UNWISSEN TECHNIKER/SACHKUNDIGEN UM HILFE BITTEN!!!\n!!!ACHTUNG: Nach Anbau jeglicher Gegenstände die nicht auf dem Boden stehen, oder auf und über Kopfhöhe hängen, mit einem Safety (Drahtseil mit Verbindungselement) zusaätzlich sichern!!!\n- die große Leiter nehmen, eine Person die Leiter halten lassen, und dann vorsichtig die zu verichtenden Arbeiten beginnen\n- das Gewicht der Geräte nicht vernachlässigen!\n- am besten mit einem Seil die geräte von der zweiten Person hochziehen/ablassen/sichern lassen"
    // kommt dieser Teil nicht eher in "Erklärungen"?
}];

// Ausformulieren, wie bei einem Sachtext.