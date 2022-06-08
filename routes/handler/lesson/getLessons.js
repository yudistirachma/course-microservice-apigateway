const apiAdapter = require('../../apiAdapter');
// eslint-disable-next-line no-undef
const { URL_SERVICE_COURSE } = process.env;

const api = apiAdapter(URL_SERVICE_COURSE);

module.exports = async (req, res) => {
  try {
    const lesson = await api.get('/lessons', {
      params: {
        chapter: req.query.chapter,
      },
    });

    return res.json(lesson.data);
  } catch (error) {
    if (error.code === 'ECONNREFUSED') {
      return res.status(500).json({ status: false, message: 'service unavailable' });
    }
      
    const { status, data } = error.response;
    return res.status(status).json(data);
  } 
}