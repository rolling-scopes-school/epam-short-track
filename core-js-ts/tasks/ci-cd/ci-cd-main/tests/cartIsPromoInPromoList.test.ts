import Cart from '../src/ts/components/cart';

let cart: Cart;

beforeEach(() => {
  cart = new Cart();
  cart.saveCart = () => null;
});

test('check ease true', () => {
  expect(cart.isPromoInPromoList('SALE10')).toBeTruthy();
});

test('check ease true', () => {
  expect(cart.isPromoInPromoList('PLANTS10')).toBeTruthy();
});

test('check ease true', () => {
  expect(cart.isPromoInPromoList('FORYOU10')).toBeTruthy();
});

test('check ease false', () => {
  expect(cart.isPromoInPromoList('FORYOU11')).toBeFalsy();
});

test('check ease false', () => {
  expect(cart.isPromoInPromoList('sdasdasd')).toBeFalsy();
});

test('check empty', () => {
  expect(cart.isPromoInPromoList('')).toBeFalsy();
});

test('check lowercase', () => {
  expect(cart.isPromoInPromoList('sale10')).toBeFalsy();
});
