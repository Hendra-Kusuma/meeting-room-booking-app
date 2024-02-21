const ClientsModel = require('../models/index')

async function getClients (req, res){
    try {
        const clients = await ClientsModel.clients.findAll()
        return res.status(200).json({
            message:'clients fetched', 
            clients: clients})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getClients
}