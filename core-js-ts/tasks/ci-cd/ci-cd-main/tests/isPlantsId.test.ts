/* eslint-disable no-undef */
const helpers = require('../src/ts/base/helpers');

test('check 1', () => {
  expect(helpers.isPlantsId('1')).toBe(true);
});

test('check 0', () => {
  expect(helpers.isPlantsId('0')).toBe(false);
});

test('check 30', () => {
  expect(helpers.isPlantsId('30')).toBe(false);
});

test('check shubaduba', () => {
  expect(helpers.isPlantsId('shubaduba')).toBe(false);
});

test('check undefined', () => {
  expect(helpers.isPlantsId(undefined)).toBe(false);
});

test('check integer', () => {
  expect(helpers.isPlantsId(10)).toBe(false);
});
