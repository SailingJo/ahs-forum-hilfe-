const express = require('express');
const router = express.Router();

router.get("/",  (_, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

router.get("/audio", (_, res) => {
    res.sendFile(__dirname + "/views/explanation.html");
});

router.get("/audio-faq", (_, res) => {
    res.sendFile(__dirname + "/views/faq.html");
});

router.get("/video", (_, res) => {
    res.sendFile(__dirname + "/views/explanation.html");
});

router.get("/video-faq", (_, res) => {
    res.sendFile(__dirname + "/views/faq.html");
});

router.get("/licht", (_, res) => {
    res.sendFile(__dirname + "/views/explanation.html");
});

router.get("/licht-faq", (_, res) => {
    res.sendFile(__dirname + "/views/faq.html");
});

router.get("/rigging", (_, res) => {
    res.sendFile(__dirname + "/views/explanation.html");
});

router.get("/rigging-faq", (_, res) => {
    res.sendFile(__dirname + "/views/faq.html");
});

router.get("*", (_, res) => {
    res.sendFile(__dirname + "/views/notfound.html")
});

module.exports = router;

// TODO: Also send data attributes to make client fetch right data. -> efficieny
// TODO: Also fix to ES6