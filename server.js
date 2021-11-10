const express = require('express');
const app = express();
const products = require('./data.json');

app.get('/', (req, res) => {
  res.send(products)
})

app.listen(3001, () => console.log('app listening...'))