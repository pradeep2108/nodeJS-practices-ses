const PizzaShop = require("./pizza-shop");
const DrinkMachine = require("./drinkmachine");

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on("order", (size, topping) => {
  console.log(` Baking a ${size} pizza with ${topping} toppings`);
  drinkMachine.serveDrink(size);
});

pizzaShop.order("large", "Chicken Feast");

pizzaShop.displayOrderNumber();
