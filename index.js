const Hapi = require('hapi')
const handlebars = require('./lib/handlebards')
const inert = require('inert')
const path = require('path')
const vision = require('vision')

const Server = require('./lib/server')

const { server: serverConfig, enviromentConfig } = require('./config')

// Require routes
const Routes = require('./src/routes')

let server

const init = async ({ port }) => {
  server = Hapi.server({
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

  // Agregar metodos al servidor
  await Server(server)

  await server.start()
  server.log('info', `Server running on ${server.info.uri}`)
}

process.on('unhandledRejection', error => {
  server.log('UnhandledRejection', error)
})

process.on('unhandledException', error => {
  server.log('unhandledException', error)
})

init({
  port: serverConfig.port
})
