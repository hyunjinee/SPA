import Component from '../core/Component';
import jsx from '../core/jsx2';

export default class Main extends Component {
  constructor() {
    super();

    this.setDOM();
  }

  render() {
    return jsx`
      <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox" />
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list"></ul>
        <footer class="footer">
          <span class="todo-count"> </span>
          <ul class="filters">
            <li>
              <a href="#/" class="selected">All</a>
            </li>
            <li>
              <a href="#/active">Active</a>
            </li>
            <li>
              <a href="#/completed">Completed</a>
            </li>
          </ul>
          <button class="clear-completed">Clear completed</button>
        </footer>
      </section>
    `;
  }
}
