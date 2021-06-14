const fs = require("fs").promises;

const folderName = process.argv.find((value) => value === "test");

fs.readdir(`./${folderName}`).then((files) => {
  console.log(files);
});
