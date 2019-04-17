

const { UserModel } = require('../models')

function create (request, h) {
  console.log(request.payload)
  /*
  let result
  try {
    result = UserModel.create(request.payload)
  } catch (error) {
    console.error(error)
    return h.response('Problemas creando el usuario').code(500)
  }*/
  let result = UserModel.create(request.payload)
}

module.exports = {
  create
}
