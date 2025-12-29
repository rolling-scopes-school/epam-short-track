import { cardInteger, cardLogo, PagesList } from '../base/enums';
import { getExistentElement, getExistentInputElement, isHTMLElement } from '../base/helpers';
import Router from '../router';
import Cart from './cart';

class PurchaseModal {
  public cart: Cart;
  private modal: HTMLElement;
  private modalContainer: HTMLElement;
  private formValid: boolean;

  constructor(modalTemp: HTMLTemplateElement, cart: Cart, container: HTMLElement) {
    this.modalContainer = container;
    const modal = modalTemp.content.cloneNode(true);
    if (!isHTMLElement(modal)) throw new Error(`Element is not HTMLElement!`);
    this.modal = modal;
    this.formValid = false;
    this.cart = cart;
  }

  public isNameValid(name: HTMLInputElement, error: HTMLElement) {
    let errors = 0;
    const nameValue = name.value.trim();
    const nameArr = nameValue.split(' ');
    nameArr.length < 2 ? (errors += 1) : null;
    nameArr.forEach((name) => {
      name.length < 3 ? (errors += 1) : null;
    });
    errors === 0 && nameValue !== ''
      ? error.classList.remove('purchase-form__error_active')
      : error.classList.add('purchase-form__error_active');
    if (errors === 0) return true;
    return false;
  }

  private checkPhoneSymbol(e: Event) {
    const target = e.target;
    if (target === null) throw new Error(`Element not found!`);
    if (!(target instanceof HTMLInputElement)) throw new Error(`Element not input!`);
    target.value = '+' + target.value.replace(/\D+/g, '');
  }

  private isPhoneValid(phone: HTMLInputElement, error: HTMLElement) {
    let errors = 0;
    const phoneValue = phone.value;
    const phoneOnlyNumbers = phoneValue.replace(/\D+/g, '');
    phoneOnlyNumbers.length < 9 ? (errors += 1) : null;
    errors === 0
      ? error.classList.remove('purchase-form__error_active')
      : error.classList.add('purchase-form__error_active');
    phone.value = `+${phoneOnlyNumbers}`;
    if (errors === 0) return true;
    return false;
  }

  private isAddressValid(address: HTMLInputElement, error: HTMLElement) {
    let errors = 0;
    const addressValue = address.value;
    const addressArr = addressValue.split(' ');
    addressArr.length < 3 ? (errors += 1) : null;
    addressArr.forEach((word) => {
      word.length < 5 ? (errors += 1) : null;
    });
    errors === 0 && addressValue !== ''
      ? error.classList.remove('purchase-form__error_active')
      : error.classList.add('purchase-form__error_active');
    if (errors === 0) return true;
    return false;
  }

  private isEmailValid(email: HTMLInputElement, error: HTMLElement) {
    const temp = /^[\w-.]+@[\w-]+\.[a-z]{2,4}$/i;
    const isEmail = temp.test(email.value);
    isEmail
      ? error.classList.remove('purchase-form__error_active')
      : error.classList.add('purchase-form__error_active');
    if (isEmail) return true;
    return false;
  }

  private checkCardSymbol(e: Event) {
    const target = e.target;
    if (target === null) throw new Error(`Element not found!`);
    if (!(target instanceof HTMLInputElement)) throw new Error(`Element not input!`);
    target.value = target.value
      .replace(/\D+/g, '')
      .split(/(\d{4})/)
      .filter((item) => item !== '')
      .join(' ')
      .trim()
      .substring(0, 19);
  }

  private checkCardLogo(e: Event) {
    const target = e.target;
    const cardIcon = getExistentElement('.purchase-form__card-icon');
    if (target === null) throw new Error(`Element not found!`);
    if (!(target instanceof HTMLInputElement)) throw new Error(`Element not input!`);

    switch (target.value[0]) {
      case cardInteger.visa:
        cardIcon.style.backgroundImage = `url(${cardLogo.visa})`;
        break;
      case cardInteger.masterCard:
        cardIcon.style.backgroundImage = `url(${cardLogo.masterCard})`;
        break;
      case cardInteger.americanExpress:
        cardIcon.style.backgroundImage = `url(${cardLogo.americanExpress})`;
        break;
      default:
        cardIcon.style.backgroundImage = `url(${cardLogo.else})`;
        break;
    }
  }

  private isCardNumberValid() {
    const card = getExistentElement('#payCardNumber');
    const error = getExistentElement('#payCardNumberError');
    if (!(card instanceof HTMLInputElement)) throw new Error(`Element not input!`);
    card.value.length === 19
      ? error.classList.remove('purchase-form__error_active')
      : error.classList.add('purchase-form__error_active');
    if (card.value.length === 19) return true;
    return false;
  }

  private checkCardDateSymbol(e: Event) {
    const target = e.target;
    if (target === null) throw new Error(`Element not found!`);
    if (!(target instanceof HTMLInputElement)) throw new Error(`Element not input!`);
    target.value = target.value
      .replace(/\D+/g, '')
      .split(/(\d{2})/)
      .filter((item) => item !== '')
      .join(' / ')
      .trim()
      .substring(0, 7);
  }

  private isCardDateValid() {
    const cardDate = getExistentElement('#payCardDate');
    const error = getExistentElement('#payCardDateError');
    if (!(cardDate instanceof HTMLInputElement)) throw new Error(`Element not input!`);
    const isCardDateValid =
      cardDate.value.length === 7 && Number(cardDate.value.slice(0, 2)) > 0 && Number(cardDate.value.slice(0, 2)) < 13;
    isCardDateValid
      ? error.classList.remove('purchase-form__error_active')
      : error.classList.add('purchase-form__error_active');
    if (isCardDateValid) return true;
    return false;
  }

  private checkCardCVVSymbol(e: Event) {
    const target = e.target;
    if (target === null) throw new Error(`Element not found!`);
    if (!(target instanceof HTMLInputElement)) throw new Error(`Element not input!`);
    target.value = target.value.replace(/\D+/g, '').substring(0, 3);
  }

  private isCardCVVValid() {
    const cardCVV = getExistentElement('#payCardCvv');
    const error = getExistentElement('#payCardCvvError');
    if (!(cardCVV instanceof HTMLInputElement)) throw new Error(`Element not input!`);
    cardCVV.value.length === 3
      ? error.classList.remove('purchase-form__error_active')
      : error.classList.add('purchase-form__error_active');
    if (cardCVV.value.length === 3) return true;
    return false;
  }

  private isFormValid() {
    const payNowBtn = getExistentElement('#payNowBtn');
    if (
      this.isNameValid(getExistentInputElement('#purchaseName'), getExistentElement('#purchaseNameError')) &&
      this.isPhoneValid(getExistentInputElement('#purchasePhone'), getExistentElement('#purchasePhoneError')) &&
      this.isAddressValid(getExistentInputElement('#purchaseAddress'), getExistentElement('#purchaseAddressError')) &&
      this.isEmailValid(getExistentInputElement('#purchaseEmail'), getExistentElement('#purchaseEmailError')) &&
      this.isCardNumberValid() &&
      this.isCardDateValid() &&
      this.isCardCVVValid()
    ) {
      payNowBtn.classList.replace('button-unable', 'button');
      this.formValid = true;
      payNowBtn.innerText = 'Buy now!';
    } else {
      payNowBtn.classList.replace('button', 'button-unable');
      this.formValid = false;
      payNowBtn.innerText = 'Fill in all the fields';
    }
  }

  private buyNow() {
    const modal = getExistentElement('.purchase-modal__wrapper');
    modal.classList.add('purchase-modal__wrapper_hide');
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('purchase__message-container');
    const message = document.createElement('div');
    message.classList.add('purchase__message');
    messageContainer.append(message);
    this.modalContainer.append(messageContainer);
    let i = 0;

    while (i <= 3) {
      const a = i;
      setTimeout(() => {
        if (Math.abs(a - 3) === 0) {
          this.cart.cleanCart();
          Router.goTo(PagesList.catalogPage);
          this.modalContainer.classList.remove('purchase-modal__active');
          document.body.classList.remove('body_hold');
          this.modalContainer.innerHTML = '';
        } else {
          message.innerHTML = `Thank you for your purchase. Return to catalog page after ${Math.abs(a - 3)} sec.`;
        }
      }, i * 1000);
      i++;
    }
  }

  public draw() {
    document.body.classList.add('body_hold');
    this.modalContainer.innerHTML = '';

    this.modalContainer.addEventListener('click', (e) => {
      const target = e.target;
      if (!isHTMLElement(target)) throw new Error(`Element is not HTMLElement!`);
      if (target.classList.contains('purchase-modal')) {
        this.modalContainer.classList.remove('purchase-modal__active');
        document.body.classList.remove('body_hold');
        this.modalContainer.innerHTML = '';
      }
    });

    getExistentElement('#purchasePhone', this.modal).addEventListener('input', (e) => this.checkPhoneSymbol(e));
    getExistentElement('#payCardNumber', this.modal).addEventListener('input', (e) => this.checkCardSymbol(e));
    getExistentElement('#payCardNumber', this.modal).addEventListener('input', (e) => this.checkCardLogo(e));
    getExistentElement('#payCardCvv', this.modal).addEventListener('input', (e) => this.checkCardCVVSymbol(e));
    getExistentElement('#payCardDate', this.modal).addEventListener('input', (e) => this.checkCardDateSymbol(e));

    getExistentElement('#purchaseName', this.modal).addEventListener('blur', () =>
      this.isNameValid(getExistentInputElement('#purchaseName'), getExistentElement('#purchaseNameError'))
    );
    getExistentElement('#purchasePhone', this.modal).addEventListener('blur', () =>
      this.isPhoneValid(getExistentInputElement('#purchasePhone'), getExistentElement('#purchasePhoneError'))
    );
    getExistentElement('#purchaseAddress', this.modal).addEventListener('blur', () =>
      this.isAddressValid(getExistentInputElement('#purchaseAddress'), getExistentElement('#purchaseAddressError'))
    );
    getExistentElement('#purchaseEmail', this.modal).addEventListener('blur', () =>
      this.isEmailValid(getExistentInputElement('#purchaseEmail'), getExistentElement('#purchaseEmailError'))
    );
    getExistentElement('#payCardNumber', this.modal).addEventListener('blur', this.isCardNumberValid);
    getExistentElement('#payCardDate', this.modal).addEventListener('blur', this.isCardDateValid);
    getExistentElement('#payCardCvv', this.modal).addEventListener('blur', this.isCardCVVValid);

    getExistentElement('.purchase-form', this.modal).addEventListener('change', () => this.isFormValid());

    getExistentElement('#payNowBtn', this.modal).addEventListener('click', () => {
      this.formValid ? this.buyNow() : null;
    });

    this.modalContainer.append(this.modal);
    this.modalContainer.classList.add('purchase-modal__active');
  }
}

export default PurchaseModal;
