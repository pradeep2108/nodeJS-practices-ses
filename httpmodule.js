const http = require("node:http");
const fs = require("node:fs");
//http module also extends the event emitter class
//The Callback function we specified here is a request listener
// request argument contains information about the incoming request
// we use it to build the response that has to be sent back to the client
const server = http.createServer((req, res) => {
  const superHero = {
    firstName: "Bruce",
    lastName: "Wayne",
  };
  const name = "Juice Wrld";

  res.writeHead(200, { "content-Type": "text:html" });

  let html = fs.readFileSync("./index.html", "utf-8");
  html = html.replace("{{name}}", name);
  console.log(req);
  res.end(html);

  //   fs.createReadStream(__dirname + "./index.html").pipe(res);
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});

//To add dynamic values into the html
///Let's understand how to use a give html template and inject some DYNAMIC VALUES THROUGH STRING REPLACEMENT
