
const questionApi = require('./question.api')

module.exports = async (server) => {
  await questionApi(server)
}
