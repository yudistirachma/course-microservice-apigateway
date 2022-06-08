const create = require('./create');
const update = require('./update');
const getChapter = require('./getChapter');
const getChapters = require('./getChapters');
const destroy = require('./destroy');

module.exports = {
  getChapter,
  getChapters,
  create,
  update,
  destroy,
};