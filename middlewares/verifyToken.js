const jwt = require('jsonwebtoken')
// eslint-disable-next-line no-undef
const { JWT_SECRET } = process.env

module.exports = async (req, res, next) => {
    const token = req.headers.authorization

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                status: false,
                message: err.message
            })
        }

        req.user = decoded
        return next()
    })
}