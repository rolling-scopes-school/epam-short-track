import Page from './page';
import plants from '../../data/plants.json';
import Cart from '../components/cart';
import { setAddButton, setBuyNowButton } from '../base/helpers';
import { PagesList } from '../base/enums';

class PlantPage extends Page {
  plantId?: string;

  constructor(cart: Cart) {
    super(cart, 'product-page');
    this.cart = cart;
  }

  private getPlant() {
    if (this.plantId) {
      const plant = plants.products.filter((val) => val.id === Number(this.plantId));
      return plant[0];
    } else {
      return plants.products[0];
    }
  }

  private setDescription(container: Element): void {
    const plant = this.getPlant();
    const descriptionTitles = [
      ['Title', `${plant.title}`],
      ['Type', `${plant.type}`],
      ['Description', `${plant.description}`],
      ['Price (with discount)', `$ ${plant.price}`],
      ['Height', `${plant.height} cm.`],
      ['Rating', `&#9733 ${plant.rating}`],
      ['Quantity in stock', `${plant.stock} psc.`],
    ];
    descriptionTitles.forEach((element) => {
      const block = document.createElement('li');
      block.classList.add('product-page__specification-item');
      const name = document.createElement('span');
      name.classList.add('product-page__specification-name');
      name.innerHTML = element[0];
      const value = document.createElement('span');
      value.classList.add(`product-page__specification-text`);
      value.innerHTML = element[1];
      block.append(name, value);
      container.append(block);
    });
  }

  private makePopup() {
    const popup = document.createElement('div');
    popup.classList.add('product-page__popup');
    popup.addEventListener('click', function (e) {
      if (e.target instanceof HTMLElement) {
        if (!e.target.classList.contains('product-page__popup-img')) {
          popup.classList.remove('product-page__popup_active');
          document.body.classList.remove('body_hold');
        }
      }
    });
    const popupContainer = document.createElement('img');
    popupContainer.classList.add('product-page__popup-img');
    popup.append(popupContainer);
    document.body.append(popup);
    return { popupContainer, popup };
  }

  private setPictures(page: DocumentFragment) {
    const plant = this.getPlant();
    const popupObj = this.makePopup();
    const container = page.querySelector('.product-page__photo-block');
    if (container instanceof HTMLElement) {
      container.style.backgroundImage = `url('assets/img/${plant.thumbnail}')`;
      container.addEventListener('click', function (e) {
        const target = e.target;
        if (target instanceof HTMLElement && target.classList.contains('product-page__photo-block')) {
          const url = target.style.backgroundImage.slice(5, -2);
          popupObj.popupContainer.src = url;
          popupObj.popup.classList.add('product-page__popup_active');
          document.body.classList.add('body_hold');
        }
      });
      plant.images.forEach((pic, index) => {
        const img = document.createElement('img');
        img.src = `assets/img/${pic}`;
        img.classList.add('product-page__photo-mini');
        img.addEventListener('click', function (e) {
          const target = e.target;
          if (target instanceof HTMLImageElement) {
            container.style.backgroundImage = `url('${target.src}')`;
            const oldPhoto = document.querySelector('.product-page__photo-mini_active');
            oldPhoto?.classList.remove('product-page__photo-mini_active');
            target.classList.add('product-page__photo-mini_active');
          }
        });
        index === 0 ? img.classList.add('product-page__photo-mini_active') : null;
        container ? container.append(img) : null;
      });
    }
  }

  private setBreadCrumbs(page: DocumentFragment) {
    const plant = this.getPlant();
    const thisPageLink = page.querySelector('.this-page-link');
    const linkFilter = page.querySelector('.catalog-filter-link');
    if (linkFilter instanceof HTMLAnchorElement && thisPageLink instanceof HTMLElement) {
      const newLink = new URL(window.location.href);
      newLink.pathname = PagesList.catalogPage;
      newLink.searchParams.set('type', plant.type.toLowerCase());
      linkFilter.href = newLink.toString();
      linkFilter.innerText = plant.type;
      thisPageLink.innerText = plant.title;
    }
  }

  protected fillPage(page: DocumentFragment, id?: string) {
    this.plantId = id;
    if (page instanceof DocumentFragment) {
      const plant = this.getPlant();
      if (plant) {
        const title = page.querySelector('#product-title');
        title ? (title.innerHTML = plant.title) : null;

        const navigationName = page.querySelector('#navigation-name');
        navigationName ? (navigationName.innerHTML = plant.title) : null;

        const description = page.querySelector('.product-page__info-text');
        description ? (description.innerHTML = plant.description) : null;

        const stockAmount = page.querySelector('.product-page__stoke-amount');
        if (plant.stock > 0) {
          stockAmount ? (stockAmount.innerHTML = `(${plant.stock} psc.)`) : null;
        } else {
          stockAmount ? (stockAmount.innerHTML = 'not in stock') : null;
          const inStoke = page.querySelector('.product-page__stoke-text');
          inStoke instanceof HTMLElement ? (inStoke.style.display = 'none') : null;
        }

        const newPrice = page.querySelector('.product-page__new-price');
        newPrice ? (newPrice.innerHTML = plant.price.toString()) : null;
        if (plant.sale > 0) {
          const oldPriceValue = Math.ceil(plant.price / ((100 - plant.sale) / 100));
          const oldPrice = document.createElement('span');
          oldPrice.textContent = oldPriceValue.toString();
          oldPrice.classList.add('product-page__old-price', 'usd-symbol');
          newPrice ? newPrice.after(oldPrice) : null;
          newPrice instanceof HTMLElement ? newPrice.classList.add('product-page__new-price_sale') : null;
        }

        const descriptionContainer = page.querySelector('.product-page__specification-list');
        descriptionContainer ? this.setDescription(descriptionContainer) : null;

        this.setPictures(page);
        this.setBreadCrumbs(page);
        const addBtn = page.querySelector('.product-page__add-to-cart-btn');
        const buyNowBtn = page.querySelector('.product-page__buy-now-btn');
        addBtn instanceof HTMLElement ? setAddButton(addBtn, this.cart, this.getPlant()) : null;
        buyNowBtn instanceof HTMLElement ? setBuyNowButton(buyNowBtn, this.cart, this.getPlant()) : null;
      }
    }
    return page;
  }
}

export default PlantPage;
