const Hapi = require("hapi");

//Require routes
const indexRoute = require("./index.route");

const init = async ({ port }) => {
  const server = Hapi.server({ port });
  // add route to server
  server.route(indexRoute);

  await server.start();
  console.log("Server running on %ss", server.info.uri);
};

init({
  port: 8080
});
