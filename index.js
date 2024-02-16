const path = require("node:path");

// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));
// console.log(path.extname(__filename));
// console.log(path.extname(__dirname));

// console.log(path.parse(__filename));

// console.log(path.format(path.parse(__filename)));

// console.log(path.isAbsolute(__filename));

// console.log(path.join("folder1", "folder2", "index.html"));

// console.log(path.join("folder1", "folder2", "../index.html"));

//this will give full absolute path to json

console.log(__dirname, "data.json");

console.log(path.resolve("folder1", "folder2", "index.html"));
console.log(path.resolve("/folder1", "/folder2", "/index.html"));
console.log(path.resolve("/folder1", "//folder2", "/index.html"));

console.log(path.resolve("/folder1", "//folder2", "../index.html"));

// Path is a built-in module that provides utilities to work with file and sirectory pathr
