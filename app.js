const fs = require("fs");
const ip = require("ip");
const colors = require("colors");
const express = require("express");
const app = express();

const port = 2000
const router = require("./router");

const readStats = () => {
  let result = {};

  try {
    result = JSON.parse(fs.readFileSync("stats.json"));
  } catch (err) {
    console.error(err);
  }

  return result;
}

const dumpStats = (stats) => {
  try {
    fs.writeFileSync("stats.json", JSON.stringify(stats), {
      flag: 'w+'
    });
  } catch (err) {
    console.error(err);
  }
}

const _chooseStatusCode = (statusCode) => {
  switch (statusCode.charAt(0)) {
    case "1":
      return colors.blue(statusCode);
    case "2":
      return colors.green(statusCode);
    case "3":
      return colors.yellow(statusCode);
    case "4":
      return colors.red(statusCode);
    case "5":
      return colors.red(statusCode);
  }
}

const middleware = (req, res, next) => {
  res.on("finish", () => {
    let statusCode = _chooseStatusCode(res.statusCode.toString());

    const stats = readStats();
    const event = `${req.method} ${statusCode} ${req.originalUrl}`;

    console.log(event);

    if (req.originalUrl == "/") {
      stats[event] = stats[event] ? stats[event] + 1 : 1;
      dumpStats(stats);
    }
  });
  next();
}

app.use(middleware)
app.use(express.static(__dirname + "/public"));
app.use("/", router);

app.listen(port, console.log(colors.green(`Hilfe Fuchs läuft auf http://${ip.address()}:${port}/`)));