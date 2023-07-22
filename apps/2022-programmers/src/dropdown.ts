export const renderDropdown = (updateCountPerPage: (countPerPage: number) => void) => {
  const $dropdown = document.querySelector('#dropdown') as HTMLDivElement;
  $dropdown.innerHTML = '';

  const $select = document.createElement('select');
  for (const countPerPage of [5, 15]) {
    const $option = document.createElement('option');
    $option.value = countPerPage.toString();
    $option.innerText = countPerPage.toString();
    $select.append($option);
  }

  $select.addEventListener('change', (e) => {
    const countPerPage = Number((e.target as HTMLSelectElement).value);
    updateCountPerPage(countPerPage);
  });
  $dropdown.append($select);
};
