export const getItem = (key: string) => {
  const value = sessionStorage.getItem(key);
  return value === null ? [] : JSON.parse(value);
};

export const setItem = (key: string, value: object) => {
  if (value === null || value === undefined) return;
  const toJson = JSON.stringify(value);
  sessionStorage.setItem(key, toJson);
};
