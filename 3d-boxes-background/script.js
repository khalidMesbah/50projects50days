const boxesContainer = document.getElementById(`boxes`);
const btn = document.getElementById("btn");

btn.addEventListener("click", () => boxesContainer.classList.toggle("big"));

function createBoxes() {
  const fragment = document.createDocumentFragment();
  for (let i = 0, j = -1; i < 16; i++) {
    i % 4 == 0 && j++;
    const box = document.createElement(`div`);
    box.className = `box`;
    box.style.backgroundPosition = `-${i * 100}% -${j * 100}%`;
    fragment.appendChild(box);
  }
  boxesContainer.appendChild(fragment);
}

createBoxes();