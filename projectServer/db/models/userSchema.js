const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: Number, required: true },
  visits: { type: Array, unique: true }, //child from program&spots
});

module.exports = mongoose.model("User", userSchema);
