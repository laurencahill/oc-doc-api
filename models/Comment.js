const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const commentSchema = new Schema({
  author:      { type:Schema.Types.ObjectId, ref: "User" },
  uploadDate:  {type: String, default: new Date().toLocaleDateString()},
  visitDate:   {type: String, default: new Date().toLocaleDateString()},
  rating:      { type: Number, min: 0, max: 5, required: true },
  visitReason: String,
  comment:     String,
  doctorID:    { type: Schema.Types.ObjectId, ref: "Doctor" },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;