export const $ = <T extends Element>(
  selector: string,
  element: Element | Document = document
) => element.querySelector<T>(selector);
export const $$ = <T extends Element>(
  selector: string,
  element: Element | Document = document
) => element.querySelectorAll<T>(selector);
