export const renderPagination = (
  currentPage: number,
  maxPageCount: number,
  updatePage?: (currentPage: number) => void,
) => {
  const $pagination = document.querySelector('#pagination') as HTMLDivElement;
  $pagination.innerHTML = '';

  const $leftButton = document.createElement('button');
  const $rightButton = document.createElement('button');

  $leftButton.innerText = '<<';
  $leftButton.className = 'arrow';
  $leftButton.addEventListener('click', (e) => {
    if (updatePage) {
      updatePage(1);
    }
  });
  $rightButton.innerText = '>>';
  $rightButton.className = 'arrow';
  $rightButton.addEventListener('click', (e) => {
    if (updatePage) {
      updatePage(maxPageCount);
    }
  });

  $pagination.append($leftButton);

  for (let i = 1; i <= maxPageCount; i++) {
    const $button = document.createElement('button');
    $button.innerText = i.toString();
    $button.addEventListener('click', (e) => {});

    if (i == currentPage) {
      $button.className = 'active';
    }

    $pagination.append($button);
  }

  $pagination.append($rightButton);
};
