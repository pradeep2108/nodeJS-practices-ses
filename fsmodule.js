const fs = require("node:fs");

const readFile = fs.readFileSync("./file.txt", "utf-8");

//run without blocking main thread
const readFile1 = fs.readFile("./file.txt", "utf-8", (error, data) => {
  if (error) throw error;
  console.log(data);
});

console.log(readFile);

const writeFile = fs.writeFileSync(
  "./write.txt",
  "Hello this is from fsmodule"
);
console.log(writeFile);

fs.writeFile("./write.txt", "Hello pradeep", { flag: "a" }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File written");
  }
});
