const CariTandaBilangan = require('./bilangan');

test('angka negatif', () => {
  expect(CariTandaBilangan(-10)).toBe("Negatif");
});

test('angka positif', () => {
  expect(CariTandaBilangan(5)).toBe("Positif");
});

test('angka nol', () => {
  expect(CariTandaBilangan(0)).toBe("Nol");
});
