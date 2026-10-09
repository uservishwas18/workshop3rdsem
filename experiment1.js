const EventEmitter = require("events");
const ud = new EventEmitter();

ud.on("greet", (name) => {
  console.log(`Hello ${name}`);
});

ud.on("exit", (num) => {
  console.log(`Thank you for the visit ${num}`);
});

ud.emit("greet", "Vishwas");
ud.emit("exit", "!");








































// const EventEmitter = require("events");
// const oc = new EventEmitter();

// oc.on("greet" , (digits) => {
//     console.log(`~18 ${digits}`);
// });

// oc.on("exit", (polio) => {
//     console.log(`Exiting with polio ${polio}`);
// });

// oc.emit("greet" , 18 );
// oc.emit("exit", B);


// const EventEmitter = require("events");
// const oc = new EventEmitter();

// oc.on("greet", (digits) => {
//     console.log(`~18 ${digits}`);
// });

// oc.on("exit", (polio) => {
//     console.log(`Exiting with polio ${polio}`);
// });

// oc.emit("greet", 18);
// oc.emit("exit", "B");
