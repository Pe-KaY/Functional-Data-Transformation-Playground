//  String Transformations
// Capitalize frist Letter of a string
const capFirstLetter = (str) => {
  let result = str.split("")
  result[0] = result[0].toUpperCase()
  return result.join("")
}

console.log(capFirstLetter("hello"))

// Reverse a string
const reverseString = (str) => {
  return str.split("").reverse().join("")
}

console.log(reverseString("howareyou"))

// Is palindrone

const isPalindrone = (str) => {
  let strReversed = str.split("").reverse().join("")
  return strReversed === str ? "It a palindrone" : "It not a palindrone"
}

console.log(isPalindrone("racecar"))

// Word count in a string
const wordCount = (str) => {
  let arrOfString = str.split(" ")
  return arrOfString.length
}

console.log(wordCount("my name is paakwesi"))

// Array Transformations
const doubleNumberInArray = (arr) => {
  return arr.map((num) => num * 2)
}

console.log(doubleNumberInArray([1, 2, 3, 4, 5]))
