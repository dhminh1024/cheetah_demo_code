function getRandomInt(start = 0, end = 9) {
  return Math.floor(Math.random() * (end - start + 1) + start);
}

function getRandomItem(arr) {
  let index = getRandomInt(0, arr.length - 1);
  return arr[index];
}

function assignment1() {
  console.log("5 random numbers");
  for (let index = 0; index < 5; index++) {
    console.log(Math.random());
  }
  let s = "";
  let arr = ["apple", "orange", "kiwi"];
  for (let index = 0; index < 10; index++) {
    // s = s + " " + getRandomInt(5, 8);
    s = s + " " + getRandomItem(arr);
  }
  console.log(s);
}

// assignment1();

function assignment2(n) {
  for (var i = 1; i < n + 1; i++) {
    var s = "";
    for (var j = 0; j < i; j++) {
      s = s + i + " ";
    }
    console.log(s);
  }
  for (var i = 0; i < 8; i++) {
    var s = "";
    for (var j = 0; j < 8; j++) {
      if ((i + j) % 2 === 0) {
        s = s + " ";
      } else {
        s = s + "#";
      }
    }
    console.log(s);
  }
}

// assignment2(5);

function assignment3() {
  var workingHours = [6, 6, 7, 7, 8, 8, 6, 7, 8, 7];
  var totalIncome = 0;
  for (let index = 0; index < workingHours.length; index++) {
    const element = workingHours[index];
    console.log(`Peter earned $${element * 25} today!`);
    totalIncome = totalIncome + element * 25;
  }
  console.log(`Income in the last 2 weeks: ${totalIncome}`);
  workingHours = [];
  totalIncome = 0;
  for (let index = 0; index < 250; index++) {
    workingHours.push(getRandomInt(6, 8));
    totalIncome = totalIncome + workingHours[workingHours.length - 1] * 25;
  }
  console.log(`Estimate income next year: ${totalIncome}`);
}
// index = 0, totalIncome = 150
// index = 1, totalIncome = 150 + 150 = 300
// index = 2, totalIncome = 300 + 175 = 475
// assignment3();

function leapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
function getLeapYears(start, end) {
  let result = [];
  // loop through from start to end
  for (let index = start; index <= end; index++) {
    // check leap year or not
    if (leapYear(index)) {
      // if yes append the year to the result list
      result.push(index);
    }
  }
  return result;
}

// console.log(getLeapYears(1899, 2001));

function reverseArray(arr) {
  var result = [];
  for (let index = arr.length - 1; index >= 0; index--) {
    const element = arr[index];
    result.push(element);
  }
  return result;
}

// console.log(reverseArray(["A", "B", "C"]));
// // ["C", "B", "A"];
// var arr = [1, 2, 3, 4, 5];
// console.log(reverseArray(arr));
// // [5, 4, 3, 2, 1]
// console.log(arr);
// // [1, 2, 3, 4, 5]

function getNumbers() {
  let numbers = [];
  let evenNumbers = [];
  let oddNumbers = [];
  for (let i = 0; i < 100; i++) {
    numbers.push(getRandomInt(0, 100));
  }
  console.log(numbers);
  for (let i = 0; i < 100; i++) {
    if (numbers[i] % 2 === 1) {
      oddNumbers.push(numbers[i]);
    } else {
      evenNumbers.push(numbers[i]);
    }
  }
  console.log("Even numbers", evenNumbers);
  console.log("Odd numbers", oddNumbers);
}
getNumbers();
