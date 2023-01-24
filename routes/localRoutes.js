const express = require("express");
const {
  getAllLocals,
  getOneLocal,
  createLocal,
  updateLocal,
  deleteLocal,
} = require("../controllers/localControllers");

const app = express.Router();

app.route("/").get(getAllLocals).post(createLocal);
app.route("/:id").get(getOneLocal).put(updateLocal).delete(deleteLocal);

module.exports = app;
