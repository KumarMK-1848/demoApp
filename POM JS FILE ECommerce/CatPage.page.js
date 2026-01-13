class CartPage {
  constructor(page) {
    this.continueShoppingLink = page.locator(
      `//a[@class="btn btn-lg" and text()="Continue Shopping"]`
    );
    this.placeOrderLink = page.locator(
      `//a[@class="btn btn-lg" and text()="Place Order"]`
    );
  }
}

export default CartPage;
