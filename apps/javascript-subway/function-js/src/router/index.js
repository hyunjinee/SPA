import { render, renderContent } from '../components/index.js';

export const handleWindowPopstate = ({ target }) => {
  const { pathname } = target.location;

  renderContent(pathname);
};

export const goTo = (pathname) => {
  render(pathname);
};

export const addPathnmaeToBrowserHistory = (pathname) => {
  window.history.pushState(null, null, pathname);
};

// export const isDifferentOrigin(targetOrigin) {
//   return window.location.origin !== targetOrigin
// }

const isPathnameChanged = (pathname) => {
  return window.location.pathname !== pathname;
};
