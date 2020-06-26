const express = require('express');
const router = express.Router();

router.get("/", (_, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

router.get(["/explanation/audio", "/explanation/video", "/explanation/licht", "/explanation/rigging"], (_, res) => {
  res.sendFile(__dirname + "/views/explanation.html");
});

router.get(["/faq/audio", "/faq/video", "/faq/licht", "/faq/rigging"], (_, res) => {
  res.sendFile(__dirname + "/views/faq.html");
});

// Fix
router.get(["/other/vokabular"], (_, res) => {
  res.sendFile(__dirname + "/views/faq.html");
}),

router.get("*", (_, res) => {
  res.sendFile(__dirname + "/views/notfound.html")
});

module.exports = router;