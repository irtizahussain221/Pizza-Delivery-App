const mongoose = require('mongoose');

const pizzaSchema = mongoose.Schema({
    name: { type: String, required: true },
    variant: [],
    prices: [],
    category: { type: String, required: true },
    image: { type: String, required: true },
    url: { type: String, required: true }
}, {
    timestamps: true
});

const pizzaModel = mongoose.model('pizzas', pizzaSchema);

module.exports = pizzaModel;