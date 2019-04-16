
const UserController = require('../controllers/user.controller');
const SiteController = require('../controllers/sites.controller');

module.exports = [
  {
    method: "GET",
    path: "/register",
    handler: SiteController.register
  },
  {
    method: "POST",
    path: "/register",
    handler: UserController.create
  }
];