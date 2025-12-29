export interface ProductsObj {
  [id: string]: number | string | string[];
}
export interface Products extends ProductsObj {
  id: number;
  title: string;
  description: string;
  height: number;
  price: number;
  sale: number;
  rating: number;
  stock: number;
  type: string;
  thumbnail: string;
  images: string[];
}

export interface PlantsData {
  products: Products[];
  total: number;
}

export type Basket = {
  [id: string]: number;
};

export type PromoList = {
  [id: string]: number;
};

export type PageInfo = {
  [id: string]: number;
};

export type Routs = {
  [id: string]: string;
};

export interface DataObj {
  newData: Products[];
  inputData: Products[];
  sortData: Products[];
  checkedData: Products[];
  priceData: Products[];
}

export interface QueryParams {
  search: string;
  sort: string;
  type: string;
  height: string;
  sale: string;
  price: string;
  stock: string;
  landscape: string;
}

export interface Template {
  [key: string]: string[];
}
export interface StrObj {
  [key: string]: string;
}
