const img = document.getElementById(`img`);
const counterContainer = document.getElementById(`counter`);

max = 1400;
min = 400;
let ran1 = Math.floor(Math.random() * (max - min) + min);
let ran2 = Math.floor(Math.random() * (max - min) + min);

const imgSites = [
  `https://thecatapi.com/api/images/get?format=src&type=gif`,
  `https://placebear.com/${ran1}/${ran2}`,
  `https://placekitten.com/${ran1}/${ran2}`,
  `https://unsplash.it/${ran1}/${ran2}`,
  `https://placeimg.com/${ran1}/${ran2}/nature`,
  `https://www.placecage.com/${ran1}/${ran2}`,
];

const getRandomImg = () => {
  return imgSites[Math.floor(Math.random() * imgSites.length)];
};

img.style.setProperty(
  `background`,
  `url(${getRandomImg()}) no-repeat center center/contain`
);

window.addEventListener(`load`, () => {
  counterContainer.textContent = `0%`;
  let counter = -1;
  let blurValue = 100;
  let interval = setInterval(() => {
    counterContainer.textContent = `${++counter}%`;
    img.style.setProperty(`filter`, `blur(${blurValue - counter}px)`);
    if (counter === 100) {
      clearInterval(interval);
      counterContainer.remove();
    }
  }, 100);
});

window.addEventListener(`DOMContentLoaded`, () => {
  document.querySelector(`body`).style.background = `#333`;
  counterContainer.textContent = `Waiting for the image...`;
});
