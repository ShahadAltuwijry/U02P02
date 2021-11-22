const mongoose = require("mongoose");

const spotSchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
  description: { type: String, required: true },
  mapLink: { type: String, required: true }, //link to sta page
  banner: { type: String, required: true },
  city: { type: String, required: true },
});

module.exports = mongoose.model("Spot", spotSchema);
