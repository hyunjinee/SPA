import { init } from './core/router.js';
import ProductListPage from './pages/ProductListPage.js';
import ProductDetailPage from './pages/ProductDetailPage.js';
import CartPage from './pages/CartPage.js';

export default function App({ $target }) {
  this.route = () => {
    let { pathname } = location;
    $target.innerHTML = '';

    if (pathname === '/web/') {
      new ProductList({ $target }).render();
    } else if (pathname.includes('/products/')) {
      const [, , , productId] = pathname.split('/');
      new ProductDetail({ $target, productId }).render();
    } else if (pathname === '/cart') {
      new CartPage({ $target }).render();
    }
  };

  init(this.route);
  this.route();

  // 뒤로가기, 앞으로 가기 발생시 popstate 이벤트가 발생합니다.
  window.addEventListener('popstate', this.route);
}
