const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validate = require("../TokenValidation/verifyToken");
const {
  registrationValidation,
  loginValidation,
  orderValidation,
  orderListDataValidation,
  pizzaValidation,
  deletePizzaValidation,
  updatePizzaValidation,
  orderStatusUpdateValidation,
} = require("../JoiValidation/validate");
const pizzaModel = require("../models/pizza.model");
const userModel = require("../models/user.model");
const orderModel = require("../models/order.model");

////ROUTES FOR CLIENTS////
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

//route to post user's orders list
router.post("/postOrders", validate, async (req, res) => {
  //Validating data sent inside the body of request
  const { error } = orderValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Inserting orders in database
  let order = new orderModel({
    email: req.body.email,
    name: req.body.name,
    orderAmount: req.body.orderAmount,
    orderItems: req.body.orderItems,
    userid: req.body.userid,
  });

  try {
    let orderSaved = await order.save();
    res.status(200).json({ _id: orderSaved._id });
  } catch (e) {
    console.log(e);
  }
});

//route to send user's orders list

router.post("/getOrders", validate, async (req, res) => {
  //validating data sent inside the body of request
  const { error } = orderListDataValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Getting user's orders
  try {
    let ordersList = await orderModel.find({ userid: req.body.userid });
    res.status(200).json(ordersList);
  } catch (e) {
    console.log(e);
  }
});

////APIS FOR ADMIN PANEL////
//route for adding pizzas
router.post("/addPizza", validate, async (req, res) => {
  //validating data sent inside the body of request
  const { error } = pizzaValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    //validating if the request is from admin
    let { userid } = req.body;
    let user = await userModel.find({ _id: userid });
    if (!user[0].isAdmin) return res.status(401).send("Access denied!");

    //adding pizza in database
    let pizza = new pizzaModel({
      name: req.body.name,
      variant: req.body.variant,
      prices: req.body.prices,
      category: req.body.category,
      image: req.body.image,
      description: req.body.description,
    });
    let insertPizza = await pizza.save();
    res.status(200).json({ pizzaInserted: true, pizzaID: insertPizza._id });
  } catch (e) {
    console.log(e);
  }
});

//Api for deleting pizza
router.post("/deletePizza", validate, async (req, res) => {
  //validating data sent inside the body of request
  const { error } = deletePizzaValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    //checking if this pizza exists
    const pizza = await pizzaModel.find({ _id: req.body.pizzaID });
    if (!pizza[0]) return res.status(400).send("No such pizza exists!");

    //validating if the request is from admin
    const user = await userModel.find({ _id: req.body.userid });
    if (!user[0].isAdmin) return res.status(401).send("Access denied!");

    //deleting the pizza item
    const deletePizza = await pizzaModel.findOneAndDelete({
      _id: req.body.pizzaID,
    });
    res.status(200).json({ deleted: true, deletedPizza: deletePizza._id });
  } catch (e) {
    console.log(e.message);
  }
});

//Api for updating pizza
router.put("/updatePizza", validate, async (req, res) => {
  //validating data sent inside the body of request
  const { error } = updatePizzaValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    //validating if the request is from admin
    const user = await userModel.find({ _id: req.body._ids.userid });
    if (!user[0].isAdmin) return res.status(401).send("Access denied!");

    //updating pizza
    const updatedPizza = await pizzaModel.updateOne(
      { _id: req.body._ids.pizzaID },
      { $set: req.body.updatedPizza }
    );
    res.status(200).json({ updated: true, updatedPizza });
  } catch (e) {
    console.log(e);
  }
});

//updating the status of order
router.put("/updateOrderStatus", validate, async (req, res) => {
  //validating data sent inside the body of request
  const { error } = orderStatusUpdateValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    //validating if the request is from admin
    const user = await userModel.find({ _id: req.body.userid });
    if (!user[0].isAdmin) return res.status(401).send("Access denied!");

    //updating the order status
    const updatedOrder = await orderModel.updateOne(
      { _id: req.body.orderID },
      { $set: { isDelivered: true } }
    );
    res.status(200).json({ updated: true, updatedOrder });
  } catch (e) {
    console.log(e);
  }
});

//sending all the orders to admin
router.get("/getOrders/:userid", validate, async (req, res) => {
  try {
    //validating if the request is from admin
    const user = await userModel.find({ _id: req.params.userid });
    if (!user[0].isAdmin) return res.status(401).send("Access denied!");

    //sending the list of all orders
    const orders = await orderModel.find();
    res.status(200).json(orders);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
