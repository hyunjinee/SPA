import ProductListPage from './pages/ProductListPage.js';
import ProductDetailPage from './pages/ProductDetailPage.js';
import CartPage from './pages/CartPage.js';
import { init } from './core/router.js';

const PATH_HOME = '/shopping-mall/index.html';

export default function App({ $target }) {
  this.route = () => {
    const { pathname } = location;
    $target.innerHTML = '';

    console.log(pathname);

    if (pathname === PATH_HOME) {
      new ProductListPage({ $target }).render();
    } else if (true) {
      new ProductDetailPage({ $target }).render();
    } else if ('/cart') {
      new CartPage({ $target }).render();
    }
  };

  init(this.route);

  this.route();
  window.addEventListener('popstate', this.route);
}
