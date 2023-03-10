const Local = require("../models/Locals");
const jwt = require("jsonwebtoken");

const createToken = (id, isLocal) => {
  return jwt.sign({ id, isLocal }, process.env.SECRET, { expiresIn: "1h" });
};

const loginLocal = async (req, res) => {
  const { email, password } = req.body;

  try {
    const local = await Local.login(email, password);
    //create token
    const token = createToken(local.id, local.isLocal);
    console.log("LOCAL CONTR", local);
    res.status(200).json({
      token,
      email,
      firstname: local.firstname,
      lastname: local.lastname,
      city: local.city,
      pic: local.pic,
      bio: local.bio,
      categories: {
        emailP: {
          textfield: local.categories.emailP.textfield,
          price: local.categories.emailP.price,
        },
        callP: {
          textfield: local.categories.callP.textfield,
          price: local.categories.callP.price,
        },
        flatP: {
          textfield: local.categories.flatP.textfield,
          price: local.categories.flatP.price,
        },
        appointmentP: {
          textfield: local.categories.appointmentP.textfield,
          price: local.categories.appointmentP.price,
        },
        serviceP: {
          textfield: local.categories.serviceP.textfield,
          price: local.categories.serviceP.price,
        },
        interviewP: {
          textfield: local.categories.interviewP.textfield,
          price: local.categories.interviewP.price,
        },
      },
      isComplete: local.isComplete,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signUpLocal = async (req, res) => {
  const {
    email,
    password,
    city,
    phone,
    firstname,
    lastname,
    isComplete,
    isLocal,
  } = req.body;
  const pic = req.file.path;

  try {
    const local = await Local.signup(
      email,
      password,
      city,
      phone,
      firstname,
      lastname,
      pic,
      isComplete,
      isLocal
    );
    console.log("2ndlocal", local);
    //create token
    const token = createToken(local.id, local.isLocal);
    res.status(200).json({
      email: local.email,
      token,
      pic: local.pic,
      firstname: local.firstname,
      lastname: local.lastname,
      city: local.city,
      isComplete: local.isComplete,
      isLocal,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllLocals = async (req, res) => {
  try {
    const locals = await Local.find({ isComplete: true });
    res.status(200).json({ success: true, locals });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

const getSampleLocals = async (req, res) => {
  try {
    const locals = await Local.aggregate([
      { $match: { isComplete: true } },
    ]).sample(15);
    res.status(200).json({ success: true, locals });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

const getOneLocal = async (req, res) => {
  try {
    const local = await Local.findById(req.params.id);
    res.status(200).json({ success: true, local });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

const getOneLocalWithParams = async (req, res) => {
  try {
    /*     console.log("QUERY", req.query);
    const userId = req.query.userId;
    console.log("USER ID", userId); */
    console.log("OLA", req.params);
    const user = await Local.findById(req.params.userId);
    res.status(200).json({
      user,
    });
  } catch (error) {
    res.status(500).json({ error: error.message ? error.message : error });
  }
};

const createLocal = async (req, res) => {
  const {
    firstname,
    lastname,
    email,
    password,
    phone,
    city,
    pic,
    bio,
    language,
    emailP,
    callP,
    flatP,
    appointmentP,
    serviceP,
    interviewP,
    isComplete,
  } = req.body;

  try {
    const newLocal = await Local.create({
      firstname,
      lastname,
      email,
      password,
      phone,
      city,
      pic,
      bio,
      language,
      emailP,
      callP,
      flatP,
      appointmentP,
      serviceP,
      interviewP,
      isComplete,
      isLocal: true,
    });
    res.status(201).json({ success: true, newLocal });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

const updateLocal = async (req, res) => {
  const {
    firstname,
    lastname,
    email,
    password,
    phone,
    city,
    pic,
    bio,
    language,
    emailP,
    callP,
    flatP,
    appointmentP,
    serviceP,
    interviewP,
    isComplete,
  } = req.body;
  console.log(callP);
  try {
    const updatedLocal = await Local.updateOne(
      { email: email },
      {
        $set: {
          firstname,
          lastname,
          email,
          password,
          phone,
          city,
          pic,
          bio,
          language,
          categories: {
            emailP,
            callP,
            flatP,
            appointmentP,
            serviceP,
            interviewP,
          },
          isComplete,
        },
      }
    );
    res.status(200).json({
      firstname,
      lastname,
      email,
      password,
      phone,
      city,
      pic,
      bio,
      language,
      categories: {
        emailP,
        callP,
        flatP,
        appointmentP,
        serviceP,
        interviewP,
      },
      isComplete,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

const deleteLocal = async (req, res) => {
  try {
    const deletedLocal = await Local.findByIdAndDelete(req.params.id);
    res.status(200).json({
      response: "User deleted successufully",
      deletedLocal,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

const addReview = (req, res) => {
  Local.findById(req.params.id, (err, local) => {
    if (err) return res.status(500).send(err);
    local.reviews.push(req.body.review);
    local.ratings.push(req.body.rating);
    local.save((err, updateLocal) => {
      if (err) return res.status(500).send(err);
      res.send(updateLocal);
    });
  });
};

module.exports = {
  getAllLocals,
  getSampleLocals,
  getOneLocal,
  createLocal,
  updateLocal,
  deleteLocal,
  loginLocal,
  signUpLocal,
  addReview,
  getOneLocalWithParams,
};
