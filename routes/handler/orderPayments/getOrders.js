const apiAdapter = require('../../apiAdapter');
// eslint-disable-next-line no-undef
const { URL_SERVICE_ORDER_PAYMENT } = process.env;

const api = apiAdapter(URL_SERVICE_ORDER_PAYMENT);

module.exports = async (req, res) => {
  try {
    const review = await api.get('/orders', {
        user_id : req.user.data.id,
    });

    return res.json(review.data);
  } catch (error) {
    if (error.code === 'ECONNREFUSED') {
      return res.status(500).json({ status: false, message: 'service unavailable' });
    }
      
    const { status, data } = error.response;
    return res.status(status).json(data);
  } 
}