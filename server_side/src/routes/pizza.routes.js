const router = require("express").Router();
const validate = require("../TokenValidation/verifyToken");
const {
  pizzaValidation,
  deletePizzaValidation,
  updatePizzaValidation,
} = require("../validation/pizza.validate");
const pizzaModel = require("../models/pizza.model");
const userModel = require("../models/user.model");

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

module.exports = router;
