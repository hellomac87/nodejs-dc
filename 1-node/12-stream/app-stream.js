const fs = require("fs");
const data = [];

const readStream = fs
  .createReadStream("./file.txt", {
    highWaterMark: 8, // 64 kbytes
    encoding: "utf-8",
  })
  .once("data", (chunk) => {
    data.push(chunk);
  })
  // .on("data", (chunk) => {
  //   data.push(chunk);
  // })
  .on("end", () => {
    console.log(data.join(""));
  })
  .on("error", (err) => {
    console.log(err);
  });

// readStream.on("data", (chunk) => {
//   data.push(chunk);
// });

// readStream.on("end", () => {
//   console.log(data.join(""));
// });

// readStream.on("error", (err) => {
//   console.log(err);
// });
