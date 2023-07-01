const API_ENDPOINT = 'https://q9d70f82kd.execute-api.ap-northeast-2.amazonaws.com/dev';

const request = async (url: string) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.warn(error);
  }
};

export const api = {
  fetchCats: (keyword: string) => {
    return fetch(`${API_ENDPOINT}/api/cats/search?q=${keyword}`).then((res) => res.json());
  },
  fetchRandomCats: () => {
    return request(`${API_ENDPOINT}/api/cats/random50`);
  },
  fetchCatDetails: async (id: string) => {
    return request(`${API_ENDPOINT}/api/cats/${id}`);
  },
};
