const EventEmitter = require("events");

const emitter = new EventEmitter();

const callack1 = (args) => {
  console.log("fist callback - ", args);
};
emitter.on("dobby", callack1);

emitter.on("dobby", (args) => {
  console.log("second callback - ", args);
});

emitter.emit("dobby", { message: 1 });
emitter.emit("dobby", { message: 2 });
// emitter.removeListener("dobby", callack1);
emitter.removeAllListeners();
emitter.emit("dobby", { message: 3 });
