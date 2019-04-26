
const { QuestionModel } = require('./../models')
const { server: serverConfig } = require('./../../config')

function create (req, h) {
  const question = req.payload
  const user = req.state[serverConfig.userCookieName]
  try {
    QuestionModel.create({ data: question, user })
  } catch (err) {
    console.log(err)
    h.view('ask', {
      title: 'Preguntar',
      error: 'Error creando la pregunta',
      user: user
    })
  }
  return h.view('ask', {
    title: 'Preguntar',
    success: 'Pregunta creado exitosamente',
    user: user
  })
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
    console.log(err)
  }

  return h.redirect(`/question/${questionId}`)
}

async function setCorrectAnswer (req, h) {
  console.log('entro aqui ')
  if (!req.state.user) {
    return h.redirect('/login')
  }

  const user = req.state.user
  const { questionId, answerId } = req.params
  let status

  console.log(`questionId: ${questionId} - answerId: ${answerId}`)
  try {
    status = await req.server.methods.setAnswerRight({ questionId, answerId, user })
    console.log(`status ${status}`)
  } catch (err) {
    console.log(err)
  }

  return h.redirect(`/question/${req.params.questionId}`)
}

module.exports = {
  create,
  addAnswer,
  setCorrectAnswer
}
