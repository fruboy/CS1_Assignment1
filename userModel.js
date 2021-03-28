const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: Number,
    required: false,
    trim: true,
    lowercase: true,
  },
  address: {
    type: String,
    required: false,
    trim: true,
    lowercase: true,
  },
});

const User = mongoose.model("Users", UsersSchema);

module.exports = User;