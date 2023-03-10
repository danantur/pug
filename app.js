const express = require('express')
const app = express()
const pug = require('pug');
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(pug.compileFile('promo.pug')())
})

app.get('/login', (req, res) => {
  res.send(pug.compileFile('login.pug')())
})

app.get('/main', (req, res) => {
  res.send(pug.compileFile('main.pug')())
})

app.get('/registration', (req, res) => {
  res.send(pug.compileFile('registration.pug')())
})

app.get('/products', (req, res) => {
  res.send(pug.compileFile('products.pug')())
})

app.get('/product', (req, res) => {
  res.send(pug.compileFile('product.pug')())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})