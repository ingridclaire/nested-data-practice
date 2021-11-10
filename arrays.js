const fs = require('fs');

let products;

fs.readFile('./data.json', (err, data) => {
  if (err) {
    console.log(err)
  } else {
    products = JSON.parse(data);

    // YOUR CODE HERE THAT USES PRODUCTS ARRAY





  }
});
