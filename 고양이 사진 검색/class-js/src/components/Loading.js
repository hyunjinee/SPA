export default class Loading {
  constructor({ $target }) {
    this.$loadingWrapper = document.createElement('div');
    this.$loadingWrapper.classList.add('LoadingWrapper');
    this.$loadingWrapper.classList.add('hidden');

    $target.append(this.$loadingWrapper);
    this.render();
  }

  toggleLoading() {
    const target = document.querySelector('.LoadingWrapper');
    target.classList.toggle('hidden');
  }

  show() {
    const target = document.querySelector('.LoadingWrapper');
    target.classList.remove('hidden');
  }

  hide() {
    const target = document.querySelector('.LoadingWrapper');
    target.classList.add('hidden');
  }

  destory() {
    this.$loadingWrapper.remove();
  }

  render() {
    this.$loadingWrapper.innerText = '로딩중';
    this.$loadingWrapper.addEventListener('click', this.toggleLoading);
  }
}
