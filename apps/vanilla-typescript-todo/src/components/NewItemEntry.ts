import { $ } from '@spa/utils';

import ListItem from '../models/ListItem';
import { newItemEntryTemplate } from '../shared/template';
import TodoListManager from '../shared/TodoListManager';

export default class NewItemEntry {
  constructor(private $target: HTMLElement) {
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

      const itemdId = TodoListManager.instance.list.length
        ? Number(TodoListManager.instance.list[TodoListManager.instance.list.length - 1].id) + 1
        : 1;

      const newItem = new ListItem(itemdId.toString(), newEntryText);

      TodoListManager.instance.addItem(newItem);
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
