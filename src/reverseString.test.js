import reverseString from './reverseString.js';

describe('reverseString function', () => {
  test('should reverse the string', () => {
    expect(reverseString('dua')).toBe('aud');
    expect(reverseString('tiga')).toBe('agit');
  });

  test('should return -1 if the input is not string', () => {
    expect(reverseString()).toBe(-1);
    expect(reverseString(1)).toBe(-1);
    expect(reverseString({})).toBe(-1);
    expect(reverseString(['test'])).toBe(-1);
  });
});
