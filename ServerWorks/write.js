const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const parsedurl = url.parse(req.url, true);
  const pathname = parsedurl.pathname;
  const query = parsedurl.query;

  if (pathname === "/write") {
    const text = query.text;

    fs.writeFile("text.txt", `${text}`, (err) => {
      if (err) throw err;
      res.end(text);
    });
  }
});
server.listen(3000, () => {
  console.log("The server is running on http://localhost:3000 ");
});
