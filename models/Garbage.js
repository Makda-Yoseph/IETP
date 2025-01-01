const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GarbageSchema = new Schema({
  locationID: {
    type: String,
    required: true,
  },
  level1: {
    type: Number,
    required: true,
  },
  level2: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

const Garbage = mongoose.model("Garbage", GarbageSchema);

module.exports = Garbage;
