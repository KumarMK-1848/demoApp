class PlaceOrder {
  constructor(page) {
    this.placeOrderLink = page.locator(`//a[@id="buyLink"]`);
  }
}

export default PlaceOrder;
