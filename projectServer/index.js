const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//setup express server
const app = express();

dotenv.config();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is on port ${PORT}`);
});
