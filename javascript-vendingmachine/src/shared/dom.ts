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
