const Local = require("../models/Locals");

const loginLocal = async (req, res) => {
  const { email, password } = req.body;

  try {
    const local = await Local.login(email, password);
    //create token
    const token = createToken(local._id);

    res.status(200).json({
      email,
      token,
      pic: local.pic,
      firstname: local.firstname,
      lastname: local.lastname,
      city: local.city,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signUpLocal = async (req, res) => {
  const { email, password, city, phone, firstname, lastname } = req.body;
  const pic = req.file.path;
  console.log(req);
  try {
    const local = await Local.signup(
      email,
      password,
      city,
      phone,
      firstname,
      lastname,
      pic
    );
    console.log(local);
    //create token
    const token = createToken(local._id);
    res.status(200).json({
      email,
      token,
      pic: local.pic,
      firstname: local.firstname,
      lastname: local.lastname,
      city: local.city,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllLocals = async (req, res) => {
  try {
    const locals = await Local.find();
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
  } = req.body;

  try {
    const updatedLocal = await Local.updateOne(
      { _id: req.params.id },
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
          emailP,
          callP,
          flatP,
          appointmentP,
          serviceP,
          interviewP,
        },
      }
    );
    res.status(200).json({
      success: true,
      updatedLocal,
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

module.exports = {
  getAllLocals,
  getOneLocal,
  createLocal,
  updateLocal,
  deleteLocal,
  loginLocal,
  signUpLocal,
};
