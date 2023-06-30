import NewItemEntry from './components/NewItemEntry';
import TodoList from './models/TodoList';
import TodoListComponent from './components/TodoListComponent';
import { $ } from './shared/dom';
import { pageTemplate } from './shared/template';

export default class App {
  todoList: TodoList;
  constructor(private $target: HTMLDivElement) {
    this.todoList = TodoList.instance;

    this.render();
  }
  render() {
    const $main = document.createElement('main');
    this.$target.append($main);

    new NewItemEntry($main, this.todoList);
    new TodoListComponent($main, this.todoList);
  }
}
