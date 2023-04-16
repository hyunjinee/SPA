interface SignInfo {
  email: string;
  password: string;
  name?: string;
}

interface AuthInfo {
  accessToken: string;
  id: number;
  expiration: number;
}

const devURL = 'http://localhost:3000';

const currentAuthServer = devURL;

const signUpURL = `${currentAuthServer}signup/`;
const loginURL = `${currentAuthServer}login/`;
const userInfoURL = (id) => `${currentAuthServer}600/users/${id}`;

export const signUp = async (signInfo: SignInfo) => {
  const response = await fetch(`${currentAuthServer}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(signInfo),
  });
  const data = await response.json();
  return data;
};

export const getSavedAuthInfo = () => {
  const emptyAuthInfo: AuthInfo = {
    accessToken: '',
    id: -1,
    expiration: -1,
  };
  let userAuth: AuthInfo;

  try {
    userAuth = JSON.parse(localStorage.getItem('userAuth')) || emptyAuthInfo;
  } catch (error) {
    console.error();
    return emptyAuthInfo;
  }

  if (userAuth.expiration < Date.now()) {
    localStorage.removeItem('userAuth');
    return emptyAuthInfo;
  }

  return userAuth;
};

export const requestUserInfo = async (userAuth: AuthInfo) => {
  const { id } = userAuth;
  const accessToken = `Bearer ${userAuth.accessToken}`;

  try {
    const response = await fetch(userInfoURL(id), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken,
      },
    });

    if (!response.ok) {
      const message = await response.text();
      throw new Error(message.slice(1, -1));
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('에러', error.message);
  }
  // return fetch(userInfoURL(id), {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Authorization: accessToken,
  //   },
  // }).then((res) => {
  //   if (!res.ok) {

  //   }
  // });
};
