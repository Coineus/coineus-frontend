import axios from 'axios';
import { LOCAL_KEYS } from 'constants/keys';
import { API_URL } from 'constants/routes';

export const getCurrentUser = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: API_URL.GET_CURRENT_USER,
      headers: {
        'Content-Type': 'multipart/form-data',
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
