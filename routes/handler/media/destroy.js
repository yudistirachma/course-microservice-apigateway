const apiAdapter = require('../../apiAdapter')
// eslint-disable-next-line no-undef
const { URL_SERVICE_MEDIA } = process.env

module.exports = async (req, res) => {
    try {
        const api = apiAdapter(URL_SERVICE_MEDIA)
        const media = await api.delete(`/media/${req.params.id}`)
        return res.json(media.data)
    } catch (error) {
        if (error.code === 'ECONNREFUSED') {
            return res.status(500).json({ status: false, message: "service unavailable" })
        }

        const { status, data } = error.response
        return res.status(status).json(data)
    }
}