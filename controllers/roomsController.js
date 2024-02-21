const roomsModel = require('../models/index')

async function getRooms (req, res){
    try {
        room = await roomsModel.rooms.findAll()
        return res.status(200).json({
            message:'clients fetched', 
            room: room
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getRooms
}