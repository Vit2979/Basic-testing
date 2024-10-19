
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    expect(simpleCalculator({ a: 5, b: 10, action: Action.Add })).toBe(15);
    expect(simpleCalculator({ a: 14, b: 12, action: Action.Add })).toBe(26);
  });

  test('should subtract two numbers', () => {
    expect(simpleCalculator({ a: 23, b: 9, action: Action.Subtract })).toBe(14);
    expect(simpleCalculator({ a: 12, b: 3, action: Action.Subtract })).toBe(9);
  });

  test('should multiply two numbers', () => {
    expect(simpleCalculator({ a: 9, b: 3, action: Action.Multiply })).toBe(27);
    expect(simpleCalculator({ a: 5, b: 8, action: Action.Multiply })).toBe(40);
  });

  test('should divide two numbers', () => {
    expect(simpleCalculator({ a: 10, b: 2, action: Action.Divide })).toBe(5);
    expect(simpleCalculator({ a: 24, b: 8, action: Action.Divide })).toBe(3);
  });

  test('should exponentiate two numbers', () => {
    expect(simpleCalculator({ a: 5, b: 3, action: Action.Exponentiate })).toBe(125);
    expect(simpleCalculator({ a: 2, b: 4, action: Action.Exponentiate })).toBe(16);
  });

  test('should return null for invalid action', () => {
    expect(simpleCalculator({ a: 24, b: 8, action: '' })).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    expect(simpleCalculator({ a: '24', b: 8, action: Action.Divide })).toBeNull();
  });
});
