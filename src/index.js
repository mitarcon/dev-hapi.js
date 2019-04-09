const Hapi = require("hapi");
const inert = require("inert");
const path = require("path");

//Require routes
const indexRoute = require("./index.route");
const staticRoute = require("./static.route");

const init = async ({ port }) => {
  const server = Hapi.server({
    port,
    routes: {
      files: {
        relativeTo: path.join(__dirname, "public")
      }
    }
  });

  // register component
  await server.register(inert);

  // add route to server
  server.route(indexRoute);
  server.route(staticRoute);

  await server.start();
  console.log("Server running on %ss", server.info.uri);
};

init({
  port: 8080
});
