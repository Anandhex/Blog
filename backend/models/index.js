const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/blog", {
  keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports.User = require("./User");
module.exports.Comment = require("./Comment");
module.exports.Post = require("./Post");
