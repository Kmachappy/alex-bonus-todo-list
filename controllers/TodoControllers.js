// imports / dependancies
const express = require("express")
const router = express.Router()
//so it starts server->todoController->Todo->connection and runs code from connection all the way back down which is why it connects to mongodb
const Todo = require("../models/Todo")


// routes
router.get("/", async (req,res)=>{
    // go get todos
    const todos = await Todo.find({})
    
    // render index.ejs
    res.render("index.ejs", {todos})
})

router.get("/seed", async (req,res)=>{
    // delete all existing
    await Todo.remove({}).catch((err)=> res.send(err))
    // add your sample todos
    const todos = await Todo.create([
        {text: "eat breakfast", completed: false},
        {text: "eat lunch", completed:false},
        {text: "eat dinner", completed: false}
    ]).catch((err)=>res.send(err))
    // send the todos as json
    res.json(todos)
})

router.post("/", async(req,res)=>{
    //create the todo
    await Todo.create(req.body).catch((err)=>res.send(err))
    // redirect back to main page
    res.redirect("/")
})

router.put("/:id", async (req,res)=>{
    //get the id from params
    const id = req.params.id
    //get the todo to be updated
    const todo = await Todo.findById(id)
    //update the todos completed property
    todo.completed = true
    todo.save() // save changes
    // redirect back to main page
    res.redirect("/")

})

 module.exports = router