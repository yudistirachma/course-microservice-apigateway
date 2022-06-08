const create = require('./create');
const getMyCourses = require('./getMyCourses');
const getMyCourse = require('./getMyCourse');
const destroy = require('./destroyCourse');

module.exports = {
  getMyCourses,
  getMyCourse,
  create,
  destroy
};