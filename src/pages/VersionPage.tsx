import React from 'react';

const VersionPage = () => {
  return (
    <div className="text-center flex justify-center mt-16">
      <div className="font-bold text-2xl">
        <p>Version 1</p>
        <p>Kubernetes Test</p>
        <p>Pod Name: {import.meta.env.HOSTNAME}</p>
      </div>
    </div>
  );
};

export default VersionPage;
