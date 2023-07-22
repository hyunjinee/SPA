const API_ENDPOINT =
  'https://q9d70f82kd.execute-api.ap-northeast-2.amazonaws.com/dev';

const request = async (url) => {
  try {
    const result = await fetch(url);
    if (result.status < 300) return await result.json();
    else if (result.status < 400) {
      console.warn(`Redirection Error Code ${result.status}`);
      return {
        error: true,
        message: `Redirection Error Code ${result.status}`,
        status: result.status,
      };
    } else if (result.status < 500) {
      console.warn(`Client Error Code ${result.status}`);
      return {
        error: true,
        message: `Client Error Code ${result.status}`,
        status: result.status,
      };
    } else if (result.status < 600) {
      console.warn(`Server Error Code ${result.status}`);
      return {
        error: true,
        message: `Server Error Code ${result.status}`,
        status: result.status,
      };
    }
  } catch (error) {
    console.warn(error);
    return {
      error: true,
      message: error.message,
      status: error.status,
    };
  }
};

export const api = {
  fetchCats: (keyword) => {
    return fetch(`${API_ENDPOINT}/api/cats/search?q=${keyword}`).then((res) =>
      res.json()
    );
  },
  fetchRandomCats: () => {
    return request(`${API_ENDPOINT}/api/cats/random50`);
  },
  fetchCatDetails: async (id) => {
    return request(`${API_ENDPOINT}/api/cats/${id}`);
  },
};
