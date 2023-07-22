import { routeChange } from '../core/router.js';

export default function ProductList({ $target, initialState }) {
  const $productList = document.createElement('ul');
  $target.append($productList);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if (!this.state) {
      return;
    }
    $productList.innerHTML = `
      ${this.state
        .map(
          (product) => `
            <li class="Product" data-product-id=${product.id}>
                <img src=${product.imageUrl}>
                <div class="Product__info">
                  <div>${product.name}</div>
                  <div>${product.price}원~</div>
                </div>
            </li>
      `
        )
        .join('')}
    `;
  };

  this.render();

  $productList.addEventListener('click', (e) => {
    const $li = e.target.closest('li');
    const { productId } = $li.dataset;

    if (productId) {
      routeChange(`/products/${productId}`);
    }
  });
}
