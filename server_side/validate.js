const Joi = require("@hapi/joi");

module.exports.registrationValidation = (data) => {
  const Schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });

  return Schema.validate(data);
};

module.exports.loginValidation = (data) => {
  const Schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });

  return Schema.validate(data);
};

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
    _id: Joi.string().required(),
  }).options({ abortEarly: false });

  const Schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    name: Joi.string().required().min(6),
    orderAmount: Joi.number().required(),
    userid: Joi.string().required(),
    orderItems: Joi.array().items(orderItems).min(1).required(),
  }).options({ abortEarly: false });

  return Schema.validate(data);
};
