function f2(n) {
  console.log(n);
}

function f1(f2) {
  return f2(3);
}
// f1(f2);

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
  console.log(n);
  n = n + 1;
  // repeat with the interval of one second
  let timerId = setInterval(counter, 1000);
  // stop after 5 seconds
  setTimeout(() => {
    clearInterval(timerId);
  }, 6000);
}

// setIntervalExample();

/**
 * array.forEach()
 */

function forEachExample() {
  const arr = ["Mango", "Banana", "Orange"];
  // for (let index = 0; index < arr.length; index++) {
  //   const element = arr[index];
  //   console.log(element);
  // }
  // const printElement = (element, index, array) => {
  //   console.log(element);
  //   console.log(index);
  //   console.log(array);
  // };
  arr.forEach(printElement);
  // arr.forEach((item, index, array) => {
  //   console.log(`${item} is at index ${index} in ${array}`);
  // });
  arr.forEach((item) => console.log(`${item} is a fruit`));
}

// forEachExample();

/**
 * array.find()
 */

function findExample() {
  let users = [
    { id: 2, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" },
  ];
  let user = users.find((user) => user.id === 1);

  return user;
}

// First loop
// user = { id: 2, name: "John" } => false
// user = { id: 1, name: "Pete" } => true
// return { id: 1, name: "Pete" },
// console.log(findExample());

/**
 * array.filter()
 */

function filterExample() {
  let users = [
    { id: 1, name: "John1" },
    { id: 2, name: "John2" },
    { id: 3, name: "Mary" },
  ];

  let result = users.filter((user) => user.name === "John");

  return result;
}

// console.log(filterExample());

/**
 * array.map()
 */

function mapExample() {
  let arr = ["Mango", "Banana", "Orange"];
  let lengths = arr.map((item) => "Minh likes " + item);
  return lengths;
}

// console.log(mapExample());

/**
 * array.sort()
 */

function sortArray(arr) {
  // sorted as string
  // arr.sort();

  // compare method
  // function compareNumber(a, b) {
  //   if (a > b) return 1;
  //   if (a === b) return 0;
  //   if (a < b) return -1;
  // }
  // arr.sort(compareNumber);

  // arrow functions
  arr.sort((a, b) => a - b);
}

let arr = [15, 2, 1];
sortArray(arr);
console.log(arr);

let users = [
  { id: 1, name: "C John", age: 32 },
  { id: 2, name: "B Pete", age: 14 },
  { id: 3, name: "A Mary", age: 60 },
  { id: 4, name: "A Minh", age: 23 },
  { id: 5, name: "Mia", age: 12 },
  { id: 6, name: "LA", age: 90 },
  { id: 7, name: "MA", age: 45 },
];

users.sort((userA, userB) => userA.age - userB.age);
console.log(users);

// find the youngest
function getYoungest(arr) {
  let youngest = { age: Infinity };
  let youngestIndex = -1;
  for (let index = 0; index < arr.length; index++) {
    const person = arr[index];
    if (person.age < youngest.age) {
      youngest = person;
      youngestIndex = index;
    }
  }
  arr.splice(youngestIndex, 1);
  return youngest;
}

// console.log(getYoungest(users));
// console.log(users);

function sort(arr) {
  let result = [];
  while (arr.length > 0) {
    result.push(getYoungest(arr));
  }
  return result;
}
console.log(sort(users));

/**
 * array.reduce()
 */

function sumOfElements(arr) {
  // let sum = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   sum = sum + i;
  // }
  // return sum;
  return arr.reduce((sum, item) => sum + item, 0);
}

// console.log(sumOfElements([1, 2, 3, 4, 5]));

let cart = [
  { id: 1, name: "Banana", price: 0.5, quantity: 5 },
  { id: 2, name: "Mango", price: 1.5, quantity: 3 },
  { id: 3, name: "Orange", price: 0.9, quantity: 7 },
];

let totalPrice = 0; //initial value
// for (let i = 0; i < cart.length; i++) {
//   const product = cart[i];
//   totalPrice = totalPrice + product.price * product.quantity;
// }
function callback(product) {
  totalPrice = totalPrice + product.price * product.quantity;
}
// cart.forEach(
//   (product) => (totalPrice = totalPrice + product.price * product.quantity)
// );

totalPrice = cart.reduce(
  (accumulator, product) => accumulator + product.price * product.quantity,
  0
);

// console.log(totalPrice);

let workingHours = [6, 6, 7, 7, 8, 8, 6, 7, 8, 7];

// let income = 0;
// workingHours.forEach((hour) => (income = income + hour * 25));

let income = workingHours.reduce((acc, hour) => acc + hour * 25, 0);

let eightHours = workingHours.filter((hour) => hour === 8);

workingHours.sort((a, b) => a - b);

console.log("Total Income", income);
console.log(eightHours.length);
console.log(workingHours);

let startAmount = 1000;
let transactions = [
  { currency: "USD", amount: 12, type: "withdrawal" },
  { currency: "USD", amount: 104, type: "withdrawal" },
  { currency: "USD", amount: 150, type: "deposit" },
  { currency: "USD", amount: 150, type: "deposit" },
  { currency: "USD", amount: 250, type: "withdrawal" },
  { currency: "USD", amount: 500, type: "deposit" },
  { currency: "USD", amount: 447, type: "withdrawal" },
  { currency: "USD", amount: 120, type: "deposit" },
  { currency: "USD", amount: 58, type: "withdrawal" },
  { currency: "USD", amount: 90, type: "withdrawal" },
];
const usdToVND = 23000;

console.log(`Balance: ${startAmount}`);
transactions.forEach((transaction) => {
  if (transaction.type === "withdrawal") {
    startAmount = startAmount - transaction.amount;
    console.log(
      `- You withdrew $${transaction.amount}. The new balance is $${startAmount}`
    );
  } else {
    startAmount = startAmount + transaction.amount;
    console.log(
      `- You deposited $${transaction.amount}. The new balance is $${startAmount}`
    );
  }
});
console.log(`Current Balance ${startAmount}`);
