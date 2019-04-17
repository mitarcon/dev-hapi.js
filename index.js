const Hapi = require('hapi')
const handlebars = require('handlebars')
const inert = require('inert')
const path = require('path')
const vision = require('vision')

const bd = require('./src/models/index')
console.log(db.User)

// Require routes
const Routes = require('./src/routes')

const init = async ({ port }) => {
  const server = Hapi.server({
    port,
    routes: {
      files: {
        relativeTo: path.join(__dirname, 'public')
      }
    }
  })

  // register component
  await server.register(inert)
  await server.register(vision)

  // Configurar vision
  server.views({
    engines: {
      hbs: handlebars
    },
    relativeTo: path.resolve(__dirname, 'src'),
    path: 'views',
    layout: true,
    layoutPath: 'views'
  })

  // add route to server
  server.route(Routes)

  await server.start()
  console.log('Server running on %ss', server.info.uri)
}
/*
init({
  port: 8080
})*/
