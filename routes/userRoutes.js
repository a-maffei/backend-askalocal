const express = require("express");

const app = express.Router();

const {
  loginUser,
  signUpUser,
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController.js");

app.route("/").get(getAllUsers).post(createUser);

app.route("/:id").get(getOneUser).put(updateUser).delete(deleteUser);

//login
app.post("/login", loginUser);

//signup
app.post("/signup", signUpUser);

module.exports = app;
