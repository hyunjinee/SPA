import TodoListManager from '../shared/TodoListManager';
import { $ } from '../shared/dom';
import { todoListTemplate } from '../shared/template';

export default class TodoListComponent {
  constructor(private $target: HTMLElement) {
    TodoListManager.subscribers.add(this.render.bind(this));
    this.render();
  }

  render() {
    const $listContainer = $('.listContainer');

    if ($listContainer) {
      $listContainer.remove();
    }

    this.$target.insertAdjacentHTML('beforeend', todoListTemplate);

    const $ul = $<HTMLUListElement>('#listItems');

    TodoListManager.instance.list.forEach((item) => {
      const $li = document.createElement('li');
      $li.className = 'item';
      const $check = document.createElement('input');
      $check.type = 'checkbox';
      $check.id = item.id;
      $check.checked = item.checked;

      $li.append($check);

      $check.addEventListener('change', () => {
        item.checked = !item.checked;
        TodoListManager.instance.save();
      });

      const $label = document.createElement('label');
      $label.htmlFor = item.id;
      $label.innerText = item.item;
      $li.append($label);

      const $button = document.createElement('button');
      $button.innerText = 'X';
      $button.className = 'delete';
      $li.append($button);

      $button.addEventListener('click', () => {
        TodoListManager.instance.removeItem(item.id);
      });

      $ul?.append($li);
    });

    const $clearButton = $<HTMLButtonElement>('#clearItemsButton');

    $clearButton?.addEventListener('click', () => {
      TodoListManager.instance.clearList();
    });
  }
}
