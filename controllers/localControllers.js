const Local = require("../models/Locals");

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
};
