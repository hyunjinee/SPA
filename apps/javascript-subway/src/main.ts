import './css/index.css';
import { $ } from './utils/dom';

const $app = $('#app');

if (!$app) {
  throw new Error('App not found');
}

$app.addEventListener('click', () => {});
window.addEventListener('popstae', () => {});
