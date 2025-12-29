import Cart from './components/cart';
import Router from './router';

class App {
  public cart: Cart;
  static router: Router;

  constructor() {
    this.cart = this.setCart();
    App.router = new Router(this.cart);
  }

  private setCart() {
    const newCart = new Cart();
    const oldCartJson = localStorage.getItem('cart');
    if (oldCartJson) {
      const oldCart: Cart = JSON.parse(oldCartJson);
      oldCart.basket ? (newCart.basket = oldCart.basket) : null;
      oldCart.activePromoCodes ? (newCart.activePromoCodes = oldCart.activePromoCodes) : null;
    }
    return newCart;
  }

  start() {
    Router.startRouter();
    this.cart.updateHeader();
  }
}

export default App;
