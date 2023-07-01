import { $ } from '@spa/utils';
import { getItem, setItem } from '../utils/session-storage';
import { api } from '../utils/api';
import CatStore from '../store/cat-store';

export default class SearchInput {
  keywords: string[];
  constructor(private $target: HTMLDivElement) {
    const $searchWrapper = document.createElement('section');
    const $searchRandom = document.createElement('div');
    const $searchInput = document.createElement('input');
    const $searchRecentWrapper = document.createElement('div');
    const $darkMode = document.createElement('span');

    $searchWrapper.className = 'SearchWrapper';
    $searchInput.className = 'SearchInput';
    $searchInput.placeholder = '고양이를 검색해보세요.|';
    $darkMode.className = 'DarkModeButton';
    $darkMode.innerText = '🌕';
    $searchRecentWrapper.className = 'SearchRecentWrapper';
    $searchRandom.className = 'SearchRandom';
    $searchRandom.innerText = '😽';

    $searchWrapper.append($searchRandom);
    $searchWrapper.append($searchInput);
    $searchWrapper.append($darkMode);

    this.$target.append($searchWrapper, $searchRecentWrapper);

    $searchInput.addEventListener('focus', (e: FocusEvent) => {
      if (e.target instanceof HTMLInputElement) {
        e.target.value = '';
      }
    });

    $searchInput.addEventListener('keyup', async (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement) {
        if (e.key === 'Enter') {
          const { data } = await api.fetchCats(e.target.value);
          setItem('data', data);
          CatStore.instance.list = data;
          this.addRecentKeyword(e.target.value);
        }
      }
    });

    $searchRandom.addEventListener('click', this.onRandom);

    this.keywords = getItem('keywords');

    $searchInput.focus();
    this.render();
  }

  addRecentKeyword(keyword: string) {
    if (this.keywords.includes(keyword)) {
      return;
    }

    if (this.keywords.length == 5) {
      this.keywords.shift();
    }

    this.keywords.push(keyword);
    setItem('keywords', this.keywords);
    this.render();
  }

  async onRandom() {
    const { data } = await api.fetchRandomCats();
    setItem('data', data);
    CatStore.instance.list = data;
  }

  render() {
    const $searchRecentWrapper = $<HTMLDivElement>('.SearchRecentWrapper');

    if (!$searchRecentWrapper) {
      return;
    }

    $searchRecentWrapper.innerHTML = '';

    this.keywords.map((keyword) => {
      const $wordContainer = document.createElement('span');
      $wordContainer.className = 'keyword';
      $wordContainer.innerText = keyword;

      $wordContainer.addEventListener('click', (e) => {});
      $searchRecentWrapper.append($wordContainer);
    });
  }
}
