import { $ } from '../utils/dom';
import { pageTemplate } from './template';

class SignUpPageView {
  loadPage = () => {
    $('.main').innerHTML = pageTemplate.signUpPage;
  };
  onSubmitSignUpForm = (event) => {};
}

export default new SignUpPageView();
