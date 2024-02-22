const express = require('express');
const router = express.Router();
const { getRoomUsage, createRoomUsage, updateRoomUsage, deleteRoomUsage } = require('../controllers/roomUsageController');
const {verifyToken} = require('../middleware/verifyToken');

router.get('/room-usage',  getRoomUsage)
router.post('/room-usage', createRoomUsage)
router.put('/room-usage/:id', updateRoomUsage)
router.delete('/room-usage/:id', deleteRoomUsage)


module.exports = router;