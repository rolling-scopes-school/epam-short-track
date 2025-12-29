import filterHelpers from '../src/ts/components/filters/filterHelpers';

let typeArr: string[];

beforeEach(() => {
  typeArr = ['succulent', 'succulent', 'sansevieria', 'flowering', 'succulent', 'sansevieria', 'fern'];
});

test('check typeArr contains several types', () => {
  const type = 'succulent';
  expect(filterHelpers.getTypeNum(typeArr, type)).toBe('3');
});

test('check typeArr contains 1 type', () => {
  const type = 'fern';
  expect(filterHelpers.getTypeNum(typeArr, type)).toBe('1');
});

test('check typeArr does not contain type', () => {
  const type = 'cactus';
  expect(filterHelpers.getTypeNum(typeArr, type)).toBe('0');
});

test('check typeArr is empty', () => {
  const typeArr: string[] = [];
  const type = 'sansevieria';
  expect(filterHelpers.getTypeNum(typeArr, type)).toBe('0');
});
