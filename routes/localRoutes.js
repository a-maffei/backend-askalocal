const express = require("express");
const {
  getAllLocals,
  getOneLocal,
  createLocal,
  updateLocal,
  deleteLocal,
  addReview,
} = require("../controllers/localControllers");

const app = express.Router();

app.route("/").get(getAllLocals).post(createLocal);
app.route("/:id").get(getOneLocal).put(updateLocal).delete(deleteLocal);
app.route("/:id/review").post(addReview);

module.exports = app;
