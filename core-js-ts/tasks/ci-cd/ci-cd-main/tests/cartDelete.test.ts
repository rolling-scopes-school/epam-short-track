import Cart from '../src/ts/components/cart';

let cart: Cart;

beforeEach(() => {
  cart = new Cart();
  cart.saveCart = () => null;
});

test('check ease delete', () => {
  cart.basket = { '1': 1 };
  cart.delete('1');
  expect(cart.basket).toStrictEqual({});
});

test('check fake name', () => {
  cart.basket = { '1': 1 };
  cart.delete('one');
  expect(cart.basket).toStrictEqual({ '1': 1 });
});

test('check empty', () => {
  cart.basket = { '1': 1 };
  cart.delete('');
  expect(cart.basket).toStrictEqual({ '1': 1 });
});

test('check 3 times', () => {
  cart.basket = { '1': 1 };
  cart.delete('1');
  cart.delete('1');
  cart.delete('1');
  expect(cart.basket).toStrictEqual({});
});
