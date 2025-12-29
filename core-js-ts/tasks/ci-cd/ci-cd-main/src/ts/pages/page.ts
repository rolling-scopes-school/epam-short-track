import Cart from '../components/cart';

class Page {
  public cart: Cart;
  protected id: string;
  protected container: HTMLElement | null;

  constructor(cart: Cart, id: string) {
    this.container = document.getElementById('page-container');
    this.id = id;
    this.cart = cart;
  }
  protected fillPage(page: DocumentFragment, id?: string) {
    console.log('Load page:', id);
    return page;
  }

  protected makePage(id?: string) {
    const template = document.getElementById(this.id);
    if (template instanceof HTMLTemplateElement && this.container) {
      const newPage = template.content.cloneNode(true);
      if (newPage instanceof DocumentFragment) {
        const filledPage = this.fillPage(newPage, id);
        return filledPage;
      }
      return newPage;
    }
    return null;
  }
  draw(id?: string) {
    const page = this.makePage(id);
    if (page && this.container) {
      this.container.innerHTML = '';
      this.container.append(page);
    }
  }
}

export default Page;
