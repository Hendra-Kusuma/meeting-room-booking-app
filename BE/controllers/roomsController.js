const roomsModel = require("../models/index");
const User = require("../models/index");

async function getRooms(req, res) {
  try {
    // const user = await User.user.findByPk(req.user.id);
    // if (!user) {
    //   return res.status(404).json({ error: "You Are Not Authorized" });
    // }
    room = await roomsModel.rooms.findAll();
    return res.status(200).json({
      message: "rooms fetched",
      room: room,
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message });
  }
}

async function createRooms(req, res) {
  try {
    // const user = await User.user.findByPk(req.user.id);
    // if (!user) {
    //   return res.status(404).json({ error: "You Are Not Authorized" });
    // }
    const { roomName, costPerHour } = req.body;
    rooms = await roomsModel.rooms.create({
      roomName: roomName,
      costPerHour: costPerHour,
    });
    return res.status(201).json({
      message: "rooms created",
      newData: rooms,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function updateRooms(req, res) {
  try {
    // const user = await User.user.findByPk(req.user.id);
    // if (!user) {
    //   return res.status(404).json({ error: "You Are Not Authorized" });
    // }
    const { roomName, costPerHour } = req.body;
    const rooms = await roomsModel.rooms.findByPk(req.params.id);
    if (!rooms) {
      return res.status(404).json({ error: "rooms not found" });
    }
    const updatedRooms = await rooms.update({
      roomName: roomName,
      costPerHour: costPerHour,
    });
    return res.status(201).json({
      message: "rooms updated",
      newData: updatedRooms,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function deleteRooms(req, res) {
  try {
    // const user = await User.user.findByPk(req.user.id);
    // if (!user) {
    //   return res.status(404).json({ error: "You Are Not Authorized" });
    // }
    const rooms = await roomsModel.rooms.findByPk(req.params.id);
    if (!rooms) {
      return res.status(404).json({ error: "rooms not found" });
    }
    await rooms.destroy();
    return res.status(200).json({
      message: "rooms deleted",
    })
  } catch (error) {}
}

module.exports = {
  getRooms,
  createRooms,
  deleteRooms,
  updateRooms
};
