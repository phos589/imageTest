const accesKey = "LMThUrmwY88_zAir5dEcgX6D-4JtcLfzicf0CxHA80Q";

const formEl = document.querySelector('form');
const inputEl = document.getElementById('search');
const searchRe = document.querySelector('.search-result');

let inputData = '';

async function searchImages(){
  inputData = inputEl.values;
  const url = `https://api.unsplash.com/search/photo?page=1&query=${inputData}&client_id=${accesKey}`;
  const recponse = await fetch(url);
  const data = await recponse.json();
  const result = data.result;

  result.map((result) =>{
    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add('.search-result');
    const image = document.createElement('img');
    image.src = result.url.small;
    image.alt = result.alt_description;
    const imageLink = document.createElement('a');
    imageLink.href = result.links.html;
    imageLink.target = '_blank';
    imageLink.textContent = result.alt_description;

    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    imageWrapper.appendChild(imageWrapper);
  });
}

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  searchImages();
});
