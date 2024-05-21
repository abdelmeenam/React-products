import { IProduct } from '@/interfaces';
import { faker } from '@faker-js/faker';
// or, if desiring a different locale
// import { fakerDE as faker } from '@faker-js/faker';

// array of objects(Products) , each product has a name, price, and image , description using array.from


const PRODUCT_LENGTH = 15;
const fakeProductList:IProduct[] = Array.from({ length: PRODUCT_LENGTH }, () => ({
id: faker.string.uuid(),
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  price: faker.commerce.price(),
}));

export default fakeProductList;