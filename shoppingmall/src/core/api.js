const API_END_POINT =
  'https://h6uc5l8b1g.execute-api.ap-northeast-2.amazonaws.com/dev/';

export const request = async (url, options = {}) => {
  try {
    const fullURL = `${API_END_POINT}${url}`;
    const response = await fetch(fullURL, options);

    if (response.ok) {
      const json = await response.json();
      return json;
    }

    throw new Error('API 통신 실패');
  } catch (error) {
    alert(error.message);
  }
};

export const getProductList = async () => {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
