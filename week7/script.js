// const cars = require("./cars");

// console.log(cars);
// console.log("hello");

const fs = require("fs");

// fs.readFile("test.txt", "utf8", (err, data) => {
//   if (err) return;
//   console.log("=============", data);
// });

// const data = fs.readFileSync("test.txt", "utf8");
// console.log(data);

const content = `import ReactDOM from "react";
`;

try {
  fs.open("test2.txt", "a+", function (err, f) {
    if (err) return;
    console.log(fs.readFileSync(f, "utf8"));
  });
} catch (error) {
  console.error(error);
}

// const path = require("path");

// console.log(path.join("user", "minh", "coderschool"));

// Load HTTP module
// const http = require("http");

// const hostname = "127.0.0.1";
// const port = 5000;

// // Create HTTP server
// const server = http.createServer((req, res) => {
//   // Set the response HTTP header with HTTP status and Content type
//   res.writeHead(200, { "Content-Type": "text/plain" });

//   // Send the response body "Hello World"
//   res.end("Hello World\n");
// });

// // Prints a log once the server starts listening
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
