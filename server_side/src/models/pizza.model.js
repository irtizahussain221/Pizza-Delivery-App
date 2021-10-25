const mongoose = require("mongoose");

const pizzaSchema = mongoose.Schema({
  name: { type: String, required: true },
  variant: [],
  prices: [],
  category: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
});

const pizzaModel = mongoose.model("Pizza", pizzaSchema);

module.exports = pizzaModel;
