import { ListItem } from '../models/ListItem';
import TodoList from '../models/TodoList';
import { $ } from '../shared/dom';
import { newItemEntryTemplate } from '../shared/template';

export default class NewItemEntry {
  constructor(private $target: HTMLElement, private todoList: TodoList) {
    this.render();
  }

  render() {
    this.$target.innerHTML = newItemEntryTemplate;
    const $itemEntryForm = $<HTMLFormElement>('#itemEntryForm');

    $itemEntryForm?.addEventListener('submit', (e) => {
      e.preventDefault();

      const $input = $<HTMLInputElement>('#newItem');
      const newEntryText = $input?.value.trim();

      if (!newEntryText?.length) {
        return;
      }

      const itemdId = this.todoList.list.length
        ? Number(this.todoList.list[this.todoList.list.length - 1].id) + 1
        : 1;

      const newItem = new ListItem(itemdId.toString(), newEntryText);

      this.todoList.addItem(newItem);
    });

    const $addItemButton = $<HTMLButtonElement>('#addItem');

    if (!$addItemButton) {
      throw new Error('addItemButton is not exist');
    }

    $addItemButton.addEventListener('click', () => {
      console.log('hello world');
    });
  }
}
