
const methods = require('./methods')
const register = require('./register')
const plugins = require('./plugins')

module.exports = async (server) => {
  methods(server)
  register(server)
  await plugins(server)
}
