const API_BASE_URL = import.meta.env.API_BASE_URL
  ? import.meta.env.API_BASE_URL
  : 'http://3.72.108.27:80/';
const SERVICE_BASE_URL = import.meta.env.SERVICE_BASE_URL
  ? import.meta.env.SERVICE_BASE_URL
  : 'http://3.72.108.27:36000/';
export const WS_BASE_URL = import.meta.env.WS_BASE_URL
  ? import.meta.env.WS_BASE_URL
  : 'ws://3.72.108.27:36000';

export const APP_URL = {
  HOME: '/',
  WALLET: '/wallet',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  VERSION: '/version',
};

export const API_URL = {
  LOGIN: API_BASE_URL + 'login',
  REGISTER: API_BASE_URL + 'register',
  ADD_OPERATION: API_BASE_URL + 'operations/add',
  ARCHIVE_OPERATION: API_BASE_URL + 'archivedoperations/add',
  DELETE_OPERATION: API_BASE_URL + 'operations/delete',
  GET_ALL_OPERATIONS: API_BASE_URL + 'operations/getall',
  GET_CURRENT_USER: API_BASE_URL + 'users/getcurrentuser',
  GET_ALL_WALLET: API_BASE_URL + 'wallets/getall',
  ADD_WALLET: API_BASE_URL + 'wallets/add',
  DELETE_WALLET: API_BASE_URL + 'wallets/delete',
  GET_WALLET_OPERATIONS: API_BASE_URL + 'walletoperations/getall',
};

export const SERVICE_URL = {
  PAIRS: SERVICE_BASE_URL + 'coins',
};
