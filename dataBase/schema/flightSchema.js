const mongoose = require("mongoose");
const flightSchema = new mongoose.Schema(
  {
    flightNumber: {
      type: String,
      required: true,
      unique: true,
    },
    source: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    departureTime: {
      type: Date,
      required: true,
    },
    arrivalTime: {
      type: Date,
      required: true,
    },
    seatsAvailable: {
      type: Number,
      default: 60, //default value 60 as specified
    },
  },
  { versionKey: false }
);

const Flight = mongoose.model("Flight", flightSchema);
module.exports = Flight;
