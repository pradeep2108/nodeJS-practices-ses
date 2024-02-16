class PizzaShop {
  constructor() {
    super();
    this.orderNumber = 0;
  }

  order() {
    this.orderNumber++;
  }

  displayOrderNumber() {
    console.log(this.orderNumber);
  }
}
