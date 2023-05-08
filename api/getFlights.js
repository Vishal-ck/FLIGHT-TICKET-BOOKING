const express = require("express");
const router = express.Router();
const Flight = require("../dataBase/schema/flightSchema");

//To GET ALL Flights Avaliable

router.get("/flights", async (req, res) => {
  try {
    const flights = await Flight.find();
    res.json(flights);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//USER Access to search flights based on Date and Time

router.get("/flights/search", async (req, res) => {
  const { date, time } = req.query;
  const departureTime = new Date(`${date}T${time}:00.000Z`);
  //console.log(date + " " + time + " " + departureTime + " ");
  try {
    const flights = await Flight.find({ departureTime: departureTime });
    res.send(flights);
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
