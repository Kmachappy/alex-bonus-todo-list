// imports / dependancies
const express = require("express")
const router = express.Router()
//so it starts server->todoController->Todo->connection and runs code from connection all the way back down which is why it connects to mongodb
const Todo = require("../models/Todo")
const TodoActions = require("./TodoActions")


// routes
router.get("/", TodoActions.index)

router.get("/seed", TodoActions.seed)

router.post("/", TodoActions.create)

router.put("/:id", TodoActions.update)

 module.exports = router