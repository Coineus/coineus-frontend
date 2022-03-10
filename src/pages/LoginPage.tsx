import { Button, Input, Spacer } from '@nextui-org/react';
import AuthTemplate from 'components/templates/AuthTemplate';
import { APP_URL } from 'constants/routes';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { authLoginService } from 'services/auth';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginClick = () => {
    authLoginService({ email, password });
  };

  return (
    <AuthTemplate>
      <div className="mt-12">
        <h1 className="text-4xl font-bold mb-8">
          Login in <span className="text-primary">Coineus</span>
        </h1>
        <div className="border-ghost rounded-xl bg-white w-96 p-6">
          <Input
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            label="Email"
            type="email"
          />
          <Spacer y={1} />
          <Input.Password
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            label="Password"
          />
          {/* <div className="flex justify-end">
            <Link className="font-semibold text-xs mt-2" to={APP_URL.FORGOT_PASSWORD}>
              Forgot Password
            </Link>
          </div> */}
          <Spacer y={1} />
          <div className="w-full flex">
            <Button onClick={loginClick} css={{ width: '100%' }}>
              Login
            </Button>
          </div>
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
