const mongoose = require("mongoose");

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

module.exports = mongoose.model("locals", LocalSchema);
