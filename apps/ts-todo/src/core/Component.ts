import { forceUpdate } from '../main';

export type Props = {};
export type State = {};

export default class Component<P extends Props = Props, S extends State = State> {
  $dom: Element;
  props?: P;
  state: S;
  constructor(props?: P) {
    this.$dom = document.createElement('div');
    this.props = props;
    this.state = {} as S;
  }

  update() {}
  updateDOM() {
    const $copy = this.render();
    console.log($copy);
    this.$dom.parentNode?.replaceChild($copy, this.$dom);
    this.$dom = $copy;
  }

  setDOM() {
    this.$dom = this.render();
  }

  setState(newState: Partial<S>) {
    const nextState = { ...this.state, ...newState };

    this.state = nextState;
    this.updateDOM();
    forceUpdate();
  }

  render(): Element {
    throw new Error('render method must be implemented');
  }
}
