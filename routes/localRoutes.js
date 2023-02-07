const express = require("express");
const upload = require("../multerConfig");

const {
  getAllLocals,
  getOneLocal,
  createLocal,
  updateLocal,
  deleteLocal,
  addReview,
  loginLocal,
  signUpLocal,
  getOneLocalWithParams,
} = require("../controllers/localControllers");

const app = express.Router();

app.route("/").get(getAllLocals).post(createLocal);
app.route("/local/:userId").get(getOneLocalWithParams);
app.route("/:id").get(getOneLocal).put(updateLocal).delete(deleteLocal);
app.route("/:id/review").post(addReview);

app.post("/login", loginLocal);

//signup
app.post("/signup", upload.single("pic"), signUpLocal);

module.exports = app;
