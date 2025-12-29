import { isHTMLElement, getExistentElement } from '../../base/helpers';

function updateMinMax(values: number[]) {
  let min = '';
  let max = '';
  if (values.length) {
    min = values[0] + '';
    max = values[values.length - 1] + '';
  }
  return [min, max];
}

// sort

function addActive(target: HTMLElement) {
  const controls = document.querySelectorAll('.sort-control');
  controls.forEach((control) => {
    if (isHTMLElement(control)) {
      control.style.opacity = '';
    }
  });
  target.style.opacity = '1';
}

// product counter by type

function getTypeNum(typeArr: string[], type: string) {
  const typeCount = typeArr.filter((item) => {
    return item === type;
  });
  return typeCount.length + '' || '0';
}

function getHeightNum(typeArr: string[], height: string) {
  const typeCount = typeArr.filter((item) => {
    return checkHeight(height, +item);
  });
  return typeCount.length + '' || '0';
}

function checkHeight(height: string, item: number) {
  if (height === 'short') return item <= 30;
  if (height === 'medium') return item > 30 && item <= 100;
  return item > 100;
}

function getSaleNum(typeArr: string[]) {
  const typeCount = typeArr.filter((item) => +item);
  return typeCount.length + '' || '0';
}

function showText(length: number) {
  const container = getExistentElement('.products__container');
  if (!length) {
    container.style.fontSize = '30px';
    container.style.fontWeight = '500';
    container.style.color = '#22795D';
    container.innerHTML = 'NOT FOUND :(';
  } else {
    container.style.fontSize = '';
    container.style.fontWeight = '';
    container.style.color = '';
    container.innerHTML = '';
  }
}

// recovery

export default {
  updateMinMax,
  getTypeNum,
  getHeightNum,
  checkHeight,
  getSaleNum,
  showText,
  addActive,
};
