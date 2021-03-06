const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const doctorSchema = new Schema({
  docName:      String,
  docImage:     String,
  specialties:  [String],
  docDetails:   String,
  avgRating:    Number,
  docComments:  [ {type: Schema.Types.ObjectId, ref: "Comment", default: []} ],
  docCity:      String,
  docState:     String,
  status:       {type: Boolean, default: false},
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;