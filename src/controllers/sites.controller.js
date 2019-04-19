
function register (request, h) {
  return h.view('register', {
    title: 'Registro'
  })
}

function home (request, h) {
  return h.view('index', {
    title: 'Home'
  })
}

function login (request, h) {
  return h.view('login', {
    title: 'Login'
  })
}

module.exports = {
  home,
  register,
  login
}
