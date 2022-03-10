import axios from 'axios';
import { API_URL } from 'constants/routes';
import formMaker from 'utils/formMaker';

type loginProps = {
  email: string;
  password: string;
};
export const authLoginService = ({ email, password }: loginProps) => {
  const bodyFormData = formMaker({ email, password });
  axios({
    method: 'post',
    url: API_URL.LOGIN,
    data: bodyFormData,
    headers: { 'Content-Type': 'multipart/form-data' },
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

type registerProps = {
  username: string;
  email: string;
  password: string;
};
export const authRegisterService = ({ username, email, password }: registerProps) => {
  const bodyFormData = formMaker({ username, email, password });

  axios({
    method: 'post',
    url: API_URL.REGISTER,
    data: bodyFormData,
    headers: { 'Content-Type': 'multipart/form-data' },
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
