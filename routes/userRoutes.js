import express from "express";
import userData from "../data/userData.js";

const router = express.Router();

//to get the userid and names( userData)
router.get("/", (req, res) => {
  res.json(userData);
});

// get array of ids only
router.get("/id-list", (req, res) => {
  const ids = userData.map((user) => user.userId); // makes a new array of the ids in the original array only
  //console.log(ids)
  res.json(ids);
});

// get array of names only
router.get("/names", (req, res) => {
  const names = userData.map((user) => user.name); // remember to use. map
  //console.log('hit')
  res.json(names);
});

//get array of favcolor only
router.get("/favcolor", (req, res) => {
  const favoriteColor = userData.map((user) => user.favoriteColor);
  res.json(favoriteColor);
});
// get array of  passion only // allowing query here
router.get("/passions", (req, res) => {
  let user;
  const { name } = req.query; //allows use of the query ? in url
  if (name) {
    user = userData.find(
      (user) => user.name.toLowerCase() === name.toLowerCase()
    );
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    } else {
      return res.json({ name: user.name, passion: user.passion });
    }
  }
  const passions = userData.map((user) => user.passion);
  res.status(200).json(passions)
});

// get array of messages only
router.get("/messages", (req, res) => {
  const messages = userData.map((user) => user.message);
  console.log("hit");
  res.json(messages);
});

// router.get("/form", (req, res) => {// interferes with ejs 
//  res.send("this is the form page");
// });

router.get("/form/:id", (req, res) => {
  const id = req.params.id;
  const user = userData.find((user) => user.userId === parseInt(id)); // may have to parseInt(id)
  if (!user) {
    return res.status(404).json({ message: "User not found" }); // gives message if the user is not there
  }
  res.json({
    message: `this is the form page for user ${req.params.id}:`,
    user,
  });
});

//POST
router.post("/form", (req, res) => {
  const { name, favoriteColor, passion, message } = req.body; // shorthand for extracting each piece of data
  if (!(name && favoriteColor && passion && message)) {
    // makes sure all info is there
    return res.status(400).json({ message: "All fields are required!" });
  }
  const newUserId = userData.length + 1; // extract and update user id here
  const newUser = {
    userId: newUserId,
    name: name,
    favoriteColor: favoriteColor,
    passion: passion,
    message: message,
  };

  userData.push(newUser);
  res.status(201).json({
    message: "User added successfully!",
    user: newUser,
  });
  console.log(userData);
});

//PATCH
router.patch("/form/:id", (req, res) => {
  const id = req.params.id;
  const { name, favoriteColor, passion, message } = req.body; // extracting the data
  const user = userData.find((user) => user.userId === parseInt(id));
  if (!user) {
    // makes sure all info is there
    return res.status(404).json({ message: "User not found!" });
  }
  if (name) user.name = name; // if any of these updates are provided, replace them with the updated version
  if (favoriteColor) user.favoriteColor = favoriteColor;
  if (passion) user.passion = passion;
  if (message) user.message = message;
  res.status(200).json({ message: "Updated successfully!", user });
});

//DELETE
router.delete("/form/:id", (req, res) => {
  const id = parseInt(req.params.id); // make a number
  const userIndex = userData.findIndex((user) => user.userId === id); // finds the user's index in the array to splice it out  findIndex will return the index if found or -1 if not found

  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found!" });
  }
  const deletedUser = userData.splice(userIndex, 1); // deletes one item form  the array which is the user index
  res.status(200).json({ message: "deleted Sucessfully!", deletedUser });
});

export default router;
