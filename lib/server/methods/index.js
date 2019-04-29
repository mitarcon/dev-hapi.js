
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

async function getLastQuestions ({ amount }) {
  let data
  try {
    data = await QuestionModel.getLast({ amount })
  } catch (err) {
    console.log(err)
  }
  return data
}

module.exports = function (server) {
  server.method('setAnswerRight', setAnswerRight)
  server.method({
    name: 'getLastQuestions',
    method: getLastQuestions,
    options: {
      generateKey: (obj) => Object.keys(obj).join(','),
      cache: {
        expiresIn: 1000 * 60,
        generateTimeout: 2000
      }
    }
  })
}
