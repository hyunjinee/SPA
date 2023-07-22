import Header from './components/Header.js';

export default class App {
  #state;

  constructor($target) {
    this.$target = $target;
    this.$main = this.initMain($target);
    this.render();
  }

  setState(nextState) {
    this.state = { ...this.setState, ...nextState };
  }

  initMain($target) {
    $target.innerHTML = '';
    const $main = document.createElement('main');
    $main.setAttribute('id', 'page_content');

    $target.append($main);
    return $main;
  }

  initComponents() {}

  async initData() {
    return await setPersonalInfo();
  }

  async initComponentByURL() {
    this.$main.innerHTML = '';
    const { header, homePage, signupPage } = this.initComponents();
  }

  async render() {
    this.initComponentByURL();
    const header = new Header(this.$target);
    header.render();

    const main = document.createElement('main');
  }
}
