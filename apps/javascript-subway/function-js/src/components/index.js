import { $ } from '../utils/DOM.js';
import { PATHNAMES } from '../../../shared/constants/pathnames.js';

const $header = $('header');
const $main = $('main');

const renderContents = {
  [PATHNAMES.HOME]: renderOverview,
  // [PATHNAMES.OVERVIEW]: renderOverview,
  // [PATHNAMES.STATIONS]: renderStations,
  // [PATHNAMES.LINES]: renderLines,
  // [PATHNAMES.SECTIONS]: renderSections,
  // [PATHNAMES.LOGIN]: renderLogin,
  // [PATHNAMES.SIGN_UP]: renderSignUp,
  // [PATHNAMES.LOGOUT]: renderHome,
};

const contents = {};

const renderTitle = (pathname) => {};
export const renderContent = (pathname) => {
  renderContents[pathname]($main);
};
export const render = (pathname) => {
  renderTitle(pathname);
  console.log('?');
  renderContent(pathname);
};
