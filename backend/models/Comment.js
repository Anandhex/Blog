var mongoose = require("mongoose");

var CommentSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId },
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    text: { type: String, required: true }
  },
  { timestamps: true }
);

var Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;
