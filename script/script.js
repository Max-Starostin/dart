'use strict'

const openButtonBurger = document.querySelector('.burger');
const menuBurger = document.querySelector('.menu');
const closeButtonBurger = document.querySelector('.menu__close')

openButtonBurger.addEventListener('click', () => {
    menuBurger.classList.add('active');
})

closeButtonBurger.addEventListener('click', () => {
    menuBurger.classList.remove('active');
})