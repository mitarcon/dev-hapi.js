
const { UserModel } = require('../models')
const { server: serverConfig } = require('./../../config')

async function login (request, h) {
  let result
  try {
    result = await UserModel.login(request.payload)
    if (!result) {
      return h.view('login', {
        title: 'Login',
        error: 'Email y/o contraseña incorrecta'
      })
    }
  } catch (error) {
    return h.view('login', {
      title: 'Login',
      error: 'Problemas validando el usuario'
    })
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
