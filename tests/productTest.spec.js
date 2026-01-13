import { expect, test } from "@playwright/test";
import HomePage from "../POM JS FILE ECommerce/HomePage.page";
import EntranceExamStore from "../POM JS FILE ECommerce/EntranceExamStore.page";
import CartPage from "../POM JS FILE ECommerce/CatPage.page";
import PlaceOrder from "../POM JS FILE ECommerce/PlaceOrder.page";
import LogInPopUp from "../POM JS FILE ECommerce/LogInPopUp.page";
import LiteraturePage from "../POM JS FILE ECommerce/LiteratureStore.page";

test.only("practice", async ({ page }) => {
  let message;
  page.on("dialog", async (d) => {
    console.log(d.message());
    if (
      d.message() ==
      `Order SuccessFully Placed!! Kindly Keep the cash Ready. It will be collected on Delivery`
    )
      message = d.message();
    else {
      message = null;
    }
    await d.accept();
  });
  let logIn = new LogInPopUp(page);
  let home = new HomePage(page);
  let entrance = new EntranceExamStore(page);
  let placeOrderPage = new PlaceOrder(page);
  let literature = new LiteraturePage(page);
  let cart = new CartPage(page);

  await page.goto(
    `http://49.249.28.218:8081/TestServer/Build/Online_Book_Shop_System/index.php`
  );
  await home.logInButton.click();
  await logIn.usernameInputField.fill("test");
  await logIn.passwordInputField.fill("test");
  await logIn.logInButton.click();
  await home.entranceExamLink.click({ state: "visible" });
  await entrance.selectToCart(
    entrance.image1Link,
    placeOrderPage.placeOrderLink,
    cart.continueShoppingLink,
    page
  );
  await home.entranceExamLink.click({ state: "visible" });
  await entrance.selectToCart(
    entrance.image2Link,
    placeOrderPage.placeOrderLink,
    cart.continueShoppingLink,
    page
  );
  await home.literatureLink.click({ state: "visible" });
  await literature.selectToCart(
    literature.image1Link,
    placeOrderPage.placeOrderLink,
    cart.continueShoppingLink,
    page
  );
  await home.literatureLink.click({ state: "visible" });
  await literature.selectToCart(
    literature.image2Link,
    placeOrderPage.placeOrderLink,
    cart.placeOrderLink,
    page
  );
  // await expect(message).toBeTruthy();
  await expect(message).toContain(
    `Order SuccessFully Placed!! Kindly Keep the cash Ready. It will be collected on Delivery`
  );

  // await page.getByRole("button", { name: "Do Some Shopping" }).click();
});
