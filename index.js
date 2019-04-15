const Hapi = require("hapi");
const inert = require("inert");
const path = require("path");

//Require routes
const indexRoute = require("./src/routes/index.route");
const staticRoute = require("./src/routes/static.route");
const homeRoute = require("./src/routes/home.route");

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
  server.route(homeRoute);
  server.route(staticRoute);

  await server.start();
  console.log("Server running on %ss", server.info.uri);
};

init({
  port: 8080
});
