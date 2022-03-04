const data = require('../index.js')

test('Phone Number 1', () => {
  expect(data.formatNumber('8126920471')).toBe(('(812)692-0471'));
});

test('Phone Number 2', () => {
  expect(data.formatNumber('a120e14567')).toBe(('(a12)0e1-4567'));
});

test('Phone Number 3', () => {
  expect(data.formatNumber('')).toBe(('No phone number on file'));
})