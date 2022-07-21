const textarea = document.getElementById(`textarea`);
const tagsContainer = document.getElementById(`tags`);
const MAXIMUM_NUMBER_OF_CHOICES = 10;

let currentChoice = ``;
let startIndex = 0;
let endIndex = 0;
textarea.addEventListener(`input`, () => {
    const value = textarea.value;
    if(value.trim().length === 0) tagsContainer.innerHTML = ``
    endIndex = value.length
    currentChoice = value.slice(startIndex, endIndex);
    
    if (currentChoice.at(-1) === `,`) {
        const res = currentChoice.slice(0,-1)
        if (res !== ``) createChoice(res);
        startIndex += currentChoice.length;
    }
});

textarea.addEventListener('keyup', (e) => {
    const tagsLength = [...document.querySelectorAll(`.tag`)].length;
    if (e.key === `Enter` && tagsLength >= 1) {
        createChoice(textarea.value.slice(startIndex, endIndex))
        getRandomChoice();
        textarea.blur();
    }
});

textarea.focus();

const getRandomChoice = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 10;
    const tags = [...document.querySelectorAll(`.tag`)];
    let counter = 0;
    let i = 0;
    const interval = setInterval(() => {
        (i === tags.length - 1) ? i = 0 : i++;
        tags[i].classList.add(`highlight`);
        (i) ? tags[i - 1].classList.remove(`highlight`) : tags[tags.length - 1].classList.remove(`highlight`);
        counter++;
        if (counter === randomNumber) clearInterval(interval);
    }, 150);
};

const createChoice = (choice) => {
    const tags = document.querySelectorAll(`.tag`);
    // prevent exceeding the MAXIMUM_NUMBER_OF_CHOICES
    if (tags.length === MAXIMUM_NUMBER_OF_CHOICES) return;
    // prevent same choices
    const choiceExists = [...tags].some(tag => tag.textContent === choice);
    if (choiceExists) return;
    // create a new choice
    const tag = document.createElement(`div`);
    tag.classList.add(`tag`);
    const innerText = document.createTextNode(choice);
    tag.appendChild(innerText);
    tagsContainer.appendChild(tag);
};
