
const { server: serverConfig } = require('./../../config')

function register (request, h) {
  return h.view('register', {
    title: 'Registro',
    user: request.state[serverConfig.userCookieName]
  })
}

function home (request, h) {
  return h.view('index', {
    title: 'Home',
    user: request.state[serverConfig.userCookieName]
  })
}

function login (request, h) {
  return h.view('login', {
    title: 'Login',
    user: request.state[serverConfig.userCookieName]
  })
}

module.exports = {
  home,
  register,
  login
}
