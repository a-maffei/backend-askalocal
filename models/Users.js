const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const { Schema } = mongoose;

const UserSchema = new Schema({
  // name: {
  firstname: {
    type: String,
    require: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  // },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
    // validate: [validateEmail, "Please fill a valid email address"],
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  // address: {
  // street: {
  //   type: String,
  //   required: true,
  // },
  // zip: {
  //   type: String,
  //   required: true,
  // },
  city: {
    type: String,
    required: true,
  },
  // },
  pic: {
    type: String,
    required: true,
    /*     data: Buffer,
    contentType: String, */
  },
});

UserSchema.statics.signup = async function (
  email,
  password,
  city,
  // zip,
  // street,
  phone,
  firstname,
  lastname,
  pic
) {
  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }

  if (!email || !password) {
    throw Error;
  }

  if (!validator.isEmail(email)) {
    throw Error("email is not valid");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error(
      "Make sure to use at least 8 characters, one upper case letter, a number and a symbol"
    );
  }

  const salt = await bcrypt.genSalt(10);

  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    email,
    password: hash,
    city,
    // zip,
    // street,
    phone,
    firstname,
    lastname,
    pic,
  });

  return user;
};

UserSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Incorrect email");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Incorrect password");
  }
  return user;
};

module.exports = mongoose.model("users", UserSchema);
