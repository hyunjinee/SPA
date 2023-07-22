// import jsx from './core/jsx2';
import jsx from '@hyunjin/jsx';

import Component from './core/Component';
import NewItemEntry from './components/NewItemEntry';
import TodoList from './components/TodoList';

export default class App extends Component {
  $newItemEntry: Element;
  $todoList: Element;

  constructor() {
    super();

    this.$newItemEntry = new NewItemEntry().$dom;
    this.$todoList = new TodoList().$dom;

    console.log(this.$newItemEntry, '?');
    this.setDOM();
    console.log(jsx`
    <main>
     ${this.$newItemEntry}
     ${this.$todoList}
    </main>
  `);
  }

  render() {
    return jsx`
      <main>
       ${this.$newItemEntry}
       ${this.$todoList}
      </main>
    `;
  }
}
