const express = require("express");
const Booking = require("../dataBase/schema/bookingSchema");
const Flight = require("../dataBase/schema/flightSchema");
const { default: mongoose } = require("mongoose");
const router = express.Router();

//USER Access to make bookings based of date and time

router.post("/bookings/:flightNumber/:date/:time", async (req, res) => {
  const { flightNumber, date, time } = req.params;
  const { seatsBooked, userId } = req.body;

  try {
    //Acquiring the flight obj from the DB
    const flight = await Flight.findOne({ flightNumber });

    if (!flight) {
      return res.send({ message: "Flight not found" });
    }

    //Checks for the availablity of seats
    if (flight.seatsAvailable < seatsBooked) {
      return res.send({ message: "Not enough seats available" });
    }
    //Creating a New Booking
    const booking = new Booking({
      flight: flight._id,
      user: userId,
      seatsBooked,
    });

    await booking.save();

    // Update seatsAvailable
    flight.seatsAvailable -= seatsBooked;
    await flight.save();

    res.send({ message: "Booking successful", booking });
  } catch (err) {
    console.log(err);
    res.send({ message: "Error booking flight" });
  }
});

//USER Access to list all the booking by that user
router.get("/myBookings/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const myBookings = await Booking.find({ user: userId });
    if (!myBookings) {
      res.send("No Bookings found");
    }
    res.send(myBookings);
  } catch (error) {
    res.send(error.message);
  }
});

//ADMIN Access to list all the bookings based on FlightNumber and Time

router.get("/bookings/:flightNumber/:date/:time", async (req, res) => {
  const { flightNumber, date, time } = req.params;
  const departureTime = new Date(`${date}T${time}:00.000Z`);

  try {
    const flight = await Flight.findOne({ flightNumber });
    if (!flight) {
      return res.send({ message: "Flight not found" });
    }

    const bookings = await Booking.find({
      flight: flight._id,
      bookingTime: { $gte: departureTime },
    });

    res.send(bookings);
  } catch (err) {
    console.log(err);
    res.send({ message: "Error getting bookings" });
  }
});


module.exports = router;
