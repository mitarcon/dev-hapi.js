const SiteController = require('../controllers/sites.controller')

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: SiteController.home
  }
]
