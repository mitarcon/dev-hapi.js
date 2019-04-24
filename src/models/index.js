const FirebaseAdmin = require('firebase-admin')
const { firebase: firebaseConfig } = require('../../config')

FirebaseAdmin.initializeApp(firebaseConfig.firebaseAdminConfig(FirebaseAdmin))

const db = FirebaseAdmin.database()

const User = require('./user.model')
const Question = require('./question.model')

module.exports = {
  UserModel: new User(db),
  QuestionModel: new Question(db)
}
