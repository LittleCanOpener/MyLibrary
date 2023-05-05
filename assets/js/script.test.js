
  const {
    Book,
    UI,
    Store
  } = require('./script.js')

test('Output Values', () => {
  Store('Adds book to Library')
  expect(localStorage.setItem).toHaveBeenCalledOnce();
});