export default class Component {
  constructor(parentNode, props = {}, state = {}) {
    this.parentNode = parentNode;
    this.props = props;
    this.state = state;
  }

  setState(state) {
    this.state = state;
    this.render();
  }

  render() {}

  renderSelf() {}

  addEventListeners() {}
  fetchState() {}
}
