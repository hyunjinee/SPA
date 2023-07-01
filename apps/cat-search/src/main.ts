import { $ } from '@spa/utils';

import './style.css';
import App from './App';
import { initColorTheme } from './utils/darkmode';

const init = () => {
  const root = $<HTMLDivElement>('#app');

  if (!root) {
    throw new Error("Can't find the root element");
  }

  new App(root);
};

window.addEventListener('DOMContentLoaded', init);
window.onload = initColorTheme;
