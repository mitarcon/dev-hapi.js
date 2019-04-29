
const methods = require('./methods')
const register = require('./register')

module.exports = (server) => {
  methods(server)
  register(server)
}
