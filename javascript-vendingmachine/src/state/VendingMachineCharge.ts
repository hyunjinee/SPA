import { COIN_TYPE } from '../shared/constants';
import { Coins } from '../shared/interface';

class VendingMachineCharge {
  coins: Coins = [0, 0, 0, 0];

  setCoins(coins: Coins) {
    this.coins = coins;
  }

  getTotalAmount() {
    return this.coins.reduce(
      (previous, coin, index) => (previous += coin * COIN_TYPE[index]),
      0
    );
  }
}

export default new VendingMachineCharge();
