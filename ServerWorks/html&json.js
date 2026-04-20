const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("Hello world");
// });
// server.listen(3000, () => {
//   console.log("Server running at http://localhost:3000");
// });

//Handling request and response
const server = http.createServer((req, res) => {
  if (req.url === "/about") {
    res.end("About Page");
  } else {
    res.end("Home Page");
  }
});

server.listen("3000", () => {
  console.log("The server is running at http://localhost:3000");
});

//Sending HTML/JSON response
const server = http.createServer((req, res) => {
  //   HTML
    res.writeHead(200, { "content-type": "text/html" });
    res.end("<h1>Hey Iam a Header</h1>");

//   //JSON
//   res.writeHead(200, { "content-type": "application/json" });
//   res.end(JSON.stringify({ name: "Ashfaq", age: 22 }));
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});


