import { $ } from '../utils/dom';
import { pageTemplate } from './template';

class LoginPageView {
  loadPage = () => {
    $('.main').innerHTML = pageTemplate.loginPage;
    $('#login-form').addEventListener('submit', this.onSubmitLoginForm);
  };

  onSubmitLoginForm = (event: Event) => {
    event.preventDefault();
  };
}

export default new LoginPageView();
