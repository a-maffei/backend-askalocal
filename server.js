const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./dbinit");
const { default: mongoose } = require("mongoose");
const morgan = require("morgan");

const userRoutes = require("./routes/userRoutes");

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true }));
app.use(morgan("dev"));

connectDB();

app.get("/", (req, res) => res.send("Welcome to Ask A Local"));

app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Listening to locals speaking at port ${PORT}`);
});
