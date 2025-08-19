import { formatNumber } from "./formatNumber.js";
import { addToBasket } from "./basket.js";
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
    const addBtn = clone.getElementById("add-btn");
    const join = clone.querySelector(".join");
    const counter = clone.querySelector(".counter");

    addBtn.addEventListener("click", (e) => {
      e.preventDefault();
      addToBasket(dessert);
      // addBtn.classList.add("hidden");
      // join.classList.remove("hidden");
    });

    cardImg.src = image.desktop;
    dessertTitle.textContent = category;
    dessertDescription.textContent = name;
    desserPrice.textContent = `${formatNumber(price)}`;

    fragment.appendChild(clone);
  });
  containerElements.appendChild(fragment);
};
