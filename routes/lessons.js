const express = require('express');
const router = express.Router();
const lessonHandler = require('./handler/lesson');

router.get('/', lessonHandler.getLessons);
router.get('/:id', lessonHandler.getLesson);
router.post('/', lessonHandler.create);
router.put('/:id', lessonHandler.update);
router.delete('/:id', lessonHandler.destroy);

module.exports = router;