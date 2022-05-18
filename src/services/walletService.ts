import axios from 'axios';
import { LOCAL_KEYS } from 'constants/keys';
import { API_URL } from 'constants/routes';

export const walletGetAll = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: API_URL.GET_ALL_WALLET,
      data: JSON.stringify({ userid: localStorage.getItem(LOCAL_KEYS.USER_ID) }),
      headers: {
        'Content-Type': 'application/json; utf-8',
        Authorization: 'Bearer ' + localStorage.getItem(LOCAL_KEYS.TOKEN),
      },
    });
    return res.data;
  } catch (error) {
    return {
      data: null,
      error: error,
    };
  }
};

export const walletAdd = async ({ name }: { name: string }) => {
  try {
    const res = await axios({
      method: 'POST',
      url: API_URL.ADD_WALLET,
      data: JSON.stringify({
        userid: localStorage.getItem(LOCAL_KEYS.USER_ID),
        name: name,
      }),
      headers: {
        'Content-Type': 'application/json; utf-8',
        Authorization: 'Bearer ' + localStorage.getItem(LOCAL_KEYS.TOKEN),
      },
    });
    return res.data;
  } catch (error) {
    return {
      data: null,
      error: error,
    };
  }
};

export const walletGetOperationsById = async ({ id }: { id: string }) => {
  try {
    const res = await axios({
      method: 'POST',
      url: API_URL.GET_WALLET_OPERATIONS,
      data: JSON.stringify({
        userid: localStorage.getItem(LOCAL_KEYS.USER_ID),
        walletid: id,
      }),
      headers: {
        'Content-Type': 'application/json; utf-8',
        Authorization: 'Bearer ' + localStorage.getItem(LOCAL_KEYS.TOKEN),
      },
    });
    return res.data;
  } catch (error) {
    return {
      data: null,
      error: error,
    };
  }
};
