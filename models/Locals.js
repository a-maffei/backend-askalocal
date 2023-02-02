const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const { Schema } = mongoose;

const LocalSchema = new Schema({
  firstname: {
    type: String,
    require: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  /*   street: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    required: true,
  }, */
  city: {
    type: String,
    required: true,
  },
  pic: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
  language: {
    type: String,
  },
  reviews: {
    type: [String],
  },
  ratings: {
    type: [Number],
  },
  categories: {
    emailP: {
      category: {
        type: String,
      },
      textfield: {
        type: String,
        max: 50,
      },
      price: {
        type: Number,
      },
    },
    callP: {
      category: {
        type: String,
      },
      textfield: {
        type: String,
        max: 50,
      },
      price: {
        type: Number,
      },
    },
    flatP: {
      category: {
        type: String,
      },
      textfield: {
        type: String,
        max: 50,
      },
      price: {
        type: Number,
      },
    },
    appointmentP: {
      category: {
        type: String,
      },
      textfield: {
        type: String,
        max: 50,
      },
      price: {
        type: Number,
      },
    },
    serviceP: {
      category: {
        type: String,
      },
      textfield: {
        type: String,
        max: 50,
      },
      price: {
        type: Number,
      },
    },
    interviewP: {
      category: {
        type: String,
      },
      textfield: {
        type: String,
        max: 50,
      },
      price: {
        type: Number,
      },
    },
  },
  isComplete: {
    type: Boolean,
  },
});

/* FILTERS

OFFERING TYPE
“Emails review”
“Phone calls”
“Flat viewings”
“Official appointments”
“Service providers”
“Interviews help”


LANGUAGE
"German"
"Spanish"
"French"

CITY
Berlin
Munich
Madrid
Barcelona
Paris
 */

LocalSchema.statics.signup = async function (
  email,
  password,
  city,
  // zip,
  // street,
  phone,
  firstname,
  lastname,
  pic,
  isComplete
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

  const local = await this.create({
    email,
    password: hash,
    city,
    // zip,
    // street,
    phone,
    firstname,
    lastname,
    pic,
    isComplete,
  });

  return local;
};

LocalSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  const local = await this.findOne({ email });

  if (!local) {
    throw Error("Incorrect email");
  }

  const match = await bcrypt.compare(password, local.password);

  if (!match) {
    throw Error("Incorrect password");
  }
  return local;
};

module.exports = mongoose.model("locals", LocalSchema);
