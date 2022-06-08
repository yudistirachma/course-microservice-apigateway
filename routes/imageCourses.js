const express = require('express');
const router = express.Router();
const imageCourseHandler = require('./handler/imageCourse');

router.get('/', imageCourseHandler.getImageCourses);
router.get('/:id', imageCourseHandler.getImageCourse);
router.post('/', imageCourseHandler.create);
router.put('/:id', imageCourseHandler.update);
router.delete('/:id', imageCourseHandler.destroy);

module.exports = router;