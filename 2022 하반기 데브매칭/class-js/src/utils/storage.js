import new_data from '../data/new_data.js';

const personalInfoToken = 'personalInfo';
const cardStatusToken = 'cardStatus';

export const setPersonalInfo = async () => {
  const data = await Promise.resolve(new_data);
  if (!localStorage.getItem(personalInfoToken)) {
    localStorage.setItem(personalInfoToken, JSON.stringify(data));
  }
};

export const getPersonalInfos = () => {
  const data = JSON.parse(localStorage.getItem(personalInfoToken) || []);
  return data;
};

export const initCardStatus = () => {
  if (!localStorage.getItem(cardStatusToken)) {
    localStorage.setItem(cardStatusToken, JSON.stringify({}));
  }
};

export const getCardsStatus = () => {
  initCardStatus();
  return JSON.parse(localStorage.getItem(cardStatusToken));
};

export const setCardStatus = (idx, status) => {
  const currentStatus = getCardsStatus();
  localStorage.setItem(
    cardStatusToken,
    JSON.stringify({
      ...currentStatus,
      [idx]: status,
    })
  );
};

export const getCardsStatus = (idx) => {
  return getCardsStatus()[idx] ?? 'card';
};
