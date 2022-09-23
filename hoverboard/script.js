/* Variables */
const form = document.getElementById(`form`);
const container = document.getElementById("container");
let SQUARES = document.getElementById(`number-of-squares`).value || 500;
/* Functions */
const getRandomColor = () => {
  return `rgb(${Math.ceil(Math.random() * 255)},${Math.ceil(
    Math.random() * 255
  )},${Math.ceil(Math.random() * 255)})`;
};
const activate = (e) => {
  let square = e.currentTarget;
  square.style.background = square.style.color = getRandomColor();
  square.style.boxShadow = `0 0 2px ,0 0 10px`;
};
const deActivate = (e) => {
  let square = e.currentTarget;
  square.style.removeProperty(`background`);
  square.style.removeProperty(`box-shadow`);
};
const createSquare = (fragment) => {
  const square = document.createElement(`div`);
  square.className = `square`;
  square.addEventListener(`mouseenter`, activate);
  square.addEventListener(`mouseleave`, deActivate);
  fragment.appendChild(square);
};
const displaySquares = (numOfSquares) => {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < numOfSquares; i++, createSquare(fragment));
  container.innerHTML = ``;
  container.appendChild(fragment);
};
displaySquares(SQUARES);
/* Event Listeners */
form.addEventListener(`submit`, (e) => {
  e.preventDefault();
  SQUARES = document.getElementById(`number-of-squares`).value || 500;
  displaySquares(SQUARES);
});
