const express = require('express');
const router = express.Router();
const {verifyToken} = require('../middleware/verifyToken')
const { getRooms, createRooms, deleteRooms, updateRooms } = require('../controllers/roomsController');

router.get('/rooms', verifyToken, getRooms)
router.post('/rooms', verifyToken, createRooms)
router.delete('/rooms/:id', verifyToken, deleteRooms)
router.put('/rooms/:id', verifyToken, updateRooms)

module.exports = router;