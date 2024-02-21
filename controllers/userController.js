const UserModel = require('../models/user')

async function getUsers (req, res){
    try {
        const clients = await UserModel.findAll()
        res.json(clients)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getUsers
}