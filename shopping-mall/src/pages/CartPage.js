import { getItem } from './storage.js';
import { routeChange } from './router.js';

export default function CartPage({ $target }) {
  const $page = document.createElement('div');
  $page.className = 'CartPage';

  $page.innerHTML = '<h1>장바구니</h1>';

  const cartData = getItem('products_cart', []);
  this.state = {
    products: null,
  };

  this.render = () => {
    if (cartData.length === 0) {
      alert('장바구니가 비어있습니다.');
      routeChange('/');
    } else {
      $target.appendChild($page);
    }
  };
}
