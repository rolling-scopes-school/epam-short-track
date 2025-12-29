import { Products } from '../../base/types';
import plants from '../../../data/plants.json';
import { getExistentElement, isHTMLElement } from '../../base/helpers';
import Router from '../../router';

class CartCard {
  public id: string;
  public link: string;
  public plant: Products;
  public number: number;
  public count: number;
  private emptyCard;
  private priceContainer;
  private oldPriceContainer;
  private countContainer;

  constructor(id: string, number: number, count: number) {
    this.id = id;
    this.link = `/${id}`;
    this.plant = plants.products.filter((plant) => plant.id === Number(id))[0];
    this.number = number;
    this.count = count;
    this.emptyCard = this.createEmptyCard();
    this.priceContainer = getExistentElement('.product__price', this.emptyCard);
    this.oldPriceContainer = getExistentElement('.product__old-price', this.emptyCard);
    this.countContainer = getExistentElement('.product__amount-number', this.emptyCard) as HTMLInputElement;
  }
  private createEmptyCard() {
    const cartTemp = document.getElementById('product-cart-card');
    if (cartTemp instanceof HTMLTemplateElement) {
      const card = cartTemp.content.cloneNode(true);
      if (!isHTMLElement(card)) throw new Error(`Element is not HTMLElement!`);
      return card;
    }
    return;
  }

  public draw(container: HTMLElement) {
    const card = this.emptyCard;
    if (card) {
      getExistentElement('.cart-list__item', card).id = this.id;
      getExistentElement('.product__photo', card).style.backgroundImage = `url('assets/img/${this.plant.thumbnail}')`;
      getExistentElement('.cart-list__number', card).innerText = this.number.toString();
      getExistentElement('.product__rating', card).innerHTML = this.plant.rating.toString() + '<span>&#9734;</span>';
      getExistentElement('.product__type', card).innerText = this.plant.type;
      getExistentElement('.product__title', card).innerText = this.plant.title;
      getExistentElement('.product__description', card).innerHTML = this.plant.description.toString();
      getExistentElement('.product__stock-value', card).innerHTML = this.plant.stock.toString();
      getExistentElement('.product', card).addEventListener(
        'click',
        (e) => {
          const target = e.target;
          if (target instanceof HTMLElement) {
            target.classList.contains('button-arrow') ? null : Router.goTo(this.link);
          }
        },
        false
      );

      this.countContainer.value = this.count.toString();
      this.priceContainer.innerHTML = '$' + (this.plant.price * this.count).toString();
      if (this.plant.sale > 0) {
        const round = document.createElement('div');
        round.classList.add('product__discount');
        round.innerHTML = this.plant.sale.toString() + '<span> %</span>';
        getExistentElement('.product__icons', card).prepend(round);
        const oldPriceValue = Math.ceil((this.plant.price * this.count) / ((100 - this.plant.sale) / 100));
        this.oldPriceContainer.innerHTML = '$' + oldPriceValue.toString();
        this.priceContainer.classList.add('product-page__new-price_sale');
      }
      container.append(card);
    }
  }
}

export default CartCard;
