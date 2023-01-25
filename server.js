const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./dbinit");
const { default: mongoose } = require("mongoose");
const multer = require("multer");

const morgan = require("morgan");

const userRoutes = require("./routes/userRoutes");
const localRoutes = require("./routes/localRoutes");

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true }));
app.use(morgan("dev"));
app.use("/uploads", express.static("./uploads"));
// morgan.token("body", (req) => {
//   return JSON.stringify(req.body);
//});
// app.use(
//   morgan(":method :url :status :body :response-time ms - :res[content-length]")
// );

connectDB();

app.get("/", (req, res) => res.send("Welcome to Ask A Local"));

app.use("/local", localRoutes);
app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Listening to locals speaking at port ${PORT}`);
});
