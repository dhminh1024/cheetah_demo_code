function f() {
  const result = () => {
    if (Math.random() > 0.5) {
      return "passed";
    } else {
      return "fail";
    }
  };
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(result()), 1000);
  });

  promise.then((result) => {
    if (result === "passed") console.log("Congratz");
    if (result === "fail") console.log("Sorry");
  });
  // if passed, print out Congratz!
  // if fail, print out Sorry!
}

// f();

let promise = new Promise((resolve, reject) => {
  // producer
  console.log("Start Promise");
  setTimeout(() => resolve("Done"), 1000);
  // setTimeout(() => reject(new Error("whoops")), 1000);
  console.log("Step 1");
});

// promise
//   .then((result) => {
//     // consumer
//     console.log(result);
//     console.log("hali halo");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

/**
 * Async/await
 */
// promise = new Promise((resolve, reject) => {
//   // producer
//   // setTimeout(() => resolve("Done"), 1000);
//   setTimeout(() => reject(new Error("whoops")), 1000);
// });

async function asyncFunction() {
  try {
    let result = await promise;
    console.log(result);
    console.log("Hali Halo");
  } catch (error) {
    console.log(error);
  }
}

asyncFunction();
