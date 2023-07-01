import App from './App';
import { $ } from './shared/dom';
import './style.css';

const init = () => {
  const $app = $<HTMLDivElement>('#app');

  if (!$app) {
    throw new Error("Can't find the app root element");
  }

  new App($app);
};

window.addEventListener('DOMContentLoaded', init);
