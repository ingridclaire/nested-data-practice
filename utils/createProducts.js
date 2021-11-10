const faker = require('faker');
const { v4: uuidv4 } = require('uuid');

const createProducts = () => {
  const products = [];
  //set up a loop to create an array of 100 products
  for (let i = 0; i < 100; i++) {
    //create tags for the product
    const tags = [];
    //loop a random number of times between 0-5 (product will have between 0-5 tags)
    for (let j = 0; j < Math.floor(Math.random() * 6); i++) {
      //each tag will be an object with id and name
      tags.push({
        tag_id: uuidv4(),
        tag_name: faker.commerce.productAdjective()
      });
    }
    //initialize the price and description
    const price = faker.commerce.price();
    const description = faker.commerce.productDescription();
    //define the new product to be added to the array
    let newProduct = {
      id: uuidv4(),
      name: faker.commerce.productName(),
      price: {
        normalPrice: price,
        salePrice: price * 0.75
      },
      tags: tags,
      description: {
        short: description.slice(0, 10) + "...",
        full: description
      },
      image: {
        url: faker.image.imageUrl(),
        avatar: faker.image.avatar()
      }
    }
    products.push(newProduct);
  }
  return products;

}

const results = createProducts();


module.exports = results;