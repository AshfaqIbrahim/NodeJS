// //setInterval and setTimeout
// const timer = setTimeout(() => {
//   function example(a, b) {
//     result = a + b;
//     console.log(result);
//   }
//   example(5, 5);
// }, 5000);

// // clearTimeout(timer); //clearing timeout

// const intervall = setInterval(() => {
//   function interval(str) {
//     console.log(`Welcome... ${str}`);
//   }
//   interval("Ashfaq");
// }, 2000);

// // clearInterval(intervall); //clearing interval

// //Callbacks
// function greet(name, callback) {
//   console.log("Hello.." + name);
//   callback(name); //passed the value of name, to use the value inside sayBye fn.
// }

// function sayBye(str) {
//   console.log("Byee " + str.toUpperCase());
// }
// greet("Ashfaq", sayBye);

// //Promises
// const myPromise = new Promise((resolve, reject) => {
//   let success = true;
//   if (success) {
//     resolve("Successfully completed the tasks");
//   } else {
//     reject("Tasks failed!");
//   }
// });

// myPromise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => console.log("Thank you...")); //optional code, runs everytime

// // //Async / await
// // 1.
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data received");
//     }, 2000);
//   });
// }

// async function getData() {
//   try {
//     const result = await fetchData();
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// }

// getData()

//2.
// function asyncAwait() {
//   return new Promise((resolve, reject) => {
//     let success = true;
//     if (success) {
//       resolve("Tasks are completed successfully...");
//     } else {
//       reject("Failed completing tasks!");
//     }
//   });
// }

const myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Successfully completed tasks...");
  } else {
    reject("Tasks failed!");
  }
});

async function blaBla() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Well well well....");
  }
}

blaBla();
