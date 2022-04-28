const apiAdapter = require('../../apiAdapter');
// eslint-disable-next-line no-undef
const { URL_SERVICE_MENTOR } = process.env;

const api = apiAdapter(URL_SERVICE_MENTOR);

module.exports = async (req, res) => {
  try {
    const mentor = await api.delete(`/mentors/${req.params.id}`);
    return res.json(mentor.data);
  } catch (error) {
    if (error.code === 'ECONNREFUSED') {
      return res.status(500).json({ status: false, message: 'service unavailable' });
    }

    const { status, data } = error.response;
    return res.status(status).json(data);
  } 
}