export default class Pagination {
  constructor(private data: object) {
    this.render();
  }

  setPaginationButtons(maxPageCount: number, pagePerCount: number, currentPage: number) {
    const $pagination = document.querySelector('#pagination') as HTMLDivElement;
    $pagination.innerHTML = '';
    const $arrowLeftButton = document.createElement('button');
    $arrowLeftButton.setAttribute('class', 'arrow');
    $arrowLeftButton.append(document.createTextNode('⏪'));
    $pagination.append($arrowLeftButton);

    for (let i = 0; i < maxPageCount; i++) {
      const $button = document.createElement('button');
      $button.textContent = (i + 1).toString();
      $pagination.append($button);

      if (i + 1 === currentPage) {
        $button.setAttribute('class', 'active');
      }
    }

    const $arrowRightButton = document.createElement('button');
    $arrowRightButton.setAttribute('class', 'arrow');
    $arrowRightButton.append(document.createTextNode('⏩'));
    $pagination.append($arrowRightButton);
  }
  paginationButtonStyle() {}

  paginationButtonClicked() {
    const $pagination = document.querySelector('#pagination') as HTMLDivElement;
    $pagination.addEventListener('click', (e: Event) => {
      const $target = e.target as HTMLDivElement;
      if ($target.tagName === 'BUTTON') {
        if ($target.textContent === '⏪' || $target.textContent === '⏩') {
          return;
        }

        const $buttons = document.querySelectorAll('#pagination > button');
        $buttons.forEach(($button) => {
          $button.classList.remove('active');
        });
        $target.classList.add('active');
      }
    });
  }

  render() {
    let currnetPage = 1;
    let pagePerCount = 5;
    let maxPageCount = 5;

    this.setPaginationButtons(maxPageCount, pagePerCount, currnetPage);
    this.paginationButtonClicked();
  }
}
