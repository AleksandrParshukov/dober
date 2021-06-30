'use strict'
const buttonsOrder = document.querySelectorAll('.button--order');
const buttonsPlay = document.querySelectorAll('.play-button');
const feedback = document.querySelector('.feedback').parentElement;
const success = document.querySelector('.success').parentElement;
const video = document.querySelector('.video').parentElement;
const overlays = document.querySelectorAll('.modal__overlay');

buttonsOrder.forEach(button => {
  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    feedback.classList.remove('modal--close');
  })
})

feedback.querySelector('.feedback__submit').addEventListener('click', (evt) => {
  evt.preventDefault();
  feedback.classList.add('modal--close');
  success.classList.remove('modal--close');
})

buttonsPlay.forEach(button => {
  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    video.classList.remove('modal--close');
  })
})

video.querySelector('.video__button').addEventListener('click', (evt) => {
  evt.preventDefault();
  video.classList.add('modal--close');
  success.classList.remove('modal--close');
})

overlays.forEach(overlay => {
  overlay.addEventListener('click', (evt) => {
    evt.preventDefault();
    overlay.parentElement.classList.add('modal--close');
  })
})