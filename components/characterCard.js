import { createElement } from '../lib/elements.js';
import styles from './characterCard.module.css';

export default function createCharacterCard({
  name,
  image,
  status,
  species,
  lastKnownLocation,
  episode,
}) {
  const firstEpisode = episode[0];

  const firstEpisodeElement = createElement('p', { textContent: 'Loading...' });

  const characterCard = createElement(
    'article',
    {
      className: styles.characterCard,
    },
    [
      createElement('img', { className: styles.img, src: image, alt: '' }),
      createElement('h2', { textContent: name }),
      createElement('p', { textContent: `${status} - ${species}` }),
      createElement('h3', { textContent: 'Last known location:' }),
      createElement('p', { textContent: lastKnownLocation }),
      createElement('h3', { textContent: 'First seen in:' }),
      firstEpisodeElement,
    ]
  );
  fetch(firstEpisode)
    .then((response) => response.json())
    .then((body) => {
      firstEpisodeElement.textContent = body.name;
    });
  return characterCard;
}
