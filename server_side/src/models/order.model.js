const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  createdAt: { type: Date, default: Date.now },
  email: { type: String, required: true },
  isDelivered: { type: Boolean, default: false },
  name: { type: String, required: true },
  orderAmount: { type: Number, required: true },
  orderItems: [
    {
      image: { type: String, required: true },
      name: { type: String, required: true },
      price: { type: Number, required: true },
      prices: [],
      quantity: { type: Number, required: true },
      variant: { type: String, required: true },
      _id: { type: String, required: true },
    },
  ],
  updatedAt: { type: Date, default: Date.now },
  userid: String,
});

const orderModel = mongoose.model("Order", orderSchema);

module.exports = orderModel;
