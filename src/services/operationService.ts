import axios from 'axios';
import { LOCAL_KEYS } from 'constants/keys';
import { API_URL } from 'constants/routes';

type operationAddProps = {
  userid: string;
  coinsymbol: string;
  coinamount: number;
  buycost: number;
};

export const operationAdd = async ({
  userid,
  buycost,
  coinamount,
  coinsymbol,
}: operationAddProps) => {
  try {
    const res = await axios({
      method: 'POST',
      url: API_URL.ADD_OPERATION,
      data: JSON.stringify({ userid, buycost, coinamount, coinsymbol }),
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

type operationDeleteProps = {
  userid: string;
  coinsymbol: string;
};

export const operationDelete = async ({ userid, coinsymbol }: operationDeleteProps) => {
  try {
    const res = await axios({
      method: 'POST',
      url: API_URL.DELETE_OPERATION,
      data: JSON.stringify({ userid, coinsymbol }),
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

export const operationArchive = async ({ userid, coinsymbol }: operationDeleteProps) => {
  try {
    const res = await axios({
      method: 'POST',
      url: API_URL.ARCHIVE_OPERATION,
      data: JSON.stringify({ userid, coinsymbol }),
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

export const operationGetAll = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: API_URL.GET_ALL_OPERATIONS,
      headers: {
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
