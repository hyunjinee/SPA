import { setItem } from '../utils/storage';
export default class SearchInput {
  constructor({ $target, onSearch, onRandom, keywords }) {
    this.keywords = keywords;
    this.$searchWrapper = document.createElement('section');
    this.$searchRandom = document.createElement('div');
    this.$darkMode = document.createElement('span');
    this.$searchInput = document.createElement('input');

    this.$searchRecentWrapper = document.createElement('div');

    this.$searchWrapper.className = 'SearchWrapper';
    this.$searchInput.placeholder = '고양이를 검색해보세요.|';
    this.$searchInput.className = 'SearchInput';
    this.$searchRandom.className = 'SearchRandom';
    this.$searchRecentWrapper.className = 'SearchReventWrapper';
    this.$darkMode.className = 'DarkModeButton';
    this.$darkMode.innerText = '🌕';
    this.$searchRandom.innerText = '😽';

    $target.append(this.$searchWrapper, this.$searchRecentWrapper);
    this.$searchWrapper.append(
      this.$searchRandom,
      this.$searchInput,
      this.$darkMode
    );

    this.$searchInput.focus();

    this.$searchInput.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) {
        onSearch(e.target.value);

        this.addRecentKeyword(e.target.value);
      }
    });
    this.$searchInput.addEventListener('focus', (e) => {
      e.target.value = '';
    });
    this.$searchRandom.addEventListener('click', () => {
      onRandom();
    });

    this.render();
  }

  addRecentKeyword(keyword) {
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

  render() {
    if (!this.keywords) {
      return;
    }

    this.$searchRecentWrapper.innerHTML = '';
    this.keywords.map((keyword) => {
      const word = document.createElement('span');
      word.className = 'keyword';
      word.innerText = keyword;
      word.addEventListener('click', (e) => {
        this.onSearch(e.target.innerText);
      });
      this.$searchRecentWrapper.append(word);
    });
  }
}
