const { CariNilaiPangkat } = require('./powerFunction');

test('a=2, b=3 should return 8', () => {
  expect(CariNilaiPangkat(2, 3)).toBe(8);
});

test('b=0 should return 1', () => {
  expect(CariNilaiPangkat(0, 0)).toBe(1);
});

test('negative exponent should return -1', () => {
  expect(CariNilaiPangkat(2, -1)).toBe(-1);
});

test('b > 10 should return -2', () => {
  expect(CariNilaiPangkat(2, 11)).toBe(-2);
});

test('a > 100 should return -2', () => {
  expect(CariNilaiPangkat(101, 2)).toBe(-2);
});