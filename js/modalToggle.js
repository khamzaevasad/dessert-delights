const modal = document.getElementById("modal");
const mask = document.getElementById("mask");

export const modalToggle = () => {
  modal.classList.toggle("hidden");
  mask.classList.toggle("hidden");
};
