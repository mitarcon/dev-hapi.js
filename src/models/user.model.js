
const refName = 'users'

class UserModel {
  constructor (db) {
    this.db = db
    console.log('asd' + JSON.stringify(this.db))
    this.ref = this.db.ref('/')
    this.collection = this.ref.child(refName)
  }

  async create (data) {
    // data.password = await this.constructor.encrypt(data.password)
    data.password = data.password
    const newUser = this.collection.push()
    newUser.set(data)

    return newUser.key
  }

  static async encrypt (passwd) {
    // const saltRounds = 10
    // const hashedPassword = await bcrypt.hash(passwd, saltRounds)
    const hashedPassword = passwd
    return hashedPassword
  }

  cree () {
    console.log('cree la instancia')
  }
}


module.exports = UserModel
