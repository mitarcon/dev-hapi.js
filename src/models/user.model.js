
const bcryptUtils = require('../utils/bcrypt.utils')

const refName = 'users'

class UserModel {
  constructor (db) {
    this.db = db
    this.ref = this.db.ref('/')
    this.collection = this.ref.child(refName)
  }

  async create (data) {
    data.password = await bcryptUtils.encrypt({text:data.password})
    const newUser = this.collection.push()
    newUser.set(data)

    return newUser.key
  }

}

module.exports = UserModel
