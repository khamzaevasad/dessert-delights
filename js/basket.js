import { formatNumber } from "./formatNumber.js";

export let basketDesserts = localStorage.getItem("basket")
  ? JSON.parse(localStorage.getItem("basket"))
  : [];

if (basketDesserts.length) {
  calculateTotal(basketDesserts);
}

export function calculateTotal(basketDesserts) {
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

  localStorage.setItem("basket", JSON.stringify(basketDesserts));
}

export function increment(id) {
  const item = basketDesserts.find((item) => item.id == id);
  item.amount += 1;
  console.log(item);
}

export function decrement(id) {
  const item = basketDesserts.find((item) => item.id == id);

  if (item.amount == 1) {
    const isDeleted = confirm("Are you sure you want to delete this product?");
    if (isDeleted) {
      basketDesserts = basketDesserts.filter((el) => el.id !== id);
    }
  } else {
    item.amount -= 1;
  }
  console.log(item);
  localStorage.setItem("basket", JSON.stringify(basketDesserts));
  calculateTotal(basketDesserts);
}
