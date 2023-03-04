import capitalize from './capitalize';

describe('capitalize module', () => {
  test('should capitalize the first char', () => {
    expect(capitalize('test')).toBe('Test');
    expect(capitalize('duolingo')).toBe('Duolingo');
    expect(capitalize('duolingo duoracun')).toBe('Duolingo duoracun');
  });
});
