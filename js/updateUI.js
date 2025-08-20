import { formatNumber } from "./formatNumber.js";
import {
  addToBasket,
  increment,
  decrement,
  basketDesserts,
  remove,
} from "./basket.js";

import { modalToggle } from "./modalToggle.js";
// Update Ui
export const updateUI = (desserts, dessertTemplate, containerElements) => {
  const fragment = document.createDocumentFragment();

  containerElements.innerHTML = "";

  desserts.forEach((dessert) => {
    const { category, id, image, name, price } = dessert;

    const clone = dessertTemplate.content.cloneNode(true);

    const cardImg = clone.querySelector(".card-img");
    const dessertTitle = clone.querySelector(".dessert-title");
    const dessertDescription = clone.querySelector(".dessert-description");
    const desserPrice = clone.querySelector(".desser-price");
    const addBtn = clone.querySelector("#add-btn");
    const join = clone.querySelector(".join");
    const counter = clone.querySelector(".counter");
    const decrementBtn = clone.querySelector(".decrement-btn");
    const incrementBtn = clone.querySelector(".increment-btn");

    addBtn.addEventListener("click", (e) => {
      e.preventDefault();
      addToBasket(dessert);

      addBtn.classList.add("hidden");
      join.classList.remove("hidden");
      counter.textContent = 1;
    });

    incrementBtn.addEventListener("click", () => {
      increment(id);
      const item = basketDesserts.find((el) => el.id === id);
      counter.textContent = item.amount;
    });

    decrementBtn.addEventListener("click", () => {
      const item = basketDesserts.find((el) => el.id === id);

      if (item.amount === 1) {
        decrement(id);

        addBtn.classList.remove("hidden");
        join.classList.add("hidden");
        counter.textContent = 0;
      } else {
        decrement(id);
        counter.textContent = item.amount - 1;
      }
    });

    const item = basketDesserts.find((el) => el.id == id);
    counter.textContent = item ? item.amount : 0;
    cardImg.src = image.desktop;
    dessertTitle.textContent = category;
    dessertDescription.textContent = name;
    desserPrice.textContent = `${formatNumber(price)}`;

    fragment.appendChild(clone);
  });
  containerElements.appendChild(fragment);
};

export const cartUI = (data, template, containerElements) => {
  const emptyCart = document.querySelector(".epmty-cart");
  const orderBox = document.querySelector(".order-box");

  if (data.length === 0) {
    emptyCart.classList.remove("hidden");
    orderBox.classList.add("hidden");
  } else {
    emptyCart.classList.add("hidden");
    orderBox.classList.remove("hidden");
  }

  containerElements.innerHTML = "";
  const fragment = document.createDocumentFragment();

  data.forEach((item) => {
    const { amount, name, price, id } = item;

    const clone = template.content.cloneNode(true);

    const dessertName = clone.querySelector(".dessert-name");
    const dessertAmount = clone.querySelector(".dessert-amount");
    const dessertPrice = clone.querySelector(".dessert-price");
    const dessertTotalPrice = clone.querySelector(".dessert-total-price");
    const removeIcon = clone.querySelector(".remove-icon");

    removeIcon.addEventListener("click", () => {
      remove(id);
      cartUI(basketDesserts, template, containerElements);
    });

    dessertName.textContent = name;
    dessertAmount.textContent = `${amount}x`;
    dessertPrice.textContent = formatNumber(price);
    dessertTotalPrice.textContent = `${formatNumber(amount * price)}`;

    fragment.appendChild(clone);
  });
  containerElements.appendChild(fragment);
};

export const totalPrice = (calculateTotal) => {
  console.log(calculateTotal);
  const priceCardTitle = document.querySelector(".amount");
  const totalPrice = document.querySelector(".total-price");
  const totalOrderPrice = document.querySelector(".total-order-price");
  const confirmBtn = document.querySelector(".confirm-btn");
  const newOrder = document.getElementById("new-order");
  const mask = document.getElementById("mask");

  confirmBtn.addEventListener("click", () => {
    modalToggle();
  });

  newOrder.addEventListener("click", () => {
    modalToggle();
  });

  document.addEventListener("keydown", (e) => {
    console.log(e);
    if (e.code == "Escape") {
      modalToggle();
    }
  });

  mask.addEventListener("click", () => {
    modalToggle();
  });

  priceCardTitle.textContent = `(${calculateTotal.totalAmount})`;
  totalPrice.textContent = calculateTotal.totalPrice;
  totalOrderPrice.textContent = calculateTotal.totalPrice;
};

export const modalUpdate = (dessert, template, containerElements) => {
  containerElements.innerHTML = "";
  const fragment = document.createDocumentFragment();

  dessert.forEach((item) => {
    const { amount, price, image, name } = item;
    const clone = template.content.cloneNode(true);

    const modalImg = clone.querySelector(".modal-img");
    const dessertAmount = clone.querySelector(".dessert-amount");
    const dessertName = clone.querySelector(".dessert-name");
    const dessertPrice = clone.querySelector(".dessert-price");
    const modalPrice = clone.querySelector(".modal-price");

    modalImg.src = image.desktop;
    dessertAmount.textContent = `${amount}x`;
    dessertName.textContent = name;
    dessertPrice.textContent = formatNumber(price);
    modalPrice.textContent = `${formatNumber(amount * price)}`;

    fragment.appendChild(clone);
  });
  containerElements.appendChild(fragment);
};
