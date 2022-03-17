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

const activeTab = document.querySelectorAll('.services__item-title');
console.log(activeTab);

activeTab.forEach(function(item) {
    item.addEventListener('click', showAccordeon);
});

function showAccordeon() {
    this.nextElementSibling.classList.toggle('hidden');
};


const listButtonUp = document.querySelector('.testimonials__arrow-up');
const listButtonDown = document.querySelector('.testimonials__arrow-down');
const testimonialsPerson = document.querySelector('#person__second');

listButtonUp.addEventListener('click', () => {
    listButtonUp.classList.add('active')
    testimonialsPerson.classList.add('active');
});

listButtonDown.addEventListener('click', () => {
    testimonialsPerson.classList.remove('active');
    listButtonUp.classList.remove('active')
});