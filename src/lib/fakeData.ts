import { IProduct } from '@/interfaces';
import { faker } from '@faker-js/faker';
// or, if desiring a different locale
// import { fakerDE as faker } from '@faker-js/faker';

// array of objects(Products) , each product has a name, price, and image , description using array.from


const PRODUCT_LENGTH = 5;
const fakeProductList:IProduct[] = Array.from({ length: PRODUCT_LENGTH }, () => ({
  id: faker.string.uuid(),
  title: faker.commerce.productName(),
  imageUrl: faker.image.url(),
  price: +faker.commerce.price(),
  description: faker.commerce.productDescription(),
  category: faker.commerce.department(),
  colors: [faker.color.human()],
}));

export default fakeProductList;