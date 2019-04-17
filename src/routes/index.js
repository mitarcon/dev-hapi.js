const register = require('./register.route')
const home = require('./home.route')
const staticFile = require('./static.route')
module.exports = [].concat(
  staticFile,
  home,
  register
)
