import { Basket } from '../base/types';
import plants from '../../data/plants.json';
import { promoList } from '../base/promo-codes';

class Cart {
  public basket: Basket;
  public activePromoCodes: string[];

  constructor() {
    this.basket = {};
    this.activePromoCodes = [];
  }

  public getProductAmount() {
    let answer = 0;
    for (const key in this.basket) {
      answer += this.basket[key];
    }
    return answer;
  }

  public getProductSum() {
    let answer = 0;
    for (const key in this.basket) {
      const plant = plants.products.filter((plant) => plant.id.toString() === key)[0];
      answer += this.basket[key] * plant.price;
    }
    return answer;
  }

  public getProductOldSum() {
    let answer = 0;
    for (const key in this.basket) {
      const plant = plants.products.filter((plant) => plant.id.toString() === key)[0];
      answer += this.basket[key] * (plant.price / (1 - plant.sale / 100));
    }
    return Math.ceil(answer);
  }

  public showProductAmount(HTMLElement: HTMLElement | null) {
    HTMLElement ? (HTMLElement.innerHTML = this.getProductAmount().toString()) : null;
  }

  public showProductSum(HTMLElement: HTMLElement | null) {
    HTMLElement ? (HTMLElement.innerHTML = this.getProductSum().toString()) : null;
  }

  public showProductOldSum(HTMLElement: HTMLElement | null) {
    HTMLElement ? (HTMLElement.innerHTML = this.getProductOldSum().toString()) : null;
  }

  public saveCart() {
    const cart = {
      basket: this.basket,
      activePromoCodes: this.activePromoCodes,
    };
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  public updateHeader() {
    const amount = document.getElementById('header-amount');
    const sum = document.getElementById('header-sum');
    this.showProductAmount(amount);
    this.showProductSum(sum);
  }

  public add(id: string) {
    const plant = plants.products.filter((value) => value.id === Number(id))[0];
    if (!plant) return;
    if (plant.stock > this.basket[id] || !this.basket[id]) {
      this.basket[id] ? (this.basket[id] += 1) : (this.basket[id] = 1);
    }
    this.saveCart();
  }

  public delete(id: string) {
    if (id in this.basket) {
      this.basket[id] === 1 ? delete this.basket[id] : (this.basket[id] -= 1);
    }
    this.saveCart();
  }

  public deletePromo(promo: Element) {
    this.activePromoCodes = this.activePromoCodes.filter((code) => code !== promo.id);
    this.saveCart();
  }

  public isPromoInPromoList(promo: string) {
    return promo in promoList && !this.activePromoCodes.includes(promo);
  }

  public addPromo(input: HTMLInputElement) {
    const promo = input.value.toUpperCase();
    this.isPromoInPromoList(promo) ? this.activePromoCodes.push(promo) : null;
    this.saveCart();
  }
  public cleanCart() {
    const cartKeys = Object.keys(this.basket);
    cartKeys.forEach((key) => {
      delete this.basket[key];
    });
    this.updateHeader();
    this.saveCart();
  }
}

export default Cart;
