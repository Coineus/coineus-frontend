import { Button, Input, Spacer } from '@nextui-org/react';
import AuthTemplate from 'components/templates/AuthTemplate';
import { APP_URL } from 'constants/routes';
import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <AuthTemplate>
      <div className="mt-12">
        <h1 className="text-4xl font-bold mb-8">
          Register in <span className="text-primary">Coineus</span>
        </h1>
        <div className="border rounded-xl shadow-md bg-white w-96 p-6">
          <Input fullWidth label="Email" type="email" />
          <Spacer y={1} />
          <Input.Password fullWidth label="Password" />
          <Spacer y={1} />
          <Input.Password fullWidth label="Repeat Your Password" />
          <Spacer y={1} />
          <div className="w-full flex">
            <Button css={{ width: '100%' }}>Register</Button>
          </div>
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

export default LoginPage;
