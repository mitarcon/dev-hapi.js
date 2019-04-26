
const refName = 'questions'
const refAsnwer = 'answers'

class Question {
  constructor (db) {
    this.db = db
    this.ref = this.db.ref('/')
    this.collection = this.ref.child(refName)
    this.refAsnwer = refAsnwer
  }

  create ({ data, user }) {
    data.owner = user
    const newQuestion = this.collection.push()
    newQuestion.set(data)

    return newQuestion.key
  }

  async getLast ({ amount }) {
    // TODO: Aplicar logica para poder ordenar por fecha de publicacion
    const query = await this.collection.limitToLast(amount).once('value')
    const data = query.val()
    return data
  }

  async getOne ({ id }) {
    const query = await this.collection.child(id).once('value')
    return query.val()
  }

  async addAnswer ({ answer, user, question }) {
    const answers = await this.collection
      .child(question.id)
      .child(this.refAsnwer)
      .push()

    answers.set({ text: answer, user })

    return answers
  }

  async setAnswerRight ({ questionId, answerId, user }) {
    const query = await this.collection.child(questionId).once('value')
    const question = query.val()
    const answers = question.answers

    if (!user.email === question.owner.email) {
      return false
    }

    for (let key in answers) {
      answers[key].correct = (key === answerId)
    }

    await this.collection
      .child(questionId)
      .child(this.refAsnwer)
      .update(answers)

    return true
  }
}

module.exports = Question
