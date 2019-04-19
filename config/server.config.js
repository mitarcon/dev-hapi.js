require('dotenv').config()

const port = process.env.SERVER_PORT ? parseInt(process.env.SERVER_PORT) : 8080
const userCookieName = process.env.COOCKIE_NAME_USER || 'user'

module.exports = {
  port,
  userCookieName
}
