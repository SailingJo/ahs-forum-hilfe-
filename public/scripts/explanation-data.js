const audio = [{
    "t": "Lorem",
    "p": "Lorem ipsum dolor"
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