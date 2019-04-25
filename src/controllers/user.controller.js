
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
  console.log('request.payload:', request.payload)
  console.log(`request.path: ${request.path}`)
  const templates = {
    '/register': 'register',
    '/login': 'login',
    '/ask': 'ask',
    '/question/{id}/add-answer': 'question'
  }

  return h.view(templates[request.path], {
    title: 'Error de validación',
    error: 'Por favor complete los campos requeridos'
  }).code(400).takeover()
}

module.exports = {
  create,
  failValidation
}
