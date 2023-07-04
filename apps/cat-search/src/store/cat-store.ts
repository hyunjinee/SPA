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
