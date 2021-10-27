const Joi = require("@hapi/joi");

//validating data for user registration
module.exports.registrationValidation = (data) => {
  const Schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });

  return Schema.validate(data);
};

//validating data for user login
module.exports.loginValidation = (data) => {
  const Schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });

  return Schema.validate(data);
};

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

//validating data for adding pizza
module.exports.pizzaValidation = (data) => {
  const Schema = Joi.object({
    name: Joi.string().required(),
    variant: Joi.array().items(Joi.string()).required().max(3).min(3),
    prices: Joi.array()
      .items(
        Joi.object({
          small: Joi.number().required(),
          medium: Joi.number().required(),
          large: Joi.number().required(),
        })
      )
      .required()
      .min(1)
      .max(1),
    category: Joi.string().valid("veg", "nonveg").required(),
    image: Joi.string().required().uri(),
    description: Joi.string().required(),
    userid: Joi.string().required().min(24).max(24),
  });

  return Schema.validate(data);
};

//validating data for deleting pizza
module.exports.deletePizzaValidation = (data) => {
  const Schema = Joi.object({
    pizzaID: Joi.string().required().min(24).max(24),
    userid: Joi.string().required().min(24).max(24),
  });

  return Schema.validate(data);
};

//validating data for updating pizza
module.exports.updatePizzaValidation = (data) => {
  const Schema = Joi.object({
    updatedPizza: Joi.object({
      name: Joi.string(),
      variant: Joi.array().items(Joi.string()).max(3).min(3),
      prices: Joi.array()
        .items(
          Joi.object({
            small: Joi.number().required(),
            medium: Joi.number().required(),
            large: Joi.number().required(),
          })
        )
        .min(1)
        .max(1),
      category: Joi.string().valid("veg", "nonveg"),
      image: Joi.string(),
      description: Joi.string(),
    }).required(),
    _ids: Joi.object({
      userid: Joi.string().required().min(24).max(24),
      pizzaID: Joi.string().required().min(24).max(24),
    }).required(),
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
