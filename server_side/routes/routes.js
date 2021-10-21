const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validate = require("../verifyToken");
const { registrationValidation, loginValidation } = require("../validate");
const pizzaModel = require("../models/pizza.model");
const userModel = require("../models/user.model");

//route to send pizzas
router.get("/getPizzas", async (_req, res) => {
  try {
    let pizzas = await pizzaModel.find();
    res.status(200).json(pizzas);
  } catch (e) {
    console.log(e.message);
    res.status(500).send({ status: "Some error happened" });
  }
});

//route to register user
router.post("/register", async (req, res) => {
  //Validating data sent inside the body of request
  const { error } = registrationValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Checking if a user with given email already exists
  const userExists = await userModel.findOne({ email: req.body.email });
  if (userExists)
    return res
      .status(400)
      .send("A user witn this email address already exists!");

  //Encrypting the password
  let salt = await bcrypt.genSalt(10);
  let hashedPassword = await bcrypt.hash(req.body.password, salt);

  //Inserting user in the database
  let user = new userModel({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const registeredUser = await user.save();
    res.status(200).send({ user: registeredUser._id });
  } catch (e) {
    res.status(400).send(e);
  }
});

//route to login user
router.post("/login", async (req, res) => {
  //Validating data sent inside the body of request
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Checking if email is valid
  const user = await userModel.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid email!");

  //Checking if password is valid
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send("Invalid password!");

  //Creating a jwt token
  const token = jwt.sign({ _id: user._id }, process.env.SECRET_TOKEN);
  res.header("auth-token", token);

  res.send("Logged in!");
});

//route to send user's orders list
router.get("/getUserDetails", validate, async (req, res) => {
  let userName = await userModel.findOne({ _id: req.user._id });
  res.json({ name: userName.name, _id: userName._id });
});

module.exports = router;