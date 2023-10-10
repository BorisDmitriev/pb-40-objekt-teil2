const rewire = require("rewire");

beforeAll(() => (consoleSpy = jest.spyOn(console, "log")));

describe('1. Is Within Range?', () => {
  test('`isWithinRange` function returns `true` if the passed number is within the range of a passed object\'s `min` and `max` properties', () => {
    const isWithinRange = rewire("../solution").__get__("isWithinRange");
    expect(isWithinRange(4, { min: 0, max: 5 })).toBe(true);
  });
  test('`isWithinRange` function returns `false` if the passed number is not within the range of a passed object\'s `min` and `max` properties', () => {
    const isWithinRange = rewire("../solution").__get__("isWithinRange");
    expect(isWithinRange(4, { min: 10, max: 15 })).toBe(false);
  });
});

describe("2. Scrabble", () => {
  test('`calcMaxScrabbleScore` function given an array of scrabble tiles returns the maximum score that a player can earn from the tiles in their hand', () => {
    const calcMaxScrabbleScore = rewire("../solution").__get__("calcMaxScrabbleScore");
    expect(calcMaxScrabbleScore([{ tile: "B", score: 2 }, { tile: "V", score: 4 }, { tile: "F", score: 4 }, { tile: "U", score: 1 }, { tile: "D", score: 2 }, { tile: "O", score: 1 }, { tile: "U", score: 1 }])).toBe(15);
  });
});

describe("3. Empty Object?", () => {
  test('`isEmptyObject` function returns `true` if the passed object is empty', () => {
    const isEmptyObject = rewire("../solution").__get__("isEmptyObject");
    expect(isEmptyObject({})).toBe(true);
  });
  test('`isEmptyObject` function returns `false` if the passed object is not empty', () => {
    const isEmptyObject = rewire("../solution").__get__("isEmptyObject");
    expect(isEmptyObject({ a: 1 })).toBe(false);
    expect(isEmptyObject({ something: "something" })).toBe(false);
  });
});

describe("4. Counting Letters", () => {
  test('`countLetters` function counts the number of occurrences of each letter in a passed string. Returns an object with key value pairs of letters and the number of occurrences for each letter', () => {
    const countLetters = rewire("../solution").__get__("countLetters");
    expect(countLetters('tree')).toEqual({ t: 1, r: 1, e: 2 });
    expect(countLetters('redecorate')).toEqual({ r: 2, e: 3, d: 1, c: 1, o: 1, a: 1, t: 1 });
  });
});

describe("5. Free Shipping", () => {
  test('`freeShipping` function returns `true` if the total cost of items passed as object exceeds €50', () => {
    const freeShipping = rewire("../solution").__get__("freeShipping");
    expect(freeShipping({ "Tree": 35.0, "Decorations": 19.9 })).toBe(true)
    expect(freeShipping({ "Surround Sound Equipment": 499.99 })).toBe(true)
  });
  test('`freeShipping` function returns `false` if the total cost of items passed as object doesn\'t exceed €50', () => {
    const freeShipping = rewire("../solution").__get__("freeShipping");
    expect(freeShipping({ "Sponge": 3.50, "Soap": 5.99 })).toBe(false)
    expect(freeShipping({ "Bleach": 1.50, "Washing detergeng": 2.99, "fabric softener": 3.50 })).toBe(false)
    expect(freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 })).toBe(false)
  });
});

describe('6. Programming Object', () => {
  test("Should have `Go` at the end of the array in `languages` propperty", () => {
    const programming = rewire('../solution').__get__('programming');
    expect(programming.languages[programming.languages.length - 1]).toMatch(/Go/i);
  });

  test("Should have `7` as value of `difficulty` propperty", () => {
    const programming = rewire('../solution').__get__('programming');
    expect(programming.difficulty).toBe(7);
  });

  test("`jokes` propperty should have been removed from the `programming` object", () => {
    const programming = rewire('../solution').__get__('programming');
    expect(programming.jokes).toBeUndefined();
  });

  test("Should have a new key named `isFun` with value `true`", () => {
    const programming = rewire('../solution').__get__('programming');
    expect(programming.isFun).toBeDefined();
  });

  test("All values of array in `languages` propperty are printed to the console in loop", () => {
    const programming = rewire('../solution').__get__('programming');
    const solutionFile = require('../solution');
    programming.languages.forEach((lang) => {
      expect(consoleSpy).toHaveBeenCalledWith(lang);
    });
  });

  test("All keys of `programming` are printed to the console in loop", () => {
    const programming = rewire('../solution').__get__('programming');
    const solutionFile = require('../solution');
    Object.keys(programming).forEach((key) => key !== 'worthwhile' ? expect(consoleSpy).toHaveBeenCalledWith(key) : null);
  });

  test("All values of `programming` are printed to the console in loop", () => {
    const programming = rewire('../solution').__get__('programming');
    const solutionFile = require('../solution');
    Object.values(programming).forEach((value) => typeof value !== "function" ? expect(consoleSpy).toHaveBeenCalledWith(value) : null);
  });

  test("Should have method `worthwhile` that returns `Learning the programming languages: JavaScript, Python, Ruby, Go is rewarding and challenging` if the keys `isChallenging` and `isRewarding` have values of `true`", () => {
    const programming = rewire('../solution').__get__('programming');
    programming.isChallenging && programming.isRewarding ? expect(programming.worthwhile()).toMatch(/Learning the programming languages: JavaScript, Python, Ruby, Go is rewarding and challenging/i) : null;
  });
});