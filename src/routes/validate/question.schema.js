
const Joi = require('joi')

const create = {
  title: Joi.string().required(),
  description: Joi.string().required()
}

module.exports = {
  create
}
