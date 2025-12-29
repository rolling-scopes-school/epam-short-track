import plants from '../../data/plants.json';
import Cart from '../components/cart';
import PurchaseModal from '../components/purchase-modal';
import Router from '../router';
import { PagesList } from './enums';
import { Products } from './types';

function isHTMLElement<T>(el: T | HTMLElement): el is HTMLElement {
  return el instanceof EventTarget;
}

function getExistentElement<T extends HTMLElement>(selector: string, node: Document | HTMLElement = document): T {
  const el = node.querySelector<T>(selector);
  if (el === null) throw new Error(`Element not found!`);
  return el;
}
function getExistentInputElement<T extends HTMLElement>(selector: string, node: Document | HTMLElement = document): T {
  const el = node.querySelector<T>(selector);
  if (el === null) throw new Error(`Element not found!`);
  if (!(el instanceof HTMLInputElement)) throw new Error(`Element type is not input!`);
  return el;
}

function isPlantsId(id: string): boolean {
  if (typeof id !== 'string') return false;
  id[0] === '/' ? (id = id.slice(1)) : null;
  if (Number(id) > 0 && Number(id) <= plants.total) {
    return true;
  }
  return false;
}

function setAddButton(button: HTMLElement, cart: Cart, plant: Products) {
  const id = plant.id.toString();
  if (plant.stock > 0) {
    id in cart.basket ? button.classList.add('button-purple') : button.classList.add('button');
    id in cart.basket ? (button.innerHTML = 'In your cart') : (button.innerHTML = 'Add to cart');
    button.addEventListener('click', function () {
      id in cart.basket ? delete cart.basket[id] : cart.add(id);
      id in cart.basket
        ? button.classList.replace('button', 'button-purple')
        : button.classList.replace('button-purple', 'button');
      id in cart.basket ? (button.innerHTML = 'In your cart') : (button.innerHTML = 'Add to cart');
      cart.updateHeader();
    });
  } else {
    button.classList.add('button-unable');
    button.innerHTML = 'Not available';
  }
}

function setBuyNowButton(button: HTMLElement, cart: Cart, plant: Products) {
  const id = plant.id.toString();
  if (plant.stock > 0) {
    button.classList.add('button-light');
    button.addEventListener('click', function () {
      id in cart.basket ? null : cart.add(id);
      cart.updateHeader();
      Router.goTo(PagesList.cartPage);
      openPurchaseModal(cart);
    });
  } else {
    button.classList.add('button-unable');
    button.innerHTML = 'Not available';
  }
}

function openPurchaseModal(cart: Cart) {
  const modalTemp = document.querySelector('#purchase');
  if (modalTemp instanceof HTMLTemplateElement) {
    const modal = new PurchaseModal(modalTemp, cart, getExistentElement('.purchase-modal'));
    modal.draw();
  }
}

export {
  isHTMLElement,
  getExistentElement,
  isPlantsId,
  setAddButton,
  setBuyNowButton,
  openPurchaseModal,
  getExistentInputElement,
};
