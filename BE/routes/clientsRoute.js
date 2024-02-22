const express = require('express');
const router = express.Router();
const { getClients, createClients, updatedClient, deleteClient } = require('../controllers/clientsController');
const { verifyToken } = require('../middleware/verifyToken')

router.get('/clients', getClients)
router.post('/clients', createClients)
router.put('/clients/:id',  updatedClient)
router.delete('/clients/:id', deleteClient)





module.exports = router;