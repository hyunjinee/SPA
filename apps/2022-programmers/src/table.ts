import { TableData } from './main';

export const renderTable = (data: TableData[], pagePerCount: number) => {
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
