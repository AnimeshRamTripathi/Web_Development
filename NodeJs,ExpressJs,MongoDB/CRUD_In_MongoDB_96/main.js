import mongoose from "mongoose"
import express from "express"
import { Todo } from "./models/Todo.js";
let conn=await mongoose.connect("mongodb://localhost:27017/todo")

 

const app = express()
const port = 3000

app.get('/', async (req, res) => {

    const todo=new Todo
    ({title: "Hey first todo",desc: "Description of todo",isDone: false})
    const savedTodo = await todo.save();
    console.log("✅ Saved Todo:", savedTodo);

  res.send('Hello World!')
}) 

app.get('/a', async(req, res) => {

    let todo=await Todo.findOne({})
    console.log(todo.title)
  res.json({title: todo.title, desc: todo.desc})
}) 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})