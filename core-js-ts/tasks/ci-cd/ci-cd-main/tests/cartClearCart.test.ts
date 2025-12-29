import Cart from '../src/ts/components/cart';

let cart: Cart;

beforeEach(() => {
  cart = new Cart();
  cart.saveCart = () => null;
  cart.updateHeader = () => null;
});

test('check ease clear', () => {
  cart.basket = { '1': 1 };
  cart.cleanCart();
  expect(cart.basket).toStrictEqual({});
});

test('check empty', () => {
  cart.basket = {};
  cart.cleanCart();
  expect(cart.basket).toStrictEqual({});
});

test('check number key', () => {
  cart.basket = { 3: 2 };
  cart.cleanCart();
  expect(cart.basket).toStrictEqual({});
});
