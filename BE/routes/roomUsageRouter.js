const express = require('express');
const router = express.Router();
const { getRoomUsage, createRoomUsage, updateRoomUsage, deleteRoomUsage } = require('../controllers/roomUsageController');
const {verifyToken} = require('../middleware/verifyToken');

router.get('/room-usage', verifyToken, getRoomUsage)
router.post('/room-usage', verifyToken, createRoomUsage)
router.put('/room-usage/:id', verifyToken, updateRoomUsage)
router.delete('/room-usage/:id', verifyToken, deleteRoomUsage)


module.exports = router;