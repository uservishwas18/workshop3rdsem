const EventEmitter = require("events");

let event1 = new EventEmitter();

// Welcome event
event1.on("welcome", () => {
    console.log("Welcome !!");
});

event1.emit("welcome");

// Bye event
event1.on("bye", () => {
    console.log("Goodbye and have a nice day!");
});

event1.emit("bye");

console.log("-> DOM Like Manipulation <-");

// Custom class using EventEmitter
class Website extends EventEmitter {
    constructor() {
        super();
    }

    display = () => {
        this.emit("message");
    };
}

let obj = new Website();

obj.on("message", () => {
    console.log("Keep learning and improve your coding skills");
});

obj.display();

console.log("--> Set Timeout, Set Immediate, Next Tick <--");

// setTimeout
setTimeout(() => {
    console.log("Practice makes programming better");
}, 5000);

// setImmediate
setImmediate(() => {
    console.log("Learning JavaScript");
});

// process.nextTick
process.nextTick(() => {
    console.log("Hello Student");
});

process.nextTick(() => {
    console.log("Keep working hard");
});