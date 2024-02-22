const fs = require("node:fs/promises");
const { promises } = require("node:stream");

// fs.readFile("file.txt", "utf-8")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

/* - Promise based fs module can also be used with async await as async await is just a syntactical wrapper over promises 
    - Top level await can only be used in modules that is .mjs files 
    - the callback based versions of the node FS module apis are preferable over the use of promise apis when maixmum performance is required  both interms of time and memory allocation */

async function readFile() {
  try {
    const data = await fs.readFile("file.txt", "utf-8");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

readFile();
