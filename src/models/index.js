const FirebaseAdmin = require('firebase-admin')
const { firebase: firebaseConfig } = require('../../config')

FirebaseAdmin.initializeApp(firebaseConfig.firebaseAdminConfig(FirebaseAdmin))

const db = FirebaseAdmin.database()

const User = require('./user.model')

module.exports = {
  UserModel: new User(db)
}
