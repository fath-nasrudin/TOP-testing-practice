import analyzeArray from './analyzeArray.js';

describe('analyzeArray function', () => {
  // happy path
  test('should return object', () => {
    expect(typeof analyzeArray([1, 2])).toBe('object');
  });

  test('should have average, min, max, length props', () => {
    const obj = analyzeArray([1, 2]);
    expect(obj.hasOwnProperty('average')).toBe(true);
    expect(obj.hasOwnProperty('min')).toBe(true);
    expect(obj.hasOwnProperty('max')).toBe(true);
    expect(obj.hasOwnProperty('length')).toBe(true);
  });

  test('should calculate average correctly', () => {
    const arrOfNums = [1, 2, 3, 4];
    expect(analyzeArray(arrOfNums).average).toBe(2.5);
  });

  test('should calculate length correctly', () => {
    const arrOfNums = [1, 2, 3, 4];
    expect(analyzeArray(arrOfNums).length).toBe(4);
  });

  test('should calculate minimum value correctly', () => {
    expect(analyzeArray([1, 2, 3]).min).toBe(1);
    expect(analyzeArray([1, 1, 2, 3]).min).toBe(1);
    expect(analyzeArray([10]).min).toBe(10);
  });

  test('should calculate maximum value correctly', () => {
    expect(analyzeArray([1, 2, 3]).max).toBe(3);
    expect(analyzeArray([100, 100]).max).toBe(100);
    expect(analyzeArray([10]).max).toBe(10);
  });

  // sad path
  test('should return null if the input is not array', () => {
    expect(analyzeArray('string')).toBe(null);
    expect(analyzeArray(true)).toBe(null);
    expect(analyzeArray(1)).toBe(null);
    expect(analyzeArray(null)).toBe(null);
    expect(analyzeArray(undefined)).toBe(null);
    expect(analyzeArray({})).toBe(null);
  });

  test('should return null if the array have length = 0', () => {
    expect(analyzeArray([])).toBe(null);
  });
});
