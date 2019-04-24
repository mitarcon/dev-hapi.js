
const { QuestionModel } = require('../models')

const { server: serverConfig } = require('./../../config')

function register (request, h) {
  return h.view('register', {
    title: 'Registro',
    user: request.state[serverConfig.userCookieName]
  })
}

async function home (request, h) {
  let data
  try {
    data = await QuestionModel.getLast({ amount: 10 })
  } catch (err) {
    console.log(err)
  }

  return h.view('index', {
    title: 'Home',
    user: request.state[serverConfig.userCookieName],
    questions: data
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
  const response = req.response

  if (response && response.isBoom && response.output.statusCode === 404) {
    return h.view('404', {}, {
      layout: 'error-layout'
    }).code(404)
  }

  return h.continue
}

function question (req, h) {
  if (!req.state.user) {
    return h.redirect('/login')
  }

  return h.view('question', {
    title: 'Pregunta',
    user: req.state[serverConfig.userCookieName]
  })
}

module.exports = {
  home,
  register,
  login,
  logout,
  notFound,
  question
}
