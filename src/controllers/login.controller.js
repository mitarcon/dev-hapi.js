
const { UserModel } = require('../models')
const { server: serverConfig } = require('./../../config')

async function login (request, h) {
  if (request.state[serverConfig.userCookieName]) {
    return h.redirect('/')
  }

  let result
  try {
    result = await UserModel.login(request.payload)
    if (!result) {
      return h.response('Email y/o constraseña incorrecta').code(401)
    }
  } catch (error) {
    console.error(error)
    return h.response('Problemas validando el usuario').code(500)
  }

  return h.redirect('/')
    .state(serverConfig.userCookieName, {
      name: result.name,
      email: result.email
    })
}

function logout (request, h) {
  return h.redirect('login')
    .unstate('user')
}

module.exports = {
  login,
  logout
}
