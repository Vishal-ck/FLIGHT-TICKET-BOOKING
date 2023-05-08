const express = require("express");
const router = express.Router();
const Flight = require("../dataBase/schema/flightSchema");

//ADMIN Access to Delete a flight based on the flight number
router.delete("/flights/delete/:flightNumber", async (req, res) => {
  const { flightNumber } = req.params;
  try {
    const removedFlight = await Flight.deleteOne({
      flightNumber: flightNumber,
    });
    if (removedFlight.deletedCount >= 1) {
      res.send("Delete success");
    } else {
      res.send("Delete falied filght not found");
    }
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
