import { createElement } from './lib/elements.js';
import './style.css';
import createCharacterCard from './components/characterCard.js';
import { fetchCharacters } from './lib/characters.js';
import createSearchBar from './components/searchBar.js';

async function renderApp() {
  const appElement = document.querySelector('#app');

  const headerElement = createElement(
    'header',
    {
      className: 'header',
    },
    [
      createElement('h1', {
        textContent: 'Rick and Morty',
      }),
    ]
  );

  async function handleSubmit(searchQuery) {
    console.log(searchQuery);
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${searchQuery}`
    );
    const body = await response.json();
    const characters = body.results;
    const characterElements = characters.map((character) =>
      createCharacterCard(character)
    );
    console.log(characterElements);
    mainElement.innerHTML = '';
    mainElement.append(...characterElements);
  }

  const searchBar = createSearchBar(handleSubmit);

  const characters = await fetchCharacters();

  const characterCards = characters.map((character) =>
    createCharacterCard(character)
  );

  const mainElement = createElement(
    'main',
    {
      className: 'main',
    },
    characterCards
  );

  appElement.append(headerElement, searchBar, mainElement);
}

renderApp();
