import { QueryParams, Template } from '../../base/types';

export function resetQueryParamsObj() {
  queryParamsObj = {};
}

export function setQueryParamsObj(obj: Partial<QueryParams>) {
  obj ? (queryParamsObj = obj) : (queryParamsObj = {});
}

export let queryParamsObj: Partial<QueryParams> = {};

export const queryParamsTemplate: Template = {
  sort: ['rating-up', 'rating-down', 'price-up', 'price-down'],
  search: ['value'],
  type: ['succulent', 'sansevieria', 'flowering', 'fern', 'lavender', 'cactus', 'tree'],
  height: ['short', 'medium', 'tall'],
  sale: ['true'],
  price: ['1', '100'],
  stock: ['1', '65'],
  landscape: ['true'],
};
