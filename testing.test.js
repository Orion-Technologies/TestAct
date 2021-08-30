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

test("Two names", () => {
  const name = ["Jose","Pep"];
  expect(greet(name)).toBe("Hello, " + "Jose" + "," + "Pep"); 
})

test("A lot of names", () => {
  const name = ["Alex","Arsene","Jose","Zidane"];
  expect(greet(name)).toBe("Hello, " + "Alex" + "," + "Arsene" + "," + "Jose" + "," + "Zidane");
});
