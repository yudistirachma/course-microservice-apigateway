const express = require('express');
const router = express.Router();
const mentorHandler = require('./handler/mentor');
// const verivyToken = require('../middlewares/verifyToken');

router.get('/', mentorHandler.getMentors);
router.get('/:id', mentorHandler.getMentor);
router.post('/', mentorHandler.create);
router.put('/:id', mentorHandler.update);
router.delete('/:id', mentorHandler.destroy);

module.exports = router;