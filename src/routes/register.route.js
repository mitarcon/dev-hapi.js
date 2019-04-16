
const routes = [
  {
    method: "GET",
    path: "/register",
    handler: (request, h) => {
      return h.view('index', {
        title: 'home'
      })
    }
  },

  /*{
    method: "POST",
    path: "/register",
    handler: (request, h) => {
      return h.view('index', {
        title: 'home'
      })
    }
  }*/
];

module.exports = async function (server) {
  if (server && routes && routes.length > 0) {
    routes.forEach(async route => await server.register(route));
  }
}