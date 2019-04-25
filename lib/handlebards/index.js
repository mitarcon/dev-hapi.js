const handlebars = require('handlebars')

function registerHelpers () {
  handlebars.registerHelper('answerNumber', (answers) => {
    const keys = Object.keys(answers)
    return keys.length
  })

  return handlebars
}

module.exports = registerHelpers()
