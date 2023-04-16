import SearchInput from './components/SearchInput';
import Loading from './components/Loading';
import SearchResult from './components/SearchResult';
import ImageInfo from './components/ImagInfo';
import Error from './components/Error';
import { api } from './utils/api';
import { getItem, setItem } from './utils/storage';
import { $ } from './utils/dom';

export default class App {
  constructor($target) {
    this.$target = $target;

    this.keywords = getItem('keywords');
    this.data = getItem('data');

    this.$loader = new Loading({ $target });
    this.$error = new Error({ $target });
    this.$searchInput = new SearchInput({
      $target,
      keywords: this.keywords,
      onSearch: this.onSearch.bind(this),
      onRandom: this.onRandom.bind(this),
    });
    this.$searchResult = new SearchResult({
      $target,

      initialData: this.data,
      onClick: async (image) => {
        const { data } = await api.fetchCatDetails(image.id);
        this.$imageInfo.setState({
          visible: true,
          image: data,
        });
      },
    });
    this.$imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null,
      },
    });

    if (!this.data) {
      this.fetchRandomCats();
    }
  }

  async fetchRandomCats() {
    this.$loader.show();
    const response = await api.fetchRandomCats();
    if (response.error) {
      this.$error.setState(response);
    }
    if (!response.data) {
      return;
    }
    setItem('data', response.data);
    this.$searchResult.setState(response.data);
    this.$loader.hide();
  }

  async onSearch(keyword) {
    this.$loader.show();
    const response = await api.fetchCats(keyword);
    if (response.error) {
      this.$error.setState(response);
    }
    if (!response.data) {
      loader.hide();
      return;
    }
    setItem('data', response.data);
    this.$searchResult.setState(response.data);
    this.$loader.hide();
  }
  async onRandom() {
    this.$loader.show();
    const { data } = await api.fetchRandomCats();
    setItem('data', data);
    this.$searchResult.setState(data);
    this.$loader.hide();
  }
}
