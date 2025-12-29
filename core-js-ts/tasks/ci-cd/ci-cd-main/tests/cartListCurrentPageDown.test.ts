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
  cartList.fillCards = (cart, pageInfo) => {
    return { pageInfo, cart };
  };
  pageInfo = {
    currentPage: 1,
    itemsOnPage: 3,
  };
});

test('check page down', () => {
  cart.add('1');
  cart.add('2');
  cart.add('3');
  cart.add('4');
  pageInfo.currentPage = 2;
  cartList.currentPageDown(cart, pageInfo);
  expect(pageInfo.currentPage).toStrictEqual(1);
});

test('check do nothing', () => {
  cart.add('1');
  cart.add('2');
  cart.add('3');
  cart.add('4');
  pageInfo.currentPage = 1;
  cartList.currentPageDown(cart, pageInfo);
  expect(pageInfo.currentPage).toStrictEqual(1);
});

test('check empty cart', () => {
  pageInfo.currentPage = 1;
  cartList.currentPageDown(cart, pageInfo);
  expect(pageInfo.currentPage).toStrictEqual(1);
});

test('check wrong currentPage', () => {
  pageInfo.currentPage = -1;
  cartList.currentPageDown(cart, pageInfo);
  expect(pageInfo.currentPage).toStrictEqual(-1);
});
