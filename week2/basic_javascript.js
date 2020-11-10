// Assignment 1

function areaOfACircle() {
  console.log("Area of a circle");
  var pi = 3.14;
  console.log(typeof pi);
  var radius = 5;
  console.log(typeof radius);
  var area = pi * radius ** 2;
  console.log(
    "The area of a circle given the radius " +
      radius +
      " (m) is " +
      area +
      " (m2)"
  );
  console.log(
    `The area of a circle given the radius ${radius} (m) of ${area} (m2)`
  );
}

// areaOfACircle();

function operatorsAndComparisons() {
  console.log("---------------------------------------");
  console.log("Operators");
  console.log("---------------------------------------");
  console.log(`10 + 24 = ${10 + 24}`);
  console.log(`"10" + "24" = ${"10" + "24"}`);
  console.log(`"Hello" + " " + 2021 = ${"Hello" + " " + 2021}`);
  console.log(`1 + 2 * 3 = ${1 + 2 * 3}`);
  console.log(`(1 + 3) ** 2 = ${(1 + 3) ** 2}`);
  console.log(`1 / 0 = ${1 / 0}`);
  console.log(`6 % 2 = ${6 % 2}`);
  console.log(`5.5 % 2 = ${5.5 % 2}`);
  console.log(`Number("123") = ${Number("123")}`);
  console.log(`typeof(1 + "") = ${typeof (1 + "")}`);

  console.log("---------------------------------------");
  console.log("Logical & Comparison");
  console.log("---------------------------------------");
  console.log(`5 == "5" : ${5 == "5"}`);
  console.log(`5 === "5" : ${5 === "5"}`);
  console.log(`8 != 8.0 : ${8 != 8.0}`);
  console.log(`8 !== 8.0 : ${8 !== 8.0}`);
  console.log(`"true" === true : ${"true" === true}`);
  console.log(`4 <= 4.0 : ${4 <= 4.0}`);
  console.log(`7 >= 7 : ${7 >= 7}`);
  console.log(`true && true : ${true && true}`);
  console.log(`true && false : ${true && false}`);
  console.log(`true || true : ${true || true}`);
  console.log(`false || true : ${false || true}`);
  console.log(`!true : ${!true}`);
  console.log(`!false : ${!false}`);
  console.log(`false && (true || true) : ${false && (true || true)}`);
  console.log(`false && true || true : ${(false && true) || true}`);
}

// operatorsAndComparisons();

// Assignment 3

function positiveOrNegative(x) {
  if (x === 0) {
    console.log(`${x} is zero`);
  } else if (x > 0) {
    console.log(`${x} is a positive number`);
  } else if (x < 0) {
    console.log(`${x} is a negative number`);
  }
}

// positiveOrNegative(0);
// positiveOrNegative(-1);
// positiveOrNegative(5);

function findSmallesAndBiggest(a, b, c) {
  if (a <= b && b <= c) {
    console.log(
      `${a} is the smallest number, and ${c} is the biggest number between ${a}, ${b}, ${c}`
    );
  } else if (a <= c && c <= b) {
    console.log(
      `${a} is the smallest number, and ${b} is the biggest number between ${a}, ${b}, ${c}`
    );
  } else if (b <= a && a <= c) {
    console.log(
      `${b} is the smallest number, and ${c} is the biggest number between ${a}, ${b}, ${c}`
    );
  } else if (b <= c && c <= a) {
    console.log(
      `${b} is the smallest number, and ${a} is the biggest number between ${a}, ${b}, ${c}`
    );
  } else if (c <= b && b <= a) {
    console.log(
      `${c} is the smallest number, and ${a} is the biggest number between ${a}, ${b}, ${c}`
    );
  } else if (c <= a && a <= b) {
    console.log(
      `${c} is the smallest number, and ${a} is the biggest number between ${a}, ${b}, ${c}`
    );
  }
}

function findSmallesAndBiggest2(a, b, c) {
  var min = a;
  if (min > b) {
    min = b;
  }
  if (min > c) {
    min = c;
  }
  var max = a;
  if (max < b) {
    max = b;
  }
  if (max < c) {
    max = c;
  }
  console.log(
    `${min} is the smallest number, and ${max} is the biggest number between ${a}, ${b}, ${c}`
  );
}

// findSmallesAndBiggest2(1, 2, 3);
// findSmallesAndBiggest2(3, 3, 3);
// findSmallesAndBiggest2(1, 1, 2);
// findSmallesAndBiggest2(1, 3, 3);

// Assignment 4

function getRangeInclusive(a, b) {
  var s = "";
  if (a > b) {
    for (var i = a; i >= b; i--) {
      // console.log(i);
      s = s + i + " ";
    }
  } else {
    for (var i = a; i <= b; i++) {
      // console.log(i);
      s = s + i + " ";
    }
  }
  console.log(s);
}

// getRangeInclusive(1, 5);
// getRangeInclusive(8, 4);
// getRangeInclusive(5, 5);

function sumOfRange(x, y) {
  var s = 0;
  for (var i = x; i <= y; i++) {
    s += i;
  }
  console.log(`Sum of the numbers between ${x} and ${y} is ${s}`);
}

// sumOfRange(1, 10);

function sumOfDigits(x) {
  var s = 0;
  var digit;
  var originalX = x;
  for (var i = 0; i < 4; i++) {
    digit = x % 10;
    s += digit;
    x = (x - digit) / 10;
  }
  console.log(`Sum of the digits of the number ${originalX} is ${s}`);
}

// sumOfDigits(1444);

// Assignment 5

function wow() {
  console.log("Wow, it worked!");
}

// Assignment 6

function swapValues(a, b) {
  console.log(`Swapping values of a=${a}, b=${b}`);

  var temp = a;
  a = b;
  b = temp;

  console.log(`Done a=${a}, b=${b}`);
}

// swapValues(111, 999);

// Assignment 7

function superFizzBuzz() {
  for (var i = 0; i < 50; i++) {
    if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
      console.log("SuperFizzBuzz");
    } else if (i % 3 === 0 && i % 7 === 0) {
      console.log("SuperFizz");
    } else if (i % 5 === 0 && i % 7 === 0) {
      console.log("SuperBuzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 7 === 0) {
      console.log("Super");
    } else {
      console.log(i);
    }
  }
}

// superFizzBuzz();

function convertNumber(i) {
  if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
    return "SuperFizzBuzz";
  } else if (i % 3 === 0 && i % 7 === 0) {
    return "SuperFizz";
  } else if (i % 5 === 0 && i % 7 === 0) {
    return "SuperBuzz";
  } else if (i % 3 === 0 && i % 5 === 0) {
    return "FizzBuzz";
  } else if (i % 3 === 0) {
    return "Fizz";
  } else if (i % 5 === 0) {
    return "Buzz";
  } else if (i % 7 === 0) {
    return "Super";
  } else {
    return i;
  }
}

function outputRange(start, end) {
  for (var i = start; i <= end; i++) {
    console.log(convertNumber(i));
  }
}

outputRange(0, 10);
