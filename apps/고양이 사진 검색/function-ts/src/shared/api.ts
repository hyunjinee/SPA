const API_ENDPOINT =
  'https://q9d70f82kd.execute-api.ap-northeast-2.amazonaws.com/dev';

const request = async (url: string) => {
  try {
    const result = await fetch(url);
    return await result.json();
  } catch (error) {
    // console.warn(error);
    // return {
    //   error: true,
    //   message: error.message,
    //   status: error.status,
    // };
  }
};
export const api = {
  fetchCats: async (keyword: string) => {
    return await request(`${API_ENDPOINT}/api/cats/search?q=${keyword}`);
  },
  fetchRandomCats: async () => {
    return request(`${API_ENDPOINT}/api/cats/random50`);
  },
  fetchCatDetails: async (id: string) => {
    return request(`${API_ENDPOINT}/api/cats/${id}`);
  },
};
