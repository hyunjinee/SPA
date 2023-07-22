import jsx from '@hyunjin/jsx';
import Component from '../core/Component';

export default class Header extends Component {
  constructor() {
    super();
    this.setDOM();
  }

  render() {
    return jsx`
      <header class="header">
        <h1>todos</h1>
        <input class="new-todo" placeholder="What needs to be done?" autofocus />
      </header>
    `;
  }
}
