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

test('check easy', () => {
  cart.add('1');
  expect(cartList.getMaxPage(cart, pageInfo)).toStrictEqual(1);
});

test('check 0', () => {
  pageInfo.itemsOnPage = 0;
  cart.add('1');
  expect(cartList.getMaxPage(cart, pageInfo)).toStrictEqual(1);
});

test('check 4 items', () => {
  pageInfo.itemsOnPage = 3;
  cart.add('1');
  cart.add('2');
  cart.add('3');
  cart.add('4');
  expect(cartList.getMaxPage(cart, pageInfo)).toStrictEqual(2);
});

test('check empty cart', () => {
  expect(cartList.getMaxPage(cart, pageInfo)).toStrictEqual(1);
});
