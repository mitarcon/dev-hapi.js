
function register (request, h) {
  return h.view('register', {
    title: 'Registro'
  })
}

function home (request, h) {
  return h.view('index', {
    title: 'home'
  })
}

module.exports = {
  home,
  register
}
