import { $ } from './src/utils/DOM.js';
import { PATHNAMES } from '../shared/constants/pathnames.js';
import { goTo } from './src/router/index.js';
import '../shared/css/index.css';

const $app = $('#app');
/**
 *
 */
// $app.addEventListener('click');

goTo(PATHNAMES.HOME);
