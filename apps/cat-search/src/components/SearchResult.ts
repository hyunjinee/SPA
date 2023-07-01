import { $, $$ } from '@spa/utils';
import CatStore from '../store/cat-store';

export default class SearchResult {
  constructor(private $target: HTMLDivElement) {
    CatStore.subscribers.add(this.render);
    const $searchResult = document.createElement('section');
    $searchResult.className = 'SearchResult';
    this.$target.append($searchResult);

    this.render();
  }

  render() {
    const $searchResult = $<HTMLElement>('.SearchResult');
    if (!$searchResult) {
      return;
    }

    if (CatStore.instance.list.length === 0) {
      $searchResult.innerHTML = '검색 결과가 없습니다.';
      return;
    }

    $searchResult.innerHTML = CatStore.instance.list
      .map(
        (cat) => `
      <div class="item">
        <img src="${cat.url}" alt="${cat.name}" class="lazy" />
        <span class="cat-name hidden">${cat.name}</span>
      </div>
    `,
      )
      .join('');

    $$('.item', $searchResult).forEach(($item, index) => {
      $item.addEventListener('click', () => {});
      $item.addEventListener('mouseover', () => {
        const $catName = $<HTMLSpanElement>('.cat-name', $item);
        if ($catName) {
          $catName.style.visibility = 'visible';
        }
      });
      $item.addEventListener('mouseout', () => {
        const $catName = $<HTMLSpanElement>('.cat-name', $item);
        if ($catName) {
          $catName.style.visibility = 'hidden';
        }
      });
    });
  }
}
