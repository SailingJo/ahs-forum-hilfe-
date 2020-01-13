const express = require('express');
const router = express.Router();

router.get("/", function (_, res) {
    res.sendFile(__dirname + "/views/index.html");
});

router.get("/audio", function (_, res) {
    res.sendFile(__dirname + "/views/explanation.html");
});

router.get("/audio-faq", function (_, res) {
    res.sendFile(__dirname + "/views/faq.html");
});

router.get("/video", function (_, res) {
    res.sendFile(__dirname + "/views/explanation.html");
});

router.get("/video-faq", function (_, res) {
    res.sendFile(__dirname + "/views/faq.html");
});

router.get("/licht", function (_, res) {
    res.sendFile(__dirname + "/views/explanation.html");
});

router.get("/licht-faq", function (_, res) {
    res.sendFile(__dirname + "/views/faq.html");
});

router.get("/rigging", function (_, res) {
    res.sendFile(__dirname + "/views/explanation.html");
});

router.get("/rigging-faq", function (_, res) {
    res.sendFile(__dirname + "/views/faq.html");
});

module.exports = router;

// TODO: Also send data attributes to make client fetch right data.