const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const locationSchema = new Schema({
  locationName: String,
  address:      String,
  city:         [ String ],
  state:        String,
  zip:          Number,
  phone:        String,
  url:          String,
  doctorID:   [ { type:Schema.Types.ObjectId, ref: "Doctor" } ],
  status:     { type: Boolean, default: true },
});

const Location = mongoose.model("Location", locationSchema);

module.exports = Location;