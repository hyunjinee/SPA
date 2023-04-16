export default class Error {
  constructor({ $target }) {
    this.$target = $target;
    this.errorData = null;
    this.render();
  }

  setState(nextData) {
    this.errorData = nextData;
    this.render();
  }

  render() {
    if (!this.errorData) {
      return;
    }

    this.$target.innerHTML = '';
    const errorSection = document.createElement('section');
    errorSection.className = 'error-section';

    const errorImage = document.createElement('img');
    errorImage.className = 'error-image';
    errorImage.src = '/squarecat.jpg';

    const statusCode = document.createElement('p');
    statusCode.className = 'status-code';
    statusCode.innerText = this.errorData.status;

    const errorMessage = document.createElement('p');
    errorMessage.className = 'error-message';
    errorMessage.innerText = this.errorData.message;

    const returnButton = document.createElement('p');
    returnButton.className = 'return-btn';
    returnButton.innerText = '돌아가기';

    returnButton.addEventListener('click', () => {
      location.reload();
    });

    this.$target.append(errorSection);
    errorSection.append(errorImage, statusCode, errorMessage, returnButton);
  }
}
