const roomsUsage = require("../models/index");
const clientsModel = require("../models/index");
const roomsModel = require("../models/index");

async function getRoomUsage(req, res) {
  try {
    const roomUsages = await roomsUsage.roomusages.findAll({
      include: [
        { model: clientsModel.clients, as: 'clientsName', attributes: ['name'] }, // Menggunakan model yang benar
        { model: roomsModel.rooms, as: 'roomsName', attributes: ['roomName'] } // Menggunakan model yang benar
      ]
    });
    console.log(roomUsages)

    const transformedData = roomUsages.map(roomUsage => ({
      clientId: roomUsage.clientId,
      clientName: roomUsage.clientsName.name,
      roomId: roomUsage.roomId,
      roomName: roomUsage.roomsName.roomName,
      startTime: roomUsage.startTime,
      endTime: roomUsage.endTime,
      bookingDate: roomUsage.bookingDate,
      quotaUsed: roomUsage.quotaUsed
    }));
    
    return res.status(200).json({
      message: "roomUse fetched",
      roomUse: transformedData,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


async function createRoomUsage(req, res) {
  try {
    const { clientId, roomId, startTime, endTime, bookingDate, quotaUsed } = req.body;
    // const user = await userModel.user.findByPk(req.user.id);
    // if (!user) {
    //   return res.status(404).json({ error: "You Are Not Authorized" });
    // }
    const cekClient = await clientsModel.clients.findByPk(req.body.clientId);
    if (!cekClient) {
        return res.status(404).json({ error: "Clients not found" });
      }
    const cekRooms = await roomsModel.rooms.findByPk(req.body.roomId);
    if (!cekRooms) {
        return res.status(404).json({ error: "Rooms not found" });
      }
    const roomUse = await roomsUsage.roomusages.create({
      clientId: clientId,
      roomId: roomId,
      startTime: startTime,
      endTime: endTime,
      bookingDate: bookingDate,
      quotaUsed: quotaUsed
    });
    return res.status(201).json({
      message: "roomUse created",
      newData: roomUse,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function updateRoomUsage(req, res) {
  try {
    const { clientId, roomId, startTime, endTime, bookingDate } = req.body;
    // const user = await userModel.user.findByPk(req.user.id);
    // if (!user) {
    //   return res.status(404).json({ error: "You Are Not Authorized" });
    // }
    const cekUser = await clientsModel.clients.findByPk(req.body.clientId);
    if(!cekUser) {
        return res.status(404).json({ error: "Clients not found" });
      }
    const cekRooms = await clientsModel.clients.findByPk(req.body.roomId);
    if(!cekRooms) {
        return res.status(404).json({ error: "Rooms not found" });
    }
    const roomUse = await roomsUsage.roomusages.findByPk(req.params.id);
    if (!roomUse) {
      return res.status(404).json({ error: "roomUsage not found" });
    }
    const updatedRoomUse = await roomUse.update({
        clientId : clientId, 
        roomId: roomId, 
        startTime: startTime, 
        endTime: endTime, 
        bookingDate: bookingDate
    })
    return res.status(201).json({
      message: "roomUse updated",
      newData: updatedRoomUse,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message });
  }
}

async function deleteRoomUsage(req, res) {
  try {
    // const user = await userModel.user.findByPk(req.user.id);
    // if (!user) {
    //   return res.status(404).json({ error: "You Are Not Authorized" });
    // }
    const roomUse = await roomsUsage.roomusages.findByPk(req.params.id);
    if (!roomUse) {
      return res.status(404).json({ error: "roomUsage not found" });
    }
    await roomUse.destroy();
    return res.status(200).json({
      message: "rooms deleted",
    })
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getRoomUsage,
  createRoomUsage,
  updateRoomUsage,
  deleteRoomUsage
};
