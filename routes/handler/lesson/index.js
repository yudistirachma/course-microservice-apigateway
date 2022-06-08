const create = require('./create');
const update = require('./update');
const getLesson = require('./getLesson');
const getLessons = require('./getLessons');
const destroy = require('./destroy');

module.exports = {
  getLesson,
  getLessons,
  create,
  update,
  destroy,
};