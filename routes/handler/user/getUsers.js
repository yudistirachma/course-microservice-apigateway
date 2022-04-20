const apiAdapter = require('../../apiAdapter');
// eslint-disable-next-line no-undef
const { URL_SERVICE_USER } = process.env;

const api = apiAdapter(URL_SERVICE_USER);

module.exports = async (req, res) => {
  try {
    const user = await api.get('/users');
    return res.json(user.data);
  } catch (error) {
    if (error.code === 'ECONNREFUSED') {
      return res.status(500).json({ status: false, message: 'service unavailable' });
    }

    const { status, data } = error.response;
    return res.status(status).json(data);
  } 
}