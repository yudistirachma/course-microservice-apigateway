const apiAdapter = require('../../apiAdapter');
// eslint-disable-next-line no-undef
const { URL_SERVICE_COURSE } = process.env;

const api = apiAdapter(URL_SERVICE_COURSE);

module.exports = async (req, res) => {
  try {
    let chapter = null 
    
    if (req.query.course) {
      chapter = await api.get(`/chapters`, {
        params: {
          course: req.query.course,
        },
      });
    }else{
      chapter = await api.get(`/chapters`);
    }


    return res.json(chapter.data);
  } catch (error) {
    if (error.code === 'ECONNREFUSED') {
      return res.status(500).json({ status: false, message: 'service unavailable' });
    }
      
    const { status, data } = error.response;
    return res.status(status).json(data);
  } 
}