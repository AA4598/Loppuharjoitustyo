const express = require('express');
const usersControllers = require('../controllers/user-controllers');

const router = express.Router();

router.post('/login', usersControllers.login);

router.post('/register', usersControllers.register);

module.exports = router;