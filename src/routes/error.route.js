
const Sites = require('../controllers/sites.controller')

module.exports = [
  {
    method: ['GET', 'POST'],
    path: '/{any*}',
    handler: Sites.notFound
  }
]
