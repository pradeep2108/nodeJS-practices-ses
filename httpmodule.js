const http = require("node:http");
const fs = require("node:fs");
//http module also extends the event emitter class
//The Callback function we specified here is a request listener
// request argument contains information about the incoming request
// we use it to build the response that has to be sent back to the client
const server = http.createServer((req, res) => {
  //req.url gives us the query string
  //requ.method GET POST PUT DELETE
  if (req.url === "/") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("Welcome to our company about");
  } else if (req.url === "/product") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("List of Products");
  } else if (req.url === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        firstName: "Jarad",
        lastName: "Higgins",
      })
    );
  } else {
    res.writeHead(404);
    res.end("Page Not Found");
  }
  //   res.end(req.url);
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});

//To add dynamic values into the html
///Let's understand how to use a give html template and inject some DYNAMIC VALUES THROUGH STRING REPLACEMENT
