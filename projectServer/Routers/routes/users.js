const express = require("express");
const { createUser, getAllUsers } = require("./../controllers/users");

const userRouter = express.Router();

userRouter.post("/user", createUser);
userRouter.get("/user", getAllUsers);

module.exports = userRouter;
