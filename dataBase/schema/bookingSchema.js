const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    flight: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Flight",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    seatsBooked: {
      type: Number,
      required: true,
    },
    bookingTime: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  { versionKey: false }
);

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
