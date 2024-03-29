import Detail from '../components/Detail.js';
import { request } from '../core/api.js';

export default function ProductDetail({ $target, productId }) {
  const $page = document.createElement('div');
  $page.className = 'ProductDetailPage';
  $page.innerHTML = '<h1>상품 정보</h1>';

  this.state = {
    productId,
    product: null,
  };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.fetchProduct = async () => {
    const { productId } = this.state;
    if (!productId) {
      return;
    }
    const product = await request(`/products/${productId}`);
    this.setState({
      ...this.state,
      product,
    });
  };

  this.render = () => {
    if (!this.state.product) {
      $target.innerHTML = 'Loading...';
    } else {
      $target.innerHTML = '';
      $target.appendChild($page);
      new Detail({
        $target: $page,
        initialState: { product: this.state.product, selectedOptions: [] },
      });
    }
  };

  this.fetchProduct();
}
