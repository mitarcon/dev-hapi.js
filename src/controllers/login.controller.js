
const { UserModel } = require('../models')

async function login (request, h) {
  let result
  try {
    result = await UserModel.login(request.payload)
  } catch (error) {
    console.error(error)
    return h.response('Problemas validando el usuario').code(500)
  }

  return result
}

module.exports = {
  login
}
