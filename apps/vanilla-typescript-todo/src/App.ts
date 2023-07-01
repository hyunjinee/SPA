import NewItemEntry from './components/NewItemEntry';
import TodoListComponent from './components/TodoListComponent';
import TodoListManager from './shared/TodoListManager';

export default class App {
  constructor(private $target: HTMLDivElement) {
    this.render();
  }

  render() {
    const $main = document.createElement('main');
    this.$target.append($main);
    new NewItemEntry($main);
    new TodoListComponent($main);

    TodoListManager.instance.load();
  }
}
