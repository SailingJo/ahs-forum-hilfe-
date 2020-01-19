const express = require('express');
const router = express.Router();

router.get("/",  (_, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

router.get(["/audio", "/video", "/licht", "/rigging"], (_, res) => {
    res.sendFile(__dirname + "/views/explanation.html");
});

router.get(["/audio-faq", "/video-faq", "/licht-faq", "/rigging-faq"], (_, res) => {
    res.sendFile(__dirname + "/views/faq.html");
});

router.get("*", (_, res) => {
    res.sendFile(__dirname + "/views/notfound.html")
});

module.exports = router;