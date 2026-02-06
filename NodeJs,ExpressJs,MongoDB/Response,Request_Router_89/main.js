const express = require('express')
const blog = require('./routes/blog')



const app = express()
app.use(express.static("public"))
app.use('/blog', blog)

const port = 3000


app.get('/', (req, res) => {
    console.log("Hey! It's a get request")
  res.send('Hello World2!')
})
app.post('/', (req, res) => {
    console.log("Hey! It's a post request")
  res.send('Hello World post!')
})
app.put('/', (req, res) => {
    console.log("Hey! It's a put request")
  res.send('Hello World put !')
})
app.get("/index",(req, res) => {
    console.log("Hey! It's a index request")
  res.sendFile('templates/index.html',{root: __dirname})
})
app.get("/api",(req, res) => {
 res.json({name:'animesh',age:'21'})
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})