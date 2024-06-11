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
