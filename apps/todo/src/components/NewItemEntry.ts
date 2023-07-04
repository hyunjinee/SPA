import Component from '../core/component';
import { html } from '../core/html';
import jsx from '../core/jsx';

export default class NewItemEntry extends Component {
  constructor() {
    super();

    this.setDOM();
  }

  render() {
    return html`
      <section class="newItemEntry">
        <h2>New Item Entry</h2>
        <form class="newItemEntry__form" id="itemEntryForm">
          <label for="newItem" class="offscreen">Enter a new todo item</label>
          <input type="text" class="newItemEntry__input" id="newItem" maxlength="40" autocomplete="off" />
          <button id="addItem" class="button newItemEntry__button">+</button>
        </form>
      </section>
    `;
  }
}
