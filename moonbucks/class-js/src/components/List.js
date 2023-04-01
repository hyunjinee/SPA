import Component from '../core/Component.js';
import { store } from '../core/store.js';
import { $ } from '../utils/dom.js';

export default class List extends Component {
  constructor(parentElement, props = {}, state = {}) {
    super(parentElement, props, state);
  }

  renderSelf() {
    this.parentElement.innerHTML = this.template();
    this.updateMenuCount();
  }

  updateMenuCount() {
    const menuCount = this.state.menu[this.state.currentCategory].length;
    $('.menu-count').innerText = `총 ${menuCount}개`;
  }

  updateMenuName(e) {
    const menuId = e.target.closest('li').dataset.menuId;
    console.log(menuId);
    const $menuName = e.target.closest('li').querySelector('span');
    const updatedMenuName = prompt('메뉴명을 수정하세요', $menuName.innerText);
    this.state.menu[this.state.currentCategory][menuId].name = updatedMenuName;
    store.setLocalStorage(this.state.menu);

    this.render();
  }

  removeMenuName(e) {
    if (confirm('정말 삭제하시겠습니까?')) {
      const menuId = e.target.closest('li').dataset.menuId;
      this.state.menu[this.state.currentCategory].splice(menuId, 1);
      store.setLocalStorage(this.state.menu);

      this.render();
    }
  }

  soldOutMenu(e) {
    const menuId = e.target.closest('li').dataset.menuId;
    console.log(this.state.menu[this.state.currentCategory][menuId]);

    if (this.state.menu[this.state.currentCategory][menuId].soldOut) {
      this.state.menu[this.state.currentCategory][menuId].soldOut = false;
    } else {
      this.state.menu[this.state.currentCategory][menuId].soldOut = true;
    }
    store.setLocalStorage(this.state.menu);

    this.render();
  }

  addEventListeners() {
    $('#menu-list').addEventListener('click', (e) => {
      if (e.target.classList.contains('menu-edit-button')) {
        this.updateMenuName(e);
        return;
      }

      if (e.target.classList.contains('menu-remove-button')) {
        this.removeMenuName(e);
        return;
      }

      if (e.target.classList.contains('menu-sold-out-button')) {
        this.soldOutMenu(e);
        return;
      }
    });
  }

  template() {
    return this.state.menu[this.state.currentCategory]
      .map((menuItem, index) => {
        return `
        <li data-menu-id="${index}" class="menu-list-item d-flex items-center py-2">
          <span class="w-100 pl2 menu-name ${
            menuItem.soldOut ? 'sold-out' : ''
          }">${menuItem.name}</span>
          <button
          type="button"
          class="bg-gray-50 text-gray-500 text-sm mr-1 menu-sold-out-button"
          >
              품절
          </button>
          <button
            type="button"
            class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
          >
            수정
          </button>
          <button
            type="button"
            class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
          >
            삭제
          </button>
        </li>
      `;
      })
      .join('');
  }
}
