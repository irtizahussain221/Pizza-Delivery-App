const Joi = require("@hapi/joi");

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
