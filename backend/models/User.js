var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }]
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
