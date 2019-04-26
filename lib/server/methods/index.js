
const { QuestionModel } = require('../../../src/models')

async function setAnswerRight ({ questionId, answerId, user }) {
  let result
  try {
    result = await QuestionModel.setAnswerRight({ questionId, answerId, user })
  } catch (error) {
    console.error(error)
    return false
  }

  return result
}

module.exports = function (server) {
  server.method('setAnswerRight', setAnswerRight)
}
