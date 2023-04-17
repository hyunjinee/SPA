import { $ } from './dom';
import User from '../state/User';
import HeaderView from '../view/HeaderView';
import LoginPageView from '../view/LoginPageView';
import SignUpPageView from '../view/SignUpPageView';
import UpdateMyInfoPageView from '../view/UpdateMyInfoPageView';
import ProductPurchasePageView from '../view/ProductPurchasePageView';
import ProductManagementPageView from '../view/ProductManagementPageView';
import VendingMachineChargeManagementPageView from '../view/VendingMachineChargeManagementPageView';

const loadPageMethods = {
  login: LoginPageView.loadPage,
  signUp: SignUpPageView.loadPage,
  updateMyInfo: UpdateMyInfoPageView.loadPage,
  productManagement: ProductManagementPageView.loadPage,
  vendingMachineChargeManagement:
    VendingMachineChargeManagementPageView.loadPage,
  productPurchase: ProductPurchasePageView.loadPage,
};

const path = location.pathname;
console.log(path);

export const loadPage = (page: string) => {
  HeaderView.updateOnPageChange(page);
  loadPageMethods[page]();

  const paramsObject = { page };
  const params = new URLSearchParams(paramsObject);
  history.pushState(paramsObject, '', `${path}?${params.toString()}`);
};

export const loadMainPage = () => {
  const mainPage = User.isMember ? 'productManagement' : 'productPurchase';
  loadPage(mainPage);
};

export const loadCurrentPage = () => {
  const currentParams = new URL(location.href).searchParams;
  console.log(currentParams);
  const currentPage = currentParams.get('page');

  if (currentPage) {
    loadPage(currentPage);
    return;
  }

  loadMainPage();
};

export const initRouteEvent = () => {
  $('#app').addEventListener('click', (event) => {
    if (!(event.target instanceof HTMLElement)) {
      return;
    }

    const { page } = event.target.dataset;
    if (!page) {
      return;
    }

    if (page === 'main') {
      loadMainPage();
      return;
    }

    loadPage(page);
  });
};
