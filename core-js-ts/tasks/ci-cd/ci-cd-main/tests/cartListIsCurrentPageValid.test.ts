import Cart from '../src/ts/components/cart';
import { PageInfo } from '../src/ts/base/types';
import CartList from '../src/ts/components/cartList';

let cartList: CartList;
let cart: Cart;
let pageInfo: PageInfo;
const container = document.createElement('div');

beforeEach(() => {
  cartList = new CartList(container);
  cart = new Cart();
  cart.saveCart = () => null;
  pageInfo = {
    currentPage: 1,
    itemsOnPage: 3,
  };
});

test('check wrong current page', () => {
  pageInfo.currentPage = -1;
  expect(cartList.isCurrentPageValid(cart, pageInfo)).toStrictEqual(false);
});

test('check empty cart', () => {
  pageInfo.currentPage = 2;
  expect(cartList.isCurrentPageValid(cart, pageInfo)).toStrictEqual(false);
});

test('check false', () => {
  cart.add('1');
  pageInfo.currentPage = 2;
  expect(cartList.isCurrentPageValid(cart, pageInfo)).toStrictEqual(false);
});

test('check true', () => {
  cart.add('1');
  cart.add('2');
  cart.add('3');
  cart.add('4');
  pageInfo.currentPage = 2;
  expect(cartList.isCurrentPageValid(cart, pageInfo)).toStrictEqual(true);
});
