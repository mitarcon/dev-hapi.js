const Hapi = require('hapi')
const handlebars = require('handlebars')
const inert = require('inert')
const path = require('path')
const vision = require('vision')

const { server: serverConfig, enviromentConfig } = require('./config')

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

  // register state
  server.state(serverConfig.userCookieName, {
    ttl: 1000 * 60 * 60 * 24 * 7, // milisegundos * segundo * minutos * horas * dias
    isSecure: enviromentConfig.isProd,
    encoding: 'base64json'
  })

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

init({
  port: serverConfig.port
})
