import Store from './store.js';
import Template from './template.js';
import Controller from './controller.js';
import View from './view.js';
import { $on } from './helpers.js';

const store = new Store('todo-app');

const template = new Template();
const view = new View(template);

/**
 * @type {Controller}
 */
const controller = new Controller(store, view);

const setView = () => controller.setView(document.location.hash);

$on(window, 'load', setView);
$on(window, 'hashchange', setView);

console.log(document.location.hash, 'document.location.hash');
