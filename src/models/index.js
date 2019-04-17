const FirebaseAdmin = require('firebase-admin')
const { firebase } = require('../../config')

// console.log('----> ', firebase.firebaseAdminConfig)

// FirebaseAdmin.initializeApp()
const db = {
  ref: () => { child: (obj) =>  console.log('es ', obj)}
}

const User = require('./user.model')

module.exports = {
  User: new User(db)
}