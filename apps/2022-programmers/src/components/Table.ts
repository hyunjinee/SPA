const columnNames = ['name', 'title', 'email', 'role'];

export const displayTableData = (data: object) => {
  const $tr = document.createElement('tr');

  for (const value of Object.values(data)) {
    const $td = document.createElement('td');
    $td.append(document.createTextNode(value));
    $tr.append($td);
  }

  return $tr;
};

export default class Table {
  constructor(private data: any) {
    this.render();
  }

  displayTableHead() {
    const $thead = document.createElement('thead');
    const $theadTr = document.createElement('tr');

    for (let i = 0; i < 4; i++) {
      const $th = document.createElement('th');
      $th.append(document.createTextNode(columnNames[i]));
      $theadTr.append($th);
    }

    $thead.append($theadTr);

    return $thead;
  }

  render() {
    const $table = document.createElement('table');
    (document.getElementById('table') as HTMLTableElement).append($table);
    const $thead = this.displayTableHead();
    $table.append($thead);
    const $tbody = document.createElement('tbody');

    for (let i = 0; i < this.data.length; i++) {
      const $tbodyTr = displayTableData(this.data[i]);
      $tbody.append($tbodyTr);
    }

    $table.append($tbody);
  }
}
