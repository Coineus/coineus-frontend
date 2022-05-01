import axios from 'axios';
import { API_URL } from 'constants/routes';
import formMaker from 'utils/formMaker';

type loginProps = {
  email: string;
  password: string;
};
export const authLoginService = async ({ email, password }: loginProps) => {
  const bodyFormData = formMaker({ email, password });

  try {
    const res = await axios({
      method: 'post',
      url: API_URL.LOGIN,
      data: bodyFormData,
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return res;
  } catch (error) {
    return {
      data: null,
      error: error,
    };
  }
};

type registerProps = {
  username: string;
  email: string;
  password: string;
};
export const authRegisterService = async ({
  username,
  email,
  password,
}: registerProps) => {
  const bodyFormData = formMaker({ username, email, password });

  try {
    const res = await axios({
      method: 'post',
      url: API_URL.REGISTER,
      data: bodyFormData,
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return res;
  } catch (error) {
    return {
      data: null,
      error: error,
    };
  }
};
