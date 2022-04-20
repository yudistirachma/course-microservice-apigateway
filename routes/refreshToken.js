const express = require('express');
const router = express.Router();
const refreshTokenHandler = require('./handler/refresh-token');

router.get('/', refreshTokenHandler.getRefreshToken);
router.post('/', refreshTokenHandler.create);


module.exports = router;