const express = require("express");
const {
  getAllLocals,
  getOneLocal,
  createLocal,
  updateLocal,
  deleteLocal,
} = require("../controllers/localControllers");

const app = express.Router();

app.route("/").get(getAllLocals).post(createLocal).put(updateLocal);
app.route("/:id").get(getOneLocal).delete(deleteLocal);

module.exports = app;
