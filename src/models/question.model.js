
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

  async getLast ({ amount }) {
    const query = await this.collection.limitToLast(amount).once('value')
    const data = query.val()
    return data
  }
}

module.exports = Question
