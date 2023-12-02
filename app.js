'use strict';

const quoteText = document.getElementById('getquote'),
  quoteAuthor = document.getElementById('author'),
  quoteBtn = document.getElementById('btn');

function getRandomQuote() {
  fetch('https://api.quotable.io/random')
    .then((res) => res.json())
    .then((data) => {
      quoteText.textContent = data.content;
      quoteAuthor.textContent = data.author;
    });
}

getRandomQuote();

quoteBtn.addEventListener('click', () => {
  getRandomQuote();
});

function handleSaveQuote() {
  console.log('handleSaveQuote');
  let quote = document.getElementById('getquote').textContent;

  //check if local storage already has saved quote
  //let existingQuote = localStorage.getItem("savedquote")

  //if it does replace old quote with new quote or keep both
  localStorage.setItem('savedquote', quote);
  let savedItem = localStorage.getItem('savedquote');
  console.log(savedItem);
  return savedItem;
}

handleSaveQuote();
