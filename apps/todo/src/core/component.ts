type Props = {};
type State = {};

export default class Component<P extends Props = Props, S extends State = State> {
  $dom: HTMLElement | DocumentFragment | ChildNode;
  constructor(private props?: P, private state?: S) {
    this.$dom = document.createDocumentFragment();
  }

  setDOM() {
    this.$dom = this.render();
  }

  render(): HTMLElement | ChildNode | DocumentFragment {
    throw new Error('render method must be implemented');
  }
}
