const express = require('express')
const app = express()
const pug = require('pug');
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(pug.compileFile('index.pug')())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})