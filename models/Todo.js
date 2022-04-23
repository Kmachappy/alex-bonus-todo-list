// import the already connected object 
const mongoose = require("./connection")

// Schema the definition of our data type
// model, the object for working with our data type

// schemas and models
const todoSchema = new mongoose.Schema({
    text: String,
    completed: Boolean,
}, {timestamps: true})

const Todo = mongoose.model("Todo", todoSchema)

// export the model
module.exports = Todo