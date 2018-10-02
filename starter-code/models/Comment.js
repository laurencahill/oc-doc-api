const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const commentSchema = new Schema({
  owner:{ type:Schema.Types.ObjectId, ref: "User" },
  visitDate: Date,
  rating: Number,
  visitReason: String,
  comment: String,
});

const Doctor = mongoose.model("Comment", commentSchema);

module.exports = Comment;