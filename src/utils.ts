const getLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);
  return data && JSON.parse(data);
};

const setLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const removeLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

export const getUserId = () => {
  return getLocalStorage('user_id');
};

export const setUserId = (value: string) => {
  setLocalStorage('user_id', value);
};

export const logOutUser = () => {
  removeLocalStorage('user_id');
};
