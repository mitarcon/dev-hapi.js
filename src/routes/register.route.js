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
      console.log(request.payload);
      return 'Usuario creado'
    }
  }
];