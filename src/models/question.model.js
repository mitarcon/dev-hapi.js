
const refName = 'questions'

class Question {
  constructor (db) {
    this.db = db
    this.ref = this.db.ref('/')
    this.collection = this.ref.child(refName)
  }

  create ({ data, user }) {
    data.owner = user
    const newQuestion = this.collection.push()
    newQuestion.set(data)

    return newQuestion.key
  }
}

module.exports = Question
