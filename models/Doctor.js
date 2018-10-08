const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const doctorSchema = new Schema({
  docName:      String,
  docImage:     { type: String, default: "./images/placeholder.jpg" },
  specialties:  [String],
  docDetails:   String,
  avgRating:    Number,
  locationID:   { type: Schema.Types.ObjectId, ref: "Location" },
  docComments:  [ {type: Schema.Types.ObjectId, ref: "Comment", default: []} ],
  status:       {type: Boolean, default: false},
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;