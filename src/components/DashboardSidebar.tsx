import { APP_URL } from 'constants/routes';
import React from 'react';
import { Category, Wallet } from 'react-iconly';
import { NavLink, useLocation } from 'react-router-dom';

type NavItemProps = {
  children: React.ReactNode;
  link: string;
  active: boolean;
};

const NavItem = ({ link, children, active }: NavItemProps) => {
  return (
    <NavLink
      className={
        'flex font-semibold py-3 px-4 rounded-2xl ' + (active ? 'bg-active' : '')
      }
      to={link}
    >
      {children}
    </NavLink>
  );
};

const DashboardSidebar = () => {
  const location = useLocation();

  const NAVS = [
    {
      link: APP_URL.HOME,
      icon: <Category set="bold" />,
      title: 'Dashboard',
    },
    {
      link: APP_URL.WALLET,
      icon: <Wallet set="bold" />,
      title: 'Wallet',
    },
  ];

  return (
    <div className="bg-white p-4 h-full min-h-screen w-52 border-r">
      <nav>
        <ul>
          <li className="text-3xl font-bold mb-12">
            <NavLink to={APP_URL.HOME} className="text-primary">
              Coineus
            </NavLink>
          </li>
          {NAVS.map((nav) => (
            <li className="mb-2" key={nav.title}>
              <NavItem active={location.pathname === nav.link} link={nav.link}>
                {nav.icon}
                <span className="ml-2">{nav.title}</span>
              </NavItem>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default DashboardSidebar;
