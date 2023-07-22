import { ProductInfo } from '../shared/interface';

class Products {
  products: Array<ProductInfo> = [];

  setProducts(products: ProductInfo[]) {
    this.products = products;
  }
}

export default new Products();
