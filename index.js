// index.js
const API_KEY = 'keyAr6WRygtP75zKA';
const BASE_ID = 'app84NjjgAoSumjQo';
const TABLE_NAME = 'whattomeme';


const generateMemeButton = document.querySelector('#generate-meme-btn');
const memeContainer = document.querySelector('#meme-container');

function randomFloor(h_len) {
 return Math.floor(Math.random() * h_len)
}

generateMemeButton.addEventListener('click', () => {
  fetch(`https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
     const randomMemeIndex =randomFloor(data.records.length);
      const randomMeme = data.records[randomMemeIndex].fields;
      const memeImageUrl = randomMeme['Meme URL'];
      const memeText = randomMeme['Meme Text'];
      memeContainer.innerHTML = `
        <img src="${memeImageUrl}" alt="Meme Image">
      `;
    })
    .catch(error => console.error(error));
});
