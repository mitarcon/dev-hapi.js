module.exports = [
  {
    method: "GET",
    path: "/register",
    handler: (request, h) => {
      return h.view('register', {
        title: 'Registro'
      })
    }
  },
  {
    method: "POST",
    path: "/register",
    handler: (request, h) => {
      return h.view('index', {
        title: 'home'
      })
    }
  }
];