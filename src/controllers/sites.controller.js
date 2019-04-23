
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

function logout (req, h) {
  return h.redirect('/login').unstate(serverConfig.userCookieName)
}

function notFound (req, h) {
  return h.view('404', {}, {
    layout: 'error-layout'
  }).code(404)
}

module.exports = {
  home,
  register,
  login,
  logout,
  notFound
}
