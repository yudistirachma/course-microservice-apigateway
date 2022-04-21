const apiAdapter = require('../../apiAdapter')
const jwt = require('jsonwebtoken')
// eslint-disable-next-line no-undef
const { URL_SERVICE_USER, JWT_SECRET, JWT_SECRET_REFRESH, JWT_ACCESS_EXPIRED } = process.env

const api = apiAdapter(URL_SERVICE_USER)

module.exports = async (req, res) => {
  try {
    const { refresh_token, user_id } = req.body

    if (!refresh_token || !user_id) {
      return res.status(400).json({
        status: false,
        message: 'refresh_token and user_id is required'
      })
    }

    let refreshToken = await api.get('/refresh-token', { params: { refresh_token: refresh_token } })

    if (!refreshToken) {
      return res.status(400).json({
        status: false,
        message: 'refresh token is invalid'
      })
    }

    jwt.verify(refresh_token, JWT_SECRET_REFRESH, (err, decoded) => {
      if (err) {
        return res.status(400).json({
          status: false,
          message: err.message
        })
      }

      if (decoded.data.id !== user_id) {
        return res.status(400).json({
          status: false,
          message: 'refresh token user_id is invalid'
        })
      }

      const token = jwt.sign( { data: decoded.data }, JWT_SECRET, { expiresIn: JWT_ACCESS_EXPIRED } )

      return res.status(200).json({
        status: true,
        data: {
          token: token
        }
      })
    })

  } catch (error) {
    if (error.code === 'ECONNREFUSED') {
      return res.status(500).json({ status: false, message: 'service unavailable' })
    }

    const { status, data } = error.response
    return res.status(status).json(data)
  } 
}