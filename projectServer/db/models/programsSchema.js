const mongoose = require("mongoose");

const programsSchema = new mongoose.Schema({
  //programs are the ones with flight booking
  name: { type: String, required: true },
  img: { type: String, required: true },
  description: { type: String, required: true },
  origLink: { type: String, required: true }, //flight link
  city: { type: String, required: true },
});

module.exports = mongoose.model("Programs", programsSchema);
