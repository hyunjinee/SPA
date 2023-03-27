import Component from './core/Component.js';
import { CONTAINER } from './core/selector.js';
import Title from './components/Title.js';
import AddForm from './components/AddForm.js';
import TodoList from './components/TodoList.js';

export default class App extends Component {
  html() {
    return `
      <header id="${CONTAINER.TITLE}">${Title()}</header>
      <div id="${CONTAINER.ADD_FORM}"></div>
      <ul id="${CONTAINER.TODO_LIST}"></ul>
    `;
  }

  mounted() {
    new AddForm(document.querySelector(`#${CONTAINER.ADD_FORM}`));
    new TodoList(document.querySelector(`#${CONTAINER.TODO_LIST}`));
  }
}
