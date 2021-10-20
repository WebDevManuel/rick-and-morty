import { createElement } from './lib/elements.js';
import './style.css';
import createCharacterCard from './components/characterCard.js';

function renderApp() {
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

  const mainElement = createElement(
    'main',
    {
      className: 'main',
    },
    [
      createCharacterCard({ name: 'Rick', location: 'Earth' }),
      createCharacterCard({ name: 'Morty', location: 'Earth' }),
    ]
  );

  appElement.append(headerElement, mainElement);
}

renderApp();
