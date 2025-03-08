// Uncomment the code below and write your tests
// import { mockOne, mockTwo, mockThree, unmockedFunction } from './index';

jest.mock('./index', () => {
  // const originalModule = jest.requireActual<typeof import('./index')>('./index');
});

describe('partial mocking', () => {
  afterAll(() => {
    jest.unmock('./index');
  });

  test('mockOne, mockTwo, mockThree should not log into console', () => {
    // Write your test here
  });

  test('unmockedFunction should log into console', () => {
    // Write your test here
  });
});
