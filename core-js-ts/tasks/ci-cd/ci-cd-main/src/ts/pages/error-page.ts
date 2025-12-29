import Cart from '../components/cart';
import Page from './page';

class ErrorPage extends Page {
  constructor(cart: Cart) {
    super(cart, 'error');
  }
}

export default ErrorPage;
