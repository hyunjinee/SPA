import Component from '../core/Component.js';
import { CONTAINER } from '../core/selector.js';
import { store } from '../core/store.js';

export default class TodoList extends Component {
  html() {
    const { todos, editingId } = store.getState();
    return todos.map(
      ({ id, content, done }) => `
      <li id="${id}">
        <label>
        </label>
      </li>
    `
    );
  }

  mounted() {
    const { editingId } = store.getState();

    if (!editingId) {
      return;
    }

    const $editForm = document.querySelector(
      `#${CONTAINER.EDIT_FORM}-${editingId}`
    );
  }
}
