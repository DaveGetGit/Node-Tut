const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("home page");
  } else if (req.url === "/about") {
    res.end("now you are on a home page");
  }

  res.end("Ooops , you are lost");
});

server.listen(5000);
