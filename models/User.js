const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  emailAddress:  String,
  username:      { type: String, required: true, index: { unique: true }},
  password:      { type: String, required: true, minlength: 6 },
  firstName:     String,
  lastName:      String,
  userImage:     { type: String, default: "./images/placeholder.jpg" },
  userLocation:  String,
  role:          { type: String, enum: ["admin", "user"], default: "user" },
});

const User = mongoose.model("User", userSchema);

module.exports = User;