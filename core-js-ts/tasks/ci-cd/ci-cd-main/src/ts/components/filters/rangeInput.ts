import { getExistentElement } from '../../base/helpers';
import { queryParamsObj } from './queryParams';
import CatalogPage from '../../pages/catalog-page';

class RangeInput {
  parentSelector: HTMLElement;
  priceInputMin: HTMLInputElement;
  priceInputMax: HTMLInputElement;
  rangeInputMin: HTMLInputElement;
  rangeInputMax: HTMLInputElement;
  range: HTMLElement;

  constructor(parentSelector: HTMLElement) {
    this.parentSelector = parentSelector;
    this.priceInputMin = getExistentElement<HTMLInputElement>('.input-min', parentSelector);
    this.priceInputMax = getExistentElement<HTMLInputElement>('.input-max', parentSelector);
    this.rangeInputMin = getExistentElement<HTMLInputElement>('.range-min', parentSelector);
    this.rangeInputMax = getExistentElement<HTMLInputElement>('.range-max', parentSelector);
    this.range = getExistentElement('.slider__progress', parentSelector);
  }

  validatePriceInput() {
    this.priceInputMin.value = this.priceInputMin.value.slice(0, 3);
    this.priceInputMax.value = this.priceInputMax.value.slice(0, 3);
    this.maxValidate();
  }

  private maxValidate() {
    const minPrice = +this.priceInputMin.value;
    if (this.parentSelector.className === 'filter__stock' && +this.priceInputMax.value > 65) {
      this.priceInputMax.value = '65';
      queryParamsObj.stock = minPrice + '-' + '65';
    } else if (+this.priceInputMax.value > 100) {
      this.priceInputMax.value = '100';
      queryParamsObj.price = minPrice + '-' + '100';
    }
    while (this.priceInputMax.value[0] === '0') this.priceInputMax.value = this.priceInputMax.value.slice(1);
  }

  changePriceInputMin() {
    const maxPrice = +this.priceInputMax.value;
    if (+this.priceInputMin.value >= maxPrice) this.priceInputMin.value = (maxPrice - 1).toString();
    if (+this.priceInputMin.value < 1) this.priceInputMin.value = '1';

    while (this.priceInputMin.value[0] === '0') this.priceInputMin.value = this.priceInputMin.value.slice(1);
    this.updateQueryParamsObj();

    if (+this.priceInputMin.value) {
      this.rangeInputMin.value = this.priceInputMin.value;
      this.range.style.left = (+this.priceInputMin.value / +this.rangeInputMin.max) * 100 + '%';
    }
  }

  changePriceInputMax() {
    if (+this.priceInputMax.value <= +this.priceInputMin.value)
      this.priceInputMax.value = (+this.priceInputMin.value + 1).toString();

    this.updateQueryParamsObj();

    this.rangeInputMax.value = this.priceInputMax.value;
    this.range.style.right = 100 - (+this.priceInputMax.value / +this.rangeInputMax.max) * 100 + '%';
  }

  private updateQueryParamsObj() {
    this.parentSelector.className === 'filter__stock'
      ? (queryParamsObj.stock = this.priceInputMin.value + '-' + this.priceInputMax.value)
      : (queryParamsObj.price = this.priceInputMin.value + '-' + this.priceInputMax.value);
    CatalogPage.setQueryParams();
  }

  changeRangeInputMin() {
    const minVal = +this.rangeInputMin.value,
      maxVal = +this.rangeInputMax.value;
    if (maxVal - minVal < 1) {
      this.rangeInputMin.value = (maxVal - 1).toString();
    } else {
      this.priceInputMin.value = minVal.toString();
      this.range.style.left = (minVal / +this.rangeInputMin.max) * 100 + '%';
    }
  }

  changeRangeInputMax() {
    const minVal = +this.rangeInputMin.value,
      maxVal = +this.rangeInputMax.value;
    if (maxVal - minVal < 1) {
      this.rangeInputMax.value = (minVal + 1).toString();
    } else {
      this.priceInputMax.value = maxVal.toString();
      this.range.style.right = 100 - (maxVal / +this.rangeInputMax.max) * 100 + '%';
    }
  }

  recoveryRangeFilter(min: string, max: string) {
    this.priceInputMin.value = min;
    this.priceInputMax.value = max;
    this.maxValidate();
    this.changePriceInputMin();
    this.changePriceInputMax();
  }

  resetRangeFilter() {
    this.priceInputMin.value = this.priceInputMax.min;
    this.priceInputMax.value = this.priceInputMax.max;
    this.changePriceInputMin();
    this.changePriceInputMax();
  }
}

export default RangeInput;
