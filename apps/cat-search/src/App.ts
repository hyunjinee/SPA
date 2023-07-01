import { $ } from '@spa/utils';
import Loading from './components/Loading';
import SearchInput from './components/SearchInput';
import SearchResult from './components/SearchResult';
import CatStore from './store/cat-store';

export default class App {
  constructor(private $target: HTMLDivElement) {
    new SearchInput(this.$target);
    new SearchResult(this.$target);
    new Loading($<HTMLBodyElement>('body')!);

    CatStore.instance.load();
  }
}
