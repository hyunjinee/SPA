import User from '../state/User';
import { $ } from '../shared/dom';
import { pageTemplate, template } from './template';

const titleText = Object.freeze({
  specifiedPage: {
    login: '로그인',
    signUp: '회원가입',
    updateMyInfo: '회원 정보 수정',
  },
  default: '🍿 자판기 🍿',
});

class HeaderView {
  $container = $('header');
  $title = $('.title', this.$container) as HTMLHeadingElement;
  $goMainButton = $('#go-main-button', this.$container);
  $userArea = $('.user-area', this.$container);
  $loginButton = $('#login-button', this.$container);
  $nav = $('.nav', this.$container);

  constructor() {
    this.$userArea.addEventListener('click', this.onClickUserArea);
  }

  onClickUserArea(event) {
    if (event.target.id === 'logout-button') {
    }
  }

  updateOnPageChange(page: string) {
    this.updateTitle(page);
    this.updateMenuButton(page);
  }

  updateTitle(page: string) {
    const specifiedPageNames = Object.keys(titleText.specifiedPage);

    if (specifiedPageNames.includes(page)) {
      this.$title.innerText = titleText.specifiedPage[page];
      return;
    }

    this.$title.innerText = titleText.default;
  }

  updateMenuButton(page: string) {
    this.updateUserArea();

    if (User.isMember && page !== 'updateMyInfo') {
      this.setNavigationMenu(true);
    } else {
      this.setNavigationMenu(false);
    }

    switch (page) {
      case 'login':
      case 'signUp':
      case 'updateMyInfo':
        this.setGoMainButtonVisibility(true);
        this.setUserAreaVisibility(false);
        break;
      default:
        this.setGoMainButtonVisibility(false);
        this.setUserAreaVisibility(true);
    }
  }

  updateUserArea() {
    if (User.isMember) {
      this.$userArea.innerHTML = template.userAreaContentForMember(User.name);
    } else {
      this.$userArea.innerHTML = template.userAreaContentForNonMember;
    }
  }

  setNavigationMenu(visible: boolean) {
    const navClassList = this.$nav.classList;
    if (visible && navClassList.contains('hidden')) {
      navClassList.remove('hidden');
    }
    if (!visible && !navClassList.contains('hidden')) {
      navClassList.add('hidden');
    }
  }

  setUserAreaVisibility(visible: boolean) {
    const userAreaClassList = this.$userArea.classList;
    if (visible && userAreaClassList.contains('hidden')) {
      userAreaClassList.remove('hidden');
    }
    if (!visible && !userAreaClassList.contains('hidden')) {
      userAreaClassList.add('hidden');
    }
  }

  setGoMainButtonVisibility(visible: boolean) {
    const goMainButtonClassList = this.$goMainButton.classList;
    if (visible && goMainButtonClassList.contains('hidden')) {
      goMainButtonClassList.remove('hidden');
    }
    if (!visible && !goMainButtonClassList.contains('hidden')) {
      goMainButtonClassList.add('hidden');
    }
  }

  updateNavigationSelectedMenu(page: string) {
    $('.selected', this.$nav)?.classList.remove('selected');
    $(`.nav-menu[data-page*="${page}"]`).classList.add('selected');
  }
}

export default new HeaderView();
