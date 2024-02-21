const express = require('express');
const router = express.Router();
const { getRoomUsage } = require('../controllers/roomUsageController');

router.get('/roomusage', getRoomUsage)


module.exports = router;