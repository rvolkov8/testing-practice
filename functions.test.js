import {
  calculator,
  capitalize,
  caesarCipher,
  reverseString,
  analyzeArray,
} from "./functions";

test("Capitalize", () => {
  expect(capitalize("project")).toBe("Project");
});

test("Reverse string", () => {
  expect(reverseString("project")).toBe("tcejorp");
});

test("Calculator add function", () => {
  expect(calculator.add(4, 8)).toBe(12);
});

test("Calculator subtract function", () => {
  expect(calculator.subtract(15, 6)).toBe(9);
});

test("Calculator divide function", () => {
  expect(calculator.divide(8, 4)).toBe(2);
});

test("Calculator multiply function", () => {
  expect(calculator.multiply(10, 3)).toBe(30);
});

test("Caesar Cipher lowercase", () => {
  expect(caesarCipher("defend the east wall of the castle", 5)).toBe(
    "ijkjsi ymj jfxy bfqq tk ymj hfxyqj"
  );
});

test("Caesar Cipher multiple case", () => {
  expect(caesarCipher("Defend The East Wall Of The Castle", 5)).toBe(
    "Ijkjsi Ymj Jfxy Bfqq Tk Ymj Hfxyqj"
  );
});

test("Caesar Cipher punctuation", () => {
  expect(caesarCipher("defend the east wall, of the castle", 5)).toBe(
    "ijkjsi ymj jfxy bfqq, tk ymj hfxyqj"
  );
});

test("Analyze array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
