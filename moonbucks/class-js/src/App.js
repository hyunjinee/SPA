import Component from './core/Component.js';
import { $ } from './utils/dom.js';

export default class App extends Component {
  constructor(parentNode, childComponents = {}, state = {}) {
    super(parentNode, childComponents, state);

    this.render();
  }

  renderSelf() {
    $('#app').innerHTML = this.template();
  }

  template() {
    return `
      <div>
        <header>hi</header>
      </div>
    `;
  }
}
