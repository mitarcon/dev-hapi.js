
const logger = require('./logger')

module.exports = async (server) => {
  await server.register(logger)
}
