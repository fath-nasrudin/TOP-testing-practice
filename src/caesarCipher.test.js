import caesarCipher from './caesarCipher.js';

describe('caesarCipher function', () => {
  // happy path
  test('should return encrypted string', () => {
    expect(caesarCipher('abc', 1)).toBe('bcd');
    expect(caesarCipher('bcd', 2)).toBe('def');
  });

  test('should return null of the type of text is not string', () => {
    expect(caesarCipher()).toBe(null);
    expect(caesarCipher(null)).toBe(null);
    expect(caesarCipher({})).toBe(null);
    expect(caesarCipher(1)).toBe(null);
    expect(caesarCipher([])).toBe(null);
  });

  test('should set default offset to 1 if offset arg not provided', () => {
    expect(caesarCipher('abc')).toBe('bcd');
  });

  test('should wrap the next char after z to a', () => {
    expect(caesarCipher('xyz')).toBe('yza');
    expect(caesarCipher('zbc')).toBe('acd');
  });

  test('should handle (using modulus) if offset more than 26', () => {
    expect(caesarCipher('abc', 28)).toBe('cde');
  });

  test('should handle (using modulus) if offset less than 0', () => {
    expect(caesarCipher('abc', -51)).toBe('bcd');
    expect(caesarCipher('abc', -25)).toBe('bcd');
  });

  test('should keep non alphabetical character', () => {
    expect(caesarCipher('abc!.', -51)).toBe('bcd!.');
  });

  test('should lowercasing capitalized char', () => {
    expect(caesarCipher('aBC!', -51)).toBe('bcd!');
  });
});
