const express = require("express");
const multer = require("multer");
const upload = require("../multerConfig");

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
app.post("/signup", upload.single("pic"), signUpUser);

/* app.post("/pic", upload.single("pic"), picUpload);
 */
module.exports = app;
