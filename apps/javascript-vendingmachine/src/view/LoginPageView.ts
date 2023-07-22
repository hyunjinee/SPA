import { SignInfo, login } from '../shared/auth';
import { $, getInnerInputValues } from '../shared/dom';
import { pageTemplate } from './template';

class LoginPageView {
  loadPage = () => {
    $('.main').innerHTML = pageTemplate.loginPage;
    $('#login-form').addEventListener('submit', this.onSubmitLoginForm);
  };

  onSubmitLoginForm = (event: Event) => {
    event.preventDefault();
    const loginInfo = getInnerInputValues(event.target);
    login(loginInfo as SignInfo);
    console.log('?');
  };
}

export default new LoginPageView();
