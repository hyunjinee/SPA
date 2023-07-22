import Component from '../core/Component';
// import jsx from '../core/jsx';
import jsx from '@hyunjin/jsx';

export default class TodoList extends Component {
  constructor() {
    super();

    this.setDOM();
  }

  render() {
    return jsx`
      <section class="listContainer">
        <header class="listTitle">
          <h2 id="listName">List</h2>
          <button
            id="clearItemsButton"
            class="button listTitle__button"
            title="Clear the list"
            aria-label="Remove all items from the list"
          >
            Clear
          </button>
        </header>

        <hr />

        <ul id="listItems"></ul>
      </section>
    `;
  }
}
