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

assignment2(5);
