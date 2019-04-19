
const bcryptUtils = require('../utils/bcrypt.utils')

const refName = 'users'

class UserModel {
  constructor (db) {
    this.db = db
    this.ref = this.db.ref('/')
    this.collection = this.ref.child(refName)
  }

  async create (data) {
    data.password = await bcryptUtils.encrypt({ text: data.password })
    const newUser = this.collection.push()
    newUser.set(data)

    return newUser.key
  }

  async login (data) {
    const userQuery = await this.collection
      .orderByChild('email')
      .equalTo(data.email)
      .once('value')
    const userFound = userQuery.val()

    if (userFound) {
      const userId = Object.keys(userFound)[0]
      const compare = {
        textOne: data.password,
        textTwo: userFound[userId].password
      }
      const passwRight = await bcryptUtils.compare(compare)
      const result = (passwRight) ? userFound[userId] : false

      return result
    }

    return false
  }
}

module.exports = UserModel
