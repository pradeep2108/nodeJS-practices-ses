// Each module in Node.js has its own scope, the way node achieve this is by iife immediately invokedfunction expression
// wrap it with parenthess to convert into function expression and add parenthess at the end to immediatly invoke it
// Before a module code is executed, node.js will wrap it with function wrapper that provides module scope

(function () {
  const superHero = "Batman";
  console.log(superHero);
})();

(function () {
  const superHero = "Superman";
  console.log(superHero);
})();
