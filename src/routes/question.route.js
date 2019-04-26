
const SiteController = require('../controllers/sites.controller')
const QuestionController = require('../controllers/question.controller')
const UserController = require('../controllers/user.controller')

const QuestionSchema = require('./validate/question.schema')

module.exports = [
  {
    method: 'GET',
    path: '/question/{id}',
    handler: SiteController.getQuestion
  },
  {
    method: 'POST',
    path: '/question',
    handler: QuestionController.create,
    options: {
      validate: {
        payload: QuestionSchema.create,
        failAction: UserController.failValidation
      }
    }
  },
  {
    method: 'POST',
    path: '/question/{id}/add-answer',
    handler: QuestionController.addAnswer,
    options: {
      validate: {
        payload: QuestionSchema.addAnswer,
        failAction: UserController.failValidation
      }
    }
  },
  {
    method: 'GET',
    path: '/question/{questionId}/correct-answer/{answerId}',
    handler: QuestionController.setCorrectAnswer
  }
]
