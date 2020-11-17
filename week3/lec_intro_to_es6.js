// "use strict";

/**
 * Shorthand object assignment
 */

function shorthandPropertyNames() {
  // refactor with shortening the object literal
  // and removing reptition
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return { red, green, blue };
}

// console.log(shorthandPropertyNames());

function methodShorthand() {
  // refactor using method shorthand
  const greeter = {
    sayHi(name) {
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
  // console.log("(" + x + ", " + y + ")");
  console.log(`(${x}, ${y})`);

  const title = "Pokemon";
  const HTML5_SKELETON = `
    <!doctype html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>${title}</title>
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
    // const x = 24;
    // let y = 10;
    // this works
    var x = 24;
    var y = 10;
  }
  return { x, y };
}

function forLoop() {
  for (var i = 0; i < 5; i++) {
    // do something here
  }
  console.log(i);
}
// forLoop();

// console.log(blockScoping());

function temporalDeadZone() {
  console.log(myVar);
  // console.log(myLet);
  // console.log(myConst);
  var myVar = "var";
  // you can use variables before they"re defined with let and const
  let myLet = "let";
  const myConst = "const";
  return { myVar, myLet, myConst };
}

// console.log(temporalDeadZone());

function immutable() {
  // what is returned?
  const object = { a: "b" };
  const array = [1, 2, 3, 4];
  // this will throw an error
  // object = {};
  // array = [];
  // this works
  object.a = "q";
  array.splice(0, 4);
  return { object: object, array: array };
}

// console.log(immutable());

/**
 * Destructuring
 */

function sumOfScore() {
  const student = { exam1: 99, exam2: 95, exam3: 95 };
  // let exam1 = student.exam1;
  // let exam2 = student.exam2;
  // let exam3 = student.exam3;
  const { exam1, exam2, exam3 } = student;
  return exam1 + exam2 + exam3;
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
  const [x, y, ...z] = iterable; // x = "a"; y = "b"
  console.log({ x, y, z });
  // const [a, b, , , e] = iterable;
  // console.log({ x, y, z });
  // console.log({ a, b, e });
}

// destructuringExample();

function getElements() {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7];
  // returns 1st, 2nd and 5th element from an array
  // refactor with skipped destructuring for arrays
  // const first = arr[0];
  // const second = arr[1];
  // const fifth = arr[4];
  const [first, second, , , fifth] = arr;

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
  // const captainAmerica = movie.actors[0];
  // const bucky = movie.actors[2];
  // const director = movie.director;
  // const title = movie.title;

  const {
    title,
    director,
    actors: [captainAmerica, , bucky],
  } = movie;

  console.log(
    `In the movie ${title} directed by ${director}, ${bucky.role} was the best friend of ${captainAmerica.role}`
  );
}

// detructureNestedObject();

/**
 * Spread
 */

function printMax() {
  var arr = [1, 2, 3, 88, 99, 3, 4];
  console.log(Math.max(...arr));
  // console.log(Math.max(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6] ));
}

// printMax();

function concatArray(arr1, arr2) {
  return [...arr1, ...arr2];
}

// console.log(concatArray(["a", "b"], ["c", "d"]));

/**
 * Default and Rest Parameters
 */

function f1(z, x = 1, y = 7) {
  return x + y + z;
}

// console.log(f1(1));

function f2(x, y, ...a) {
  return (x + y) * a.length;
}

// console.log(f2(1, 2, "hello", true, 7));

function f3(obj) {
  const { a, b } = obj;
  console.log({ a, b });
}

var obj = {
  a: 1,
  b: 2,
};
// f3(obj);

/**
 * Arrow functions
 */

// Arrow function that has no parameter and returns value by default
function noArgument() {
  // function getFive() {
  //   return 5;
  // }
  const getFive = () => 5;
  return getFive();
}
// console.log(noArgument());

// Arrow function with parameters
function multipleArgument() {
  // function divide(a, b) {
  //   return a / b;
  // }
  const divide = (a, b) => a / b;
  return divide(6, 2);
}
// console.log(multipleArgument());

function withMultiLineExpression() {
  // function getString(name) {
  //   return `
  //       Hello there ${name}
  //       How are you doing today?
  //     `;
  // }
  const getString = (name) => {
    return `
          Hello there ${name}
          How are you doing today?
        `;
  };
  console.log(typeof getString);
  return getString("Ryan");
}
// console.log(withMultiLineExpression());

function nestedFunctions(a, b, c) {
  // refactor to a arrow functions
  // function multiply(a) {
  //   return function (b) {
  //     return function (c) {
  //       return a * b * c;
  //     };
  //   };
  // }
  const multiply = (a) => (b) => (c) => a * b * c;
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
    firstChild: {
      name: "Mia",
      sayName() {
        console.log(this.name);
        // let innerFunc = () => {
        //   console.log(this.age);
        // };
        // innerFunc();
      },
    },
    sayName() {
      console.log(this.name);
      // let innerFunc = () => {
      //   console.log(this.age);
      // };
      // innerFunc();
    },
  };
  person.firstChild.sayName();
}
// methodOfObject();

function arrowFunctionAsMethod() {
  let person = {
    name: "Jack",
    age: 25,
    sayName: () => {
      // this refers to the global .....
      console.log(this);
    },
  };

  person.sayName();
}
arrowFunctionAsMethod();
