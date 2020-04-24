export const SetLocalStorageItem = (key, value) => {
  if ( key ) localStorage.setItem(key, value);
};
export const GetLocalStorageItem = (key) => localStorage.getItem(key);

export const RemoveLocalStorageItem = (key) => localStorage.removeItem(key);

export default {
  SetLocalStorageItem,
  GetLocalStorageItem,
  RemoveLocalStorageItem
};
