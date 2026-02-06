const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.get('/', (req, res) => {
  res.send('Hello World!')
 })
// app.get('/about', (req, res) => {
//   res.send('Animesh Owner')
// })

// app.get('/contact', (req, res) => {
//   res.send('Contact me on 8810821835')
// })

// app.get('/blog', (req, res) => {
//   res.send('Blog')
// })

app.get('/blog/:slug', (req, res) => {
  res.send(`hello ${req.params.slug}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})