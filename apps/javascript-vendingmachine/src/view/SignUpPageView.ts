import { $, getInnerInputValues, showSnackbar } from '../shared/dom';
import { pageTemplate } from './template';

class SignUpPageView {
  loadPage = () => {
    $('.main').innerHTML = pageTemplate.signUpPage;
    $('#signup-form').addEventListener('submit', this.onSubmitSignUpForm);
  };

  onSubmitSignUpForm = (event: Event) => {
    event.preventDefault();

    const { email, name, password, passwordConfirm } = getInnerInputValues(
      event.target
    ) as any;

    showSnackbar('hi');
  };
}

export default new SignUpPageView();
