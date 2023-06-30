import { ListItem } from './ListItem';

type TodoListType = {
  list: ListItem[];
  load(): void;
  save(): void;
  clearList(): void;
  addItem(itemObj: ListItem): void;
  removeItem(id: string): void;
};

export default class TodoList implements TodoListType {
  static instance = new TodoList();
  static subscribers = new Set<Function>();

  private constructor(private _list: ListItem[] = []) {}

  get list(): ListItem[] {
    return this._list;
  }

  addItem(itemObj: ListItem): void {
    this._list.push(itemObj);
    this.save();

    TodoList.subscribers.forEach((subscriber) => subscriber());
  }
  removeItem(id: string): void {
    this._list = this._list.filter((item) => item.id !== id);
    this.save();
  }

  load(): void {
    const storedList = localStorage.getItem('todoList');

    if (typeof storedList !== 'string') {
      return;
    }

    const parsedList: { _id: string; _item: string; _checked: boolean }[] =
      JSON.parse(storedList);

    parsedList.forEach((item) => {
      const newListItem = new ListItem(item._id, item._item, item._checked);
      TodoList.instance.addItem(newListItem);
    });
  }
  save(): void {
    localStorage.setItem('todoList', JSON.stringify(this._list));
  }
  clearList(): void {
    this._list = [];
    this.save();
  }
}
