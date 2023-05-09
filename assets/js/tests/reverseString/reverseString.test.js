const reverseString = require('./reverseString');
test('Should reverse normal strings', () => {
  expect(reverseString("reverse")).toBe("esrever");
});
test('Should accept input as strings & rever them', () => {
    expect(reverseString(1234567)).toBe("7654321");
});
test('Should accept zero-length string', () => {
    expect(reverseString("")).toBe("");
});

