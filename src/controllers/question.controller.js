
const uuid = require('uuid/v1')

const { QuestionModel } = require('./../models')
const { server: serverConfig } = require('./../../config')
const { uploadFile } = require('../../lib/files')

async function create (req, h) {
  if (!req.state.user) {
    return h.redirect('/login')
  }

  let result, question
  question = req.payload

  // Validar archivo
  if (Buffer.isBuffer(question.image)) {
    const filename = `${uuid()}.png`

    if (uploadFile({ buffer: question.image, name: filename })) {
      question.filename = filename
    }

    delete question.image
  }

  const user = req.state[serverConfig.userCookieName]
  try {
    result = QuestionModel.create({ data: question, user })
  } catch (err) {
    req.log('error', err)
    h.view('ask', {
      title: 'Preguntar',
      error: 'Error creando la pregunta',
      user: user
    })
  }

  return h.redirect(`/question/${result}`)
}

async function addAnswer (req, h) {
  if (!req.state.user) {
    return h.redirect('/login')
  }
  const user = req.state.user
  const questionId = req.params.id
  const answer = req.payload.answer
  const question = { id: questionId }

  try {
    await QuestionModel.addAnswer({ question, user, answer })
  } catch (err) {
    req.log('error', err)
  }

  return h.redirect(`/question/${questionId}`)
}

async function setCorrectAnswer (req, h) {
  if (!req.state.user) {
    return h.redirect('/login')
  }

  const user = req.state.user
  const { questionId, answerId } = req.params

  try {
    await req.server.methods.setAnswerRight({ questionId, answerId, user })
  } catch (err) {
    req.log('error', err)
  }

  return h.redirect(`/question/${req.params.questionId}`)
}

module.exports = {
  create,
  addAnswer,
  setCorrectAnswer
}
