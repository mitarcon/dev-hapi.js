
const SiteController = require('../controllers/sites.controller')
const QuestionController = require('../controllers/question.controller')
const UserController = require('../controllers/user.controller')

const QuestionSchema = require('./validate/question.schema')

module.exports = [
  {
    method: 'GET',
    path: '/question',
    handler: SiteController.question
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
  }
]
