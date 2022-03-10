import { Container } from '@nextui-org/react';
import DashboardSidebar from 'components/DashboardSidebar';
import React from 'react';

const DashboardTemplate = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="flex">
      <DashboardSidebar />
      <main className="flex-1">
        <Container>
          <div className="mt-6">
            <h2 className="font-bold text-3xl mb-6">{title}</h2>
            <div>{children}</div>
          </div>
        </Container>
      </main>
    </div>
  );
};

export default DashboardTemplate;
