const good = require('good')

const logger = {
  plugin: good,
  options: {
    reporters: {
      console: [
        {
          module: 'good-console'
        },
        'stdout'
      ]
    }
  }
}

module.exports = logger
