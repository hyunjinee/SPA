const $wrapper = document.createElement('div');
$wrapper.classList.add('wrapper', 'bg-white', 'p-10');
$wrapper.innterHTML = '';
export const renderOverview = async ($main) => {
  $main.replaceChildren($wrapper);
};
