const router = require("express").Router();
const validate = require("../TokenValidation/verifyToken");
const {
  orderValidation,
  orderListDataValidation,
  orderStatusUpdateValidation,
} = require("../validation/order.validate");
const userModel = require("../models/user.model");
const orderModel = require("../models/order.model");

////ROUTES FOR CLIENTS////

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
