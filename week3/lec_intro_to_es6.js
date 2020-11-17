/**
 * Shorthand object assignment
 */

function shorthandPropertyNames() {
  // refactor with shortening the object literal
  // and removing reptition
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return {
    red: red,
    green: green,
    blue: blue,
  };
}

// console.log(shorthandPropertyNames());

function methodShorthand() {
  // refactor using method shorthand
  const greeter = {
    sayHi: function sayHi(name) {
      return `Hi ${name}`;
    },
  };
  return greeter.sayHi("Nancy");
}
// console.log(methodShorthand());

/**
 * Template Literal
 */

function printCoord(x, y) {
  console.log("(" + x + ", " + y + ")");

  const title = "Pokemon";
  const HTML5_SKELETON = `
    <!doctype html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
    </body>
    </html>`;
  console.log(HTML5_SKELETON);
}

// printCoord(1, 2);

/**
 * var vs let, const
 */

function blockScoping() {
  if (true) {
    // this will throw an error
    const x = 24;
    let y = 10;
    // this works
    // var x = 24;
    // var y = 10;
  }
  return { x: x, y: y };
}

// console.log(blockScoping());

function temporalDeadZone() {
  console.log(myVar);
  console.log(myLet);
  console.log(myConst);
  var myVar = "var";
  // you can use variables before they"re defined with let and const
  let myLet = "let";
  const myConst = "const";
  return { myVars, myLets, myConsts };
}

console.log(temporalDeadZone());

function immutable() {
  // what is returned?
  const object = { a: "b" };
  const array = [1, 2, 3, 4];
  // this will throw an error
  object = {};
  array = [];
  // this works
  object.a = "q";
  array.splice(1, 1);
  return { object: object, array: array };
}

// console.log(immutable());

/**
 * Destructuring
 */

function sumOfScore() {
  const student = { exam1: 99, exam2: 95, exam3: 95 };
  return student.exam1 + student.exam2 + student.exam3;
}

// console.log(sumOfScore());

function destructuringExample() {
  // Object destructuring
  const obj = { first: "Jane", last: "Doe" };
  const { first, last } = obj; // first = "Jane"; last = "Doe"
  // const { first: f, last: l } = obj; // f = "Jane"; l = "Doe"
  console.log({ first, last });

  const state = { counter: 1, list: ["a", "b"] };
  // no object destructuring
  // const list = state.list;
  // const counter = state.counter;
  // object destructuring
  const { list, counter } = state;
  console.log({ list, counter });

  // Array destructuring
  const iterable = ["a", "b", "c", "d", "e"];
  // const [x, y, ...z] = iterable; // x = "a"; y = "b"
  const [a, b, , , e] = iterable;
  // console.log({ x, y, z });
  console.log({ a, b, e });
}

// destructuringExample();

function getElements() {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7];
  // returns 1st, 2nd and 5th element from an array
  // refactor with skipped destructuring for arrays
  const first = arr[0];
  const second = arr[1];
  const fifth = arr[4];

  return { first, second, fifth };
}

// console.log(getElements());

function detructureNestedObject() {
  let movie = {
    title: "Captain America: The First Avenger",
    director: "Joe Johnston",
    actors: [
      { name: "Chris Evans", role: "Captain America" },
      { name: "Hayley Atwell", role: "Peggy Carter" },
      { name: "Sebastian Stan", role: "Bucky Barnes" },
      { name: "Dominic Cooper", role: "Howard Stark" },
    ],
  };
  const captainAmerica = movie.actors[0];
  const bucky = movie.actors[2];
  const director = movie.director;
  const title = movie.title;

  console.log(
    `In the movie ${title} directed by ${director}, ${bucky.role} was the best friend of ${captainAmerica.role}`
  );
}

// detructureNestedObject();

/**
 * Default and Rest Parameters
 */

function f1(x, y = 7, z = 42) {
  return x + y + z;
}

// console.log(f1(1));

function f2(x, y, ...a) {
  return (x + y) * a.length;
}

// console.log(f2(1, 2, "hello", true, 7));

/**
 * Arrow functions
 */

// Arrow function that has no parameter and returns value by default
function noArgument() {
  function getFive() {
    return 5;
  }
  return getFive();
}
// console.log(noArgument());

// Arrow function with parameters
function multipleArgument() {
  function divide(a, b) {
    return a / b;
  }
  return divide(6, 2);
}
// console.log(multipleArgument());

function withMultiLineExpression() {
  function getString(name) {
    return `
        Hello there ${name}
        How are you doing today?
      `;
  }
  return getString("Ryan");
}
// console.log(withMultiLineExpression());

function nestedFunctions(a, b, c) {
  // refactor to a arrow functions
  function multiply(a) {
    return function (b) {
      return function (c) {
        return a * b * c;
      };
    };
  }
  return multiply(a)(b)(c);
}

// console.log(nestedFunctions(1, 2, 3));

/**
 * this
 */
function methodOfObject() {
  let person = {
    name: "Jack",
    age: 25,
    // sayName: function () {
    sayName() {
      console.log(this.age);
      let innerFunc = () => {
        console.log(this.age);
      };
      innerFunc();
    },
  };
  person.sayName();
}
// methodOfObject();

function arrowFunctionAsMethod() {
  let person = {
    name: "Jack",
    age: 25,
    sayName: () => {
      // this refers to the global .....
      console.log(this.age);
    },
  };

  person.sayName();
}
arrowFunctionAsMethod();
