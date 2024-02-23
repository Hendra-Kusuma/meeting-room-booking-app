import axios from "axios";

export const getRooms = (callback) => {
  axios
    .get("http://127.0.0.1:5173/api/rooms")
    .then((res) => {
      callback(res.data.room);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getUsers = (callback) => {
  axios
    .get("http://127.0.0.1:5173/api/users")
    .then((res) => {
      callback(res.data.user);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getRoomsUsage = (callback) => {
  axios
    .get("http://127.0.0.1:5173/api/room-usage")
    .then((res) => {
      callback(res.data.roomUse);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const postLogin = async (email, password) => {
  try {
    const response = await axios.post("http://127.0.0.1:5173/api/auth/login", {
      email: email,
      password: password,
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const postRegister = (userData, callback) => {
  const { name, email, password } = userData;

  axios
    .post("http://127.0.0.1:5173/api/auth/register", {
      name: name,
      email: email,
      password: password,
    })
    .then((res) => {
      callback(res.data.register);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getClients = (callback) => {
  axios
    .get("http://127.0.0.1:5173/api/clients")
    .then((res) => {
      callback(res.data.clients);
    })
    .catch((err) => {
      console.log(err);
    });
};

