const express = require("express");
const router = express.Router();
const Flight = require("../dataBase/schema/flightSchema");

//ADMIN Access to Add Flights
router.post("/flights", async (req, res) => {
  //Acquring data from the request body
  const flight = new Flight({
    flightNumber: req.body.flightNumber,
    source: req.body.source,
    destination: req.body.destination,
    departureTime: req.body.departureTime,
    arrivalTime: req.body.arrivalTime,
    seatsAvailable: req.body.seatsAvailable,
  });

  //Adding New Flight details
  try {
    const newFlight = await flight.save();
    res.send(newFlight.toJSON());
  } catch (err) {
    console.log(err);
    res.send({ message: err.message });
  }
});
module.exports = router;
