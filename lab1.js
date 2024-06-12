//  String Transformations
// Capitalize frist Letter of a string
const capitalize = (str) => {
  if (!str) {
    return "invalid input"
  }
  let result = str.split("")
  result[0] = result[0].toUpperCase()
  return result.join("")
}

console.log(capitalize("hello"))

// Reverse a string
const reverse = (str) => {
  if (!str) {
    return "invalid input"
  }
  let result = ""
  for (let i = 0; i != 0; i--) {
    result += str[i]
  }
  return result
}

console.log(reverse("howareyou"))

// Is palindrone

const isPalindrome = (str) => {
  if (!str) {
    return "invalid input"
  }
  let strReversed = str.split("").reverse().join("")
  return strReversed === str ? "It a palindrone" : "It not a palindrone"
}

console.log(isPalindrome("racecar"))

// Word count in a string
const wordCount = (str) => {
  if (!str) {
    return "invalid input"
  }
  let arrOfString = str.split(" ")
  return arrOfString.length
}

console.log(wordCount("my name is paakwesi"))

// Array Transformations
const double = (arr) => {
  if (!arr) {
    return "invalid input"
  }
  return arr.map((num) => num * 2)
}

console.log(double([1, 2, 3, 4, 5]))

// filter even numbers out

const filterEven = (arr) => {
  if (!arr) {
    return "invalid input"
  }
  return arr.filter((num) => num % 2 === 0)
}
console.log(filterEven([1, 2, 3, 4, 5, 6, 7, 8]))

// sum all numbers in array
const sum = (arr) => {
  if (!arr) {
    return "invalid input"
  }
  return arr.reduce((acc, num) => acc + num, 0)
}
console.log(sum([1, 2, 3, 4, 5, 6, 7, 8]))

// Average of numbers in array
const average = (arr) => {
  if (!arr) {
    return "invalid input"
  }
  let sum = [...arr].reduce((acc, num) => acc + num, 0)
  return sum / arr.length
}

console.log(average([1, 2, 3, 4, 5, 6, 7, 8]))

// Object Transformation

// Returns the full name of a person object (given
// properties firstName and lastName).

const fullName = (person) => {
  if (!person) {
    return "invalid input"
  }
  return `The full name is: ${person.firstName} ${person.lastName}`
}
console.log(fullName({ firstName: "Paa Kwesi", lastName: "Ephraim" }))

// b. isAdult(person): Checks if a person is 18 or older (given property age).

const isAdult = (person) => {
  if (!person) {
    return "invalid input"
  }
  return person.age >= 18
}
console.log(isAdult({ age: 11 }))

// filterByAge(people, minAge): Filters an array of person objects to keep
// only those at least minAge years old

const filterByAge = (people, minAge) => {
  if (!people || !minAge) {
    return "invalid input"
  }
  return people.filter(({ age }) => age === minAge)
}

console.log(filterByAge([{ age: 3 }, { age: 7 }], 3))

// Compose function
const compose = (f, g) => (x) => f(g(x))

const add2 = (x) => x + 2
const add3 = (x) => x + 3

// Composed function to add 2 and then add 3
const add2ThenAdd3 = compose(add3, add2)

console.log(add2ThenAdd3(5))
