require('dotenv').config()

const port = process.env.SERVER_API ? parseInt(process.env.SERVER_API) : 8080

module.exports = {
  port
}
