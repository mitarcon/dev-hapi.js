
const LoginController = require('../controllers/login.controller')
const SiteController = require('../controllers/sites.controller')
const UserController = require('../controllers/user.controller')

const UserSchema = require('./validate/user.schema')

module.exports = [
  {
    method: 'GET',
    path: '/login',
    handler: SiteController.login
  },
  {
    method: 'POST',
    path: '/login',
    handler: LoginController.login,
    options: {
      validate: {
        payload: UserSchema.loginUser,
        failAction: UserController.failValidation
      }
    }
  },
  {
    method: 'GET',
    path: '/logout',
    handler: SiteController.logout
  }
]
