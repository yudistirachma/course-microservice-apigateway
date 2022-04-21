const express = require('express');
const router = express.Router();
const userHandler = require('./handler/user');
const verivyToken = require('../middlewares/verifyToken');

router.get('/', verivyToken, userHandler.getUser);
router.get('/all', verivyToken, userHandler.getUsers);
router.post('/', userHandler.register);
router.post('/login', userHandler.login);
router.post('/logout', verivyToken, userHandler.logout);
router.put('/', verivyToken, userHandler.update);
router.delete('/:id', verivyToken, userHandler.destroy);


module.exports = router;