export default class Component {
  constructor(parentElement, props = {}, state = {}) {
    this.parentElement = parentElement;
    this.props = props;
    this.state = state;
  }

  setState(state) {
    this.state = state;
    this.render();
  }

  render() {
    this.renderSelf();
    this.addEventListeners();
  }

  renderSelf() {}
  addEventListeners() {}
  fetchState() {}
}
