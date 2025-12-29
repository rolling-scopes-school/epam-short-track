import { Products } from '../../base/types';

class FilteredData {
  sortData: Products[];
  inputData: Products[];
  checkCategoryData: Products[];
  checkHeightData: Products[];
  checkSaleData: Products[];
  priceData: Products[];
  stockData: Products[];

  constructor(data: Products[]) {
    this.sortData = data;
    this.inputData = data;
    this.checkCategoryData = data;
    this.checkHeightData = data;
    this.checkSaleData = data;
    this.priceData = data;
    this.stockData = data;
  }

  getFinalData() {
    const filterList: Products[][] = Object.values(this);
    return this.getIntersection(...filterList);
  }

  getIntersection(...filterList: Products[][]) {
    let intersection = filterList[0];
    for (let i = 1; i < filterList.length; i++) {
      intersection = intersection.filter((filter) => filterList[i].indexOf(filter) > -1);
    }

    return intersection;
  }
}

export default FilteredData;
