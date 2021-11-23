const userModel = require("./../../db/models/userSchema");

const createUser = (req, res) => {
  const { userName, email, password } = req.body;

  const newUser = new userModel({
    userName,
    email,
    password,
  });

  newUser
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getAllUsers = (req, res) => {
  userModel
    .find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const updateUser = (req, res) => {
  /*shahad you will use this for the update inputs in the user page,
   the input values will check this function*/
  const { userName } = req.params;
  const { userName, email, password } = req.body;
  let index = 0;
  try {
    const found = userModel.find((item, i) => {
      index = i;
      return item.userName == userName;
    });
    if (found) {
      if (found.userName == "guest") {
        res.status(404).json("you are a guest, sign up to get update option");
      } else {
        if (userName) found.userName = userName;
        if (email) found.email = email;
        if (password) found.password = password;

        userModel[index] = found;
        res.status(200).json(found);
      }
    } else res.status(400).json("user not found");
  } catch (error) {
    res.status(400).json(error.meassage);
  }
};

// const deleteUser = (req, res) => { //figure this one out later
//   userModel.remove({ userName: req.params }).then((result) => {
//     res.send()
//   })};

module.exports = { createUser, getAllUsers, updateUser };
