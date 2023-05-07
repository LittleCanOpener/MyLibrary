const calculator = require("./calculator.js");

test('Testing The Sum', () => {
    expect(calculator.add(2, 1)).toBe(3)
});
test('Testing Subtraction', () => {
    expect(calculator.subtract(2, 1)).toBe(1)
});
test('Testing Multiplication', () => {
    expect(calculator.multibly(5, 5)).toBe(25)
});
test('Testing Division', () => {
    expect(calculator.divide(2, 2)).toBe(1)
});
test('Testing Modulo', () => {
    expect(calculator.modulo(13, 5)).toBe(3)
});