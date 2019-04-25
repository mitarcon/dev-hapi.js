
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

module.exports = {
  create
}
