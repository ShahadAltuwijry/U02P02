const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const db = require("./db/index");
const userRouter = require("./Routers/routes/users");

//setup express server
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(userRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is on port ${PORT}`);
});
