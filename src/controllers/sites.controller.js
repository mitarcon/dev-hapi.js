
const { QuestionModel } = require('../models')

const { server: serverConfig } = require('./../../config')

function register (request, h) {
  return h.view('register', {
    title: 'Registro',
    user: request.state[serverConfig.userCookieName]
  })
}

async function home (req, h) {
  let data = await req.server.methods.getLastQuestions({ amount: 10 })

  return h.view('index', {
    title: 'Home',
    user: req.state[serverConfig.userCookieName],
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

async function getQuestion (req, h) {
  const questionId = req.params.id
  let question
  try {
    question = await QuestionModel.getOne({ id: questionId })
  } catch (err) {
    req.log('error', err)
    return notFound(req, h)
  }

  return h.view('question', {
    title: 'Detalle de la pregunta',
    user: req.state[serverConfig.userCookieName],
    key: questionId,
    question
  })
}

function ask (req, h) {
  if (!req.state.user) {
    return h.redirect('/login')
  }

  return h.view('ask', {
    title: 'Preguntar',
    user: req.state[serverConfig.userCookieName]
  })
}

module.exports = {
  home,
  register,
  login,
  logout,
  notFound,
  getQuestion,
  ask
}
