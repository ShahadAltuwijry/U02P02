const express = require("express");
const { createSpot, getAllSpots } = require("./../controllers/spots");

const spotRouter = express.Router();

spotRouter.post("/spot", createSpot);
spotRouter.get("/spot", getAllSpots);

module.exports = spotRouter;
