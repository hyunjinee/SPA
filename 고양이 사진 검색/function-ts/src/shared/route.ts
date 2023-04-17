import { api } from './api';
import { WEBSITE_NAME } from './constants';
import { renderSearchInput } from '../components/SearchInput';
import { renderSearhResult } from '../components/SearchResult';

export const render = async () => {
  renderTitle();
  renderSearchInput();

  try {
    const { data } = await api.fetchRandomCats();
    renderSearhResult(data);
  } catch (error) {
    // 검색 결과 없이 렌더링
    renderSearhResult();
  }
};

export const renderTitle = () => {
  document.title = WEBSITE_NAME;
};
