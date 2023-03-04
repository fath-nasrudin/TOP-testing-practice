import calculator from './calculator.js';

describe('calculator module', () => {
  describe('add method', () => {
    test('should correct adding two number', () => {
      expect(calculator.add(2, 3)).toBe(5);
      expect(calculator.add(2, 4)).toBe(6);
    });

    test('should return null if no argument', () => {
      expect(calculator.add()).toBe(null);
    });

    test('should return null if only 1 argument', () => {
      expect(calculator.add(1)).toBe(null);
    });

    test('should return null if the arguments is not number type', () => {
      expect(calculator.add('1', '2')).toBe(null);
    });
  });

  describe('subtract method', () => {
    test('should correct subtracting two number', () => {
      expect(calculator.subtract(3, 1)).toBe(2);
      expect(calculator.subtract(3, 5)).toBe(-2);
    });

    test('should return null if no argument', () => {
      expect(calculator.subtract()).toBe(null);
    });

    test('should return null if only 1 argument', () => {
      expect(calculator.subtract(1)).toBe(null);
    });

    test('should return null if the arguments is not number type', () => {
      expect(calculator.subtract('1', '2')).toBe(null);
    });
  });

  describe('divide method', () => {
    test('should correct divide first number with second number', () => {
      expect(calculator.divide(3, 1)).toBe(3);
      expect(calculator.divide(8, 2)).toBe(4);
    });

    test('should return null if no argument', () => {
      expect(calculator.divide()).toBe(null);
    });

    test('should return null if only 1 argument', () => {
      expect(calculator.divide(1)).toBe(null);
    });

    test('should return null if the arguments is not number type', () => {
      expect(calculator.divide('1', '2')).toBe(null);
    });

    test('should return null if the divider is 0', () => {
      expect(calculator.divide(8, 0)).toBe(null);
    });
  });

  describe('multiply method', () => {
    test('should correct multiplying two number', () => {
      expect(calculator.multiply(2, 3)).toBe(6);
      expect(calculator.multiply(2, -5)).toBe(-10);
    });

    test('should return null if no argument', () => {
      expect(calculator.divide()).toBe(null);
    });

    test('should return null if only 1 argument', () => {
      expect(calculator.divide(1)).toBe(null);
    });

    test('should return null if the arguments is not number type', () => {
      expect(calculator.divide('1', '2')).toBe(null);
    });
  });
});
