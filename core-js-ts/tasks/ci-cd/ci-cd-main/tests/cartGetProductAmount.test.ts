import Cart from '../src/ts/components/cart';

let cart: Cart;

beforeEach(() => {
  cart = new Cart();
});

test('check 99', () => {
  cart.basket = {
    1: 8,
    6: 90,
    3: 1,
  };
  expect(cart.getProductAmount()).toBe(99);
});

test('check empty', () => {
  cart.basket = {};
  expect(cart.getProductAmount()).toBe(0);
});

test('check 0', () => {
  cart.basket = {
    '2': 0,
  };
  expect(cart.getProductAmount()).toBe(0);
});

test('check 0', () => {
  cart.basket = {
    2: 999999999999999,
  };
  expect(cart.getProductAmount()).toBe(999999999999999);
});
