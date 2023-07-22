import { $ } from '@spa/utils';
import App from './App';
import diff from './core/diff';
import './style.css';

const app = new App();

export const forceUpdate = () => {
  const $realDOM = $('#app') as HTMLDivElement;
  const $root = document.createElement('div');
  $root.id = 'app';
  $root.append(app.$dom);

  window.requestAnimationFrame(() => {
    diff(document.body, $realDOM, $root);
  });
};

forceUpdate();
