// Q1)
const numbers = [1, 2, 3, 4, 5];
// Given the array numbers = [1, 2, 3, 4, 5],
// write code to create a new array where each
// number is multiplied by 2 using the map method.
// ============== Your answer here:
const multiNumber = (num) => num.map((element) => element * 2);
console.log("The numbers array multiplied by 2", multiNumber(numbers));
// ==============

// Q2)
const names = ["Alice", "Bob", "Charlie"];
// Given the array names = ["Alice", "Bob", "Charlie"],
// write code to create a new array where each name is
// converted to uppercase using the map method.
// ============== Your answer here:

const uppercase = (name) => name.map((element) => element.toUpperCase());
console.log("names in upper case", uppercase(names));
// ==============

// Q3)
const numbers2 = [1, 4, 9, 16, 25];
// Given the array numbers = [1, 4, 9, 16, 25],
// write code to create a new array where each
//  number is squared using the map method.
// ============== Your answer here:

const squaredNumber = (number) => number.map((element) => element ** 2);
console.log("The squared array ", squaredNumber(numbers2));
// =========

// Q4)
const names2 = ["John", "Jane", "Tom"];
// Given the array names = ["John", "Jane", "Tom"],
// write code to create a new array where each name
// is appended with " Smith" using the map method.
// ============== Your answer here:
const appendedWith = (name) => name.map((element) => element + " Smith ");
console.log(appendedWith(names2));

// ==============

// Q5)
const numbers3 = [2, 4, 6, 8, 10];
// Given the array numbers = [2, 4, 6, 8, 10],
//  write code to create a new array where each
// number is divided by 2 using the map method.
// ============== Your answer here:
const dividedBy2 = (number) => number.map((element) => element / 2);
console.log(dividedBy2(numbers3));
// ==============

// Q6)
const fruits = ["apple", "banana", "orange"];
// Given the array fruits = ["apple", "banana", "orange"],
//  write code to create a new array where each fruit
//  name is capitalized using the map method. Ex, Apple ...
// ============== Your answer here:
const capitalized = (fruit) =>
  fruit.map(
    (element) => element.charAt().toLocaleUpperCase() + element.slice(1)
  );
console.log(capitalized(fruits));
// ==============
