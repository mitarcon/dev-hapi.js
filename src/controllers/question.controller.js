
const { QuestionModel } = require('./../models')
const { server: serverConfig } = require('./../../config')

function create (req, h) {
  const question = req.payload
  const user = req.state[serverConfig.userCookieName]
  try {
    QuestionModel.create({ data: question, user })
  } catch (err) {
    console.log(err)
    h.view('question', {
      title: 'Preguntar',
      error: 'Error creando la pregunta'
    })
  }
  return h.view('question', {
    title: 'Preguntar',
    success: 'Pregunta creado exitosamente'
  })
}

module.exports = {
  create
}
