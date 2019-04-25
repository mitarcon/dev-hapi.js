
const Joi = require('joi')

const create = {
  title: Joi.string().required(),
  description: Joi.string().required()
}

const addAnswer = {
  answer: Joi.string().required(),
  id: Joi.string()
}

module.exports = {
  create,
  addAnswer
}
