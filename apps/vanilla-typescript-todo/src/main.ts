import { $ } from '@spa/utils';

import './style.css';
import App from './App';

const init = () => {
  const $app = $<HTMLDivElement>('#app');

  if (!$app) {
    throw new Error("Can't find the app root element");
  }

  new App($app);
};

window.addEventListener('DOMContentLoaded', init);
