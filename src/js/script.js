// const { darkturquoise } = require("color-name");

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeElement = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
})
closeElement.addEventListener('click', () => {
    menu.classList.remove('active');
})

const counters = document.querySelectorAll('.skills__ratings-counter');
const line = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    line[i].style.width = item.innerHTML;
});
