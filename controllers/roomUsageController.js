const roomsUsage = require('../models/index')

async function getRoomUsage (req, res){
    try {
        const roomUse = await roomsUsage.roomusages.findAll()
        return res.status(200).json({
            message:'roomUse fetched', 
            roomUse: roomUse
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getRoomUsage
}