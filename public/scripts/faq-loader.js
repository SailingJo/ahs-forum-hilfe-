import { faq } from "./faq-data.js";

document.getElementById("search-bar").addEventListener("keyup", (event) => {
    if (event.key == "Enter") {
        event.preventDefault();

        document.getElementById("search-button").click();
    }
});

document.getElementById("search-button").addEventListener("click", () => {
    const value = document.getElementById("search-bar").value;
    const link = `${location.origin + location.pathname}`;

    location.replace(location.href == link ? `${location.href}?filter=${value}` : `${link}?filter=${value}`);
});

document.getElementById("search-clearer").addEventListener("click", () => {
    location.replace(location.origin + location.pathname);
});

const objectHasFilter = (object, filter) => {
    if (!filter) return true;
    if (object["q"].toLowerCase().includes(filter) || object["a"].toLowerCase().includes(filter)) return true;
}

const getParameter = (param) => {
    const url = new URL(location.href);

    return url.searchParams.get(param);
}

const panelCreate = (faqArray) => {
    const filter = location.search == "" ? null : getParameter("filter").toLowerCase();

    for (let obj of faqArray) {
        if (!objectHasFilter(obj, filter)) continue;

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

    if (document.querySelector("#list").childElementCount == 1) {
        document.querySelector("#empty").classList.remove("hidden");
    }
}

panelCreate(faq);