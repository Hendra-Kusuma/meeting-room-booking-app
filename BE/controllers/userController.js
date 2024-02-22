const UserModel = require('../models/index')

async function getUsers (req, res){
    try {
        const user = await UserModel.user.findAll()
        return res.status(200).json({user:user})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getUsers
}