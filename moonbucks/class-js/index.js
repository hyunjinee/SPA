import App from './src/App.js';
import { $ } from './src/utils/dom.js';

new App(
  $('#app'),
  {},
  {
    menu: {
      espresso: [],
      frappuccino: [],
      blended: [],
      teavana: [],
      desert: [],
    },
    currentCategory: 'espresso',
  }
);
