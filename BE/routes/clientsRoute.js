const express = require('express');
const router = express.Router();
const { getClients, createClients, updatedClient, deleteClient } = require('../controllers/clientsController');
const { verifyToken } = require('../middleware/verifyToken')

router.get('/clients', verifyToken, getClients)
router.post('/clients', verifyToken, createClients)
router.put('/clients/:id', verifyToken, updatedClient)
router.delete('/clients/:id', deleteClient)





module.exports = router;