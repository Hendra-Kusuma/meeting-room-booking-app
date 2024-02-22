const UserModel = require("../models/index");

async function getUsers(req, res) {
  try {
    const user = await UserModel.user.findAll();
    return res.status(200).json({ user: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function createUsers(req, res) {
  try {
    // const userId = req.user.id
    // const user = await UserModel.users.findByPk(userId);
    // if (!user) {
    //   return res.status(404).json({ error: "You Are Not Authorized" });
    // }
    const { name, email, phone, password } = req.body;
    const newUsers = await UserModel.user.create({
      name: name,
      email: email,
      phone: phone,
      password: password,
    });
    return res.status(201).json({
      message: "User created",
      newData: newUsers,
    });
  } catch (error) {
    return console.error(error);
  }
}

async function updateUser(req, res) {
  try {
    // const userId = req.user.id;
    // const cekUser = await UserModel.users.findByPk(userId);
    // if (!cekUser) {
    //   return res.status(404).json({ error: "You Are Not Authorized" });
    // }
    const { name, email, phone, password } = req.body;
    const cekClient = await UserModel.user.findByPk(req.params.id);
    const updatedUser = await cekClient.update({
      name: name,
      email: email,
      phone: phone,
      password: password,
    });
    return res.status(201).json({
      message: "User updated",
      data: updatedUser,
    });
  } catch (error) {
    return console.error(error);;
  }
}

async function deleteUser(req, res) {
  try {
    // const userId = req.user.id;
    // const cekUser = await UserModel.users.findByPk(userId);
    // if (!cekUser) {
    //   return res.status(404).json({ error: "You Are Not Authorized" });
    // }
    const cekDel = await UserModel.user.findByPk(req.params.id);
    await cekDel.destroy();
      res.status(200).json({ message: "Client deleted" });
  } catch (error) {
    return res.status(500).json({ error: "An error occurred on the server" });
  }
}

module.exports = {
  getUsers,
  createUsers,
  updateUser,
  deleteUser
};
