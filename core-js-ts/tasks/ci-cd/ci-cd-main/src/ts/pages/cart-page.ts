import { getExistentElement, openPurchaseModal } from '../base/helpers';
import { promoList } from '../base/promo-codes';
import Cart from '../components/cart';
import CartList from '../components/cartList';
import Page from './page';
import { PageInfo } from '../base/types';
import Router from '../router';
import { PagesList } from '../base/enums';
import plants from '../../data/plants.json';

class CartPage extends Page {
  public pageInfo: PageInfo;

  constructor(cart: Cart) {
    super(cart, 'cart');
    this.cart = cart;
    this.pageInfo = this.setPageInfo();
  }

  private setPageInfo() {
    let pageInfo: PageInfo;
    const startPageInfo: PageInfo = {
      itemsOnPage: 4,
      currentPage: 1,
    };
    const oldPageInfoJson = localStorage.getItem('pageInfo');
    if (oldPageInfoJson) {
      const oldPageInfoObj: PageInfo = JSON.parse(oldPageInfoJson);
      oldPageInfoObj ? (pageInfo = oldPageInfoObj) : (pageInfo = startPageInfo);
    } else {
      pageInfo = startPageInfo;
    }
    return pageInfo;
  }

  private getTotal() {
    let sum = this.cart.getProductSum();
    if (this.cart.activePromoCodes.length > 0) {
      this.cart.activePromoCodes.forEach((code) => {
        sum = sum * ((100 - promoList[code]) / 100);
      });
    }
    return `$${Math.floor(sum).toString()}`;
  }

  private makePromoCard(code: string, discount: number): HTMLElement {
    const promoCard = document.createElement('li');
    promoCard.id = code;
    const promoText = document.createElement('span');
    const promoValue = document.createElement('span');
    promoCard.classList.add('discounts__item', 'discounts__item-promo');
    promoText.innerText = `Promo ${code}`;
    promoValue.innerText = `- ${discount} %`;
    promoCard.append(promoText, promoValue);
    return promoCard;
  }

  private setPromoCodes(container: HTMLElement) {
    container.innerHTML = '';
    if (this.cart.activePromoCodes.length > 0) {
      this.cart.activePromoCodes.forEach((code) => {
        if (code in promoList) {
          const promoCard = this.makePromoCard(code, promoList[code]);
          container.appendChild(promoCard);
        }
      });
    }
  }

  public updateBill(HTMLBill: Element) {
    const amount = HTMLBill.querySelector('#bill-item');
    amount ? (amount.innerHTML = this.cart.getProductAmount().toString()) : null;
    const container = HTMLBill.querySelector('#bill-promo-container');
    container instanceof HTMLElement ? this.setPromoCodes(container) : null;
    const total = HTMLBill.querySelector('#bill-total');
    total ? (total.innerHTML = this.getTotal()) : null;
    const subtotal = HTMLBill.querySelector('#bill-old-sum');
    if (subtotal instanceof HTMLElement) {
      const subtotalVal = this.cart.getProductOldSum().toString();
      subtotal.innerHTML = subtotalVal;
      if (subtotalVal === this.getTotal().slice(1)) {
        subtotal.style.textDecoration = 'none';
      } else {
        subtotal.style.textDecoration = 'line-through';
      }
    }
    this.setQuery();
  }

  private setCartFromQuery() {
    const currentUrl = new URL(window.location.href);
    const queryCart = currentUrl.searchParams.get('cart');
    if (queryCart) {
      try {
        const queryCartObj: Cart = JSON.parse(queryCart);
        if (queryCartObj && this.isCartValid(queryCartObj)) {
          this.cart.basket = queryCartObj.basket;
          this.cart.activePromoCodes = queryCartObj.activePromoCodes;
          this.cart.saveCart();
        }
      } catch (e) {
        console.log('Non-existent query parameters. oh well, we loaded the page without them');
      }
    }
  }

  private setPaginationFromQuery() {
    const currentUrl = new URL(window.location.href);
    const queryPageInfo = currentUrl.searchParams.get('pageInfo');
    if (queryPageInfo && JSON.parse(queryPageInfo)) {
      const queryPageInfoObj: PageInfo = JSON.parse(queryPageInfo);
      if (queryPageInfoObj && this.isPaginationValid(queryPageInfoObj)) {
        this.pageInfo = queryPageInfoObj;
        localStorage.setItem('pageInfo', JSON.stringify(queryPageInfoObj));
      }
    }
  }

  private setQuery() {
    const currentUrl = new URL(window.location.href);
    if (currentUrl.pathname !== PagesList.cartPage) return;
    currentUrl.searchParams.set('cart', JSON.stringify(this.cart));
    currentUrl.searchParams.set('pageInfo', JSON.stringify(this.pageInfo));
    window.history.replaceState({}, currentUrl.toString(), currentUrl);
  }

  private isCartValid(queryCartObj: Cart) {
    let errors = 0;
    !queryCartObj.activePromoCodes ? (errors += 1) : null;
    !queryCartObj.basket ? (errors += 1) : null;
    for (const key in queryCartObj.basket) {
      const plant = plants.products.filter((value) => value.id.toString() === key)[0];
      !plant ? (errors += 1) : null;
      plant.stock < queryCartObj.basket[key] ? (errors += 1) : null;
    }
    if (errors === 0) return true;
    return false;
  }

  private isPaginationValid(queryPageInfo: PageInfo) {
    let errors = 0;
    !queryPageInfo.currentPage ? (errors += 1) : null;
    !queryPageInfo.itemsOnPage ? (errors += 1) : null;
    queryPageInfo.itemsOnPage < 1 || queryPageInfo.itemsOnPage > 10 ? (errors += 1) : null;
    const itemsInBasket = Object.keys(this.cart.basket).length;
    const lastPage = Math.ceil(itemsInBasket / queryPageInfo.itemsOnPage);
    queryPageInfo.currentPage > lastPage || queryPageInfo.currentPage < 1 ? (errors += 1) : null;
    if (errors === 0) return true;
    return false;
  }

  protected fillPage(page: DocumentFragment): DocumentFragment {
    this.setCartFromQuery();
    this.setPaginationFromQuery();
    const cartContainer = page.querySelector('.cart-page__container');
    if (this.cart.getProductAmount() === 0) {
      const emptyTemp = document.getElementById('empty-cart');
      if (emptyTemp instanceof HTMLTemplateElement) {
        const emptyPage = emptyTemp.content.cloneNode(true);
        cartContainer?.append(emptyPage);
      }
    } else {
      const fullTemp = document.getElementById('full-cart');
      if (fullTemp instanceof HTMLTemplateElement) {
        const fullPage = fullTemp.content.cloneNode(true);
        if (fullPage instanceof DocumentFragment) {
          const fulledPage = this.fillFullPage(fullPage);
          cartContainer?.append(fulledPage);
        }
      }
    }
    return page;
  }

  protected fillFullPage(fullPage: DocumentFragment): DocumentFragment {
    const bill = fullPage.querySelector('#bill');
    if (bill) {
      this.updateBill(bill);
      const promoInput = fullPage.querySelector('.full-cart-page__promo-input');
      if (promoInput instanceof HTMLInputElement) {
        promoInput.addEventListener('input', () => this.cart.addPromo(promoInput));
        promoInput.addEventListener('input', () => this.updateBill(bill));
        bill.addEventListener('click', (e) => {
          const target = e.target;
          if (target instanceof HTMLElement) {
            const promo = target.closest('.discounts__item-promo');
            if (promo) {
              this.cart.deletePromo(promo);
              this.updateBill(bill);
            }
          }
        });
      }
    }
    const buyBtn = fullPage.querySelector('.full-cart-page__buy-button');
    buyBtn ? buyBtn.addEventListener('click', () => openPurchaseModal(this.cart)) : null;

    const itemsContainer = fullPage.querySelector('.full-cart-page__products');
    if (itemsContainer instanceof HTMLElement && bill) {
      getExistentElement('.clean-card-btn', itemsContainer).addEventListener('click', () => {
        this.cart.cleanCart();
        this.pageInfo.currentPage = 1;
        Router.goTo(PagesList.cartPage);
      });
      const cartList = new CartList(itemsContainer);
      itemsContainer.addEventListener('click', (e) => {
        const newData = cartList.changeCartList(e, this.cart, this.pageInfo);
        this.cart = newData.cart;
        this.pageInfo = newData.pageInfo;
        this.updateBill(bill);
      });
      cartList.updateCartList(this.cart, this.pageInfo);
      cartList.fillCards(this.cart, this.pageInfo);
      this.cart.updateHeader();
    }

    return fullPage;
  }
}

export default CartPage;
