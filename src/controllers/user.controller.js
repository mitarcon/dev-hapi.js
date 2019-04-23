
const Boom = require('boom')

const { UserModel } = require('../models')

const { server: serverConfig } = require('./../../config')

async function create (request, h) {
  if (request.state[serverConfig.userCookieName]) {
    return h.redirect('/')
  }

  try {
    await UserModel.create(request.payload)
  } catch (error) {
    console.error(error)
    return h.view('Register', {
      title: 'Registro',
      error: 'Error creando el usuario'
    })
  }

  return h.view('register', {
    title: 'Registro',
    success: 'Usuario creado exitosamente'
  })
}

function failValidation (request, h, err) {
  return Boom.badRequest('falló validación', request.payload)
}

module.exports = {
  create,
  failValidation
}
