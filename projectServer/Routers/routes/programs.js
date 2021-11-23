const express = require("express");
const { createProgram, getAllPrograms } = require("./../controllers/programs");

const programRouter = express.Router();

programRouter.post("/user", createProgram);
programRouter.get("/user", getAllPrograms);

module.exports = programRouter;
