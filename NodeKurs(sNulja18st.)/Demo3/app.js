const EventEmmiter = require("events");

const emitter = new EventEmmiter();

const logDbConnection = () => {
  console.log("Database connection successful.");
};

emitter.addListener("dbConnected", logDbConnection);
emitter.emit("dbConnected");

emitter.removeListener("dbConnected", logDbConnection);
emitter.emit("dbConnected");

emitter.on("msg", (data) => {
  console.log(`Message: ${data}`);
});
emitter.emit("msg", "Hello World!");

emitter.once("off", (data) => {
  console.log("This will be printed only once.");
});
emitter.emit("off");
emitter.emit("off");

console.log(emitter.getMaxListeners());
emitter.setMaxListeners(1);
console.log(emitter.getMaxListeners());

emitter.listenerCount("msg");

console.log(emitter.listenerCount("msg"));
console.log(emitter.listenerCount("off"));

emitter.on("error", (err) => {
  console.log(`Proizosla osibka: ${err.message}`);
});

emitter.emit("error", new Error("BOOOM."));


const target = new EventTarget();

const logTarget = () => {
    console.log("Target connected.");
    };

target.addEventListener("targetConnected", logTarget);

target.dispatchEvent(new Event("targetConnected"));