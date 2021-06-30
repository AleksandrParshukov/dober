'use strict'
const CARD__INFO = {
  imgPath: './img/card-img.png',
  caption: 'Lorem Ipsum - это текст-"рыба"',
  text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.'
}

const cardsCount = document.body.clientWidth > 375 ? 18 : 3;
const CARDS = new Array(cardsCount).fill(CARD__INFO);

const news = document.querySelector('.news__wrapper');
const cardItemTemplate = document.querySelector('#card').content.querySelector('.news__card');

renderCards(CARDS);

function renderCards (cardsList) {
  removeCards(news);
  const cardsElementList = cardsList.map(createElement);

  appendCards(cardsElementList);


  function createElement (cardItem) {
    const cardItemElement = cardItemTemplate.cloneNode(true);
    cardItemElement.querySelector('.news__image').setAttribute('src', cardItem.imgPath);
    cardItemElement.querySelector('.news__caption').textContent = cardItem.caption;
    cardItemElement.querySelector('.news__text').textContent = cardItem.text;
    return cardItemElement;
  }

}

function appendCards(cards) {
  const cardsListFragment = document.createDocumentFragment();

  cards.forEach(appendCards)
  news.appendChild(cardsListFragment);


  function appendCards (value) {
    cardsListFragment.appendChild(value);
  }
}

function removeCards (listElement) {
  for (let i = listElement.children.length - 1; i >= 0; i--) {
    const child = listElement.children[i];
    child.parentElement.removeChild(child);
  }
}