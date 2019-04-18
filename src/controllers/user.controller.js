
const { UserModel } = require('../models')

async function create (request, h) {
  console.log(request.payload)

  let result
  try {
    result = await UserModel.create(request.payload)
  } catch (error) {
    console.error(error)
    return h.response('Problemas creando el usuario').code(500)
  }

  return h.response(`Usuario creado ID: ${result}`)
}

module.exports = {
  create
}
