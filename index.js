// const http = require("node:http");

// const hostname = "127.0.0.1";
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello, Guys!\n");
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// //2.
// console.log("Welcome to Node.js");

// let a = 10;
// let b = 20;

// console.log("Addition: ", a + b);
// console.log("Subtraction: ", a - b);
// console.log("Multiplication: ", a * b);
// console.log("Division: ", a / b);

//3.
const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter your name: ", (name) => {
  console.log("Hello " + name + " ");

  r1.question("Enter your age: ", (age) => {
    console.log("You are " + age + " years old");

    r1.close();
  });
});
