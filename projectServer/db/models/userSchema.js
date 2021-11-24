const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: { type: String, trim: true, required: true, unique: true },
  email: { type: String, trim: true, required: true, unique: true },
  password: { type: Number, trim: true, required: true },
  visits: { type: Array }, //child from program&spots
});

module.exports = mongoose.model("User", userSchema);
