const express = require("express");
const upload = require("../multerConfig");

const {
  getAllLocals,
  getOneLocal,
  createLocal,
  updateLocal,
  deleteLocal,
  loginLocal,
  signUpLocal,
  addReview,
} = require("../controllers/localControllers");

const app = express.Router();

app.route("/").get(getAllLocals).post(createLocal).put(updateLocal);
app.route("/:id").get(getOneLocal).delete(deleteLocal);
app.route("/:id/review").post(addReview);

app.post("/login", loginLocal);

//signup
app.post("/signup", upload.single("pic"), signUpLocal);

module.exports = app;
