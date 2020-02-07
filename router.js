const express = require('express');
const router = express.Router();

router.get("/", (_, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

router.get(["/audio-explanation", "/video-explanation", "/licht-explanation", "/rigging-explanation"], (_, res) => {
  res.sendFile(__dirname + "/views/explanation.html");
});

router.get(["/audio-faq", "/video-faq", "/licht-faq", "/rigging-faq", "/vokabular-faq"], (_, res) => {
  res.sendFile(__dirname + "/views/faq.html");
});

router.get("*", (_, res) => {
  res.sendFile(__dirname + "/views/notfound.html")
});

module.exports = router;