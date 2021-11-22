const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  email: { type: Boolean, required: true, unique: true },
  password: { type: Number, required: true },
  visits: { type: Array, unique: true}
});

module.exports = mongoose.model("User", userSchema);
