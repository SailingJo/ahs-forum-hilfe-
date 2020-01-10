var express = require('express');
var router = express.Router();

router.get("/", function (_, res) {
    res.sendFile(__dirname + "/views/index.html");
});

router.get("/audio", function (_, res) {
    res.sendFile(__dirname + "/views/audio/tutorial.html");
});

router.get("/audio-faq", function (_, res) {
    res.sendFile(__dirname + "/views/audio/faq.html");
});

router.get("/video", function (_, res) {
    res.sendFile(__dirname + "/views/video/tutorial.html");
});

router.get("/video-faq", function (_, res) {
    res.sendFile(__dirname + "/views/video/faq.html");
});

router.get("/licht", function (_, res) {
    res.sendFile(__dirname + "/views/licht/tutorial.html");
});

router.get("/licht-faq", function (_, res) {
    res.sendFile(__dirname + "/views/licht/faq.html");
});

router.get("/rigging", function (_, res) {
    res.sendFile(__dirname + "/views/rigging/tutorial.html");
});

router.get("/rigging-faq", function (_, res) {
    res.sendFile(__dirname + "/views/rigging/faq.html");
});

module.exports = router;