import { getData } from './App';
import './style.css';
import { renderTable } from './table';
import { renderPagination } from './pagination';
import { renderDropdown } from './dropdown';
// import App from './App';

// const $app = document.querySelector('.App') as HTMLDivElement;

// new App($app);

export type TableData = {
  name: string;
  title: string;
  email: string;
  role: string;
};

const render = async () => {
  const data = (await getData()) as TableData[];

  const renderTable = (data: TableData[], pagePerCount: number) => {
    const $tableContainer = document.getElementById('table') as HTMLDivElement;
    $tableContainer.innerHTML = '';

    const $table = document.createElement('table');
    $tableContainer.append($table);

    const renderTableHead = () => {
      const $table = document.querySelector('table') as HTMLTableElement;
      const $thead = document.createElement('thead');
      const $tr = document.createElement('tr');

      for (const key of Object.keys(data[0])) {
        const $th = document.createElement('th');
        $th.append(document.createTextNode(key));
        $tr.append($th);
      }

      $thead.append($tr);
      $table.append($thead);
    };

    const renderTableBody = () => {
      const $table = document.querySelector('table') as HTMLTableElement;
      const $tbody = document.createElement('tbody');

      for (let i = 0; i < pagePerCount; i++) {
        const $tr = document.createElement('tr');

        for (const value of Object.values(data[i])) {
          const $td = document.createElement('td');
          $td.append(document.createTextNode(value));
          $tr.append($td);
        }

        $tbody.append($tr);
      }

      $table.append($tbody);
    };

    renderTableHead();
    renderTableBody();
  };

  const renderPagination = (currentPage: number, maxPageCount: number, updatePage?: (currentPage: number) => void) => {
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

  renderTable();
  renderPagination();
};

render();
// const render = async () => {
//   const data = (await getData()) as TableData[];

//   const $table = document.querySelector('#table') as HTMLDivElement;
//   $table.append(document.createElement('table'));

//   // let currentPage = 1;
//   // let countPerPage = 5;

//   const updateCountPerPage = (countPerPage: number) => {
//     renderTable(data, countPerPage);
//     renderPagination(currentPage, Math.ceil(data.length / countPerPage), updatePage);
//   };

//   const updatePage = (currentPage: number) => {
//     renderTable(data, countPerPage);
//     renderPagination(currentPage, Math.ceil(data.length / countPerPage));
//   };

//   // first render
//   const currentPage = 1;
//   const countPerPage = 5;
//   const getMaxPageCount = () => Math.ceil(data.length / countPerPage);
//   renderTable(data, countPerPage);
//   renderPagination(currentPage, getMaxPageCount(), updatePage);
//   renderDropdown(updateCountPerPage);
// };

// render();
