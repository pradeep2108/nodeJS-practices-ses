/* The events module us to work with events in Node.js 
 An event is an action or an occurance that has happened in our application that we can respond to 
 Using the events module, we can dispatch out own custom events and respond to those custome event in a non-blocking manner 
 Event is a built-in module that allows to work with event in node  */
//this import returns a event evmitter  class
const EventEmitter = require("node:events");

const emitter = new EventEmitter();

//a listerner is a callback function gets executed when the corresponding event is emitted
//to pass data to the listener specify the arguments after the event name
//register event listeners using the one method
//also register multiple listeners for the same event
emitter.on("order-pizza,", (size, topping) => {
  console.log(`Order received! Baking a ${size} pizza with ${topping}`);
});

emitter.on("order-pizza,", (size) => {
  if (size == "large") {
    console.log("serving complimentary drink");
  }
});

emitter.emit("order-pizza", "large", "Chicken feast");

module.exports = EventEmitter;
