const API_KEY = 'keyAr6WRygtP75zKA';
const BASE_ID = 'app84NjjgAoSumjQo';

const generateMemeButton = document.querySelector('#generate-meme-btn');
const memeContainer = document.querySelector('#meme-container');

// Add event listener for Generate Meme button
generateMemeButton.addEventListener('click', () => {
  const selectedTable = document.querySelector('input[name="table-selection"]:checked').value; // Get the selected table name from radio buttons
  fetch(`https://api.airtable.com/v0/${BASE_ID}/${selectedTable}?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      const randomMemeIndex = Math.floor(Math.random() * data.records.length);
      const randomMeme = data.records[randomMemeIndex].fields;
      const memeImageUrl = randomMeme['Meme URL'];
      memeContainer.innerHTML = `
        <img src="${memeImageUrl}" alt="Meme Image">
      `;
    })
    .catch(error => console.error(error));
});
