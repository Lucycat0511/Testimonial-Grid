const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.listen("3000", (res, req) => {
  console.log("server up");
});
