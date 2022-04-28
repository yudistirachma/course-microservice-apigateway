const create = require('./create');
const update = require('./update');
const getMentor = require('./getMentor');
const getMentors = require('./getMentors');
const destroy = require('./destroy');

module.exports = {
  getMentor,
  getMentors,
  create,
  update,
  destroy,
};