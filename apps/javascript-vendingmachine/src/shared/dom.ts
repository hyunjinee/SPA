export const $ = (selector: string, element: Element | Document = document) =>
  element.querySelector(selector);
export const $$ = (selector: string, element: Element | Document = document) =>
  element.querySelectorAll(selector);

export const getInnerInputValues = ($target) => {
  const $$inputs = Array.from($$('input', $target)) as HTMLInputElement[];
  return $$inputs.reduce((previous, inputElement) => {
    previous[inputElement.name] =
      inputElement.type === 'number'
        ? Number(inputElement.value)
        : inputElement.value;
    return previous;
  }, {});
};

export const showSnackbar = (message: string) => {
  const $snackBar = $('.snackbar') as HTMLDivElement;
  $snackBar.innerText = message;
  $snackBar.classList.toggle('show');

  let start = null;

  const animation = (timeStamp: number) => {
    if (!start) {
      start = timeStamp;
      const progress = timeStamp - start;

      if (progress < 3000) {
        if (progress < 500) {
          $snackBar.style.opacity = `${progress / 500}`;
          $snackBar.style.transform = `translateY(calc(100% - ${
            (progress / 500) * 150
          }%))`;
        } else if (progress < 2500) {
          $snackBar.style.opacity = '1';
          $snackBar.style.transform = 'translateY(-50%)';
        } else {
          $snackBar.style.opacity = `1 - (progress - 2500) / 500`;
          $snackBar.style.transform = `translateY(calc(-50% + ${
            ((progress - 2500) / 500) * 150
          }%))`;
        }
      }
      window.requestAnimationFrame(animation);
    } else {
      $snackBar.classList.toggle('show');
      $snackBar.style.opacity = '';
      $snackBar.style.transform = '';
    }
  };
  window.requestAnimationFrame(animation);
};
