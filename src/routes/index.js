const register = require('./register.route')
const home = require('./home.route')
const staticFile = require('./static.route')
const login = require('./login.route')
const question = require('./question.route')

// Debe ser la ultima ruta que se agregue en la lista
const error = require('./error.route')

module.exports = [].concat(
  staticFile,
  home,
  register,
  login,
  question,
  error
)
