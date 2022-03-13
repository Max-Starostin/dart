'use strict'

const openButtonBurger = document.querySelector('.burger');
const menuBurger = document.querySelector('.menu');
const closeButtonBurger = document.querySelector('.menu__close')
const siteBody = document.querySelector('body');

openButtonBurger.addEventListener('click', () => {
    menuBurger.classList.add('active');
    siteBody.classList.add('hidden');
})

closeButtonBurger.addEventListener('click', () => {
    menuBurger.classList.remove('active');
    siteBody.classList.remove('hidden');
});