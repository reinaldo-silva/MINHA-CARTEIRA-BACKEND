const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/minhacarteira", {
  useNewUrlParser: true,
  useUnifieldTopology: true,
});

module.exports = mongoose.connection;
