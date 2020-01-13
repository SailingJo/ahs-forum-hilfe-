const audio_faq = [{
        "q": "Frage 1",
        "a": "Lorem Ipsum 1"
    },
    {
        "q": "Frage 2",
        "a": "Lorem Ipsum 2"
    },
    {
        "q": "Frage 3",
        "a": "Lorem Ipsum 3"
    }
];

const video_faq = [{
        "q": "Frage 1",
        "a": "Lorem Ipsum 1"
    },
    {
        "q": "Frage 2",
        "a": "Lorem Ipsum 2"
    },
    {
        "q": "Frage 3",
        "a": "Lorem Ipsum 3"
    }
];

const licht_faq = [{
        "q": "Frage 1",
        "a": "Lorem Ipsum 1"
    },
    {
        "q": "Frage 2",
        "a": "Lorem Ipsum 2"
    },
    {
        "q": "Frage 3",
        "a": "Lorem Ipsum 3"
    }
];

const rigging_faq = [{
        "q": "Frage 1",
        "a": "Lorem Ipsum 1"
    },
    {
        "q": "Frage 2",
        "a": "Lorem Ipsum 2"
    },
    {
        "q": "Frage 3",
        "a": "Lorem Ipsum 3"
    }
];

window.onloadend = () => {
    const faq;

    switch (window.location.pathname.split("/")[1].split("-")[0]) {
        case "audio":
            faq = audio_faq;
            break;
        case "video":
            faq = video_faq;
            break;
        case "licht":
            faq = licht_faq;
            break;
        case "rigging":
            faq = rigging_faq;
            break;
    }

    for (let obj of faq) {
        // TODO: this

        document.querySelector("#list").append(`<button class="dropdown">${obj["q"]}</button>`);
        document.querySelector("#list").append(`<div class="panel"></div>`);
        document.querySelector("div").append(`<p>${obj["a"]}</p>`);
    }
}

const drops = document.getElementsByClassName("dropdown");

for (let i = 0; i < drops.length; i++) {
    drops[i].addEventListener("click", (event) => {
        event.target.classList.toggle("active");

        let panel = event.target.nextElementSibling;

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}