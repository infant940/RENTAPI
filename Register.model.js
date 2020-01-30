const mongoose = require("mongoose");

var RegisterSchema = new mongoose.Schema({
  FullName: {
    type: String,
    required: "This field is required."
  },

  LastName: {
    type: String,
    required: "This field is required."
  },

  PhoneNumber: {
    type: String,
    required: "This field is required."
  },

  Email: {
    type: String,
    required: "This field is required."
  },

  UserName: {
    type: String,
    required: "This field is required."
  },

  Password: {
    type: String,
    required: "This field is required."
  },
  ConfirmPassword: {
    type: String,
    required: "This field is required."
  }
});



const Register = mongoose.model('Register', RegisterSchema)

module.exports = Register;
