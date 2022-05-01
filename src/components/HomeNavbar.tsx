import { APP_URL } from 'constants/routes';
import React from 'react';
import { NavLink } from 'react-router-dom';

const HomeNavbar = () => {
  return (
    <div className="container mx-auto">
      <nav className="flex justify-between p-4">
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
              <button className="bg-transparent text-black">Login</button>
            </NavLink>
          </li>
          <li>
            <NavLink to={APP_URL.REGISTER}>
              <button>Register</button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomeNavbar;
