const ClientsModel = require('../models/clients')
const User = require('../models/user')

async function getClients (req, res){
    try {
        const clients = await ClientsModel.findAll()
        res.json(clients)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getClients
}