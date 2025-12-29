import Page from './page';
import ProductCards from '../components/product-card/product-cards';
import Filter from '../components/filters/filter';
import { PlantsData, Products } from '../base/types';
import plantsData from '../../data/plants.json';
import Cart from '../components/cart';
import { getExistentElement, isHTMLElement } from '../base/helpers';
import { queryParamsObj } from '../components/filters/queryParams';

class CatalogPage extends Page {
  productCard: ProductCards;

  constructor(cart: Cart) {
    super(cart, 'catalog');
    this.productCard = new ProductCards(cart);
  }

  setSettingsButton() {
    getExistentElement('.catalog__filter-button').addEventListener('click', () => {
      this.toggleFilter();
    });
    getExistentElement('.catalog__filter-popup').addEventListener('click', () => {
      this.toggleFilter();
    });
  }

  toggleFilter() {
    getExistentElement('.filter').classList.toggle('filter_active');
    getExistentElement('.catalog__filter-popup').classList.toggle('catalog__filter-popup_active');
    getExistentElement('.catalog__filter-button').classList.toggle('filter-button_active');
    document.body.classList.toggle('body_hold');
  }

  drawProductCard(data: PlantsData): void {
    const values: Products[] = data.products ? data.products : [];
    const filter = new Filter(values);

    try {
      filter.recoveryState(values);
    } catch (err) {
      history.back();
    }
    this.productCard.draw(filter.getData());

    getExistentElement('.filter').addEventListener('input', (e) => {
      filter.checkboxFilter(e.target, values);
      const type = filter.rangeInputFilter(e.target, values);
      this.productCard.draw(filter.getData(type));
    });

    getExistentElement<HTMLInputElement>('.sort-input').addEventListener('input', () => {
      filter.searchInput(values);
      this.productCard.draw(filter.getData());
    });

    getExistentElement('.sort').addEventListener('click', (e) => {
      filter.sortBy(e.target, values);
      this.productCard.draw(filter.getData());
    });

    getExistentElement('.layout').addEventListener('click', (e) => {
      filter.changeLayout(e.target);
    });

    getExistentElement('.button_filter').addEventListener('click', () => {
      filter.resetState(values);
      this.productCard.draw(values);
    });

    getExistentElement('.button_copy').addEventListener('click', (e) => {
      navigator.clipboard.writeText(window.location.href);
      if (!isHTMLElement(e.target)) throw new Error();
      const button = e.target;
      button.style.color = '#FFFFFF';
      button.style.border = 'none';
      button.style.backgroundColor = '#ab5abb';
      button.textContent = 'Copied!';
      setTimeout(function () {
        button.style.color = '';
        button.style.border = '';
        button.style.backgroundColor = '';
        button.textContent = 'Copy link';
      }, 800);
    });
  }

  draw(id?: string) {
    const page = this.makePage(id);
    if (page && this.container) {
      this.container.innerHTML = '';
      this.container.append(page);
      this.drawProductCard(plantsData);
      this.setSettingsButton();
    }
  }

  static setQueryParams() {
    const currentParamsObj = Object.fromEntries(Object.entries(queryParamsObj).filter((item) => item[1] !== ''));
    const paramsStr = new URLSearchParams(currentParamsObj);
    const currentUrl = new URL(window.location.href.split('#')[0]);
    currentUrl.search = paramsStr.toString();
    window.history.replaceState({}, 'catalog', currentUrl);
  }
}

export default CatalogPage;
