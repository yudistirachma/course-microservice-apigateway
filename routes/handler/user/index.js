const register = require('./register');
const login = require('./login');
const update = require('./update');
const getUsers = require('./getUsers');
const getUser = require('./getUser');
const destroy = require('./destroy');
const logout = require('./logout');

module.exports = {
  register,
  login,
  update,
  getUser,
  getUsers,
  destroy,
  logout
};