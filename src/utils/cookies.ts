import cookie from 'react-cookies';
import { objectType } from 'types';

export const getAllCookies = () => cookie.loadAll();

export const selectCookies = (regex: string) => cookie.select(regex);

export const getCookie = (key: string) => cookie.load(key);

export const setCookie = (
  key: string,
  value: string,
  options: objectType = { path: '/' },
) => cookie.save(key, value, options);

export const removeCookie = (
  key: string,
  options: objectType = { path: '/' },
) => cookie.remove(key, options);
