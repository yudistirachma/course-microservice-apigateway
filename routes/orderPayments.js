const express = require('express');
const router = express.Router();
const orderPayments = require('./handler/orderPayments');

router.get('/', orderPayments.getOrders);

module.exports = router;