const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
