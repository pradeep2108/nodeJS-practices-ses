/* A Stream is a sequence if data that is being moved from one point to another over time 

Ex: a stream of data being transferred from one file to another within the same computer 

Work with data in chunks instead of waiting for the entire data to be available at once 

If transferring file contents from fileA to fileB,  dont wait for entire fileA content to be saved in temporary memory before moving it into fileB

Instead the content is transferred in chunks over time which prevents unnecessary memory usage

Stream is infact a built-in node module that inherits from the event emitter class

Other modules internally use streams for their functioning */

const fs = require("node:fs");
/* - zlib Provide compression functionality implemented using gzip algorithm
   - zlib has a built-in transform stream */
const zlib = require("node:zlib");

const gzip = zlib.createGzip();

const readbleStream = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
  highWaterMark: 5,
});
readbleStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"));

// const writeableStream = fs.createWriteStream("./file2.txt");

// readbleStream.on("data", (chunk) => {
//   console.log(chunk);
//   writeableStream.write(chunk);
// });

//Using the Pipe method on a readable stream to Implement the functionality
// Pipe returns the desitnation stream which enables the chaining however the condition is that destination stream has to readable, duplex or transform stream
// readbleStream.pipe(writeableStream);
