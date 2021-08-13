const express = require("express");
const request = require("request");
const https = require("https");

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/thememegame", function (req, res) {
  res.sendFile(__dirname + "/thememegame.html");
})

app.listen(process.env.PORT || 3000, function () {
  console.log("Server is running on port 3000");
});