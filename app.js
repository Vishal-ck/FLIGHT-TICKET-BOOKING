const express = require("express");
const connectDb = require("./dataBase/db");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = express.Router();
const getFlights = require("./api/getFlights");
const postFlights = require("./api/postFlights");
const deleteFlight = require("./api/deleteFlight");
const booking = require("./api/booking");
const app = express();
connectDb();
app.use(cors());
app.use(bodyParser.json());
app.use("/", getFlights);
app.use("/", postFlights);
app.use("/", deleteFlight);
app.use("/", booking);
app.listen(3000, () => {
  console.log("Server started...");
});

module.exports = router;
