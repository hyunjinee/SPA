// export const go = (path: string) => {
//   // window.history.pushState(null, '', path);
//   render();
// };

import { renderSearchInput } from '../components/SearchInput';
import { renderSearhResult } from '../components/SearchResult';
import { WEBSITE_NAME } from './constants';

export const render = () => {
  renderTitle();
  renderSearchInput();
  renderSearhResult();
};

export const renderTitle = () => {
  document.title = WEBSITE_NAME;
};
