import FilteredData from '../src/ts/components/filters/filteredData';
import productsData from '../src/data/plants.json';
import { Products } from '../src/ts/base/types';

let data: Products[];
let filteredData: FilteredData;

beforeEach(() => {
  data = productsData.products;
  filteredData = new FilteredData(data);
});

test('check complete coincidence', () => {
  expect(filteredData.getFinalData()).toStrictEqual(data);
});

test('check no coincidences', () => {
  filteredData.inputData = [];
  expect(filteredData.getFinalData()).toStrictEqual([]);
});

test('check several coincidences === fakeCategoryData', () => {
  const fakeCategoryData = [data[0], data[3], data[4]];
  filteredData.checkCategoryData = fakeCategoryData;
  expect(filteredData.getFinalData()).toStrictEqual(fakeCategoryData);
});

test('check several coincidences', () => {
  const fakeCategoryData = [data[0], data[3], data[4], data[8], data[12]];
  const fakePriceData = [data[2], data[3], data[8], data[12]];
  const fakeStockData = [data[2], data[3], data[9], data[12]];
  filteredData.checkCategoryData = fakeCategoryData;
  filteredData.priceData = fakePriceData;
  filteredData.stockData = fakeStockData;
  expect(filteredData.getFinalData()).toStrictEqual([data[3], data[12]]);
});

test('check 1 coincidence', () => {
  const fakeCategoryData = [data[0], data[3], data[4]];
  const fakePriceData = [data[2], data[3], data[8]];
  filteredData.checkCategoryData = fakeCategoryData;
  filteredData.priceData = fakePriceData;
  expect(filteredData.getFinalData()).toStrictEqual([data[3]]);
});

test('check no coincidences', () => {
  const fakeCategoryData = [data[0], data[3], data[4], data[8], data[12]];
  const fakePriceData = [data[2], data[3], data[8], data[12]];
  const fakeStockData: Products[] = [];
  filteredData.checkCategoryData = fakeCategoryData;
  filteredData.priceData = fakePriceData;
  filteredData.stockData = fakeStockData;
  expect(filteredData.getFinalData()).toStrictEqual([]);
});
