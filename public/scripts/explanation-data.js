const audio = [{
    "t": "Das Einschalten der Technik",
    "p": "1. Die Tonsteckdose einschalten.\n2. Das Mischpult einschalten (sofern es sich nicht schon von selbst einschaltet).\n3. Lautsprecher vorne links und rechts einschalten (Schalter auf der Rückseite).\n4. Die Endstufe einschalten (im Rack neben dem Tonpult ganz unten eingebaut).\n"
}, {
    "t": "Der laufende Betrieb",
    "p": "Während der Benutzung der Tontechnik sollte so einiges beachtet werden. Je nach Tonpult ist das Layout anders, aber die grundlegenden Funktionen für den Betrieb sind bei allen gleich.\nZuerst sollte sichergestellt werden, dass der/die zugewiesene/n master auf '0dB' stehen. Dies bewirkt, dass der Input, den das Pult verarbeiten wird, auch aus den Lautsprechern ausgegeben werden kann.\nAls nächstes guckt man, ob ein Signal auf dem Kanal, auf dem es eingegeben wird ankommt. Hierzu sucht man sich den Kanal, auf dem man sein Gerät angeschlossen hat und gibt ein Signal ein (z.B. durch Abspielen von Musik, spielen eines Instruments oder Sprechen ins Mikrofon). Wenn man nun ein Tonsignal auf diesen Kanal schickt, sollte die 'Signal'-LED leuchten. Ist dies nicht der Fall, sollte an der Vorverstärkung gearbeitet werden (Gain/Lautstärke-Regler am jeweiligen Input-Gerät). Wenn die Signal-LED leuchtet (oder ggf. garnicht leuchtet, die Vorverstärkung ein bisschen runter drehen und dann...) kann vorsichtig der Fader des Kanalzugs nach oben geschoben werden und es sollte nun der Ton zu hören sein, wenn die Signal-eingabe nicht gestoppt wurde.\n"
}, {
    "t": "Das Ausschalten der Technik",
    "p": "1. Die Fader der Kanalzüge runterziehen (damit es beim nächsten Einschalten keine Rückkopplung gibt).\n2. Die Lautsprecher ausschalten.\n3. Die Endstufe ausschlalten\n4. --NUR BEIM DIGITALPULT-- Erst die Taste 'Home' drücken und dann auf dem Display 'Shutdown' drücken.\n5. Die Tonsteckdose ausschalten"
}];

const video = [{
    "t": "Lorem",
    "p": "Lorem ipsum dolor"
}];

const licht = [{
    "t": "Lorem",
    "p": "Lorem ipsum dolor"
}];

const rigging = [{
    "t": "Lorem",
    "p": "Lorem ipsum dolor"
}];

export let explanation;

switch (window.location.pathname.split("/")[1].split("-")[0]) {
    case "audio":
        explanation = audio;
        document.querySelector("h1").innerText = "Audio - Erklärung";
        break;
    case "video":
        explanation = video;
        document.querySelector("h1").innerText = "Video - Erklärung";
        break;
    case "licht":
        explanation = licht;
        document.querySelector("h1").innerText = "Licht - Erklärung";
        break;
    case "rigging":
        explanation = rigging;
        document.querySelector("h1").innerText = "Rigging - Erklärung";
        break;
    default:
        console.error("Couldn't fetch corresponding data.");
        break;
}