/* Executing javascript with Node

1. NODE REPL
Read
Evaluate
Print
Loop

2. Executing code in a JavaScript file in the command line */

// too add module into another file  use require function that is always available in node
// const add = require("./add");
const SuperHero = require("./super-hero");
const math = require("./math");
const data = require("./data.json");

const { add, subtract } = math;

/* Module is an encapsulated and reusable chunk of code that has its own context 

In Node.js each file is treated as a separate Module

Types of Module
1. Local Module - Modules that we create in our application
2. Built-in-Module - Modules that Node.js ships with out of the box
3, Third party modules - Modules written by other developers that we can use in our application 
  
each file is a module that is isolated by default */

// It's always good to split javascript programs into seprate modules that can be imported when needed

/* CommonJs;

CommonJs is a standard that states how a module should be structured and shared */

// const sum = add(5, 4);
// console.log(sum);

// Each module in Node.js has its own scope, the way node achieve this is by iife immediately invokedfunction expression
// Before a module code is executed, node.js will wrap it with function wrapper that provides module scope
//There is proper encapsulation and resuability is unaffected
require("./batman");
require("./superman");

/* MODULE WRAPPER 

Every module in Node.js get wrapped in an IIFE before loaded
IIFE helps keep top level variable and functions scoped to the module rather than the global object 
The IIFE that wraps every module contains 5 parameters which are pretty important for the functioning of a module */

const batMan = new SuperHero("BatMan");
console.log(batMan.getName());

/* MODULE CACHING 

In node.js when we require a new module it is loaded and cached for subsequent loading */
console.log(add(5, 5));
console.log(subtract(5, 5));

/* CommonJS
Each file treated as module */

/* WATCH MODE
Running in watch mode  restart the process whenever changes in the file */
console.log(data.address.street);
