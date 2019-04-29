const SiteController = require('../controllers/sites.controller')

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: SiteController.home,
    options: {
      cache: {
        expiresIn: 1000 * 30,
        privacy: 'private'
      }
    }
  }
]
