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
