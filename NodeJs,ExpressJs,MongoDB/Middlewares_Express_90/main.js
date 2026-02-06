const express = require('express')
const app = express()
const port = 3000
const fs=require("fs")

//middleware 1 for logger of our application
app.use((req,rs,next)=>
{
console.log(req.headers)
fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method}\n`)
 
next()
})
    
//middleware2
app.use((req,res,next)=>
{
console.log('m2')
 next()
})



app.get('/', (req, res ) => {
  res.send('Hello World!')
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})