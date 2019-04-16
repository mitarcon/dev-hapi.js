
function create (request, h) {
  console.log(request.payload);
  return 'Usuario creado'
}

module.exports = {
  create
}