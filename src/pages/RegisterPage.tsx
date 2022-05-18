import AuthTemplate from 'components/templates/AuthTemplate';
import { LOCAL_KEYS } from 'constants/keys';
import { APP_URL } from 'constants/routes';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authRegisterService } from 'services/auth';

const RegisterPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const registerClick = () => {
    setError('');
    if (username.length < 4) {
      setError('Username must be at least 4 characters');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    // if (/\S+@\S+\.\S+/.test(email)) {
    //   setError('Email must be in the correct format. For example : test@example.com');
    //   return;
    // }

    authRegisterService({ email, password, username }).then((res) => {
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
          Register in <span className="text-primary">Coineus</span>
        </h1>
        <div className=" bg-white w-96 pr-4 mb-6">
          <label className="mb-1" htmlFor="username">
            Username
          </label>
          <input
            minLength={4}
            onChange={(e) => setUsername(e.target.value)}
            id="username"
            type="text"
            className="mb-3"
          />
          <label className="mb-1" htmlFor="email">
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="mb-3"
            id="email"
            type="email"
          />
          <label className="mb-1" htmlFor="password">
            Password
          </label>
          <input
            minLength={8}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-3"
            id="password"
          />
          <div className="w-full flex">
            <button onClick={registerClick}>Register</button>
          </div>
          <p className="text-red-500 text-center my-2">{error}</p>
        </div>
        <div>
          <p className="font-semibold text-center">
            {'Already have an account?'} <Link to={APP_URL.LOGIN}>Login</Link>
          </p>
        </div>
      </div>
    </AuthTemplate>
  );
};

export default RegisterPage;
