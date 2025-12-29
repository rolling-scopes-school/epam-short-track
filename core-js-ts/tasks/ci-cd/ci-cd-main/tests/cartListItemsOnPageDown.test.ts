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

test('check easy down', () => {
  expect(cartList.itemsOnPageDown(cart, pageInfo).itemsOnPage).toStrictEqual(2);
});

test('check do nothing', () => {
  pageInfo.itemsOnPage = 1;
  expect(cartList.itemsOnPageDown(cart, pageInfo).itemsOnPage).toStrictEqual(1);
});

test('check min 1', () => {
  for (let y = 0; y < 11; y++) {
    cartList.itemsOnPageUp(cart, pageInfo);
  }
  for (let i = 20; i > 0; i--) {
    cartList.itemsOnPageDown(cart, pageInfo);
  }
  expect(cartList.itemsOnPageDown(cart, pageInfo).itemsOnPage).toStrictEqual(1);
});
