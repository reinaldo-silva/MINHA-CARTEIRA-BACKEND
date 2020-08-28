const express = require("express");

const server = express();

server.get("/", function (req, res) {
  res.send("O pai ta on");
});

server.listen(3333, function () {
  console.log("O PAI TÁ ON!");
});
