import { explanation } from "./explanation-data.js";

const contentCreate = (explanationArray) => {
    for (let obj of explanationArray) {
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