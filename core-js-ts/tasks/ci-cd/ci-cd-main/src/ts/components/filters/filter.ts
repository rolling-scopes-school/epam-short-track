import { isHTMLElement, getExistentElement } from '../../base/helpers';
import { StrObj, Products } from '../../base/types';
import { FilterType } from '../../base/enums';
import { counters } from '../../base/counters';
import RangeInput from './rangeInput';
import CheckboxFilter from './checkboxFilter';
import FilteredData from './filteredData';
import { queryParamsObj, resetQueryParamsObj, setQueryParamsObj } from './queryParams';
import filterHelpers from './filterHelpers';
import { recovery } from './recovery';
import CatalogPage from './../../pages/catalog-page';

class Filter {
  priceRangeInputParent: HTMLElement;
  priceRangeInput: RangeInput;
  stockRangeInputParent: HTMLElement;
  stockRangeInput: RangeInput;

  categoryFilter: CheckboxFilter;
  heightFilter: CheckboxFilter;
  saleFilter: CheckboxFilter;

  currentData: Products[];
  filteredData: FilteredData;
  productCount: HTMLElement;

  constructor(data: Products[]) {
    this.priceRangeInputParent = getExistentElement('.filter__price');
    this.priceRangeInput = new RangeInput(this.priceRangeInputParent);
    this.stockRangeInputParent = getExistentElement('.filter__stock');
    this.stockRangeInput = new RangeInput(this.stockRangeInputParent);

    this.categoryFilter = new CheckboxFilter(FilterType.category);
    this.heightFilter = new CheckboxFilter(FilterType.height);
    this.saleFilter = new CheckboxFilter(FilterType.sale);

    this.currentData = data;
    this.filteredData = new FilteredData(data);
    this.productCount = getExistentElement('.found-products__num');
  }

  rangeInputFilter(target: EventTarget | null, data: Products[]) {
    if (!isHTMLElement(target)) throw new Error();

    let type = '';

    if (target.closest('.filter__stock')) {
      const stock = this.stockRangeInput;
      const [min, max] = this.addListenerByType(stock);
      this.filteredData.stockData = this.filterByStock(data, min, max);
      queryParamsObj.stock = min + '-' + max;
      type = 'stock';
    } else if (target.closest('.filter__price')) {
      const price = this.priceRangeInput;
      const [min, max] = this.addListenerByType(price);
      this.filteredData.priceData = this.filterByPrice(data, min, max);
      queryParamsObj.price = min + '-' + max;
      type = 'price';
    }
    return type;
  }

  addListenerByType(type: RangeInput) {
    type.priceInputMin.addEventListener('change', () => type.changePriceInputMin());
    type.priceInputMax.addEventListener('change', () => type.changePriceInputMax());
    type.rangeInputMin.addEventListener('input', () => type.changeRangeInputMin());
    type.rangeInputMax.addEventListener('input', () => type.changeRangeInputMax());
    type.priceInputMin.addEventListener('input', () => type.validatePriceInput());
    type.priceInputMax.addEventListener('input', () => type.validatePriceInput());
    return [type.priceInputMin.value, type.priceInputMax.value];
  }

  filterByPrice(data: Products[], priceMin: string, priceMax: string) {
    return data.filter((item) => +priceMin <= item.price && item.price <= +priceMax);
  }

  filterByStock(data: Products[], stockMin: string, stockMax: string) {
    return data.filter((item) => +stockMin <= item.stock && item.stock <= +stockMax);
  }

  private updateRangeFilter(data: Products[]) {
    const stock = data.map((item) => item.stock).sort((a, b) => a - b);
    const [min, max] = filterHelpers.updateMinMax(stock);
    this.stockRangeInput.recoveryRangeFilter(min, max);
  }

  private updatePriceRangeFilter(data: Products[]) {
    const price = data.map((item) => item.price).sort((a, b) => a - b);
    const [min, max] = filterHelpers.updateMinMax(price);
    this.priceRangeInput.recoveryRangeFilter(min, max);
  }

  // checkbox

  checkboxFilter(target: EventTarget | null, data: Products[]) {
    if (!(target instanceof HTMLInputElement)) throw new Error();

    if (target.closest('.filter__type')) {
      this.filteredData.checkCategoryData = this.categoryFilter.checkboxTypeFilter(target, data);
    }
    if (target.closest('.filter__height'))
      this.filteredData.checkHeightData = this.heightFilter.checkboxTypeFilter(target, data);
    if (target.closest('.filter__sale'))
      this.filteredData.checkSaleData = this.saleFilter.checkboxTypeFilter(target, data);

    this.updateCheckbox();
  }

  updateCheckbox() {
    const checkbox = [...getExistentElement('.filter').querySelectorAll('input[type="checkbox"]')];
    const checked = [
      ...this.categoryFilter.selectedArr,
      ...this.heightFilter.selectedArr,
      ...this.saleFilter.selectedArr,
    ];

    checkbox.forEach((item) => {
      if (item instanceof HTMLInputElement) {
        if (checked.length) {
          checked.forEach((check) => {
            if (item.value === check) item.checked = true;
          });
        } else {
          item.checked = false;
        }
      }
    });
  }

  searchInput(data: Products[]): void {
    const input = getExistentElement<HTMLInputElement>('.sort-input');
    input.value = input.value.replace(/[^a-z0-9\-.,;'()\s]/gi, '');
    const sortInputValue: string = input.value.toLowerCase().trim();
    this.filteredData.inputData = data.filter((item) => {
      return (
        item.title.toLowerCase().includes(sortInputValue) ||
        item.type.toLowerCase().includes(sortInputValue) ||
        item.description.toLowerCase().includes(sortInputValue) ||
        String(item.price).includes(sortInputValue) ||
        String(item.sale).includes(sortInputValue) ||
        String(item.rating).includes(sortInputValue) ||
        String(item.stock).includes(sortInputValue) ||
        String(item.rating).includes(sortInputValue) ||
        String(item.height).includes(sortInputValue)
      );
    });
    queryParamsObj.search = sortInputValue;
  }

  //sort

  sortBy(target: EventTarget | null, data: Products[]): void {
    if (!isHTMLElement(target) || !target.dataset.sort) throw new Error();
    this.checkSortType(target.dataset.sort, data);
    queryParamsObj.sort = target.dataset.sort;
    filterHelpers.addActive(target);
  }

  checkSortType(sortType: string, data: Products[]) {
    this.filteredData.sortData = data.sort((a, b) => a.id - b.id);
    switch (sortType) {
      case 'rating-up':
        this.filteredData.sortData = data.sort((a, b) => a.rating - b.rating);
        break;
      case 'rating-down':
        this.filteredData.sortData = data.sort((a, b) => b.rating - a.rating);
        break;
      case 'price-up':
        this.filteredData.sortData = data.sort((a, b) => a.price - b.price);
        break;
      case 'price-down':
        this.filteredData.sortData = data.sort((a, b) => b.price - a.price);
        break;
    }
  }

  // landscape

  changeLayout(target: EventTarget | null): void {
    if (!isHTMLElement(target)) throw new Error();

    const portrait = getExistentElement('.layout__portrait');
    const landscape = getExistentElement('.layout__landscape');
    const productsContainer = getExistentElement('.products__container');

    if (target === portrait) {
      portrait.classList.add('active');
      landscape.classList.remove('active');
      productsContainer.classList.remove('landscape');
      queryParamsObj.landscape = '';
    } else if (target === landscape) {
      landscape.classList.add('active');
      portrait.classList.remove('active');
      productsContainer.classList.add('landscape');
      queryParamsObj.landscape = 'true';
    }
    CatalogPage.setQueryParams();
  }

  // data

  getData(type?: string) {
    const data = this.filteredData.getFinalData();
    filterHelpers.showText(data.length);
    this.currentData = data;
    if (type === 'stock') {
      this.updatePriceRangeFilter(data);
    } else if (type === 'price') {
      this.updateRangeFilter(data);
    } else {
      this.updateRangeFilter(data);
      this.updatePriceRangeFilter(data);
    }
    this.productCount.textContent = data.length + '';
    this.setTypeNum(data);
    this.setHeightNum(data);
    this.setSaleNum(data);
    CatalogPage.setQueryParams();
    return data;
  }

  // products counter by type

  private setTypeNum(data: Products[]) {
    const typeArr: string[] = data.map((item) => item.type.toLowerCase());
    counters.slice(0, 7).forEach((_, i) => {
      getExistentElement(counters[i]).textContent = filterHelpers.getTypeNum(typeArr, counters[i].slice(1));
    });
  }

  private setHeightNum(data: Products[]) {
    const typeArr: string[] = data.map((item) => item.height.toString());
    getExistentElement('#short').textContent = filterHelpers.getHeightNum(typeArr, 'short');
    getExistentElement('#medium').textContent = filterHelpers.getHeightNum(typeArr, 'medium');
    getExistentElement('#tall').textContent = filterHelpers.getHeightNum(typeArr, 'tall');
  }

  private setSaleNum(data: Products[]) {
    const typeArr: string[] = data.map((item) => item.sale.toString());
    getExistentElement('#true').textContent = filterHelpers.getSaleNum(typeArr);
  }

  // recovery

  recoveryState(data: Products[]) {
    if (!window.location.search) CatalogPage.setQueryParams();
    const url = new URL(window.location.href);
    if (!url.search) return;
    const currentParamsList = url.search.slice(1).split('&');
    const currentParamsObj: StrObj = Object.fromEntries(currentParamsList.map((el) => el.split('=')));
    setQueryParamsObj(currentParamsObj);
    recovery(data, currentParamsObj, this);
  }

  // reset

  resetState(data: Products[]) {
    filterHelpers.showText(24);
    this.productCount.textContent = '24';
    this.filteredData = new FilteredData(data);
    resetQueryParamsObj();
    CatalogPage.setQueryParams();

    this.resetCheckboxFilter();

    this.priceRangeInput.resetRangeFilter();
    this.stockRangeInput.resetRangeFilter();

    this.filteredData.sortData = data.sort((a, b) => a.id - b.id);

    getExistentElement('.layout__portrait').classList.add('active');
    getExistentElement('.layout__landscape').classList.remove('active');
    getExistentElement('.products__container').classList.remove('landscape');

    getExistentElement<HTMLInputElement>('.sort-input').value = '';
    this.resetTypeCount();
    const controls = document.querySelectorAll('.sort-control');
    controls.forEach((control) => {
      if (isHTMLElement(control)) {
        control.style.opacity = '';
      }
    });
  }

  private resetCheckboxFilter() {
    this.categoryFilter.resetSelectedArr();
    this.heightFilter.resetSelectedArr();
    this.saleFilter.resetSelectedArr();

    this.updateCheckbox();
  }

  private resetTypeCount() {
    const total = ['6', '3', '5', '2', '2', '3', '3', '10', '9', '5', '18'];
    total.forEach((_, i) => (getExistentElement(counters[i]).textContent = total[i]));
  }
}

export default Filter;
