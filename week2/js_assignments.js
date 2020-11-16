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

assignment1();
