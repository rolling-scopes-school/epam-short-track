import Cart from '../src/ts/components/cart';
import PurchaseModal from '../src/ts/components/purchase-modal';

let cart: Cart;
let modal: PurchaseModal;

beforeEach(() => {
  const modalTemp = document.createElement('template');
  const container = document.createElement('div');
  cart = new Cart();
  cart.saveCart = () => null;
  modal = new PurchaseModal(modalTemp, cart, container);
});

test('check 3 + 3', () => {
  const error = document.createElement('div');
  error.id = 'purchaseNameError';
  const name = document.createElement('input');
  name.id = 'purchaseName';
  name.value = 'AAA AAA';
  expect(modal.isNameValid(name, error)).toStrictEqual(true);
});

test('check 3 + 2', () => {
  const error = document.createElement('div');
  error.id = 'purchaseNameError';
  const name = document.createElement('input');
  name.id = 'purchaseName';
  name.value = 'AAA AA';
  expect(modal.isNameValid(name, error)).toStrictEqual(false);
});

test('check 2 + 3', () => {
  const error = document.createElement('div');
  error.id = 'purchaseNameError';
  const name = document.createElement('input');
  name.id = 'purchaseName';
  name.value = 'AA AAA';
  expect(modal.isNameValid(name, error)).toStrictEqual(false);
});

test('check empty', () => {
  const error = document.createElement('div');
  error.id = 'purchaseNameError';
  const name = document.createElement('input');
  name.id = 'purchaseName';
  expect(modal.isNameValid(name, error)).toStrictEqual(false);
});

test('check 3 + 3 + 2', () => {
  const error = document.createElement('div');
  error.id = 'purchaseNameError';
  const name = document.createElement('input');
  name.id = 'purchaseName';
  name.value = 'AAA AAA AA';
  expect(modal.isNameValid(name, error)).toStrictEqual(false);
});
