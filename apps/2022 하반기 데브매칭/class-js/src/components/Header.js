export default class Header {
  constructor($body) {
    this.$body = $body;
  }

  createMenuElement(divClass, spanClass, spanId, menuText) {
    // const span = document.createElement(
    //   'span',
    //   { class: spanClass, id: spanId },
    //   document.createTextNode(menuText)
    // );
  }

  render() {
    const header = document.createElement('header');
    const homeMenu = this.createMenuElement(
      'header header_left',
      'menu_name',
      'menu_home',
      'HOME'
    );
    const signupMenu = this.createMenuElement(
      'header header_right',
      'menu_name',
      'menu_signup',
      'SIGNUP'
    );

    homeMenu.addEventListener('click', () => {});
    signupMenu.addEventListener('click', () => {});
  }
}
