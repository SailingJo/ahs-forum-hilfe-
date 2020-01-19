const ip = require("ip");
const colors = require("colors");
const express = require("express");
const app = express();

const port = 2000
const router = require("./router");

app.use(express.static("public"));
app.use("/", router);

app.listen(port, console.log(colors.green(`Forum Technikhilfe läuft auf http://${ip.address()}:${port}/`)));