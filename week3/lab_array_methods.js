/**
 * Assignment 1
 */

const inventors = [
  "Albert Einstein",
  "Issac Newton",
  "Galileo Galilei",
  "Marie Curie",
  "Johannes Kepler",
  "Nicolaus Copernicus",
  "Max Planck",
  "Katherine Blodgett",
  "Ada Lovelace",
  "Sarah E. Goode",
  "Lise Meitner",
  "Hanna Hammarstrom",
];

// console.log(inventors.filter((inventor) => !inventor.startsWith("A")));
// console.log(inventors.filter((inventor) => inventor[0] === "A"));

// console.log(
//   inventors.filter((name) => name.split(" ")[0][0] === name.split(" ")[1][0])
// );

// console.log(inventors.map((name) => name.length));
// console.log(inventors.map((name) => name.toUpperCase()));

// console.log(
//   inventors.reduce(
//     (accumulator, name) => accumulator + name.split(" ")[0] + " ",
//     ""
//   )
// );

// console.log(
//   inventors
//     .map((name) => name.length)
//     .reduce((accumulator, element) => accumulator + element, 0)
// );

// inventors.sort();
// console.log(inventors);

function compareNames(nameA, nameB) {
  if (nameA.length > nameB.length) return -1;
  if (nameA.length === nameB.length) return 0;
  if (nameA.length < nameB.length) return 1;
}

// console.log(compareNames("Mi", "Anh"));
inventors.sort((nameA, nameB) => nameB.length - nameA.length);
// console.log(inventors);

// let arr = [1, 2, 3, 4, 5];

// let accumulator = 0; //initial value

// for (let index = 0; index < arr.length; index++) {
//   const element = arr[index];
//   accumulator = accumulator + element;
// }

// console.log(arr.reduce((accumulator, element) => accumulator + element, 0));

/**
 * Assignment 2
 */

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

function transactionHistory() {
  console.log(`Balance: ${startAmount}`);
  console.log("Transaction History:");
  transactions.forEach((transaction) => {
    if (transaction.type === "withdrawal") {
      startAmount -= transaction.amount;
      console.log(
        `- You withdrew $${transaction.amount}. The new balance is $${startAmount}`
      );
    } else {
      startAmount += transaction.amount;
      console.log(
        `- You deposited $${transaction.amount}. The new balance is $${startAmount}`
      );
    }
  });
  console.log(`End Balance: ${startAmount}`);
}

// transactionHistory();

function getBalance(startAmount, transactions) {
  return transactions.reduce((accumulator, transaction) => {
    if (transaction.type === "withdrawal") {
      accumulator -= transaction.amount;
    } else {
      accumulator += transaction.amount;
    }
    return accumulator;
  }, startAmount);
}

// console.log(getBalance(startAmount, transactions));

function filterType(transactions, type) {
  return transactions
    .filter((transaction) => transaction.type === type)
    .reduce((acc, transaction) => acc + transaction.amount, 0);
  // .map((transaction) => transaction.amount)
  // .reduce((acc, amount) => acc + amount, 0);
}

// console.log("Expense: ", filterType(transactions, "withdrawal"));
// console.log("Income: ", filterType(transactions, "deposit"));

function changeCurrency(transactions, toCurrency, exchangeRate) {
  return transactions.map((transaction) => ({
    ...transaction,
    currency: toCurrency,
    amount: transaction.amount * exchangeRate,
  }));
}

// console.log(changeCurrency(transactions, "VND", usdToVND));

function sortTransaction(transactions, sortBy) {
  return transactions.sort((transA, transB) => {
    if (transA[sortBy] > transB[sortBy]) return 1;
    if (transA[sortBy] === transB[sortBy]) return 0;
    if (transA[sortBy] < transB[sortBy]) return -1;
  });
}

// console.log(sortTransaction(transactions, "type"));
// console.log(sortTransaction(transactions, "amount"));

// console.log(
//   sortTransaction(
//     transactions.filter((transaction) => transaction.type === "deposit"),
//     "amount"
//   )
// );

/**
 * Assignment 3
 */

let shoppingCart = [
  { id: "A31", item: "T-shirt", price: 9.9, quantity: 5 },
  { id: "A32", item: "Jacket", price: 99.9, quantity: 1 },
  { id: "A33", item: "Skirt", price: 19.9, quantity: 2 },
  { id: "A34", item: "Ankle Pant", price: 39.9, quantity: 3 },
  { id: "A35", item: "Polo shirt", price: 14.9, quantity: 3 },
  { id: "A36", item: "Chino Short", price: 29.9, quantity: 2 },
  { id: "A37", item: "Easy Short", price: 19.9, quantity: 2 },
];

// console.log(shoppingCart.map((item) => item.price * item.quantity));
console.log(
  shoppingCart
    .map((item) => item.price * item.quantity)
    .reduce((acc, price) => acc + price, 0)
);

console.log(
  shoppingCart.reduce((acc, item) => acc + item.price * item.quantity, 0)
);

function removeItemsFromCart(productId, quantity) {
  shoppingCart = shoppingCart.filter((item) => {
    if (item.id === productId) {
      item.quantity = item.quantity - quantity;
      if (item.quantity <= 0) return false;
      return item;
    }
    return item;
  });
  console.log(shoppingCart);
}

// removeItemsFromCart("A31", 8);

let product = {
  id: "A38",
  item: "Black Hat",
  price: 9.9,
};

function addItemToCart(product, quantity) {
  // if the item is already in the cart, then increase the quantity
  let flag = false;
  shoppingCart.forEach((item) => {
    if (item.id === product.id) {
      item.quantity += quantity;
      flag = true;
    }
  });
  // if not, shoppingCart.push()
  if (!flag) {
    product.quantity = quantity;
    shoppingCart.push(product);
  }
  console.log(shoppingCart);
}
// addItemToCart(product, 2);

function addItemToCart2(product, quantity) {
  let found = shoppingCart.filter((item) => {
    if (item.id === product.id) {
      item.quantity += quantity;
      return true;
    } else {
      return false;
    }
  });
  if (found.length === 0) {
    product.quantity = quantity;
    shoppingCart.push(product);
  }
}

product = {
  id: "A31",
  item: "Black Hat",
  price: 9.9,
};
addItemToCart(product, 2);
