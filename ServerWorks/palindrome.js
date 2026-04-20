const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  if (pathname === "/palindrome") {
    const str = query.str;

    if (!str) {
      res.end("give anything in the string");
      return;
    }

    //option 2 using loops
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }

    //Option 1 using methods
    const reversed = str.split("").reverse().join("");

    if (reversed === str) {
      res.end("true");
    } else {
      res.end("false");
    }
  } else {
    res.end("rout not found");
  }
});

server.listen(3000, () => {
  console.log("http://localhost:3000");
});
