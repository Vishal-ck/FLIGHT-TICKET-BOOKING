const mongoose = require("mongoose");
const express = require("express");

const uri =
  "mongodb+srv://venomdgvish:Vishal123@flightticketbooking.qenplvv.mongodb.net/?retryWrites=true&w=majority";

const connectDb = async () => {
  //console.log("connection iniziated");
  try {
    const conn = await mongoose.connect(uri, { useNewUrlParser: true });
    console.log(`MongoDB Connected`);
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = connectDb;
