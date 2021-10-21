import { createElement } from '../lib/elements';
import styles from './searchBar.module.css';

export default function createSearchBar(onSubmit) {
  const textInput = createElement('input', {
    placeholder: 'Search for a character',
  });
  const searchBar = createElement(
    'form',
    {
      onsubmit: (event) => {
        event.preventDefault();
        onSubmit(textInput.value);
      },
      className: styles.searchBar,
    },
    [textInput, createElement('input', { type: 'submit' })]
  );
  return searchBar;
}
