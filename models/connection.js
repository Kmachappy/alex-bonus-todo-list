// imports
require("dotenv").config()
const mongoose = require("mongoose")

// loading db url
const DATABASE_URL = process.env.DATABASE_URL

// database connect
mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, ()=>{})

//Save the connection
const db = mongoose.connection

// setup mongoose connection messages
db
.on("error", err => console.log(`error\n${err.message}`))
.on("connected", ()=> console.log("Mongo DB Connected"))
.on("disconnected", ()=> console.log("Mongo DB Disconnected"))


module.exports = mongoose