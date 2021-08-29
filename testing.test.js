var utils = require('course-utilities');
var greet = utils.load('./testing.js', 'greet');

test("Hello, Elizabeth", () => {
  const name = 'Elizabeth'; 
  expect(greet(name)).toBe("Hello, Elizabeth");
});

test("Hello there!", () => {
  const name = null;
  expect(greet(name)).toBe("Hello there!");
});

test("UpperCase", () => {
  const name = 'JOSE';
  expect(greet(name)).toBe("HELLO " + name + "!");
});
