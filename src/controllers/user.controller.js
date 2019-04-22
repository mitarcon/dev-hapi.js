
const Boom = require('boom')

const { UserModel } = require('../models')

const { server: serverConfig } = require('./../../config')

async function create (request, h) {
  if (request.state[serverConfig.userCookieName]) {
    return h.redirect('/')
  }

  let result
  try {
    result = await UserModel.create(request.payload)
  } catch (error) {
    console.error(error)
    return h.response('Problemas creando el usuario').code(500)
  }

  return h.response(`Usuario creado ID: ${result}`)
}

function failValidation (request, h, err) {
  return Boom.badRequest('falló validación', request.payload)
}

module.exports = {
  create,
  failValidation
}
