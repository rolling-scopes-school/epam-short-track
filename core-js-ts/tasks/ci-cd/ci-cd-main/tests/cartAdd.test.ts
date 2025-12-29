import Cart from '../src/ts/components/cart';
import plantsList from '../src/data/plants.json';
import { Basket, Products } from '../src/ts/base/types';

let cart: Cart;
let plants: Products[];

beforeEach(() => {
  plants = plantsList.products;
  cart = new Cart();
  cart.saveCart = () => null;
});

test('check ease add', () => {
  cart.add('1');
  expect(cart.basket).toStrictEqual({ '1': 1 });
});

test('check fake name', () => {
  cart.add('one');
  expect(cart.basket).toStrictEqual({});
});

test('check empty', () => {
  cart.add('');
  expect(cart.basket).toStrictEqual({});
});

test('check 3 times', () => {
  cart.add('1');
  cart.add('1');
  cart.add('1');
  expect(cart.basket).toStrictEqual({ '1': 3 });
});

test('check test all plants', () => {
  const answer: Basket = {};
  plants.forEach((val) => {
    answer[val.id.toString()] = 1;
  });
  plants.forEach((val) => {
    cart.add(val.id.toString());
  });
  expect(cart.basket).toStrictEqual(answer);
});
