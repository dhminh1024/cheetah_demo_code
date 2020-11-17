/**
 * Callback functions
 */

function setTimeOutExample() {
  const sayHi = (name) => console.log(`Hi ${name}`);
  // This calls sayHi() after one second
  setTimeout(sayHi, 1000, "CoderSchool");
}

// setTimeOutExample();

function setIntervalExample() {
  let n = 1;
  let counter = () => {
    console.log(n);
    n += 1;
  };
  // repeat with the interval of one second
  let timerId = setInterval(counter, 1000);
  // stop after 5 seconds
  setTimeout(() => {
    clearInterval(timerId);
  }, 5000);
}

// setIntervalExample();

/**
 * array.forEach()
 */

function forEachExample() {
  const arr = ["Mango", "Banana", "Orange"];
  arr.forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
  });
  arr.forEach((item) => console.log(`${item} is a fruit`));
}

// forEachExample();

/**
 * array.find()
 */

function findExample() {
  let users = [
    { id: 1, name: "John" },
    { id: 1, name: "Pete" },
    { id: 3, name: "Mary" },
  ];

  let user = users.find((item) => item.id == 1);

  return user;
}

// console.log(findExample());

/**
 * array.filter()
 */

function filterExample() {
  let users = [
    { id: 1, name: "John" },
    { id: 2, name: "John" },
    { id: 3, name: "Mary" },
  ];

  let result = users.filter((item) => item.name == "John");

  return result;
}

// console.log(filterExample());

/**
 * array.map()
 */

function mapExample() {
  let arr = ["Mango", "Banana", "Orange"];
  let lengths = arr.map((item) => item.length);
  return lengths;
}

// console.log(mapExample());

/**
 * array.sort()
 */

function sortArray(arr) {
  // sorted as string
  arr.sort();

  // compare method
  // function compareNumber(a, b) {
  //   if (a > b) return 1;
  //   if (a === b) return 0;
  //   if (a < b) return -1;
  // }
  // arr.sort(compareNumber);

  // arrow functions
  // arr.sort((a, b) => a - b);
}

let arr = [15, 2, 1];
sortArray(arr);
// console.log(arr);

let users = [
  { id: 1, name: "C John", age: 32 },
  { id: 2, name: "B Pete", age: 14 },
  { id: 3, name: "A Mary", age: 60 },
];

users.sort((userA, userB) => userA.age - userB.age);
// console.log(users);

/**
 * array.reduce()
 */

function sumOfElements(arr) {
  return arr.reduce((sum, current) => sum + current, 0);
}

// console.log(sumOfElements([1, 2, 3, 4, 5]));

let cart = [
  { id: 1, name: "Banana", price: 0.5, quantity: 5 },
  { id: 2, name: "Mango", price: 1.5, quantity: 3 },
  { id: 3, name: "Orange", price: 0.9, quantity: 7 },
];

let totalPrice = cart.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);
// console.log(totalPrice);
