import filterHelpers from '../src/ts/components/filters/filterHelpers';

test('check values.length > 2', () => {
  const values: number[] = [2, 5, 11, 23, 47, 66, 82];
  expect(filterHelpers.updateMinMax(values)).toStrictEqual(['2', '82']);
});

test('check values.length === 2', () => {
  const values: number[] = [2, 82];
  expect(filterHelpers.updateMinMax(values)).toStrictEqual(['2', '82']);
});

test('check !values.length', () => {
  const values: number[] = [];
  expect(filterHelpers.updateMinMax(values)).toStrictEqual(['', '']);
});

test('check values.length === 1', () => {
  const values: number[] = [5];
  expect(filterHelpers.updateMinMax(values)).toStrictEqual(['5', '5']);
});
