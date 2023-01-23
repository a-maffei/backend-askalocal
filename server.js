const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
// const mongoose = require('mongoose')
const connectDB = require("./dbinit");
const { default: mongoose } = require("mongoose");

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true }));

connectDB();

app.get("/", (req, res) => res.send("Welcome to Ask A Local"));

app.listen(PORT, () => {
  `Listening to locals speaking at port ${PORT}`;
});
