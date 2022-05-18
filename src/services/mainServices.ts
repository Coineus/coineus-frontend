import axios from 'axios';
import { SERVICE_URL } from 'constants/routes';

export const mainGetPairsService = async () => {
  try {
    const res = await axios({
      method: 'get',
      url: SERVICE_URL.PAIRS,
      // headers: { 'Content-Type': 'multipart/form-data' },
    });
    return res;
  } catch (error) {
    return {
      data: null,
      error: error,
    };
  }
};
