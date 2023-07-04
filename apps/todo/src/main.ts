import './style.css';
import { updateRealDOM } from './core/diff';
import App from './App';

declare global {
  interface Window {
    virtualDOM: HTMLElement;
  }
}

// const $app = $('#app') as HTMLDivElement;

const init = () => {
  window.virtualDOM = document.createElement('div');
  window.virtualDOM.id = 'app';

  const $app = new App({}).$dom;
  window.virtualDOM.append($app);

  updateRealDOM();
};

window.addEventListener('DOMContentLoaded', init);
