const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const doctorSchema = new Schema({
  docName: String,
  docImage: String,
  docLocation: [{type: Schema.Types.ObjectId, ref: "Location"}],
  specialties: [{ type: Array }],
  docDetails: String,
  avgRating: Number,
  docComments: [{type: Schema.Types.ObjectId, ref: "Comment"}],
  status: {
      type: Boolean,
      default: true,
    },
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;