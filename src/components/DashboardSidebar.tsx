import { APP_URL } from 'constants/routes';
import React from 'react';
import { Category } from 'react-iconly';
import { NavLink } from 'react-router-dom';

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
  const NAVS = [
    {
      link: APP_URL.HOME,
      icon: <Category set="bold" />,
      title: 'Dashboard',
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
            <li key={nav.title}>
              <NavItem active={true} link={nav.link}>
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
