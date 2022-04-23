// imports
require("dotenv").config() // get our .env variables
const express = require("express") // web framework
const mongoose = require("mongoose") // Object Document Manager (Work with DB)
const methodOverride = require("method-override") // override request methods
const morgan = require("morgan") // developer tool for https codes

const PORT = process.env.PORT // gets env file variable PORT
const dbURL = process.env.DATABASE_URL // gets env file variable DATABASE_URL

// creates  
const app = express() 

// middleware
app.use(express.urlencoded({extended: true})) // override requres methods for form submissions
app.use(express.static("public")) // access static files with under the public folder 
app.use(morgan("dev")) // log http requests and codes


// routes
app.get("/",(req,res)=>{
    res.send("hello")
})


// database connect
mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, ()=>{})

// stores connection
const db = mongoose.connection

// mongoose connection messages
db
.on("error", err => console.log(`error\n${err.message}`))
.on("connected", ()=> console.log("Mongo DB Connected"))
.on("disconnected", ()=> console.log("Mongo DB Disconnected"))




// server listener
app.listen(PORT, ()=> console.log(`We are listening on ${PORT}`))