import filterHelpers from '../src/ts/components/filters/filterHelpers';

let typeArr: string[];

beforeEach(() => {
  typeArr = ['10', '31', '8', '15', '30'];
});

test('check typeArr contains 1 type', () => {
  const type = 'medium';
  expect(filterHelpers.getHeightNum(typeArr, type)).toBe('1');
});

test('check typeArr contains several types', () => {
  const type = 'short';
  expect(filterHelpers.getHeightNum(typeArr, type)).toBe('4');
});

test('check typeArr does not contain type', () => {
  const type = 'tall';
  expect(filterHelpers.getHeightNum(typeArr, type)).toBe('0');
});

test('check typeArr is empty', () => {
  const typeArr: string[] = [];
  const type = 'short';
  expect(filterHelpers.getHeightNum(typeArr, type)).toBe('0');
});

test('check boundary values', () => {
  const typeArr: string[] = ['100', '101', '99', '29', '30', '31'];
  const type1 = 'short';
  const type2 = 'tall';
  expect(filterHelpers.getHeightNum(typeArr, type1)).toBe('2');
  expect(filterHelpers.getHeightNum(typeArr, type2)).toBe('1');
});
