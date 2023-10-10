# Objects: Part 2
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


# **1. Check if a number is within a given range.**
Create a function named `isWithinRange` that checks if a number is within the range of an object's min and max properties. Assume _min <= max_ is always true.

Examples:

- `isWithinRange(4, { min: 0, max: 5 })` ➞ true
- `isWithinRange(4, { min: 4, max: 5 })` ➞ true
- `isWithinRange(4, { min: 6, max: 10 })` ➞ false
- `isWithinRange(5, { min: 5, max: 5 })` ➞ true

# **2. Scrabble.**
Create a function named `calcMaxScrabbleScore` that given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand.

Example:
```javascript
const scrabbleHand = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 }
]
```
`console.log(calcMaxScrabbleScore(scrabbleHand));` ➞ 28

Here the player's maximum score would be `1 + 5 + 10 + 8 + 2 + 1 + 1` = 28

# **3. Is it an empty object?**
Create a function `isEmptyObject` that returns true if an object is empty, and false if otherwise.

Examples:

- `isEmptyObject({})` ➞ true
- `isEmptyObject({a: 1})` ➞ false

# **4. Counting Letters.**
Create a function `countLetters` that counts the number of occurrences of each letter in a string. Return an object with key value pairs of letters and the number of occurrences for each letter.

Example:

- `countLetters("tree")` ➞ {t: 1, r: 1, e: 2}

# **5. Free Shipping.**
Create a function `freeShipping` that determines whether an online order should get free shipping. An order gets free shipping if the total cost of items exceeds €50.

Examples:

- `freeShipping({ "Sponge": 3.50, "Soap": 5.99 })` ➞ false
- `freeShipping({ "Surround Sound Equipment": 499.99 })` ➞ true
- `freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 })` ➞ false

# **6. Programming Object.**

```javascript
const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes: "https://www.quora.com/What-are-the-most-popular-computer-programming-jokes"
};
```

- Write an instruction that adds the language "Go" to the end of the languages array.

- Change the difficulty to `7`.
- Using the delete keyword, write an instruction to remove the jokes key from the programming object.
- Write an instruction to add a new key called isFun with a value of true to the programming object.
- Using a loop, iterate through the languages array and console.log all of the languages.
- Using a loop, console.log all of the keys in the programming object.
- Using a loop, console.log all of the values in the programming object.
- Add the method `worthwhile` that returns "Learning the programming languages: JavaScript, Python, Ruby, Go is rewarding and challenging" if the keys "isChallenging" and "isRewarding" have values of true. In case "isChallenging" or "isRewarding" has value of false, return false.
- **Bonus:** In a comment, explain what is printed if we console.log an object method without calling it.

**Bonus**:
- Make sure that any other code cannot delete or change properties of the object.

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### 1. Is Within Range?

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | `isWithinRange` function returns `true` if the passed number is within the range of a passed object's `min` and `max` properties |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | `isWithinRange` function returns `false` if the passed number is not within the range of a passed object's `min` and `max` properties |

### 2. Scrabble

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | `calcMaxScrabbleScore` function given an array of scrabble tiles returns the maximum score that a player can earn from the tiles in their hand |

### 3. Empty Object?

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | `isEmptyObject` function returns `true` if the passed object is empty |
| ![Status](../../blob/badges/.github/badges/main/status4.svg) | `isEmptyObject` function returns `false` if the passed object is not empty |

### 4. Counting Letters

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status5.svg) | `countLetters` function counts the number of occurrences of each letter in a passed string. Returns an object with key value pairs of letters and the number of occurrences for each letter |

### 5. Free Shipping

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status6.svg) | `freeShipping` function returns `true` if the total cost of items passed as object exceeds €50 |
| ![Status](../../blob/badges/.github/badges/main/status7.svg) | `freeShipping` function returns `false` if the total cost of items passed as object doesn't exceed €50 |

### 6. Programming Object

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status8.svg) | Should have `Go` at the end of the array in `languages` propperty |
| ![Status](../../blob/badges/.github/badges/main/status9.svg) | Should have `7` as value of `difficulty` propperty |
| ![Status](../../blob/badges/.github/badges/main/status10.svg) | `jokes` propperty should have been removed from the `programming` object |
| ![Status](../../blob/badges/.github/badges/main/status11.svg) | Should have a new key named `isFun` with value `true` |
| ![Status](../../blob/badges/.github/badges/main/status12.svg) | All values of array in `languages` propperty are printed to the console in loop |
| ![Status](../../blob/badges/.github/badges/main/status13.svg) | All keys of `programming` are printed to the console in loop |
| ![Status](../../blob/badges/.github/badges/main/status14.svg) | All values of `programming` are printed to the console in loop |
| ![Status](../../blob/badges/.github/badges/main/status15.svg) | Should have method `worthwhile` that returns `Learning the programming languages: JavaScript, Python, Ruby, Go is rewarding and challenging` if the keys `isChallenging` and `isRewarding` have values of `true` |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=PB-objects-pt2)


[//]: # (autograding info end)