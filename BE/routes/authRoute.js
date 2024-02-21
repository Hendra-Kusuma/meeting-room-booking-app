const express = require('express');
const router = express.Router();
const { register, login, logout } = require('../controllers/authController')

// create user
router.post('/auth/register', register);
router.post('/auth/login', login);
router.post('/auth/logout', logout);

module.exports = router;