const express = require('express');
const router = express.Router();
const myCourseHandler = require('./handler/myCourse');

router.get('/', myCourseHandler.getMyCourses);
router.get('/:id', myCourseHandler.getMyCourse);
router.post('/', myCourseHandler.create);
router.delete('/:id', myCourseHandler.destroy);

module.exports = router;