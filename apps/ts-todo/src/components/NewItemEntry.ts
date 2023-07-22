import Component, { type Props } from '../core/Component';
// import jsx from '../core/jsx';
import jsx from '@hyunjin/jsx';

type NewItemEntryState = {
  value: string;
};

export default class NewItemEntry extends Component<Props, NewItemEntryState> {
  constructor() {
    super();

    this.state = {
      value: '',
    };

    this.setDOM();
  }

  onInputChange(e: KeyboardEvent) {
    const { value } = e.target as HTMLInputElement;
    this.setState({ value });
  }

  handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    console.log('submit');
  }

  render() {
    return jsx`
    <section class="newItemEntry">
      <h2>New Item Entry</h2>
      <form class="newItemEntry__form" id="itemEntryForm" onSubmit=${this.handleSubmit}>
        <label for="newItem" class="offscreen">Enter a new todo item</label>
        <input
          type="text"
          class="newItemEntry__input"
          id="newItem"
          maxlength="40"
          autocomplete="off"
          value=${this.state.value}
          onInput=${this.onInputChange.bind(this)}
        />
        <button id="addItem" class="button newItemEntry__button">+</button>
      </form>
    </section>
    `;
  }
}
