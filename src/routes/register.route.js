
const UserController = require('../controllers/user.controller')
const SiteController = require('../controllers/sites.controller')

const UserSchema = require('./validate/user.schema')

module.exports = [
  {
    method: 'GET',
    path: '/register',
    handler: SiteController.register
  },
  {
    method: 'POST',
    path: '/register',
    handler: UserController.create,
    options: {
      validate: {
        payload: UserSchema.createUser
      }
    }
  }
]
