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

// getData();

// // 2.
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

// const myPromise = new Promise((resolve, reject) => {
//   let success = true;
//   if (success) {
//     resolve("Successfully completed tasks...");
//   } else {
//     reject("Tasks failed!");
//   }
// });

// async function blaBla() {
//   try {
//     const result = await myPromise;
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   } finally {
//     console.log("Well well well....");
//   }
// }

// blaBla();

//
//
//

// //Sum
// const http = require("http");
// const url = require("url");

// const server = http.createServer((req, res) => {
//   const parsedUrl = url.parse(req.url, true);
//   const pathname = parsedUrl.pathname;
//   const query = parsedUrl.query;

//   if (pathname === "/sum") {
//     const a = Number(query.a);
//     const b = Number(query.b);

//     const sum = a + b;
//     res.end(sum.toString());
//   } else {
//     res.end("Routing not found");
//   }
// });

// server.listen(3000, () => {
//   console.log("The server is running on http://localhost:3000");
// });

//
//
//
// //Write FS
// const http = require("http");
// const url = require("url");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   const parsedUrl = url.parse(req.url, true);
//   const pathname = parsedUrl.pathname;
//   const query = parsedUrl.query;

//   if (pathname === "/write") {
//     const text = query.text;

//     fs.writeFile("./ServerWorks/test.txt", `${text}`, (err) => {
//       if (err) throw err;
//       res.end(text);
//     });
//   } else if (pathname === "/delete") {
//     fs.unlink("./ServerWorks/test.txt", (err) => {
//       if (err) {
//         res.end("error deleting file");
//         return;
//       }
//       res.end("File Deleted successfully");
//     });
//   } else {
//     res.end("Hey Buddy");
//   }
// });

// server.listen(3000, () => {
//   console.log("http://localhost:3000");
// });

//
//
//

//Palindrome
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  if (pathname === "/palindrome") {
    const str = query.str;

    if (!str) {
      res.end("Give anything in the string");
      return;
    }

    //Option 1 using method
    const reversed = str.split("").reverse().join("");

    // //Option 2 using loop
    // let reversed = "";
    // for (let i = str.length - 1; i >= 0; i--) {
    //   reversed += str[i];
    // }
    if (reversed === str) {
      res.end("true");
    } else {
      res.end("false");
    }
  } else {
    res.end("Route not found");
  }
});

server.listen(3000, () => {
  console.log("http://localhost:3000");
});
