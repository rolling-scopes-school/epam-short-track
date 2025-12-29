export const enum PagesList {
  catalogPage = '/catalog',
  cartPage = '/cart',
}

export const enum changeCartListActions {
  pageUp = 'paginationPageUp',
  pageDown = 'paginationPageDown',
  itemsUp = 'pagination-items-plus',
  itemsDown = 'pagination-items-minus',
}

export const enum cardLogo {
  visa = './assets/svg/visa-icon.svg',
  masterCard = './assets/svg/master-card-icon.svg',
  americanExpress = './assets/svg/american-express-icon.svg',
  else = './assets/svg/credit-card-payment-icon.svg',
}

export const enum cardInteger {
  visa = '4',
  masterCard = '5',
  americanExpress = '3',
}

export enum FilterType {
  category = 'type',
  height = 'height',
  sale = 'sale',
}
