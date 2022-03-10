import { Button, Container } from '@nextui-org/react';
import { APP_URL } from 'constants/routes';
import React from 'react';
import { NavLink } from 'react-router-dom';

const HomeNavbar = () => {
  return (
    <Container>
      <nav className="flex justify-between">
        <ul className="ml-0">
          <li className="text-2xl font-bold">
            <NavLink to={APP_URL.HOME} className="text-primary">
              Coineus
            </NavLink>
          </li>
        </ul>
        <ul className="flex gap-x-4 mr-0">
          <li>
            <NavLink to={APP_URL.LOGIN}>
              <Button light auto>
                Login
              </Button>
            </NavLink>
          </li>
          <li>
            <NavLink to={APP_URL.REGISTER}>
              <Button auto>Register</Button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default HomeNavbar;
