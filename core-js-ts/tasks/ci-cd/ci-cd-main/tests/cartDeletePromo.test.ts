import Cart from '../src/ts/components/cart';

let cart: Cart;
let element: Element;

beforeEach(() => {
  cart = new Cart();
  cart.saveCart = () => null;
  element = document.createElement('li');
});

test('check ease delete', () => {
  cart.activePromoCodes = ['SALE10'];
  element.id = 'SALE10';
  cart.deletePromo(element);
  expect(cart.activePromoCodes).not.toContain('SALE10');
});

test('check 3 times delete', () => {
  cart.activePromoCodes = ['SALE10'];
  element.id = 'SALE10';
  cart.deletePromo(element);
  cart.deletePromo(element);
  cart.deletePromo(element);
  expect(cart.activePromoCodes).toHaveLength(0);
});

test('check empty', () => {
  cart.activePromoCodes = ['SALE10'];
  cart.deletePromo(element);
  expect(cart.activePromoCodes).toContain('SALE10');
});

test('check lowercase', () => {
  cart.activePromoCodes = ['SALE10'];
  cart.deletePromo(element);
  element.id = 'saLE10';
  expect(cart.activePromoCodes).toContain('SALE10');
});
