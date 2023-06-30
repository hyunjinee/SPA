import { pageTemplate } from './templates/page';
import { $ } from './utils/dom';

export default class App {
  constructor() {}

  render() {
    const app = $('#app');

    if (!app) {
      throw new Error("dom element doesn't exist");
    }

    app.innerHTML = pageTemplate.main;
  }
}
