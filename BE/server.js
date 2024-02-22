const express = require('express')
require('dotenv').config();
const app = express()
const port = 5173
const cookieParser = require('cookie-parser')
const morgan = require("morgan");
const cors = require('cors');

const clientsRoute = require('./routes/clientsRoute')
const usersRoute = require('./routes/userRoute')
const roomsRoute = require('./routes/roomsRoute')
const roomUsageRoute = require('./routes/roomUsageRouter')
const authRoute = require('./routes/authRoute')

// LOGGING MIDDLEWARE
app.use(morgan('dev'));
app.use(express.json())
app.use(cookieParser())

app.use(cors({
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200 
}));

// ROUTES
app.use("/api", clientsRoute)
app.use("/api", usersRoute)
app.use("/api", roomsRoute)
app.use("/api", roomUsageRoute)
app.use("/api", authRoute)


app.listen(port, () => {
  console.log(`Booking Room app listening on port ${port}`)
})