const express = require("express");
const {
  createUser,
  getAllUsers,
  updateUser,
  login,
} = require("./../controllers/users");

const userRouter = express.Router();

userRouter.post("/user", createUser);
userRouter.get("/users", getAllUsers);
userRouter.put("/user", updateUser);
userRouter.post("/login", login);

module.exports = userRouter;
