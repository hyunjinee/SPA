import { $ } from '../shared/dom';
import { api } from '../shared/api';
import { renderSearhResult } from './SearchResult';

const SEARCH_INPUT_TEMPLATE = `
  <section class="search-wrapper">
    <div class="search-random">😽</div>
    <input class="search-input" placeholder="고양이를 검색해보세요.|"></input>
    <span class="dark-mode-button">🌕</span>
    <div></div>
  </section>
  <div class="search-recent-wrapper"></div>
`;

export const renderSearchInput = () => {
  $('#app')?.insertAdjacentHTML('afterbegin', SEARCH_INPUT_TEMPLATE);

  const $searchInput = $('.search-input') as HTMLInputElement;
  $searchInput.focus();

  // 엔터시 검색
  $searchInput.addEventListener('keyup', (e: KeyboardEvent) => {
    if (e.keyCode === 13 && e.target instanceof HTMLInputElement) {
      onSearch(e.target.value);

      $searchInput.blur();
    }
  });

  // 포커스시 텍스트 지우기
  $searchInput.addEventListener('focus', (e: FocusEvent) => {
    if (e.target instanceof HTMLInputElement) {
      e.target.value = '';
    }
  });
};

const onSearch = async (keyword: string) => {
  if (!keyword) {
    return;
  }

  const { data } = await api.fetchCats(keyword);
  console.log(data);
  renderSearhResult(data);
};

// this.keywords = keywords;
// this.$darkMode = document.createElement('span');
// this.$searchInput = document.createElement('input');

// this.$searchRecentWrapper = document.createElement('div');
// this.$searchInput.className = 'SearchInput';

// this.$searchWrapper.append(
//   this.$searchRandom,
//   this.$searchInput,
//   this.$darkMode
// );

// this.$searchInput.focus();

// this.$searchInput.addEventListener('keyup', (e) => {
//   if (e.keyCode === 13) {
//     onSearch(e.target.value);

//     this.addRecentKeyword(e.target.value);
//   }
// });
// this.$searchInput.addEventListener('focus', (e) => {
//   e.target.value = '';
// });
// this.$searchRandom.addEventListener('click', () => {
//   onRandom();
// });

// this.render();
