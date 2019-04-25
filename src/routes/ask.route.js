
const SiteController = require('../controllers/sites.controller')

module.exports = [
  {
    method: 'GET',
    path: '/ask',
    handler: SiteController.ask
  }
]
