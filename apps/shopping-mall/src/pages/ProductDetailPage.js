import ProductDetail from '../components/ProductDetail.js';
import { request } from '../core/api.js';

export default function ProductDetailPage({ $target, productId }) {
  this.state = {
    productId,
    product: null,
  };

  console.log('DetailPage');
  const $page = document.createElement('div');
  $page.className = 'ProductDetailPage';
  $page.innerHTML = '<h1>상품 정보</h1>';

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if (!this.state.product) {
      $target.innerHTML = 'Loading...';
    } else {
      $target.innerHTML = '';
      $target.append($page);
      new ProductDetail({
        $target: $page,
        initialState: {
          product: this.state.product,
          selectedOptions: [],
        },
      });
    }
  };

  this.fetchProduct = async () => {
    const { productId } = this.state;
    const product = await request(`/products/${productId}`);
    this.setState({
      ...this.state,
      product,
    });
  };

  this.fetchProduct();
}
