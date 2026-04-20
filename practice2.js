// //Second largest
// function secondLarge(arr) {
//   let largest = 0;
//   let secondLargest = 0;

//   for (let num of arr) {
//     if (num > largest) {
//       secondLargest = largest;
//       largest = num;
//     } else if (num > secondLargest && num !== largest) {
//       secondLargest = num;
//     }
//   }
//   return secondLargest;
// }
// console.log(secondLarge([1, 2, 3, 5, 4]));

// //removeing duplicates without using set
// function removeDup(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (!result.includes(arr[i])) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// console.log(removeDup([1, 2, 2, 3, 4, 5, 5]));

// //Sum
// const http = require("http");
// const url = require("url");

// const server = http.createServer((req, res) => {
//   const parsedUrl = url.parse(req.url, true);
// const pathname = parsedUrl.pathname;
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
//   console.log("http://localhost:3000");
// });

//Write and sum in one server
const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  if (pathname === "/write") {
    const text = query.text;

    fs.writeFile("test.txt", `${text}`, (err) => {
      if (err) throw err;
      res.end(text);
    });
  } else if (pathname === "/sum") {
    const a = Number(query.a);
    const b = Number(query.b);
    const sum = a + b;

    res.end(sum.toString());
  } else if (pathname === "/palindrome") {
    const str = query.str;
    if (!str) {
      res.end("No values");
      return;
    }

    const reversesd = str.split("").reverse().join("");

    if (reversesd === str) {
      res.end("true");
    } else {
      res.end("false");
    }
  } else {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(
      "<h3>/sum - to add two numbers <br> /write - to write a new file <br> /palindrome - to check if an str is palindrome </h3>"
    );
  }
});

server.listen(3000, () => {
  console.log("http://localhost:3000");
});

// //Palindrome

// const http = require("http");
// const url = require("url");

// const server = http.createServer((req, res) => {
//   const parsedUrl = url.parse(req.url, true);
//   const pathname = parsedUrl.pathname;
//   const query = parsedUrl.query;

//   if (pathname === "/isPalindrome") {
//     const str = query.str;

//     if (!str) {
//       res.end("No values");
//       return;
//     }

//     const reversed = str.split("").reverse().join("");

//     if (reversed === str) {
//       res.end("true");
//     } else {
//       res.end("false");
//     }
//   } else {
//     res.end("/isPalindrome to check palindrome");
//   }
// });

// server.listen(3000, () => {
//   console.log("http://localhost:3000");
// });
