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

test('check page up', () => {
  cart.add('1');
  cart.add('2');
  cart.add('3');
  cart.add('4');
  cartList.currentPageUp(cart, pageInfo);
  expect(pageInfo.currentPage).toStrictEqual(2);
});

test('check do nothing', () => {
  cart.add('1');
  cart.add('2');
  cart.add('3');
  cartList.currentPageUp(cart, pageInfo);
  expect(pageInfo.currentPage).toStrictEqual(1);
});

test('check do nothing', () => {
  pageInfo.currentPage = 4;
  cartList.currentPageUp(cart, pageInfo);
  expect(pageInfo.currentPage).toStrictEqual(4);
});

test('check up from 0', () => {
  pageInfo.currentPage = 0;
  cartList.currentPageUp(cart, pageInfo);
  expect(pageInfo.currentPage).toStrictEqual(1);
});
