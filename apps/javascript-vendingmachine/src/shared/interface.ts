export interface UserInfo {
  isMember?: boolean;
  id: number;
  email: string;
  name: string;
}

export interface PageManagerMethods {
  addSubscriber(subscriber: object): void;
  setState(state: object): void;
  getState(): object;
}

export type Coins = Array<number>;

export interface ProductInfo {
  name: string;
  price: number;
  quantity: number;
}
