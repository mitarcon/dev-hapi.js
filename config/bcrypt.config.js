require('dotenv').config()

const saltRounds = process.env.BCRYPT_SALT_ROUNDS ? parseInt(process.env.BCRYPT_SALT_ROUNDS) : 10

module.exports = {
  saltRounds
}
