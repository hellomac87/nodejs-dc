// 💩

function sayHello() {
  console.log("hello!");
  console.log("dobby!");
  console.log("doobby!");
}

function calculate(x, y) {
  console.log("calculating..");
  const result = x + y;
  sayHello();
  return result;
}

calculate(1, 2);

const stop = 4;

console.log(".... looping ....");

for (let i = 0; i < 10; i++) {
  console.log(`count `, i);
  if (i === stop) {
    break;
  }
}
