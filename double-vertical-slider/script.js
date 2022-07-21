const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const btns = document.querySelectorAll('.btn');
const slidesNumber = slideRight.querySelectorAll('div').length;

let counter = 0;
slideLeft.style.top = `-${(slidesNumber - 1) * 100}%`;

const changeSlide = (event) => {
    const btnClasses = event.currentTarget.classList;

    if (btnClasses.contains(`up-btn`)) (counter === slidesNumber - 1) ? counter = 0 : counter++;
    else if (btnClasses.contains(`down-btn`)) (counter === 0) ? counter = slidesNumber - 1 : counter--;

    slideLeft.style.transform = `translateY(${counter * 100}%)`;
    slideRight.style.transform = `translateY(-${counter * 100}%)`;
};

btns.forEach(btn => btn.addEventListener(`click`, changeSlide));







/*
let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if(direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
} */