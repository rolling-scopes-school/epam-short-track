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

test('check easy up', () => {
  expect(cartList.itemsOnPageUp(cart, pageInfo).itemsOnPage).toStrictEqual(4);
});

test('check do nothing', () => {
  pageInfo.itemsOnPage = 10;
  expect(cartList.itemsOnPageUp(cart, pageInfo).itemsOnPage).toStrictEqual(10);
});

test('check max 10', () => {
  for (let i = 0; i < 20; i++) {
    cartList.itemsOnPageUp(cart, pageInfo);
  }
  expect(cartList.itemsOnPageUp(cart, pageInfo).itemsOnPage).toStrictEqual(10);
});
