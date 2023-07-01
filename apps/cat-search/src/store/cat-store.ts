import { getItem } from '../utils/session-storage';

type Cat = {
  id: string;
  url: string;
  name: string;
};

export default class CatStore {
  static instance = new CatStore();
  static subscribers = new Set<Function>();

  private constructor(private _list: Cat[] = []) {}

  get list(): Cat[] {
    return this._list;
  }

  set list(list: Cat[]) {
    this._list = list;
    CatStore.subscribers.forEach((render) => render());
  }

  addCat(cat: Cat) {
    this._list.push(cat);

    CatStore.subscribers.forEach((render) => render());
  }

  removeCat(id: string) {
    this._list = this._list.filter((cat) => cat.id !== id);

    CatStore.subscribers.forEach((render) => render());
  }

  load() {
    const storedList = getItem('data');
    CatStore.instance.list = storedList;
  }
}

// import ListItem from '../models/ListItem';

// type TodoListType = {
//   list: ListItem[];
//   load(): void;
//   save(): void;
//   clearList(): void;
//   addItem(itemObj: ListItem): void;
//   removeItem(id: string): void;
// };

// export default class TodoListManager implements TodoListType {
//   static instance = new TodoListManager();
//   static subscribers = new Set<Function>();

//   private constructor(private _list: ListItem[] = []) {}

//   get list(): ListItem[] {
//     return this._list;
//   }

//   addItem(itemObj: ListItem): void {
//     this._list.push(itemObj);
//     this.save();

//     TodoListManager.subscribers.forEach((subscriber) => subscriber());
//   }

//   removeItem(id: string): void {
//     this._list = this._list.filter((item) => item.id !== id);
//     this.save();

//     TodoListManager.subscribers.forEach((subscriber) => subscriber());
//   }

//   load(): void {
//     const storedList = localStorage.getItem('todoList');

//     if (typeof storedList !== 'string') {
//       return;
//     }

//     const parsedList: { _id: string; _item: string; _checked: boolean }[] =
//       JSON.parse(storedList);

//     parsedList.forEach((item) => {
//       const newListItem = new ListItem(item._id, item._item, item._checked);
//       TodoListManager.instance.addItem(newListItem);
//     });
//   }

//   save(): void {
//     localStorage.setItem('todoList', JSON.stringify(this._list));
//   }

//   clearList(): void {
//     this._list = [];
//     this.save();

//     TodoListManager.subscribers.forEach((subscriber) => subscriber());
//   }
// }
