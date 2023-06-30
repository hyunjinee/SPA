import { render } from '../components';

export const handleLinkClick = (event: MouseEvent) => {
  const $anchor = (event.target as HTMLElement).closest('a');

  if ($anchor === null) {
    return;
  }

  event.preventDefault();

  const { pathname } = $anchor;

  go(pathname);
};

export const go = (pathname: string) => {
  addPathnameToBrowserHistory(pathname);
  render(pathname);
};

const addPathnameToBrowserHistory = (pathname: string) => {
  if (!isChangedPathname(pathname)) {
    return;
  }

  window.history.pushState(null, '', pathname);
};

const isChangedPathname = (pathname: string) => {
  return window.location.pathname !== pathname;
};
