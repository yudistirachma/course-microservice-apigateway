const express = require('express');
const router = express.Router();
const chapterHandler = require('./handler/chapter');

router.get('/', chapterHandler.getChapters);
router.get('/:id', chapterHandler.getChapter);
router.post('/', chapterHandler.create);
router.put('/:id', chapterHandler.update);
router.delete('/:id', chapterHandler.destroy);

module.exports = router;