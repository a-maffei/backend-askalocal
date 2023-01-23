const Users = require("../models/Users.js");

const getAllUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getOneUser = async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const createUser = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      email,
      password,
      phone,
      street,
      zip,
      city,
      pic,
    } = req.body;
    const user = await Users.create({
      firstname,
      lastname,
      email,
      password,
      phone,
      street,
      zip,
      city,
      pic,
    });
    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const updateUser = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      email,
      password,
      phone,
      street,
      zip,
      city,
      pic,
    } = req.body;
    const user = await Users.findByIdAndUpdate(
      { _id: req.params.id },
      { firstname: firstname },
      { lastname: lastname },
      { email: email },
      { password: password },
      { phone: phone },
      { street: street },
      { zip: zip },
      { city: city },
      { pic: pic },
      { new: true }
    );
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await Users.findByIdAndDelete(req.params.id);
    res.status(200).json({
      response: "User deleted successufully",
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
};
