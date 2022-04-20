const express = require('express');
const router = express.Router();
const userHandler = require('./handler/user');

router.get('/', userHandler.getUsers);
router.get('/:id', userHandler.getUser);
router.post('/', userHandler.register);
router.post('/login', userHandler.login);
router.post('/logout', userHandler.logout);
router.put('/:id', userHandler.update);
router.delete('/:id', userHandler.destroy);

module.exports = router;