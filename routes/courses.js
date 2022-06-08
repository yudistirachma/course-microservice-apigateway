const express = require('express');
const router = express.Router();
const courseHandler = require('./handler/course');
const verifyToken = require('../middlewares/verifyToken');
const can = require('../middlewares/permission');

router.get('/', courseHandler.getCourses);
router.get('/:id', courseHandler.getCourse);

router.post('/', verifyToken, can('admin'), courseHandler.create);
router.put('/:id', verifyToken, can('admin'), courseHandler.update);
router.delete('/:id', verifyToken, can('admin'), courseHandler.destroy);

module.exports = router;