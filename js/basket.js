import { formatNumber } from "./formatNumber.js";
let basketDesserts = [];

function calculateTotal(basketDesserts) {
  let totalPrice = 0;
  let totalAmount = 0;

  basketDesserts.forEach((dessert) => {
    totalAmount += dessert.amount;
    totalPrice += dessert.amount * dessert.price;
  });
  return { totalAmount, totalPrice: formatNumber(totalPrice) };
}

export function addToBasket(desserts) {
  const item = basketDesserts.find((dessert) => dessert.id == desserts.id);
  if (item) {
    item.amount += 1;
  } else {
    basketDesserts.push({ ...desserts, amount: 1 });
  }
  console.log(calculateTotal(basketDesserts));
  console.log(basketDesserts);
}
