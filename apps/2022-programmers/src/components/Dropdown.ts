import Pagination from './Pagination';

export default class Dropdown {
  options: number[];
  constructor(private data: object) {
    this.options = [5, 15];

    this.render();
  }

  render() {
    const $select = document.createElement('select');
    $select.setAttribute('id', 'countPerPage');

    for (const option of this.options) {
      const $option = document.createElement('option');
      $option.setAttribute('value', option.toString());
      $option.append(document.createTextNode(option.toString()));
      $select.append($option);
    }

    $select.addEventListener('change', (e) => {
      let currentPage = 1;
      let pagePerCount = (e.target as HTMLSelectElement).value;
      let maxPageCount = 5;
      new Pagination(this.data).setPaginationButtons(maxPageCount, +pagePerCount, currentPage);
    });

    document.getElementById('dropdown')?.append($select);
  }
}
