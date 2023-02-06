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
  getSampleLocals,
} = require("../controllers/localControllers");

const userAuth = require("../middlewares/requireAuth");
const localAuth = require("../middlewares/requireAuthLocal");

const app = express.Router();

app.route("/sample").get(getSampleLocals);
app.post("/login", loginLocal);

//signup
app.post("/signup", upload.single("pic"), signUpLocal);

app.use(userAuth);
app.use(localAuth);

app.route("/").get(getAllLocals).post(createLocal).put(updateLocal);

app.route("/:id").get(getOneLocal).delete(deleteLocal);
app.route("/:id/review").post(addReview);

module.exports = app;
