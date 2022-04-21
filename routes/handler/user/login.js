const apiAdapter = require('../../apiAdapter')
const jwt = require('jsonwebtoken')
// eslint-disable-next-line no-undef
const { URL_SERVICE_USER, JWT_SECRET, JWT_SECRET_REFRESH, JWT_ACCESS_EXPIRED, JWT_REFRESH_EXPIRED } = process.env

const api = apiAdapter(URL_SERVICE_USER)

module.exports = async (req, res) => {
  try {
    const user = await api.post('/users/login', req.body)
    
    const token = jwt.sign( { data: user.data.data }, JWT_SECRET, { expiresIn: JWT_ACCESS_EXPIRED })
    const refreshToken = jwt.sign( { data: user.data.data }, JWT_SECRET_REFRESH, { expiresIn: JWT_REFRESH_EXPIRED })

    // create token
    await api.post('/refresh-token', { refresh_token: refreshToken, user_id: user.data.data.id })
    
    return res.json({
      status: true,
      data: {
        token : token,
        refresh_token : refreshToken
      }
    })
  } catch (error) {
    if (error.code === 'ECONNREFUSED') {
      return res.status(500).json({ status: false, message: 'service unavailable' })
    }

    const { status, data } = error.response
    return res.status(status).json(data)
  } 
}