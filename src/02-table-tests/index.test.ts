import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 4, b: 2, action: Action.Add, expected: 6 },
  { a: 5, b: 2, action: Action.Add, expected: 7 },
];

describe('simpleCalculator', () => {
  it.each(testCases)(
    'accepts arguments: a, b and action - return expected',
    ({ a, b, action, expected }) => {
      expect(simpleCalculator({ a, b, action })).toBe(expected);
    }
  );
});

