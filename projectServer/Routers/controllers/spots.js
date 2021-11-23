const spotsModel = require("./../../db/models/spotsSchema");

const createSpot = (req, res) => {
  const { name, img, description, mapLink, banner, city } = req.body;

  const newSpot = new spotsModel({
    name,
    img,
    description,
    mapLink,
    banner,
    city,
  });

  newSpot
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getAllSpots = (req, res) => {
  spotsModel
    .find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

// const getSpotById = (req, res) => {

// }

module.exports = { createSpot, getAllSpots };