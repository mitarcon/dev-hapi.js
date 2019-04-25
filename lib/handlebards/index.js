const handlebars = require('handlebars')

function registerHelpers () {
  handlebars.registerHelper('answerNumber', (answers) => {
    const keys = Object.keys(answers)
    return keys.length
  })

  // Esta es la definicion de un helper de bloque
  // revisar documentacion
  handlebars.registerHelper('ifEquals', (a, b, options) => {
    if (a === b) {
      // Hace que se ejecute lo que se encuentra dentro de la funcion
      return options.fn(this)
    }
    return options.inverse(this)
  })

  return handlebars
}

module.exports = registerHelpers()
