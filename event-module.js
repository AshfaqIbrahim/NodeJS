// //Simple event module
// const EventEmitter = require("events");
// const event = new EventEmitter();

// //Registering a listener (function that runs when event happens)
// event.on("order-pizza", (size, topping) => {
//   console.log(`Order Received! Preparing your ${size} pizza with ${topping}`);
// });

// //one more listener
// event.on("order-pizza", (size) => {
//   if (size === "large") {
//     console.log("Serving a complimentary drink");
//   }
// });

// //Triggering an event,
// event.emit("order-pizza", "large", "extra cheese");

// //once()
// const EventEmitter = require("events");
// const event = new EventEmitter();

// //once()
// event.once("login", () => {
//   console.log("Logged in");
// });

// event.emit("login");
// event.emit("login"); //This wont run this time, because it used once(), once() runs only for one time

// //off()
// const EventEmitter = require("events");
// const event = new EventEmitter();

// const greet = () => {
//   console.log("Hello");
// };

// event.on("Hey", greet);
// event.off("Hey", greet); //Removes the "Hey" listener

// event.emit("Hey");

// //removeAllListeners(event)
// const EventEmitter = require("events");
// const event = new EventEmitter();

// event.on("test", () => {
//   console.log("A");
// });
// event.on("test", () => {
//   console.log("B");
// });
// event.on("test", () => {
//   console.log("C");
// });

// event.removeAllListeners("test"); //Remove every 'test' listener

// event.emit("test"); //Nothing will run


// //Simple calculator using event module
// const EventEmitter = require("events");
// const event = new EventEmitter();

// //on
// event.on("add", (a, b) => {
//   console.log("Addition:", a + b);
// });

// event.on("sub", (a, b) => {
//   console.log("subtraction:", a - b);
// });

// event.on("mul", (a, b) => {
//   console.log("Multiplication:", a * b);
// });

// event.on("div", (a, b) => {
//   if (b === 0) {
//     console.log("Cannot divide by zero");
//   } else {
//     console.log("Division:", a / b);
//   }
// });

// event.emit("add", 5, 2);
// event.emit("sub", 5, 2);
// event.emit("mul", 5, 2);
// event.emit("div", 5, 2);
