'use strict'

let left_button = document.querySelector('.slider_button_left');
let right_button = document.querySelector('.slider_button_right');


let dotlist = document.querySelectorAll('.slider_dots>.slider_dot');


let view = document.querySelector('.slider_view');

let currentIndex = 0;

right_button.addEventListener('click', (e) => {

    dotlist[currentIndex].classList.remove('active');

    if (currentIndex == 3) currentIndex = -1;

    view.style.transform = `translateX(-${++currentIndex * 1458}px)`;

    dotlist[currentIndex].classList.add('active');
});


left_button.addEventListener('click', (e) => {

    dotlist[currentIndex].classList.remove('active');

    if (currentIndex == 0) currentIndex = 4;

    view.style.transform = `translateX(-${--currentIndex * 1458}px)`;

    dotlist[currentIndex].classList.add('active');
});