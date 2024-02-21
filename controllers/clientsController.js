const clientsModel = require("../models/index");
const User = require("../models/index");

async function getClients(req, res) {
  try {
    const user = await User.findByPk(req.user.id);
    if (!user) {
      return res.status(404).json({ error: "You Are Not Authorized" });
    }
    const clients = await clientsModel.clients.findAll();
    return res.status(200).json({
      message: "Clients fetched",
      clients: clients,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function createClients(req, res) {
  try {
    const userId = req.user.id;
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: "You Are Not Authorized" });
    }
    const { name, email, phone, credit } = req.body;
    const clients = await clientsModel.clients.create({
      name: name,
      email: email,
      phone: phone,
      credit: credit,
    });
    if (!clients) {
      return res.status(500).json({ error: "Failed to save Clients" });
    }
    return res.status(201).json({
      message: "Client created",
      newData: clients,
    });
  } catch (error) {
    return res.status(500).json({ error: "An error occurred on the server" });
  }
}

async function updatedClient(req, res) {
  try {
    const userId = req.user.id;
    const user = await User.user.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: "You Are Not Authorized" });
    }
    const { name, email, phone, credit } = req.body;
    const cekClient = await clientsModel.clients.findByPk(req.params.id);

    if (!cekClient) {
      return res.status(404).json({ error: "Client not found" });
    }

    const updatedClient = await cekClient.update({
      name: name,
      email: email,
      phone: phone,
      credit: credit,
    });

    return res.status(201).json({
      message: "Client updated",
      newData: updatedClient,
    });
  } catch (error) {
    return res.status(500).json({ error: "An error occurred on the server" });
  }
}

async function deleteClient(req, res) {
  try {
    const userId = req.params.id;
    const user = await clientsModel.clients.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: "clients no found" });
    } else {
      await user.destroy();
      res.status(200).json({ message: "Client deleted" });
    }

  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: "An error occurred on the server" });
  }
}

module.exports = {
  updatedClient,
  getClients,
  createClients,
  deleteClient
};
