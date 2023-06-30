import TodoList from '../models/TodoList';
import { todoListTemplate } from '../shared/template';

export default class TodoListComponent {
  constructor(private $target: HTMLElement, private todoList: TodoList) {
    this.render();
  }

  render() {
    this.$target.insertAdjacentHTML('beforeend', todoListTemplate);
  }
}
