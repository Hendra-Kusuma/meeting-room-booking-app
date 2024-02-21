const express = require('express')
require('dotenv').config();
const app = express()
const port = 3000
const cookieParser = require('cookie-parser')
const morgan = require("morgan");

const clientsRoute = require('./routes/clientsRoute')
const usersRoute = require('./routes/userRoute')

app.use("/api", clientsRoute)
app.use("/api", usersRoute)

// LOGGING MIDDLEWARE
app.use(morgan('dev'));
app.use(express.json())
app.use(cookieParser())

// ROUTES
app.use("/api", clientsRoute)


app.listen(port, () => {
  console.log(`Booking Room app listening on port ${port}`)
})