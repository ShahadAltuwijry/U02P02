const mongoose = require("mongoose");
const dotenv = require("dotenv");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

dotenv.config();
const DB = process.env.DB;

mongoose
  .connect(
    `mongodb+srv://shahad:<606566Aa>@project2.5nwrx.mongodb.net/test${DB}`,
    options
  )
  .then(
    () => {
      console.log("DB Ready To Use");
    },
    (err) => {
      console.log(err);
    }
  );
