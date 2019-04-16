const register = require('./register.route');
const home = require('./home.route');
const static = require('./static.route');
module.exports = [].concat(
  static,
  home,
  register
);
