const express = require("express");
const {
  createUser,
  getAllUsers,
  updateUser,
} = require("./../controllers/users");

const userRouter = express.Router();

userRouter.post("/user", createUser);
userRouter.get("/user", getAllUsers);
userRouter.put("/user", updateUser);

module.exports = userRouter;
