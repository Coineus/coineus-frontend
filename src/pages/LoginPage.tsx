import AuthTemplate from 'components/templates/AuthTemplate';
import { LOCAL_KEYS } from 'constants/keys';
import { APP_URL } from 'constants/routes';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authLoginService } from 'services/auth';

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const loginClick = () => {
    setError('');
    authLoginService({ email, password }).then((res) => {
      if (res.data) {
        localStorage.setItem(LOCAL_KEYS.TOKEN, res.data.token);
        navigate(APP_URL.HOME);
      } else {
        setError(res.error);
      }
    });
  };

  return (
    <AuthTemplate>
      <div className="mt-12">
        <h1 className="text-4xl font-bold mb-8">
          Login in <span className="text-primary">Coineus</span>
        </h1>
        <div className="border-ghost rounded-xl bg-white w-96 pr-4 mb-6">
          <label className="mb-1" htmlFor="mail">
            Email
          </label>
          <input
            id="mail"
            className="mb-3"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <label className="mb-1" htmlFor="mail">
            Password
          </label>
          <input
            className="mb-5"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <div className="w-full flex">
            <button onClick={loginClick}>Login</button>
          </div>
          <p className="text-red-500 text-center my-2">{error}</p>
        </div>
        <div>
          <p className="font-semibold text-center">
            {"Don't have an account?"} <Link to={APP_URL.REGISTER}>Register</Link>
          </p>
        </div>
      </div>
    </AuthTemplate>
  );
};

export default LoginPage;
