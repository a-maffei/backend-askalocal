const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = async () => {
  const url = process.env.MONGO_URI;
  const conn = await mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log(`MongoDB connected: ${conn.connection.host}`);
};

// Get default connection
// const db = mongoose.connection
// Bind connection to error event (to get notification of connection errors)
// db.on("error", console.error.bind(console, "MongoDB connection error:"));

module.exports = connectDB;
