import Cart from '../src/ts/components/cart';
import plantsList from '../src/data/plants.json';
import { Products } from '../src/ts/base/types';

let cart: Cart;
let plants: Products[];

beforeEach(() => {
  cart = new Cart();
  plants = plantsList.products;
});

test('check first 3 plants', () => {
  cart.basket = {
    1: 1,
    2: 1,
    3: 1,
  };
  const answer = plants.reduce((acc, plant, ind) => {
    if (ind < 3) {
      return plant.price + acc;
    }
    return acc;
  }, 0);
  expect(cart.getProductSum()).toBe(answer);
});

test('check all plants', () => {
  plants.forEach((val) => {
    cart.basket[val.id] = 1;
  });
  const answer = plants.reduce((acc, plant) => {
    return plant.price + acc;
  }, 0);
  expect(cart.getProductSum()).toBe(answer);
});

test('check empty', () => {
  expect(cart.getProductSum()).toBe(0);
});

test('check fill and delete', () => {
  plants.forEach((val) => {
    cart.basket[val.id] = 1;
  });
  cart.basket = {};
  expect(cart.getProductSum()).toBe(0);
});
