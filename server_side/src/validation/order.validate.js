const Joi = require("@hapi/joi");

//validating data for saving user's order
module.exports.orderValidation = (data) => {
  const prices = Joi.object({
    small: Joi.number().required(),
    medium: Joi.number().required(),
    large: Joi.number().required(),
  });

  const orderItems = Joi.object({
    image: Joi.string().required(),
    name: Joi.string().required(),
    price: Joi.number().required(),
    prices: Joi.array().items(prices).required(),
    quantity: Joi.number().required(),
    variant: Joi.string().required(),
    _id: Joi.string().required().min(24).max(24),
  }).options({ abortEarly: false });

  const Schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    name: Joi.string().required().min(6),
    orderAmount: Joi.number().required(),
    userid: Joi.string().required().min(24).max(24),
    orderItems: Joi.array().items(orderItems).min(1).required(),
  }).options({ abortEarly: false });

  return Schema.validate(data);
};

//validating data for sending user's orders list
module.exports.orderListDataValidation = (data) => {
  const Schema = Joi.object({
    userid: Joi.string().required().min(24).max(24),
  });

  return Schema.validate(data);
};

//validating data for order status update
module.exports.orderStatusUpdateValidation = (data) => {
  const Schema = Joi.object({
    orderID: Joi.string().required().min(24).max(24),
    userid: Joi.string().required().min(24).max(24),
  });

  return Schema.validate(data);
};
