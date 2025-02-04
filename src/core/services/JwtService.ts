const ID_TOKEN_KEY = "id_token" as string;
const ACCESS_TOKEN_KEY = "access_token" as string;

/**
 * @description get token form localStorage
 */
export const getToken = (): string | null => {
  return window.sessionStorage.getItem(ID_TOKEN_KEY);
};

/**
 * @description save token into localStorage
 * @param token: string
 */
export const saveToken = (token: string): void => {
  window.sessionStorage.setItem(ID_TOKEN_KEY, token);
};

/**
 * @description get token form localStorage
 */
 export const getAccessToken = (): string | null => {
  return window.sessionStorage.getItem(ACCESS_TOKEN_KEY);
};

/**
 * @description save token into localStorage
 * @param token: string
 */
export const saveAccessToken = (token: string): void => {
  window.sessionStorage.setItem(ACCESS_TOKEN_KEY, token);
};

/**
 * @description remove token form localStorage
 */
export const destroyToken = (): void => {
  window.localStorage.removeItem(ID_TOKEN_KEY);
  window.localStorage.removeItem(ACCESS_TOKEN_KEY);
  window.sessionStorage.clear();
};

export default { getToken, saveToken, getAccessToken, saveAccessToken, destroyToken };
