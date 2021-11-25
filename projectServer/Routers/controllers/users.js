const userModel = require("./../../db/models/userSchema");

const createUser = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const user = new userModel({ userName, email, password });
    await user.save();
    userModel.findOne({ email: email }, (err, user) => {
      if (user) {
        res.send({ message: "Login Successfuly", user: user });
      }
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//login cotroller
const login = (req, res) => {
  const { userName, password } = req.body;
  userModel.findOne({ userName: userName }, (err, user) => {
    console.log(userName);
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login Successfuly", user: user });
      } else {
        res.send({ message: "Invalid Password" });
      }
    }
    res.send({ message: "You Do not have an account" });
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
  const { name } = req.params;
  const { userName, email, password } = req.body;
  let index = 0;
  try {
    const found = userModel.find((item, i) => {
      index = i;
      return item.userName == name;
    });
    if (found) {
      if (found.userName == "guest") {
        res.status(404).json("you are a guest, sign up to get update option");
      } else {
        if (name) found.userName = name;
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

module.exports = { createUser, getAllUsers, updateUser, login };

//attempts that might be correct

// const createUser = (req, res) => {
//   const { userName, email, password } = req.body;

//   userModel.findOne(
//     { email: email }.then((item) => {
//       if (item) {
//         res
//           .status(400)
//           .json(
//             "user name/email is already registred. use another email or sign in"
//           );
//       } else {
//         const newUser = new userModel({
//           userName,
//           email,
//           password,
//         });
//       }
//     }),
//     newUser
//       .save()
//       .then((result) => {
//         res.json(result);
//       })
//       .catch((error) => {
//         res.send(error.meassage);
//       })
//   );
// };

//   const { userName, email, password } = req.body;

//   if (userModel.userName === userName || userModel.email === email) {
//     res
//       .status(404)
//       .json(
//         "user name/email is already registred. use another email or sign in"
//       );
//   } else {
//     const newUser = new userModel({
//       userName,
//       email,
//       password,
//     });

//     newUser
//       .save()
//       .then((result) => {
//         res.json(result);
//       })
//       .catch((error) => {
//         res.send(error.meassage);
//       });
//   }
// };
