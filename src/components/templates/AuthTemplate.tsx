import HomeNavbar from 'components/HomeNavbar';
import React from 'react';

const AuthTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <HomeNavbar />
      <main>
        <div className="container mx-auto">
          <div className="flex justify-center items-center">
            <div>{children}</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AuthTemplate;
