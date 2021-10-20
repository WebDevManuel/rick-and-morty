import { createElement } from '../lib/elements.js';
import styles from './characterCard.module.css';

export default function createCharacterCard({ name, location }) {
  const characterCard = createElement(
    'article',
    {
      className: styles.characterCard,
    },
    /* [name] */
    [
      createElement('h2', { textContent: name }),
      createElement('p', { textContent: location }),
    ]
  );
  return characterCard;
}
