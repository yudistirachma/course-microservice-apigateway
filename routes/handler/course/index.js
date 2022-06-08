const create = require('./create');
const update = require('./update');
const getCourse = require('./getCourse');
const getCourses = require('./getCourses');
const destroy = require('./destroy');

module.exports = {
  getCourse,
  getCourses,
  create,
  update,
  destroy,
};