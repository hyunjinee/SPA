import { $ } from '../shared/dom';
import { pageTemplate } from './template';
import ProductManagementPageManager from '../manager/ProductManagementPageManager';

class ProductPurchasePageView {
  renderMethodList;
  $customerChargeForm: HTMLFormElement;
  $productTableSection: HTMLElement;
  $productTable: HTMLTableElement;

  isTableUpdating: boolean;

  constructor() {
    ProductManagementPageManager.addSubscriber(this.render);

    this.isTableUpdating = false;
  }

  loadPage() {
    $('main').innerHTML = pageTemplate.productPurchasePage;
    // this.setDOM();
    // this.render();
    // this.setEvents();
  }

  setDOM() {
    // this.$customerChargeForm = $('#customer-charge-form') as HTMLFormElement;
    // this.$productTableSection = $('#product-table-section') as HTMLElement;
    // this.$productTable = $('#product-table') as HTMLTableElement;
    // this.$changeTableSection = $('#change-table-section');
    // this.$changeTable = $('#change-table', this.$changeTableSection);
    // this.$returnChangeButton = $(
    //   '#return-change-button',
    //   this.$changeTableSection
    // );
  }

  setEvents() {
    this.$customerChargeForm.addEventListener(
      'submit',
      this.onSubmitCustomerChargeForm
    );
  }

  onSubmitCustomerChargeForm(event) {
    event.preventDefault();
  }

  onClickReturnChangeButton() {
    const coinsToBeReturned = ProductManagementPageManager;
  }

  render() {
    // const renderMehtods
  }
}

export default new ProductPurchasePageView();
