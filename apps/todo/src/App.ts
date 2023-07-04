import { Props, State } from './../../cashbook/src/core/component';
import NewItemEntry from './components/NewItemEntry';
import Component from './core/component';
import { html } from './core/html';
import jsx from './core/jsx';

export default class App extends Component<Props, State> {
  $newItemEntry: HTMLElement;

  constructor(props: Props) {
    super(props);

    this.$newItemEntry = new NewItemEntry().$dom as HTMLElement;

    this.setDOM();
    console.log(this.$newItemEntry);
    console.log(this.$dom, '?');
  }

  render() {
    return html` <main>${this.$newItemEntry}</main> `;
  }
}
