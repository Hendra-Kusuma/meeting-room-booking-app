const express = require('express');
const router = express.Router();
const { getUsers, createUsers, updateUser, deleteUser } = require('../controllers/userController');

router.get('/users', getUsers)
router.post('/users', createUsers)
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)


module.exports = router;