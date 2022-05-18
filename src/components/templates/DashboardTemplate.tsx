import DashboardSidebar from 'components/DashboardSidebar';
import { LOCAL_KEYS } from 'constants/keys';
import { APP_URL } from 'constants/routes';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardTemplate = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem(LOCAL_KEYS.TOKEN)) {
      navigate(APP_URL.LOGIN);
    }
  }, []);

  return (
    <div className="flex">
      <DashboardSidebar />
      <main className="flex-1">
        <div className="container mx-auto">
          <div className="mt-6">
            <h2 className="font-bold text-3xl mb-6 px-6">{title}</h2>
            <div className="px-6">{children}</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardTemplate;
