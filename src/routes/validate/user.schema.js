const Joi = require('joi');

const createUser = {
  name: Joi.string().required().min(3),
  email:  Joi.string().email({ minDomainAtoms: 2 }).required(),
  password: Joi.string().required().min(6)
}

module.exports = {
  createUser
}