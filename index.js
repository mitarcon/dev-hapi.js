const Hapi = require("hapi");
const handlebars = require("handlebars");
const inert = require("inert");
const path = require("path");
const vision = require("vision");

//Require routes
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
  await server.register(vision);

  // Configurar vision
  server.views({
    engines: {
      hbs: handlebars
    },
    relativeTo: __dirname + "/src",
    path: 'views',
    layout: true,
    layoutPath: 'views'
  })

  // add route to server
  server.route(homeRoute);
  server.route(staticRoute);

  await server.start();
  console.log("Server running on %ss", server.info.uri);
};

init({
  port: 8080
});
