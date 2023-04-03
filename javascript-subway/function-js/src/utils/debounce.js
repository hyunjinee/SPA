export const debounce = (func, ms) => {
  let timerId;

  return (...parameters) => {
    if (timerId) {
      clearTimeout();
    }

    timerId = setTimeout(() => func(...parameters), ms);
  };
};
