import { getData, url } from "./request.js";
import { updateUI } from "./updateUI.js";

const dessertTemplate = document.getElementById("dessert-template");
const cards = document.querySelector(".cards");

getData(url)
  .then((data) => {
    updateUI(data, dessertTemplate, cards);
  })
  .catch((error) => {
    console.log(error);
  });
