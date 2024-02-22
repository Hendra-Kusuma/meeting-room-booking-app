import axios from "axios";

export const getRooms = (callback) => {
    axios
    .get("http://127.0.0.1:5173/api/rooms")
    .then((res)=> {
        callback(res.data.room)
    })
    .catch((err)=> {
        console.log(err)
    }) 
}

export const getRoomsUsage = (callback) => {
    axios
    .get("http://127.0.0.1:5173/api/room-usage")
    .then((res)=> {
        callback(res.data.roomusages)
    })
    .catch((err)=> {
        console.log(err)
    }) 
}