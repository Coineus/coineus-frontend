import { Container } from '@nextui-org/react';
import HomeNavbar from 'components/HomeNavbar';
import React from 'react';

const AuthTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <HomeNavbar />
      <main>
        <Container>
          <div className="flex justify-center items-center">
            <div>{children}</div>
          </div>
        </Container>
      </main>
    </div>
  );
};

export default AuthTemplate;
