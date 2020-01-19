import * as explanations from "./explanation-data.js";

let explanation;

switch (window.location.pathname.split("/")[1].split("-")[0]) {
    case "audio":
        explanation = explanations.audio;
        document.querySelector("h1").innerText = "Audio - Erklärung";
        break;
    case "video":
        explanation = explanations.video;
        document.querySelector("h1").innerText = "Video - Erklärung";
        break;
    case "licht":
        explanation = explanations.licht;
        document.querySelector("h1").innerText = "Licht - Erklärung";
        break;
    case "rigging":
        explanation = explanations.rigging;
        document.querySelector("h1").innerText = "Rigging - Erklärung";
        break;
}

const contentCreate = (explanationray) => {
    for (let obj of explanationray) {
        let t = obj["t"];
        let ref = `${t.toLowerCase().replace(" ", "-")}`;

        let title = document.createElement("h2");
        title.innerText = t;
        title.id = ref;

        let anchor = document.createElement("a");
        anchor.innerText = t;
        anchor.href = `#${ref}`;

        let paragraph = document.createElement("p");
        paragraph.innerText = obj["p"];

        document.getElementById("list").appendChild(title);
        document.getElementById("list").appendChild(paragraph);
        document.getElementById("contents").appendChild(anchor);
    }
}

contentCreate(explanation);