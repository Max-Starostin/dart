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

const activeTabFirst = document.querySelector('#first-item');
const activeTabDescriptionFirst = document.querySelector('#first__description');

activeTabFirst.addEventListener('click', () => {
    activeTabDescriptionFirst.classList.add('active');
})

const activeTabSecond = document.querySelector('#second-item');
const activeTabDescriptionSecond = document.querySelector('#second__description');

activeTabSecond.addEventListener('click', () => {
    activeTabDescriptionSecond.classList.add('active');
})

const activeTabThird = document.querySelector('#third-item');
const activeTabDescriptionThird = document.querySelector('#third__description');

activeTabThird.addEventListener('click', () => {
    activeTabDescriptionThird.classList.add('active');
})

const activeTabFourst = document.querySelector('#fourst-item');
const activeTabDescriptionFourst = document.querySelector('#fourst__description');

activeTabFourst.addEventListener('click', () => {
    activeTabDescriptionFourst.classList.add('active');
})

const activeTabFivest = document.querySelector('#fivest-item');
const activeTabDescriptionFivest = document.querySelector('#fivest__description');

activeTabFivest.addEventListener('click', () => {
    activeTabDescriptionFivest.classList.add('active');
})