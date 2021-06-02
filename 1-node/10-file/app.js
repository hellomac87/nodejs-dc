const fs = require("fs");

// 3
// rename(..., callback(error, data))
// try {renameSync(...)}catch(e){};
// promise.rename().then().catch(0)

try {
  // 동기적 수행
  fs.renameSync("./text.txt", "text-new.txt");
} catch (error) {
  console.error(error);
}

fs.rename("./text-new.txt", "./text.txt", (error) => {
  console.error(error);
});
console.log("hello");

fs.promises
  .rename("./text2.txt", "./text-new.txt")
  .then(() => console.log("Done"))
  .catch(console.error);
