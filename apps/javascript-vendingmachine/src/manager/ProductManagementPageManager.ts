import { Coins, PageManagerMethods, ProductInfo } from '../shared/interface';
import CustomerCharge from '../state/CustomerCharge';
import Products from '../state/Products';
import VendingMachineCharge from '../state/VendingMachineCharge';

interface ProductPurchaseState {
  products: ProductInfo[];
  vendingMachineChargeCoins: Coins;
  customerChargeAmount: number;
}

class ProductManagementPageManager implements PageManagerMethods {
  private subscribers = [];

  addSubscriber(subscriber: object) {
    this.subscribers.push(subscriber);
  }

  setState(newState: Partial<ProductPurchaseState>) {
    const changeStates: Array<string> = Object.keys(newState);

    const state = { ...this.getState(), ...newState };
    if (changeStates.includes('products')) {
      Products.setProducts(newState.products);
    }
    if (changeStates.includes('vendingMachineChargeCoins')) {
      VendingMachineCharge.setCoins(newState.vendingMachineChargeCoins);
    }
    if (changeStates.includes('customerChargeAmount')) {
      CustomerCharge.setAmount(newState.customerChargeAmount);
    }
    this.subscribers.forEach((renderMethod) =>
      renderMethod({ state, changeStates })
    );
  }

  getState() {
    return {
      products: Products.products,
      vendingMachineChargeCoins: VendingMachineCharge.coins,
      customerChargeAmount: CustomerCharge.amount,
    };
  }
}

export default new ProductManagementPageManager();
