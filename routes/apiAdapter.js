const axios = require('axios');

// eslint-disable-next-line no-undef
const { TIMEOUT } = process.env;

module.exports = (baseUrl) => {
    return axios.create({
        baseURL: baseUrl,
        timeout: parseInt(TIMEOUT)
    });
}