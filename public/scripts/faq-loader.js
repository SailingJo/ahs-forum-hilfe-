import * as faqs from "./faq-data.js";

let faq;

switch (window.location.pathname.split("/")[1].split("-")[0]) {
    case "audio":
        faq = faqs.audio;
        document.title = "Audio - FAQ";
        break;
    case "video":
        faq = faqs.video;
        document.title = "Video - FAQ";
        break;
    case "licht":
        faq = faqs.licht;
        document.title = "Licht - FAQ";
        break;
    case "rigging":
        faq = faqs.rigging;
        document.title = "Rigging - FAQ";
        break;
}

const panelCreate = (faqray) => {
    for (let obj of faqray) {
        let button = document.createElement("button");
        button.classList.add("dropdown");
        button.innerText = obj["q"];

        button.addEventListener("click", (event) => {
            event.target.classList.toggle("active");
    
            let panel = event.target.nextElementSibling;

            panel.style.maxHeight = (panel.style.maxHeight ? null : `${panel.scrollHeight}px`);
        });

        let div = document.createElement("div");
        div.classList.add("panel");

        let p = document.createElement("p");
        p.innerText = obj["a"];

        document.querySelector("#list").append(button);
        document.querySelector("#list").append(div);
        div.append(p);
    }
}

panelCreate(faq);