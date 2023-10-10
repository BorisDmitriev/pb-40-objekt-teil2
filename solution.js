//1
const isWithinRange = (num, obj) => num >= obj.min && num <= obj.max;

console.log( isWithinRange(4, { min: 0, max: 5 }) );   // ➞ true
console.log( isWithinRange(4, { min: 4, max: 5 }) );   //➞ true
console.log( isWithinRange(4, { min: 6, max: 10 }) );  // ➞ false
console.log( isWithinRange(5, { min: 5, max: 5 }) );   //➞ true

//2
const scrabbleHand = [
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 }
  ];

const calcMaxScrabbleScore = arrayOfObjects => {
    let sum = 0;
    for (const obj of arrayOfObjects) {
        sum += obj.score;
    }
    return sum;
};

console.log(calcMaxScrabbleScore(scrabbleHand));

//3
const isEmptyObject = obj => Object.keys(obj).length === 0 ? true : false;

console.log( isEmptyObject({}) );           //➞ true
console.log( isEmptyObject({a: 1}) );       //➞ false

//4
function countLetters(str) {
    let result = {};
    let occurance = 0;
    for (const char of str) {
       for(const char2 of str){
          if( char===char2 ) occurance++;
       }
       result[char] = occurance;
       occurance = 0;
    }
    return result;
}

console.log( countLetters("tree") );   //➞ {t: 1, r: 1, e: 2}

//5
const freeShipping = articles => {
    let sum = 0;
    for (const [name, price] of Object.entries(articles)) {
        sum += price;
    }
    return sum > 50;
};

console.log( freeShipping({ "Sponge": 3.50, "Soap": 5.99 }) );                               //➞ false
console.log( freeShipping({ "Surround Sound Equipment": 499.99 }) );                         //➞ true
console.log( freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }) );    //➞ false


//6
const programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "https://www.quora.com/What-are-the-most-popular-computer-programming-jokes"
  }; 

programming.languages.push("Go");
programming.difficulty = 7;
delete programming.jokes;
programming.isFun = true;

for (const language of programming.languages) {
    console.log(language);
}

//all the keys
for (const [key, value] of Object.entries(programming)) {
    console.log(key);
}

//all the values
for (const [key, value] of Object.entries(programming)) {
    console.log(value);
}

programming.worthwhile = function() {
    if( programming.isChallenging === true && programming.isRewarding === true ) 
        return `Learning the programming languages: JavaScript, Python, Ruby, Go is rewarding and challenging`;
    else
        return false;
}

//bonus
//console.log('logging an object method');
console.log(programming.wirthwhile);
// If we print a function without calling it, we get printed [Function (anonymous)]


//bonus 2
Object.freeze(programming);



