
require('dotenv').config()

function isProd () {
  return process.env.NODE_ENV && process.env.NODE_ENV === 'prod'
}

module.exports = {
  isProd: isProd()
}
