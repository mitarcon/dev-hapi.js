
const Joi = require('joi')

const create = {
  title: Joi.string().required(),
  description: Joi.string().required(),
  image: Joi.any().optional()
}

const addAnswer = {
  answer: Joi.string().required(),
  id: Joi.string()
}

module.exports = {
  create,
  addAnswer
}
