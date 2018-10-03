

const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  emailAddress: String,
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  userImage: String,
  userLocation: String,
  role: {
      type: String,
      enum: ["admin", "user"],
      default: "user"
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;