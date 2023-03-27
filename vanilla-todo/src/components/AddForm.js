import { SELECTOR } from '../core/selector.js';
import Component from '../core/Component.js';
import { store, todoService } from '../core/store.js';

export default class AddForm extends Component {
  html() {
    return `
      <form id="${SELECTOR.ADD_FORM_ID}">
        <input type="text" placeholder="할 일을 입력해주세요" />
        <button type="submit">추가하기</button>
      </form>
    `;
  }

  event() {
    return [
      {
        type: 'submit',
        target: `#${SELECTOR.ADD_FORM_ID}`,
        handler: this.handleSubmitAdding.bind(this),
      },
    ];
  }

  handleSubmitAdding(event) {
    event.preventDefault();

    const $addForm = document.getElementById(SELECTOR.ADD_FORM_ID);
    const $todoInput = $addForm.querySelector('input');

    store.dispatch({
      type: 'ADD_TODO',
      payload: todoService.addTodo($todoInput.value),
    });

    $todoInput.value = '';
  }
}
