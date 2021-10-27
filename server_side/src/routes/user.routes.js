const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validate = require("../TokenValidation/verifyToken");
const {
  registrationValidation,
  loginValidation,
} = require("../validation/user.validate");
const userModel = require("../models/user.model");

////ROUTES FOR CLIENTS////

//route to register user
router.post("/register", async (req, res) => {
  //Validating data sent inside the body of request
  const { error } = registrationValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
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

  try {
    //Checking if email is valid
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("Invalid email!");

    //Checking if password is valid
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) return res.status(400).send("Invalid password!");

    //Creating a jwt token
    const token = jwt.sign({ _id: user._id }, process.env.SECRET_TOKEN);
    res.header("auth-token", token);
    res.send("Logged in!");
  } catch (e) {
    console.log(e);
  }
});

//route to send user's details
router.get("/getUserDetails", validate, async (req, res) => {
  try {
    let userName = await userModel.findOne({ _id: req.user._id });
    res.status(200).json({
      name: userName.name,
      _id: userName._id,
      email: userName.email,
      isAdmin: userName.isAdmin,
    });
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
