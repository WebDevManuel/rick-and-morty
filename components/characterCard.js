import { createElement } from '../lib/elements.js';
import styles from './characterCard.module.css';

export default function createCharacterCard({
  name,
  imgSrc,
  status,
  species,
  lastKnownLocation,
  firstSeenIn,
}) {
  const characterCard = createElement(
    'article',
    {
      className: styles.characterCard,
    },
    /* [name] */
    [
      createElement('img', { className: styles.img, src: imgSrc, alt: '' }),
      createElement('h2', { textContent: name }),
      createElement('p', { textContent: `${status} - ${species}` }),
      createElement('h3', { textContent: 'Last known location:' }),
      createElement('p', { textContent: lastKnownLocation }),
      createElement('h3', { textContent: 'First seen in:' }),
      createElement('p', { textContent: firstSeenIn }),
    ]
  );
  return characterCard;
}
