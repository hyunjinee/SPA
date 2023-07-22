export const getItem = (key) => {
  const value = sessionStorage.getItem(key);
  if (key === 'data') return value === null ? null : JSON.parse(value);
  else return value === null ? [] : JSON.parse(value);
};

export const setItem = (key, value) => {
  if (value === null || value === undefined) return;
  const toJson = JSON.stringify(value);
  sessionStorage.setItem(key, toJson);
};
