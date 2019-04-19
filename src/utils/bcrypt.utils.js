const bcrypt = require('bcrypt')

const { bcryptConfig } = require('../../config')

function encrypt ({ text, salt }) {
  return bcrypt.hash(text, salt || bcryptConfig.saltRounds)
}

function decrypt ({ text }) {

}

function compare ({ textOne, textTwo, salt }) {
  return bcrypt.compare(textOne, textTwo)
}

module.exports = {
  encrypt,
  decrypt,
  compare
}
