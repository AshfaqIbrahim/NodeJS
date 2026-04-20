const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  //to write a file
  if (pathname === "/write") {
    const text = query.text;

    fs.writeFile("test.txt", `${text}`, (err) => {
      if (err) throw err;
      res.end(text);
    });
  }
  //to check the sum
  else if (pathname === "/sum") {
    const a = Number(query.a);
    const b = Number(query.b);
    const sum = a + b;

    res.end(sum.toString());
  }
  //to check palindrome
  else if (pathname === "/palindrome") {
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
      "<h3>/sum - to add two numbers <br> /write - to write a new file <br> /palindrome - to check if an str is palindrome </h3>",
    );
  }
});

server.listen(3000, () => {
  console.log("http://localhost:3000");
});
