const { isValidColorName, buildColorPayload } = require('../jss/code.js');

test('valid color name returns true', () => {
  expect(isValidColorName('Blue')).toBe(true);
});

test('empty color name returns false', () => {
  expect(isValidColorName('   ')).toBe(false);
});

test('buildColorPayload returns correct JSON structure', () => {
  const result = buildColorPayload(1, ' Red ');

  expect(result).toEqual({
    userId: 1,
    color: 'Red'
  });
});
