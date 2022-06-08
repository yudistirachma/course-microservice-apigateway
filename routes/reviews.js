const express = require('express');
const router = express.Router();
const reviews = require('./handler/reviews');

router.get('/:id', reviews.getReviews);
router.post('/', reviews.create);
router.put('/:id', reviews.update);
router.delete('/:id', reviews.destroy);

module.exports = router;