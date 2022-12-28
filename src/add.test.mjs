import { add } from './add.mjs';

const positiveData = [
  { a: 1, b: 2, expected: 3 },
  { a: 2, b: 3, expected: 5 },
  { a: 3, b: 4, expected: 7 },
];

describe('add function positive', () => {
  positiveData.forEach(({ a, b, expected }) => {
    test(`add ${a} + ${b} = ${expected}`, () => {
      expect(add(a, b)).toBe(expected);
    });
  });
});

const negativeData = [
  { a: 1, b: 2, expected: 100 },
  { a: 2, b: 3, expected: 100 },
  { a: 3, b: 4, expected: 100 },
];

describe('add function negative', () => {
  negativeData.forEach(({ a, b, expected }) => {
    test(`add ${a} + ${b} != ${expected}`, () => {
      expect(add(a, b)).not.toBe(expected);
    });
  });
});
