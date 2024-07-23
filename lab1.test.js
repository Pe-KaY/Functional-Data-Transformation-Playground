const all = require("./lab1")

test("capitalize", () => {
  expect(all.capitalize("hello")).toBe("Hello")
})

test("reverse", () => {
  expect(all.reverse("hello")).toBe("olleh")
})

test("isPalindrome", () => {
  expect(all.isPalindrome("racecar")).toBe("It a palindrone")
})

test("wordCount", () => {
  expect(all.wordCount("my name is paakwesi")).toBe(4)
})

test("double", () => {
  expect(all.double([2, 3, 4, 5])).toStrictEqual([4, 6, 8, 10])
})

test("filterEven", () => {
  expect(all.filterEven([1, 2, 3, 4, 5, 6, 7, 8])).toEqual([2, 4, 6, 8])
})

test("sum", () => {
  expect(all.sum([1, 2, 3, 4, 5, 6, 7, 8])).toBe(36)
})

test("average", () => {
  expect(all.average([1, 2, 3, 4, 5, 6, 7, 8])).toBe(4.5)
})

test("fullName", () => {
  expect(all.fullName({ firstName: "Paa", lastName: "Kwesi" })).toBe(
    "The full name is: Paa Kwesi"
  )
})

test("isAdult", () => {
  expect(all.isAdult({ firstName: "Paa", lastName: "Kwesi", age: 18 })).toBe(
    true
  )
})

test("filterByAge", () => {
  expect(all.filterByAge([{ age: 3 }, { age: 7 }], 3)).toEqual([{ age: 3 }])
})

test('compose add2 and add3 to add 5', () => {
    const add5 = all.compose(all.add2, all.add3); 
    expect(add5(1)).toBe(6); 
    expect(add5(0)).toBe(5); 
    expect(add5(-1)).toBe(4);
  });
